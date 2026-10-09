import Link from "next/link";
import { SiteFooter, SiteNav } from "@/components/site-nav";

const notes = [
  {
    title: "🎬 Favorite Film",
    text: "La La Land",
    mark: "FILM",
    visual: "film",
    href: "https://letterboxd.com/",
    external: true,
  },
  {
    title: "🎮 Playing",
    text: "Apex Legends & CS2",
    mark: "PLAY",
    visual: "play",
    href: "https://store.steampowered.com/",
    external: true,
  },
  {
    title: "📄 Latest Project",
    text: "China AIGC Legal-Clause-to-Control Framework",
    mark: "PROJECT",
    visual: "project",
    href: "/research/china-aigc-legal-clause-to-control",
    external: false,
  },
  {
    title: "☕ Coffee",
    text: "Iced Americano",
    mark: "COFFEE",
    visual: "coffee",
    href: "https://maps.google.com/",
    external: true,
  },
  {
    title: "🧠 Current Research",
    text: "Organizational Behavior & AI Governance",
    mark: "RESEARCH",
    visual: "research",
    href: "/research",
    external: false,
  },
  {
    title: "📍 Based In",
    text: "Hong Kong · Shenzhen",
    mark: "CITY",
    visual: "city",
    href: "https://maps.google.com/",
    external: true,
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteNav active="About" />
      <main className="yc-container flex-1 pt-12 sm:pt-16">
        <p className="yc-kicker">About</p>
        <h1 className="yc-h1 mt-3">Hi, I&apos;m Yuxuan.</h1>
        <p className="mt-2 text-[15px] font-medium text-accent">AI governance with evidence.</p>

        <div className="yc-lead mt-6 max-w-[40rem] space-y-4">
            <p>
              I&apos;m currently based between Hong Kong and Shenzhen, where
              I&apos;m exploring the intersection of AI governance, privacy
              engineering, and organizational behavior.
            </p>
            <p>
              I enjoy working on problems that sit somewhere between research
              and product building. Most of my projects start with a simple
              question—how can we make AI systems more trustworthy?—and
              gradually turn into practical things like compliance frameworks,
              risk assessments, dashboards, and working prototypes.
            </p>
            <p>
              Recently, I&apos;ve been spending a lot of time thinking about
              synthetic media, digital identity, AI-generated actors, and how
              responsible AI should look beyond policies and regulations.
            </p>
            <p>
              Before moving into AI governance, I studied business psychology
              and organizational behavior. That background still shapes how I
              approach technology today: systems matter, but the people using
              them matter even more.
            </p>
            <p>
              Outside work, I&apos;m usually watching films, trying new coffee
              shops, playing Apex Legends or Counter-Strike 2 with friends, or
              planning my next trip. I enjoy discovering cities through cafés,
              bookstores, and long walks more than checking off tourist
              attractions.
            </p>
            <p>
              This website is where I collect the projects, research, and
              ideas I&apos;m currently exploring.
            </p>
        </div>

        <section className="yc-section">
          <h2 className="yc-h2">A few things about me</h2>
          <div className="mt-4 grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {notes.map((note) => {
              const body = (
                <>
                  <span className="yc-meta">{note.title}</span>
                  <span className="mt-1 text-[15px] font-medium leading-snug text-ink group-hover:text-accent">
                    {note.text}
                  </span>
                </>
              );
              return note.external ? (
                <a key={note.title} href={note.href} target="_blank" rel="noopener noreferrer" className="yc-card group">
                  {body}
                </a>
              ) : (
                <Link key={note.title} href={note.href} className="yc-card group">
                  {body}
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
