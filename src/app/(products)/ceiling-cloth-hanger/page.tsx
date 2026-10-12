// File: src/app/(products)/ceiling-cloth-hanger/page.tsx
import type { Metadata } from "next";
import { ProductDetailPage } from "@/components/product/ProductDetailPage";
import { PRODUCT_DETAILS } from "@/lib/products";
import { buildProductMetadata } from "@/lib/product-metadata";

const product = PRODUCT_DETAILS["ceiling-cloth-hanger"];

export const metadata: Metadata = buildProductMetadata(product);

export default function CeilingClothHangerProductPage() {
  return <ProductDetailPage product={product} />;
}
