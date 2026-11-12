---
title: LLMs for Builders：训练、推理与面向 Agent 的能力
lecture: 2
summary: 语言模型如何生成文本、如何训练、如何高效推理，以及这些机制对设计 agent 意味着什么。
---

> 这一讲的主线：设计 agent 之前，先理解模型本身能做什么、在哪里会出错。结构化输出要在格式之外再验证事实，长上下文要实际测过再依赖。

## 要点速览

- LLM 技术栈分三层：应用（agent）、适配（微调）、工程（预训练）。这门课关注最上层，理解下面两层能帮助判断模型的能力边界。
- 生成文本就是逐个预测下一个 token 的概率分布，再按解码策略从中选取。
- 训练分预训练、中期训练、后训练三段；后训练决定模型是否听指令、是否好用。
- 推理分 prefill 和 decode 两个阶段，瓶颈各不相同。KV cache、推测式解码、推理时计算扩展都围绕这一点展开。
- 对 agent 来说：结构化输出和工具 schema 负责格式，决策和事实需要另外验证；上下文按需提供，保持精简。

## 1. LLM 技术栈

![LLM 技术栈：越往上越接近产品，越往下越接近模型本身](/notes/cs329z/lecture-02/llm-stack.svg)

| 层次 | 关注什么 | 对应 |
| --- | --- | --- |
| LLM 应用 | 用模型搭建系统 | Agent |
| LLM 适配（adaptation） | 让模型适应特定任务 | 微调 |
| LLM 工程 | 从零训练模型 | 预训练 |

## 2. 语言模型是什么

语言模型为一串 token 计算概率：给定前文，下一个 token 是什么的概率分布。语言模型属于生成模型，因此可以从中采样，生成新的文本。

### 生成模型与判别模型

| 类型 | 学什么 | 例子 |
| --- | --- | --- |
| 判别模型（discriminative） | 学习区分类别的边界 | 逻辑回归、SVM |
| 生成模型（generative） | 学习数据本身的分布，可以生成新样本 | 朴素贝叶斯、扩散模型、语言模型 |

### 解码与采样

模型每一步输出一个概率分布，解码策略决定从中选哪个 token。

![解码策略示意：以 “The class was about” 为例](/notes/cs329z/lecture-02/sampling.svg)

| 策略 | 做法 | 特点 |
| --- | --- | --- |
| Greedy decoding | 每一步选概率最高的 token | 简单，但只是局部最优 |
| Top-K sampling | 只保留概率最高的 K 个 token，重新归一化后抽样 | 固定候选数量 |
| Top-P sampling | 保留累积概率达到 P 的最小 token 集合，再抽样 | 候选数量随分布自适应 |
| Temperature | 调整概率分布的平滑程度 | 越接近 0 越接近 greedy，越高越随机 |
| Beam search | 同时保留 K 条候选序列，比较每条路径的累计分数 | 算力和内存开销大；偏向常见、重复和较短的表达 |

Top-K 和 Top-P 决定哪些 token 有资格被抽中，temperature 决定抽中的概率怎么分配。选哪种策略取决于任务和预算：数学和代码适合更确定的输出，创意写作适合更高的多样性。

## 3. 模型架构

### Transformer

Self-attention 让序列中任意两个位置可以直接交换信息。最初的 Transformer 是 encoder-decoder 结构，现在主流 LLM 多为 decoder-only。

![Decoder-only Transformer：一个 block 由 attention 和 FFN 两个子层组成，堆叠 N 层](/notes/cs329z/lecture-02/decoder-only.svg)

一个 decoder-only 模型处理文本的步骤：

1. **Tokenization**：把文本切成 token
2. **Embedding**：把 token 映射成向量
3. **Positional embedding**：加入位置信息
4. **Attention**：每个 token 按相关性汇聚前文的信息，因果掩码让它只看见左边的 token
5. **Multi-head attention**：多个头并行，不同的头可以关注不同类型的关系，如语义和语法
6. **Residual connection**：把子层的输入加回输出
7. **Layer normalization**：稳定中间表示；课件中的结构在每个子层之前先做 layer norm（pre-norm）
8. **Feed-forward network（FFN）**：对每个 token 的表示做进一步变换
9. **Residual connection**：再次与输入相加

