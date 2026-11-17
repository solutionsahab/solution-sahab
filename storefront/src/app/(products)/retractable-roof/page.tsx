// File: src/app/(products)/retractable-roof/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["retractable-roof"];

export const metadata: Metadata = buildProductMetadata(config);

export default function RetractableRoofProductPage() {
  return <ProductPageView config={config} />;
}
