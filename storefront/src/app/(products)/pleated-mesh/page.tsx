// File: src/app/(products)/pleated-mesh/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["pleated-mesh"];

export const metadata: Metadata = buildProductMetadata(config);

export default function PleatedMeshProductPage() {
  return <ProductPageView config={config} />;
}
