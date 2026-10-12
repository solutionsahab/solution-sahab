// File: src/app/(products)/automatic-weather-screen/page.tsx
import type { Metadata } from "next";
import { ProductDetailPage } from "@/components/product/ProductDetailPage";
import { PRODUCT_DETAILS } from "@/lib/products";
import { buildProductMetadata } from "@/lib/product-metadata";

const product = PRODUCT_DETAILS["automatic-weather-screen"];

export const metadata: Metadata = buildProductMetadata(product);

export default function AutomaticWeatherScreenProductPage() {
  return <ProductDetailPage product={product} />;
}
