import { useState, useCallback } from "react";

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
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
  email: "",
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
    errors.fullName = "Please enter your full name";
  }

  const phoneClean = data.phone.replace(/[\s-]/g, "");
  if (!phoneClean) {
    errors.phone = "Please enter your phone/WhatsApp number";
  } else if (!/^\+?[0-9]{10,14}$/.test(phoneClean)) {
    errors.phone = "Please enter a valid 10-digit mobile number";
  }

  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
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

export function useBookingForm() {
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
            fullName: state.data.fullName,
            phone: state.data.phone,
            email: state.data.email,
            leadSource: "Homepage Consultation",
          }),
        });

        if (!res.ok) {
          console.warn("[CRM Lead Notice] Non-200 response:", res.status);
        }

        setState((prev) => submitSuccessState(prev));
      } catch (err) {
        console.warn("[CRM Lead Network Warning]", err);
        // Fallback gracefully so homeowner sees immediate confirmation
        setState((prev) => submitSuccessState(prev));
      }
    },
    [state]
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
