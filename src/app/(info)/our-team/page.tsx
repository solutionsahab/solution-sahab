// File: src/app/(info)/our-team/page.tsx
import type { Metadata } from "next";
import { InfoPage } from "@/components/common/InfoPage";
import { PageHero } from "@/components/common/PageHero";
import { ImageGrid } from "@/components/common/ImageGrid";
import { RelatedLinks } from "@/components/common/RelatedLinks";
import { ProductCtaBanner } from "@/components/product/ProductCtaBanner";
import { buildPageMetadata } from "@/lib/seo";
import { TEAM_IMAGES } from "@/lib/info-pages";
import { PRODUCT_LINKS } from "@/lib/site-links";

const DESCRIPTION =
  "Meet the Solution Sahab team behind our invisible grills, pleated mesh and architectural safety systems across Delhi NCR.";

export const metadata: Metadata = buildPageMetadata({
  path: "/our-team",
  title: "Our Team | Solution Sahab",
  description: DESCRIPTION,
  keywords: [
    "Solution Sahab team",
    "Invisible grill installation team Delhi NCR",
    "Fenestration professionals India",
  ],
});

export default function OurTeamPage() {
  return (
    <InfoPage>
      <PageHero
        compact
        eyebrow="Solution Sahab"
        title="Our Team"
        description={DESCRIPTION}
        breadcrumbs={[{ label: "Our Team" }]}
      />

      <section
        className="w-full bg-white py-14 sm:py-20 scroll-mt-28"
        aria-label="Solution Sahab team photos"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <ImageGrid images={TEAM_IMAGES} ratio="square" columns={4} />
        </div>
      </section>

      <RelatedLinks
        title="Explore our products"
        links={PRODUCT_LINKS}
        tone="low"
      />
      <ProductCtaBanner />
    </InfoPage>
  );
}
