---
title: LLMs for Builders：训练、推理与面向 Agent 的能力
lecture: 2
---

## 1. LLM 技术栈

![LLM 技术栈：越往上越接近产品，越往下越接近模型本身](/notes/cs329z/lecture-02/llm-stack.svg)


## 2. 语言模型是什么

语言模型为一串 token 计算概率：给定前文，下一个 token 是什么的概率分布。语言模型属于生成模型，因此可以从中采样，生成新的文本。

### 生成模型与判别模型

:::cards
- 判别模型 discriminative | 学习区分类别的边界。例子：逻辑回归、SVM
- 生成模型 generative | 学习数据本身的分布，可以生成新样本。例子：朴素贝叶斯、扩散模型、语言模型
:::

### 解码与采样

模型每一步输出一个概率分布，解码策略决定从中选哪个 token。

拖动下面的滑块，看看每种策略怎么改变候选 token，再点“抽一个 token”试试：

[[sampling-demo]]

:::cards
- Greedy | 每一步选概率最高的 token。简单，但只是局部最优
- Top-K | 只保留概率最高的 K 个，重新归一化后抽样，固定候选数量
- Top-P | 保留累积概率达到 P 的最小集合，候选数量随分布自适应
- Temperature | 调整分布的平滑程度：越接近 0 越接近 greedy，越高越随机
- Beam search | 同时保留 K 条候选序列比较累计分数；开销大，偏向常见、重复、较短的表达
:::

Top-K 和 Top-P 决定哪些 token 有资格被抽中，temperature 决定抽中的概率怎么分配。选哪种策略取决于任务和预算：数学和代码适合更确定的输出，创意写作适合更高的多样性。

## 3. 模型架构

### Transformer

Self-attention 让序列中任意两个位置直接交换信息。现在主流 LLM 多为 decoder-only 结构。

![Decoder-only Transformer：一个 block 由 attention 和 FFN 两个子层组成，堆叠 N 层](/notes/cs329z/lecture-02/decoder-only.svg)

:::cards
- 输入 | 文本切成 token，映射成向量（embedding），再加上位置编码
- Transformer block × N | Layer norm → 多头因果自注意力 → 残差相加 → Layer norm → FFN → 残差相加
- 输出 | LM head 投影到词表，softmax 得到下一个 token 的概率
:::

因果掩码让每个 token 只看见左边的内容；多个注意力头各自关注不同的关系，比如语义和语法。课件用的是 pre-norm 结构，每个子层之前先做 layer norm。

### 长上下文的成本

Full attention 的开销随上下文长度快速增长，常见的折中有四种：

:::cards
- Linear attention | 把历史压进固定大小的状态；更快，但长上下文表现变弱
- Sliding window | 只看附近一段窗口；远处的信息要层层传递
- Hybrid | 混用 full 与线性或窗口 attention，平衡效果和成本
- MLA | 压缩 K/V，减少 KV cache；课上以 Kimi K3 为例
:::

能用多长的上下文，还取决于位置编码和训练时的上下文长度。常用的测试是 needle-in-a-haystack：在长文里藏一条信息，看模型能否找到。

:::tip 设计 agent 时
要测三件事：能否在长材料中定位具体内容，能否把第 2 页和第 200 页联系起来，能否保留原始证据。
:::

## 4. 训练

### 损失函数

Loss 衡量模型预测与训练目标之间的差距。训练文本切成 token 后，用前面的 token 预测下一个（next-token prediction）。把模型给出的概率分布和真实的下一个 token（target token）比较，用交叉熵计算 loss：

```
L = − Σᵢ yᵢ · log(pᵢ)      i = 1 … V
```

V 是词表大小，y 是真实 token 的 one-hot 向量，p 是模型预测的概率。y 只在真实 token 处为 1，所以 loss 等于真实 token 预测概率的负对数。例如真实的下一个词是 “how”，模型给它的概率是 0.0124，loss 就是 −log(0.0124) ≈ 1.907（以 10 为底）。

### 三个训练阶段

![训练的三个阶段，以及预训练的数据处理流程](/notes/cs329z/lecture-02/training-stages.svg)

:::cards
- 预训练 Pretraining | 在大规模数据上做 next-token prediction，学习语言规律、知识和通用能力
- 中期训练 Midtraining | 调整数据配比、加入更多领域数据，强化目标领域并保留通用能力
- 后训练 Posttraining | 用 SFT、偏好学习、RLVR 等让模型听指令、有用、安全
:::

### 预训练数据处理

