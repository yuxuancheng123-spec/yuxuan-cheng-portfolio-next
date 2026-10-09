import { ContactFooter } from "@/components/home/contact-footer";
import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { PersonalLayer } from "@/components/home/personal-layer";
import { ResearchWriting } from "@/components/home/research-writing";
import { SiteFooter, SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <>
      <SiteNav active="Home" />
      <main className="yc-container flex-1">
        <Hero />
        <FeaturedWork />
        <ResearchWriting />
        <PersonalLayer />
        <ContactFooter />
      </main>
      <SiteFooter />
    </>
  );
}
