// File: src/app/(products)/invisible-grills/page.tsx
import type { Metadata } from "next";
import { ProductUseCaseLinks } from "@/components/product/common";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { CableTension } from "@/components/illustrations/CableTension";
import { PRODUCT_CONFIGS } from "@/lib/product-page-configs";
import { USE_CASE_PAGES } from "@/lib/use-case-pages";

const config = PRODUCT_CONFIGS["invisible-grills"];

const useCaseLinks = Object.values(USE_CASE_PAGES).map((page) => ({
  title: page.navLabel,
  desc: page.card.desc,
  href: `/${page.slug}`,
  imageUrl: page.card.imageUrl,
  alt: page.card.alt,
}));

export const metadata: Metadata = buildProductMetadata(config);

export default function InvisibleGrillsProductPage() {
  return (
    <ProductPageView config={config}>
      <FeatureSection
        id="how-it-holds"
        reverse
        title={<>Tensioned to hold, <strong className="font-extrabold">thin enough to vanish</strong></>}
        text="Each 316 stainless cable is pulled tight between anchored rails and tested for a 400 kg breaking load, so it holds a falling child or pet without blocking the view."
      >
        <CableTension className="mx-auto max-w-xl" />
      </FeatureSection>
      <ProductUseCaseLinks
        title="Invisible Grills for Every Building"
        subtitle="Schools and hospitals have their own safety needs. See how we plan installations for each."
        items={useCaseLinks}
      />
    </ProductPageView>
  );
}
