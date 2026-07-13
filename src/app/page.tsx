import { ContactFooter } from "@/components/home/contact-footer";
import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { PersonalLayer } from "@/components/home/personal-layer";
import { ResearchWriting } from "@/components/home/research-writing";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f3f5f4] text-[#17222a]">
      <div className="mx-auto w-full max-w-[1480px] px-3 pb-2 pt-3 sm:px-5 sm:pt-5 lg:px-6">
        <Hero />
        <FeaturedWork />
        <ResearchWriting />
        <PersonalLayer />
        <ContactFooter />
      </div>
      <SiteNav active="Home" />
    </main>
  );
}
