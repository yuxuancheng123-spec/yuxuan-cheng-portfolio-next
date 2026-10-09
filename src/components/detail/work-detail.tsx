import { DetailShell } from "@/components/detail/detail-shell";
import type { WorkItem } from "@/data/content";

type WorkDetailProps = {
  item: WorkItem;
  previous?: WorkItem;
  next?: WorkItem;
};

function Workflow({ item }: { item: WorkItem }) {
  return (
    <section aria-labelledby="workflow-heading" className="mt-10 sm:mt-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="yc-kicker">System view</p>
          <h2 id="workflow-heading" className="mt-2 yc-h2">
            {item.workflowTitle}
          </h2>
        </div>
        <span className="hidden text-xs text-muted sm:block">01—05</span>
      </div>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {item.workflow.map((step, index) => (
          <div key={step.label} className="rounded-lg border border-line bg-white p-4 sm:p-5">
            <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 text-[15px] font-semibold">{step.label}</h3>
            <p className="mt-2 text-sm leading-5 text-muted">{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SignalGrid({ item }: { item: WorkItem }) {
  return (
    <section aria-labelledby="signals-heading" className="mt-10 sm:mt-12">
      <h2 id="signals-heading" className="yc-h2">
        What the review makes visible
      </h2>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {item.signals.map((signal) => (
          <div key={signal.label} className="rounded-xl border border-line bg-white p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold text-muted">{signal.label}</span>
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            </div>
            <p className="mt-2 yc-h3">{signal.value}</p>
            <p className="mt-2 text-sm leading-5 text-muted">{signal.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EvidenceAndSample({ item }: { item: WorkItem }) {
  return (
    <section className="mt-10 grid gap-3">
      <div className="rounded-xl border border-line bg-white p-5">
        <p className="yc-kicker">Evidence checklist</p>
        <ul className="mt-6 divide-y divide-line">
          {item.evidenceChecklist.map((entry, index) => (
            <li key={entry} className="flex gap-3 py-3.5 text-sm leading-5 text-ink">
              <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
              {entry}
            </li>
          ))}
        </ul>
      </div>
      <div id="sample-assessment" className="overflow-hidden rounded-xl bg-accent-soft p-5 text-ink">
        <p className="yc-kicker">{item.sample.label}</p>
        <h2 className="mt-5 yc-h2">{item.sample.title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{item.sample.description}</p>
        <div className="mt-5 overflow-x-auto rounded-lg border border-line bg-white p-4 font-mono text-xs leading-6 text-ink sm:p-5">
          <p className="text-muted">&#123;</p>
          {item.sample.lines.map((line) => (
            <p key={line} className="pl-4">{line},</p>
          ))}
          <p className="text-muted">&#125;</p>
        </div>
      </div>
    </section>
  );
}

function ActorComplianceSystem() {
  const workspace = ["Dashboard", "Review Queue", "Case Detail", "Intake", "Risks", "Evidence", "Findings", "Tasks", "Approvals", "Activity", "Report"];
  return (
    <>
      <section aria-labelledby="workspace-heading" className="mt-10 sm:mt-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="yc-kicker">Operational workspace</p>
            <h2 id="workspace-heading" className="mt-2 yc-h2">A case moves toward an accountable decision</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">The static interface demonstrates workflow and demo data. It does not connect to the reference backend in the deployed GitHub Pages site.</p>
        </div>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {workspace.map((item, index) => (
            <div key={item} className={`rounded-lg border border-line p-4 ${index === 0 ? "bg-white" : index === workspace.length - 1 ? "bg-accent-soft  text-ink" : "bg-white"}`}>
              <span className={`font-mono text-xs ${index === workspace.length - 1 ? "text-accent" : "text-accent"}`}>{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-[15px] font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="architecture-heading" className="mt-10 overflow-hidden rounded-xl border border-line bg-white p-5">
        <p className="yc-kicker">System architecture</p>
        <h2 id="architecture-heading" className="mt-2 yc-h2">Static workflow, canonical schema, reference backend</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <article className="rounded-lg border border-line bg-white p-5"><p className="font-mono text-xs text-accent">GITHUB PAGES</p><h3 className="mt-2 yc-h3">Static workflow prototype</h3><p className="mt-3 text-sm leading-6 text-muted">Dashboard, case routing, review queue, evidence states, approval gates, activity, and report views powered by demo data.</p></article>
          <article className="rounded-lg bg-accent-soft p-5 text-ink"><p className="font-mono text-xs text-accent">CANONICAL MODEL</p><h3 className="mt-2 yc-h3">Case, consent, evidence, assessment</h3><p className="mt-3 text-sm leading-6 text-muted">JSON schema and Pydantic concepts preserve scope, verification, retention, revocation, provenance, and review context.</p></article>
          <article className="rounded-lg border border-line bg-white p-5"><p className="font-mono text-xs text-accent">FASTAPI REFERENCE</p><h3 className="mt-2 yc-h3">Validation, rules, persistence, audit</h3><p className="mt-3 text-sm leading-6 text-muted">Pydantic validation, explainable rules, SQLAlchemy/SQLite records, reports, role-aware actions, retention, soft deletion, and audit logs.</p></article>
        </div>
      </section>
    </>
  );
}

function WorkSections({ item }: { item: WorkItem }) {
  return (
    <div className="mt-10 sm:mt-12">
      {item.sections.map((section, index) => (
        <section key={section.heading} className="grid gap-5 border-t border-line py-6 md:grid-cols-[11rem_1fr] md:gap-8">
          <div className="flex gap-3">
            <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
            <h2 className="yc-h3">{section.heading}</h2>
          </div>
          <div className="max-w-[47rem] space-y-4 yc-body !text-base !leading-7">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.points ? (
              <ul className="grid gap-2 pt-2 sm:grid-cols-2">
                {section.points.map((point) => (
                  <li key={point} className="rounded-lg bg-white p-3 text-sm leading-5 text-ink">{point}</li>
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
    <DetailShell item={item} previous={previous} next={next}>
      <section aria-labelledby="overview-heading" className="mt-12 grid gap-5 md:grid-cols-[11rem_1fr] md:gap-8">
        <h2 id="overview-heading" className="text-sm font-semibold text-accent">Overview</h2>
        <p className="max-w-[50rem] text-[17px] leading-7 text-ink">{item.overview}</p>
      </section>
      <Workflow item={item} />
      {item.slug === "ai-generated-actor-compliance" ? <ActorComplianceSystem /> : null}
      <SignalGrid item={item} />
      <EvidenceAndSample item={item} />
      <WorkSections item={item} />
    </DetailShell>
  );
}
