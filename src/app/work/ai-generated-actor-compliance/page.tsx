import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter, SiteNav } from "@/components/site-nav";
import { ArrowUpRight } from "@/components/home/icons";
import { getWorkItem } from "@/data/content";
import { createContentMetadata } from "@/lib/content-metadata";

const item = getWorkItem("ai-generated-actor-compliance")!;
export const metadata: Metadata = createContentMetadata(item);

const REPO = "https://github.com/yuxuancheng123-spec/ai-generated-actor-compliance";
const DEMO = "https://yuxuancheng123-spec.github.io/ai-generated-actor-compliance/web/";

const links = [
  { label: "Live demo", href: DEMO },
  { label: "中文演示", href: `${DEMO}demo.zh.html` },
  { label: "Code", href: REPO },
];

const contributions = [
  {
    title: "Consent is a scoped record, not a checkbox",
    body: "Likeness, voice, motion, training use, territory, duration, and revocation are recorded separately, so a valid likeness licence cannot hide a missing voice or training permission. An uploaded contract counts as submitted evidence until someone reviews it.",
  },
  {
    title: "Hard stops and evidence gates decide; the score only ranks",
    body: "Four of the 13 rules are hard stops — unverified commercial use of a real person, sexual or defamatory portrayal, a minor in a sensitive context, and training without separate permission — and block release outright. The score orders the rest of the queue. Release still needs accepted evidence and business, privacy, legal, and brand-safety approvals.",
  },
  {
    title: "One rulebook, two engines, checked against each other",
    body: "The browser demo and the FastAPI backend read the same rulebook, and a parity test runs both on more than 600 cases. Each rule cites its Chinese legal basis — Civil Code portrait and voice rights, the PIPL, the Deep Synthesis Provisions, the Labeling Measures — linked to the legal-clause-to-control framework.",
  },
];

const skills = [
  {
    title: "Privacy engineering",
    body: "LINDDUN threat model, personal-data lifecycle for face, voice, and motion, retention and soft deletion, and an audit log that survives deletion.",
  },
  {
    title: "Product and workflow design",
    body: "A review queue, case detail, evidence lifecycle, and approval gates that a compliance team could actually work in, in English and Chinese.",
  },
  {
    title: "Backend engineering",
    body: "FastAPI with Pydantic schemas, SQLAlchemy records, role-aware review actions, a Markdown report generator, tests, and CI.",
  },
  {
    title: "Regulatory mapping",
    body: "Rules tied to PRC sources first, with EU and US references alongside, and the mapping stated as research interpretation rather than advice.",
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

export default function ActorCompliancePage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-8 pt-10 sm:px-8 sm:pt-14">
        <Link href="/#work" className="text-sm text-subtle hover:text-ink">
          ← Projects
        </Link>

        <header className="mt-8">
          <p className="text-xs uppercase tracking-wider text-subtle">Privacy engineering · 2026 · Working prototype</p>
          <h1 className="mt-3 font-serif text-3xl font-light leading-tight tracking-wide text-ink sm:text-[2.1rem]">
            Can this face or voice be used — and who can prove it?
          </h1>
          <p className="mt-4 font-serif text-lg leading-relaxed text-muted">
            A compliance workspace for an AI-actor platform. Every release decision traces back to a scoped consent
            record, reviewed evidence, and a named rule with its legal basis.
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

        <figure className="mt-10">
          <div className="overflow-hidden rounded-lg border border-line bg-white">
            <Image
              src="/images/work/actor-rule-trace.jpg"
              alt="Risk assessment for a celebrity advertisement: score 13, prohibited, with a rule trace listing R-01, R-04, R-09, and R-13 and the Chinese legal basis of each"
              width={960}
              height={712}
              priority
              sizes="(max-width: 672px) 100vw, 640px"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-xs leading-relaxed text-subtle">
            A celebrity advertisement with an uploaded but unverified contract. R-01 is a hard stop, so the case is
            blocked; the rule trace shows why, and on what legal basis.
          </figcaption>
        </figure>

        <Section title="Contribution">
          <ol className="space-y-8">
            {contributions.map((entry, index) => (
              <li key={entry.title} className="grid grid-cols-[2rem_1fr] gap-2">
                <span className="pt-0.5 font-serif text-sm text-subtle">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-lg leading-snug text-ink">{entry.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{entry.body}</p>
                </div>
              </li>
            ))}
          </ol>
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
            The platform is fictional and every record is synthetic. The live demo runs in the browser with demo data:
            it is not connected to the backend (they share the rulebook, not a server), and it has no sign-in or real
            file upload. The legal mapping is research interpretation, not legal advice.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            The legal reasoning behind the rules is developed upstream in the{" "}
            <Link href="/research/china-aigc-legal-clause-to-control" className="yc-underline">
              China AIGC Legal-Clause-to-Control Framework
            </Link>
            .
          </p>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
