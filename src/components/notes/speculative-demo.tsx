"use client";

import { useEffect, useState } from "react";

const DRAFT = ["upon", "a", "time", "lived"];
const VERDICT = [true, true, true, false];
// 0: idle, 1-4: drafting, 5-8: verifying, 9: corrected, then loop.
const LAST = 10;

export function SpeculativeDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s >= LAST ? 0 : s + 1)), 650);
    return () => clearInterval(id);
  }, []);

  const drafted = Math.min(step, 4);
  const verified = Math.max(0, Math.min(step - 4, 4));

  return (
    <div className="yc-widget" data-reveal aria-label="推测式解码动画：草稿模型猜 4 个 token，目标模型一次验证">
      <div className="yc-widget-head">
        <span className="yc-widget-tag">Animation</span>
        <span>{step <= 4 ? "① 草稿模型连续猜测" : step <= 8 ? "② 目标模型一次批量验证" : "③ 接受 3 个，改写第 4 个"}</span>
      </div>
      <div className="yc-spec">
        <div className="yc-spec-row">
          <span className="yc-spec-label">Draft</span>
          <span className="yc-token is-context">Once</span>
          {DRAFT.map((t, i) => (
            <span key={t} className={`yc-token ${i < drafted ? "is-in" : ""} ${i < verified ? (VERDICT[i] ? "is-ok" : "is-bad") : ""}`}>
              {t}
              {i < verified ? <i>{VERDICT[i] ? "✓" : "✗"}</i> : null}
            </span>
          ))}
        </div>
        <div className="yc-spec-row">
          <span className="yc-spec-label">Target</span>
          <span className={`yc-spec-scan ${step > 4 && step <= 8 ? "is-on" : ""}`}>一次前向，并行检查 4 个位置</span>
        </div>
        <div className="yc-spec-row">
          <span className="yc-spec-label">Output</span>
          <span className="yc-token is-context">Once</span>
          {["upon", "a", "time"].map((t, i) => (
            <span key={t} className={`yc-token ${step >= 9 ? "is-in is-ok" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
              {t}
            </span>
          ))}
          <span className={`yc-token is-new ${step >= 9 ? "is-in" : ""}`} style={{ transitionDelay: "260ms" }}>
            there
          </span>
        </div>
      </div>
      <div className="yc-widget-foot">
        <span>一次大模型前向，得到 4 个 token</span>
      </div>
    </div>
  );
}
