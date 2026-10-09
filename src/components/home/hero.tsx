import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="pt-12 sm:pt-16">
      <p className="yc-kicker">Researcher and builder</p>
      <h1 className="yc-h1 mt-3 max-w-[30ch]">
        Yuxuan Cheng explores how policy, evidence, and technical controls can
        make AI systems more accountable.
      </h1>
      <p className="yc-lead mt-4 max-w-[38rem]">
        Working across AI governance, privacy engineering, organizational
        behavior, and synthetic media.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <a className="yc-button yc-button-primary" href="#work">
          View work
        </a>
        <a className="yc-button yc-button-secondary" href="/cv/Yuxuan_Cheng_CV.pdf">
          CV
        </a>
        <Link className="yc-button yc-button-secondary" href="/contact">
          Contact
        </Link>
      </div>
    </section>
  );
}
