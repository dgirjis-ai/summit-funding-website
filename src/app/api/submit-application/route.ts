import { NextRequest, NextResponse } from "next/server";

// Install resend: npm install resend
// Set RESEND_API_KEY in your environment variables

async function sendWithResend(formData: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("⚠️ RESEND_API_KEY not set — logging application data instead:");
    console.log(JSON.stringify(formData, null, 2));
    return { success: true, method: "console" };
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const businessName = formData.businessName || "Unknown Business";
  const htmlBody = buildEmailHTML(formData);

  const { error } = await resend.emails.send({
    from: "Summit Fundings <notifications@summitfundings.com>",
    to: ["dgirjis@summitfundings.com", "cmarougi@summitfundings.com"],
    subject: `New Funding Application from ${businessName}`,
    html: htmlBody,
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error(`Email send failed: ${error.message}`);
  }

  return { success: true, method: "resend" };
}

function buildEmailHTML(data: Record<string, string>): string {
  const sections = [
    {
      title: "Business Information",
      fields: [
        ["Business Name", data.businessName],
        ["Street Address", data.businessStreet],
        ["City", data.businessCity],
        ["State", data.businessState],
        ["ZIP", data.businessZip],
        ["Phone", data.businessPhone],
        ["Email", data.businessEmail],
        ["EIN", data.ein],
        ["Date Established", data.dateEstablished],
        ["Industry", data.industry],
        ["Monthly Revenue", data.monthlyRevenue],
      ],
    },
    {
      title: "Owner Information",
      fields: [
        ["Full Name", data.ownerName],
        ["Title", data.ownerTitle],
        ["SSN (Last 4)", data.ownerSSNLast4],
        ["Date of Birth", data.ownerDOB],
        ["Street Address", data.ownerStreet],
        ["City", data.ownerCity],
        ["State", data.ownerState],
        ["ZIP", data.ownerZip],
        ["Phone", data.ownerPhone],
        ["Email", data.ownerEmail],
      ],
    },
    {
      title: "Funding Details",
      fields: [
        ["Requested Amount", data.requestedAmount],
        ["Use of Funds", data.useOfFunds],
        ["Credit Score", data.creditScore],
        ["Current Liens/Advances", data.hasLiens],
        ["Lien Details", data.lienDetails],
        ["Bank Name", data.bankName],
      ],
    },
  ];

  const sectionHTML = sections
    .map(
      (section) => `
    <div style="margin-bottom: 24px;">
      <h2 style="color: #1B2A4A; font-size: 18px; border-bottom: 2px solid #3B82F6; padding-bottom: 8px; margin-bottom: 12px;">
        ${section.title}
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${section.fields
          .filter(([, value]) => value && value.trim())
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 6px 12px 6px 0; color: #6B7B95; font-size: 14px; width: 40%; vertical-align: top;">${label}</td>
            <td style="padding: 6px 0; color: #1B2A4A; font-size: 14px; font-weight: 600;">${value}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>`
    )
    .join("");

  return `
    <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden;">
      <div style="background: #1B2A4A; padding: 24px 32px;">
        <h1 style="color: #ffffff; font-size: 22px; margin: 0;">
          📋 New Funding Application
        </h1>
        <p style="color: rgba(255,255,255,0.6); font-size: 14px; margin: 8px 0 0;">
          from ${data.businessName || "Unknown Business"}
        </p>
      </div>
      <div style="padding: 32px;">
        ${sectionHTML}
        <div style="margin-top: 24px; padding: 16px; background: #EEF2F7; border-radius: 8px; text-align: center;">
          <p style="color: #6B7B95; font-size: 13px; margin: 0;">
            Submitted on ${new Date().toLocaleString("en-US", { timeZone: "America/Detroit" })}
          </p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await sendWithResend(body);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      method: result.method,
    });
  } catch (error) {
    console.error("Submit application error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit application" },
      { status: 500 }
    );
  }
}
