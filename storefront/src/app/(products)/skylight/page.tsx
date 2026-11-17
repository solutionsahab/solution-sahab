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
        title={<>Soft daylight, <strong className="font-extrabold">on your terms</strong></>}
        text="Skylight blinds turn a hot, glaring skylight into soft, controllable light: motorized, manual or cordless, with fabrics from light-filtering to full blackout and honeycomb insulation that blocks heat and UV."
        image={{ src: "/images/props/prop-stair-daylight.webp", alt: "Warm daylight falling on a wooden staircase landing beside a potted plant" }}
      />
    </ProductPageView>
  );
}
