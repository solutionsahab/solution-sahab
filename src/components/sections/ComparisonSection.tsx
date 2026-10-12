// File: src/components/sections/ComparisonSection.tsx
import React from "react";
import Link from "next/link";

const ROWS: { label: string; iron: string; ours: string }[] = [
  {
    label: "View",
    iron: "Thick bars cover the opening",
    ours: "Thin cables read as almost nothing",
  },
  {
    label: "Rust",
    iron: "Mild steel needs repainting most years",
    ours: "316-grade steel, 10-year anti-rust warranty",
  },
  {
    label: "Fire exit",
    iron: "Welded bars block the opening",
    ours: "Cables cut through in seconds with shears",
  },
  {
    label: "Upkeep",
    iron: "Scrape, prime and repaint",
    ours: "Wipe down with a cloth",
  },
];

export function ComparisonSection() {
  return (
    <section
      className="w-full py-14 sm:py-20 bg-paper-deep scroll-mt-28"
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="kicker text-ink">An honest comparison</span>
          <h2
            id="comparison-heading"
            className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-0"
          >
            Grills vs iron bars, plainly put
          </h2>
        </div>

        <div className="card-flat overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="font-label-md text-label-md font-bold text-ink p-4 sm:p-5 w-[22%]">
                  <span className="sr-only">Aspect</span>
                </th>
                <th className="font-label-md text-label-md font-bold text-ink-soft p-4 sm:p-5">
                  Iron bars
                </th>
                <th className="font-label-md text-label-md font-bold text-primary p-4 sm:p-5">
                  Our cable grills
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-slate-100 last:border-0"
                >
                  <th className="font-label-md text-label-md font-bold text-ink p-4 sm:p-5 align-top">
                    {row.label}
                  </th>
                  <td className="font-body-md text-body-md text-ink-soft p-4 sm:p-5 align-top">
                    {row.iron}
                  </td>
                  <td className="font-body-md text-body-md text-ink p-4 sm:p-5 align-top">
                    {row.ours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-body-md text-body-md text-ink-soft mt-6 mb-0 max-w-2xl">
          Iron bars still suit ground-floor shops and gates. For high-rise
          balconies and windows, cables keep the safety without closing up
          the flat.{" "}
          <Link
            href="#quick-booking"
            className="text-secondary font-semibold hover:underline"
          >
            Compare samples at your home
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
