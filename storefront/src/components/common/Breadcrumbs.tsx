// File: src/components/common/Breadcrumbs.tsx
import React from "react";
import Link from "next/link";
import { SITE } from "@/lib/seo";

export interface Crumb {
  label: string;
  /** Omit for the current page (rendered without a link) */
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const traversed: Crumb[] = [{ label: "Home", href: "/" }, ...items];
  const current = traversed[traversed.length - 1];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: traversed.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${SITE}${crumb.href ?? ""}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`min-w-0 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-y-1 font-label-sm text-label-sm text-ink-soft m-0 p-0 list-none">
          {traversed.map((crumb, index) => {
            const isLast = index === traversed.length - 1;
            return (
              <li
                key={`${crumb.label}-${index}`}
                className="flex items-center min-w-0 max-w-full"
              >
                {index > 0 && (
                  <span
                    className="material-symbols-outlined text-[14px] text-outline px-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    chevron_right
                  </span>
                )}
                {isLast || !crumb.href ? (
                  <span
                    className="truncate text-ink font-semibold"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="truncate hover:text-secondary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
          {current && null}
        </ol>
      </nav>
    </>
  );
}
