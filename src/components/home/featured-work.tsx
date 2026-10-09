import { ProjectCard } from "@/components/home/project-card";
import { featuredProjects } from "@/data/portfolio";

export function FeaturedWork() {
  return (
    <section id="work" className="yc-section">
      <h2 className="yc-h2">Featured work</h2>
      <p className="yc-body mt-1.5 max-w-xl">
        Research questions translated into frameworks, working tools, and
        evidence people can inspect.
      </p>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <div key={project.title} className={index === 0 ? "sm:col-span-2" : ""}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
