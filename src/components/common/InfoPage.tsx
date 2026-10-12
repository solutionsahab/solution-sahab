// File: src/components/common/InfoPage.tsx
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";

interface InfoPageProps {
  children: React.ReactNode;
}

export function InfoPage({ children }: InfoPageProps) {
  return (
    <>
      <Header />
      <main className="w-full pt-[92px] sm:pt-[116px] bg-surface min-h-screen flex flex-col">
        {children}
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
