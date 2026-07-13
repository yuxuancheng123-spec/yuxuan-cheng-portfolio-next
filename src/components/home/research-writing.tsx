import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { researchWriting } from "@/data/portfolio";

function EditorialEntry({
  item,
  index,
}: {
  item: (typeof researchWriting)[number];
  index: number;
}) {
  const content = (
    <div className="group grid gap-4 py-5 transition duration-300 hover:bg-[#e8eef1]/64 sm:grid-cols-[0.7fr_3fr_0.55fr_auto] sm:items-center sm:gap-6 sm:px-4 sm:py-6">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] text-[#315f82]/45">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-xs font-semibold text-[#315f82]">{item.type}</span>
      </div>
      <div>
        <h3 className="max-w-3xl text-[clamp(1.35rem,2.25vw,2.25rem)] font-medium leading-[1.04] tracking-[-0.035em] text-[#17222a]">
          {item.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-5 text-[#334652]/62 sm:text-base sm:leading-6">
          {item.description}
        </p>
      </div>
      <span className="text-xs font-medium text-[#334652]/45">{item.year}</span>
      <span className="grid h-10 w-10 place-items-center rounded-full border border-[#315f82]/14 text-lg text-[#315f82] transition duration-300 group-hover:translate-x-1 group-hover:border-[#315f82]/35" aria-hidden="true">
        →
      </span>
    </div>
  );

  const className =
    "block border-t border-black/8 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#315f82]";

  return item.external ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
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
      <div className="mt-7 border-b border-black/8">
        {researchWriting.map((item, index) => (
          <Reveal key={item.title} delay={Math.min(index * 45, 135)}>
            <EditorialEntry item={item} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
