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
      <main className="w-full pt-[96px] sm:pt-[116px] bg-white">
        <div className="flex flex-col w-full">
          {/* 1. Hero with areas strip */}
          <HeroSection />

          {/* 2. Customer video reviews */}
          <TestimonialsSection />

          {/* 3. Product catalog */}
          <ProductCatalogSection />

          {/* 4. Who we fit for */}
          <AudienceSection />

          {/* 5. Process ink band with warranty */}
          <ProcessSection />

          {/* 6. Recent work strip */}
          <ProjectGallerySection />

          {/* 7. FAQs */}
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
