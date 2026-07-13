import Image from "next/image";

const checks = [
  { label: "Consent", state: "Verified", tone: "bg-emerald-500" },
  { label: "Identity", state: "Matched", tone: "bg-emerald-500" },
  { label: "Voice", state: "Review", tone: "bg-amber-400" },
  { label: "Disclosure", state: "Required", tone: "bg-sky-500" },
  { label: "Provenance", state: "Attached", tone: "bg-emerald-500" },
];

export function ActorReviewVisual() {
  return (
    <div
      className="pointer-events-none absolute inset-x-4 bottom-4 top-[47%] overflow-hidden rounded-[22px] border border-white/70 bg-[#f8faf9]/94 shadow-[0_24px_65px_rgba(29,53,63,0.18)] backdrop-blur-sm transition duration-500 group-hover:scale-[1.018] sm:inset-x-6 sm:bottom-6 sm:top-[43%] lg:left-[25%] lg:top-[45%]"
      aria-hidden="true"
    >
      <div className="flex h-10 items-center justify-between border-b border-black/8 px-3.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#d77d72]" />
          <span className="h-2 w-2 rounded-full bg-[#e3bd65]" />
          <span className="h-2 w-2 rounded-full bg-[#7db89f]" />
        </div>
        <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-black/38">
          Review / 0148
        </span>
      </div>

      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[0.86fr_1.14fr] gap-2.5 p-2.5 sm:gap-3 sm:p-3">
        <div className="relative overflow-hidden rounded-[16px] bg-[#d8e7ea]">
          <Image
            src="/images/ai-actor-cover.jpg"
            alt=""
            fill
            loading="eager"
            sizes="(max-width: 767px) 40vw, 360px"
            className="object-cover object-[72%_center]"
          />
          <div className="absolute inset-x-2 bottom-2 rounded-xl bg-[#15242c]/82 p-2 text-white backdrop-blur-sm">
            <p className="text-[8px] text-white/58">Source media</p>
            <p className="mt-0.5 text-[10px] font-semibold">Likeness + voice</p>
          </div>
        </div>

        <div className="flex min-w-0 flex-col rounded-[16px] border border-black/7 bg-white/78 p-2.5 sm:p-3">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-semibold text-[#20333c] sm:text-[10px]">
              Compliance review
            </p>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-[7px] font-bold text-amber-800">
              HUMAN CHECK
            </span>
          </div>
          <div className="mt-2.5 flex-1 divide-y divide-black/6 sm:mt-3">
            {checks.map((check) => (
              <div key={check.label} className="flex items-center justify-between gap-2 py-1.5 sm:py-2">
                <div className="flex min-w-0 items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${check.tone}`} />
                  <span className="truncate text-[8px] font-medium text-black/60 sm:text-[9px]">
                    {check.label}
                  </span>
                </div>
                <span className="text-[7px] font-semibold text-black/38 sm:text-[8px]">
                  {check.state}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between rounded-lg bg-[#e8f1ee] px-2 py-1.5">
            <span className="text-[7px] font-semibold text-[#365d50]">Decision readiness</span>
            <span className="text-[9px] font-bold text-[#365d50]">4 / 5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
