import { SiteFooter, SiteNav } from "@/components/site-nav";

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
    href: "/cv/Yuxuan_Cheng_CV.pdf",
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

export default function ContactPage() {
  return (
    <>
      <SiteNav active="Contact" />
      <main className="yc-container flex-1 pt-12 sm:pt-16">
        <p className="yc-kicker">Contact</p>
        <h1 className="yc-h1 mt-3">CV, LinkedIn, and email.</h1>
        <p className="yc-lead mt-3 max-w-[36rem]">
          Open to conversations about responsible AI, privacy engineering, and
          research collaboration.
        </p>

        <section className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {contactCards.map((card) => {
            const isExternal = card.href.startsWith("http");
            return (
              <a
                key={card.title}
                href={card.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`yc-card group ${card.featured ? "sm:col-span-2" : ""}`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="yc-meta">{card.label}</span>
                  <span className="text-sm text-subtle group-hover:text-accent" aria-hidden="true">↗</span>
                </span>
                <span className="mt-1 flex items-center gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-accent-soft text-xs font-semibold text-accent">
                    {card.mark}
                  </span>
                  <span className="text-[17px] font-semibold text-ink [overflow-wrap:anywhere] group-hover:text-accent">
                    {card.title}
                  </span>
                </span>
              </a>
            );
          })}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
