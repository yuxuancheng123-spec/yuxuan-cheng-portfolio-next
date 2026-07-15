import type { Metadata } from "next";
import { ChinaLegalFrameworkDetail } from "@/components/detail/china-legal-framework-detail";
import { chinaLegalFrameworkItem } from "@/data/china-legal-framework";
import { createContentMetadata } from "@/lib/content-metadata";

export const metadata: Metadata = createContentMetadata(chinaLegalFrameworkItem);

export default function ChinaAigcLegalClauseToControlPage() {
  return <ChinaLegalFrameworkDetail />;
}
