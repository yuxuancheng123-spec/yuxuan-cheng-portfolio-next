import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { WorkDetail } from "@/components/detail/work-detail";
import { getAdjacentItems, getWorkItem, workItems } from "@/data/content";
import { createContentMetadata } from "@/lib/content-metadata";

type WorkPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  // ai-generated-actor-compliance has its own page at work/ai-generated-actor-compliance.
  return workItems
    .filter((item) => item.slug !== "ai-generated-actor-compliance")
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkItem(slug);
  return item ? createContentMetadata(item) : {};
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  if (slug === "china-ai-compliance-evidence") {
    redirect("/research/china-aigc-legal-clause-to-control");
  }
  const item = getWorkItem(slug);
  if (!item) notFound();
  const navigableWorkItems = workItems.filter(
    (workItem) => workItem.slug !== "china-ai-compliance-evidence",
  );
  const { previous, next } = getAdjacentItems(navigableWorkItems, slug);
  return <WorkDetail item={item} previous={previous} next={next} />;
}
