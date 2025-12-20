const FITLO_API_URL = "https://fitlo.ai/api/gym-website/contact";
const ORG_ID = "d1cba282-f39f-45f8-9c6d-7a25224e2c5e";

export async function sendLeadToFitlo(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}) {
  const apiKey = process.env.GYM_WEBSITE_API_KEY;

  if (!apiKey) {
    console.log("📊 [Fitlo] Skipping (no API key configured)");
    return;
  }

  const res = await fetch(FITLO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      orgId: ORG_ID,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      source: "website",
    }),
  });

  if (res.ok) {
    console.log("📊 [Fitlo] Lead sent successfully");
  } else {
    console.error("📊 [Fitlo] Failed to send lead:", res.status);
  }
}
