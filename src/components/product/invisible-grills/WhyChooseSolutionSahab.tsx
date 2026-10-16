// File: src/components/product/WhyChooseSolutionSahab.tsx
import React from "react";
import Image from "next/image";

export function WhyChooseSolutionSahab() {
  const points = [
    {
      title: "Superior Material Quality",
      desc: "We exclusively use genuine AISI 316 marine-grade stainless steel cables and heavy-gauge 6063-T6 aluminum extrusion tracks that conform to international tensile benchmarks.",
    },
    {
      title: "Certified & Lab Tested",
      desc: "Our cables and structural fixtures are certified for tensile strength, breaking load, and corrosion resistance by leading ISO-9001:2015 approved testing laboratories.",
    },
    {
      title: "In-House Installation Team",
      desc: "Zero outsourced or daily-wage labour. All installations are performed by our own trained, background-verified technicians using dust-controlled drilling tools.",
    },
    {
      title: "Tailor-Made Customization",
      desc: "Every track is CNC-cut and powder-coated to your balcony's exact dimensions, with frame finishes custom matched to your UPVC or aluminum window frames.",
    },
    {
      title: "5-Year Warranty",
      desc: "Direct manufacturer warranty card issued upon handover. Full coverage against wire rusting, cable slackening, and structural defect.",
    },
    {
      title: "10,000+ Happy Homes Across Delhi NCR",
      desc: "Trusted across Gurgaon, Noida, Greater Noida, and Delhi with proven 5-star customer ratings and same-week installation availability.",
    },
  ];

  return (
    <section className="w-full bg-neutral-50/70 py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-3">
            Why Choose Solution Sahab for Invisible Grill?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0">
            At Solution Sahab, we take pride in providing certified, high-grade invisible grill installations for residential and commercial spaces across Delhi NCR.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {points.map((p) => (
            <div key={p.title} className="bg-white border border-neutral-200 p-6 flex flex-col justify-start">
              <h3 className="text-base sm:text-lg font-gilroy font-bold text-neutral-950 mb-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-body m-0">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Real Certification Proof Cards */}
        <div className="border border-neutral-200 bg-white p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold block mb-1">
              OFFICIAL CERTIFICATIONS &amp; TEST REPORTS
            </span>
            <h3 className="text-lg sm:text-xl font-gilroy font-bold text-neutral-950 m-0">
              Verified Laboratory Testing &amp; ISO-9001:2015 Approved
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="border border-neutral-200 bg-neutral-50 p-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200 border border-neutral-200 mb-2">
                <Image
                  alt="Solution Sahab ISO-9001:2015 Quality Certification"
                  className="w-full h-full object-contain"
                  src="https://assets.zyrosite.com/A3QrolLwe7UBnQrp/iso-certifatee-_page-0001-YrDqnRELLPheB3e3.jpg"
                  width={400}
                  height={550}
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-gilroy font-bold text-neutral-900 block text-center">
                ISO-9001:2015 Quality Certificate
              </span>
            </div>

            <div className="border border-neutral-200 bg-neutral-50 p-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200 border border-neutral-200 mb-2">
                <Image
                  alt="Solution Sahab Wire Tensile Strength Test Report"
                  className="w-full h-full object-contain"
                  src="https://assets.zyrosite.com/A3QrolLwe7UBnQrp/241018032-1_page-0001-A1aBxyjzeOtR9NVn.jpg"
                  width={400}
                  height={550}
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-gilroy font-bold text-neutral-900 block text-center">
                NABL Tensile Load Test Report
              </span>
            </div>

            <div className="border border-neutral-200 bg-neutral-50 p-3 sm:col-span-2 md:col-span-1">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200 border border-neutral-200 mb-2">
                <Image
                  alt="Solution Sahab Material Metallurgy Certificate"
                  className="w-full h-full object-contain"
                  src="https://assets.zyrosite.com/A3QrolLwe7UBnQrp/e103028-3361_page-0001-m7V5vyZGENt797NV.jpg"
                  width={400}
                  height={550}
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-gilroy font-bold text-neutral-900 block text-center">
                AISI 316 Metallurgy Verification
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
