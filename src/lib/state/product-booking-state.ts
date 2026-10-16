"use client";

import { useState, useCallback, useTransition } from "react";

export interface ProductBookingFormData {
  homeownerName: string;
  contactNumber: string;
  address: string;
}

export type ProductBookingStatus = "idle" | "submitting" | "success" | "error";

export interface ProductBookingErrors {
  homeownerName?: string;
  contactNumber?: string;
  address?: string;
}

export const initialProductBookingData: ProductBookingFormData = {
  homeownerName: "",
  contactNumber: "",
  address: "",
};

export function validateProductBookingForm(data: ProductBookingFormData): ProductBookingErrors {
  const errors: ProductBookingErrors = {};

  if (!data.homeownerName.trim()) {
    errors.homeownerName = "Please enter your name";
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  const cleanPhone = data.contactNumber.replace(/[\s\-\+]/g, "").slice(-10);
  if (!phoneRegex.test(cleanPhone)) {
    errors.contactNumber = "Please enter a valid 10-digit mobile number";
  }

  if (!data.address.trim()) {
    errors.address = "Please enter your address";
  }

  return errors;
}

export function useProductBooking() {
  const [formData, setFormData] = useState<ProductBookingFormData>(initialProductBookingData);
  const [status, setStatus] = useState<ProductBookingStatus>("idle");
  const [errors, setErrors] = useState<ProductBookingErrors>({});
  const [isPending, startTransition] = useTransition();

  const updateField = useCallback(
    <K extends keyof ProductBookingFormData>(field: K, value: ProductBookingFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => {
        if (prev[field as keyof ProductBookingErrors]) {
          const next = { ...prev };
          delete next[field as keyof ProductBookingErrors];
          return next;
        }
        return prev;
      });
    },
    []
  );

  const submitForm = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validateProductBookingForm(formData);

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
              homeownerName: formData.homeownerName,
              contactNumber: formData.contactNumber,
              address: formData.address,
              leadSource: "Product Page - Invisible Grills",
            }),
          });

          const json = await res.json().catch(() => null);

          if (!res.ok || !json?.success) {
            console.error("[CRM Lead Error] Failed to submit:", res.status, json);
            setStatus("error");
            return;
          }

          setStatus("success");
          setFormData(initialProductBookingData);
        } catch (err) {
          console.error("[CRM Lead Network Warning]", err);
          setStatus("error");
        }
      });
    },
    [formData]
  );

  const resetForm = useCallback(() => {
    setFormData(initialProductBookingData);
    setStatus("idle");
    setErrors({});
  }, []);

  return {
    formData,
    status,
    errors,
    isPending,
    updateField,
    submitForm,
    resetForm,
  };
}
