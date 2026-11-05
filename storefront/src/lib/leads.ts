// File: src/lib/leads.ts
// Lead rules shared by the website forms (browser) and /api/leads (server).

export interface LeadInput {
  name: string;
  phone: string;
  address: string;
  leadSource?: string;
  product?: string;
}

// Product choices on the enquiry forms; the chosen one goes to Cratio's "Product" field.
export const PRODUCT_OPTIONS = [
  "Invisible Grills",
  "Pleated Mesh",
  "Honeycomb Partition",
  "Aluminum Mesh & Partition",
  "Automatic Weather Screen",
  "Skylight",
  "Ceiling Cloth Hanger",
  "Other",
] as const;

export type LeadResult = { ok: true } | { ok: false; error: string };

// Indian mobile number: 10 digits starting 6-9, optionally written with +91 / 0, spaces or dashes.
export function normalizeMobile(raw: string): string | null {
  const digits = raw.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

export async function submitLead(lead: LeadInput): Promise<LeadResult> {
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    const json = await res.json().catch(() => null);

    if (!res.ok || !json?.success) {
      console.error("[Lead] Submission failed:", res.status, json);
      return {
        ok: false,
        error:
          json?.error ||
          "Unable to submit your enquiry right now. Please try again or call us directly.",
      };
    }
    return { ok: true };
  } catch (err) {
    console.error("[Lead] Network error:", err);
    return {
      ok: false,
      error: "A network error occurred. Please check your connection and try again.",
    };
  }
}
