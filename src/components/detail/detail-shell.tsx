import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter, SiteNav } from "@/components/site-nav";
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
  visual?: ReactNode;
  children: ReactNode;
};

const categoryHref = {
  Work: "/#work",
  Research: "/#research-writing",
  Writing: "/#research-writing",
} as const;

function DetailLink({ link }: { link: ContentLink }) {
  const className =
    "yc-button yc-button-secondary";

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
    <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 rounded-xl border border-line bg-white p-4 sm:grid-cols-2 sm:p-5">
      {items.map((meta) => (
        <div key={meta.label} className="min-w-0">
          <dt className="yc-meta">{meta.label}</dt>
          <dd className="mt-0.5 text-sm leading-6 text-ink">{meta.value}</dd>
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
    <section aria-labelledby="related-heading" className="mt-12 border-t border-line pt-6">
      <h2 id="related-heading" className="yc-h3">Related work</h2>
      <div className="mt-3 grid auto-rows-fr gap-3 sm:grid-cols-2">
        {related.map((entry) => (
          <Link key={entry.slug} href={getContentPath(entry)} className="yc-card group">
            <span className="yc-kicker">{entry.kind}</span>
            <span className="mt-1.5 text-[15px] font-semibold leading-snug text-ink group-hover:text-accent">
              {entry.title}
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
    <nav aria-label="Adjacent content" className="mt-6 grid auto-rows-fr gap-3 sm:grid-cols-2">
      {previous ? (
        <Link href={getContentPath(previous)} className="yc-card group">
          <span className="yc-meta">← Previous</span>
          <span className="mt-1 text-[15px] font-medium leading-snug text-ink group-hover:text-accent">{previous.title}</span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next ? (
        <Link href={getContentPath(next)} className="yc-card group sm:text-right">
          <span className="yc-meta">Next →</span>
          <span className="mt-1 text-[15px] font-medium leading-snug text-ink group-hover:text-accent">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}

export function DetailShell({ item, previous, next, visual, children }: DetailShellProps) {
  return (
    <>
      <SiteNav />
      <main className="yc-container flex-1">
        <article>
          <header className="pt-8 sm:pt-10">
            <Link href={categoryHref[item.kind]} className="text-sm text-subtle hover:text-accent">
              ← Back to {item.kind}
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="yc-kicker">{item.kind}</span>
              <span className="yc-meta">· {item.status}</span>
            </div>
            <h1 className="yc-h1 mt-2">{item.title}</h1>
            <p className="yc-lead mt-3">{item.summary}</p>
            {item.links.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <DetailLink key={link.label} link={link} />
                ))}
              </div>
            ) : null}
            <MetadataGrid item={item} />
          </header>

          {visual ? <div className="mt-8">{visual}</div> : null}
          {children}
          <RelatedItems item={item} />
          <AdjacentNavigation previous={previous} next={next} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
