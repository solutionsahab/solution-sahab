import React from "react";

export function TechnicalDataSheet() {
  return (
    <section className="w-full bg-paper-deep py-14 sm:py-16 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="kicker text-ink">The spec sheet</span>
            <h2 className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-0">
              What it is made of
            </h2>
          </div>
          <p className="font-body-md text-body-md text-ink-soft max-w-md m-0">
            Every part below is what actually arrives at your home — same
            wire, same frame, same bolts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Spec Card 1 */}
          <div className="card-flat p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-paper-deep flex items-center justify-center text-ink mb-4">
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                  cable
                </span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-ink-soft font-bold">
                Cable Composition
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-ink mt-1 mb-2">
                316 Marine Stainless Steel
              </h3>
              <p className="font-body-md text-body-md text-ink-soft">
                Twisted multi-strand wire core encased in a non-yellowing,
                UV-stabilized nylon-membrane casing. Resists coastal salt mist
                and urban photochemical smog.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/10 flex justify-between items-center font-label-sm text-label-sm text-ink">
              <span>Outer Diameter</span>
              <span className="font-bold">2.5mm / 3.0mm option</span>
            </div>
          </div>

          {/* Spec Card 2 */}
          <div className="card-flat p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-paper-deep flex items-center justify-center text-ink mb-4">
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                  weight
                </span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-ink-soft font-bold">
                Load Bearing
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-ink mt-1 mb-2">
                &gt; 400 kgf Tensile Capacity
              </h3>
              <p className="font-body-md text-body-md text-ink-soft">
                Exceeds Bureau of Indian Standards residential safety benchmarks.
                Withstands severe lateral impacts from toddlers, adults, and storm
                force gusts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/10 flex justify-between items-center font-label-sm text-label-sm text-ink">
              <span>Static Proof Test</span>
              <span className="font-bold">NABL Certified Lab</span>
            </div>
          </div>

          {/* Spec Card 3 */}
          <div className="card-flat p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-paper-deep flex items-center justify-center text-ink mb-4">
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                  view_column
                </span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-ink-soft font-bold">
                Structural Profiles
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-ink mt-1 mb-2">
                6063-T6 Extruded Aluminum
              </h3>
              <p className="font-body-md text-body-md text-ink-soft">
                Heavy-gauge architectural track with concealed snap-on aesthetic
                covers. Finished in AkzoNobel powder coatings matching UPVC and
                aluminum balcony frame tones.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/10 flex justify-between items-center font-label-sm text-label-sm text-ink">
              <span>Standard Finishes</span>
              <span className="font-bold">Charcoal, White, Bronze, Silver</span>
            </div>
          </div>

          {/* Spec Card 4 */}
          <div className="card-flat p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-paper-deep flex items-center justify-center text-ink mb-4">
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                  straighten
                </span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-ink-soft font-bold">
                Pitch Geometry
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-ink mt-1 mb-2">
                50mm &amp; 75mm Spacing
              </h3>
              <p className="font-body-md text-body-md text-ink-soft">
                50mm (2-inch) recommended for high-rise apartments with young
                children, cats, and birds. 75mm (3-inch) provides standard
                perimeter demarcation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/10 flex justify-between items-center font-label-sm text-label-sm text-ink">
              <span>Deflection Index</span>
              <span className="font-bold">&lt; 15mm under 120kg force</span>
            </div>
          </div>

          {/* Spec Card 5 */}
          <div className="card-flat p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-paper-deep flex items-center justify-center text-ink mb-4">
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                  construction
                </span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-ink-soft font-bold">
                Substrate Anchoring
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-ink mt-1 mb-2">
                Concrete Anchor Expansion
              </h3>
              <p className="font-body-md text-body-md text-ink-soft">
                Fastened using Hilti or Fischer stainless mechanical expansion
                bolts directly into structural RCC beams, lintels, and parapet
                slabs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/10 flex justify-between items-center font-label-sm text-label-sm text-ink">
              <span>Anchor Pitch</span>
              <span className="font-bold">Every 200mm c/c</span>
            </div>
          </div>

          {/* Spec Card 6 */}
          <div className="card-flat p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-paper-deep flex items-center justify-center text-ink mb-4">
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                  local_fire_department
                </span>
              </div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-ink-soft font-bold">
                Fire &amp; Life Safety
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold text-ink mt-1 mb-2">
                Rapid Manual Egress
              </h3>
              <p className="font-body-md text-body-md text-ink-soft">
                Unlike traditional welded iron grilles that trap occupants, wire
                cables can be cleanly severed within 15 seconds during an
                emergency using the provided shears.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/10 flex justify-between items-center font-label-sm text-label-sm text-ink">
              <span>Complimentary</span>
              <span className="font-bold">
                Wire Cutter Kit Included
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

