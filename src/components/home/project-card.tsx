import Link from "next/link";
import type { PortfolioProject } from "@/data/portfolio";

function CardBody({ project }: { project: PortfolioProject }) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="yc-kicker">{project.type}</span>
        <span className="text-sm text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true">
          →
        </span>
      </div>
      <h3 className="yc-h3 mt-2">{project.title}</h3>
      <p className="yc-body mt-1.5 flex-1">{project.description}</p>
      {project.tags?.length || project.artifactHref ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags?.map((tag) => (
            <span key={tag} className="yc-tag">{tag}</span>
          ))}
          {project.artifactHref ? <span className="yc-tag">Article PDF included</span> : null}
        </div>
      ) : null}
    </>
  );
}

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const className = "yc-card group";

  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>
        <CardBody project={project} />
      </a>
    );
  }

  return (
    <Link href={project.href} className={className}>
      <CardBody project={project} />
    </Link>
  );
}
