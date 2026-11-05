// File: src/lib/crm.ts
// Cratio CRM lead insert. Server only: every setting comes from .env (see .env.example).
// API reference: https://www.postman.com/red-spaceship-7195/api-request/http-request/rykv1rk/insert-leads

const ENDPOINT = "https://apps.cratiocrm.com/api/apirequest.php";
const TIMEOUT_MS = 10_000;

export interface CrmLead {
  name: string;
  phone: string; // already normalised to 10 digits
  address: string;
  leadSource?: string;
  product?: string;
}

export type CrmResult = { ok: true; simulated?: boolean } | { ok: false };

export async function insertLead(lead: CrmLead): Promise<CrmResult> {
  const {
    CRATIO_API_KEY: apiKey,
    CRATIO_LEAD_CREATED_BY: createdBy,
    CRATIO_ASSIGNED_TO: assignedTo,
    CRATIO_LEAD_SOURCE: envLeadSource,
  } = process.env;

  const record: Record<string, string | undefined> = {
    "Contact Name": lead.name,
    "Mobile Number": lead.phone,
    Email: `${lead.phone}@solutionsahab.com`,
    Address: lead.address,
    "Lead Date": new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" }), // YYYY-MM-DD in IST
    // The env value wins so every website lead lands under one CRM source.
    "Lead Source": envLeadSource || lead.leadSource || "Website",
    "Lead Stage": "New",
    "Created By": createdBy,
    "Assigned To": assignedTo,
    ...(lead.product ? { Product: lead.product } : {}),
  };

  if (!apiKey) {
    // Without a key in production the lead would be lost, so fail loudly instead.
    if (process.env.NODE_ENV === "production") {
      console.error("[CRM] CRATIO_API_KEY is not set; lead not saved:", record);
      return { ok: false };
    }
    console.log("[CRM Simulation] Lead payload:", JSON.stringify(record, null, 2));
    return { ok: true, simulated: true };
  }

  if (!createdBy || !assignedTo) {
    console.error("[CRM] CRATIO_LEAD_CREATED_BY / CRATIO_ASSIGNED_TO missing; lead not saved:", record);
    return { ok: false };
  }

  const url = new URL(ENDPOINT);
  url.search = new URLSearchParams({
    apikey: apiKey,
    formname: "Leads",
    operation: "insertRecords",
    // Must stay "true": with "false" Cratio rejects a repeat mobile number and the enquiry is lost.
    overwrite: "true",
  }).toString();

  if (await send(url, record)) return { ok: true };
  // If Cratio refuses the Product value (e.g. not in its picklist), save the lead without it rather than lose it.
  if (record.Product) {
    const { Product, ...withoutProduct } = record;
    console.error("[CRM] Retrying without Product:", Product);
    if (await send(url, withoutProduct)) return { ok: true };
  }
  return { ok: false };
}

async function send(url: URL, record: Record<string, string | undefined>): Promise<boolean> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ records: [record] }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  const data = await res.json().catch(() => null);

  if (!res.ok || data?.error || data?.status === "error" || data?.failure) {
    console.error("[CRM] Lead rejected:", res.status, JSON.stringify(data));
    return false;
  }
  return true;
}