[[data-pipeline]]

规则过滤（heuristic cleaning）按长度、符号、格式等预设规则筛选；质量过滤去掉广告、垃圾评论和无意义文本；最后一步是基于模型的过滤（model-based filtering）。

数据配比（data mixing）决定不同来源的数据各占多少。课上介绍的方法分三步：

:::cards
- Swarm | 尝试多组不同比例，用小的代理模型（proxy model）分别训练，得到各自的表现
- Regression | 拟合回归模型，预测比例变化会怎样影响表现
- Optimization | 在可行的比例集合 S 中，找让预测损失最小的比例
:::

```
p* = argmin f̂(p),   p ∈ S
```

### 中期训练

领域强化预训练有两个好处：在目标领域泛化得更好，以及减少后续微调时的遗忘。微调某个领域时，反向传播和优化器会更新共享的参数，可能让模型在其他领域的能力下降。

### 后训练

:::cards
- Instruction fine-tuning | 用明确的指令和回答做监督微调（SFT）
- CoT fine-tuning | 用带中间解题步骤的答案训练，让模型学会分步推理
- RLHF | 从人类的偏好比较中学习，见下文
- RLVR | 用单元测试、证明检查、精确匹配等可客观检查的结果作为奖励，特别适合数学和代码；验证器要设计得足够严格
- Agent 专项训练 | 在真实环境中训练，如 SWE-smith：基于真实代码仓库搭环境，生成任务和新的任务实例
:::

RLHF（基于人类反馈的强化学习）有三步：

1. 收集示范答案，做 SFT
2. 收集偏好比较，例如“准确但冗长”和“简短”哪个更好，并据此训练奖励模型
3. 用 PPO（proximal policy optimization）优化模型，使它倾向于产出奖励高的回答

:::warn 人类偏好的问题
标注人员会出错，不同人的偏好各异，模型还可能学会迎合用户（sycophancy）和表现得过度自信（authoritativeness）。
:::

## 5. 推理

### Prefill 与 decode

![Prefill 并行处理输入并写入 KV cache；decode 逐个生成输出](/notes/cs329z/lecture-02/prefill-decode.svg)

:::cards
- Prefill | 一次性并行处理所有输入 token，构建 KV cache。瓶颈通常在计算（compute-bound）
- Decode | 逐个生成新 token，每一步依赖前面的输出。瓶颈通常在显存带宽（memory-bandwidth-bound），小 batch 时尤其明显
:::

### Roofline 模型

GPU 擅长大规模并行矩阵运算，速度同时受算力和显存带宽限制。计算强度（arithmetic intensity）是每读取一字节数据执行的运算量，即 FLOPs / Bytes。

![Roofline 模型：斜坡部分受带宽限制，平顶部分受算力限制](/notes/cs329z/lecture-02/roofline.svg)

```
Performance ≤ min(Peak Compute, Bandwidth × Intensity)
```

性能上限取决于两者中较低的一方。Decode 处在斜坡上，受带宽限制，所以只提高算力对它的速度帮助有限。

### KV cache

KV cache 保存已处理 token 的 Key 和 Value。Decode 时，新 token 的 Query 直接复用缓存，省去重新计算历史的开销。缓存随上下文变长而增大。

清理不重要的内存，指释放 attention 计算的中间矩阵和临时缓冲区；历史上下文和模型权重都会保留。

### 推理指标

:::cards
- TTFT | Time to first token：首个 token 的延迟，主要受 prefill 影响
- TPOT | Time per output token：之后每个输出 token 的平均耗时
- Throughput | 单位时间处理的 token 数或请求数
- End-to-end latency | 从发出请求到拿到完整结果的总时间；agent 还要算上工具执行时间
:::

### 推测式解码（speculative decoding）

[[speculative-demo]]

小的草稿模型先生成若干候选 token，大的目标模型一次性批量验证。被接受的候选越多，大模型需要串行生成的步数越少。实现正确时，输出分布与只用大模型一致。草稿错误率高或草稿本身开销大时，加速效果会消失。有些领域的文本更容易预测，接受率也更高。

模型路由（model routing）按任务选一个模型；推测式解码让大小模型合作生成同一段输出。

### 推理时计算扩展（test-time scaling）

模型权重保持不变，在推理阶段多花计算来解决更难的任务。

