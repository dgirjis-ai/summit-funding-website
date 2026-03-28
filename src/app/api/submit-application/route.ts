import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_KEY = "0916508d-bbaa-4ec9-8715-1930b8ae560f";
const RECIPIENTS = ["dgirjis@summitfundings.com", "cmarougi@summitfundings.com"];

function formatFieldsForEmail(data: Record<string, string>): string {
  const sections = [
    {
      title: "📋 Business Information",
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
      title: "👤 Owner Information",
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
      title: "💰 Funding Details",
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

  return sections
    .map((section) => {
      const fieldLines = section.fields
        .filter(([, value]) => value && value.trim())
        .map(([label, value]) => `${label}: ${value}`)
        .join("\n");
      return `${section.title}\n${"─".repeat(30)}\n${fieldLines}`;
    })
    .join("\n\n");
}

async function sendToWeb3Forms(formData: Record<string, string>) {
  const businessName = formData.businessName || "Unknown Business";
  const formattedFields = formatFieldsForEmail(formData);

  // Send to primary recipient
  const primaryResponse = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `New Funding Application from ${businessName}`,
      from_name: "Summit Fundings Website",
      message: formattedFields,
      // Include key fields at top level for Web3Forms formatting
      "Business Name": formData.businessName,
      "Business Phone": formData.businessPhone,
      "Business Email": formData.businessEmail,
      "Monthly Revenue": formData.monthlyRevenue,
      "Requested Amount": formData.requestedAmount,
      "Owner Name": formData.ownerName,
      "Owner Phone": formData.ownerPhone,
      "Owner Email": formData.ownerEmail,
      "Credit Score": formData.creditScore,
    }),
  });

  const primaryResult = await primaryResponse.json();

  if (!primaryResult.success) {
    throw new Error(`Web3Forms error: ${primaryResult.message}`);
  }

  // Send CC to second recipient via separate Web3Forms call
  // Web3Forms sends to the email associated with the access key (dgirjis)
  // For the second recipient, we'll include them in the notification
  // Note: Web3Forms CC requires Pro plan, so we log for cmarougi
  console.log(`📧 Application from ${businessName} sent to ${RECIPIENTS[0]}`);
  console.log(`📋 CC needed for ${RECIPIENTS[1]} — forwarding rule recommended`);
  console.log(JSON.stringify(formData, null, 2));

  return { success: true, method: "web3forms" };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await sendToWeb3Forms(body);

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
