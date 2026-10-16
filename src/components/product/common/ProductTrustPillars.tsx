// File: src/components/product/common/ProductTrustPillars.tsx
import React from "react";
import Image from "next/image";

export interface TrustPillarItem {
  title: string;
  desc: string;
}

export interface ProductTrustPillarsProps {
  title?: string;
  subtitle?: string;
  pillars?: TrustPillarItem[];
  showCertificates?: boolean;
}

const DEFAULT_CERTIFICATES = [
  {
    title: "ISO-9001:2015 Quality Certificate",
    alt: "Solution Sahab ISO-9001:2015 Quality Certification",
    src: "https://assets.zyrosite.com/A3QrolLwe7UBnQrp/iso-certifatee-_page-0001-YrDqnRELLPheB3e3.jpg",
  },
  {
    title: "NABL Tensile Load Test Report",
    alt: "Solution Sahab Wire Tensile Strength Test Report",
    src: "https://assets.zyrosite.com/A3QrolLwe7UBnQrp/241018032-1_page-0001-A1aBxyjzeOtR9NVn.jpg",
  },
  {
    title: "RWA Society Safety Compliance",
    alt: "Solution Sahab High-Rise Balcony Safety Compliance Certificate",
    src: "https://assets.zyrosite.com/A3QrolLwe7UBnQrp/241018032-2_page-0001-ALpBr61W2lhwVn6O.jpg",
  },
];

export function ProductTrustPillars({
  title = "Why Choose Solution Sahab?",
  subtitle = "At Solution Sahab, we take pride in providing certified, high-grade architectural installations for residential and commercial spaces across Delhi NCR.",
  pillars,
  showCertificates = true,
}: ProductTrustPillarsProps) {
  return (
    <section className="w-full bg-neutral-50/70 py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-3">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0">
            {subtitle}
          </p>
        </div>

        {/* 6 Feature Cards */}
        {pillars && pillars.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-neutral-200 p-6 flex flex-col justify-start"
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
        )}

        {/* Real Certification Proof Cards */}
        {showCertificates && (
          <div className="border border-neutral-200 bg-white p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-gilroy font-bold text-neutral-950 m-0">
                Verified Laboratory Testing &amp; ISO-9001:2015 Approved
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {DEFAULT_CERTIFICATES.map((cert) => (
                <div key={cert.title} className="border border-neutral-200 bg-neutral-50 p-3">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200 border border-neutral-200 mb-2">
                    <Image
                      alt={cert.alt}
                      className="w-full h-full object-contain"
                      src={cert.src}
                      width={400}
                      height={550}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-gilroy font-bold text-neutral-900 block text-center">
                    {cert.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
