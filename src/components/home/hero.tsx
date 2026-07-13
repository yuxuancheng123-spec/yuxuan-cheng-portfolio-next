import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[30px] border border-black/[0.06] bg-[#e7eef2] px-5 pb-7 pt-5 sm:min-h-[560px] sm:px-8 sm:pb-9 sm:pt-7 lg:min-h-[590px] lg:px-12 lg:pb-10"
    >
      <div className="hero-field" aria-hidden="true">
        <span className="hero-orbit hero-orbit-one" />
        <span className="hero-orbit hero-orbit-two" />
        <span className="hero-paper hero-paper-one" />
        <span className="hero-paper hero-paper-two" />
      </div>

      <div className="relative flex shrink-0 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315f82]"
        >
          Yuxuan Cheng
        </Link>
        <p className="hidden text-sm text-[#334652]/70 sm:block">
          Researcher and builder
        </p>
      </div>

      <div className="relative max-w-[1260px] shrink-0">
        <Reveal>
          <h1 className="balance max-w-[22ch] text-[clamp(2.55rem,6.25vw,6.2rem)] font-medium leading-[0.95] tracking-[-0.052em] text-[#17222a] sm:leading-[0.93]">
            Yuxuan Cheng explores how policy, evidence, and technical controls
            can make AI systems more accountable.
          </h1>
        </Reveal>
        <Reveal delay={90}>
          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:mt-9">
            <p className="max-w-[34rem] text-base leading-6 text-[#334652]/78 sm:text-lg sm:leading-7">
              Working across AI governance, privacy engineering, organizational
              behavior, and synthetic media.
            </p>
            <div className="flex shrink-0 flex-wrap items-center gap-5">
              <a className="yc-editorial-link" href="#work">
                <span>View work</span>
                <span className="yc-editorial-link-mark" aria-hidden="true">↓</span>
              </a>
              <Link className="yc-editorial-link" href="/contact">
                <span>Contact</span>
                <span className="yc-editorial-link-mark" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
