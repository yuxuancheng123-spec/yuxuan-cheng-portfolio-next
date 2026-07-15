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
      className="overflow-hidden rounded-[28px] border border-black/8 bg-[#dfe8ee] p-4 shadow-[0_18px_55px_rgba(38,57,67,0.08)] sm:p-7 lg:p-10"
    >
      <div className="rounded-[22px] border border-white/75 bg-white/64 p-5 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#315f82]">Research method</p>
            <h2 className="mt-2 text-2xl font-medium tracking-[-0.035em]">Legal clause to control</h2>
          </div>
          <span className="rounded-full border border-[#315f82]/12 bg-[#e7f0f7] px-3 py-2 font-mono text-[9px] text-[#315f82]">HUMAN-ROUTED</span>
        </div>
        <div className="mt-8 grid gap-2.5 md:grid-cols-3">
          {chinaTransformationSteps.map((step, index) => (
            <div key={step} className="relative rounded-[16px] border border-black/7 bg-[#f9fbfb] p-4">
              <span className="font-mono text-[9px] text-[#315f82]/48">0{index + 1}</span>
              <p className="mt-7 text-sm font-medium leading-5 tracking-[-0.02em] text-[#17222a]">{step}</p>
              {index < chinaTransformationSteps.length - 1 ? (
                <span className="absolute -bottom-3 left-1/2 z-10 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border border-black/7 bg-white text-[#315f82]/48 md:left-auto md:-right-3 md:top-1/2 md:-translate-y-1/2 md:translate-x-0" aria-hidden="true">→</span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-[16px] bg-[#17222a] p-4 text-white">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#9cc2d8]">Boundary</p>
            <p className="mt-4 max-w-[52ch] text-sm leading-6 text-white/68">Machine-readable does not mean machine-interpreted. The evaluator executes structured interpretations after the relevant human confirmations are recorded.</p>
          </div>
          <div className="rounded-[16px] bg-[#d9e7df] p-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#315f82]">Integrity</p>
            <p className="mt-4 text-sm leading-6 text-[#334652]/72">Source excerpts are stored with SHA-256 repository-integrity checks.</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return <div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#315f82]">{kicker}</p><h2 className="mt-2 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">{title}</h2></div>;
}

function RelatedProject() {
  return (
    <section className="mt-16 overflow-hidden rounded-[24px] border border-black/8 bg-[#17222a] p-5 text-white sm:mt-24 sm:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#9cc2d8]">From legal rules to operational compliance</p>
      <div className="mt-7 grid gap-3 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <div className="rounded-[18px] border border-white/10 bg-white/[0.05] p-5"><p className="text-xs text-white/42">Upstream research</p><h3 className="mt-3 text-2xl font-medium tracking-[-0.035em]">China AIGC Legal-Clause-to-Control Framework</h3><p className="mt-3 text-sm leading-6 text-white/62">Studies how selected legal provisions become reviewed, traceable controls.</p></div>
        <span className="grid place-items-center text-2xl text-[#9cc2d8]/60" aria-hidden="true">→</span>
        <Link href="/work/ai-generated-actor-compliance" className="rounded-[18px] border border-[#9cc2d8]/20 bg-[#dcecf0] p-5 text-[#17222a] transition hover:-translate-y-1"><p className="text-xs text-[#334652]/50">Operational application</p><h3 className="mt-3 text-2xl font-medium tracking-[-0.035em]">AI-Generated Actor Compliance Assessment</h3><p className="mt-3 text-sm leading-6 text-[#334652]/68">Applies structured rules to concrete synthetic-media cases, evidence, approvals, and audit trails.</p></Link>
      </div>
    </section>
  );
}

export function ChinaLegalFrameworkDetail() {
  const item = chinaLegalFrameworkItem;
  return (
    <DetailShell item={item} visual={<TransformationVisual />}>
      <section className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
        <h2 className="text-sm font-semibold text-[#315f82]">Research overview</h2>
        <p className="max-w-[50rem] text-2xl leading-[1.22] tracking-[-0.03em] text-[#17222a]/84 sm:text-3xl">This project separates legal source, interpretation, control, evidence test, and final conclusion so a deterministic field check is never represented as automated legal judgment.</p>
      </section>

      <section className="mt-16 sm:mt-24"><SectionHeading kicker="Research questions" title="What needs to remain traceable?" /><ol className="mt-7 grid gap-3 md:grid-cols-2">{chinaResearchQuestions.map((question, index) => <li key={question} className="rounded-[20px] border border-black/8 bg-white/66 p-5 sm:p-6"><span className="font-mono text-[10px] text-[#315f82]/52">RQ{index + 1}</span><p className="mt-6 text-base leading-6 text-[#17222a]/78">{question}</p></li>)}</ol></section>

      <section className="mt-16 grid gap-5 sm:mt-24 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12"><SectionHeading kicker="Method" title="From source clause to executable control" /><div className="space-y-5 text-base leading-7 text-[#334652]/74 sm:text-lg sm:leading-8"><p>Formal Chinese source text is the primary research basis; English is a working translation only. Each complete norm keeps the source document, article number, semantic fields, evidence requirements, ambiguity notes, automation profile, and review status distinct.</p><p>Direct legal requirements are labelled separately from derived organizational assurances and technical implementation controls. Author review and qualified legal-expert review are distinct fields, rather than being collapsed into a single “validated” flag.</p></div></section>

      <section className="mt-16 sm:mt-24"><SectionHeading kicker="Results" title="Repository validation, not legal certification" /><div className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">{chinaFrameworkResults.map((result) => <article key={result.label} className="rounded-[18px] border border-black/8 bg-[#e5ece9] p-5"><p className="text-3xl font-medium tracking-[-0.04em]">{result.value}</p><p className="mt-7 text-sm leading-5 text-[#334652]/66">{result.label}</p></article>)}</div><p className="mt-5 max-w-[70ch] text-sm leading-6 text-[#334652]/62">These results support schema validity, repository integrity, source-to-control traceability, evaluator behavior, and designed-case routing. They do not establish substantive legal correctness, external legal validity, production compliance, regulator approval, or legal certification.</p></section>

      <section className="mt-16 sm:mt-24"><SectionHeading kicker="Automation boundary" title="Three decisions, not one automated verdict" /><div className="mt-7 overflow-x-auto rounded-[22px] border border-black/8 bg-white/70"><table className="min-w-[720px] w-full border-collapse text-left text-sm"><thead className="border-b border-black/8 bg-[#edf2f1] text-[#334652]/62"><tr><th className="p-4 font-medium">Control</th><th className="p-4 font-medium">Applicability</th><th className="p-4 font-medium">Evidence test</th><th className="p-4 font-medium">Final decision</th></tr></thead><tbody>{automationBoundary.map((row) => <tr key={row.control} className="border-b border-black/7 last:border-0"><td className="p-4 font-medium text-[#17222a]">{row.control}</td><td className="p-4 text-[#334652]/70">{row.applicability}</td><td className="p-4 text-[#334652]/70">{row.evidenceTest}</td><td className="p-4 text-[#334652]/70">{row.finalDecision}</td></tr>)}</tbody></table></div><div className="mt-5 grid gap-3 md:grid-cols-3"><div className="rounded-[16px] bg-[#dcecf0] p-4"><strong className="text-sm">Fully automatable</strong><p className="mt-2 text-sm leading-5 text-[#334652]/68">Structured evidence can be tested mechanically.</p></div><div className="rounded-[16px] bg-[#e9eadf] p-4"><strong className="text-sm">Partially automatable</strong><p className="mt-2 text-sm leading-5 text-[#334652]/68">Software checks evidence, but a keyed review remains open.</p></div><div className="rounded-[16px] bg-[#ece6e6] p-4"><strong className="text-sm">Human review required</strong><p className="mt-2 text-sm leading-5 text-[#334652]/68">Open-textured legal judgment cannot be reduced to a field check.</p></div></div></section>

      <section className="mt-16 grid gap-5 border-t border-black/10 py-8 sm:mt-24 sm:py-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12"><h2 className="text-xl font-medium tracking-[-0.025em]">Source traceability and review design</h2><div className="space-y-4 text-base leading-7 text-[#334652]/74 sm:text-lg sm:leading-8"><p>Source excerpts carry a SHA-256 digest to detect changes to the repository excerpt. That digest does not prove that an official webpage remains current or that the stored excerpt has been independently verified word-for-word.</p><p>The independent-review protocol keeps second-coder review, qualified legal review, and transparent adjudication separate. The current repository does not claim independent agreement or a qualified legal-expert conclusion.</p></div></section>

      <section className="grid gap-5 border-t border-black/10 py-8 sm:py-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12"><h2 className="text-xl font-medium tracking-[-0.025em]">Scope and limitations</h2><div className="space-y-4 text-base leading-7 text-[#334652]/74 sm:text-lg sm:leading-8"><p>The selected corpus is intentionally limited. It does not claim full coverage of Chinese AI law, sector-specific duties, or production compliance workflows.</p><p>All examples are synthetic or paraphrased for research use. The evaluator executes human-reviewed structured interpretations and should not be represented as an automated legal interpreter.</p></div></section>

      <section className="grid gap-5 border-t border-black/10 py-8 sm:py-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12"><h2 className="text-xl font-medium tracking-[-0.025em]">My contribution</h2><p className="max-w-[47rem] text-base leading-7 text-[#334652]/74 sm:text-lg sm:leading-8">I designed the research framing, clause-annotation approach, legal-norm and control schemas, control derivation logic, validation approach, and paper draft. The work focuses on making assumptions visible and reviewable, rather than claiming to automate legal interpretation.</p></section>

      <RelatedProject />
    </DetailShell>
  );
}
