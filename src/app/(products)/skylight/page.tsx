// File: src/app/(products)/skylight/page.tsx
import type { Metadata } from "next";
import { ProductDetailPage } from "@/components/product/ProductDetailPage";
import { PRODUCT_DETAILS } from "@/lib/products";
import { buildProductMetadata } from "@/lib/product-metadata";

const product = PRODUCT_DETAILS["skylight"];

export const metadata: Metadata = buildProductMetadata(product);

export default function SkylightProductPage() {
  return <ProductDetailPage product={product} />;
}
