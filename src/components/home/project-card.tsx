import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/data/portfolio";

function Thumb({ project, wide }: { project: PortfolioProject; wide?: boolean }) {
  if (!project.image) return null;
  return (
    <div
      className={`relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-lg border border-line bg-accent-soft ${
        wide ? "sm:w-[52%]" : ""
      }`}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes={wide ? "(max-width: 640px) 100vw, 420px" : "(max-width: 640px) 100vw, 400px"}
        className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
      />
    </div>
  );
}

function CardText({ project }: { project: PortfolioProject }) {
  return (
    <div className="flex flex-1 flex-col">
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
    </div>
  );
}

export function ProjectCard({ project, wide = false }: { project: PortfolioProject; wide?: boolean }) {
  const className = `yc-card group gap-4 ${wide ? "sm:flex-row sm:items-center sm:gap-5" : ""}`;
  const body = (
    <>
      <Thumb project={project} wide={wide} />
      <CardText project={project} />
    </>
  );

  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>
        {body}
      </a>
    );
  }

  return (
    <Link href={project.href} className={className}>
      {body}
    </Link>
  );
}
