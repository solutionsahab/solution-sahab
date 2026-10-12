import React from "react";
import { CONTACT_INFO } from "@/const";

export function FloatingWhatsApp() {
  return (
    <aside
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3"
      aria-label="Direct WhatsApp Contact"
    >
      <a
        className="flex items-center gap-2.5 sm:gap-3 bg-primary text-on-primary p-3 sm:px-4 sm:py-3 rounded-full shadow-[0_8px_24px_rgba(0,96,70,0.4)] hover:bg-primary-container transition-all group focus:outline-none focus:ring-2 focus:ring-emerald-400"
        href={CONTACT_INFO.WHATSAPP_URL}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Chat directly with Solution Sahab on WhatsApp"
      >
        <span className="relative flex h-3 w-3" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-fixed"></span>
        </span>
        <span className="hidden sm:inline font-label-md text-label-md uppercase tracking-wider font-bold">
          Chat on WhatsApp
        </span>
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            chat
          </span>
        </div>
      </a>
    </aside>
  );
}
