import Image from "next/image";

export function JourneyVisual() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden sm:w-[61%]" aria-hidden="true">
      <Image
        src="/images/about-lifestyle.jpg"
        alt=""
        fill
        sizes="(max-width: 639px) 100vw, 900px"
        className="object-cover object-center transition duration-700 group-hover:scale-[1.035]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#dce6e3] via-[#dce6e3]/16 to-transparent sm:from-[#dce6e3]/42" />
      <div className="absolute right-4 top-4 grid w-[46%] gap-2 sm:right-6 sm:top-6 sm:w-[38%]">
        <div className="rotate-2 rounded-[16px] border border-white/80 bg-white/78 p-3 shadow-[0_12px_30px_rgba(20,38,43,0.13)] backdrop-blur-sm">
          <p className="font-mono text-[7px] text-[#315f82]">HKG / SZX</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#315f82]" />
            <span className="h-px flex-1 bg-[#315f82]/30" />
            <span className="h-2.5 w-2.5 rounded-full border-2 border-[#315f82] bg-white" />
          </div>
        </div>
        <div className="-rotate-1 rounded-[16px] border border-white/80 bg-[#f6f2ea]/82 p-3 shadow-[0_12px_30px_rgba(20,38,43,0.1)] backdrop-blur-sm">
          <p className="font-mono text-[7px] text-[#6d665d]">CURRENT NOTES</p>
          <div className="mt-2 space-y-1.5">
            <span className="block h-1.5 w-full rounded-full bg-[#315f82]/18" />
            <span className="block h-1.5 w-4/5 rounded-full bg-[#315f82]/18" />
            <span className="block h-1.5 w-3/5 rounded-full bg-[#315f82]/18" />
          </div>
        </div>
      </div>
    </div>
  );
}
