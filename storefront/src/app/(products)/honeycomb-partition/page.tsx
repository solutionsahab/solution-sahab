// File: src/app/(products)/honeycomb-partition/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["honeycomb-partition"];

export const metadata: Metadata = buildProductMetadata(config);

export default function HoneycombPartitionProductPage() {
  return <ProductPageView config={config} />;
}
