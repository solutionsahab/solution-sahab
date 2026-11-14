import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ASSETS, CONTACT_INFO } from "@/lib/constants";
import { Carousel } from "@/components/common/Carousel";

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
      "Balcony fall protection for children and pets plus smooth pleated insect screens, approved by RWAs across Gurgaon, Noida, and Delhi.",
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
    imageAlt: "Terrace lounge enclosed with a motorized weather screen",
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
      className="w-full py-10 sm:py-12 border-b border-neutral-300 scroll-mt-28"
      id="audience-solutions"
      aria-labelledby="audience-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2
          id="audience-heading"
          className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0 mb-6"
        >
          Built for Homes, Commercial Spaces &amp; Architects
        </h2>

        {/* One-row swipe carousel of cards (CSS scroll-snap): phones peek the next card, tablets show 2, desktop fits 3 */}
        <Carousel label="Who we serve" className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {AUDIENCES.map((item) => (
            <div
              key={item.index}
              className="flex flex-col shrink-0 snap-start w-[85%] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] border border-neutral-300 bg-white"
            >
              <div className="relative h-40 w-full overflow-hidden bg-neutral-200">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1023px) 50vw, 33vw"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col flex-1 p-4">
                <div className="flex items-center gap-2 text-xs font-gilroy font-extrabold uppercase tracking-widest text-[#1B4D8E] mb-1">
                  <span>{item.tag}</span>
                </div>

                <h3 className="text-lg font-extrabold font-gilroy text-neutral-950 tracking-tight m-0 mb-1.5">
                  {item.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed m-0 mb-4">
                  {item.description}
                </p>

                {/* mt-auto lines the buttons up across cards of different text length */}
                <Button
                  href={item.ctaHref}
                  variant="outline"
                  size="sm"
                  icon={item.isExternalPhone ? "call" : undefined}
                  className="w-full mt-auto"
                >
                  {item.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}