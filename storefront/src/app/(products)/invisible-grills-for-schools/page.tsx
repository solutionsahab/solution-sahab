// File: src/app/(products)/invisible-grills-for-schools/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { USE_CASE_PAGES } from "@/lib/use-case-pages";

const config = USE_CASE_PAGES.schools;

export const metadata: Metadata = buildProductMetadata(config);

export default function InvisibleGrillsForSchoolsPage() {
  return <ProductPageView config={config} />;
}
