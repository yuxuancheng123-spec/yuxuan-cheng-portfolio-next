import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  education,
  experience,
  projects,
  research,
  type LinkItem,
} from "@/data/profile";
import { ArrowUpRight } from "@/components/home/icons";
import { courses } from "@/data/notes";
import { getNotes } from "@/lib/notes";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-12">
      <h2 id={`${id}-heading`} className="mb-10 font-serif text-base uppercase tracking-wide text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SmartLink({ link, className, children }: { link: LinkItem; className: string; children: ReactNode }) {
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={link.href} className={className}>
      {children}
    </Link>
  );
}

function LinkRow({ links }: { links: LinkItem[] }) {
  if (!links.length) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
      {links.map((link) => (
        <SmartLink
          key={link.label}
          link={link}
          className="group inline-flex items-center gap-1 text-xs uppercase tracking-wider text-subtle transition-colors duration-300 hover:text-ink"
        >
          <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          {link.label}
        </SmartLink>
      ))}
    </div>
  );
}

function Thumb({ src, alt, href }: { src: string; alt: string; href: string }) {
  return (
    <Link
      href={href}
      tabIndex={-1}
      aria-hidden="true"
      className="relative block aspect-[16/10] w-full self-start overflow-hidden rounded-lg border border-line bg-[#f3efe8] sm:w-44 sm:shrink-0"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, 320px"
        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
      />
    </Link>
  );
}

/** Date column on the left, entry on the right — the template's timeline row. */
function TimelineRow({ period, children }: { period: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
      <p className="pt-0.5 text-xs text-subtle">{period}</p>
      <div>{children}</div>
    </div>
  );
}

export function Intro() {
  return (
    <div className="space-y-4 font-serif text-[15px] leading-relaxed text-muted">
      <p>
        I&apos;m an AI governance researcher working where policy, evidence, and technical controls
        meet. I turn regulatory questions into things people can inspect:{" "}
        <Link href="/work/ai-generated-actor-compliance" className="yc-underline">
          compliance workflows
        </Link>
        ,{" "}
        <Link href="/research/china-aigc-legal-clause-to-control" className="yc-underline">
          clause-to-control frameworks
        </Link>
        , and evidence tests.
      </p>
      <p>
        At FacesMarket (元脸), I research synthetic media and likeness rights and help shape
        permission-first workflows. I hold an M.A. in AI, Ethics and Society from the
        University of Hong Kong, and my training in business psychology still shapes the work — my{" "}
        <Link href="/research/network-crafting" className="yc-underline">
          organizational behavior research
        </Link>{" "}
        is under revision at <em>Career Development International</em>.
      </p>
      <p>Open to conversations about responsible AI, privacy engineering, and research collaboration.</p>
    </div>
  );
}

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-10">
        {education.map((entry) => (
          <TimelineRow key={entry.school} period={entry.period}>
            <h3 className="font-serif text-base text-ink">{entry.school}</h3>
            <p className="mt-1 text-sm text-muted">{entry.degree}</p>
          </TimelineRow>
        ))}
      </div>
    </Section>
  );
}

export function ResearchSection() {
  return (
    <Section id="research" title="Research & Publications">
      <div className="divide-y divide-line">
        {research.map((entry) => (
          <article
            key={entry.title}
            className="flex flex-col gap-5 py-8 first:pt-0 last:pb-0 sm:flex-row"
          >
            {entry.image && entry.href ? <Thumb src={entry.image.src} alt={entry.image.alt} href={entry.href} /> : null}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs text-subtle">{entry.venue}</p>
                {entry.badge ? (
                  <span className="rounded-md bg-[#fbeee0] px-2 py-0.5 text-[11px] font-medium text-[#9a5b1c]">
                    {entry.badge}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-2 font-serif text-base leading-snug text-ink">
                {entry.href ? (
                  <Link href={entry.href} className="transition-colors hover:text-accent">
                    {entry.title}
                  </Link>
                ) : (
                  entry.title
                )}
              </h3>
              {entry.authors ? (
                <p className="mt-1.5 text-sm text-muted">
                  {entry.authors}
                  {entry.note ? <span className="mt-0.5 block text-xs text-subtle">{entry.note}</span> : null}
                </p>
              ) : null}
              <LinkRow links={entry.links} />
              <p className="mt-3 text-sm italic leading-relaxed text-subtle">{entry.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experience.map((entry) => (
          <TimelineRow key={`${entry.title}-${entry.period}`} period={entry.period}>
            <h3 className="font-serif text-base text-ink">
              {entry.title} <span className="text-subtle">—</span> {entry.org}
            </h3>
            {entry.supervisor ? <p className="mt-1 text-sm italic text-subtle">{entry.supervisor}</p> : null}
            <p className="mt-2 text-sm leading-relaxed text-muted">{entry.detail}</p>
          </TimelineRow>
        ))}
      </div>
    </Section>
  );
}

export function ProjectsSection() {
  return (
    <Section id="work" title="Projects">
      <div className="divide-y divide-line">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col gap-5 py-8 first:pt-0 last:pb-0 sm:flex-row">
            <Thumb src={project.image.src} alt={project.image.alt} href={project.href} />
            <div className="min-w-0 flex-1">
              <p className="text-xs text-subtle">{project.status}</p>
              <h3 className="mt-2 font-serif text-base leading-snug text-ink">
                <Link href={project.href} className="transition-colors hover:text-accent">
                  {project.title}
                </Link>
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-[#f1ede6] px-2 py-0.5 text-[11px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <LinkRow links={project.links} />
              <p className="mt-3 text-sm italic leading-relaxed text-subtle">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function NotesSection() {
  return (
    <Section id="notes" title="Notes">
      <div className="space-y-8">
        {courses.map((course) => {
          const count = getNotes(course.slug).length;
          return (
            <TimelineRow key={course.slug} period={course.term}>
              <h3 className="font-serif text-base leading-snug text-ink">
                <Link href={`/notes/${course.slug}`} className="transition-colors hover:text-accent">
                  {course.code}: {course.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm italic text-subtle">{course.school}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Lecture-by-lecture study notes on building agentic systems.{" "}
                {count ? `${count} lecture${count === 1 ? "" : "s"} so far.` : "First notes coming soon."}
              </p>
              <LinkRow links={[{ label: "Read notes", href: `/notes/${course.slug}` }]} />
            </TimelineRow>
          );
        })}
      </div>
    </Section>
  );
}
