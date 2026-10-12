// File: src/app/(info)/gallery/page.tsx
import type { Metadata } from "next";
import { InfoPage } from "@/components/common/InfoPage";
import { PageHero } from "@/components/common/PageHero";
import { ImageGrid } from "@/components/common/ImageGrid";
import { RelatedLinks } from "@/components/common/RelatedLinks";
import { ProductCtaBanner } from "@/components/product/ProductCtaBanner";
import { buildPageMetadata } from "@/lib/seo";
import { GALLERY_IMAGES, INSTAGRAM_URL } from "@/lib/info-pages";
import { PRODUCT_LINKS } from "@/lib/site-links";

const DESCRIPTION =
  "Installation photos from Solution Sahab — Gurgaon high-rise balconies, Noida villa screens, exhibitions and factory quality control.";

export const metadata: Metadata = buildPageMetadata({
  path: "/gallery",
  title: "Gallery | Solution Sahab",
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
        className="w-full bg-white py-14 sm:py-20 scroll-mt-28"
        aria-label="Solution Sahab project photos"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <ImageGrid images={GALLERY_IMAGES} ratio="landscape" columns={4} />
        </div>
      </section>

      <section
        className="w-full bg-paper py-14 sm:py-16"
        aria-labelledby="follow-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2
                id="follow-heading"
                className="font-headline-xl text-headline-xl text-ink m-0"
              >
                Follow us
              </h2>
              <p className="font-body-md text-body-md text-ink-soft leading-relaxed mt-3 mb-0">
                More installation photos and project updates are shared on our
                Instagram profile.
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-bold hover:bg-blue-800 transition-colors shrink-0"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                aria-hidden="true"
              >
                photo_camera
              </span>
              View on Instagram
            </a>
          </div>
        </div>
      </section>

      <RelatedLinks
        title="Explore our products"
        links={PRODUCT_LINKS}
        tone="surface"
      />
      <ProductCtaBanner />
    </InfoPage>
  );
}
