import React from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/const";

export function ProductCtaBanner() {
  return (
    <section className="w-full bg-white  py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-2xl border border-ink/15 bg-paper p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display-serif text-3xl text-ink m-0">
              Not sure which spacing you need?
            </h2>
            <p className="font-body-md text-body-md text-ink-soft leading-relaxed mt-3 mb-0">
              Tell us the opening and who uses the balcony — we will recommend
              2-inch or 3-inch spacing and quote it on the visit.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
              variant="primary"
              size="md"
              icon="call"
            >
              {CONTACT_INFO.PHONE_PRIMARY}
            </Button>
            <Button
              href={CONTACT_INFO.WHATSAPP_URL}
              variant="whatsapp"
              size="md"
              icon="chat"
            >
              WhatsApp a Photo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
