import Link from "next/link";

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
    text: "China AI Compliance Evidence Framework",
    mark: "PROJECT",
    visual: "project",
    href: "/projects/china-ai-compliance",
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

function lifeCardTone(visual: string) {
  if (visual === "film") {
    return "bg-[radial-gradient(circle_at_78%_18%,rgba(244,114,182,0.28),transparent_30%),linear-gradient(135deg,#fff7ed,#fff1f2)]";
  }
  if (visual === "play") {
    return "bg-[radial-gradient(circle_at_76%_20%,rgba(34,197,94,0.22),transparent_32%),linear-gradient(135deg,#f8fafc,#ecfeff)]";
  }
  if (visual === "project") {
    return "bg-[radial-gradient(circle_at_78%_18%,rgba(59,130,246,0.22),transparent_34%),linear-gradient(135deg,#eff6ff,#eef2ff)]";
  }
  if (visual === "coffee") {
    return "bg-[radial-gradient(circle_at_76%_20%,rgba(217,119,6,0.2),transparent_30%),linear-gradient(135deg,#fff7ed,#f5f5f4)]";
  }
  if (visual === "research") {
    return "bg-[radial-gradient(circle_at_76%_18%,rgba(20,184,166,0.22),transparent_32%),linear-gradient(135deg,#f5f3ff,#ecfeff)]";
  }
  return "bg-[radial-gradient(circle_at_76%_18%,rgba(14,165,233,0.2),transparent_32%),linear-gradient(135deg,#f0fdfa,#f8fafc)]";
}

