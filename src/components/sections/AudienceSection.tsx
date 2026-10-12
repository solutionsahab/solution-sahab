import React from "react";
import Link from "next/link";

export function AudienceSection() {
  return (
    <section
      className="w-full py-14 sm:py-20 bg-white scroll-mt-28"
      id="audience-solutions"
      aria-labelledby="audience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mb-10">
          <span className="kicker text-primary">Who we fit for</span>
          <h2
            id="audience-heading"
            className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-3"
          >
            Homes, workplaces, and the architects between
          </h2>
          <p className="font-body-lg text-body-lg text-ink-soft m-0">
            Grills, mesh and screens fitted to the space — not the other way
            round.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Segment 1: Residential */}
          <div className="card-flat p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                  home
                </span>
              </div>
              <div className="font-caption-caps text-caption-caps text-primary uppercase font-bold tracking-wider">
                Apartments &amp; Villas
              </div>
              <h3 className="font-headline-md text-headline-md text-ink mt-1 mb-4">
                Residential Owners
              </h3>
              <p className="font-body-md text-body-md text-ink-soft mb-6">
                Child fall protection, pet security on high-floor balconies, and mosquito-free air without iron bars.
              </p>
              <ul className="space-y-3 font-body-md text-body-md text-ink">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0" aria-hidden="true">
                      done
                  </span>
                  <span>Child &amp; cat safe 2&quot; and 3&quot; wire spacing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0" aria-hidden="true">
                      done
                  </span>
                  <span>Unobstructed panoramic morning &amp; sunset views</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0" aria-hidden="true">
                      done
                  </span>
                  <span>Retractable pleated mosquito screening</span>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link
                className="text-primary font-label-md text-label-md font-bold flex items-center gap-1 hover:gap-2 transition-all"
                href="#quick-booking"
              >
                Protect Your Home
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Segment 2: Commercial & Hospitality */}
          <div className="card-flat p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                  domain
                </span>
              </div>
              <div className="font-caption-caps text-caption-caps text-secondary uppercase font-bold tracking-wider">
                Offices, Cafes &amp; Hotels
              </div>
              <h3 className="font-headline-md text-headline-md text-ink mt-1 mb-4">
                Commercial &amp; Hospitality
              </h3>
              <p className="font-body-md text-body-md text-ink-soft mb-6">
                Large span weather enclosure, dining terrace insect shielding, acoustic room partition systems, and visitor safety.
              </p>
              <ul className="space-y-3 font-body-md text-body-md text-ink">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0" aria-hidden="true">
                      done
                  </span>
                  <span>Acoustic honeycomb movable dividers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0" aria-hidden="true">
                      done
                  </span>
                   <span>Heavy-gauge aluminium security mesh</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0" aria-hidden="true">
                      done
                  </span>
                  <span>Minimalist patio &amp; terrace screens</span>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link
                className="text-secondary font-label-md text-label-md font-bold flex items-center gap-1 hover:gap-2 transition-all"
                href="#quick-booking"
              >
                Commercial Consultation
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Segment 3: Architects & Designers */}
          <div className="card-flat p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                  architecture
                </span>
              </div>
              <div className="font-caption-caps text-caption-caps text-primary uppercase font-bold tracking-wider">
                Design Partners
              </div>
              <h3 className="font-headline-md text-headline-md text-ink mt-1 mb-4">
                Architects &amp; Designers
              </h3>
              <p className="font-body-md text-body-md text-ink-soft mb-6">
                BIM/CAD cross-sections, custom RAL color powder coating, flush low-profile threshold channels, and fire-compliant safety wire.
              </p>
              <ul className="space-y-3 font-body-md text-body-md text-ink">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0" aria-hidden="true">
                      done
                  </span>
                  <span>Custom extrusion anodizing &amp; powder shades</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0" aria-hidden="true">
                      done
                  </span>
                  <span>Emergency quick-cut cable certification</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0" aria-hidden="true">
                      done
                  </span>
                  <span>Dedicated project coordinator for site surveys</span>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <a
                className="text-primary font-label-md text-label-md font-bold flex items-center gap-1 hover:gap-2 transition-all"
                href="tel:+919971143143"
              >
                Architect Spec Desk
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
