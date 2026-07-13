const nodes = [
  { position: "left-[8%] top-[30%]", size: "h-9 w-9", tone: "bg-[#315f82]" },
  { position: "left-[32%] top-[12%]", size: "h-12 w-12", tone: "bg-[#7c9b8e]" },
  { position: "right-[17%] top-[24%]", size: "h-8 w-8", tone: "bg-[#c86455]" },
  { position: "left-[24%] bottom-[13%]", size: "h-8 w-8", tone: "bg-[#b69d63]" },
  { position: "right-[29%] bottom-[10%]", size: "h-11 w-11", tone: "bg-[#557481]" },
];

export function NetworkResearchVisual() {
  return (
    <div className="pointer-events-none absolute inset-x-5 top-14 h-[38%] overflow-hidden rounded-[20px] border border-[#315f82]/12 bg-[#f4f7f5]/68 transition duration-500 group-hover:scale-[1.018]" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(49,95,130,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(49,95,130,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <span className="absolute left-[14%] top-[36%] h-px w-[28%] -rotate-[28deg] bg-[#315f82]/25" />
      <span className="absolute left-[40%] top-[31%] h-px w-[40%] rotate-[8deg] bg-[#315f82]/25" />
      <span className="absolute left-[28%] top-[64%] h-px w-[38%] rotate-[18deg] bg-[#315f82]/25" />
      {nodes.map((node) => (
        <span key={node.position} className={`absolute ${node.position} ${node.size} grid place-items-center rounded-full border-[6px] border-white/75 shadow-md shadow-[#315f82]/12 ${node.tone}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
        </span>
      ))}
      <div className="absolute bottom-2.5 left-2.5 flex gap-1.5">
        <span className="rounded-md bg-white/84 px-2 py-1 font-mono text-[6px] text-[#315f82]">STUDY 1</span>
        <span className="rounded-md bg-white/84 px-2 py-1 font-mono text-[6px] text-[#315f82]">STUDY 2</span>
      </div>
      <div className="absolute right-2.5 top-2.5 w-[44%] rounded-xl border border-white/80 bg-white/76 p-2 shadow-sm">
        {[
          "Positive Affect",
          "Task Performance",
          "Creative Performance",
        ].map((item, index) => (
          <div key={item} className="flex items-center justify-between py-1">
            <span className="text-[6px] text-[#273c43]/58">{item}</span>
            <span className="font-mono text-[6px] font-bold text-[#315f82]">+{[18, 24, 31][index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
