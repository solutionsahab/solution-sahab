// File: src/app/(info)/contact-us/page.tsx
import type { Metadata } from "next";
import { InfoPage } from "@/components/common/InfoPage";
import { PageHero } from "@/components/common/PageHero";
import { RelatedLinks } from "@/components/common/RelatedLinks";
import { ContactForm } from "@/components/common/ContactForm";
import { buildPageMetadata } from "@/lib/seo";
import { CONTACT_DATA } from "@/lib/info-pages";
import { CONTACT_INFO } from "@/lib/constants";
import { PRODUCT_LINKS } from "@/lib/site-links";
import Link from "next/link";
import { Carousel } from "@/components/common/Carousel";

const DESCRIPTION =
  "Contact Solution Sahab for invisible grills, pleated mesh and honeycomb mesh. Call +91 9971-143-143 or send your details for a site visit across Delhi NCR.";

export const metadata: Metadata = buildPageMetadata({
  path: "/contact-us",
  title: "Contact Us | Solution Sahab",
  description: DESCRIPTION,
  keywords: [
    "Contact Solution Sahab",
    "Invisible grill dealer Delhi NCR phone number",
    "Pleated mesh installation contact",
    "site visit Delhi NCR",
  ],
});

export default function ContactUsPage() {
  return (
    <InfoPage>
      <PageHero
        compact
        eyebrow="Get in Touch"
        title="Contact Us"
        description={DESCRIPTION}
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section
        className="w-full bg-white py-10 sm:py-12 border-b border-neutral-300 scroll-mt-28"
        aria-label="Contact details and enquiry form"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="border border-neutral-300 bg-white p-5">
                <h2 className="text-lg font-extrabold font-gilroy text-neutral-950 tracking-tight m-0">
                  Phone
                </h2>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none p-0 m-0">
                  {CONTACT_DATA.phones.map((phone) => (
                    <li key={phone.raw}>
                      <Link
                        href={`tel:${phone.raw}`}
                        className="text-sm font-semibold text-neutral-950 underline underline-offset-4 hover:opacity-70 inline-flex items-center gap-2"
                      >
                        {phone.label}
                        {phone.landline && (
                          <span className="text-xs font-normal text-neutral-500">
                            (Landline)
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-neutral-300">
                  <h3 className="text-xs font-gilroy font-extrabold uppercase tracking-widest text-[#1B4D8E] m-0">
                    Email
                  </h3>
                  <Link
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="mt-1.5 inline-block text-sm font-semibold text-neutral-950 underline underline-offset-4 hover:opacity-70"
                  >
                    {CONTACT_DATA.email}
                  </Link>
                </div>
              </div>

              <div className="border border-neutral-300 bg-white p-5">
                <h2 className="text-lg font-extrabold font-gilroy text-neutral-950 tracking-tight m-0">
                  Visit Us
                </h2>
                <ul className="mt-3 flex flex-col gap-3 list-none p-0 m-0">
                  {CONTACT_DATA.locations.map((location) => (
                    <li key={location.label}>
                      <p className="text-sm font-semibold text-neutral-950 m-0">
                        {location.label}
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed m-0 mt-0.5">
                        {location.address}
                      </p>
                    </li>
                  ))}
                </ul>
                <a
                  href={CONTACT_INFO.GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center min-h-11 text-sm font-semibold text-[#1B4D8E] underline underline-offset-4 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4D8E]"
                >
                  View on Google Maps &amp; reviews
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-neutral-300 bg-white p-5 sm:p-6">
                <h2 className="text-lg font-extrabold font-gilroy text-neutral-950 tracking-tight m-0">
                  Send Us Your Enquiry
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed mt-1 mb-4">
                  Share your requirement and our team will call you back to
                  arrange a measurement.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-white py-10 sm:py-12 border-b border-neutral-300 scroll-mt-28"
        aria-labelledby="partners-heading"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-6">
            <h2
              id="partners-heading"
              className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0"
            >
              Our Partners
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed mt-2 mb-0">
              Regional partners who stock and install Solution Sahab systems in
              their city.
            </p>
          </div>

          {/* One-row swipe carousel (CSS scroll-snap): phones peek the next card, desktop shows all 4 */}
          <Carousel label="Our partners" className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CONTACT_DATA.partners.map((partner) => (
              <div
                key={partner.city}
                className="shrink-0 snap-start w-[80%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)] border border-neutral-300 bg-white p-4 flex flex-col gap-1.5"
              >
                <span className="text-xs font-gilroy font-extrabold uppercase tracking-widest text-[#1B4D8E]">
                  {partner.city}
                </span>
                <span className="text-base font-extrabold font-gilroy text-neutral-950 tracking-tight">
                  {partner.name}
                </span>
                <span className="text-sm text-neutral-600 leading-relaxed">
                  {partner.address}
                </span>
              </div>
            ))}
          </Carousel>
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
