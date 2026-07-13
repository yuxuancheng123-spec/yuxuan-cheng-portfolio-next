import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { researchWriting } from "@/data/portfolio";

function EntryLink({ item }: { item: (typeof researchWriting)[number] }) {
  const content = (
    <>
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold text-[#315f82]">{item.type}</span>
        <span className="entry-arrow text-xl text-[#273c43]/46 transition duration-300 group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      </div>
      <h3 className="mt-10 max-w-[18ch] text-[clamp(1.55rem,2.5vw,2.45rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[#17222a]">
        {item.title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-5 text-[#334652]/68 sm:text-base sm:leading-6">
        {item.description}
      </p>
    </>
  );
  const className =
    "group block min-h-[270px] rounded-[24px] border border-black/[0.07] bg-white/72 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#315f82]/25 hover:bg-white hover:shadow-[0_18px_48px_rgba(38,57,67,0.09)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315f82] sm:p-6";

  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={item.href} className={className}>
      {content}
    </Link>
  );
}

export function ResearchWriting() {
  return (
    <section className="yc-section">
      <Reveal>
        <h2 className="yc-section-title max-w-4xl">Research and writing</h2>
      </Reveal>
      <div className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {researchWriting.map((item, index) => (
          <Reveal key={item.title} delay={index * 55}>
            <EntryLink item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
