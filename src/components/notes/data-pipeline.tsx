const STEPS = ["文本提取", "语言识别", "规则过滤", "质量过滤", "去重", "模型过滤"];

/** Pretraining data steps light up in turn while the remaining data (illustrative) shrinks. */
export function DataPipeline() {
  return (
    <div className="yc-widget" data-reveal>
      <div className="yc-widget-head">
        <span className="yc-widget-tag">Animation</span>
        <span>预训练数据处理：每一步都在筛掉一部分数据</span>
      </div>
      <ol className="yc-pipe">
        {STEPS.map((step, i) => (
          <li key={step} style={{ animationDelay: `${i * 0.6}s` }}>
            <span className="yc-pipe-index">{i + 1}</span>
            {step}
          </li>
        ))}
      </ol>
      <div className="yc-pipe-meter" aria-hidden="true">
        <span />
      </div>
      <div className="yc-widget-foot">
        <span>剩余数据量（示意）</span>
        <span>之后再决定各来源的配比</span>
      </div>
    </div>
  );
}
