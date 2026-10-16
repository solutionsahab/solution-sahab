// File: src/components/product/ProductCostEstimator.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/const";

export function ProductCostEstimator() {
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(5);
  const [spacing, setSpacing] = useState<"2inch" | "3inch">("2inch");
  const [wireGauge, setWireGauge] = useState<"2.5mm" | "3.0mm">("2.5mm");

  const area = Math.max(1, width * height);

  // Ballpark calculation (indicative market benchmark for Delhi NCR)
  const baseRate = spacing === "2inch" ? 175 : 140;
  const gaugeAddon = wireGauge === "3.0mm" ? 20 : 0;
  const ratePerSqFt = baseRate + gaugeAddon;

  const minEstimatedTotal = Math.round((ratePerSqFt - 15) * area);
  const maxEstimatedTotal = Math.round((ratePerSqFt + 15) * area);

  const formattedWhatsAppText = encodeURIComponent(
    `Hi Solution Sahab, I checked the Invisible Grill Cost Estimator for my balcony (${width}ft x ${height}ft, ${area} sq.ft, ${spacing === "2inch" ? '2" Child-Safe' : '3" Standard'} spacing, ${wireGauge} SS 316). Estimated quote: ₹${minEstimatedTotal.toLocaleString("en-IN")} - ₹${maxEstimatedTotal.toLocaleString("en-IN")}. Please arrange a site survey.`
  );

  const dynamicWhatsAppUrl = `https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${formattedWhatsAppText}`;

  return (
    <section id="cost-estimator" className="w-full bg-neutral-50/60 py-14 sm:py-20 border-b border-neutral-300 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 border-b border-neutral-300 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-semibold">
              TRANSPARENT PRICING &amp; ESTIMATOR
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0">
              Instant Balcony Cost Estimator
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md m-0 leading-relaxed font-body">
            No hidden costs. Calculate your estimated project investment based on actual square footage, wire pitch, and structural gauge.
          </p>
        </div>

        {/* 2-Column Calculator + Result Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x border-b border-neutral-300 bg-white">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold block mb-1">
                Step 1: Balcony Dimensions (Feet)
              </span>
              <p className="text-xs text-neutral-500 m-0 mb-4 font-body">
                Enter your approximate opening width and height in feet.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="width-input" className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-bold">
                      Width: {width} Feet
                    </label>
                  </div>
                  <input
                    id="width-input"
                    type="range"
                    min="3"
                    max="40"
                    step="1"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer h-2 bg-neutral-200 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-neutral-400 mt-1">
                    <span>3 ft</span>
                    <span>20 ft</span>
                    <span>40 ft</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="height-input" className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-bold">
                      Height: {height} Feet
                    </label>
                  </div>
                  <input
                    id="height-input"
                    type="range"
                    min="2"
                    max="14"
                    step="1"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer h-2 bg-neutral-200 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-neutral-400 mt-1">
                    <span>2 ft (Parapet)</span>
                    <span>8 ft (Standard)</span>
                    <span>14 ft (High)</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold block mb-1">
                Step 2: Cable Spacing (Pitch)
              </span>
              <p className="text-xs text-neutral-500 m-0 mb-3 font-body">
                Select your safety requirement. 2-inch gap is mandatory for high-rise homes with toddlers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSpacing("2inch")}
                  className={`p-3.5 text-left border transition-all ${
                    spacing === "2inch"
                      ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600"
                      : "border-neutral-200 hover:border-neutral-400 bg-neutral-50/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-gilroy font-bold text-sm text-neutral-950">2" (50mm) Child-Safe</span>
                    <span className="text-[10px] font-mono uppercase bg-blue-600 text-white px-1.5 py-0.5 font-bold">
                      Recommended
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 m-0 font-body">
                    Prevents toddlers and pets from squeezing through. Approved by RWAs.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setSpacing("3inch")}
                  className={`p-3.5 text-left border transition-all ${
                    spacing === "3inch"
                      ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600"
                      : "border-neutral-200 hover:border-neutral-400 bg-neutral-50/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-gilroy font-bold text-sm text-neutral-950">3" (75mm) Standard</span>
                    <span className="text-[10px] font-mono uppercase text-neutral-500">Adult Only</span>
                  </div>
                  <p className="text-xs text-neutral-600 m-0 font-body">
                    Economical boundary safety for low-rise homes, villas, and terraces.
                  </p>
                </button>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold block mb-1">
                Step 3: Cable Thickness
              </span>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setWireGauge("2.5mm")}
                  className={`p-3 text-left border transition-all ${
                    wireGauge === "2.5mm"
                      ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600"
                      : "border-neutral-200 hover:border-neutral-400 bg-neutral-50/50"
                  }`}
                >
                  <span className="block font-gilroy font-bold text-sm text-neutral-950">2.5mm AISI 316</span>
                  <span className="text-xs text-neutral-500 font-body">Standard residential specification</span>
                </button>

                <button
                  type="button"
                  onClick={() => setWireGauge("3.0mm")}
                  className={`p-3 text-left border transition-all ${
                    wireGauge === "3.0mm"
                      ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600"
                      : "border-neutral-200 hover:border-neutral-400 bg-neutral-50/50"
                  }`}
                >
                  <span className="block font-gilroy font-bold text-sm text-neutral-950">3.0mm AISI 316</span>
                  <span className="text-xs text-neutral-500 font-body">Heavy-gauge maximum tensile load</span>
                </button>
              </div>
            </div>
          </div>

          {/* Result & Lead Action Column (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-neutral-50/70 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                ESTIMATED INVESTMENT RANGE
              </span>

              {/* Big Price Display */}
              <div className="mb-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-gilroy font-extrabold text-blue-700 tracking-tight">
                  ₹{minEstimatedTotal.toLocaleString("en-IN")} – ₹{maxEstimatedTotal.toLocaleString("en-IN")}
                </div>
                <div className="text-xs font-mono text-neutral-500 mt-1 uppercase tracking-wider">
                  Total Area: <strong className="text-neutral-900">{area} sq.ft</strong> ({width}ft × {height}ft) · ~₹{ratePerSqFt}/sq.ft
                </div>
              </div>

              {/* What is included in this estimate */}
              <div className="border-t border-b border-neutral-200 py-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-bold block mb-2">
                  All-Inclusive Scope:
                </span>
                <ul className="space-y-1.5 text-xs text-neutral-600 font-body m-0 p-0 list-none">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>100% Genuine AISI 316 Marine Grade SS Cables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>6063-T6 Structural Aluminum Profiles &amp; Covers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Hilti / Fischer Concrete Expansion Anchoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Turnkey Laser Measurement &amp; Professional Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>5-Year Warranty</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                href="#book-visit"
                variant="primary"
                size="lg"
                fullWidth
                icon="calendar_month"
              >
                Book Site Measurement to Lock Price
              </Button>
              <Button
                href={dynamicWhatsAppUrl}
                variant="whatsapp"
                size="lg"
                fullWidth
                icon="chat"
              >
                Send this Estimate on WhatsApp
              </Button>
              <p className="text-[11px] font-mono text-neutral-400 text-center uppercase tracking-wider m-0 mt-1">
                Zero obligation • Exact laser quotation provided on visit
              </p>
            </div>
          </div>
        </div>

        {/* 3-Tier Price Matrix Table */}
        <div className="pt-14 sm:pt-20">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              TRANSPARENT TARIFF MATRIX
            </span>
            <h3 className="text-xl sm:text-3xl font-gilroy font-extrabold text-neutral-950 mt-1 mb-2">
              Price per Square Foot by Application Tier
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border border-neutral-300 bg-white">
            <div className="p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold block mb-1">
                  TIER 01 · STANDARD
                </span>
                <h4 className="text-xl font-gilroy font-bold text-neutral-950 mb-2">
                  3" Pitch (75mm Spacing)
                </h4>
                <div className="text-2xl font-gilroy font-extrabold text-neutral-950 mb-3">
                  ₹130 – ₹155 <span className="text-xs font-normal text-neutral-500 font-body">/ sq. ft.</span>
                </div>
                <p className="text-xs text-neutral-600 font-body leading-relaxed mb-4">
                  Best for low-rise homes, boundary walls, and terraces where child-safety gaps are not strictly required.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-600 border-t border-neutral-200 pt-3 m-0 p-0 list-none">
                <li>• 2.5mm SS 316 Marine Cable</li>
                <li>• 75mm standard demarcation</li>
                <li>• 5-Year Anti-Rust Warranty</li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50/30 flex flex-col justify-between border-t-2 md:border-t-0 md:border-l md:border-r border-blue-600">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                    TIER 02 · HIGH-RISE
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-blue-600 text-white px-2 py-0.5 font-bold">
                    Most Popular
                  </span>
                </div>
                <h4 className="text-xl font-gilroy font-bold text-neutral-950 mb-2">
                  2" Pitch (50mm Child-Safe)
                </h4>
                <div className="text-2xl font-gilroy font-extrabold text-blue-700 mb-3">
                  ₹160 – ₹190 <span className="text-xs font-normal text-neutral-500 font-body">/ sq. ft.</span>
                </div>
                <p className="text-xs text-neutral-600 font-body leading-relaxed mb-4">
                  Standard requirement for apartments above 3rd floor. Child, pet, and bird proof with RWA certification.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-700 border-t border-blue-200 pt-3 m-0 p-0 list-none font-medium">
                <li>• 2.5mm / 3.0mm SS 316 Cable</li>
                <li>• 50mm strict child-safe pitch</li>
                <li>• 5-Year Full Guarantee</li>
              </ul>
            </div>

            <div className="p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold block mb-1">
                  TIER 03 · STRUCTURAL
                </span>
                <h4 className="text-xl font-gilroy font-bold text-neutral-950 mb-2">
                  Heavy-Duty Commercial
                </h4>
                <div className="text-2xl font-gilroy font-extrabold text-neutral-950 mb-3">
                  ₹200 – ₹240 <span className="text-xs font-normal text-neutral-500 font-body">/ sq. ft.</span>
                </div>
                <p className="text-xs text-neutral-600 font-body leading-relaxed mb-4">
                  Engineered for double-height balconies, atrium voids, rooftop restaurants, and high wind-zone towers.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-600 border-t border-neutral-200 pt-3 m-0 p-0 list-none">
                <li>• 3.0mm Heavy-Tensile SS 316</li>
                <li>• Structural reinforced MS/Alloy bracing</li>
                <li>• Custom architectural RAL powder-coat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
