// File: src/app/page.tsx
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { AnatomySection } from "@/components/sections/AnatomySection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { BeforeAfterGrill } from "@/components/illustrations/BeforeAfterGrill";
import { NcrInstallMap } from "@/components/illustrations/NcrInstallMap";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProductCatalogSection } from "@/components/sections/ProductCatalogSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectGallerySection } from "@/components/sections/ProjectGallerySection";
import { BookingSection } from "@/components/sections/BookingSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      {/* Fixed Header & Announcement Bar */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="w-full pt-[87px] sm:pt-[108px] bg-white">
        <div className="flex flex-col w-full">
          {/* 1. Hero with areas strip */}
          <HeroSection />

          {/* Brand promise with real install photos */}
          <IntroSection />

          {/* 2. Product catalog: what we do */}
          <ProductCatalogSection />

          {/* Drag to swap a drawn iron grill for the real invisible-grill photo */}
          <FeatureSection
            id="compare"
            layout="stack"
            title={<>Same balcony. <strong className="font-extrabold">No cage.</strong></>}
            text="Drag the handle to swap a traditional iron grill for invisible grill cables, on a real balcony we fitted."
          >
            <BeforeAfterGrill className="mx-auto max-w-5xl" />
          </FeatureSection>

          {/* What the cable is made of, as a callout drawing */}
          <AnatomySection />

          {/* 3. Who we fit for: is it for me */}
          <AudienceSection />

          {/* 4. Recent work: proof */}
          <ProjectGallerySection />

          {/* Real install stories on a drawn NCR map: each pin opens its blog post */}
          <FeatureSection
            id="install-map"
            layout="split"
            tone="tint"
            title={<>Installed <strong className="font-extrabold">across Delhi NCR</strong></>}
            text="From Paschim Vihar to Sohna Road, tap a pin to read the story of that installation."
          >
            <NcrInstallMap />
          </FeatureSection>

          {/* 5. Customer video reviews: trust */}
          <TestimonialsSection />

          {/* 6. How it works: low effort */}
          <ProcessSection />

          {/* 7. FAQs: objections, right before the ask */}
          <FaqSection />

          {/* 8. Booking form */}
          <BookingSection />


        </div>
      </main>

      {/* Sticky Quick Contact Trigger */}
      <FloatingWhatsApp />

      {/* Complete Footer */}
      <Footer />
    </>
  );
}
