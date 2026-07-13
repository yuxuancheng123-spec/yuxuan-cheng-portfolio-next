import Image from "next/image";
import type { DetailVisual } from "@/data/content";

const actorChecks = [
  ["Consent", "Verified", "bg-emerald-500"],
  ["Identity", "Matched", "bg-emerald-500"],
  ["Voice", "Review", "bg-amber-400"],
  ["Disclosure", "Required", "bg-sky-500"],
  ["Provenance", "Attached", "bg-emerald-500"],
];

function ActorAssessmentHero() {
  return (
    <figure aria-label="Synthetic actor compliance review interface" className="overflow-hidden rounded-[28px] border border-black/7 bg-[#d9e8e8] p-3 shadow-[0_18px_55px_rgba(38,57,67,0.09)] sm:p-5 lg:p-8">
      <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[22px] border border-white/80 bg-[#f8faf9]/94 shadow-[0_28px_70px_rgba(29,53,63,0.16)]">
        <div className="flex h-12 items-center justify-between border-b border-black/8 px-4 sm:px-5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d77d72]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e3bd65]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#7db89f]" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/38">Review / 0148</span>
        </div>
        <div className="grid gap-3 p-3 sm:p-5 md:grid-cols-[0.82fr_1.18fr] md:gap-5 lg:p-7">
          <div className="relative min-h-[260px] overflow-hidden rounded-[18px] bg-[#cadde0] sm:min-h-[340px]">
            <Image src="/images/ai-actor-cover.jpg" alt="Abstract synthetic identity interface" fill sizes="(max-width: 767px) 90vw, 42vw" className="object-cover object-[72%_center]" />
            <div className="absolute inset-x-3 bottom-3 rounded-[14px] bg-[#15242c]/88 p-3 text-white backdrop-blur-sm">
              <p className="text-[10px] text-white/50">Source media</p>
              <div className="mt-1 flex items-end justify-between gap-3">
                <p className="text-sm font-semibold">Likeness + voice</p>
                <span className="font-mono text-[9px] text-white/48">SUBJECT-008</span>
              </div>
            </div>
          </div>
          <div className="rounded-[18px] border border-black/7 bg-white/80 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3 border-b border-black/8 pb-4">
              <div>
                <p className="text-xs text-[#334652]/52">Pre-publication check</p>
                <p className="mt-1 text-xl font-medium tracking-[-0.03em]">Compliance review</p>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1.5 text-[9px] font-bold text-amber-800">HUMAN CHECK</span>
            </div>
            <div className="divide-y divide-black/7">
              {actorChecks.map(([label, state, tone]) => (
                <div key={label} className="flex items-center justify-between gap-3 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2 w-2 rounded-full ${tone}`} />
                    <span className="text-sm font-medium text-[#17222a]/74">{label}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#334652]/52">{state}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-[14px] bg-[#e8f1ee] px-4 py-3">
              <span className="text-xs font-semibold text-[#365d50]">Decision readiness</span>
              <span className="text-lg font-semibold text-[#365d50]">4 / 5</span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

function ChinaEvidenceHero() {
  const stages = ["Policy", "Requirement", "Control", "Evidence", "Record"];
  return (
    <figure aria-label="Machine-readable compliance evidence pipeline" className="overflow-hidden rounded-[28px] border border-black/7 bg-[#eee9df] p-4 shadow-[0_18px_55px_rgba(70,59,47,0.08)] sm:p-7 lg:p-10">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="rounded-[22px] border border-[#b7afa2]/40 bg-[#fbfaf6] p-5 shadow-[0_20px_50px_rgba(70,59,47,0.12)] sm:p-7">
          <div className="flex items-center justify-between border-b border-[#8b8276]/16 pb-4">
            <span className="font-mono text-[10px] text-[#6d665d]/62">CN-AIGC / EVIDENCE RECORD</span>
            <span className="rounded-md border border-[#b65043]/25 bg-[#f6e3df] px-2.5 py-1.5 font-mono text-[9px] font-bold text-[#9f453b]">VERIFIED</span>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_0.72fr]">
            <div className="space-y-3 font-mono text-[11px] leading-5 text-[#4c5c5e]/78">
              <p>evidence_id: EV-2048</p>
              <p>requirement_id: LABEL-04</p>
              <p>source: publication_gateway</p>
              <p>status: verified</p>
              <p>policy_version: 2026.01</p>
            </div>
            <div className="grid grid-cols-4 gap-2 self-start" aria-hidden="true">
              {Array.from({ length: 20 }).map((_, index) => (
                <span key={index} className={`aspect-square rounded-[4px] ${index === 6 || index === 13 || index === 18 ? "bg-[#b65043]/58" : "bg-[#82999d]/24"}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-[22px] border border-white/70 bg-white/65 p-5 backdrop-blur-sm sm:p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#334652]/48">Governance pipeline</p>
          <div className="mt-5 space-y-2.5">
            {stages.map((stage, index) => (
              <div key={stage} className="flex items-center gap-3 rounded-[13px] border border-black/7 bg-[#fbfaf6]/80 p-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#315f82] font-mono text-[9px] text-white">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium text-[#17222a]">{stage}</span>
                {index < stages.length - 1 ? <span className="ml-auto text-[#315f82]/36" aria-hidden="true">↓</span> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

function NistDashboardHero() {
  const functions = [
    ["Govern", "82", "bg-[#9cc2d8]"],
    ["Map", "76", "bg-[#8bb8aa]"],
    ["Measure", "64", "bg-[#dbb76c]"],
    ["Manage", "71", "bg-[#b8a8ca]"],
  ];
  return (
    <figure aria-label="NIST AI RMF maturity dashboard" className="overflow-hidden rounded-[28px] border border-white/8 bg-[#18242c] p-4 text-white shadow-[0_22px_65px_rgba(4,12,18,0.2)] sm:p-7 lg:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/42">RMF control room</p>
          <h2 className="mt-2 text-2xl font-medium tracking-[-0.035em]">Assessment overview</h2>
        </div>
        <span className="rounded-full bg-[#2d423d] px-3 py-2 text-[9px] font-semibold text-[#a7d4c5]">REVIEW READY</span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {functions.map(([label, score, tone]) => (
          <div key={label} className="rounded-[18px] border border-white/8 bg-white/[0.045] p-4 sm:p-5">
            <span className={`block h-2 w-2 rounded-full ${tone}`} />
            <p className="mt-8 text-xs text-white/42">{label}</p>
            <p className="mt-1 text-3xl font-medium tracking-[-0.04em] text-white/90">{score}</p>
          </div>
        ))}
      </div>
      <div className="mt-2.5 grid gap-2.5 md:grid-cols-[0.72fr_1.28fr]">
        <div className="rounded-[18px] border border-white/8 bg-white/[0.045] p-5">
          <p className="text-xs text-white/42">Evidence coverage</p>
          <div className="relative mx-auto mt-5 grid h-36 w-36 place-items-center rounded-full border-[14px] border-[#9cc2d8]/14 border-r-[#9cc2d8]/70 border-t-[#9cc2d8]">
            <span className="text-3xl font-medium">73%</span>
          </div>
        </div>
        <div className="rounded-[18px] border border-white/8 bg-white/[0.045] p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/42">Missing controls</p>
            <span className="text-xl font-medium text-[#e2c379]">04</span>
          </div>
          <div className="mt-4 space-y-2.5">
            {["Vendor evidence", "Appeal service level", "Model event logging", "Test cadence"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-[12px] bg-black/10 px-3 py-3">
                <span className={`h-2 w-2 shrink-0 rounded-full ${index === 0 ? "bg-[#d88c7f]" : "bg-[#dbb76c]"}`} />
                <span className="text-sm text-white/62">{item}</span>
                <span className="ml-auto font-mono text-[9px] text-white/30">OPEN</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

export function WorkHeroVisual({ visual }: { visual: DetailVisual }) {
  if (visual === "actor-assessment") return <ActorAssessmentHero />;
  if (visual === "china-evidence") return <ChinaEvidenceHero />;
  return <NistDashboardHero />;
}
