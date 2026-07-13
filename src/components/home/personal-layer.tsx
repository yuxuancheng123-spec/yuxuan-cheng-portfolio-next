import { Reveal } from "@/components/reveal";
import { personalNotes } from "@/data/portfolio";

const noteLayout = {
  map: "md:col-span-5 min-h-[290px] bg-[#dce8ee]",
  notes: "md:col-span-7 min-h-[290px] bg-[#e7ebe8]",
  film: "md:col-span-4 min-h-[275px] bg-[#efe5e3]",
  play: "md:col-span-8 min-h-[275px] bg-[#dfe9e3]",
} as const;

function MapVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 opacity-55 bg-[linear-gradient(rgba(49,95,130,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(49,95,130,0.08)_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="absolute right-[-2rem] top-[-2rem] h-44 w-44 rounded-full border border-[#315f82]/20" />
      <span className="absolute right-[30%] top-[34%] h-3 w-3 rounded-full bg-[#315f82] shadow-[0_0_0_8px_rgba(49,95,130,0.1)]" />
      <span className="absolute bottom-[26%] right-[12%] h-3 w-3 rounded-full border-2 border-[#315f82] bg-white" />
      <span className="absolute right-[14%] top-[43%] h-px w-[19%] rotate-[44deg] bg-[#315f82]/35" />
      <p className="absolute right-5 top-6 font-mono text-4xl font-semibold tracking-[-0.06em] text-[#315f82]/12 sm:text-5xl">
        HKG / SZX
      </p>
    </div>
  );
}

function NotesVisual() {
  return (
    <div className="pointer-events-none absolute inset-y-5 right-5 w-[52%] rotate-1 rounded-[18px] border border-white/80 bg-[#f8f8f4]/78 p-4 shadow-[0_16px_40px_rgba(38,57,67,0.1)]" aria-hidden="true">
      <div className="flex items-center justify-between border-b border-black/8 pb-2">
        <span className="font-mono text-[7px] text-[#315f82]">RESEARCH NOTES</span>
        <span className="h-2 w-2 rounded-full bg-[#7c9b8e]" />
      </div>
      <div className="mt-3 space-y-2">
        {["AI GOVERNANCE", "JOB CRAFTING", "DIGITAL IDENTITY"].map((item, index) => (
          <div key={item} className="flex items-center gap-2">
            <span className="font-mono text-[7px] text-black/30">0{index + 1}</span>
            <span className="rounded-md bg-[#dfe9e4] px-2 py-1 font-mono text-[7px] text-[#365d50]">{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 h-px w-full bg-[#315f82]/12" />
      <div className="mt-3 h-1.5 w-4/5 rounded-full bg-[#315f82]/12" />
      <div className="mt-2 h-1.5 w-2/3 rounded-full bg-[#315f82]/12" />
    </div>
  );
}

function FilmVisual() {
  return (
    <div className="pointer-events-none absolute inset-x-5 top-5 h-[46%] rotate-[-2deg] overflow-hidden rounded-[18px] bg-[#342d36] p-3 shadow-[0_16px_35px_rgba(59,41,48,0.18)]" aria-hidden="true">
      <div className="grid h-full grid-cols-[auto_1fr_auto] gap-2">
        <div className="grid grid-rows-4 gap-1.5">
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index} className="w-2 rounded-sm bg-[#efe5e3]/75" />
          ))}
        </div>
        <div className="grid place-items-center bg-[radial-gradient(circle_at_50%_70%,rgba(232,177,125,0.55),transparent_28%),linear-gradient(145deg,#566e87,#b36f7f)]">
          <span className="text-center text-[10px] font-semibold tracking-[0.06em] text-white/82">LA LA LAND</span>
        </div>
        <div className="grid grid-rows-4 gap-1.5">
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index} className="w-2 rounded-sm bg-[#efe5e3]/75" />
          ))}
        </div>
      </div>
    </div>
  );
}

function PlayVisual() {
  return (
    <div className="pointer-events-none absolute inset-y-5 right-5 w-[54%] overflow-hidden rounded-[20px] bg-[#203139] text-white shadow-[0_16px_40px_rgba(24,43,49,0.18)]" aria-hidden="true">
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:26px_26px]" />
      <div className="absolute left-[22%] top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-white/18">
        <span className="absolute left-1/2 top-1/2 h-px w-32 -translate-x-1/2 bg-white/16" />
        <span className="absolute left-1/2 top-1/2 h-32 w-px -translate-y-1/2 bg-white/16" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d88c7f]" />
      </div>
      <div className="absolute bottom-4 right-4 grid h-20 w-20 place-items-center rounded-full border-[7px] border-[#9cc2d8]/18 border-t-[#9cc2d8]">
        <span className="h-11 w-11 rounded-full border border-white/25 bg-[#b77952]/65">
          <span className="mx-auto mt-3 block h-2 w-7 rounded-full bg-white/35" />
        </span>
      </div>
    </div>
  );
}

function PersonalVisual({ visual }: { visual: string }) {
  if (visual === "map") return <MapVisual />;
  if (visual === "notes") return <NotesVisual />;
  if (visual === "film") return <FilmVisual />;
  return <PlayVisual />;
}

export function PersonalLayer() {
  return (
    <section className="yc-section">
      <Reveal>
        <div className="max-w-3xl">
          <h2 className="yc-section-title">Away from the documents</h2>
          <p className="mt-3 text-base leading-6 text-[#334652]/68 sm:text-lg sm:leading-7">
            A little context for the person behind the governance work.
          </p>
        </div>
      </Reveal>

      <div className="mt-7 grid grid-cols-1 gap-3.5 md:grid-cols-12 lg:gap-4">
        {personalNotes.map((note, index) => (
          <Reveal
            key={note.label}
            delay={index * 55}
            className={noteLayout[note.visual as keyof typeof noteLayout]}
          >
            <article className={`relative h-full min-h-[inherit] overflow-hidden rounded-[24px] border border-black/[0.06] p-5 ${noteLayout[note.visual as keyof typeof noteLayout].split(" ").at(-1)}`}>
              <PersonalVisual visual={note.visual} />
              <div className={`relative z-10 max-w-[46%] ${note.visual === "film" ? "mt-[48%] max-w-full" : ""}`}>
                <p className="text-xs font-semibold text-[#273c43]/48">{note.label}</p>
                <p className="mt-3 text-[clamp(1.4rem,2.35vw,2.35rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[#17222a]">
                  {note.value}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
