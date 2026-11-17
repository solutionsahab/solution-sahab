// File: src/app/(products)/automatic-weather-screen/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["automatic-weather-screen"];

export const metadata: Metadata = buildProductMetadata(config);

export default function AutomaticWeatherScreenProductPage() {
  return (
    <ProductPageView config={config}>
      {/* AI-generated mood scene (no product shown), paired with this page's own claims */}
      <FeatureSection
        id="monsoon-calm"
        title={<>Monsoon outside, <strong className="font-extrabold">calm inside</strong></>}
        text="Zip-locked screens rated for 80 km/h winds drop at the touch of a remote, keeping rain, heat and dust off your balcony without closing it in."
        image={{ src: "/images/props/prop-monsoon-glass.webp", alt: "Raindrops on a glass balcony door with blurred evening city lights" }}
      />
    </ProductPageView>
  );
}
