import Link from "next/link";

const contactCards = [
  {
    label: "Primary contact",
    title: "yuxuancheng123@gmail.com",
    mark: "@",
    href: "mailto:yuxuancheng123@gmail.com",
    visual: "email",
    featured: true,
  },
  {
    label: "Learn more",
    title: "View CV",
    mark: "CV",
    href: "https://yuxuancheng123-spec.github.io/yuxuan-cheng-portfolio/assets/Kenny_Cheng_Resume.pdf",
    visual: "cv",
  },
  {
    label: "Connect",
    title: "LinkedIn",
    mark: "in",
    href: "https://www.linkedin.com/in/yuxuan-cheng-86743631a",
    visual: "linkedin",
  },
  {
    label: "Code",
    title: "GitHub",
    mark: "{}",
    href: "https://github.com/yuxuancheng123-spec",
    visual: "github",
    wideOnTablet: true,
  },
];

function cardTone(visual: string) {
  if (visual === "email") {
    return "bg-[radial-gradient(circle_at_80%_10%,rgba(20,184,166,0.16),transparent_30%),linear-gradient(135deg,#ffffff,#eefaf7)]";
  }
  if (visual === "linkedin") {
    return "bg-[radial-gradient(circle_at_78%_14%,rgba(59,130,246,0.16),transparent_30%),linear-gradient(135deg,#ffffff,#eff6ff)]";
  }
  if (visual === "github") {
    return "bg-[radial-gradient(circle_at_78%_14%,rgba(24,24,27,0.12),transparent_30%),linear-gradient(135deg,#ffffff,#f4f4f5)]";
  }
  return "bg-[radial-gradient(circle_at_78%_14%,rgba(239,68,68,0.12),transparent_30%),linear-gradient(135deg,#ffffff,#fff7ed)]";
}

