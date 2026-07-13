import type { DetailVisual } from "@/data/content";

function NetworkStudyHero() {
  const nodes = [
    { label: "Network crafting", tone: "bg-[#315f82] text-white" },
    { label: "Positive affect", tone: "bg-[#9cc2d8] text-[#17222a]" },
    { label: "Task performance", tone: "bg-white text-[#17222a]" },
    { label: "Creative performance", tone: "bg-white text-[#17222a]" },
    { label: "Work-home resources", tone: "bg-[#d9e7df] text-[#17222a]" },
  ];

  return (
    <figure aria-label="Conceptual model for network crafting research" className="overflow-hidden rounded-[28px] border border-black/7 bg-[#dfe9e4] p-4 shadow-[0_18px_55px_rgba(38,57,67,0.08)] sm:p-7 lg:p-10">
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[22px] border border-white/70 bg-white/55 p-5 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#315f82]/58">Conceptual model</span>
            <span className="text-xs text-[#334652]/44">Workgroup diversity moderates</span>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div className={`rounded-[18px] p-5 ${nodes[0].tone}`}>
              <p className="text-xs opacity-55">Proactive behavior</p>
              <p className="mt-2 text-xl font-medium tracking-[-0.03em]">{nodes[0].label}</p>
            </div>
            <span className="hidden text-2xl text-[#315f82]/30 sm:block" aria-hidden="true">→</span>
            <div className={`rounded-[18px] p-5 ${nodes[1].tone}`}>
              <p className="text-xs opacity-55">Resource pathway</p>
              <p className="mt-2 text-xl font-medium tracking-[-0.03em]">{nodes[1].label}</p>
            </div>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {nodes.slice(2).map((node) => (
              <div key={node.label} className={`rounded-[16px] border border-black/7 p-4 ${node.tone}`}>
                <p className="text-sm font-medium leading-5">{node.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[22px] bg-[#17222a] p-5 text-white sm:p-6">
            <span className="font-mono text-[10px] text-[#9cc2d8]">STUDY 01</span>
            <p className="mt-8 text-2xl font-medium tracking-[-0.035em]">Three-wave design</p>
            <p className="mt-2 text-sm text-white/52">N = 222</p>
          </div>
          <div className="rounded-[22px] border border-black/8 bg-[#f7f8f6] p-5 sm:p-6">
            <span className="font-mono text-[10px] text-[#315f82]">STUDY 02</span>
            <p className="mt-8 text-2xl font-medium tracking-[-0.035em]">Three-day diary</p>
            <p className="mt-2 text-sm text-[#334652]/55">Final N = 199</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

function AiAwarenessHero() {
  const pathway = ["AI awareness", "P-O obligation", "Job crafting", "Adaptive outcomes"];
  return (
    <figure aria-label="Proposed conceptual model for AI awareness and job crafting" className="overflow-hidden rounded-[28px] border border-black/7 bg-[#e3e8ee] p-4 shadow-[0_18px_55px_rgba(38,57,67,0.08)] sm:p-7 lg:p-10">
      <div className="rounded-[22px] border border-white/75 bg-white/62 p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#315f82]">Proposed model</span>
          <span className="rounded-full border border-[#315f82]/12 bg-[#dbe6ef] px-3 py-1.5 text-[10px] font-semibold text-[#315f82]">RESEARCH IN PROGRESS</span>
        </div>
        <div className="mt-8 grid gap-2.5 md:grid-cols-4">
          {pathway.map((node, index) => (
            <div key={node} className="relative rounded-[18px] border border-black/7 bg-[#f8faf9] p-4 sm:p-5">
              <span className="font-mono text-[9px] text-[#315f82]/45">0{index + 1}</span>
              <p className="mt-8 text-lg font-medium leading-5 tracking-[-0.025em]">{node}</p>
              {index < pathway.length - 1 ? <span className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 place-items-center rounded-full bg-[#315f82] text-[10px] text-white md:grid" aria-hidden="true">→</span> : null}
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-[18px] bg-[#17222a] p-5 text-white">
            <p className="text-xs text-white/45">Proposed mediator</p>
            <p className="mt-2 text-xl font-medium tracking-[-0.03em]">Perceived person-organization obligation</p>
          </div>
          <div className="rounded-[18px] bg-[#cfdde7] p-5">
            <p className="text-xs text-[#334652]/52">Proposed moderator</p>
            <p className="mt-2 text-xl font-medium tracking-[-0.03em]">POAIS</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

export function ResearchHeroVisual({ visual }: { visual: DetailVisual }) {
  return visual === "network-study" ? <NetworkStudyHero /> : <AiAwarenessHero />;
}
