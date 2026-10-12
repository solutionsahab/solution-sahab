import React from "react";

export function FunctionalAdvantages() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="kicker text-primary">Why they work</span>
          <h2 className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-3">
            Four practical advantages
          </h2>
          <p className="font-body-lg text-body-md sm:text-body-lg text-ink-soft m-0">
            No cage-like bars, and nothing to repaint each monsoon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Advantage 1 */}
          <div className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-paper hover:bg-paper-deep transition-colors border border-ink/10">
            <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                wb_sunny
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-ink">
              Views stay open
            </h3>
            <p className="font-body-md text-body-md text-ink-soft leading-relaxed">
              Maintains the facade and the sky view from your living room or
              balcony, with daylight coming through as before.
            </p>
          </div>

          {/* Advantage 2 */}
          <div className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-paper hover:bg-paper-deep transition-colors border border-ink/10">
            <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                child_care
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-ink">
              Toddler &amp; Pet Fall Prevention
            </h3>
            <p className="font-body-md text-body-md text-ink-soft leading-relaxed">
              Provides peace of mind on 20th-floor balconies. Strict 2-inch
              tension spacing prevents accidental slips, pet head entrapping, or
              toy drop hazards.
            </p>
          </div>

          {/* Advantage 3 */}
          <div className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-paper hover:bg-paper-deep transition-colors border border-ink/10">
            <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                water_drop
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-ink">
              No rust, no repainting
            </h3>
            <p className="font-body-md text-body-md text-ink-soft leading-relaxed">
              Unlike mild steel grilles that corrode in monsoon rain and need
              repainting, 316-grade alloy cables hold up year after year —
              covered by the 10-year anti-rust warranty.
            </p>
          </div>

          {/* Advantage 4 */}
          <div className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-paper hover:bg-paper-deep transition-colors border border-ink/10">
            <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                fire_extinguisher
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-ink">
              Fire exit stays usable
            </h3>
            <p className="font-body-md text-body-md text-ink-soft leading-relaxed">
              The cables cut through with shears in seconds, so rescue access
              stays open without cutting torches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
