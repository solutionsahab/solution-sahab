// File: src/components/product/pleated-mesh/PleatedMeshBookingSection.tsx
"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/Button";

export function PleatedMeshBookingSection() {
  const [formData, setFormData] = useState({
    homeownerName: "",
    contactNumber: "",
    email: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.homeownerName.trim()) {
      errs.homeownerName = "Please enter your name";
    }
    const cleanPhone = formData.contactNumber.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.contactNumber = "Please enter a valid 10-digit mobile number";
    }
    return errs;
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    startTransition(async () => {
      try {
        const res = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.homeownerName,
            phone: formData.contactNumber,
            email: formData.email || undefined,
            leadSource: "Pleated Mesh Product Page",
          }),
        });

        if (res.ok) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    });
  };

  const resetForm = () => {
    setFormData({
      homeownerName: "",
      contactNumber: "",
      email: "",
    });
    setStatus("idle");
    setErrors({});
  };

  return (
    <section
      id="book-visit"
      className="w-full bg-neutral-50/70 py-14 sm:py-20 border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x border border-neutral-200 bg-white shadow-sm">
          {/* Left Column (5 cols): Context */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between gap-8 bg-neutral-50/50">
            <div>
              <h2 className="text-2xl sm:text-3xl font-gilroy font-extrabold text-neutral-950 tracking-tight m-0 mb-3">
                Schedule a Site Measurement
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-body m-0 mb-6">
                Our technician visits with physical aluminum frame swatches and pleated mesh samples, measures your doors and windows with a precision laser meter, and quotes per square foot on the spot.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500 font-sans">
              Serving Gurgaon · Noida · Greater Noida · Delhi · Faridabad · Ghaziabad
            </div>
          </div>

          {/* Right Column (7 cols): Clean Measurement Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
            {status === "success" ? (
              <div className="p-8 text-center flex flex-col items-center gap-4 bg-blue-50/50 border border-blue-200">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-2xl font-gilroy font-extrabold text-neutral-950 m-0">
                  Request Confirmed!
                </h3>
                <p className="text-sm text-neutral-600 font-body max-w-md m-0">
                  Thank you! Our technical coordinator will call you within 2 hours to confirm your laser measurement appointment and bring physical mesh swatches.
                </p>
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={resetForm}
                  className="mt-4"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={submitForm} className="flex flex-col gap-4 sm:gap-5">
                <div>
                  <h3 className="text-xl font-gilroy font-bold text-neutral-950 m-0 mb-1">
                    Book Laser Measurement Visit
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="mesh-homeowner"
                      className="text-xs font-semibold text-neutral-700"
                    >
                      Your Name *
                    </label>
                    <input
                      id="mesh-homeowner"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.homeownerName}
                      onChange={(e) => updateField("homeownerName", e.target.value)}
                      className={`w-full h-11 px-3.5 bg-neutral-50 border text-sm font-body text-neutral-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors ${
                        errors.homeownerName ? "border-red-500" : "border-neutral-300"
                      }`}
                    />
                    {errors.homeownerName && (
                      <span className="text-red-600 text-xs">{errors.homeownerName}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="mesh-phone"
                      className="text-xs font-semibold text-neutral-700"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="mesh-phone"
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.contactNumber}
                      onChange={(e) => updateField("contactNumber", e.target.value)}
                      className={`w-full h-11 px-3.5 bg-neutral-50 border text-sm font-body text-neutral-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors ${
                        errors.contactNumber ? "border-red-500" : "border-neutral-300"
                      }`}
                    />
                    {errors.contactNumber && (
                      <span className="text-red-600 text-xs">{errors.contactNumber}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="mesh-email"
                    className="text-xs font-semibold text-neutral-700"
                  >
                    Email Address (Optional)
                  </label>
                  <input
                    id="mesh-email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full h-11 px-3.5 bg-neutral-50 border border-neutral-300 text-sm font-body text-neutral-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    icon="calendar_month"
                    loading={isPending || status === "submitting"}
                    disabled={isPending || status === "submitting"}
                  >
                    {status === "submitting"
                      ? "Submitting Appointment..."
                      : "Confirm Site Visit"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
