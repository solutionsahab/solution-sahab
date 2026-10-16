// File: src/components/product/common/ProductTechnicalSpecs.tsx
import React from "react";

export interface TechSpecItem {
  label: string;
  val: string;
}

export interface TechSpecCallout {
  title: string;
  text: string;
}

export interface ProductTechnicalSpecsProps {
  title?: string;
  subtitle?: string;
  callout?: TechSpecCallout;
  specs?: TechSpecItem[];
}

export function ProductTechnicalSpecs({
  title = "Technical Specification",
  subtitle = "Every component used in our installations is engineered to withstand extreme high-rise wind loads, rain, and intense summer sun.",
  callout,
  specs,
}: ProductTechnicalSpecsProps) {
  return (
    <section className="w-full bg-white py-14 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Heading & Context (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-2xl sm:text-4xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-4">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-body m-0 mb-6">
              {subtitle}
            </p>

            {callout && (
              <div className="border border-blue-200 bg-blue-50/60 p-5 w-full">
                <span className="text-xs font-bold text-blue-900 block mb-1">
                  {callout.title}
                </span>
                <p className="text-xs text-neutral-700 font-body leading-relaxed m-0">
                  {callout.text}
                </p>
              </div>
            )}
          </div>
          {specs &&
            < div className="lg:col-span-7">
              <div className="border border-neutral-200 divide-y divide-neutral-200 bg-neutral-50/40">
                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-1 sm:grid-cols-12 py-3 px-4 sm:px-5 gap-1 sm:gap-4 text-sm items-baseline"
                  >
                    <div className="sm:col-span-5 text-neutral-500 font-medium">
                      {s.label}
                    </div>
                    <div className="sm:col-span-7 font-gilroy font-bold text-neutral-900">
                      {s.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>}

        </div>
      </div>
    </section >
  );
}
