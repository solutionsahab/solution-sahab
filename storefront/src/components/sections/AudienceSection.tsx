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
    // AI-generated mood scene (no product shown): the risk an open balcony poses to children
    imageUrl: "/images/props/prop-toys-balcony.webp",
    imageAlt: "Toy blocks and a teddy bear on a sunlit high-rise balcony with an open railing",
    ctaText: "Book Home Measurement",
    ctaHref: "#quick-booking",
  },
  {
    index: "02",
    tag: "Cats, Dogs & Birds",
    title: "Pet Parents in High-Rises",
    description:
      "Cats love ledges. Close cable spacing and aluminium security mesh keep pets inside while the balcony stays open to light and air.",
    // AI-generated mood scene (no product shown)
    imageUrl: "/images/props/prop-cat-ledge.webp",
    imageAlt: "A tabby cat sitting on an open balcony ledge high above the city at sunset",
    ctaText: "Book Home Measurement",
    ctaHref: "#quick-booking",
  },
  {
    index: "03",
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
    index: "04",
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
      className="w-full bg-white py-12 sm:py-14 lg:py-16 scroll-mt-28"
      id="audience-solutions"
      aria-labelledby="audience-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2
          id="audience-heading"
          className="reveal font-gilroy font-light text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.05] m-0 mb-6 sm:mb-8 max-w-3xl"
        >
          Built for <strong className="font-extrabold">homes, commercial spaces &amp; architects</strong>
        </h2>

        {/* Photo-led cards: text sits on a dark fade at the bottom of each real install photo */}
        <Carousel label="Who we serve" className="flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {AUDIENCES.map((item) => (
            <div
              key={item.index}
              className="group relative flex flex-col justify-end shrink-0 snap-start w-[85%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] min-h-[360px] sm:min-h-[340px] sm:min-h-[400px] rounded-[1.75rem] overflow-hidden bg-neutral-900 isolate"
            >
              <Image
                src={item.imageUrl}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1023px) 50vw, 33vw"
                loading="lazy"
                className="-z-10 object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0F1B33] via-[#0F1B33]/45 to-transparent" />

              <div className="flex flex-col p-6 text-white">
                <span className="self-start rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold mb-3">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-extrabold font-gilroy tracking-tight m-0 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed m-0 mb-5">
                  {item.description}
                </p>
                <Button
                  href={item.ctaHref}
                  variant="white"
                  size="sm"
                  icon={item.isExternalPhone ? "call" : undefined}
                  className="self-start"
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
