const pipeline = ["Policy", "Requirement", "Evidence", "Record"];

export function ChinaEvidenceVisual() {
  return (
    <div className="pointer-events-none absolute inset-x-5 top-14 h-[36%] transition duration-500 group-hover:translate-y-[-3px]" aria-hidden="true">
      <div className="absolute inset-y-0 right-0 w-[82%] rotate-[2deg] rounded-[20px] border border-[#b7afa2]/40 bg-[#fbfaf6] p-4 shadow-[0_18px_45px_rgba(70,59,47,0.14)]">
        <div className="flex items-center justify-between border-b border-[#8b8276]/16 pb-2.5">
          <span className="font-mono text-[8px] text-[#6d665d]/62">CN-AIGC / 2026</span>
          <span className="rounded-md border border-[#b65043]/25 bg-[#f6e3df] px-2 py-1 font-mono text-[7px] font-bold text-[#9f453b]">
            EVIDENCE
          </span>
        </div>
        <div className="mt-3 grid grid-cols-[1fr_0.72fr] gap-3">
          <div>
            <div className="h-2 w-4/5 rounded-full bg-[#d7d2ca]" />
            <div className="mt-2 h-2 w-full rounded-full bg-[#e5e1da]" />
            <div className="mt-2 h-2 w-3/5 rounded-full bg-[#e5e1da]" />
            <div className="mt-4 rounded-xl bg-[#eef1f0] p-2.5 font-mono text-[7px] leading-4 text-[#4c5c5e]/72">
              <p>evidence_id: EV-2048</p>
              <p>policy_ref: LABEL-04</p>
              <p>timestamp: verified</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 self-start pt-1">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className={`aspect-square rounded-[3px] ${index === 5 || index === 10 ? "bg-[#b65043]/50" : "bg-[#82999d]/24"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-1rem] left-0 right-2 rounded-[16px] border border-white/70 bg-white/82 px-3 py-2.5 shadow-[0_12px_28px_rgba(70,59,47,0.1)] backdrop-blur-sm">
        <div className="flex items-center justify-between gap-1">
          {pipeline.map((item, index) => (
            <div key={item} className="flex min-w-0 items-center">
              <div className="min-w-0 rounded-lg bg-[#ece8df] px-2 py-1.5 font-mono text-[6px] font-semibold text-[#5e5951] sm:text-[7px]">
                {item}
              </div>
              {index < pipeline.length - 1 ? (
                <span className="mx-1 h-px w-2 bg-[#8e8578]/40" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
