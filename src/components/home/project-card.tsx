import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject, ProjectVisual } from "@/data/portfolio";

export const projectCardLayout = {
  hero: "md:col-span-7 lg:col-span-7 lg:row-span-2 min-h-[560px] lg:min-h-[700px]",
  standard: "md:col-span-5 lg:col-span-5 min-h-[430px]",
  wide: "md:col-span-7 lg:col-span-7 min-h-[410px]",
  research: "md:col-span-5 lg:col-span-5 min-h-[410px]",
  about: "md:col-span-12 lg:col-span-12 min-h-[390px]",
} satisfies Record<PortfolioProject["size"], string>;

const cardTone = {
  actor: "bg-[#dcecef]",
  china: "bg-[#dfe8f4]",
  nist: "bg-[#f1eadc]",
  network: "bg-[#e4ece8]",
  journey: "bg-[#d8e4e2]",
} satisfies Record<ProjectVisual, string>;

function NetworkVisual() {
  const nodes = [
    "left-[17%] top-[24%]",
    "left-[47%] top-[17%]",
    "right-[16%] top-[30%]",
    "left-[28%] bottom-[24%]",
    "right-[31%] bottom-[19%]",
  ];

  return (
    <div className="absolute inset-x-7 top-16 h-[46%] overflow-hidden rounded-[24px] border border-white/80 bg-white/38" aria-hidden="true">
      <span className="absolute left-[20%] top-[32%] h-px w-[32%] rotate-[-12deg] bg-[#315f82]/35" />
      <span className="absolute left-[48%] top-[30%] h-px w-[32%] rotate-[16deg] bg-[#315f82]/35" />
      <span className="absolute left-[27%] top-[62%] h-px w-[42%] rotate-[7deg] bg-[#315f82]/35" />
      {nodes.map((position, index) => (
        <span
          key={position}
          className={`absolute ${position} grid h-12 w-12 place-items-center rounded-full border border-[#315f82]/25 bg-[#f7faf8] shadow-sm shadow-[#315f82]/10`}
        >
          <span className={`h-2.5 w-2.5 rounded-full ${index === 2 ? "bg-[#c86455]" : "bg-[#315f82]"}`} />
        </span>
      ))}
    </div>
  );
}

function ProjectLink({ project, children }: { project: PortfolioProject; children: React.ReactNode }) {
  const className = `${cardTone[project.visual]} project-card group relative isolate block h-full min-h-[inherit] overflow-hidden rounded-[28px] border border-black/[0.06] shadow-[0_12px_40px_rgba(38,57,67,0.06)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(38,57,67,0.13)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315f82]`;

  if (project.external) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return <Link href={project.href} className={className}>{children}</Link>;
}

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const imagePosition = project.visual === "journey" ? "object-center" : "object-center";

  return (
    <ProjectLink project={project}>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt ?? ""}
          fill
          sizes={
            project.size === "about"
              ? "(max-width: 767px) 100vw, 1200px"
              : "(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 720px"
          }
          className={`${imagePosition} object-cover transition duration-700 ease-out group-hover:scale-[1.035]`}
        />
      ) : (
        <NetworkVisual />
      )}

      <div
        className={`absolute inset-0 ${
          project.visual === "journey"
            ? "bg-gradient-to-t from-[#15232a]/88 via-[#15232a]/12 to-transparent"
            : project.visual === "network"
              ? "bg-gradient-to-t from-[#e4ece8] via-transparent to-transparent"
              : "bg-gradient-to-t from-[#142029]/88 via-[#142029]/8 to-transparent"
        }`}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className={`text-xs font-semibold ${project.visual === "network" ? "text-[#273c43]/58" : "text-white/74"}`}>
            {project.type}
          </span>
          <span className={`project-arrow grid h-10 w-10 place-items-center rounded-full border text-lg transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${project.visual === "network" ? "border-[#273c43]/15 bg-white/55 text-[#273c43]" : "border-white/35 bg-white/16 text-white backdrop-blur-md"}`} aria-hidden="true">
            ↗
          </span>
        </div>

        <div className={`max-w-[46rem] ${project.visual === "network" ? "text-[#1c2c31]" : "text-white"}`}>
          <h2 className={`font-medium leading-[0.96] tracking-[-0.04em] ${project.size === "hero" ? "text-[clamp(2.45rem,4.7vw,5.25rem)]" : project.size === "about" ? "text-[clamp(2.2rem,4vw,4.5rem)]" : "text-[clamp(2rem,3.25vw,3.65rem)]"}`}>
            {project.title}
          </h2>
          <p className={`mt-3 max-w-[37rem] text-sm leading-5 sm:text-base sm:leading-6 ${project.visual === "network" ? "text-[#273c43]/72" : "text-white/78"}`}>
            {project.description}
          </p>
          {project.artifactHref ? (
            <span className="mt-4 inline-flex rounded-full border border-white/40 bg-white/18 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              Includes article PDF
            </span>
          ) : null}
        </div>
      </div>
    </ProjectLink>
  );
}
