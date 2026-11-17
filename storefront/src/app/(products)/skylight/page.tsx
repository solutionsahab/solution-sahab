// File: src/app/(products)/skylight/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["skylight"];

export const metadata: Metadata = buildProductMetadata(config);

export default function SkylightProductPage() {
  return (
    <ProductPageView config={config}>
      {/* AI-generated mood scene (no product shown), paired with this page's own claims */}
      <FeatureSection
        id="daylight"
        title={<>Daylight where <strong className="font-extrabold">walls can&apos;t reach</strong></>}
        text="Laminated 13.52 mm glass with a Low-E coating brings daylight into stairwells and duplex cores, reflects up to 75% of solar heat, and is sealed leak-proof with EPDM gaskets."
        image={{ src: "/images/props/prop-stair-daylight.webp", alt: "Warm daylight falling on a wooden staircase landing beside a potted plant" }}
      />
    </ProductPageView>
  );
}
