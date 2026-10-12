"use client";

import { useState, useCallback, useTransition } from "react";

export interface ProductBookingFormData {
  homeownerName: string;
  contactNumber: string;
  email: string;
}

export type ProductBookingStatus = "idle" | "submitting" | "success" | "error";

export interface ProductBookingErrors {
  homeownerName?: string;
  contactNumber?: string;
  email?: string;
}

export const initialProductBookingData: ProductBookingFormData = {
  homeownerName: "",
  contactNumber: "",
  email: "",
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

  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
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
              email: formData.email,
              leadSource: "Product Page - Invisible Grills",
            }),
          });

          if (!res.ok) {
            console.warn("[CRM Lead Notice] Non-200 response:", res.status);
          }

          setStatus("success");
          setFormData(initialProductBookingData);
        } catch (err) {
          console.warn("[CRM Lead Network Warning]", err);
          setStatus("success");
          setFormData(initialProductBookingData);
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
