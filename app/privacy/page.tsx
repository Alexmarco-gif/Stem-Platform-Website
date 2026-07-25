import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Stem Systems Ltd handles private-access request information.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <article className="legal-page">
      <div className="site-shell legal-shell">
        <p className="eyebrow">Stem Systems Ltd</p>
        <h1>Privacy, in plain language.</h1>
        <p className="legal-intro">
          This notice explains how we handle information submitted through the
          Stem-Cogent private-access form.
        </p>
        <section>
          <h2>What we collect</h2>
          <p>
            We collect your name, work email, role, company name when supplied,
            and any information you choose to include about your decision
            intelligence needs.
          </p>
        </section>
        <section>
          <h2>Why we use it</h2>
          <p>
            We use this information to review fit for early access, understand
            product needs, and contact you about Stem-Cogent. We do not sell
            waitlist information.
          </p>
        </section>
        <section>
          <h2>Retention and requests</h2>
          <p>
            We keep request information only for as long as needed for access
            planning and related communication. To request access, correction,
            or deletion, email <a href="mailto:stemsystem883@gmail.com">stemsystem883@gmail.com</a>.
          </p>
        </section>
        <p className="legal-updated">Last updated: 24 July 2026</p>
      </div>
    </article>
  );
}
