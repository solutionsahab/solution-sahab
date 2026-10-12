"use client";

import React from "react";
import { useBookingForm } from "@/lib/state/booking-state";
import { CONTACT_INFO } from "@/const";

export function BookingSection() {
  const {
    formData,
    status,
    errors,
    updateField,
    handleSubmit,
    resetForm,
  } = useBookingForm();

  return (
    <section
      className="w-full py-14 sm:py-20 bg-paper scroll-mt-28"
      id="quick-booking"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl border border-ink/10">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider font-bold mb-3 text-primary">
              <span className="kicker text-primary">Free site visit</span>
            </div>
            <h2
              id="booking-heading"
              className="font-display-serif text-3xl sm:text-4xl text-ink mt-1"
            >
              Get someone over to measure
            </h2>
            <p className="font-body-lg text-body-lg text-ink-soft max-w-xl mt-3 mb-0">
              No obligation. We bring samples, take measurements, and quote on
              the spot.
            </p>
          </div>

          {status === "success" ? (
            <div className="text-center py-10" id="booking-success" role="alert">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-primary mx-auto flex items-center justify-center mb-4 border border-emerald-200">
                <span className="material-symbols-outlined text-[36px]" aria-hidden="true">
                  check_circle
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-ink font-bold">
                Site Visit Request Received!
              </h3>
              <p className="font-body-lg text-body-lg text-ink-soft max-w-md mx-auto mt-2">
                Thank you, {formData.fullName || "Customer"}! Our Delhi NCR coordinator will reach out to you within 60 minutes to confirm your preferred date and time slot.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  className="inline-flex items-center gap-2 bg-primary hover:bg-emerald-700 text-on-primary font-label-md text-label-md px-6 py-3.5 rounded-xl font-bold transition-all shadow-md"
                  href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`}
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    call
                  </span>
                  Speak Immediately: {CONTACT_INFO.PHONE_PRIMARY}
                </a>
                <button
                  type="button"
                  onClick={resetForm}
                  className="font-label-md text-label-md text-ink-soft hover:text-primary underline px-4 py-2"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block font-label-md text-label-md text-ink font-semibold mb-2"
                  >
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="full-name"
                    className={`w-full h-12 px-4 rounded-xl bg-paper border ${
                      errors.fullName ? "border-red-400 bg-red-50/30" : "border-ink/10"
                    } text-ink font-body-md text-body-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary transition-all`}
                    placeholder="Your name"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-xs mt-1.5 font-medium">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone-number"
                    className="block font-label-md text-label-md text-ink font-semibold mb-2"
                  >
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone-number"
                    className={`w-full h-12 px-4 rounded-xl bg-paper border ${
                      errors.phone ? "border-red-400 bg-red-50/30" : "border-ink/10"
                    } text-ink font-body-md text-body-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary transition-all`}
                    placeholder="+91 9971-143-143"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-xs mt-1.5 font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email-address"
                  className="block font-label-md text-label-md text-ink font-semibold mb-2"
                >
                  Email Address (Optional)
                </label>
                <input
                  id="email-address"
                  className={`w-full h-12 px-4 rounded-xl bg-paper border ${
                    errors.email ? "border-red-400 bg-red-50/30" : "border-ink/10"
                  } text-ink font-body-md text-body-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary transition-all`}
                  placeholder="you@gmail.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1.5 font-medium">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-secondary hover:bg-blue-800 text-on-secondary font-label-md text-label-md font-bold px-8 py-4 rounded-xl shadow-lg transition-colors duration-200 disabled:opacity-70"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Submitting...
                    </span>
                  ) : (
                    "Confirm Free Site Inspection"
                  )}
                </button>
                <div className="flex items-center gap-2 text-slate-500 font-label-md text-label-md">
                  <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                    lock
                  </span>
                  <span>100% Privacy • No Spam Guarantee</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
