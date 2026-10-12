// File: src/app/(products)/aluminum-mesh-partition/page.tsx
import type { Metadata } from "next";
import { ProductDetailPage } from "@/components/product/ProductDetailPage";
import { PRODUCT_DETAILS } from "@/lib/products";
import { buildProductMetadata } from "@/lib/product-metadata";

const product = PRODUCT_DETAILS["aluminum-mesh-partition"];

export const metadata: Metadata = buildProductMetadata(product);

export default function AluminumMeshPartitionProductPage() {
  return <ProductDetailPage product={product} />;
}
