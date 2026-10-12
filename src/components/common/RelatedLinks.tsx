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
      className={`w-full py-8 sm:py-12 scroll-mt-28 ${TONE_CLASS[tone]}`}
      aria-label={title}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="font-headline-xl text-headline-xl text-ink leading-tight m-0">
            {title}
          </h2>
          {intro && (
            <p className="font-body-md text-body-md text-ink-soft leading-relaxed mt-3 mb-0">
              {intro}
            </p>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-ink/10 bg-white p-5 transition-all hover:border-primary/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <div className="min-w-0">
                <span className="font-headline-sm text-headline-sm text-ink block group-hover:text-primary transition-colors">
                  {link.label}
                </span>
                {link.description && (
                  <span className="font-body-sm text-body-sm text-ink-soft leading-relaxed block mt-1.5">
                    {link.description}
                  </span>
                )}
              </div>
              <span
                className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
