"use client";

// File: src/components/common/ContactForm.tsx
import { Button } from "@/components/ui/Button";
import { ThankYouMark } from "@/components/common/ThankYouMark";
import Link from "next/link";
import { useBookingForm } from "@/lib/state/booking-state";
import { CONTACT_INFO } from "@/lib/constants";
import { PRODUCT_OPTIONS } from "@/lib/leads";

const INPUT_CLASS =
  "w-full px-3 py-2.5 min-h-11 bg-white text-neutral-950 text-base border border-neutral-300 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1B4D8E]";

export function ContactForm() {
  const { formData, status, errors, updateField, handleSubmit, resetForm } =
    useBookingForm("Website - Contact Us");

  if (status === "success") {
    return (
      <div className="p-5 bg-neutral-50 flex flex-col items-center text-center gap-3 border border-neutral-300">
        <ThankYouMark className="mb-1" />
        <h3 className="text-lg font-extrabold font-gilroy text-neutral-950 tracking-tight m-0">
          Thank you for choosing us
        </h3>
        <p className="text-sm text-neutral-800 leading-relaxed max-w-md m-0">
          {formData.fullName}
          <br />
          Mobile: {formData.phone}
          <br />
          Address: {formData.address}
          {formData.product && (
            <>
              <br />
              Product: {formData.product}
            </>
          )}
        </p>
        <p className="text-sm text-neutral-800 leading-relaxed max-w-md m-0">
          Our team will call you shortly to discuss your requirement
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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-semibold text-neutral-950"
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

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-semibold text-neutral-950"
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

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-semibold text-neutral-950"
          htmlFor="contact-product"
        >
          Product
        </label>
        <select
          id="contact-product"
          name="product"
          className={INPUT_CLASS}
          value={formData.product}
          onChange={(e) => updateField("product", e.target.value)}
        >
          <option value="">Select a product (optional)</option>
          {PRODUCT_OPTIONS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-sm font-semibold text-neutral-950"
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
