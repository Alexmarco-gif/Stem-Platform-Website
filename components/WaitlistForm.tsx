"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting"); setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Please try again.");
      setState("success"); form.reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Please try again."); setState("error");
    }
  }

  if (state === "success") return <div className="form-card success-card" role="status"><span className="success-icon">✓</span><p className="eyebrow">Request received</p><h2>Your pilot request is in.</h2><p>We&apos;ll review your request and contact you with onboarding details if your use case fits the founding pilot.</p><button className="text-button" type="button" onClick={() => setState("idle")}>Submit another request →</button></div>;

  return <form className="form-card pilot-form" onSubmit={handleSubmit}>
    <div className="form-heading"><p className="eyebrow">Request your pilot</p><h2>Tell us what matters.</h2><p>Every field helps us understand your fintech and configure a useful evaluation.</p></div>
    <fieldset><legend>Your details</legend><div className="form-row"><label>First name <span>*</span><input name="firstName" autoComplete="given-name" required /></label><label>Last name <span>*</span><input name="lastName" autoComplete="family-name" required /></label></div><label>Work email <span>*</span><input type="email" name="email" autoComplete="email" required /></label><div className="form-row"><label>Company <span>*</span><input name="company" autoComplete="organization" required /></label><label>Company website <span>*</span><input type="url" name="website" autoComplete="url" placeholder="https://" required /></label></div></fieldset>
    <fieldset><legend>About your fintech</legend><div className="form-row"><label>Primary category <span>*</span><select name="category" required defaultValue=""><option value="" disabled>Select category</option>{["Payments","Lending","Digital Banking","Infrastructure","Remittance","Wealth / Investment","Insurance","Other"].map(item => <option key={item}>{item}</option>)}</select></label><label>Your responsibility <span>*</span><select name="role" required defaultValue=""><option value="" disabled>Select responsibility</option>{["CEO / Founder","Strategy","Operations","Finance","Product","Growth","Risk / Compliance","Other"].map(item => <option key={item}>{item}</option>)}</select></label></div><label>What should Stem Cogent help you stay ahead of? <span>*</span><select name="interest" required defaultValue=""><option value="" disabled>Select an area</option>{["Competitors","Regulation","Infrastructure","Product changes","Customer / market shifts","Expansion","Pricing / margin","Other"].map(item => <option key={item}>{item}</option>)}</select></label></fieldset>
    <fieldset><legend>Your most important question</legend><label>What decision, problem or area would you want Stem Cogent to monitor during your pilot? <span>*</span><textarea name="needs" rows={5} required placeholder="Tell us about the real operating priority you want to evaluate." /></label></fieldset>
    <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree that Stem Systems Ltd may contact me about this pilot request. See the <Link href="/privacy">privacy notice</Link>.</span></label>
    {state === "error" && <p className="form-error" role="alert">{message}</p>}
    <button className="button button-primary submit-button" type="submit" disabled={state === "submitting"}>{state === "submitting" ? "Sending request…" : "Request My Pilot"}<span aria-hidden="true">→</span></button>
    <p className="form-footnote">Guided onboarding · No long-term commitment · Nigeria-first coverage</p>
  </form>;
}
