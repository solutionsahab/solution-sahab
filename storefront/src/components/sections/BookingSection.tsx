// File: src/components/sections/BookingSection.tsx
"use client";

import React from "react";
import { useBookingForm } from "@/lib/state/booking-state";
import { CONTACT_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export interface BookingSectionProps {
  leadSource?: string;
  title?: string;
  description?: string;
  id?: string;
}

export function BookingSection({
  leadSource = "Homepage Consultation",
  title = "Schedule a Site Measurement",
  description = "Our technician visits with physical material swatches and samples, measures your doors, windows, or balconies with a precision laser meter, and quotes on the spot.",
  id = "quick-booking",
}: BookingSectionProps) {
  const {
    formData,
    status,
    errors,
    errorMessage,
    updateField,
    handleSubmit,
    resetForm,
  } = useBookingForm(leadSource);

  return (
    <section
      className="w-full py-16 sm:py-24 border-b border-neutral-300 scroll-mt-28"
      id={id}
      aria-labelledby="booking-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-neutral-300 bg-white">
          {/* Left 5 Columns: Direct Info & Instant Channels */}
         <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-3">
                {title}
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-body m-0 mb-6">
                {description}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500 font-sans">
              Serving Gurgaon · Noida · Greater Noida · Delhi · Faridabad · Ghaziabad
            </div>
          </div>

          {/* Right 7 Columns: Clean Architectural Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            {status === "success" ? (
              <div
                className="py-8"
                id="booking-success"
                role="alert"
              >
                <p className="text-xs font-gilroy font-extrabold uppercase tracking-widest text-[#1B4D8E] m-0 mb-2">
                  Request Confirmed
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-gilroy text-neutral-950 m-0">
                  Thank you, {formData.fullName || "Customer"}.
                </h3>
                <p className="text-sm sm:text-base text-neutral-950 mt-3 mb-0">
                  Mobile: {formData.phone}
                  <br />
                  Address: {formData.address}
                </p>
                <p className="text-sm sm:text-base text-neutral-600 mt-3 mb-8 max-w-md leading-relaxed">
                  Our Delhi NCR coordinator will contact you shortly to confirm your measurement schedule.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
                    icon="call"
                  >
                    Call {CONTACT_INFO.PHONE_PRIMARY}
                  </Button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-neutral-950 underline underline-offset-4 px-3 py-2 cursor-pointer"
                  >
                    Book Another Visit
                  </button>
                </div>
              </div>
            ) : (
              <form
                className="space-y-6"
                id="booking-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2"
                    >
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      className={`w-full h-12 px-4 bg-[#F7F6F2] border ${errors.fullName
                        ? "border-red-500 bg-red-50/20"
                        : "border-neutral-300 focus:border-neutral-950"
                        } text-neutral-950 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-xs mt-1.5 m-0">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone-number"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2"
                    >
                      Phone number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone-number"
                      type="tel"
                      inputMode="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className={`w-full h-12 px-4 bg-[#F7F6F2] border ${errors.phone
                        ? "border-red-500 bg-red-50/20"
                        : "border-neutral-300 focus:border-neutral-950"
                        } text-neutral-950 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1.5 m-0">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-address"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2"
                  >
                    Address <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="booking-address"
                    required
                    rows={3}
                    placeholder="House / flat no., building or society name, street, area, city"
                    value={formData.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    className={`w-full p-4 bg-[#F7F6F2] border ${errors.address
                      ? "border-red-500 bg-red-50/20"
                      : "border-neutral-300 focus:border-neutral-950"
                      } text-neutral-950 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-y`}
                  />
                  {errors.address && (
                    <p className="text-red-600 text-xs mt-1.5 m-0">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    icon="arrow_forward"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting"
                      ? "Submitting..."
                      : "Schedule Visit"}
                  </Button>

                  {status === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded max-w-md">
                      {errorMessage || (
                        <>
                          Something went wrong. Please call us directly on{" "}
                          <a
                            href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
                            className="underline font-semibold"
                          >
                            {CONTACT_INFO.PHONE_PRIMARY}
                          </a>
                          .
                        </>
                      )}
                    </div>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}