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
        className="w-full bg-white py-14 sm:py-20 scroll-mt-28"
        aria-label="Contact details and enquiry form"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="border border-ink/10 bg-white p-6">
                <h2 className="font-headline-md text-headline-md text-ink m-0 flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-[22px] text-primary"
                    aria-hidden="true"
                  >
                    call
                  </span>
                  Phone
                </h2>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 list-none p-0 m-0">
                  {CONTACT_DATA.phones.map((phone) => (
                    <li key={phone.raw}>
                      <Link
                        href={`tel:${phone.raw}`}
                        className="font-label-md text-label-md font-bold text-secondary hover:underline flex items-center gap-2"
                      >
                        {phone.label}
                        {phone.landline && (
                          <span className="font-body-sm text-body-sm font-normal text-ink-soft">
                            (Landline)
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-ink/10">
                  <h3 className="font-label-md text-label-md uppercase tracking-wider text-ink-soft m-0 flex items-center gap-2">
                    <span
                      className="material-symbols-outlined text-[18px] text-primary"
                      aria-hidden="true"
                    >
                      mail
                    </span>
                    Email
                  </h3>
                  <Link
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="mt-2 inline-block font-label-md text-label-md font-bold text-secondary hover:underline"
                  >
                    {CONTACT_DATA.email}
                  </Link>
                </div>
              </div>

              <div className="border border-ink/10 bg-white p-6">
                <h2 className="font-headline-md text-headline-md text-ink m-0 flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-[22px] text-primary"
                    aria-hidden="true"
                  >
                    location_on
                  </span>
                  Visit Us
                </h2>
                <ul className="mt-4 flex flex-col gap-4 list-none p-0 m-0">
                  {CONTACT_DATA.locations.map((location) => (
                    <li key={location.label} className="flex items-start gap-3">
                      <span
                        className="material-symbols-outlined text-[20px] text-secondary shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        apartment
                      </span>
                      <div>
                        <p className="font-label-md text-label-md font-bold text-ink m-0">
                          {location.label}
                        </p>
                        <p className="font-body-sm text-body-sm text-ink-soft leading-relaxed m-0 mt-1">
                          {location.address}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href={CONTACT_INFO.GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 min-h-11 font-label-md text-label-md font-semibold text-secondary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    map
                  </span>
                  View on Google Maps &amp; reviews
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
                <h2 className="font-headline-md text-headline-md text-ink m-0">
                  Send Us Your Enquiry
                </h2>
                <p className="font-body-md text-body-md text-ink-soft mt-2 mb-6">
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
        className="w-full bg-paper py-14 sm:py-20 scroll-mt-28"
        aria-labelledby="partners-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2
              id="partners-heading"
              className="font-headline-xl text-headline-xl text-ink m-0"
            >
              Our Partners
            </h2>
            <p className="font-body-md text-body-md text-ink-soft mt-3 mb-0">
              Regional partners who stock and install Solution Sahab systems in
              their city.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_DATA.partners.map((partner) => (
              <div
                key={partner.city}
                className="border border-ink/10 bg-white p-5 flex flex-col gap-2"
              >
                <span className="font-caption-caps text-caption-caps uppercase tracking-widest text-secondary">
                  {partner.city}
                </span>
                <span className="font-headline-sm text-headline-sm text-ink">
                  {partner.name}
                </span>
                <span className="font-body-sm text-body-sm text-ink-soft leading-relaxed">
                  {partner.address}
                </span>
              </div>
            ))}
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
