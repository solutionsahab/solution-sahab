// File: src/app/(products)/automatic-weather-screen/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["automatic-weather-screen"];

export const metadata: Metadata = buildProductMetadata(config);

export default function AutomaticWeatherScreenProductPage() {
  return <ProductPageView config={config} />;
}
