import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteNav } from "@/components/site-nav";
import { courses, getCourse } from "@/data/notes";
import { renderMarkdown, slugify } from "@/lib/markdown";
import { getNote, getNotes } from "@/lib/notes";

type NotePageProps = { params: Promise<{ course: string; slug: string }> };

export function generateStaticParams() {
  return courses.flatMap((course) =>
    getNotes(course.slug).map((note) => ({ course: course.slug, slug: note.slug })),
  );
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { course: courseSlug, slug } = await params;
  const course = getCourse(courseSlug);
  const note = getNote(courseSlug, slug);
  if (!course || !note) return {};
  return {
    title: `${note.title} — ${course.code} Notes | Yuxuan Cheng`,
    description: note.summary ?? `${course.code} lecture notes: ${note.title}`,
    alternates: { canonical: `/notes/${course.slug}/${note.slug}` },
    openGraph: { title: note.title, type: "article", siteName: "Yuxuan Cheng" },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { course: courseSlug, slug } = await params;
  const course = getCourse(courseSlug);
  const note = getNote(courseSlug, slug);
  if (!course || !note) notFound();

  const sections = [...note.body.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1].trim());
  const notes = getNotes(course.slug);
  const index = notes.findIndex((entry) => entry.slug === note.slug);
  const previous = index > 0 ? notes[index - 1] : undefined;
  const next = index < notes.length - 1 ? notes[index + 1] : undefined;

  return (
    <>
      <SiteNav active="Notes" />
      <main className="yc-container flex-1 pt-8 sm:pt-10">
        <article>
          <header>
            <Link href={`/notes/${course.slug}`} className="text-sm text-subtle hover:text-accent">
              ← {course.code}: {course.title}
            </Link>
            <p className="yc-kicker mt-6">
              {note.lecture !== undefined ? `Lecture ${note.lecture}` : "Note"}
              {note.date ? <span className="yc-meta normal-case tracking-normal"> · {note.date}</span> : null}
            </p>
            <h1 className="yc-h1 mt-2">{note.title}</h1>
            {note.summary ? <p className="yc-lead mt-3">{note.summary}</p> : null}
          </header>

          {sections.length >= 4 ? (
            <nav aria-label="Contents" className="yc-toc mt-8">
              <p className="yc-meta uppercase tracking-wide">Contents</p>
              <ol>
                {sections.map((title) => (
                  <li key={title}>
                    <a href={`#${slugify(title)}`}>{title.replace(/[`*_]/g, "")}</a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <div className="yc-prose mt-10">{renderMarkdown(note.body)}</div>
        </article>

        {previous || next ? (
          <nav aria-label="Adjacent lectures" className="mt-14 grid auto-rows-fr gap-3 border-t border-line pt-6 sm:grid-cols-2">
            {previous ? (
              <Link href={`/notes/${course.slug}/${previous.slug}`} className="yc-card group">
                <span className="yc-meta">← Previous</span>
                <span className="mt-1 font-serif text-[15px] leading-snug text-ink group-hover:text-accent">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {next ? (
              <Link href={`/notes/${course.slug}/${next.slug}`} className="yc-card group sm:text-right">
                <span className="yc-meta">Next →</span>
                <span className="mt-1 font-serif text-[15px] leading-snug text-ink group-hover:text-accent">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </nav>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
