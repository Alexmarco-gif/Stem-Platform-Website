import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Decision Intelligence for African Finance",
  description:
    "Stem-Cogent turns regulatory, infrastructure, competitor and market signals into explainable intelligence for financial-services leaders.",
  alternates: { canonical: "/" }
};

const moments = [
  {
    icon: "◎",
    title: "Regulation change",
    text: "New directives and enforcement patterns before they disrupt your roadmap."
  },
  {
    icon: "◌",
    title: "Competitor move",
    text: "Product launches, pricing shifts and partnerships as they unfold."
  },
  {
    icon: "⌁",
    title: "Infrastructure event",
    text: "Payment and network events that affect uptime and customers."
  }
];

const outcomes = [
  {
    title: "A clearer brief before the meeting.",
    text: "Bring the signal, its implications, and the evidence into one decision-ready view."
  },
  {
    title: "Confidence your leadership can interrogate.",
    text: "Every insight carries context and source lineage—so teams can challenge the conclusion, not chase the facts."
  },
  {
    title: "Fewer blind spots. Better timing.",
    text: "See the move early enough to protect a plan, adjust a position, or take the opportunity first."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero dark-grid">
        <div className="hero-glow" />
        <div className="site-shell hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow eyebrow-light">The signal</p>
            <h1>
              What changed<br />
              while you were<br />
              looking <em>elsewhere.</em>
            </h1>
            <p className="hero-lede">
              Stem-Cogent is Nigeria-first intelligence for fintech and
              financial-services leaders. We turn signals others miss into
              validated, explainable intelligence you can act on.
            </p>
            <div className="hero-proof">
              <span>Early</span>
              <span>Explainable</span>
              <span>Decision-ready</span>
            </div>
          </Reveal>
          <Reveal className="brief-card" delay={180}>
            <div className="brief-topline">
              <span>◀ Intelligence brief</span>
              <span>09:42 WAT · 18 MAY 2026</span>
            </div>
            <h2><span>⌁</span> Settlement pattern detected</h2>
            <p>
              Unusual concentration in weekend settlement activity across 3
              acquiring banks and 2 PSPs.
            </p>
            <div className="confidence">
              <span className="data-label">Confidence score</span>
              <div>
                <strong>86<small>/100</small></strong>
                <p><b>High</b><br /><span>↑ 24 pts vs last 7 days</span></p>
              </div>
            </div>
            <div className="lineage">
              <span className="data-label">Source lineage</span>
              <div><span>NIBSS</span><span>CBN</span><span>USSD</span><span>+7</span></div>
            </div>
            <div className="next-move">
              <i aria-hidden="true">→</i>
              <p>
                <span className="data-label">Recommended next move</span>
                Review weekend settlement limits and liquidity buffers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="credibility dark-grid">
        <span>Validated</span><i>·</i>
        <span>Explainable</span><i>·</i>
        <span>Regionally real</span><i>·</i>
        <span>Decision-ready</span>
      </div>

      <section className="section section-light moments">
        <div className="site-shell">
          <Reveal className="section-heading centered">
            <p className="eyebrow">What matters most</p>
            <h2>The decisions that cannot wait.</h2>
            <p>Three intelligence moments that shape outcomes in financial services.</p>
          </Reveal>
          <div className="three-grid">
            {moments.map((moment, index) => (
              <Reveal key={moment.title} className="moment-card" delay={index * 90}>
                <i aria-hidden="true">{moment.icon}</i>
                <h3>{moment.title}</h3>
                <p>{moment.text}</p>
                <Link href="/platform">Explore <span aria-hidden="true">→</span></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section system-section dark-grid">
        <div className="site-shell">
          <Reveal className="section-heading centered inverse">
            <p className="eyebrow eyebrow-light">Our system</p>
            <h2>From signal to decision.</h2>
            <p>A repeatable intelligence system built for Nigeria&apos;s financial ecosystem.</p>
          </Reveal>
          <div className="process-grid">
            {[
              ["1", "Detect", "We scan policy, payments, infrastructure, markets and behaviour."],
              ["2", "Validate", "We validate what matters with source lineage and confidence scoring."],
              ["3", "Act", "You receive clear intelligence briefs built for your context."]
            ].map(([number, title, text], index) => (
              <Reveal className="process-step" key={title} delay={index * 90}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="engine-flow">
            <div className="flow-card">
              <span className="data-label">Signals in</span>
              <ul>
                <li>Market movements</li><li>Policy changes</li>
                <li>Infrastructure events</li><li>Competitor behaviour</li>
              </ul>
            </div>
            <div className="engine">
              <span className="engine-ring"><i /></span>
              <b>Stem-Cogent</b><small>Intelligence engine</small>
            </div>
            <div className="flow-card">
              <span className="data-label">Decision out</span>
              <ul>
                <li>Validated brief</li><li>Confidence score</li>
                <li>Source lineage</li><li>Recommended move</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft outcomes">
        <div className="site-shell">
          <Reveal className="section-heading centered">
            <p className="eyebrow">Built for accountable teams</p>
            <h2>Know what matters. Defend the decision.<br />Move in time.</h2>
            <p>
              A shared intelligence layer before a market change becomes an
              expensive surprise.
            </p>
          </Reveal>
          <div className="three-grid">
            {outcomes.map((outcome, index) => (
              <Reveal className="outcome-card" key={outcome.title} delay={index * 90}>
                <span>0{index + 1}</span>
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
