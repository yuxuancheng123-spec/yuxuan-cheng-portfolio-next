import Link from "next/link";
import { ActorReviewVisual } from "@/components/home/project-visuals/actor-review-visual";
import { ChinaEvidenceVisual } from "@/components/home/project-visuals/china-evidence-visual";
import { JourneyVisual } from "@/components/home/project-visuals/journey-visual";
import { NetworkResearchVisual } from "@/components/home/project-visuals/network-research-visual";
import { NistDashboardVisual } from "@/components/home/project-visuals/nist-dashboard-visual";
import type { PortfolioProject, ProjectVisual } from "@/data/portfolio";

export const projectCardLayout = {
  hero: "md:col-span-7 lg:col-span-7 lg:row-span-2 min-h-[540px] lg:min-h-[650px]",
  standard: "md:col-span-5 lg:col-span-5 min-h-[430px] lg:min-h-[390px]",
  wide: "md:col-span-12 lg:col-span-12 min-h-[450px] sm:min-h-[410px]",
  research: "md:col-span-12 lg:col-span-5 min-h-[430px] lg:min-h-0",
  about: "md:col-span-12 lg:col-span-12 min-h-[390px]",
} satisfies Record<PortfolioProject["size"], string>;

const cardTone = {
  actor: "bg-[#d9e8e8]",
  china: "bg-[#eee9df]",
  nist: "bg-[#18242c]",
  network: "bg-[#dfe9e4]",
  journey: "bg-[#dce6e3]",
} satisfies Record<ProjectVisual, string>;

function ProjectVisualLayer({ visual }: { visual: ProjectVisual }) {
  if (visual === "actor") return <ActorReviewVisual />;
  if (visual === "china") return <ChinaEvidenceVisual />;
  if (visual === "nist") return <NistDashboardVisual />;
  if (visual === "network") return <NetworkResearchVisual />;
  return <JourneyVisual />;
}

function ProjectLink({
  project,
  children,
}: {
  project: PortfolioProject;
  children: React.ReactNode;
}) {
  const className = `${cardTone[project.visual]} project-card group relative isolate block h-full min-h-[inherit] overflow-hidden rounded-[28px] border border-black/[0.06] shadow-[0_12px_40px_rgba(38,57,67,0.06)] transition duration-[380ms] hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(38,57,67,0.13)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315f82]`;

  if (project.external) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={project.href} className={className}>
      {children}
    </Link>
  );
}

function ProjectHeader({ project }: { project: PortfolioProject }) {
  const dark = project.visual === "nist";

  return (
    <div className="relative z-10 flex items-start justify-between gap-4">
      <div className={`flex max-w-[82%] flex-wrap gap-1.5 text-[10px] font-semibold ${dark ? "text-white/56" : "text-[#273c43]/62"}`}>
        <span className={`rounded-full border px-2 py-1 ${dark ? "border-white/12 bg-white/8" : "border-[#273c43]/10 bg-white/38"}`}>{project.type}</span>
        {project.tags?.map((tag) => <span key={tag} className={`rounded-full border px-2 py-1 ${dark ? "border-white/12 bg-white/8" : "border-[#273c43]/10 bg-white/38"}`}>{tag}</span>)}
      </div>
      <span
        className={`project-arrow grid h-10 w-10 shrink-0 place-items-center rounded-full border text-lg transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
          dark
            ? "border-white/16 bg-white/8 text-white/76"
            : "border-[#273c43]/12 bg-white/46 text-[#273c43]"
        }`}
        aria-hidden="true"
      >
        ↗
      </span>
    </div>
  );
}

function ProjectCopy({ project }: { project: PortfolioProject }) {
  const dark = project.visual === "nist";
  const titleSize =
    project.visual === "actor"
      ? "text-[clamp(2.15rem,3.35vw,3.75rem)]"
      : project.visual === "china"
        ? "text-[clamp(1.8rem,2.35vw,2.65rem)]"
        : project.visual === "network"
          ? "text-[clamp(1.75rem,2vw,2.2rem)]"
          : project.visual === "journey"
            ? "text-[clamp(2.4rem,4vw,4.6rem)]"
            : "text-[clamp(1.9rem,2.9vw,3.15rem)]";

  return (
    <div className={`relative z-10 ${dark ? "text-white" : "text-[#17222a]"}`}>
      <h2 className={`${titleSize} font-medium leading-[0.96] tracking-[-0.045em]`}>
        {project.title}
      </h2>
      <p className={`mt-3 max-w-[34rem] text-sm leading-5 sm:text-base sm:leading-6 ${dark ? "text-white/58" : "text-[#334652]/68"}`}>
        {project.description}
      </p>
    </div>
  );
}

function ProjectComposition({ project }: { project: PortfolioProject }) {
  if (project.visual === "actor") {
    return (
      <div className="relative z-10 p-5 sm:p-7">
        <ProjectHeader project={project} />
        <div className="mt-4 max-w-[32rem] sm:pr-4">
          <ProjectCopy project={project} />
        </div>
      </div>
    );
  }

  if (project.visual === "china") {
    return (
      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <ProjectHeader project={project} />
        <div className="max-w-[28rem]">
          <ProjectCopy project={project} />
          {project.artifactHref ? (
            <span className="mt-3 inline-flex border-b border-[#315f82]/35 pb-1 text-xs font-semibold text-[#315f82]">
              Article PDF included
            </span>
          ) : null}
        </div>
      </div>
    );
  }

  if (project.visual === "nist") {
    return (
      <div className="relative z-10 flex h-full flex-col p-5 sm:w-[45%] sm:p-6">
        <ProjectHeader project={project} />
        <div className="mt-5 max-w-[28rem] sm:mt-auto sm:pb-1">
          <ProjectCopy project={project} />
        </div>
      </div>
    );
  }

  if (project.visual === "network") {
    return (
      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <ProjectHeader project={project} />
        <div className="max-w-[27rem]">
          <ProjectCopy project={project} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-between p-5 sm:w-[44%] sm:p-7">
      <ProjectHeader project={project} />
      <div className="max-w-[33rem] rounded-[18px] bg-[#dce6e3]/78 p-3 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
        <ProjectCopy project={project} />
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <ProjectLink project={project}>
      <ProjectVisualLayer visual={project.visual} />
      <ProjectComposition project={project} />
    </ProjectLink>
  );
}
