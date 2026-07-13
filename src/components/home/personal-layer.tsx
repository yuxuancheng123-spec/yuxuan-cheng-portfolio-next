import { Reveal } from "@/components/reveal";
import { personalNotes } from "@/data/portfolio";

const noteTone = {
  blue: "bg-[#dce8ee]",
  mist: "bg-[#e8ece9]",
  rose: "bg-[#f1e6e4]",
  green: "bg-[#dfe9e3]",
} as const;

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

      <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {personalNotes.map((note, index) => (
          <Reveal key={note.label} delay={index * 55}>
            <article className={`personal-card relative min-h-[210px] overflow-hidden rounded-[24px] border border-black/[0.06] p-5 ${noteTone[note.tone as keyof typeof noteTone]}`}>
              <div className="personal-card-mark" aria-hidden="true" />
              <p className="relative text-xs font-semibold text-[#273c43]/52">
                {note.label}
              </p>
              <p className="relative mt-16 max-w-[15ch] text-[clamp(1.45rem,2.4vw,2.2rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[#17222a]">
                {note.value}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
