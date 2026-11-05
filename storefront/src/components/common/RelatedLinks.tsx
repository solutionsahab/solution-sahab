// File: src/components/common/RelatedLinks.tsx
import React from "react";
import Link from "next/link";

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
  low: "bg-paper",
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
      className={`w-full py-10 sm:py-12 border-b border-neutral-300 scroll-mt-28 ${TONE_CLASS[tone]}`}
      aria-label={title}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight m-0">
            {title}
          </h2>
          {intro && (
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mt-2 mb-0">
              {intro}
            </p>
          )}
        </div>

        {/* One-row swipe carousel (CSS scroll-snap): phones peek the next card, desktop shows 4 */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 sm:scroll-px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group shrink-0 snap-start w-[80%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)] block border border-neutral-200 bg-white p-4 transition-colors hover:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <span className="text-base font-extrabold font-gilroy text-neutral-950 tracking-tight block group-hover:text-[#1B4D8E] transition-colors">
                {link.label}
              </span>
              {link.description && (
                <span className="text-sm text-neutral-600 leading-relaxed block mt-1">
                  {link.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
