// File: src/components/product/common/ProductTrustPillars.tsx
import React from "react";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";

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
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal max-w-3xl mb-6 sm:mb-8">
          <h2 className="font-gilroy font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.08] m-0 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-body m-0">
            {subtitle}
          </p>
        </div>

        {pillars && pillars.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="reveal rounded-[1.5rem] bg-[#F3F6FB] p-6 flex flex-col justify-start transition-colors hover:bg-[#E8EEF7]"
              >
                <span className="material-symbols-outlined flex! h-10 w-10 items-center justify-center rounded-full bg-white text-[#1B4D8E] text-[20px]! mb-4 shadow-sm" aria-hidden="true">
                  verified
                </span>
                <h3 className="text-lg font-gilroy font-extrabold text-neutral-950 m-0 mb-1.5">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-body m-0">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Proof wall: the real certificates pinned on an indigo board */}
        {showCertificates && (
          <div className="rounded-[2rem] bg-[#0F1B33] p-6 sm:p-10 text-white">
            <h3 className="text-2xl sm:text-3xl font-gilroy font-extrabold m-0 mb-2">
              Verified laboratory testing &amp; ISO-9001:2015 approved
            </h3>
            <p className="m-0 mb-8 text-white/70">The actual certificates and test reports behind our cables and frames.</p>

            {/* Phones swipe through the certificates; wider screens show all 3 */}
            <Carousel label="Test certificates" className="flex gap-5 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {DEFAULT_CERTIFICATES.map((cert) => (
                <figure key={cert.title} className={`m-0 shrink-0 snap-start w-[64%] sm:w-auto rounded-2xl bg-white p-3 text-neutral-900 shadow-xl transition-transform duration-300 motion-safe:hover:-translate-y-1`}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-100 mb-3">
                    <Image
                      alt={cert.alt}
                      className="w-full h-full object-contain"
                      src={cert.src}
                      width={400}
                      height={550}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="text-sm font-semibold text-center pb-1">
                    {cert.title}
                  </figcaption>
                </figure>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}
