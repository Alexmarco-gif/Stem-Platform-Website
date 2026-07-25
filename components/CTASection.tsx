import Link from "next/link";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="cta-section blue-grid">
      <div className="site-shell cta-grid">
        <Reveal>
          <p className="eyebrow eyebrow-light">Private access · Launching soon</p>
          <h2>
            Make your next<br />
            move <em>the informed<br />one.</em>
          </h2>
          <p className="cta-copy">
            Join the Stem-Cogent waitlist for early platform access and launch
            updates.
          </p>
        </Reveal>
        <Reveal className="cta-action" delay={120}>
          <ul className="check-list">
            <li>Early access to the platform</li>
            <li>Shape features with your input</li>
            <li>Priority onboarding</li>
          </ul>
          <Link className="button button-light" href="/waitlist">
            Become a founding customer <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