第 4 到 9 步构成一个 Transformer block。模型把许多 block 堆叠起来，每一层在上一层的基础上继续加工表示，最后经 LM head 和 softmax 得到下一个 token 的概率。

### 长上下文的成本

Full attention 的计算和内存开销随上下文长度快速增长。几种常见的折中：

| 方案 | 思路 | 代价 |
| --- | --- | --- |
| Linear attention | 去掉 softmax、调整矩阵乘法的顺序，把历史压缩进固定大小的状态 | 长上下文表现弱于 full attention |
| Sliding window attention | 每个 token 只关注附近一段窗口 | 远处的信息要靠层层传递 |
| Hybrid attention | 混合使用 full（多头）attention 与线性或窗口 attention | 在效果和成本之间折中 |
| Multi-Head Latent Attention（MLA） | 把 K/V 压缩成低维潜在表示 | 减少 KV cache 占用；课上以 Kimi K3 为例 |

模型能用多长的上下文，取决于 attention 的计算复杂度、位置编码，以及训练时使用的上下文长度。检验长上下文能力的常用方法是 **needle-in-a-haystack**：在长文中藏一条信息，看模型能否找到。

> 设计 agent 时要测试三件事：模型能否在长材料中定位具体内容，能否把第 2 页和第 200 页的信息联系起来，以及能否保留原始证据。

## 4. 训练

### 损失函数

Loss 衡量模型预测与训练目标之间的差距。训练文本切成 token 后，用前面的 token 预测下一个（next-token prediction）。把模型给出的概率分布和真实的下一个 token（target token）比较，用交叉熵计算 loss：

```
L = − Σᵢ yᵢ · log(pᵢ)      i = 1 … V
```

V 是词表大小，y 是真实 token 的 one-hot 向量，p 是模型预测的概率。y 只在真实 token 处为 1，所以 loss 等于真实 token 预测概率的负对数。例如真实的下一个词是 “how”，模型给它的概率是 0.0124，loss 就是 −log(0.0124) ≈ 1.907（以 10 为底）。

### 三个训练阶段

![训练的三个阶段，以及预训练的数据处理流程](/notes/cs329z/lecture-02/training-stages.svg)

| 阶段 | 目的 | 做法 |
| --- | --- | --- |
| Pretraining 预训练 | 学习语言规律、知识和通用能力 | 在大规模数据上做 next-token prediction |
| Midtraining 中期训练 | 强化目标领域，同时保留通用能力 | 调整数据配比，加入更多领域数据 |
| Posttraining 后训练 | 让模型听指令、有用、安全 | SFT、偏好学习、RLVR 等 |

### 预训练数据处理

1. 文本提取
2. 语言识别
3. 规则过滤（heuristic cleaning）：按长度、符号、格式等预设规则筛选
4. 质量过滤：去掉广告、垃圾评论、无意义文本
5. 去重
6. 基于模型的过滤（model-based filtering）

**数据配比（data mixing）** 决定不同来源的数据各占多少。课上介绍的方法分三步：

1. **Swarm**：尝试多组不同比例，用小的代理模型（proxy model）分别训练，得到各自的表现
2. **Regression**：拟合回归模型，预测比例变化会怎样影响表现
3. **Optimization**：在可行的比例集合 S 中，找让预测损失最小的比例

```
p* = argmin f̂(p),   p ∈ S
```

### 中期训练

领域强化预训练有两个好处：在目标领域泛化得更好，以及减少后续微调时的遗忘。微调某个领域时，反向传播和优化器会更新共享的参数，可能让模型在其他领域的能力下降。

### 后训练

| 方法 | 训练信号 | 说明 |
| --- | --- | --- |
| Instruction fine-tuning | 明确的指令和回答 | 用于监督微调（SFT） |
| CoT fine-tuning | 带中间解题步骤的答案 | 让模型学会分步推理 |
| RLHF | 人类的偏好比较 | 见下文 |
| RLVR | 可以客观检查的结果 | 用单元测试、证明检查、精确匹配等结果作为奖励，特别适合数学和代码；验证器要设计得足够严格 |
| Agent 专项训练 | 真实环境中的任务 | 如 SWE-smith：基于真实代码仓库搭建环境，生成任务和新的任务实例 |

