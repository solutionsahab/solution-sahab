// File: src/components/product/ProductCtaBanner.tsx
import React from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/const";

export function ProductCtaBanner() {
  return (
    <section className="w-full bg-blue-600 text-white py-14 sm:py-20 border-t border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-200 block mb-2 font-semibold">
              FAST SAME-WEEK TURNAROUND
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-white tracking-tight m-0 mb-4 leading-tight">
              Ready to Secure Your Balcony Without Blocking the View?
            </h2>
            <p className="text-sm sm:text-base text-blue-100 font-body leading-relaxed m-0">
              Laser measurement across Delhi, Gurgaon, and Noida with actual sample wire cables. Direct factory pricing with 5-year guarantee.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <Button
              href="#book-visit"
              variant="white"
              size="md"
              icon="calendar_month"
            >
              Book Site Visit
            </Button>
            <Button
              href={CONTACT_INFO.WHATSAPP_URL}
              variant="whatsapp"
              size="md"
              icon="chat"
            >
              WhatsApp Estimate
            </Button>
            <Button
              href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
              variant="outline"
              size="md"
              className="text-white border-white hover:bg-white/10"
              icon="call"
            >
              {CONTACT_INFO.PHONE_PRIMARY}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
