// File: src/app/(products)/pleated-mesh/page.tsx
import type { Metadata } from "next";
import { ProductDetailPage } from "@/components/product/ProductDetailPage";
import { PRODUCT_DETAILS } from "@/lib/products";
import { buildProductMetadata } from "@/lib/product-metadata";

const product = PRODUCT_DETAILS["pleated-mesh"];

export const metadata: Metadata = buildProductMetadata(product);

export default function PleatedMeshProductPage() {
  return <ProductDetailPage product={product} />;
}
