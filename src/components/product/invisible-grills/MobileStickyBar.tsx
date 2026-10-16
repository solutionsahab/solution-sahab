// File: src/components/product/MobileStickyBar.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/const";

export function MobileStickyBar() {
  return (
    <aside
      aria-label="Mobile quick action bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-300 px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center gap-2">
        <Button
          href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
          variant="outline"
          size="sm"
          fullWidth
          icon="call"
          className="text-xs py-2.5"
        >
          Call Engineer
        </Button>

        <Button
          href={CONTACT_INFO.WHATSAPP_URL}
          variant="whatsapp"
          size="sm"
          fullWidth
          icon="chat"
          className="text-xs py-2.5"
        >
          WhatsApp Quote
        </Button>
      </div>
    </aside>
  );
}
