const functions = [
  { label: "Govern", score: "82", tone: "bg-[#9cc2d8]" },
  { label: "Map", score: "76", tone: "bg-[#8bb8aa]" },
  { label: "Measure", score: "64", tone: "bg-[#dbb76c]" },
  { label: "Manage", score: "71", tone: "bg-[#b8a8ca]" },
];

export function NistDashboardVisual() {
  return (
    <div className="pointer-events-none absolute bottom-4 left-4 right-4 top-[47%] overflow-hidden rounded-[22px] border border-white/10 bg-[#21313a] p-3 shadow-[0_22px_55px_rgba(4,12,18,0.32)] transition duration-500 group-hover:scale-[1.018] sm:left-auto sm:top-4 sm:w-[56%] sm:min-w-[250px] sm:p-4" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/42">
          RMF control room
        </span>
        <span className="rounded-full bg-[#2d423d] px-2 py-1 text-[7px] font-semibold text-[#a7d4c5]">
          REVIEW READY
        </span>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {functions.map((item) => (
          <div key={item.label} className="rounded-xl border border-white/7 bg-white/[0.045] p-2">
            <span className={`block h-1.5 w-1.5 rounded-full ${item.tone}`} />
            <p className="mt-3 text-[7px] text-white/42">{item.label}</p>
            <p className="mt-0.5 text-sm font-semibold text-white/84">{item.score}</p>
          </div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-[0.9fr_1.1fr] gap-2">
        <div className="rounded-xl border border-white/7 bg-white/[0.045] p-2.5">
          <p className="text-[7px] text-white/42">Evidence coverage</p>
          <div className="relative mx-auto mt-2 grid h-16 w-16 place-items-center rounded-full border-[8px] border-[#9cc2d8]/18 border-t-[#9cc2d8] border-r-[#9cc2d8]/70">
            <span className="text-sm font-semibold text-white">73%</span>
          </div>
        </div>
        <div className="rounded-xl border border-white/7 bg-white/[0.045] p-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[7px] text-white/42">Missing controls</p>
            <span className="text-[9px] font-semibold text-[#e2c379]">04</span>
          </div>
          <div className="mt-2.5 space-y-2">
            {["Vendor evidence", "Appeal SLA", "Model logging"].map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-[#d88c7f]" : "bg-[#dbb76c]"}`} />
                <span className="truncate text-[7px] text-white/54">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
