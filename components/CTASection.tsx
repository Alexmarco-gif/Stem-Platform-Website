import Link from "next/link";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="cta-section blue-grid">
      <div className="site-shell cta-grid">
        <Reveal>
          <p className="eyebrow eyebrow-light">14-day evaluation · No payment required</p>
          <h2>
            Bring us a real<br />
            decision. <em>Leave with<br />clarity.</em>
          </h2>
          <p className="cta-copy">
            Request access to the founding cohort and evaluate Stem Cogent
            against the signals your team already needs to understand.
          </p>
        </Reveal>
        <Reveal className="cta-action" delay={120}>
          <ul className="check-list">
            <li>3 users and 90 days of signal history</li>
            <li>Priority feed, alerts, and daily digest</li>
            <li>100 grounded investigation queries</li>
          </ul>
          <Link className="button button-light" href="/waitlist">
            Request trial access <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
