"use client";

// File: src/components/common/ContactForm.tsx
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

type Status = "idle" | "submitting" | "success" | "error";

const INPUT_CLASS =
  "w-full px-3.5 py-3 min-h-11 bg-paper text-ink font-body-md text-body-md border border-ink/10 focus:outline-none focus:ring-2 focus:ring-secondary";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    address?: string;
  }>({});

  const validate = () => {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please enter your name";

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = phone.replace(/[\s\-+()]/g, "").slice(-10);
    if (!phoneRegex.test(cleanPhone))
      next.phone = "Please enter a valid 10-digit mobile number";

    if (!address.trim()) next.address = "Please enter your address";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: "",
          address: address.trim(),
          leadSource: "Website - Contact Us",
        }),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok || !json?.success) {
        console.error("[Contact Lead Error] Submission failed:", res.status, json);
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setPhone("");
      setAddress("");
    } catch (err) {
      console.error("[Contact Lead Network Error]", err);
      setStatus("error");
    }
  };

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
          onClick={() => setStatus("idle")}
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
          <Link href="tel:+919971143143" className="underline font-semibold">
            +91 9971-143-143
          </Link>
          .
        </p>
      )}

    </form>
  );
}
