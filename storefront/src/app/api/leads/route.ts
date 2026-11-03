// File: src/app/api/leads/route.ts
import { NextRequest, NextResponse } from "next/server";
import { CRM_CONFIG } from "@/lib/const";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = body.name || body.homeownerName || body.fullName || "Website Visitor";
    const rawPhone = body.phone || body.contactNumber || "";
    // Extract standard 10-digit mobile number for CRM
    const cleanPhone = rawPhone.replace(/\D/g, "").slice(-10) || rawPhone;
    const address = body.address || body.location || body.city || "";
    const email = body.email || `${cleanPhone || "lead"}@solutionsahab.com`;
    const today = new Date().toISOString().split("T")[0];
    const createdBy =
      process.env.CRATIO_LEAD_CREATED_BY ||
      CRM_CONFIG.CREATED_BY ||
      "Deepak";
    const assignedTo =
      process.env.CRATIO_ASSIGNED_TO ||
      CRM_CONFIG.ASSIGNED_TO ||
      "shivani";
    const leadSource =
      process.env.CRATIO_LEAD_SOURCE ||
      body.leadSource ||
      CRM_CONFIG.LEAD_SOURCE ||
      "Website";

    // Payload formatted strictly to official Cratio CRM Postman specification
    // Reference: https://www.postman.com/red-spaceship-7195/api-request/http-request/rykv1rk/insert-leads
    const crmPayload = {
      records: [
        {
          "Contact Name": name,
          "Mobile Number": cleanPhone,
          "Email": email,
          "Address": address,
          "Lead Date": today,
          "Lead Source": leadSource,
          "Lead Stage": "New",
          "Created By": createdBy,
          "Assigned To": assignedTo,
        },
      ],
    };

    const apiKey =
      process.env.CRATIO_API_KEY ||
      CRM_CONFIG.API_KEY

    // Send to Cratio CRM
    if (
      apiKey &&
      apiKey !== "<<YOUR_API_KEY_HERE>>" &&
      apiKey !== "YOUR_API_KEY_HERE"
    ) {
      const crmUrl = `${CRM_CONFIG.ENDPOINT}?apikey=${encodeURIComponent(
        apiKey
      )}&formname=${encodeURIComponent(
        CRM_CONFIG.FORM_NAME
      )}&operation=${encodeURIComponent(
        CRM_CONFIG.OPERATION
      )}&overwrite=${encodeURIComponent(CRM_CONFIG.OVERWRITE)}`;

      const crmResponse = await fetch(crmUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(crmPayload),
      });

      const responseData = await crmResponse.json().catch(() => null);

      console.log(
        "[Cratio CRM Response]:",
        JSON.stringify(responseData, null, 2)
      );

      if (!crmResponse.ok) {
        return NextResponse.json(
          {
            success: false,
            error: `CRM rejected the lead submission (HTTP ${crmResponse.status})`,
            data: responseData,
          },
          { status: crmResponse.status || 502 }
        );
      }

      if (responseData && (responseData.error || responseData.status === "error" || responseData.failure)) {
        return NextResponse.json(
          {
            success: false,
            error: responseData.error || responseData.message || "CRM lead rejection",
            data: responseData,
          },
          { status: 400 }
        );
      }

      return NextResponse.json({
        success: true,
        data: responseData,
        message: "Lead inserted successfully into Cratio CRM",
      });
    }

    // Fallback if no key is configured
    console.log(
      "[Cratio CRM Simulation] Lead payload queued:",
      JSON.stringify(crmPayload, null, 2)
    );

    return NextResponse.json({
      success: true,
      simulated: true,
      message: "Lead captured successfully. Configure CRATIO_API_KEY to sync live.",
      payload: crmPayload,
    });
  } catch (error: any) {
    console.error("[Cratio CRM API Route Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Internal server error submitting lead",
      },
      { status: 500 }
    );
  }
}
