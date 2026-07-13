import { DetailShell } from "@/components/detail/detail-shell";
import { WritingHeroVisual } from "@/components/detail/writing-visuals";
import type { WritingItem } from "@/data/content";

type WritingDetailProps = {
  item: WritingItem;
  previous?: WritingItem;
  next?: WritingItem;
};

export function WritingDetail({ item, previous, next }: WritingDetailProps) {
  return (
    <DetailShell item={item} previous={previous} next={next} visual={<WritingHeroVisual visual={item.visual} />}>
      <article className="mx-auto mt-14 max-w-[740px] sm:mt-20">
        <p className="text-2xl leading-[1.28] tracking-[-0.025em] text-[#17222a]/84 sm:text-3xl sm:leading-[1.25]">{item.lede}</p>
        <div className="mt-14 space-y-14 sm:mt-20 sm:space-y-20">
          {item.sections.map((section, index) => (
            <div key={section.heading}>
              <section aria-labelledby={`${item.slug}-section-${index}`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-[#315f82]/48">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px w-9 bg-[#315f82]/24" />
                </div>
                <h2 id={`${item.slug}-section-${index}`} className="mt-4 text-3xl font-medium leading-[1] tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
                <div className="mt-6 space-y-5 text-lg leading-8 text-[#334652]/76">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
              {index === 1 ? (
                <blockquote className="my-14 border-l-2 border-[#315f82] pl-5 text-2xl font-medium leading-[1.25] tracking-[-0.03em] text-[#17222a] sm:my-20 sm:pl-7 sm:text-3xl">
                  {item.pullQuote}
                </blockquote>
              ) : null}
            </div>
          ))}
        </div>

        <section aria-labelledby="references-heading" className="mt-16 border-t border-black/10 pt-8 sm:mt-24">
          <h2 id="references-heading" className="text-sm font-semibold text-[#334652]/58">Notes and references</h2>
          <ol className="mt-5 space-y-3 text-sm leading-6 text-[#334652]/62">
            {item.references.map((reference, index) => <li key={reference}>{index + 1}. {reference}</li>)}
          </ol>
        </section>
      </article>
    </DetailShell>
  );
}
