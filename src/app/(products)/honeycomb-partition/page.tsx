// File: src/app/(products)/honeycomb-partition/page.tsx
import type { Metadata } from "next";
import { ProductDetailPage } from "@/components/product/ProductDetailPage";
import { PRODUCT_DETAILS } from "@/lib/products";
import { buildProductMetadata } from "@/lib/product-metadata";

const product = PRODUCT_DETAILS["honeycomb-partition"];

export const metadata: Metadata = buildProductMetadata(product);

export default function HoneycombPartitionProductPage() {
  return <ProductDetailPage product={product} />;
}
