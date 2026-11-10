import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteNav } from "@/components/site-nav";
import { courses, getCourse } from "@/data/notes";
import { getNotes } from "@/lib/notes";

type CoursePageProps = { params: Promise<{ course: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((course) => ({ course: course.slug }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = getCourse((await params).course);
  if (!course) return {};
  return {
    title: `${course.code}: ${course.title} — Notes | Yuxuan Cheng`,
    description: course.description,
    alternates: { canonical: `/notes/${course.slug}` },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const course = getCourse((await params).course);
  if (!course) notFound();
  const notes = getNotes(course.slug);

  return (
    <>
      <SiteNav active="Notes" />
      <main className="yc-container flex-1 pt-8 sm:pt-10">
        <Link href="/notes" className="text-sm text-subtle hover:text-accent">
          ← All notes
        </Link>
        <p className="yc-kicker mt-6">
          {course.school} · {course.term}
        </p>
        <h1 className="yc-h1 mt-2">
          {course.code}: {course.title}
        </h1>
        <p className="yc-lead mt-3 max-w-[40rem]">{course.description}</p>
        <p className="yc-meta mt-3">
          Instructors: {course.instructors} ·{" "}
          <a href={course.url} target="_blank" rel="noopener noreferrer" className="yc-link">
            Course site ↗
          </a>
        </p>

        <section aria-labelledby="lectures-heading" className="mt-12">
          <h2 id="lectures-heading" className="font-serif text-base uppercase tracking-wide text-muted">
            Lectures
          </h2>
          {notes.length ? (
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {notes.map((note) => (
                <li key={note.slug}>
                  <Link
                    href={`/notes/${course.slug}/${note.slug}`}
                    className="group block py-5 sm:grid sm:grid-cols-[7.5rem_1fr] sm:gap-6"
                  >
                    <p className="pt-0.5 text-xs text-subtle">
                      {note.lecture !== undefined ? `Lecture ${note.lecture}` : "Note"}
                      {note.date ? <span className="block">{note.date}</span> : null}
                    </p>
                    <div className="mt-1 sm:mt-0">
                      <h3 className="font-serif text-base text-ink group-hover:text-accent">{note.title}</h3>
                      {note.summary ? <p className="yc-body mt-1">{note.summary}</p> : null}
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          ) : (
            <p className="yc-body mt-6">The first lecture notes are on their way.</p>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
