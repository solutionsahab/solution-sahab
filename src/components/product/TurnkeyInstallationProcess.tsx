import React from "react";

export function TurnkeyInstallationProcess() {
  const steps = [
    {
      num: "01",
      icon: "distance",
      title: "Laser Survey & Inspection",
      description:
        "Engineers visit within 24-48 hours with digital Leica laser distance meters to measure beam levels, load substrates, and structural camber.",
      badge: "Day 1: Free inspection",
      circleBg: "bg-primary text-on-primary",
      iconColor: "text-primary",
    },
    {
      num: "02",
      icon: "precision_manufacturing",
      title: "In-House Precision Cutting",
      description:
        "Architectural aluminum tracking profiles are CNC-cut and pre-slotted at our Nilothi manufacturing facility, eliminating noisy cutting on your site.",
      badge: "Day 2: Factory Pre-Assembly",
      circleBg: "bg-secondary text-on-secondary",
      iconColor: "text-secondary",
    },
    {
      num: "03",
      icon: "compress",
      title: "Calibrated Cable Tensioning",
      description:
        "Profiles are anchored with Hilti concrete bolts. 316-grade wires are interlaced and tightened using specialized torque tensioners to 110Nm load.",
      badge: "Day 3: Clean On-Site Mount",
      circleBg: "bg-primary text-on-primary",
      iconColor: "text-primary",
    },
    {
      num: "04",
      icon: "verified_user",
      title: "Load Testing & Warranty",
      description:
        "Technicians perform manual lateral pull-tests, hand over emergency wire cutting shears, and issue the signed 10-Year Anti-Rust Warranty card.",
      badge: "Instant Sign-Off & Certificate",
      circleBg: "bg-secondary text-on-secondary",
      iconColor: "text-secondary",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-20 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="kicker text-ink">How fitting day goes</span>
          <h2 className="font-display-serif text-3xl sm:text-4xl text-ink mt-3 mb-3">
            Measured, cut, tensioned, signed off
          </h2>
          <p className="font-body-lg text-body-md sm:text-body-lg text-ink-soft m-0">
            Our own technicians do all four stages. No outside labour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="card-flat p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display-serif text-3xl text-ink">
                    {step.num}
                  </span>
                  <span
                    className="material-symbols-outlined text-[28px] text-ink-soft"
                    aria-hidden="true"
                  >
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-ink-soft leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-3 font-label-sm text-label-sm font-bold uppercase tracking-wider text-ink-soft border-t border-ink/10">
                {step.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
