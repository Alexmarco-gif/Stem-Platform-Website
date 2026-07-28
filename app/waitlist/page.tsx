import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Request Trial Access",
  description:
    "Request a 14-day Stem Cogent evaluation with priority intelligence, alerts, daily digests, 90 days of history, and grounded investigations.",
  alternates: { canonical: "/waitlist" },
  openGraph: {
    title: "Request a 14-Day Stem Cogent Evaluation",
    description: "Evaluate Stem Cogent against a real regulatory, competitive, or operational intelligence need.",
    url: "/waitlist"
  }
};

export default function WaitlistPage() {
  return (
    <section className="waitlist-page blue-grid">
      <div className="site-shell waitlist-grid">
        <Reveal className="waitlist-copy">
          <p className="eyebrow eyebrow-light">Founding cohort · 14-day evaluation</p>
          <h1>Test the platform<br />against a <em>real<br />decision.</em></h1>
          <p>
            Stem Cogent is opening carefully to fintech and financial-services
            teams with an active regulatory, competitor, infrastructure,
            expansion, or market-intelligence need.
          </p>
          <ul className="check-list">
            <li>3 users and 90 days of signal history</li>
            <li>5 companies and 2 regulatory bodies on your watchlist</li>
            <li>Full intelligence feed, alerts, and daily digest</li>
            <li>100 grounded investigation queries</li>
          </ul>
          <div className="access-note">
            <span>01</span>
            <p><b>No payment method required</b><br />Every request is reviewed for operating fit.</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <WaitlistForm />
        </Reveal>
      </div>
    </section>
  );
}
