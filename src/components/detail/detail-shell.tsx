import Link from "next/link";
import type { ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";
import {
  getContentByPath,
  getContentPath,
  type ContentLink,
  type DetailItem,
} from "@/data/content";

type DetailShellProps = {
  item: DetailItem;
  previous?: DetailItem;
  next?: DetailItem;
  visual: ReactNode;
  children: ReactNode;
};

const categoryHref = {
  Work: "/#work",
  Research: "/#research-writing",
  Writing: "/#research-writing",
} as const;

function DetailLink({ link }: { link: ContentLink }) {
  const className =
    "yc-button yc-button-secondary border-black/10 bg-white/74 focus-visible:outline-[#315f82]";

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function DetailHeader({ item }: { item: DetailItem }) {
  return (
    <header className="flex items-center justify-between gap-4 py-5 sm:py-6">
      <Link
        href="/"
        className="text-sm font-semibold tracking-[-0.02em] text-[#17222a] transition hover:text-[#315f82] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315f82]"
      >
        Yuxuan Cheng
      </Link>
      <Link
        href={categoryHref[item.kind]}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/10 bg-white/68 px-4 text-sm font-medium text-[#334652] transition hover:-translate-x-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315f82]"
      >
        <span aria-hidden="true">←</span>
        Back to {item.kind}
      </Link>
    </header>
  );
}

function MetadataGrid({ item }: { item: DetailItem }) {
  const items =
    item.kind === "Writing"
      ? [
          { label: "Published", value: item.published },
          { label: "Reading time", value: item.readingTime },
          { label: item.roleLabel, value: item.role },
          { label: "Focus", value: item.methods.join(" · ") },
        ]
      : [
          ...(item.typeLabel ? [{ label: "Type", value: item.typeLabel }] : []),
          { label: "Year", value: item.year },
          { label: "Status", value: item.status },
          { label: item.roleLabel, value: item.role },
          { label: "Tools / methods", value: item.methods.join(" · ") },
        ];

  return (
    <dl className="mt-8 grid border-y border-black/10 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((meta, index) => (
        <div
          key={meta.label}
          className={`min-w-0 py-4 sm:px-4 lg:py-5 ${
            index > 0 ? "border-t border-black/10 sm:border-t-0 sm:border-l" : ""
          } ${index === 2 ? "sm:border-t lg:border-t-0" : ""}`}
        >
          <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#334652]/48">
            {meta.label}
          </dt>
          <dd className="mt-2 text-sm leading-5 text-[#17222a]/82">{meta.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function RelatedItems({ item }: { item: DetailItem }) {
  const related = item.relatedItems
    .map((path) => getContentByPath(path))
    .filter((entry): entry is DetailItem => Boolean(entry));

  if (!related.length) return null;

  return (
    <section aria-labelledby="related-heading" className="mt-20 border-t border-black/10 pt-8 sm:mt-28">
      <h2 id="related-heading" className="text-sm font-semibold text-[#334652]/58">
        Related work
      </h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {related.map((entry) => (
          <Link
            key={entry.slug}
            href={getContentPath(entry)}
            className="group rounded-[22px] border border-black/8 bg-white/62 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315f82] sm:p-6"
          >
            <span className="text-xs font-semibold text-[#315f82]">{entry.kind}</span>
            <h3 className="mt-8 max-w-[28rem] text-2xl font-medium leading-[1.02] tracking-[-0.035em] text-[#17222a]">
              {entry.title}
            </h3>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#334652]">
              Open
              <span className="transition duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function AdjacentNavigation({ previous, next }: { previous?: DetailItem; next?: DetailItem }) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="Adjacent content" className="mt-16 grid gap-3 sm:mt-20 md:grid-cols-2">
      {previous ? (
        <Link
          href={getContentPath(previous)}
          className="group rounded-[20px] border border-black/9 bg-[#e8eeec] p-5 transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315f82]"
        >
          <span className="text-xs text-[#334652]/55">Previous</span>
          <span className="mt-2 block text-lg font-medium leading-5 text-[#17222a]">
            {previous.title}
          </span>
        </Link>
      ) : (
        <span className="hidden md:block" />
      )}
      {next ? (
        <Link
          href={getContentPath(next)}
          className="group rounded-[20px] border border-black/9 bg-[#17222a] p-5 text-white transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315f82]"
        >
          <span className="text-xs text-white/50">Next</span>
          <span className="mt-2 block text-lg font-medium leading-5">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}

function DetailFooter() {
  return (
    <footer className="mt-20 border-t border-black/10 pb-28 pt-8 sm:mt-28 sm:pb-32">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-[#334652]/55">Research, governance, and responsible AI.</p>
          <p className="mt-1 text-xl font-medium tracking-[-0.025em] text-[#17222a]">Yuxuan Cheng</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-[#334652]">
          <a className="hover:text-[#315f82] focus-visible:outline-2 focus-visible:outline-[#315f82]" href="mailto:yuxuancheng123@gmail.com">
            Email
          </a>
          <a className="hover:text-[#315f82] focus-visible:outline-2 focus-visible:outline-[#315f82]" href="https://www.linkedin.com/in/yuxuan-cheng-86743631a" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-[#315f82] focus-visible:outline-2 focus-visible:outline-[#315f82]" href="https://github.com/yuxuancheng123-spec" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export function DetailShell({ item, previous, next, visual, children }: DetailShellProps) {
  const maxWidth = item.kind === "Work" ? "max-w-[1320px]" : item.kind === "Research" ? "max-w-[1120px]" : "max-w-[1040px]";
  const titleWidth = item.kind === "Work" ? "max-w-[13ch]" : item.kind === "Research" ? "max-w-[17ch]" : "max-w-[15ch]";
  const titleSize = item.kind === "Work"
    ? "text-[clamp(3.2rem,7.2vw,7.4rem)]"
    : item.kind === "Research"
      ? "text-[clamp(3rem,6.3vw,6.3rem)]"
      : "text-[clamp(3.1rem,6.8vw,6.8rem)]";

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f3f5f4] text-[#17222a]">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(49,95,130,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(49,95,130,0.025)_1px,transparent_1px)] bg-[size:96px_96px]" aria-hidden="true" />
      <div className={`relative mx-auto w-full ${maxWidth} px-4 sm:px-6 lg:px-8`}>
        <DetailHeader item={item} />
        <article>
          <header className="pt-8 sm:pt-12 lg:pt-16">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#315f82]">
                {item.kind}
              </span>
              <span className="h-px w-10 bg-[#315f82]/28" />
              <span className="text-xs text-[#334652]/50">{item.status}</span>
            </div>
            <h1 className={`${titleWidth} ${titleSize} mt-6 font-medium leading-[0.9] tracking-[-0.058em] text-[#17222a]`}>
              {item.title}
            </h1>
            <p className="mt-6 max-w-[46rem] text-xl leading-7 tracking-[-0.02em] text-[#334652]/72 sm:text-2xl sm:leading-8">
              {item.summary}
            </p>
            {item.links.length ? (
              <div className="mt-7 flex flex-wrap gap-2.5">
                {item.links.map((link) => (
                  <DetailLink key={link.label} link={link} />
                ))}
              </div>
            ) : null}
            <MetadataGrid item={item} />
          </header>

          <div className="mt-7 sm:mt-10">{visual}</div>
          {children}
          <RelatedItems item={item} />
          <AdjacentNavigation previous={previous} next={next} />
        </article>
        <DetailFooter />
      </div>
      <SiteNav />
    </main>
  );
}
