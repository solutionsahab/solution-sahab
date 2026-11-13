// File: src/app/(products)/invisible-grills/page.tsx
import type { Metadata } from "next";
import { ProductUseCaseLinks } from "@/components/product/common";
import { ProductPageView, buildProductMetadata } from "@/components/product/common/ProductPageView";
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
      <ProductUseCaseLinks
        title="Invisible Grills for Every Building"
        subtitle="Schools and hospitals have their own safety needs. See how we plan installations for each."
        items={useCaseLinks}
      />
    </ProductPageView>
  );
}
