// File: src/components/product/pleated-mesh/WhyChooseSolutionSahabMesh.tsx
import React from "react";
import Image from "next/image";

export function WhyChooseSolutionSahabMesh() {
  const points = [
    {
      title: "Jindal Certified Aluminum Extrusions",
      desc: "We exclusively fabricate frames using high-grade Jindal T6 6063 architectural aluminum profiles that resist bending, impact, and outdoor oxidation.",
    },
    {
      title: "German Kevlar Cord Durability",
      desc: "Our internal glide mechanism utilizes ultra-high-tensile Kevlar cords, completely eliminating cord breakage—the most common failure in cheap local screens.",
    },
    {
      title: "Custom CNC Millimetre Fabrication",
      desc: "Every mesh unit is CNC-cut and assembled at our Nilothi manufacturing plant to match your doors and windows with airtight insect seals.",
    },
    {
      title: "In-House Installation Specialists",
      desc: "Zero outsourced carpenters. Every installation is handled by full-time, background-verified Solution Sahab technicians using clean, dust-controlled tools.",
    },
    {
      title: "5-Year Warranty",
      desc: "Official manufacturer warranty card issued upon handover covering frame structure, guide cord tension, and smooth mechanical retraction.",
    },
    {
      title: "10,000+ Happy Homes Across Delhi NCR",
      desc: "Trusted by thousands of families across Gurgaon, Noida, Greater Noida, and Delhi with proven 5-star customer ratings and prompt after-sales service.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-3">
            Why Choose Solution Sahab for Pleated Mesh?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0">
            At Solution Sahab, we engineer mosquito mesh systems built specifically for Delhi NCR's intense heat, dust storms, and monsoon humidity.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-neutral-50/60 border border-neutral-200 p-6 flex flex-col justify-start"
            >
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
        <div className="border border-neutral-300 bg-white p-6 sm:p-8">
          <div className="max-w-xl mb-6">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
              Quality Assurance &amp; Standards
            </span>
            <h3 className="text-lg sm:text-xl font-gilroy font-extrabold text-neutral-950 m-0">
              Verified Testing &amp; ISO Certification
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
                  alt="Solution Sahab Material Testing Lab Report"
                  className="w-full h-full object-contain"
                  src="https://assets.zyrosite.com/A3QrolLwe7UBnQrp/241018032-1_page-0001-A1aBxyjzeOtR9NVn.jpg"
                  width={400}
                  height={550}
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-gilroy font-bold text-neutral-900 block text-center">
                NABL Accredited Test Report
              </span>
            </div>

            <div className="border border-neutral-200 bg-neutral-50 p-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200 border border-neutral-200 mb-2">
                <Image
                  alt="Solution Sahab Architectural Metallurgy Quality Verification"
                  className="w-full h-full object-contain"
                  src="https://assets.zyrosite.com/A3QrolLwe7UBnQrp/241018032-2_page-0001-m2Wk31z310Fw3LqV.jpg"
                  width={400}
                  height={550}
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-gilroy font-bold text-neutral-900 block text-center">
                Architectural Alloy Inspection
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