**RLHF（基于人类反馈的强化学习）** 有三步：

1. 收集示范答案，做 SFT
2. 收集偏好比较，例如“准确但冗长”和“简短”哪个更好，并据此训练奖励模型
3. 用 PPO（proximal policy optimization）优化模型，使它倾向于产出奖励高的回答

人类偏好的问题：标注人员会出错，不同人的偏好各异，模型还可能学会迎合用户（sycophancy）和表现得过度自信（authoritativeness）。

## 5. 推理

### Prefill 与 decode

![Prefill 并行处理输入并写入 KV cache；decode 逐个生成输出](/notes/cs329z/lecture-02/prefill-decode.svg)

| 阶段 | 做什么 | 常见瓶颈 |
| --- | --- | --- |
| Prefill | 一次性并行处理所有输入 token，构建 KV cache | 计算（compute-bound） |
| Decode | 逐个生成新 token，每一步依赖前面的输出 | 显存带宽（memory-bandwidth-bound），小 batch 时尤其明显 |

### Roofline 模型

GPU 擅长大规模并行矩阵运算，速度同时受算力和显存带宽限制。**计算强度**（arithmetic intensity）是每读取一字节数据执行的运算量，即 FLOPs / Bytes。

![Roofline 模型：斜坡部分受带宽限制，平顶部分受算力限制](/notes/cs329z/lecture-02/roofline.svg)

```
Performance ≤ min(Peak Compute, Bandwidth × Intensity)
```

性能上限取决于两者中较低的一方。Decode 处在斜坡上，受带宽限制，所以只提高算力对它的速度帮助有限。

### KV cache

KV cache 保存已处理 token 的 Key 和 Value。Decode 时，新 token 的 Query 直接复用缓存，省去重新计算历史的开销。缓存随上下文变长而增大。

清理不重要的内存，指释放 attention 计算的中间矩阵和临时缓冲区；历史上下文和模型权重都会保留。

### 推理指标

| 指标 | 含义 |
| --- | --- |
| TTFT（time to first token） | 首个 token 的延迟，主要受 prefill 影响 |
| TPOT（time per output token） | 之后每个输出 token 的平均耗时 |
| Throughput | 单位时间处理的 token 数或请求数 |
| End-to-end latency | 从发出请求到拿到完整结果的总时间；agent 还要算上工具执行时间 |

### 推测式解码（speculative decoding）

![推测式解码：草稿模型连续猜测，目标模型一次批量验证](/notes/cs329z/lecture-02/speculative-decoding.svg)

小的草稿模型先生成若干候选 token，大的目标模型一次性批量验证。被接受的候选越多，大模型需要串行生成的步数越少。实现正确时，输出分布与只用大模型一致。草稿错误率高或草稿本身开销大时，加速效果会消失。有些领域的文本更容易预测，接受率也更高。

模型路由（model routing）按任务选一个模型；推测式解码让大小模型合作生成同一段输出。

### 推理时计算扩展（test-time scaling）

模型权重保持不变，在推理阶段多花计算来解决更难的任务。

| 方法 | 做法 | 局限 |
| --- | --- | --- |
| Chain-of-thought | 分步推理 | 推理过程看似合理，答案仍可能出错 |
| Reasoning LLM | 投入额外计算做多步分析、检查和修正；可设 low、medium、high 等推理强度 | 增加延迟和成本，准确率的提升因任务而异 |
| Repeated sampling | 同一问题生成多个候选，提高至少一个正确的概率（coverage），再用验证器（单元测试、精确匹配）挑选 | 成本随采样数增长，依赖可靠的验证器 |
| Self-consistency | 没有可靠验证器时，对多条推理路径的答案投票 | 多条路径可能犯同一个错，多数答案也会出错 |

**多教师蒸馏**（multi-teacher distillation）：用不同任务、不同推理强度的教师模型示例来训练学生模型。

## 6. 面向 Agent 的 LLM 能力

### 结构化输入输出

