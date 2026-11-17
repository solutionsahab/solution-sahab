// File: src/app/(products)/pleated-mesh/page.tsx
import type { Metadata } from "next";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { MeshShield } from "@/components/illustrations/MeshShield";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";

const config = PRODUCT_CONFIGS["pleated-mesh"];

export const metadata: Metadata = buildProductMetadata(config);

export default function PleatedMeshProductPage() {
  return (
    <ProductPageView config={config}>
      <FeatureSection
        id="how-mesh-works"
        reverse
        title={<>Breeze in, <strong className="font-extrabold">mosquitoes out</strong></>}
        text="The pleated mesh folds away when you do not need it and closes flat on a 3 mm track when you do, so air and light pass through while insects stay outside."
      >
        <MeshShield className="mx-auto max-w-xl" />
      </FeatureSection>
    </ProductPageView>
  );
}
