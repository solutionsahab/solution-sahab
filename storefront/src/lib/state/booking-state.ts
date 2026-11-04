import { useState, useCallback } from "react";
import { normalizeMobile, submitLead } from "@/lib/leads";

export interface BookingFormData {
  fullName: string;
  phone: string;
  address: string;
  product: string;
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
  product: "",
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

  if (!data.phone.trim()) {
    errors.phone = "Please enter your phone number";
  } else if (!normalizeMobile(data.phone)) {
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

export function useBookingForm(defaultLeadSource: string = "Homepage Consultation", defaultProduct = "") {
  const fresh = useCallback(
    (): BookingState => ({ ...initialBookingState, data: { ...initialBookingFormData, product: defaultProduct } }),
    [defaultProduct]
  );
  const [state, setState] = useState<BookingState>(fresh);

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

      const result = await submitLead({
        name: state.data.fullName,
        phone: state.data.phone,
        address: state.data.address,
        leadSource: defaultLeadSource,
        product: state.data.product,
      });

      setState((prev) =>
        result.ok
          ? submitSuccessState(prev)
          : { ...prev, status: "error", errorMessage: result.error }
      );
    },
    [state, defaultLeadSource]
  );

  const resetForm = useCallback(() => {
    setState(fresh());
  }, [fresh]);

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