复合 AI 系统（compound AI system）由多个组件组成，组件之间需要共享的接口约定（shared contract）。常用 JSON Schema 规定字段、类型、必填项和枚举值。

> Schema 校验只检查格式。字段的业务含义和证据要单独验证。

### 约束解码（constrained decoding）

在生成过程中限制哪些 token 合法，保证输出符合指定结构。它在生成时起作用，schema 校验在生成后检查。

- **FSM（有限状态机）**：根据当前生成状态，决定下一步哪些 token 合法。例如 `"status"` 只允许 `APPROVED` 或 `REJECTED`，不合法候选的概率置零后重新归一化。FSM 保证格式合法；具体选哪个值由模型判断，判断本身仍可能出错。
- **SGLang**：用来编写和高效运行 LLM 程序的推理框架。它用压缩 FSM 合并连续的确定性状态转换，并用 jump forward 跳过结构里固定的部分，减少逐 token 生成的开销。

### DSPy Signatures

用 InputField 和 OutputField 声明任务的输入、输出和字段类型，例如 `Optional[str]`（可为空的字符串）和 `Literal[...]`（预设的枚举选项）。它用来组织可组合、可测试的 LLM 程序。Signature 只声明接口，是否用 FSM 约束输出取决于具体的执行方式。

### 分类器与 System One 模型

分类器把输入的向量表示映射到预先定义的类别，输出类别标签，适合简单的意图分类和任务路由。System One 模型可以快速给当前候选动作打分并选择，省去每一步都让大模型生成完整文本的开销。复杂、模糊的问题往往超出简单分类的能力。

### 工具调用

模型决定是否调用工具、调用哪个、生成什么参数；外部执行环境运行工具，把结果返回给模型，模型据此继续判断或输出。Tool schema 约束工具名和参数；参数通过校验后，业务决策是否正确仍要另外检查。

### 上下文工程（context engineering）

Prompt engineering 关心指令怎么写，context engineering 关心每次调用模型时让它看到哪些信息。上下文的来源包括 system prompt、对话历史、记忆、工具调用结果和附件。记忆可以存在外部，需要时再取。

![上下文工程：按需拼装上下文，在末尾追加以复用 KV cache](/notes/cs329z/lecture-02/context-engineering.svg)

| 原则 | 说明 |
| --- | --- |
| 警惕 context rot | 上下文变长后，定位和综合信息的能力可能下降；有效的上下文能力通常小于最大窗口 |
| 避免膨胀 | 只保留当前任务需要的工具、历史和资料；用 RAG 按需检索（just-in-time retrieval） |
| 顺序追加 | 尽量在末尾追加，保持已缓存的前缀不变；在开头插入内容会让 KV cache 失效 |
| 实证评估 | 用 benchmark 和 eval 比较准确率、证据完整性、token 成本和延迟 |
| 压缩（compaction） | 长任务中保留已确认的事实、关键证据、当前状态和待解决的问题；保留太多很快又会超长，删太多会丢失关键信息 |

原始合同、页码和证据放在外部可检索的存储里，摘要只作索引。

**递归语言模型**（Recursive Language Models，RLM）：长文本放在外部环境，由程序检索和拆分，对局部内容分别处理后再汇总。它与 RNN 无关，长文件始终留在外部，按需读取片段。代价是额外的工具和模型调用、跨片段的关系可能遗漏，以及整合结果的成本。

## 小结：设计 agent 时要记住的几点

1. 先测模型能否在长材料里找到并关联具体内容，再决定能否把整份材料交给它。
2. 原始证据放在外部可检索的存储里，摘要只作索引。
3. Schema、约束解码和工具参数校验负责格式；业务含义和事实要另外验证。
4. 重复采样要配可靠的验证器；没有验证器时，多数投票也可能选错。
5. 上下文按需提供、在末尾追加，并用 eval 衡量准确率、成本和延迟。

---

**来源与致谢**：本笔记整理自 Stanford CS 329Z: Engineering AI Agents 第二讲 “LLMs for Builders” 的课件（Diyi Yang、Michael Ryan、John Yang，2026 年秋季）。文中图示是我根据课件内容重新绘制的，概率示例的数值取自课件。课件中引用的论文和图表请参见课件原文的出处标注。
