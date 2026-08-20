import Link from "next/link";
import { Reveal } from "./Reveal";

export function CTASection() {
  return <section className="cta-section"><div className="site-shell cta-grid">
    <Reveal><p className="eyebrow eyebrow-light">Founding pilot</p><h2>Don&apos;t evaluate Stem Cogent with a demo.<br /><em>Bring us a real decision.</em></h2><p className="cta-copy">Join with a real fintech priority, competitor, product, infrastructure dependency or regulatory concern.</p></Reveal>
    <Reveal className="cta-action" delay={100}><p>We will configure your Company Context and Decision Lens, then let you evaluate Stem Cogent against developments that actually matter to your work.</p><Link className="button button-light" href="/pilot">Request 21-Day Pilot <span aria-hidden="true">→</span></Link><small>Guided onboarding · No long-term commitment · Nigeria-first coverage</small></Reveal>
  </div></section>;
}