function LifeCardPattern({ visual }: { visual: string }) {
  if (visual === "film") {
    return (
      <div className="pointer-events-none absolute inset-0 opacity-[0.2]">
        <div className="absolute -right-6 -top-4 h-28 w-28 rounded-full border-[18px] border-black/20" />
        <div className="absolute right-6 top-16 h-24 w-36 rotate-6 rounded-2xl border-2 border-black bg-white/60" />
        <div className="absolute right-10 top-20 grid h-16 w-28 grid-cols-4 gap-1.5">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className="rounded-sm bg-black" />
          ))}
        </div>
      </div>
    );
  }

  if (visual === "play") {
    return (
      <div className="pointer-events-none absolute inset-0 opacity-[0.2]">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-black/10" />
        <div className="absolute right-10 top-12 h-28 w-28 rounded-full border-2 border-black" />
        <div className="absolute right-[5.9rem] top-12 h-28 w-px bg-black" />
        <div className="absolute right-10 top-[6.45rem] h-px w-28 bg-black" />
        <div className="absolute bottom-8 left-8 h-12 w-24 rounded-full border-2 border-black bg-white/55" />
        <div className="absolute bottom-12 left-14 h-3 w-3 rounded-full bg-black" />
        <div className="absolute bottom-12 left-24 h-3 w-3 rounded-full bg-black" />
      </div>
    );
  }

  if (visual === "project") {
    return (
      <div className="pointer-events-none absolute inset-0 opacity-[0.2]">
        <div className="absolute -right-7 top-6 h-20 w-28 rounded-2xl bg-black/10" />
        <div className="absolute right-7 top-14 h-28 w-24 rotate-3 rounded-2xl border-2 border-black bg-white/70" />
        <div className="absolute right-12 top-20 h-2 w-14 rounded-full bg-black" />
        <div className="absolute right-12 top-28 h-2 w-10 rounded-full bg-black" />
        <div className="absolute right-12 top-36 h-8 w-14 rounded-xl border-2 border-black" />
      </div>
    );
  }

  if (visual === "coffee") {
    return (
      <div className="pointer-events-none absolute inset-0 opacity-[0.2]">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-black/10" />
        <div className="absolute right-10 top-20 h-20 w-20 rounded-b-3xl rounded-t-lg border-2 border-black bg-white/55" />
        <div className="absolute right-6 top-28 h-8 w-8 rounded-full border-2 border-black" />
        <div className="absolute left-8 top-12 h-5 w-5 rounded-full bg-black" />
        <div className="absolute left-16 top-20 h-8 w-8 rounded-full border-2 border-black" />
        <div className="absolute left-20 top-12 h-4 w-4 rounded-full bg-black" />
      </div>
    );
  }

  if (visual === "research") {
    return (
      <div className="pointer-events-none absolute inset-0 opacity-[0.2]">
        <div className="absolute -right-10 -top-8 h-32 w-32 rounded-full bg-black/10" />
        <div className="absolute right-10 top-16 h-3 w-3 rounded-full bg-black" />
        <div className="absolute right-24 top-24 h-3 w-3 rounded-full bg-black" />
        <div className="absolute right-14 top-36 h-3 w-3 rounded-full bg-black" />
        <div className="absolute right-14 top-[4.6rem] h-px w-12 rotate-[25deg] bg-black" />
        <div className="absolute right-16 top-28 h-px w-16 -rotate-[30deg] bg-black" />
        <div className="absolute bottom-9 left-8 h-2 w-32 rounded-full bg-black" />
        <div className="absolute bottom-14 left-8 h-2 w-24 rounded-full bg-black" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.2]">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-black/10" />
      <div className="absolute right-8 top-14 grid h-28 w-28 grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="rounded-full bg-black" />
        ))}
      </div>
      <div className="absolute right-20 top-24 h-8 w-8 rounded-full border-4 border-black" />
      <div className="absolute right-[5.35rem] top-[8.1rem] h-10 w-1 rotate-45 rounded-full bg-black" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#181916]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.12),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(251,191,36,0.12),transparent_24%),linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:auto,auto,80px_80px,80px_80px]" />

      <div className="relative mx-auto grid w-full max-w-[1260px] gap-3 px-4 py-4 pb-24 sm:px-6 sm:py-6 lg:grid-cols-[1.02fr_0.98fr]">
        <section className="rounded-[30px] bg-white p-6 shadow-sm shadow-black/[0.04] sm:p-8">
          <Link
            href="/"
            className="mb-9 inline-flex rounded-full bg-[#f4f4f1] px-4 py-2 text-sm font-semibold text-black/65 transition hover:bg-black hover:text-white"
          >
            Back home
          </Link>

          <h1 className="text-4xl font-medium tracking-[-0.015em] sm:text-6xl">
            Hi, I&apos;m Yuxuan.
          </h1>
          <div className="my-7 h-px bg-black/10" />

          <div className="max-w-3xl space-y-4 text-xl leading-[1.33] tracking-[-0.018em] text-black/82">
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
        </section>

        <aside className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="relative min-h-[210px] overflow-hidden rounded-[30px] bg-[#1f2825] p-6 text-white shadow-sm shadow-black/[0.04] sm:col-span-2">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(45,212,191,0.35),transparent_28%),radial-gradient(circle_at_24%_86%,rgba(255,255,255,0.12),transparent_32%),linear-gradient(120deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,auto,28px_28px]" />
            <div className="absolute right-6 top-6 grid h-16 w-16 place-items-center rounded-[20px] bg-white/10 text-base font-bold backdrop-blur">
              YC
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-[24px] bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-semibold text-white/55">Positioning</p>
              <h2 className="mt-3 text-3xl font-medium leading-[0.98] tracking-[-0.038em]">
                AI governance with evidence.
              </h2>
            </div>
          </div>

          {notes.map((note) => {
            const card = (
              <>
                <LifeCardPattern visual={note.visual} />
                <div className="absolute right-5 top-5 rounded-full bg-[#f4f4f1]/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.1em] text-black/55">
                  {note.mark}
                </div>
                <div className="relative flex h-full flex-col justify-end">
                  <h2 className="text-xl font-medium tracking-[-0.015em]">
                    {note.title}
                  </h2>
                  <p className="mt-2 max-w-[14rem] text-base font-semibold leading-5 tracking-[-0.015em] text-black/62">
                    {note.text}
                  </p>
                </div>
              </>
            );

            const className =
              `relative aspect-[1.05/1] min-h-[178px] overflow-hidden rounded-[30px] p-5 shadow-sm shadow-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 ${lifeCardTone(note.visual)}`;

            return note.external ? (
              <a
                key={note.title}
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {card}
              </a>
            ) : (
              <Link key={note.title} href={note.href} className={className}>
                {card}
              </Link>
            );
          })}
        </aside>
      </div>

      <nav className="fixed bottom-5 left-1/2 z-20 flex -translate-x-1/2 rounded-full border border-black/8 bg-white/80 p-1.5 shadow-xl shadow-black/10 backdrop-blur">
        <Link
          href="/"
          className="rounded-full px-5 py-3 text-sm font-medium text-black/70 transition hover:bg-black hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="rounded-full px-5 py-3 text-sm font-medium text-black/70 transition hover:bg-black hover:text-white"
        >
          Contact
        </Link>
      </nav>
    </main>
  );
}
