// File: src/components/product/common/UseCasePageView.tsx
// Shared layout for the /invisible-grills-for-<building> pages.
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ProductHeroSection } from "./ProductHeroSection";
import { ProductOverviewSection } from "./ProductOverviewSection";
import { ProductBenefitsSection } from "./ProductBenefitsSection";
import { ProductTrustPillars } from "./ProductTrustPillars";
import { ProductApplicationsSection } from "./ProductApplicationsSection";
import { ProductStructuredData } from "./ProductStructuredData";
import { USE_CASE_PARENT, type UseCasePageConfig } from "@/lib/use-case-pages";

export function buildUseCaseMetadata(config: UseCasePageConfig): Metadata {
  return {
    title: config.metadata.title,
    description: config.metadata.description,
    keywords: config.metadata.keywords,
    alternates: {
      canonical: config.metadata.canonical,
    },
    openGraph: {
      title: config.metadata.title,
      description: config.metadata.description,
      url: config.metadata.canonical,
      siteName: "Solution Sahab",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: config.metadata.ogImage,
          width: 1200,
          height: 630,
          alt: `${config.hero.productName} by Solution Sahab`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.metadata.title,
      description: config.metadata.description,
      images: [config.metadata.ogImage],
    },
  };
}

export function UseCasePageView({ config }: { config: UseCasePageConfig }) {
  return (
    <>
      <ProductStructuredData
        productName={config.structuredData.productName}
        serviceName="Invisible Grills"
        description={config.structuredData.description}
        image={config.structuredData.image}
        material={config.structuredData.material}
        slug={config.slug}
        faqs={config.faqs}
        parentCrumb={USE_CASE_PARENT}
      />
      <Header />
      <main id="main-content" className="w-full pt-[92px] sm:pt-[116px] bg-white min-h-screen">
        <ProductHeroSection {...config.hero} />
        <ProductOverviewSection {...config.overview} />
        <ProductBenefitsSection {...config.benefits} />
        {config.trustPillars && <ProductTrustPillars {...config.trustPillars} />}
        <ProductApplicationsSection {...config.applications} />
        <FaqSection
          items={config.faqs}
          title="Common Questions"
          description="Clear answers on safety, evacuation, installation and warranty across Delhi NCR."
        />
        <BookingSection
          leadSource={config.leadSource}
          title={config.bookingTitle}
          description={config.bookingDescription}
        />
      </main>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
