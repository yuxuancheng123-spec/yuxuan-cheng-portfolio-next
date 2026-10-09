import { DetailShell } from "@/components/detail/detail-shell";
import type { ResearchItem } from "@/data/content";

type ResearchDetailProps = {
  item: ResearchItem;
  previous?: ResearchItem;
  next?: ResearchItem;
};

function ResearchQuestion({ item }: { item: ResearchItem }) {
  return (
    <section aria-labelledby="question-heading" className="mt-8 rounded-xl bg-accent-soft p-5 text-ink">
      <p id="question-heading" className="yc-kicker">Research question</p>
      <p className="mt-3 text-lg font-medium leading-7">{item.researchQuestion}</p>
    </section>
  );
}

function TheorySection({ item }: { item: ResearchItem }) {
  return (
    <section aria-labelledby="theory-heading" className="mt-10 grid gap-6 md:grid-cols-[11rem_1fr] md:gap-8">
      <div>
        <p className="yc-kicker">Foundation</p>
        <h2 id="theory-heading" className="mt-2 yc-h2">Theoretical background</h2>
      </div>
      <div>
        <p className="yc-lead">{item.theoreticalBackground}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.theories.map((theory) => <span key={theory} className="rounded-full border border-line bg-white px-3 py-2 text-xs font-medium text-muted">{theory}</span>)}
        </div>
      </div>
    </section>
  );
}

function StudyDesign({ item }: { item: ResearchItem }) {
  return (
    <section aria-labelledby="study-heading" className="mt-10 sm:mt-12">
      <div className="flex items-end justify-between gap-4">
        <h2 id="study-heading" className="yc-h2">Study design</h2>
        <span className="hidden text-xs text-muted sm:block">Research notes</span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {item.studies.map((study, index) => (
          <article key={study.label} className={`rounded-xl p-5 ${index === 0 ? "bg-white" : "border border-line bg-white"}`}>
            <div className="flex items-center justify-between gap-4">
              <span className="yc-kicker">{study.label}</span>
              <span className="text-xs font-semibold text-muted">{study.meta}</span>
            </div>
            <h3 className="mt-10 yc-h3">{study.title}</h3>
            <p className="mt-3 max-w-[35rem] text-sm leading-6 text-muted">{study.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResearchModel({ item }: { item: ResearchItem }) {
  return (
    <section aria-labelledby="model-heading" className="mt-10 rounded-xl border border-line bg-white p-5">
      <p className="yc-kicker">Model</p>
      <h2 id="model-heading" className="mt-2 yc-h2">Conceptual pathway</h2>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {item.model.map((node, index) => (
          <div key={node} className="contents">
            <span className="rounded-lg border border-line bg-white px-4 py-3 text-sm font-medium text-ink">{node}</span>
            {index < item.model.length - 1 ? <span className="self-center text-accent" aria-hidden="true">→</span> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function Insights({ item }: { item: ResearchItem }) {
  return (
    <section aria-labelledby="insights-heading" className="mt-10 sm:mt-12">
      <h2 id="insights-heading" className="yc-h2">{item.insightLabel}</h2>
      <div className="mt-4 grid gap-2.5 md:grid-cols-2">
        {item.insights.map((insight, index) => (
          <div key={insight} className="rounded-lg border border-line bg-white p-5">
            <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
            <p className="mt-2 text-base leading-6 text-ink">{insight}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-accent-soft p-5 text-ink sm:p-6">
          <p className="text-xs text-muted">Publication status</p>
          <p className="mt-1.5 yc-h3">{item.publicationStatus}</p>
        </div>
        {item.conference ? (
          <div className="rounded-lg bg-white p-5">
            <p className="text-xs text-muted">Conference</p>
            <p className="mt-1.5 yc-h3">{item.conference}</p>
          </div>
        ) : (
          <div className="rounded-lg bg-white p-5">
            <p className="text-xs text-muted">Evidence status</p>
            <p className="mt-1.5 yc-h3">No empirical results claimed</p>
          </div>
        )}
      </div>
    </section>
  );
}

function ResearchSections({ item }: { item: ResearchItem }) {
  return (
    <div className="mt-10 sm:mt-12">
      {item.sections.map((section) => (
        <section key={section.heading} className="grid gap-5 border-t border-line py-6 md:grid-cols-[11rem_1fr] md:gap-8">
          <h2 className="yc-h3">{section.heading}</h2>
          <div className="space-y-4 yc-body !text-base !leading-7">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>
      ))}
    </div>
  );
}

export function ResearchDetail({ item, previous, next }: ResearchDetailProps) {
  return (
    <DetailShell item={item} previous={previous} next={next}>
      <ResearchQuestion item={item} />
      <TheorySection item={item} />
      <StudyDesign item={item} />
      <ResearchModel item={item} />
      <Insights item={item} />
      <ResearchSections item={item} />
    </DetailShell>
  );
}
