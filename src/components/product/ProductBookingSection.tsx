"use client";

import React from "react";
import { useProductBooking } from "@/lib/state/product-booking-state";
import { CONTACT_INFO } from "@/const";

export function ProductBookingSection() {
  const {
    formData,
    status,
    errors,
    isPending,
    updateField,
    submitForm,
    resetForm,
  } = useProductBooking();

  return (
    <section
      className="w-full bg-paper py-8 sm:py-12 scroll-mt-28"
      id="booking-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Side Information Box */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            <span className="kicker text-ink">
              Book a visit
            </span>
            <h2 className="font-display-serif text-3xl sm:text-4xl text-ink leading-tight m-0">
              Schedule a free balcony measurement
            </h2>
            <p className="font-body-lg text-body-md sm:text-body-lg text-ink-soft leading-relaxed">
              An installer visits on time, brings actual cable and track
              samples, and quotes per square foot on the spot.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    done_all
                  </span>
                </div>
                <span className="font-label-md text-label-md font-semibold text-ink">
                  No obligation, free site survey
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    done_all
                  </span>
                </div>
                <span className="font-label-md text-label-md font-semibold text-ink">
                  Guaranteed installation slot within 48 to 72 hours
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    done_all
                  </span>
                </div>
                <span className="font-label-md text-label-md font-semibold text-ink">
                  Direct factory rates, no middlemen
                </span>
              </div>
            </div>

            <div className="mt-2 p-4 rounded-xl bg-paper-deep flex items-center gap-4 border border-ink/10">
              <span className="material-symbols-outlined text-[32px] text-primary shrink-0" aria-hidden="true">
                support_agent
              </span>
              <div>
                <div className="font-caption-caps text-caption-caps uppercase text-ink-soft font-semibold">
                  Direct Consultation Hotline
                </div>
                <a
                  className="font-headline-sm text-headline-sm font-bold text-secondary hover:underline"
                  href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
                >
                  {CONTACT_INFO.PHONE_PRIMARY}
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Form Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-ink/10">
            {status === "success" ? (
              <div className="p-6 rounded-xl bg-paper-deep text-primary font-label-md text-label-md flex flex-col items-center text-center gap-4 border border-primary/20">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]" aria-hidden="true">
                    task_alt
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-ink">
                  Laser Measurement Request Confirmed!
                </h3>
                <p className="font-body-md text-body-md text-ink max-w-md">
                  Thank you! Our technical coordinator will call you within 2
                  hours to confirm your laser measurement appointment and bring
                  physical cable samples.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-bold text-sm hover:bg-primary-container transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-4 sm:gap-5" onSubmit={submitForm}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-sm text-label-sm font-bold text-ink"
                      htmlFor="product-homeowner-name"
                    >
                      Homeowner / Architect Name *
                    </label>
                    <input
                      className={`w-full h-11 px-3.5 rounded-lg bg-paper text-ink font-body-md text-body-md border focus:outline-none focus:ring-2 focus:ring-secondary ${
                        errors.homeownerName
                          ? "border-red-500"
                          : "border-ink/10"
                      }`}
                      id="product-homeowner-name"
                      placeholder="Your name"
                      required
                      type="text"
                      value={formData.homeownerName}
                      onChange={(e) => updateField("homeownerName", e.target.value)}
                    />
                    {errors.homeownerName && (
                      <span className="text-red-600 text-xs">{errors.homeownerName}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-sm text-label-sm font-bold text-ink"
                      htmlFor="product-contact-number"
                    >
                      Contact Number *
                    </label>
                    <input
                      className={`w-full h-11 px-3.5 rounded-lg bg-paper text-ink font-body-md text-body-md border focus:outline-none focus:ring-2 focus:ring-secondary ${
                        errors.contactNumber
                          ? "border-red-500"
                          : "border-ink/10"
                      }`}
                      id="product-contact-number"
                      placeholder="10-digit mobile number"
                      required
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) => updateField("contactNumber", e.target.value)}
                    />
                    {errors.contactNumber && (
                      <span className="text-red-600 text-xs">{errors.contactNumber}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-sm text-label-sm font-bold text-ink"
                    htmlFor="product-email"
                  >
                    Email Address (Optional)
                  </label>
                  <input
                    className={`w-full h-11 px-3.5 rounded-lg bg-paper text-ink font-body-md text-body-md border focus:outline-none focus:ring-2 focus:ring-secondary ${
                      errors.email ? "border-red-500" : "border-ink/10"
                    }`}
                    id="product-email"
                    placeholder="you@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                  {errors.email && (
                    <span className="text-red-600 text-xs">{errors.email}</span>
                  )}
                </div>

                <button
                  className="w-full mt-2 h-12 bg-secondary hover:bg-blue-800 text-on-secondary font-label-md text-label-md font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-70"
                  type="submit"
                  disabled={isPending || status === "submitting"}
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    calendar_today
                  </span>
                  {status === "submitting"
                    ? "Submitting Your Request..."
                    : "Confirm Free Site Inspection"}
                </button>

                <p className="font-caption-caps text-[10px] sm:text-caption-caps text-ink-soft text-center uppercase tracking-wide">
                  No Spam Guarantee • Delhi • Gurugram • Noida • Greater Noida • Faridabad • Ghaziabad
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
