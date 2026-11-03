"use client";

// File: src/components/common/ContactForm.tsx
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useBookingForm } from "@/lib/state/booking-state";
import { CONTACT_INFO } from "@/lib/constants";

const INPUT_CLASS =
  "w-full px-3.5 py-3 min-h-11 bg-paper text-ink font-body-md text-body-md border border-ink/10 focus:outline-none focus:ring-2 focus:ring-secondary";

export function ContactForm() {
  const { formData, status, errors, updateField, handleSubmit, resetForm } =
    useBookingForm("Website - Contact Us");

  if (status === "success") {
    return (
      <div className="p-6 bg-paper-deep text-primary font-label-md text-label-md flex flex-col items-center text-center gap-4 border border-primary/20">
        <div className="w-14 h-14 rounded-full bg-blue-100 text-primary flex items-center justify-center">
          <span
            className="material-symbols-outlined text-[32px]"
            aria-hidden="true"
          >
            task_alt
          </span>
        </div>
        <h3 className="font-headline-sm text-headline-sm font-bold text-ink m-0">
          Enquiry Received!
        </h3>
        <p className="font-body-md text-body-md text-ink max-w-md m-0">
          Thank you! Our team will call you shortly to discuss your requirement
          and arrange a site visit.
        </p>
        <Button
          type="button"
          variant="primary"
          size="md"
          onClick={resetForm}
          className="mt-1"
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-1.5">
        <label
          className="font-label-sm text-label-sm font-bold text-ink"
          htmlFor="contact-name"
        >
          Name *
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={`${INPUT_CLASS} ${errors.fullName ? "border-red-500" : ""}`}
          value={formData.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
        />
        {errors.fullName && <span className="text-red-600 text-xs">{errors.fullName}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          className="font-label-sm text-label-sm font-bold text-ink"
          htmlFor="contact-phone"
        >
          Phone number *
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          className={`${INPUT_CLASS} ${errors.phone ? "border-red-500" : ""}`}
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
        />
        {errors.phone && <span className="text-red-600 text-xs">{errors.phone}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          className="font-label-sm text-label-sm font-bold text-ink"
          htmlFor="contact-address"
        >
          Address *
        </label>
        <textarea
          id="contact-address"
          name="address"
          required
          rows={3}
          autoComplete="street-address"
          placeholder="House / flat no., street, city, pincode"
          className={`${INPUT_CLASS} resize-y ${
            errors.address ? "border-red-500" : ""
          }`}
          value={formData.address}
          onChange={(e) => updateField("address", e.target.value)}
        />
        {errors.address && (
          <span className="text-red-600 text-xs">{errors.address}</span>
        )}
      </div>


      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        icon="send"
        loading={status === "submitting"}
        disabled={status === "submitting"}
        className="mt-1"
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </Button>

      {status === "error" && (
        <p className="text-red-600 text-xs m-0 text-center">
          Something went wrong. Please call us directly on{" "}
          <Link href={`tel:${CONTACT_INFO.PHONE_PRIMARY_RAW}`} className="underline font-semibold">
            {CONTACT_INFO.PHONE_PRIMARY}
          </Link>
          .
        </p>
      )}

    </form>
  );
}
