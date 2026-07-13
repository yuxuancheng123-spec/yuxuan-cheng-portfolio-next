import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WritingDetail } from "@/components/detail/writing-detail";
import { getAdjacentItems, getWritingItem, writingItems } from "@/data/content";
import { createContentMetadata } from "@/lib/content-metadata";

type WritingPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return writingItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWritingItem(slug);
  return item ? createContentMetadata(item) : {};
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const item = getWritingItem(slug);
  if (!item) notFound();
  const { previous, next } = getAdjacentItems(writingItems, slug);
  return <WritingDetail item={item} previous={previous} next={next} />;
}
