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
    src: "/images/certificates/iso-9001-certificate.jpg",
  },
  {
    title: "NABL Tensile Load Test Report",
    alt: "Solution Sahab Wire Tensile Strength Test Report",
    src: "/images/certificates/nabl-tensile-test-report.jpg",
  },
  {
    title: "RWA Society Safety Compliance",
    alt: "Solution Sahab High-Rise Balcony Safety Compliance Certificate",
    src: "/images/certificates/metallurgy-compliance-certificate.jpg",
  },
];

export function ProductTrustPillars({
  title = "Why Choose Solution Sahab?",
  subtitle = "At Solution Sahab, we take pride in providing certified, high-grade architectural installations for residential and commercial spaces across Delhi NCR.",
  pillars,
  showCertificates = true,
}: ProductTrustPillarsProps) {
  return (
    <section className="w-full bg-neutral-50/70 py-10 sm:py-12 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-6">
          <h2 className="text-2xl sm:text-3xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0">
            {subtitle}
          </p>
        </div>

        {/* 6 Feature Cards */}
        {pillars && pillars.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-neutral-200 p-4 sm:p-5 flex flex-col justify-start"
              >
                <h3 className="text-base font-gilroy font-bold text-neutral-950 mb-1">
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
          <div className="border border-neutral-200 bg-white p-4 sm:p-6">
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-gilroy font-bold text-neutral-950 m-0">
                Verified Laboratory Testing &amp; ISO-9001:2015 Approved
              </h3>
            </div>

            {/* Phones swipe through the certificates; wider screens show all 3 */}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {DEFAULT_CERTIFICATES.map((cert) => (
                <div key={cert.title} className="shrink-0 snap-start w-[60%] sm:w-auto border border-neutral-200 bg-neutral-50 p-3">
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
