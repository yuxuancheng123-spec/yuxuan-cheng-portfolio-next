"use client";

import { useMemo, useState } from "react";

// Next-token probabilities after "The class was about" (CS 329Z lecture 2 slides, top 10 shown).
const TOKENS: [string, number][] = [
  ["to", 0.3171], ["as", 0.0491], ["the", 0.036], ["a", 0.033], ["two", 0.0147],
  ["how", 0.0124], ["getting", 0.0101], ["three", 0.01], ["time", 0.0091], ["in", 0.0081],
];

type Row = { token: string; prob: number; kept: boolean };

function distribution(temperature: number, topK: number, topP: number): Row[] {
  const logits = TOKENS.map(([, p]) => Math.log(p) / temperature);
  const max = Math.max(...logits);
  const exps = logits.map((l) => Math.exp(l - max));
  const sum = exps.reduce((a, b) => a + b, 0);
  const probs = exps.map((e) => e / sum);
  const order = probs.map((p, i) => [p, i] as const).sort((a, b) => b[0] - a[0]);
  const kept = new Set<number>();
  let cumulative = 0;
  for (const [p, i] of order) {
    if (kept.size >= topK || cumulative >= topP) break;
    kept.add(i);
    cumulative += p;
  }
  const keptSum = [...kept].reduce((a, i) => a + probs[i], 0);
  return TOKENS.map(([token], i) => ({ token, prob: kept.has(i) ? probs[i] / keptSum : 0, kept: kept.has(i) }));
}

export function SamplingDemo() {
  const [temperature, setTemperature] = useState(1);
  const [topK, setTopK] = useState(10);
  const [topP, setTopP] = useState(1);
  const [picked, setPicked] = useState<string | null>(null);
  const [rolling, setRolling] = useState(false);
  const rows = useMemo(() => distribution(temperature, topK, topP), [temperature, topK, topP]);
  const keptCount = rows.filter((r) => r.kept).length;

  const sample = () => {
    if (rolling) return;
    setRolling(true);
    const kept = rows.filter((r) => r.kept);
    let ticks = 0;
    const spin = setInterval(() => {
      setPicked(kept[Math.floor(Math.random() * kept.length)].token);
      if (++ticks >= 10) {
        clearInterval(spin);
        let r = Math.random();
        const choice = kept.find((row) => (r -= row.prob) <= 0) ?? kept[kept.length - 1];
        setPicked(choice.token);
        setRolling(false);
      }
    }, 70);
  };

  return (
    <div className="yc-widget" data-reveal>
      <div className="yc-widget-head">
        <span className="yc-widget-tag">Try it</span>
        <span>
          The class was about{" "}
          <span className={`yc-blank ${picked ? "is-filled" : ""} ${rolling ? "is-rolling" : ""}`}>{picked ?? "___"}</span>
        </span>
      </div>

      <div className="yc-bars">
        {rows.map((row) => (
          <div key={row.token} className={`yc-bar-row ${row.kept ? "" : "is-dropped"} ${picked === row.token && !rolling ? "is-picked" : ""}`}>
            <span className="yc-bar-label">{row.token}</span>
            <span className="yc-bar-track">
              <span className="yc-bar-fill" style={{ width: `${Math.max(row.prob * 100, row.kept ? 1.5 : 0)}%` }} />
            </span>
            <span className="yc-bar-value">{row.kept ? `${(row.prob * 100).toFixed(1)}%` : "—"}</span>
          </div>
        ))}
      </div>

      <div className="yc-controls">
        <label>
          <span>Temperature <b>{temperature.toFixed(2)}</b></span>
          <input type="range" min={0.1} max={2} step={0.05} value={temperature} onChange={(e) => setTemperature(Number(e.target.value))} />
        </label>
        <label>
          <span>Top-K <b>{topK}</b></span>
          <input type="range" min={1} max={10} step={1} value={topK} onChange={(e) => setTopK(Number(e.target.value))} />
        </label>
        <label>
          <span>Top-P <b>{topP.toFixed(2)}</b></span>
          <input type="range" min={0.05} max={1} step={0.05} value={topP} onChange={(e) => setTopP(Number(e.target.value))} />
        </label>
      </div>

      <div className="yc-widget-foot">
        <span>{keptCount === 1 ? "只剩 1 个候选，等同于 greedy" : `${keptCount} 个候选参与抽样`}</span>
        <button type="button" className="yc-widget-button" onClick={sample} disabled={rolling}>
          抽一个 token
        </button>
      </div>
    </div>
  );
}
