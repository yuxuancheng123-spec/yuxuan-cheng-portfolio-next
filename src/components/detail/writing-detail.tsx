import { DetailShell } from "@/components/detail/detail-shell";
import type { WritingItem } from "@/data/content";

type WritingDetailProps = {
  item: WritingItem;
  previous?: WritingItem;
  next?: WritingItem;
};

export function WritingDetail({ item, previous, next }: WritingDetailProps) {
  return (
    <DetailShell item={item} previous={previous} next={next}>
      <article className="mt-8">
        <p className="text-[17px] leading-7 text-ink">{item.lede}</p>
        <div className="mt-5 space-y-10">
          {item.sections.map((section, index) => (
            <div key={section.heading}>
              <section aria-labelledby={`${item.slug}-section-${index}`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px w-9 bg-line" />
                </div>
                <h2 id={`${item.slug}-section-${index}`} className="mt-4 yc-h2">{section.heading}</h2>
                <div className="mt-6 space-y-5 text-base leading-7 text-muted">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
              {index === 1 ? (
                <blockquote className="my-8 border-l-2 border-[#315f82] pl-5 text-lg font-medium leading-7 text-ink">
                  {item.pullQuote}
                </blockquote>
              ) : null}
            </div>
          ))}
        </div>

        <section aria-labelledby="references-heading" className="mt-10 border-t border-line pt-8">
          <h2 id="references-heading" className="text-sm font-semibold text-muted">Notes and references</h2>
          <ol className="mt-5 space-y-3 text-sm leading-6 text-muted">
            {item.references.map((reference, index) => <li key={reference}>{index + 1}. {reference}</li>)}
          </ol>
        </section>
      </article>
    </DetailShell>
  );
}
