// File: src/components/sections/ComparisonSection.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ComparisonRow {
  criterion: string;
  traditional: string;
  solutionSahab: string;
}

interface ProductComparison {
  index: string;
  shortName: string;
  title: string;
  traditionalLabel: string;
  solutionSahabLabel: string;
  rows: ComparisonRow[];
}

const PRODUCT_COMPARISONS: ProductComparison[] = [
  {
    index: "01",
    shortName: "Invisible Grills",
    title: "Invisible Safety Grills vs. Traditional Iron Grills",
    traditionalLabel: "Welded MS / Iron Bars",
    solutionSahabLabel: "Solution Sahab AISI 316 Cables",
    rows: [
      {
        criterion: "View & Daylight",
        traditional: "Thick bars block 40–60% of the balcony view and darken rooms.",
        solutionSahab: "2.5mm tensioned cables preserve 98% open sky visibility."
      },
      {
        criterion: "Rust & Maintenance",
        traditional: "Rusts in monsoon & smog; needs scraping and painting every 2 years.",
        solutionSahab: "Marine-grade AISI 316 stainless steel with protective nylon coating."
      },
      {
        criterion: "Fire Emergency Exit",
        traditional: "Permanently welded cage traps occupants during fire emergencies.",
        solutionSahab: "Cables can be cut in under 10 seconds with a safety wire cutter."
      },
      {
        criterion: "Child & Pet Safety",
        traditional: "Uneven welded bar gaps can let small pets or toddlers slip through.",
        solutionSahab: "400kg load-tested per cable with fixed 2-inch or 3-inch spacing."
      },
    ],
  },
  {
    index: "02",
    shortName: "Pleated Mesh",
    title: "Pleated Mosquito Mesh vs. Hinged / Roller Jali Doors",
    traditionalLabel: "Local Hinged or Spring Roller Mesh",
    solutionSahabLabel: "Solution Sahab Pleated Mesh System",
    rows: [
      {
        criterion: "Floor Track Height",
        traditional: "1.5-inch raised bottom frame causes tripping for kids and elders.",
        solutionSahab: "Ultra-low 3mm flat floor track—wheelchair, kid, and robot-vacuum safe.",
      },
      {
        criterion: "Operating Mechanism",
        traditional: "Hinged doors bang in the wind; spring rollers snap back violently.",
        solutionSahab: "Tensioned accordion cords glide smoothly and stop at any position.",
      },
      {
        criterion: "Space Saving",
        traditional: "Swing doors block balcony walking space and furniture placement.",
        solutionSahab: "Folds completely flat into a slim side cassette when not in use.",
      },
      {
        criterion: "Mesh Durability",
        traditional: "Thin fiberglass tears easily and sags within one season.",
        solutionSahab: "Waterproof, dust-repellent stiffened polyester pleated weave.",
      },
    ],
  },
  {
    index: "03",
    shortName: "Security Mesh",
    title: "Aluminum Security Mesh vs. Iron Grill Security Doors",
    traditionalLabel: "Heavy Iron Jali / MS Grill Doors",
    solutionSahabLabel: "Solution Sahab 6063-T6 Security Mesh",
    rows: [
      {
        criterion: "Intrusion Protection",
        traditional: "Thin mosquito wire can be sliced open with a pocket knife.",
        solutionSahab: "High-tensile structural alloy mesh resists knife cuts and pry-bars.",
      },
      {
        criterion: "Appearance",
        traditional: "Bulky prison-like iron bars ruin main entrance aesthetics.",
        solutionSahab: "Clean, minimalist architectural frame looks like a clear glass door.",
      },
      {
        criterion: "Locking Hardware",
        traditional: "Single latch or external padlock that corrodes over time.",
        solutionSahab: "Integrated multi-point architectural mortise locking system.",
      },
      {
        criterion: "Corrosion & Finish",
        traditional: "Welded joints rust and peel paint around humid door thresholds.",
        solutionSahab: "Factory powder-coated 6063-T6 aluminum alloy—never needs painting.",
      },
    ],
  },
  {
    index: "04",
    shortName: "Honeycomb Partitions",
    title: "Honeycomb Partitions vs. Fixed Glass / Wooden Dividers",
    traditionalLabel: "Fixed Carpentry or Curtains",
    solutionSahabLabel: "Solution Sahab Cellular Partition",
    rows: [
      {
        criterion: "Room Flexibility",
        traditional: "Fixed wooden/glass walls permanently shrink your living room.",
        solutionSahab: "Folds into just 10% of the opening width to merge rooms instantly.",
      },
      {
        criterion: "AC & Thermal Insulation",
        traditional: "Cloth curtains leak AC air; glass traps greenhouse heat.",
        solutionSahab: "Hexagonal internal air pockets trap cold air inside the AC zone.",
      },
      {
        criterion: "Floor & Wall Damage",
        traditional: "Requires heavy floor drilling, masonry, and days of carpentry dust.",
        solutionSahab: "Installed in hours with a slim guide track and zero floor damage.",
      },
      {
        criterion: "Acoustics & Privacy",
        traditional: "Blinds rattle in fan breeze and leave side gaps.",
        solutionSahab: "Edge-to-edge magnetic closure dampens room echo and gives 100% privacy.",
      },
    ],
  },
  {
    index: "05",
    shortName: "Weather Screens",
    title: "Motorized Zip-Screens vs. Local PVC / Bamboo Chick Blinds",
    traditionalLabel: "Rope-Pulled PVC / Bamboo Blinds",
    solutionSahabLabel: "Solution Sahab Motorized Zip-Screen",
    rows: [
      {
        criterion: "High-Wind Performance",
        traditional: "Flaps violently and tears during Delhi NCR dust storms (Andhi).",
        solutionSahab: "Locked into side zip-tracks; rated to withstand 70 km/h winds.",
      },
      {
        criterion: "Rain & Dust Sealing",
        traditional: "Wide side gaps let rain spray, pigeons, and smog dust enter ly.",
        solutionSahab: "360-degree sealed track blocks 95% of rain, dust, and harsh UV.",
      },
      {
        criterion: "Outside Visibility",
        traditional: "Opaque tarpaulin or bamboo blocks daylight and turns balconies dark.",
        solutionSahab: "Micro-perforated technical fabric keeps your outside view intact.",
      },
      {
        criterion: "Operation",
        traditional: "Tangled nylon ropes that rot in the sun and require manual tying.",
        solutionSahab: "One-touch remote control with motorized automatic stop limits.",
      },
    ],
  },
  {
    index: "06",
    shortName: "Skylights & Hangers",
    title: "Laminated Skylights & Pulley Hangers vs. Polycarbonate & Floor Stands",
    traditionalLabel: "Plastic Sheets & Folding Floor Racks",
    solutionSahabLabel: "Solution Sahab Glass & SS Pulley System",
    rows: [
      {
        criterion: "Balcony Floor Space",
        traditional: "Folding cloth stands block 60% of walking space on the balcony.",
        solutionSahab: "Ceiling-mounted pulley lifts wet clothes to the roof—100% clear floor.",
      },
      {
        criterion: "Skylight Durability",
        traditional: "Fiberglass & polycarbonate sheets turn yellow, crack, and sound loud in rain.",
        solutionSahab: "Laminated toughened safety glass stays crystal clear for decades.",
      },
      {
        criterion: "Load & Rust Capacity",
        traditional: "Thin pipe stands bend under heavy wet blankets and rust at joints.",
        solutionSahab: "6-rod stainless steel pipes with geared hand-crank lift heavy laundry.",
      },
      {
        criterion: "UV & Heat Control",
        traditional: "Plastic sheets trap extreme summer heat inside stairwells.",
        solutionSahab: "Double-layer PVB laminated glass filters UV and reduces heat gain.",
      },
    ],
  },
];

