// File: src/app/(products)/ceiling-cloth-hanger/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["ceiling-cloth-hanger"];

export const metadata: Metadata = buildProductMetadata(config);

export default function CeilingClothHangerProductPage() {
  return <ProductPageView config={config} />;
}
