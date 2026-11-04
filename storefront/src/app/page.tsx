// File: src/app/page.tsx
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { HeroSection } from "@/components/sections/HeroSection";
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

          {/* 2. Product catalog: what we do */}
          <ProductCatalogSection />

          {/* 3. Who we fit for: is it for me */}
          <AudienceSection />

          {/* 4. Recent work: proof */}
          <ProjectGallerySection />

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
