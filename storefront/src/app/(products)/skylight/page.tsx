// File: src/app/(products)/skylight/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["skylight"];

export const metadata: Metadata = buildProductMetadata(config);

export default function SkylightProductPage() {
  return <ProductPageView config={config} />;
}
