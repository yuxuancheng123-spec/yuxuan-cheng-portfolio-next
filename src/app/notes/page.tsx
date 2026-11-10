import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteNav } from "@/components/site-nav";
import { courses } from "@/data/notes";
import { getNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes | Yuxuan Cheng",
  description: "Lecture notes from courses I'm working through.",
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  return (
    <>
      <SiteNav active="Notes" />
      <main className="yc-container flex-1 pt-12 sm:pt-16">
        <p className="yc-kicker">Notes</p>
        <h1 className="yc-h1 mt-3">Course notes</h1>
        <p className="yc-lead mt-3 max-w-[36rem]">
          Lecture-by-lecture notes from courses I&apos;m working through, written to make the ideas
          stick.
        </p>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {courses.map((course) => {
            const count = getNotes(course.slug).length;
            return (
              <Link
                key={course.slug}
                href={`/notes/${course.slug}`}
                className="group block py-6 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <p className="pt-0.5 text-xs text-subtle">
                  {course.school}
                  <br />
                  {course.term}
                </p>
                <div className="mt-1 sm:mt-0">
                  <h2 className="font-serif text-lg text-ink group-hover:text-accent">
                    {course.code}: {course.title}
                  </h2>
                  <p className="yc-body mt-1.5">{course.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-subtle">
                    {count ? `${count} lecture${count === 1 ? "" : "s"}` : "Notes coming soon"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