function ContactMotif({ visual }: { visual: string }) {
  if (visual === "email") {
    return (
      <div className="pointer-events-none absolute inset-0 origin-top-right opacity-[0.1] md:scale-[0.86] md:opacity-[0.12] xl:scale-100 xl:opacity-[0.16]">
        <div className="absolute right-7 top-[4.5rem] h-20 w-[7.5rem] rounded-[22px] border-2 border-black bg-white/40 md:right-8 md:top-20 md:h-24 md:w-36 xl:h-28 xl:w-40 xl:rounded-[26px]" />
        <div className="absolute right-7 top-[4.5rem] h-20 w-[7.5rem] rounded-[22px] border-b-2 border-black [clip-path:polygon(0_0,50%_55%,100%_0,100%_100%,0_100%)] md:right-8 md:top-20 md:h-24 md:w-36 xl:h-28 xl:w-40 xl:rounded-[26px]" />
        <div className="absolute right-9 top-8 text-[4.5rem] font-semibold leading-none text-black md:text-[5.5rem] xl:text-[7rem]">
          @
        </div>
        <div className="absolute right-40 top-12 h-10 w-16 rounded-full border-2 border-black" />
        <div className="absolute right-32 top-[4.7rem] h-px w-20 rotate-[18deg] bg-black" />
      </div>
    );
  }

  if (visual === "linkedin") {
    return (
      <div className="pointer-events-none absolute inset-0 origin-top-right opacity-[0.1] md:scale-[0.88] md:opacity-[0.12] xl:scale-100 xl:opacity-[0.16]">
        <div className="absolute right-9 top-16 h-24 w-32 rounded-[24px] border-2 border-black bg-white/45" />
        <div className="absolute right-28 top-[5.75rem] h-5 w-5 rounded-full bg-black" />
        <div className="absolute right-16 top-24 h-2 w-12 rounded-full bg-black" />
        <div className="absolute right-16 top-32 h-2 w-16 rounded-full bg-black" />
        <div className="absolute bottom-9 left-9 h-3 w-3 rounded-full bg-black" />
        <div className="absolute bottom-20 left-24 h-3 w-3 rounded-full bg-black" />
        <div className="absolute bottom-[3.25rem] left-40 h-3 w-3 rounded-full bg-black" />
        <div className="absolute bottom-[5.1rem] left-12 h-px w-20 -rotate-[32deg] bg-black" />
        <div className="absolute bottom-[4.5rem] left-28 h-px w-16 rotate-[18deg] bg-black" />
      </div>
    );
  }

  if (visual === "github") {
    return (
      <div className="pointer-events-none absolute inset-0 origin-top-right opacity-[0.1] md:scale-[0.88] md:opacity-[0.12] xl:scale-100 xl:opacity-[0.15]">
        <div className="absolute right-9 top-16 text-7xl font-semibold leading-none text-black">
          &lt;/&gt;
        </div>
        <div className="absolute bottom-11 left-10 h-3 w-3 rounded-full bg-black" />
        <div className="absolute bottom-20 left-24 h-3 w-3 rounded-full bg-black" />
        <div className="absolute bottom-14 left-40 h-3 w-3 rounded-full bg-black" />
        <div className="absolute bottom-[5.1rem] left-12 h-px w-20 -rotate-[32deg] bg-black" />
        <div className="absolute bottom-[4.8rem] left-28 h-px w-16 rotate-[20deg] bg-black" />
        <div className="absolute right-12 bottom-12 h-16 w-28 rounded-2xl border-2 border-black bg-white/50" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 origin-top-right opacity-[0.1] md:scale-[0.88] md:opacity-[0.12] xl:scale-100 xl:opacity-[0.16]">
      <div className="absolute right-9 top-[3.75rem] h-32 w-24 rotate-3 rounded-[22px] border-2 border-black bg-white/50" />
      <div className="absolute right-16 top-20 rounded-md bg-red-500 px-2 py-1 text-xs font-bold text-white">
        PDF
      </div>
      <div className="absolute right-[3.75rem] top-[8.5rem] h-2 w-14 rounded-full bg-black" />
      <div className="absolute right-[3.75rem] top-[10.5rem] h-2 w-10 rounded-full bg-black" />
      <div className="absolute bottom-11 left-10 h-12 w-12 rounded-full border-2 border-black" />
      <div className="absolute bottom-[4.25rem] left-[3.55rem] h-5 w-0.5 bg-black" />
      <div className="absolute bottom-12 left-[3.1rem] h-3 w-3 rotate-45 border-b-2 border-r-2 border-black" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#181916]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.12),transparent_30%),linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 py-4 pb-36 sm:px-6 sm:py-6 md:pb-32 xl:pb-24">
        <section className="mb-3 rounded-[28px] bg-white p-6 shadow-sm shadow-black/[0.04] sm:p-8">
          <p className="text-sm font-semibold text-black/45">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.015em] sm:text-6xl">
            CV, LinkedIn, and email.
          </h1>
        </section>

        <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => {
            const isExternal = card.href.startsWith("http");
            const isEmail = card.visual === "email";

            return (
              <a
                key={card.title}
                href={card.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`group relative overflow-hidden rounded-[28px] p-5 shadow-sm shadow-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 md:p-5 xl:p-6 ${
                  card.featured
                    ? "min-h-[220px] md:col-span-2 md:min-h-[230px] xl:min-h-[270px]"
                    : `min-h-[205px] md:min-h-[210px] xl:min-h-[230px] ${
                        card.wideOnTablet ? "md:col-span-2 xl:col-span-1" : ""
                      }`
                } ${cardTone(card.visual)}`}
              >
                <ContactMotif visual={card.visual} />
                <div className="relative flex h-full min-h-[165px] flex-col justify-between md:min-h-[170px] xl:min-h-[190px]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-black/42">
                        {card.label}
                      </p>
                      {isEmail ? (
                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-700/75">
                          Email
                        </p>
                      ) : null}
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10 bg-white/60 text-lg text-black/48 shadow-sm shadow-black/[0.03] transition group-hover:rotate-12 group-hover:bg-black group-hover:text-white">
                      ↗
                    </span>
                  </div>

                  <div className="flex items-end gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/72 text-sm font-bold text-black/70 shadow-sm shadow-black/[0.03]">
                      {card.mark}
                    </span>
                    <h2
                      className={`max-w-full font-medium leading-[1.02] tracking-[-0.026em] text-black/88 ${
                        isEmail
                          ? "[overflow-wrap:anywhere] text-[clamp(1.65rem,3.2vw,2.55rem)]"
                          : "text-[clamp(1.45rem,2.2vw,2rem)]"
                      }`}
                    >
                      {card.title}
                    </h2>
                  </div>
                </div>
              </a>
            );
          })}
        </section>
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
          className="rounded-full px-5 py-3 text-sm font-medium text-black/70 transition hover:bg-black hover:text-white"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
        >
          Contact
        </Link>
      </nav>
    </main>
  );
}
