import { NextRequest, NextResponse } from "next/server";

const allowed = {
  role: new Set(["CEO / Founder","Strategy","Operations","Finance","Product","Growth","Risk / Compliance","Other"]),
  category: new Set(["Payments","Lending","Digital Banking","Infrastructure","Remittance","Wealth / Investment","Insurance","Other"]),
  interest: new Set(["Competitors","Regulation","Infrastructure","Product changes","Customer / market shifts","Expansion","Pricing / margin","Other"])
};
const text = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[character] || character));

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({error:"Invalid request."},{status:400}); }
  const data = { firstName:text(body.firstName,80), lastName:text(body.lastName,80), email:text(body.email,180).toLowerCase(), company:text(body.company,160), website:text(body.website,240), role:text(body.role,80), category:text(body.category,80), interest:text(body.interest,100), needs:text(body.needs,2000) };
  if (Object.values(data).some(value => !value) || !allowed.role.has(data.role) || !allowed.category.has(data.category) || !allowed.interest.has(data.interest) || body.consent !== "yes") return NextResponse.json({error:"Please complete all required fields."},{status:422});
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return NextResponse.json({error:"Please enter a valid work email."},{status:422});
  try { new URL(data.website); } catch { return NextResponse.json({error:"Please enter a valid company website."},{status:422}); }
  const resendKey = process.env.RESEND_API_KEY; const notificationEmail = process.env.NOTIFICATION_EMAIL;
  if (resendKey && notificationEmail) {
    const rows = Object.entries(data).map(([key,value]) => `<p><strong>${escapeHtml(key)}:</strong> ${escapeHtml(value)}</p>`).join("");
    const response = await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${resendKey}`,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.FROM_EMAIL || "Stem Cogent <onboarding@resend.dev>",to:[notificationEmail],subject:`New Stem Cogent pilot request — ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}`,reply_to:data.email,html:`<h2>New founding-pilot request</h2>${rows}<p><small>Consent to contact was recorded.</small></p>`})});
    if (!response.ok) return NextResponse.json({error:"We could not send your request. Please try again."},{status:502});
  }
  return NextResponse.json({ok:true});
}
