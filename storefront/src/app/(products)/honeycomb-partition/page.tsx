// File: src/app/(products)/honeycomb-partition/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["honeycomb-partition"];

export const metadata: Metadata = buildProductMetadata(config);

export default function HoneycombPartitionProductPage() {
  return (
    <ProductPageView config={config}>
      {/* AI-generated mood scene (no product shown), paired with this page's own claims */}
      <FeatureSection
        id="quiet-rooms"
        title={<>Quieter rooms, <strong className="font-extrabold">cooler afternoons</strong></>}
        text="Hexagonal air pockets trap radiant heat at large glass doors and soften echo and traffic noise, so rooms stay calm and AC use drops by up to 30%."
        image={{ src: "/images/props/prop-calm-living.webp", alt: "A dog asleep on a sofa in a calm, softly lit living room" }}
      />
    </ProductPageView>
  );
}
