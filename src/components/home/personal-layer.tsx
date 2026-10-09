import Link from "next/link";
import { personalNotes } from "@/data/portfolio";

export function PersonalLayer() {
  return (
    <section className="yc-section">
      <h2 className="yc-h2">Away from the documents</h2>
      <p className="yc-body mt-1.5">
        A little context for the person behind the governance work.{" "}
        <Link href="/about" className="yc-link">More about me</Link>
      </p>
      <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {personalNotes.map((note) => (
          <div key={note.label} className="yc-card">
            <dt className="yc-meta">{note.label}</dt>
            <dd className="mt-1 text-[15px] font-medium text-ink">{note.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