export function ComparisonSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = PRODUCT_COMPARISONS[activeTab];

  return (
    <section
      className="w-full py-16 sm:py-24 border-b border-neutral-300 scroll-mt-28"
      id="comparison-matrix"
      aria-labelledby="comparison-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Minimal Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-300">
          <div>
            <h2
              id="comparison-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-950 tracking-tight m-0"
            >
              Why Modern Homes Upgrade
            </h2>
          </div>

          <Link
            href="#quick-booking"
            className="inline-flex items-center justify-center gap-2 border border-neutral-950 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-mono uppercase tracking-wider px-5 py-3.5 transition-colors self-start md:self-auto shrink-0"
          >
            <span>Inspect Physical Samples at Home</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* 6-Product Selector Strip */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-l border-neutral-300"
          role="tablist"
          aria-label="Select product to compare"
        >
          {PRODUCT_COMPARISONS.map((item, idx) => {
            const isSelected = idx === activeTab;
            return (
              <button
                key={item.index}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(idx)}
                className={`p-4 text-left border-r border-b lg:border-b-0 border-neutral-300 transition-colors ${isSelected
                  ? "bg-neutral-950 text-white"
                  : "bg-gray-50 text-neutral-700 hover:bg-gray-100"
                  }`}
              >

                <span className="block text-xs sm:text-sm font-semibold mt-1 truncate">
                  {item.shortName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Product Comparison Title Bar */}
        <div className="py-6 border-b border-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="text-lg sm:text-2xl font-semibold text-neutral-950 m-0">
            {current.title}
          </h3>
        </div>

        {/* Desktop & Tablet Architectural Spec Table */}
        <div className="hidden md:block border-x border-b border-neutral-300">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-300">
                <th className="p-5 text-xs font-mono uppercase tracking-wider text-neutral-600 w-[22%] border-r border-neutral-300">
                  Parameter
                </th>
                <th className="p-5 text-xs font-mono uppercase tracking-wider text-neutral-600 w-[38%] border-r border-neutral-300">
                  {current.traditionalLabel}
                </th>
                <th className="p-5 text-xs font-mono uppercase tracking-wider text-neutral-950 w-[40%] bg-white">
                  {current.solutionSahabLabel}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-300">
              {current.rows.map((row) => (
                <tr key={row.criterion}>
                  <th className="p-5 text-sm font-semibold text-neutral-950 align-top border-r border-neutral-300 ">
                    {row.criterion}
                  </th>
                  <td className="p-5 text-sm text-neutral-600 align-top border-r border-neutral-300  leading-relaxed">
                    {row.traditional}
                  </td>
                  <td className="p-5 align-top bg-white">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-sm font-medium text-neutral-950 leading-relaxed">
                        {row.solutionSahab}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (< 768px): Clean Stacked Rows (No Rounded Shadow Cards) */}
        <div className="md:hidden divide-y divide-neutral-300 border-x border-b border-neutral-300">
          {current.rows.map((row) => (
            <div key={row.criterion} className="p-4 ">
              <div className="flex items-center justify-between gap-2 mb-3">
                <h4 className="text-sm font-semibold text-neutral-950 m-0">
                  {row.criterion}
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-2.5 text-xs">
                <div className="p-3 border border-neutral-300 bg-[#EFECE6]/60">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
                    {current.traditionalLabel}
                  </span>
                  <p className="text-neutral-600 m-0 leading-relaxed">
                    {row.traditional}
                  </p>
                </div>

                <div className="p-3 border border-neutral-900 bg-white">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-950 font-semibold mb-1">
                    {current.solutionSahabLabel}
                  </span>
                  <p className="text-neutral-950 font-medium m-0 leading-relaxed">
                    {row.solutionSahab}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}