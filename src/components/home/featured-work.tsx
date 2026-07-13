import { Reveal } from "@/components/reveal";
import {
  ProjectCard,
  projectCardLayout,
} from "@/components/home/project-card";
import { featuredProjects } from "@/data/portfolio";

export function FeaturedWork() {
  return (
    <section id="work" className="yc-section scroll-mt-8">
      <Reveal>
        <div className="mb-7 sm:mb-9">
          <h2 className="yc-section-title">Featured work</h2>
          <p className="mt-3 max-w-xl text-base leading-6 text-[#334652]/68 sm:text-lg sm:leading-7">
            Research questions translated into frameworks, working tools, and
            evidence people can inspect.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-12 lg:auto-rows-[minmax(200px,auto)] lg:gap-4">
        {featuredProjects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={Math.min(index * 55, 165)}
            className={projectCardLayout[project.size]}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
