// File: src/app/(products)/aluminum-mesh-partition/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["aluminum-mesh-partition"];

export const metadata: Metadata = buildProductMetadata(config);

export default function AluminumMeshPartitionProductPage() {
  return <ProductPageView config={config} />;
}
