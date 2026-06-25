import Link from "next/link";

const contactCards = [
  {
    label: "Learn more",
    title: "View CV",
    mark: "CV",
    href: "https://yuxuancheng123-spec.github.io/yuxuan-cheng-portfolio/assets/Kenny_Cheng_Resume.pdf",
  },
  {
    label: "Connect",
    title: "LinkedIn",
    mark: "in",
    href: "https://www.linkedin.com/",
  },
  {
    label: "Say Hi",
    title: "yuxuancheng123@gmail.com",
    mark: "@",
    href: "mailto:yuxuancheng123@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#181916]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.12),transparent_30%),linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:auto,80px_80px,80px_80px]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 py-4 pb-24 sm:px-6 sm:py-6">
        <section className="mb-3 rounded-[28px] bg-white p-6 shadow-sm shadow-black/[0.04] sm:p-8">
          <p className="text-sm font-semibold text-black/45">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.015em] sm:text-6xl">
            CV, LinkedIn, and email.
          </h1>
        </section>

        <section className="grid gap-3 md:grid-cols-3">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={
                card.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group relative min-h-[360px] overflow-hidden rounded-[28px] bg-white p-6 shadow-sm shadow-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-black/10 text-xl text-black/45 transition group-hover:rotate-12 group-hover:bg-black group-hover:text-white">
                ↗
              </div>
              <p className="text-lg font-semibold text-black/45">{card.label}</p>
              <div className="absolute bottom-7 left-7 right-7 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#f4f4f1] text-sm font-bold text-black/70">
                  {card.mark}
                </span>
                <h2 className="break-words text-3xl font-medium tracking-[-0.018em]">
                  {card.title}
                </h2>
              </div>
            </a>
          ))}
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