:::cards
- Chain-of-thought | 分步推理。推理过程看似合理，答案仍可能出错
- Reasoning LLM | 投入额外计算做多步分析、检查和修正，可设 low / medium / high 推理强度。会增加延迟和成本，准确率的提升因任务而异
- Repeated sampling | 生成多个候选提高 coverage，再用验证器（单元测试、精确匹配）挑选。成本随采样数增长，依赖可靠的验证器
- Self-consistency | 没有可靠验证器时，对多条推理路径的答案投票。多条路径可能犯同一个错，多数答案也会出错
:::

多教师蒸馏（multi-teacher distillation）：用不同任务、不同推理强度的教师模型示例来训练学生模型。

## 6. 面向 Agent 的 LLM 能力

### 结构化输入输出

复合 AI 系统（compound AI system）由多个组件组成，组件之间需要共享的接口约定（shared contract）。常用 JSON Schema 规定字段、类型、必填项和枚举值。

:::tip 要点
Schema 校验只检查格式。字段的业务含义和证据要单独验证。
:::

### 约束解码（constrained decoding）

在生成过程中限制哪些 token 合法，保证输出符合指定结构。它在生成时起作用，schema 校验在生成后检查。

- FSM（有限状态机）：根据当前生成状态，决定下一步哪些 token 合法。例如 `"status"` 只允许 `APPROVED` 或 `REJECTED`，不合法候选的概率置零后重新归一化。FSM 保证格式合法；具体选哪个值由模型判断，判断本身仍可能出错。
- SGLang：用来编写和高效运行 LLM 程序的推理框架。它用压缩 FSM 合并连续的确定性状态转换，并用 jump forward 跳过结构里固定的部分，减少逐 token 生成的开销。

### DSPy Signatures

用 InputField 和 OutputField 声明任务的输入、输出和字段类型，例如 `Optional[str]`（可为空的字符串）和 `Literal[...]`（预设的枚举选项）。它用来组织可组合、可测试的 LLM 程序。Signature 只声明接口，是否用 FSM 约束输出取决于具体的执行方式。

### 分类器与 System One 模型

分类器把输入的向量表示映射到预先定义的类别，输出类别标签，适合简单的意图分类和任务路由。System One 模型可以快速给当前候选动作打分并选择，省去每一步都让大模型生成完整文本的开销。复杂、模糊的问题往往超出简单分类的能力。

### 工具调用

模型决定是否调用工具、调用哪个、生成什么参数；外部执行环境运行工具，把结果返回给模型，模型据此继续判断或输出。Tool schema 约束工具名和参数；参数通过校验后，业务决策是否正确仍要另外检查。

### 上下文工程（context engineering）

Prompt engineering 关心指令怎么写，context engineering 关心每次调用模型时让它看到哪些信息。上下文的来源包括 system prompt、对话历史、记忆、工具调用结果和附件。记忆可以存在外部，需要时再取。

![上下文工程：按需拼装上下文，在末尾追加以复用 KV cache](/notes/cs329z/lecture-02/context-engineering.svg)

:::cards
- 警惕 context rot | 上下文变长后，定位和综合信息的能力可能下降；有效的上下文能力通常小于最大窗口
- 避免膨胀 | 只保留当前任务需要的工具、历史和资料；用 RAG 按需检索（just-in-time retrieval）
- 顺序追加 | 尽量在末尾追加，保持已缓存的前缀不变；在开头插入内容会让 KV cache 失效
- 实证评估 | 用 benchmark 和 eval 比较准确率、证据完整性、token 成本和延迟
- 压缩 compaction | 保留已确认的事实、关键证据、当前状态和待解决的问题；留太多会再次超长，删太多会丢失关键信息
:::

原始合同、页码和证据放在外部可检索的存储里，摘要只作索引。

递归语言模型（Recursive Language Models，RLM）：长文本放在外部环境，由程序检索和拆分，对局部内容分别处理后再汇总。它与 RNN 无关，长文件始终留在外部，按需读取片段。代价是额外的工具和模型调用、跨片段的关系可能遗漏，以及整合结果的成本。

## 小结：设计 agent 时要记住的几点

:::cards
- 先测长材料 | 先测模型能否在长材料里找到并关联具体内容，再决定能否把整份材料交给它
- 证据放外部 | 原始证据放在外部可检索的存储里，摘要只作索引
- 格式之外再验证 | Schema、约束解码和工具参数校验负责格式；业务含义和事实要另外验证
- 配可靠的验证器 | 重复采样要配可靠的验证器；没有验证器时，多数投票也可能选错
- 上下文按需提供 | 在末尾追加，并用 eval 衡量准确率、成本和延迟
:::
