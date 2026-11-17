// File: src/components/common/RelatedLinks.tsx
import React from "react";
import Link from "next/link";
import { Carousel } from "@/components/common/Carousel";

export interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

interface RelatedLinksProps {
  title: string;
  intro?: string;
  links: RelatedLink[];
  tone?: "surface" | "low" | "raised";
}

const TONE_CLASS: Record<string, string> = {
  surface: "bg-white",
  low: "bg-[#F3F6FB]",
  raised: "bg-white",
};

export function RelatedLinks({
  title,
  intro,
  links,
  tone = "surface",
}: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <section
      className={`w-full py-10 sm:py-12 scroll-mt-28 ${TONE_CLASS[tone]}`}
      aria-label={title}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-6">
          <h2 className="font-gilroy font-extrabold text-3xl sm:text-4xl text-neutral-950 tracking-tight leading-[1.1] m-0">
            {title}
          </h2>
          {intro && (
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mt-3 mb-0">
              {intro}
            </p>
          )}
        </div>

        {/* One-row swipe carousel (CSS scroll-snap): phones peek the next card, desktop shows 4 */}
        <Carousel label={title} className="flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group shrink-0 snap-start w-[80%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)] flex flex-col rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_-18px_rgb(15_27_51/0.35)] transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgb(27_77_142/0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <span className="text-lg font-extrabold font-gilroy text-neutral-950 tracking-tight block group-hover:text-[#1B4D8E] transition-colors">
                {link.label}
              </span>
              {link.description && (
                <span className="text-sm text-neutral-600 leading-relaxed block mt-2 mb-5">
                  {link.description}
                </span>
              )}
              <span className="mt-auto material-symbols-outlined flex! h-9 w-9 items-center justify-center rounded-full bg-[#1B4D8E]/10 text-[#1B4D8E] text-[18px]! transition-colors group-hover:bg-[#1B4D8E] group-hover:text-white" aria-hidden="true">
                chevron_right
              </span>
            </Link>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
