import Link from "next/link";
import { DetailShell } from "@/components/detail/detail-shell";
import {
  automationBoundary,
  chinaFrameworkResults,
  chinaLegalFrameworkItem,
  chinaResearchQuestions,
  chinaTransformationSteps,
} from "@/data/china-legal-framework";

function TransformationVisual() {
  return (
    <figure
      aria-label="Transformation from Chinese legal provisions to human-reviewed compliance conclusions"
      className=""
    >
      <div className="rounded-xl border border-line bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="yc-kicker">Research method</p>
            <h2 className="mt-2 yc-h3">Legal clause to control</h2>
          </div>
          <span className="rounded-full border border-line bg-white px-3 py-2 font-mono text-xs text-accent">HUMAN-ROUTED</span>
        </div>
        <div className="mt-5 grid gap-2.5 md:grid-cols-3">
          {chinaTransformationSteps.map((step, index) => (
            <div key={step} className="relative rounded-lg border border-line bg-white p-4">
              <span className="font-mono text-xs text-accent">0{index + 1}</span>
              <p className="mt-2 text-sm font-medium leading-5 text-ink">{step}</p>
              {index < chinaTransformationSteps.length - 1 ? (
                <span className="absolute -bottom-3 left-1/2 z-10 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border border-line bg-white text-accent md:left-auto md:-right-3 md:top-1/2 md:-translate-y-1/2 md:translate-x-0" aria-hidden="true">→</span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-lg bg-accent-soft p-4 text-ink">
            <p className="yc-kicker">Boundary</p>
            <p className="mt-2 max-w-[52ch] text-sm leading-6 text-muted">Machine-readable does not mean machine-interpreted. The evaluator executes structured interpretations after the relevant human confirmations are recorded.</p>
          </div>
          <div className="rounded-lg bg-white p-4">
            <p className="yc-kicker">Integrity</p>
            <p className="mt-4 text-sm leading-6 text-muted">Source excerpts are stored with SHA-256 repository-integrity checks.</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return <div><p className="yc-kicker">{kicker}</p><h2 className="mt-2 yc-h2">{title}</h2></div>;
}

function RelatedProject() {
  return (
    <section className="mt-10 overflow-hidden rounded-xl border border-line bg-accent-soft p-5 text-ink">
      <p className="yc-kicker">From legal rules to operational compliance</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-white p-5"><p className="text-xs text-muted">Upstream research</p><h3 className="mt-1.5 yc-h3">China AIGC Legal-Clause-to-Control Framework</h3><p className="mt-3 text-sm leading-6 text-muted">Studies how selected legal provisions become reviewed, traceable controls.</p></div>
        <Link href="/work/ai-generated-actor-compliance" className="rounded-lg border border-line bg-white p-5 text-ink transition-colors hover:border-accent"><p className="text-xs text-muted">Operational application</p><h3 className="mt-1.5 yc-h3">AI-Generated Actor Compliance Assessment</h3><p className="mt-3 text-sm leading-6 text-muted">Applies structured rules to concrete synthetic-media cases, evidence, approvals, and audit trails.</p></Link>
      </div>
    </section>
  );
}

export function ChinaLegalFrameworkDetail() {
  const item = chinaLegalFrameworkItem;
  return (
    <DetailShell item={item} visual={<TransformationVisual />}>
      <section className="mt-12 grid gap-5 md:grid-cols-[11rem_1fr] md:gap-8">
        <h2 className="text-sm font-semibold text-accent">Research overview</h2>
        <p className="max-w-[50rem] text-[17px] leading-7 text-ink">This project separates legal source, interpretation, control, evidence test, and final conclusion so a deterministic field check is never represented as automated legal judgment.</p>
      </section>

      <section className="mt-10 sm:mt-12"><SectionHeading kicker="Research questions" title="What needs to remain traceable?" /><ol className="mt-4 grid gap-3 md:grid-cols-2">{chinaResearchQuestions.map((question, index) => <li key={question} className="rounded-xl border border-line bg-white p-5"><span className="font-mono text-xs text-accent">RQ{index + 1}</span><p className="mt-2 text-base leading-6 text-ink">{question}</p></li>)}</ol></section>

      <section className="mt-10 grid gap-5 md:grid-cols-[11rem_1fr] md:gap-8"><SectionHeading kicker="Method" title="From source clause to executable control" /><div className="space-y-5 yc-body !text-base !leading-7"><p>Formal Chinese source text is the primary research basis; English is a working translation only. Each complete norm keeps the source document, article number, semantic fields, evidence requirements, ambiguity notes, automation profile, and review status distinct.</p><p>Direct legal requirements are labelled separately from derived organizational assurances and technical implementation controls. Author review and qualified legal-expert review are distinct fields, rather than being collapsed into a single “validated” flag.</p></div></section>

      <section className="mt-10 sm:mt-12"><SectionHeading kicker="Results" title="Repository validation, not legal certification" /><div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">{chinaFrameworkResults.map((result) => <article key={result.label} className="rounded-lg border border-line bg-white p-5"><p className="text-2xl font-semibold tracking-tight">{result.value}</p><p className="mt-2 text-sm leading-5 text-muted">{result.label}</p></article>)}</div><p className="mt-5 max-w-[70ch] text-sm leading-6 text-muted">These results support schema validity, repository integrity, source-to-control traceability, evaluator behavior, and designed-case routing. They do not establish substantive legal correctness, external legal validity, production compliance, regulator approval, or legal certification.</p></section>

      <section className="mt-10 sm:mt-12"><SectionHeading kicker="Automation boundary" title="Three decisions, not one automated verdict" /><div className="mt-4 overflow-x-auto rounded-xl border border-line bg-white"><table className="min-w-[720px] w-full border-collapse text-left text-sm"><thead className="border-b border-line bg-white text-muted"><tr><th className="p-4 font-medium">Control</th><th className="p-4 font-medium">Applicability</th><th className="p-4 font-medium">Evidence test</th><th className="p-4 font-medium">Final decision</th></tr></thead><tbody>{automationBoundary.map((row) => <tr key={row.control} className="border-b border-line last:border-0"><td className="p-4 font-medium text-ink">{row.control}</td><td className="p-4 text-muted">{row.applicability}</td><td className="p-4 text-muted">{row.evidenceTest}</td><td className="p-4 text-muted">{row.finalDecision}</td></tr>)}</tbody></table></div><div className="mt-5 grid gap-3 md:grid-cols-3"><div className="rounded-lg border border-line bg-white p-4"><strong className="text-sm">Fully automatable</strong><p className="mt-2 text-sm leading-5 text-muted">Structured evidence can be tested mechanically.</p></div><div className="rounded-lg border border-line bg-white p-4"><strong className="text-sm">Partially automatable</strong><p className="mt-2 text-sm leading-5 text-muted">Software checks evidence, but a keyed review remains open.</p></div><div className="rounded-lg border border-line bg-white p-4"><strong className="text-sm">Human review required</strong><p className="mt-2 text-sm leading-5 text-muted">Open-textured legal judgment cannot be reduced to a field check.</p></div></div></section>

      <section className="mt-10 grid gap-5 border-t border-line py-8 sm:py-10 md:grid-cols-[11rem_1fr] md:gap-8"><h2 className="yc-h3">Source traceability and review design</h2><div className="space-y-4 yc-body !text-base !leading-7"><p>Source excerpts carry a SHA-256 digest to detect changes to the repository excerpt. That digest does not prove that an official webpage remains current or that the stored excerpt has been independently verified word-for-word.</p><p>The independent-review protocol keeps second-coder review, qualified legal review, and transparent adjudication separate. The current repository does not claim independent agreement or a qualified legal-expert conclusion.</p></div></section>

      <section className="grid gap-5 border-t border-line py-6 md:grid-cols-[11rem_1fr] md:gap-8"><h2 className="yc-h3">Scope and limitations</h2><div className="space-y-4 yc-body !text-base !leading-7"><p>The selected corpus is intentionally limited. It does not claim full coverage of Chinese AI law, sector-specific duties, or production compliance workflows.</p><p>All examples are synthetic or paraphrased for research use. The evaluator executes human-reviewed structured interpretations and should not be represented as an automated legal interpreter.</p></div></section>

      <section className="grid gap-5 border-t border-line py-6 md:grid-cols-[11rem_1fr] md:gap-8"><h2 className="yc-h3">My contribution</h2><p className="max-w-[47rem] yc-body !text-base !leading-7">I designed the research framing, clause-annotation approach, legal-norm and control schemas, control derivation logic, validation approach, and paper draft. The work focuses on making assumptions visible and reviewable, rather than claiming to automate legal interpretation.</p></section>

      <RelatedProject />
    </DetailShell>
  );
}
