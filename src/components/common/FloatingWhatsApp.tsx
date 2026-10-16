// File: src/components/common/FloatingWhatsApp.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT_INFO } from "@/const";

export function FloatingWhatsApp() {
  return (
    <aside
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-3 pointer-events-auto"
      aria-label="WhatsApp quick contact trigger"
    >
      <a
        href={CONTACT_INFO.WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Solution Sahab installer"
        className=""
      >

        <FaWhatsapp className="h-12 w-12 hover- p-1 shrink-0 text-white bg-green-400 rounded-full hover:scale-105" aria-hidden="true" />
      </a>
    </aside>
  );
}