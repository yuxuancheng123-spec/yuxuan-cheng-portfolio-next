import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteNav } from "@/components/site-nav";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About | Yuxuan Cheng",
  description: "Yuxuan Cheng is an AI governance researcher at FacesMarket working on synthetic media, likeness rights, and executable legal controls.",
  alternates: { canonical: "/about" },
};

const contactLinks = [
  { label: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yuxuan-cheng-86743631a" },
  { label: "GitHub", href: "https://github.com/yuxuancheng123-spec" },
  { label: "CV (PDF)", href: profile.cv },
];

export default function AboutPage() {
  return (
    <>
      <SiteNav active="About" />
      <main className="yc-container flex-1 pt-12 sm:pt-16">
        <p className="yc-kicker">About</p>
        <h1 className="yc-h1 mt-3">Hi, I&apos;m Yuxuan.</h1>

        <div className="mt-6 max-w-[40rem] space-y-4 font-serif text-[15px] leading-relaxed text-muted">
          <p>
            I&apos;m an AI governance researcher at FacesMarket (元脸), where I work on synthetic
            media: who may use a person&apos;s face or voice, how AI-generated content should be
            labeled, and what records a platform needs to show that it asked for permission.
          </p>
          <p>
            Most of my projects turn a rule into something a person can check. My research
            framework maps Chinese AIGC provisions to software controls and asks where a program
            can reach a conclusion and where a reviewer has to decide. The AI actor prototype
            applies the same idea to consent for likeness and voice.
          </p>
          <p>
            I came to this from business psychology. I studied it at Lingnan University, then took
            an M.A. in AI, Ethics and Society at the University of Hong Kong, and I still work on
            organizational behavior research. That training makes me ask who uses a system and
            how they will actually behave around it, alongside what the rules require.
          </p>
          <p>
            Right now I&apos;m learning to build AI agents through Stanford&apos;s CS 329Z and
            publishing my{" "}
            <Link href="/notes/cs329z" className="yc-underline">
              lecture notes
            </Link>{" "}
            here as I go.
          </p>
          <p>
            Outside work I watch films, look for good coffee, and play Apex Legends or CS2 with
            friends. When I travel I&apos;d rather spend a day in cafés, bookstores, and long walks
            than at the famous sights.
          </p>
        </div>

        <section id="contact" className="yc-section scroll-mt-20">
          <h2 className="yc-h2">Get in touch</h2>
          <p className="mt-3 max-w-[40rem] font-serif text-[15px] leading-relaxed text-muted">
            I&apos;m glad to talk about AI governance, synthetic media, privacy engineering, or a
            research collaboration. Email is the fastest way to reach me.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-serif text-[15px]">
            {contactLinks.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="yc-link"
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
