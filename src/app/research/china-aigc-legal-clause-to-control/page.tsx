import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter, SiteNav } from "@/components/site-nav";
import { ArrowUpRight } from "@/components/home/icons";
import { chinaLegalFrameworkItem } from "@/data/china-legal-framework";
import { createContentMetadata } from "@/lib/content-metadata";

export const metadata: Metadata = createContentMetadata(chinaLegalFrameworkItem);

const REPO = "https://github.com/yuxuancheng123-spec/china-aigc-compliance-evidence";

const links = [
  { label: "Norm Explorer", href: "https://yuxuancheng123-spec.github.io/china-aigc-compliance-evidence/explorer/" },
  { label: "Code", href: REPO },
  { label: "Paper draft", href: `${REPO}/tree/main/paper` },
];

const contributions = [
  {
    title: "One “automated” label hides three different questions",
    body: "Each control records separately whether its trigger applies, what its evidence test can check, and whether the result may close without a person. A label-existence check can be automated after a human confirms the scenario; the prominence of that label cannot.",
  },
  {
    title: "Three ways a check claims more than it shows",
    body: "An exception result that travels beyond its scope; an organizational safeguard presented as the statutory duty; and an observation (a label is present) promoted into a legal judgment (it is prominent enough).",
  },
  {
    title: "Counterexamples found what designed cases missed",
    body: "All 21 cases I designed passed. Targeted counterexamples then exposed five defects in my own evaluator — the same failure modes the project describes. Each is now fixed and pinned by a regression test.",
  },
];

const diagnostics = [
  { input: "Scenario confirmed as not applicable", before: "pass", after: "not applicable" },
  { input: "Article 9 exception used at public dissemination", before: "pass", after: "fail" },
  { input: "Human review with no reviewer or date", before: "pass", after: "review" },
  { input: "Metadata fields present but empty", before: "pass", after: "fail" },
  { input: "No complaints yet, so complaint duty skipped", before: "not applicable", after: "review" },
];

const skills = [
  {
    title: "Close reading of PRC regulation",
    body: "Worked from the official Chinese text, verbatim, and used drafting history and the regulator's official Q&A to settle who must obtain consent under Deep Synthesis Article 14(2).",
  },
  {
    title: "Legal knowledge representation",
    body: "Designed the norm and control schemas: actor, modality, trigger, exception, evidence, review status, and the three-part automation profile.",
  },
  {
    title: "Engineering and testing",
    body: "Python evaluator with a restricted expression language, JSON Schema validation, source-excerpt hashing, 56 tests, and CI that fails when annotations drift from the canonical norms.",
  },
  {
    title: "Research judgment",
    body: "Kept claims within the evidence: author review and legal-expert review are separate fields, and nothing here is presented as legal certification.",
  },
];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 font-serif text-base uppercase tracking-wide text-muted">{title}</h2>
      {children}
    </section>
  );
}

function Outcome({ value, muted }: { value: string; muted?: boolean }) {
  return <span className={muted ? "text-subtle line-through decoration-subtle/40" : "font-medium text-ink"}>{value}</span>;
}

export default function ChinaAigcLegalClauseToControlPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-8 pt-10 sm:px-8 sm:pt-14">
        <Link href="/#research" className="text-sm text-subtle hover:text-ink">
          ← Research
        </Link>

        <header className="mt-8">
          <p className="text-xs uppercase tracking-wider text-subtle">Legal informatics · 2026 · Paper in revision</p>
          <h1 className="mt-3 font-serif text-3xl font-light leading-tight tracking-wide text-ink sm:text-[2.1rem]">
            When can software close a legal check?
          </h1>
          <p className="mt-4 font-serif text-lg leading-relaxed text-muted">
            Turning selected Chinese rules on AI-generated content into executable controls — and finding where a
            passing check says less than it seems. Software can execute a reviewed legal interpretation; it should
            not be the interpreter.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-subtle transition-colors hover:text-ink"
              >
                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <Section title="Contribution">
          <ol className="space-y-8">
            {contributions.map((item, index) => (
              <li key={item.title} className="grid grid-cols-[2rem_1fr] gap-2">
                <span className="pt-0.5 font-serif text-sm text-subtle">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-lg leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Evidence">
          <p className="text-[15px] leading-relaxed text-muted">
            The same counterexamples, run before and after the fix. Each row is a synthetic record designed to probe one
            boundary; outcomes describe the control&apos;s routing, not a legal conclusion.
          </p>
          <div className="yc-table-wrap mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-line text-left text-xs uppercase tracking-wider text-subtle">
                  <th className="py-2 pr-4 font-normal">Counterexample</th>
                  <th className="py-2 pr-4 font-normal">Before</th>
                  <th className="py-2 font-normal">After</th>
                </tr>
              </thead>
              <tbody>
                {diagnostics.map((row) => (
                  <tr key={row.input} className="border-b border-line align-top">
                    <td className="py-3 pr-4 text-muted">{row.input}</td>
                    <td className="whitespace-nowrap py-3 pr-4"><Outcome value={row.before} muted /></td>
                    <td className="whitespace-nowrap py-3"><Outcome value={row.after} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-subtle">
            Full inputs and outputs:{" "}
            <a className="yc-underline" href={`${REPO}/blob/main/examples/boundary-diagnostics.yml`} target="_blank" rel="noopener noreferrer">
              boundary-diagnostics.yml
            </a>
            .
          </p>
        </Section>

        <Section title="What this project shows">
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.title}>
                <h3 className="font-serif text-base text-ink">{skill.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{skill.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Scope">
          <p className="text-[15px] leading-relaxed text-muted">
            Five instruments — the Generative AI Interim Measures, the Deep Synthesis Provisions, the AIGC Labeling
            Measures, GB 45438-2025, and the Personal Information Protection Law — encoded as 11 norms and 13 controls.
            All records are synthetic. Interpretations are mine; independent legal review is still pending. This is a
            research prototype, not legal advice or a compliance product.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Applied downstream in the{" "}
            <Link href="/work/ai-generated-actor-compliance" className="yc-underline">
              AI-Generated Actor Compliance Assessment
            </Link>
            .
          </p>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
