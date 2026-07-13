import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchDetail } from "@/components/detail/research-detail";
import { getAdjacentItems, getResearchItem, researchItems } from "@/data/content";
import { createContentMetadata } from "@/lib/content-metadata";

type ResearchPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return researchItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ResearchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getResearchItem(slug);
  return item ? createContentMetadata(item) : {};
}

export default async function ResearchPage({ params }: ResearchPageProps) {
  const { slug } = await params;
  const item = getResearchItem(slug);
  if (!item) notFound();
  const { previous, next } = getAdjacentItems(researchItems, slug);
  return <ResearchDetail item={item} previous={previous} next={next} />;
}
