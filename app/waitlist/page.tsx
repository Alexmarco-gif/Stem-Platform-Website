import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Request private access to Stem-Cogent and help shape decision intelligence for African financial services.",
  alternates: { canonical: "/waitlist" },
  openGraph: {
    title: "Join the Stem-Cogent Private Waitlist",
    description: "Get early access, influence the product, and receive priority onboarding.",
    url: "/waitlist"
  }
};

export default function WaitlistPage() {
  return (
    <section className="waitlist-page blue-grid">
      <div className="site-shell waitlist-grid">
        <Reveal className="waitlist-copy">
          <p className="eyebrow eyebrow-light">Private access · Launching soon</p>
          <h1>Make your next<br />move <em>the informed<br />one.</em></h1>
          <p>
            We are opening Stem-Cogent carefully to strategy, growth, product,
            operations and risk teams across African financial services.
          </p>
          <ul className="check-list">
            <li>See meaningful changes before they become obvious</li>
            <li>Understand confidence, evidence and source lineage</li>
            <li>Shape the product around your operating reality</li>
          </ul>
          <div className="access-note">
            <span>01</span>
            <p><b>Limited founding cohort</b><br />Every request is reviewed by the team.</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <WaitlistForm />
        </Reveal>
      </div>
    </section>
  );
}
