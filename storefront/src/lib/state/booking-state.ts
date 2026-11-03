import { useState, useCallback } from "react";

export interface BookingFormData {
  fullName: string;
  phone: string;
  address: string;
}

export type BookingStatus = "idle" | "submitting" | "success" | "error";

export interface BookingState {
  data: BookingFormData;
  status: BookingStatus;
  errors: Partial<Record<keyof BookingFormData, string>>;
  errorMessage?: string;
}

export const initialBookingFormData: BookingFormData = {
  fullName: "",
  phone: "",
  address: "",
};

export const initialBookingState: BookingState = {
  data: initialBookingFormData,
  status: "idle",
  errors: {},
};

export function validateBookingForm(
  data: BookingFormData
): Partial<Record<keyof BookingFormData, string>> {
  const errors: Partial<Record<keyof BookingFormData, string>> = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your name";
  }

  const phoneClean = data.phone.replace(/[\s-]/g, "");
  if (!phoneClean) {
    errors.phone = "Please enter your phone number";
  } else if (!/^\+?[0-9]{10,14}$/.test(phoneClean)) {
    errors.phone = "Please enter a valid 10-digit mobile number";
  }

  if (!data.address.trim()) {
    errors.address = "Please enter your address";
  }

  return errors;
}

export function updateFormFieldState(
  state: BookingState,
  field: keyof BookingFormData,
  value: string
): BookingState {
  return {
    ...state,
    data: {
      ...state.data,
      [field]: value,
    },
    errors: {
      ...state.errors,
      [field]: undefined,
    },
  };
}

export function submitBookingState(state: BookingState): BookingState {
  const errors = validateBookingForm(state.data);
  const hasErrors = Object.keys(errors).length > 0;

  if (hasErrors) {
    return {
      ...state,
      status: "idle",
      errors,
    };
  }

  return {
    ...state,
    status: "submitting",
    errors: {},
  };
}

export function submitSuccessState(state: BookingState): BookingState {
  return {
    ...state,
    status: "success",
    errors: {},
  };
}

export function resetBookingState(): BookingState {
  return initialBookingState;
}

export function useBookingForm(defaultLeadSource: string = "Homepage Consultation") {
  const [state, setState] = useState<BookingState>(initialBookingState);

  const updateField = useCallback(
    (field: keyof BookingFormData, value: string) => {
      setState((prev) => updateFormFieldState(prev, field, value));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const updated = submitBookingState(state);
      setState(updated);

      if (Object.keys(updated.errors).length > 0) {
        return;
      }

      try {
        const res = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: state.data.fullName,
            phone: state.data.phone,
            address: state.data.address,
            leadSource: defaultLeadSource,
          }),
        });

        const json = await res.json().catch(() => null);

        if (!res.ok || !json?.success) {
          console.error("[CRM Lead Error] Failed to submit:", res.status, json);
          setState((prev) => ({
            ...prev,
            status: "error",
            errorMessage:
              json?.error ||
              "Unable to submit your booking right now. Please try again or call us directly.",
          }));
          return;
        }

        setState((prev) => submitSuccessState(prev));
      } catch (err) {
        console.error("[CRM Lead Network Error]", err);
        setState((prev) => ({
          ...prev,
          status: "error",
          errorMessage:
            "A network error occurred. Please check your connection and try again.",
        }));
      }
    },
    [state, defaultLeadSource]
  );

  const resetForm = useCallback(() => {
    setState(resetBookingState());
  }, []);

  return {
    formData: state.data,
    status: state.status,
    errors: state.errors,
    errorMessage: state.errorMessage,
    updateField,
    handleSubmit,
    resetForm,
  };
}
