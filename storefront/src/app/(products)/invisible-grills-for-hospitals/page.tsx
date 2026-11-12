// File: src/app/(products)/invisible-grills-for-hospitals/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { USE_CASE_PAGES } from "@/lib/use-case-pages";

const config = USE_CASE_PAGES.hospitals;

export const metadata: Metadata = buildProductMetadata(config);

export default function InvisibleGrillsForHospitalsPage() {
  return <ProductPageView config={config} />;
}
