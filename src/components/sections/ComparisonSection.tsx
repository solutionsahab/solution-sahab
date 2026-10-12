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

        {/* Mobile View: Comparison Cards (< 640px) */}
        <div className="sm:hidden space-y-3.5">
          {ROWS.map((row) => (
            <div
              key={row.label}
              className="card-flat p-4 bg-white shadow-xs border border-slate-200/90 rounded-xl"
            >
              <div className="font-label-md text-label-md font-bold text-ink mb-3 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>{row.label}</span>
              </div>
              <div className="space-y-2">
                {/* Iron bars */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <span
                    className="material-symbols-outlined text-slate-400 text-[18px] shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    close
                  </span>
                  <div className="text-sm">
                    <span className="font-semibold text-slate-500 block text-xs uppercase tracking-wider mb-0.5">
                      Iron Bars
                    </span>
                    <span className="text-slate-600 leading-snug">
                      {row.iron}
                    </span>
                  </div>
                </div>

                {/* Our cable grills */}
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 flex items-start gap-2.5">
                  <span
                    className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  <div className="text-sm">
                    <span className="font-bold text-primary block text-xs uppercase tracking-wider mb-0.5">
                      Our Cable Grills
                    </span>
                    <span className="text-ink font-medium leading-snug">
                      {row.ours}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Comparison Table (>= 640px) */}
        <div className="hidden sm:block card-flat overflow-hidden overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[560px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/60">
                <th className="font-label-md text-label-md font-bold text-ink p-4 sm:p-5 w-[22%]">
                  <span className="sr-only">Aspect</span>
                </th>
                <th className="font-label-md text-label-md font-bold text-ink-soft p-4 sm:p-5 w-[39%]">
                  Iron bars
                </th>
                <th className="font-label-md text-label-md font-bold text-primary p-4 sm:p-5 w-[39%] bg-primary/[0.04]">
                  Our cable grills
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/40 transition-colors"
                >
                  <th className="font-label-md text-label-md font-bold text-ink p-4 sm:p-5 align-top">
                    {row.label}
                  </th>
                  <td className="font-body-md text-body-md text-ink-soft p-4 sm:p-5 align-top">
                    <div className="flex items-start gap-2">
                      <span
                        className="material-symbols-outlined text-slate-400 text-[18px] shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        close
                      </span>
                      <span>{row.iron}</span>
                    </div>
                  </td>
                  <td className="font-body-md text-body-md text-ink p-4 sm:p-5 align-top bg-primary/[0.04]">
                    <div className="flex items-start gap-2">
                      <span
                        className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        check_circle
                      </span>
                      <span className="font-medium">{row.ours}</span>
                    </div>
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
