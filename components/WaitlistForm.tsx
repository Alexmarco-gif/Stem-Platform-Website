"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Please try again.");
      setState("success");
      form.reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="form-card success-card" role="status" tabIndex={-1}>
        <span className="success-icon">✓</span>
        <p className="eyebrow">Request received</p>
        <h2>Your evaluation request is in.</h2>
        <p>
          Thank you for your interest in Stem Cogent. We&apos;ll review the
          operating need you shared and contact you about trial activation.
        </p>
        <button className="text-button" type="button" onClick={() => setState("idle")}>
          Submit another request →
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <p className="eyebrow">Request a 14-day evaluation</p>
        <h2>What decision should become easier?</h2>
        <p>We use this context to assess fit and configure your evaluation.</p>
      </div>
      <div className="form-row">
        <label>
          First name <span>*</span>
          <input name="firstName" autoComplete="given-name" required />
        </label>
        <label>
          Last name <span>*</span>
          <input name="lastName" autoComplete="family-name" required />
        </label>
      </div>
      <label>
        Work email <span>*</span>
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <div className="form-row">
        <label>
          Company
          <input name="company" autoComplete="organization" />
        </label>
        <label>
          Your role <span>*</span>
          <select name="role" required defaultValue="">
            <option value="" disabled>Select role</option>
            <option>CEO / Founder</option>
            <option>Strategy</option>
            <option>Growth</option>
            <option>Product</option>
            <option>Risk / Operations</option>
            <option>Research</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label>
        What market decision or recurring workflow do you need to improve?
        <textarea name="needs" rows={4} placeholder="For example: regulatory response, competitor monitoring, settlement risk…" />
      </label>
      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I agree that Stem Systems Ltd may contact me about trial access.
          See the <Link href="/privacy">privacy notice</Link>.
        </span>
      </label>
      {state === "error" && <p className="form-error" role="alert">{message}</p>}
      <button className="button button-primary submit-button" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Sending request…" : "Request 14-day access"}
        <span aria-hidden="true">{state === "submitting" ? "◌" : "→"}</span>
      </button>
      <p className="form-footnote">No card required. We&apos;ll only contact you about Stem Cogent access.</p>
    </form>
  );
}
