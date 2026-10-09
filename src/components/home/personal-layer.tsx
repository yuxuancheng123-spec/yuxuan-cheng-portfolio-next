import Link from "next/link";

export function PersonalLayer() {
  return (
    <section className="yc-section">
      <h2 className="yc-h2">Away from the documents</h2>
      <p className="yc-body mt-1.5">
        A little context for the person behind the governance work.{" "}
        <Link href="/about" className="yc-link">More about me</Link>
      </p>
    </section>
  );
}
