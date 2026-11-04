// File: src/app/api/leads/route.ts
import { NextRequest, NextResponse } from "next/server";
import { insertLead } from "@/lib/crm";
import { normalizeMobile, PRODUCT_OPTIONS } from "@/lib/leads";

const MAX_FIELD_LENGTH = 300;
const text = (value: unknown) =>
  typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";

const fail = (error: string, status: number) =>
  NextResponse.json({ success: false, error }, { status });

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return fail("Invalid request.", 400);

  const name = text(body.name);
  const phone = normalizeMobile(text(body.phone));
  if (!name || !phone) {
    return fail("Please enter your name and a valid 10-digit mobile number.", 400);
  }

  try {
    const result = await insertLead({
      name,
      phone,
      address: text(body.address),
      leadSource: text(body.leadSource),
      // Only known products reach the CRM; anything else is dropped, not rejected.
      product: (PRODUCT_OPTIONS as readonly string[]).includes(text(body.product)) ? text(body.product) : "",
    });
    if (!result.ok) {
      return fail("We couldn't save your enquiry right now. Please call us directly.", 502);
    }
    return NextResponse.json({ success: true, simulated: result.simulated });
  } catch (error) {
    console.error("[Leads API] CRM request failed:", error);
    return fail("We couldn't save your enquiry right now. Please call us directly.", 502);
  }
}
