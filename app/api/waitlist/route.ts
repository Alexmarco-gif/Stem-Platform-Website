import { NextRequest, NextResponse } from "next/server";

const roles = new Set([
  "CEO / Founder",
  "Strategy",
  "Growth",
  "Product",
  "Risk / Operations",
  "Research",
  "Other"
]);

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[
        character
      ] || character
  );
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = text(body.firstName, 80);
  const lastName = text(body.lastName, 80);
  const email = text(body.email, 180).toLowerCase();
  const company = text(body.company, 160);
  const role = text(body.role, 80);
  const needs = text(body.needs, 2000);
  const consent = body.consent === "yes";

  if (!firstName || !lastName || !email || !roles.has(role) || !consent) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 422 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid work email." },
      { status: 422 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (resendKey && notificationEmail) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || "Stem Cogent <onboarding@resend.dev>",
        to: [notificationEmail],
        subject: `New Stem Cogent trial request — ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
        reply_to: email,
        html: `
          <h2>New trial-access request</h2>
          <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "Not supplied")}</p>
          <p><strong>Role:</strong> ${escapeHtml(role)}</p>
          <p><strong>Needs:</strong><br>${escapeHtml(needs || "Not supplied").replace(/\n/g, "<br>")}</p>
          <p><small>Consent to contact was recorded with this submission.</small></p>
        `
      })
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "We could not send your request. Please try again." },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
