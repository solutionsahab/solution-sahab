"use client";

// File: src/components/common/ContactForm.tsx
import React from "react";
import { useState } from "react";
import { CONTACT_DATA } from "@/lib/info-pages";

type Status = "idle" | "submitting" | "success" | "error";

const INPUT_CLASS =
  "w-full px-3.5 py-3 min-h-11 rounded-lg bg-paper text-ink font-body-md text-body-md border border-ink/10 focus:outline-none focus:ring-2 focus:ring-secondary";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    address?: string;
    product?: string;
  }>({});

  const validate = () => {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please enter your name";

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = phone.replace(/[\s\-+()]/g, "").slice(-10);
    if (!phoneRegex.test(cleanPhone))
      next.phone = "Please enter a valid 10-digit mobile number";

    if (!address.trim()) next.address = "Please enter your address";
    if (!product) next.product = "Please select a product";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: "",
          address: address.trim(),
          leadSource: `Website - Contact Us - ${product}`,
        }),
      });
      setStatus("success");
      setName("");
      setPhone("");
      setAddress("");
      setProduct("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-6 rounded-xl bg-paper-deep text-primary font-label-md text-label-md flex flex-col items-center text-center gap-4 border border-primary/20">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-primary flex items-center justify-center">
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
          and arrange a free site visit.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-1 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-bold text-sm hover:bg-primary-container transition-colors"
        >
          Send Another Enquiry
        </button>
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
          className={`${INPUT_CLASS} ${errors.name ? "border-red-500" : ""}`}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((prev) => ({ ...prev, name: undefined }));
          }}
        />
        {errors.name && <span className="text-red-600 text-xs">{errors.name}</span>}
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
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setErrors((prev) => ({ ...prev, phone: undefined }));
          }}
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
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            setErrors((prev) => ({ ...prev, address: undefined }));
          }}
        />
        {errors.address && (
          <span className="text-red-600 text-xs">{errors.address}</span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          className="font-label-sm text-label-sm font-bold text-ink"
          htmlFor="contact-product"
        >
          Product You Want *
        </label>
        <select
          id="contact-product"
          name="product"
          required
          className={`${INPUT_CLASS} ${
            errors.product ? "border-red-500" : ""
          } ${product ? "" : "text-slate-500"}`}
          value={product}
          onChange={(e) => {
            setProduct(e.target.value);
            setErrors((prev) => ({ ...prev, product: undefined }));
          }}
        >
          <option value="">Select a product</option>
          {CONTACT_DATA.productOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.product && (
          <span className="text-red-600 text-xs">{errors.product}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full mt-1 h-12 bg-secondary hover:bg-blue-800 text-on-secondary font-label-md text-label-md font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-70"
      >
        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
          send
        </span>
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-xs m-0 text-center">
          Something went wrong. Please call us directly on{" "}
          <a href="tel:+919971143143" className="underline font-semibold">
            +91 9971-143-143
          </a>
          .
        </p>
      )}

      <p className="font-caption-caps text-[10px] sm:text-caption-caps text-ink-soft text-center uppercase tracking-wide m-0">
        We call back within 2 hours • No spam guarantee
      </p>
    </form>
  );
}
