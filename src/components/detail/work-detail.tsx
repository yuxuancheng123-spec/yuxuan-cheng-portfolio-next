import { DetailShell } from "@/components/detail/detail-shell";
import { WorkHeroVisual } from "@/components/detail/work-visuals";
import type { WorkItem } from "@/data/content";

type WorkDetailProps = {
  item: WorkItem;
  previous?: WorkItem;
  next?: WorkItem;
};

function Workflow({ item }: { item: WorkItem }) {
  return (
    <section aria-labelledby="workflow-heading" className="mt-16 sm:mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#315f82]">System view</p>
          <h2 id="workflow-heading" className="mt-2 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
            {item.workflowTitle}
          </h2>
        </div>
        <span className="hidden text-xs text-[#334652]/45 sm:block">01—05</span>
      </div>
      <div className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
        {item.workflow.map((step, index) => (
          <div key={step.label} className="rounded-[18px] border border-black/8 bg-white/66 p-4 sm:p-5">
            <span className="font-mono text-[10px] text-[#315f82]/50">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-7 text-lg font-medium tracking-[-0.025em]">{step.label}</h3>
            <p className="mt-2 text-sm leading-5 text-[#334652]/62">{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SignalGrid({ item }: { item: WorkItem }) {
  return (
    <section aria-labelledby="signals-heading" className="mt-16 sm:mt-24">
      <h2 id="signals-heading" className="max-w-[12ch] text-3xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl">
        What the review makes visible
      </h2>
      <div className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {item.signals.map((signal) => (
          <div key={signal.label} className="rounded-[20px] border border-black/8 bg-[#e6ecea] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold text-[#334652]/52">{signal.label}</span>
              <span className="h-2 w-2 rounded-full bg-[#315f82]" aria-hidden="true" />
            </div>
            <p className="mt-8 text-2xl font-medium tracking-[-0.035em]">{signal.value}</p>
            <p className="mt-2 text-sm leading-5 text-[#334652]/62">{signal.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceAndSample({ item }: { item: WorkItem }) {
  return (
    <section className="mt-16 grid gap-3 sm:mt-24 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="rounded-[24px] border border-black/8 bg-white/66 p-5 sm:p-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#315f82]">Evidence checklist</p>
        <ul className="mt-6 divide-y divide-black/7">
          {item.evidenceChecklist.map((entry, index) => (
            <li key={entry} className="flex gap-3 py-3.5 text-sm leading-5 text-[#17222a]/76">
              <span className="font-mono text-[9px] text-[#315f82]/48">{String(index + 1).padStart(2, "0")}</span>
              {entry}
            </li>
          ))}
        </ul>
      </div>
      <div id="sample-assessment" className="overflow-hidden rounded-[24px] bg-[#17222a] p-5 text-white sm:p-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#9cc2d8]">{item.sample.label}</p>
        <h2 className="mt-5 max-w-[18ch] text-3xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl">{item.sample.title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/58 sm:text-base">{item.sample.description}</p>
        <div className="mt-8 overflow-x-auto rounded-[16px] border border-white/9 bg-black/14 p-4 font-mono text-[11px] leading-6 text-[#b7d6e7] sm:p-5">
          <p className="text-white/34">&#123;</p>
          {item.sample.lines.map((line) => (
            <p key={line} className="pl-4">{line},</p>
          ))}
          <p className="text-white/34">&#125;</p>
        </div>
      </div>
    </section>
  );
}

function ActorComplianceSystem() {
  const workspace = ["Dashboard", "Review Queue", "Case Detail", "Intake", "Risks", "Evidence", "Findings", "Tasks", "Approvals", "Activity", "Report"];
  return (
    <>
      <section aria-labelledby="workspace-heading" className="mt-16 sm:mt-24">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#315f82]">Operational workspace</p>
            <h2 id="workspace-heading" className="mt-2 max-w-[16ch] text-3xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl">A case moves toward an accountable decision</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#334652]/62">The static interface demonstrates workflow and demo data. It does not connect to the reference backend in the deployed GitHub Pages site.</p>
        </div>
        <div className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {workspace.map((item, index) => (
            <div key={item} className={`rounded-[16px] border border-black/8 p-4 ${index === 0 ? "bg-[#dcecf0]" : index === workspace.length - 1 ? "bg-[#17222a] text-white" : "bg-white/66"}`}>
              <span className={`font-mono text-[9px] ${index === workspace.length - 1 ? "text-[#9cc2d8]" : "text-[#315f82]/48"}`}>{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-7 text-lg font-medium tracking-[-0.025em]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="architecture-heading" className="mt-16 overflow-hidden rounded-[24px] border border-black/8 bg-[#e5ece9] p-5 sm:mt-24 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#315f82]">System architecture</p>
        <h2 id="architecture-heading" className="mt-2 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Static workflow, canonical schema, reference backend</h2>
        <div className="mt-8 grid gap-3 lg:grid-cols-[1fr_auto_1.18fr_auto_0.86fr] lg:items-stretch">
          <article className="rounded-[18px] border border-white/75 bg-white/70 p-5"><p className="font-mono text-[9px] text-[#315f82]">GITHUB PAGES</p><h3 className="mt-5 text-xl font-medium tracking-[-0.03em]">Static workflow prototype</h3><p className="mt-3 text-sm leading-6 text-[#334652]/68">Dashboard, case routing, review queue, evidence states, approval gates, activity, and report views powered by demo data.</p></article>
          <span className="grid place-items-center text-2xl text-[#315f82]/40" aria-hidden="true">→</span>
          <article className="rounded-[18px] bg-[#17222a] p-5 text-white"><p className="font-mono text-[9px] text-[#9cc2d8]">CANONICAL MODEL</p><h3 className="mt-5 text-xl font-medium tracking-[-0.03em]">Case, consent, evidence, assessment</h3><p className="mt-3 text-sm leading-6 text-white/62">JSON schema and Pydantic concepts preserve scope, verification, retention, revocation, provenance, and review context.</p></article>
          <span className="grid place-items-center text-2xl text-[#315f82]/40" aria-hidden="true">→</span>
          <article className="rounded-[18px] border border-white/75 bg-white/70 p-5"><p className="font-mono text-[9px] text-[#315f82]">FASTAPI REFERENCE</p><h3 className="mt-5 text-xl font-medium tracking-[-0.03em]">Validation, rules, persistence, audit</h3><p className="mt-3 text-sm leading-6 text-[#334652]/68">Pydantic validation, explainable rules, SQLAlchemy/SQLite records, reports, role-aware actions, retention, soft deletion, and audit logs.</p></article>
        </div>
      </section>
    </>
  );
}

function WorkSections({ item }: { item: WorkItem }) {
  return (
    <div className="mt-16 sm:mt-24">
      {item.sections.map((section, index) => (
        <section key={section.heading} className="grid gap-5 border-t border-black/10 py-8 sm:py-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
          <div className="flex gap-3">
            <span className="font-mono text-[9px] text-[#315f82]/45">{String(index + 1).padStart(2, "0")}</span>
            <h2 className="text-xl font-medium leading-6 tracking-[-0.025em]">{section.heading}</h2>
          </div>
          <div className="max-w-[47rem] space-y-4 text-base leading-7 text-[#334652]/74 sm:text-lg sm:leading-8">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.points ? (
              <ul className="grid gap-2 pt-2 sm:grid-cols-2">
                {section.points.map((point) => (
                  <li key={point} className="rounded-[14px] bg-[#e7ecea] p-3 text-sm leading-5 text-[#17222a]/72">{point}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  );
}

export function WorkDetail({ item, previous, next }: WorkDetailProps) {
  return (
    <DetailShell item={item} previous={previous} next={next} visual={<WorkHeroVisual visual={item.visual} />}>
      <section aria-labelledby="overview-heading" className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
        <h2 id="overview-heading" className="text-sm font-semibold text-[#315f82]">Overview</h2>
        <p className="max-w-[50rem] text-2xl leading-[1.22] tracking-[-0.03em] text-[#17222a]/84 sm:text-3xl">{item.overview}</p>
      </section>
      <Workflow item={item} />
      {item.slug === "ai-generated-actor-compliance" ? <ActorComplianceSystem /> : null}
      <SignalGrid item={item} />
      <EvidenceAndSample item={item} />
      <WorkSections item={item} />
    </DetailShell>
  );
}
