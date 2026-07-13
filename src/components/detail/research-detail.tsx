import { DetailShell } from "@/components/detail/detail-shell";
import { ResearchHeroVisual } from "@/components/detail/research-visuals";
import type { ResearchItem } from "@/data/content";

type ResearchDetailProps = {
  item: ResearchItem;
  previous?: ResearchItem;
  next?: ResearchItem;
};

function ResearchQuestion({ item }: { item: ResearchItem }) {
  return (
    <section aria-labelledby="question-heading" className="mt-12 rounded-[24px] bg-[#17222a] p-5 text-white sm:mt-16 sm:p-8 lg:p-10">
      <p id="question-heading" className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#9cc2d8]">Research question</p>
      <p className="mt-6 max-w-[26ch] text-2xl leading-[1.18] tracking-[-0.035em] sm:text-4xl">{item.researchQuestion}</p>
    </section>
  );
}

function TheorySection({ item }: { item: ResearchItem }) {
  return (
    <section aria-labelledby="theory-heading" className="mt-16 grid gap-6 sm:mt-24 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#315f82]">Foundation</p>
        <h2 id="theory-heading" className="mt-2 text-3xl font-medium leading-[1] tracking-[-0.04em]">Theoretical background</h2>
      </div>
      <div>
        <p className="text-xl leading-8 tracking-[-0.02em] text-[#334652]/76 sm:text-2xl sm:leading-9">{item.theoreticalBackground}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.theories.map((theory) => <span key={theory} className="rounded-full border border-black/9 bg-white/66 px-3 py-2 text-xs font-medium text-[#334652]">{theory}</span>)}
        </div>
      </div>
    </section>
  );
}

function StudyDesign({ item }: { item: ResearchItem }) {
  return (
    <section aria-labelledby="study-heading" className="mt-16 sm:mt-24">
      <div className="flex items-end justify-between gap-4">
        <h2 id="study-heading" className="text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Study design</h2>
        <span className="hidden text-xs text-[#334652]/45 sm:block">Research notes</span>
      </div>
      <div className="mt-7 grid gap-3 md:grid-cols-2">
        {item.studies.map((study, index) => (
          <article key={study.label} className={`rounded-[22px] p-5 sm:p-7 ${index === 0 ? "bg-[#dfe9e4]" : "border border-black/8 bg-white/66"}`}>
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#315f82]">{study.label}</span>
              <span className="text-xs font-semibold text-[#334652]/54">{study.meta}</span>
            </div>
            <h3 className="mt-10 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">{study.title}</h3>
            <p className="mt-3 max-w-[35rem] text-sm leading-6 text-[#334652]/66 sm:text-base">{study.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResearchModel({ item }: { item: ResearchItem }) {
  return (
    <section aria-labelledby="model-heading" className="mt-16 rounded-[24px] border border-black/8 bg-[#ecefeecf] p-5 sm:mt-24 sm:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#315f82]">Model</p>
      <h2 id="model-heading" className="mt-2 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Conceptual pathway</h2>
      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {item.model.map((node, index) => (
          <div key={node} className="contents">
            <span className="rounded-[14px] border border-black/8 bg-white/80 px-4 py-3 text-sm font-medium text-[#17222a]">{node}</span>
            {index < item.model.length - 1 ? <span className="self-center text-[#315f82]/36" aria-hidden="true">→</span> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function Insights({ item }: { item: ResearchItem }) {
  return (
    <section aria-labelledby="insights-heading" className="mt-16 sm:mt-24">
      <h2 id="insights-heading" className="text-3xl font-medium tracking-[-0.04em] sm:text-5xl">{item.insightLabel}</h2>
      <div className="mt-7 grid gap-2.5 md:grid-cols-2">
        {item.insights.map((insight, index) => (
          <div key={insight} className="rounded-[18px] border border-black/8 bg-white/66 p-5 sm:p-6">
            <span className="font-mono text-[9px] text-[#315f82]/48">{String(index + 1).padStart(2, "0")}</span>
            <p className="mt-6 text-base leading-6 text-[#17222a]/76">{insight}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[18px] bg-[#17222a] p-5 text-white sm:p-6">
          <p className="text-xs text-white/45">Publication status</p>
          <p className="mt-3 text-xl font-medium tracking-[-0.025em]">{item.publicationStatus}</p>
        </div>
        {item.conference ? (
          <div className="rounded-[18px] bg-[#d3e3e0] p-5 sm:p-6">
            <p className="text-xs text-[#334652]/50">Conference</p>
            <p className="mt-3 text-xl font-medium tracking-[-0.025em]">{item.conference}</p>
          </div>
        ) : (
          <div className="rounded-[18px] bg-[#d3e3e0] p-5 sm:p-6">
            <p className="text-xs text-[#334652]/50">Evidence status</p>
            <p className="mt-3 text-xl font-medium tracking-[-0.025em]">No empirical results claimed</p>
          </div>
        )}
      </div>
    </section>
  );
}

function ResearchSections({ item }: { item: ResearchItem }) {
  return (
    <div className="mt-16 sm:mt-24">
      {item.sections.map((section) => (
        <section key={section.heading} className="grid gap-5 border-t border-black/10 py-8 sm:py-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
          <h2 className="text-xl font-medium tracking-[-0.025em]">{section.heading}</h2>
          <div className="space-y-4 text-base leading-7 text-[#334652]/74 sm:text-lg sm:leading-8">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>
      ))}
    </div>
  );
}

export function ResearchDetail({ item, previous, next }: ResearchDetailProps) {
  return (
    <DetailShell item={item} previous={previous} next={next} visual={<ResearchHeroVisual visual={item.visual} />}>
      <ResearchQuestion item={item} />
      <TheorySection item={item} />
      <StudyDesign item={item} />
      <ResearchModel item={item} />
      <Insights item={item} />
      <ResearchSections item={item} />
    </DetailShell>
  );
}
