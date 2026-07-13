import type { Metadata } from "next";
import { getContentPath, type DetailItem } from "@/data/content";

export function createContentMetadata(item: DetailItem): Metadata {
  const canonicalPath = getContentPath(item);
  return {
    title: `${item.title} | Yuxuan Cheng`,
    description: item.seoDescription,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: item.title,
      description: item.seoDescription,
      url: canonicalPath,
      siteName: "Yuxuan Cheng",
      type: item.kind === "Writing" ? "article" : "website",
    },
  };
}
