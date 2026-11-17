// File: src/app/(info)/gallery/page.tsx
import type { Metadata } from "next";
import { InfoPage } from "@/components/common/InfoPage";
import { PageHero } from "@/components/common/PageHero";
import { ImageGrid } from "@/components/common/ImageGrid";
import { RelatedLinks } from "@/components/common/RelatedLinks";
import { Button } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/seo";
import { GALLERY_IMAGES, INSTAGRAM_URL } from "@/lib/info-pages";
import { PRODUCT_LINKS } from "@/lib/site-links";

const DESCRIPTION =
  "Real installation photos from Solution Sahab: invisible grills, pleated and aluminium mesh, honeycomb partitions, weather screens, pergolas and cloth hangers.";

export const metadata: Metadata = buildPageMetadata({
  path: "/gallery",
  title: "Installation Gallery: Delhi NCR Projects | Solution Sahab",
  description: DESCRIPTION,
  keywords: [
    "Solution Sahab gallery",
    "Invisible grill installation photos Delhi NCR",
    "Pleated mesh installation photos",
    "Balcony safety grill photos Gurgaon Noida",
  ],
});

export default function GalleryPage() {
  return (
    <InfoPage>
      <PageHero
        compact
        eyebrow="Gallery"
        title="Transforming Ideas Into Reality"
        description={DESCRIPTION}
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section
        className="w-full bg-white py-10 sm:py-12 lg:py-14 scroll-mt-28"
        aria-label="Solution Sahab project photos"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ImageGrid images={GALLERY_IMAGES} masonry />
        </div>
      </section>

      <section
        className="w-full bg-white pb-8 sm:pb-12"
        aria-labelledby="follow-heading"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="rounded-[2rem] bg-[#1B4D8E] text-white p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2
                id="follow-heading"
                className="font-gilroy font-extrabold text-3xl sm:text-4xl tracking-tight m-0"
              >
                Follow us
              </h2>
              <p className="text-white/80 leading-relaxed mt-3 mb-0">
                More installation photos and project updates are shared on our
                Instagram profile.
              </p>
            </div>
            <Button
              href={INSTAGRAM_URL}
              variant="white"
              size="lg"
              icon="photo_camera"
              className="shrink-0"
            >
              View on Instagram
            </Button>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Explore our products"
        links={PRODUCT_LINKS}
        tone="surface"
      />
    </InfoPage>
  );
}
