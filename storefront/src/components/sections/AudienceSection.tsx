import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ASSETS, CONTACT_INFO } from "@/lib/constants";

interface AudienceRow {
  index: string;
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
  isExternalPhone?: boolean;
}

const AUDIENCES: AudienceRow[] = [
  {
    index: "01",
    tag: "Apartments & Villas",
    title: "Homeowners & High-Rise Residents",
    description:
      "Balcony fall protection for children and pets plus smooth pleated insect screens—approved by RWAs across Gurgaon, Noida, and Delhi.",
    imageUrl: ASSETS.PRODUCTS.INVISIBLE_GRILLS,
    imageAlt: "High-rise residential balcony fitted with invisible safety grills",
    ctaText: "Book Home Measurement",
    ctaHref: "#quick-booking",
  },
  {
    index: "02",
    tag: "Cafes, Offices & Retail",
    title: "Commercial & Hospitality Spaces",
    description:
      "Motorized outdoor weather screens for open-air terraces and acoustic honeycomb dividers for offices and dining rooms.",
    imageUrl: ASSETS.PRODUCTS.WEATHER_SCREENS,
    imageAlt: "Commercial terrace enclosed with motorized weather screens",
    ctaText: "Request Commercial Quote",
    ctaHref: "#quick-booking",
  },
  {
    index: "03",
    tag: "Trade & B2B Partners",
    title: "Architects & Interior Designers",
    description:
      "Custom RAL powder-coated frames matched to Fenesta, Schüco, or wood-grain profiles, backed by physical sample kits and site engineers.",

    imageUrl: ASSETS.PRODUCTS.HONEYCOMB_PARTITIONS,
    imageAlt: "Custom architectural honeycomb partition and frame finish",
    ctaText: "Call Spec Desk",
    ctaHref: `tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`,
    isExternalPhone: true,
  },
];

export function AudienceSection() {
  return (
    <section
      className="w-full py-16 sm:py-24 border-b border-neutral-300 scroll-mt-28"
      id="audience-solutions"
      aria-labelledby="audience-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Minimal Section Header */}
        <div className="pb-8 border-b border-neutral-300">
          <h2
            id="audience-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-950 tracking-tight m-0"
          >
            Built for Homes, Commercial Spaces &amp; Architects
          </h2>
        </div>

        {/* Horizontal Architectural Rows with Dedicated Image Space */}
        <div className="divide-y divide-neutral-300 border-b border-neutral-300">
          {AUDIENCES.map((item) => (
            <div
              key={item.index}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Left 4 Columns: Sharp Architectural Image Frame */}
              <div className="lg:col-span-4 w-full">
                <div className="relative h-56 sm:h-64 lg:h-52 w-full overflow-hidden bg-neutral-200 border border-neutral-300">
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Middle 5 Columns: Tag + Title + Description + Specs */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 text-xs font-gilroy font-extrabold uppercase tracking-widest text-[#1B4D8E] mb-1.5">
                  <span>{item.tag}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold font-gilroy text-neutral-950 tracking-tight m-0 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed m-0 mb-4">
                  {item.description}
                </p>

                
              </div>

              {/* Right 3 Columns: Direct Action CTA */}
              <div className="lg:col-span-3 flex lg:justify-end">
                <Button
                  href={item.ctaHref}
                  variant="outline"
                  size="md"
                  icon={item.isExternalPhone ? "call" : "arrow_forward"}
                  className="w-full sm:w-auto"
                >
                  {item.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}