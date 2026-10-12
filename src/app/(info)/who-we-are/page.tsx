// File: src/app/(info)/who-we-are/page.tsx
import type { Metadata } from "next";
import { InfoPage } from "@/components/common/InfoPage";
import { PageHero } from "@/components/common/PageHero";
import { ProseSections } from "@/components/common/ProseSections";
import { RelatedLinks } from "@/components/common/RelatedLinks";
import { ProductCtaBanner } from "@/components/product/ProductCtaBanner";
import { buildPageMetadata } from "@/lib/seo";
import { WHO_WE_ARE } from "@/lib/info-pages";
import { PRODUCT_LINKS } from "@/lib/site-links";

export const metadata: Metadata = buildPageMetadata({
  path: WHO_WE_ARE.path,
  title: "About Solution Sahab | Our Story & Values",
  description: WHO_WE_ARE.description,
  keywords: WHO_WE_ARE.keywords,
});

export default function WhoWeArePage() {
  return (
    <InfoPage>
      <PageHero
        compact
        eyebrow={WHO_WE_ARE.eyebrow}
        title={WHO_WE_ARE.title}
        description={WHO_WE_ARE.description}
        breadcrumbs={[{ label: "Who We Are" }]}
      />
      <ProseSections sections={WHO_WE_ARE.sections} />
      <RelatedLinks
        title="Explore our products"
        intro="From invisible grills and pleated mesh to partitions, weather screens and skylights — every system is engineered, manufactured and installed by Solution Sahab."
        links={PRODUCT_LINKS}
        tone="low"
      />
      <ProductCtaBanner />
    </InfoPage>
  );
}
