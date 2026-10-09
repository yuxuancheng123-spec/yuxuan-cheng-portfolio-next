import Link from "next/link";
import { researchWriting } from "@/data/portfolio";

export function ResearchWriting() {
  return (
    <section id="research-writing" className="yc-section">
      <h2 className="yc-h2">Research and writing</h2>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {researchWriting.map((item) => (
          <li key={item.title}>
            <Link href={item.href} className="group block py-4 sm:grid sm:grid-cols-[9.5rem_1fr] sm:gap-5">
              <p className="yc-meta pt-0.5">
                <span className="font-medium text-accent">{item.type}</span>
                <span className="sm:block"> · {item.year}</span>
              </p>
              <div className="mt-1 sm:mt-0">
                <h3 className="yc-h3 group-hover:text-accent">{item.title}</h3>
                <p className="yc-body mt-1">{item.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
