import React from "react";
import Image from "next/image";
import { ASSETS } from "@/const";

export function ArchitecturalTypologies() {
  const typologies = [
    {
      title: "High-Rise Balconies",
      badge: "High Demand",
      badgeBg: "bg-secondary text-on-secondary",
      description:
        "Floor-to-ceiling cables on the balcony edge. Fall protection with the sunrise view intact.",
      metricLabel: "Standard Pitch",
      metricValue: "50mm Child-Safe",
      imageUrl: ASSETS.TYPOLOGIES.HIGH_RISE,
      altText:
        "Modern penthouse balcony with curved glass balustrade outfitted with vertical stainless steel invisible safety grilles overlooking the Noida and Gurugram skyline",
    },
    {
      title: "French Windows",
      badge: "Residential",
      badgeBg: "bg-primary text-on-primary",
      description:
        "Fitted on the outer frame so casement and sliding windows still open fully.",
      metricLabel: "Installation",
      metricValue: "External Track Mount",
      imageUrl: ASSETS.TYPOLOGIES.FRENCH_WINDOWS,
      altText:
        "Interior architectural master bedroom with large floor to ceiling French windows secured with nearly invisible vertical wire grilles",
    },
    {
      title: "Stairwell Voids & Atriums",
      badge: "Architectural",
      badgeBg: "bg-paper-deep text-ink",
      description:
        "Guards for duplex cutouts, staircases and atrium shafts that keep the space feeling open.",
      metricLabel: "Drop Length",
      metricValue: "Up to 12 Metres",
      imageUrl: ASSETS.TYPOLOGIES.STAIRWELL_VOIDS,
      altText:
        "Contemporary multi-level luxury villa duplex interior showing a dramatic three-story stairwell void secured with invisible tension cable screens",
    },
    {
      title: "Terrace Openings",
      badge: "Outdoor",
      badgeBg: "bg-secondary text-on-secondary",
      description:
        "Keeps monkeys and pigeons off open terraces while guarding the edge.",
      metricLabel: "Weather",
      metricValue: "Monsoon-ready",
      imageUrl: ASSETS.TYPOLOGIES.TERRACE_OPENINGS,
      altText:
        "Rooftop terrace lounge of an upscale urban condominium with invisible wire grilles securing open parapet ledges",
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-6">
          <div>
            <span className="kicker text-ink">Where it fits</span>
            <h2 className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-0">
              Four openings, one system
            </h2>
          </div>
          <p className="font-body-md text-body-md text-ink-soft max-w-lg m-0">
            The same cables adapt around curved railings, double-height voids
            and narrow window tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {typologies.map((item, idx) => (
            <div
              key={idx}
              className="card-flat overflow-hidden flex flex-col"
            >
              <div className="relative h-52 sm:h-56 overflow-hidden bg-paper-deep">
                <Image
                  alt={item.altText}
                  className="w-full h-full object-cover"
                  src={item.imageUrl}
                  width={500}
                  height={320}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 rounded bg-ink/85 text-white font-caption-caps text-caption-caps uppercase font-bold"
                >
                  {item.badge}
                </span>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-ink-soft leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-ink/10 flex items-center justify-between font-caption-caps text-caption-caps uppercase text-ink-soft">
                  <span>{item.metricLabel}</span>
                  <span className="font-bold text-ink">
                    {item.metricValue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
