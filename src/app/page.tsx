import { ProfileSidebar } from "@/components/home/profile-sidebar";
import {
  EducationSection,
  ExperienceSection,
  Intro,
  ProjectsSection,
  ResearchSection,
  WritingSection,
} from "@/components/home/sections";

export default function Home() {
  return (
    <>
      <main className="mx-auto w-full max-w-screen-lg flex-1 px-6 py-16 sm:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-2">
          <aside className="md:col-span-4">
            <ProfileSidebar />
          </aside>
          <div className="space-y-24 md:col-span-7 md:col-start-6">
            <Intro />
            <EducationSection />
            <ResearchSection />
            <ExperienceSection />
            <ProjectsSection />
            <WritingSection />
          </div>
        </div>
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-2 px-6 py-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Yuxuan Cheng.</p>
          <p>AI governance · privacy engineering · responsible AI</p>
        </div>
      </footer>
    </>
  );
}
