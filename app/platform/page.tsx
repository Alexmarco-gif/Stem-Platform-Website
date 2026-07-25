import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "See how Stem-Cogent synthesizes signals, explains confidence and delivers decision-ready responses for African finance.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "The Stem-Cogent Intelligence Platform",
    description:
      "From scattered signals to explainable, decision-ready intelligence.",
    url: "/platform"
  }
};

const capabilities = [
  {
    title: "Signal synthesis",
    text: "Bring regulatory, infrastructure, competitor, consumer, and market signals into one operating view."
  },
  {
    title: "Explainable confidence",
    text: "Every insight carries a confidence score, source lineage, and temporal context your team can interrogate."
  },
  {
    title: "Actionable response",
    text: "Move from fragmented information to decision-ready recommendations before the window closes."
  }
];

export default function PlatformPage() {
  return (
    <>
      <section className="page-hero platform-hero">
        <div className="site-shell platform-intro">
          <Reveal>
            <p className="eyebrow">The platform</p>
            <h1>
              Intelligence<br />with <em>operational<br />context.</em>
            </h1>
            <p>
              Designed around the market realities that define African
              financial services—not generic global assumptions.
            </p>
          </Reveal>
          <div className="capability-list">
            {capabilities.map((capability, index) => (
              <Reveal className="capability" key={capability.title} delay={index * 80}>
                <span>0{index + 1}</span>
                <div>
                  <h2>{capability.title}</h2>
                  <p>{capability.text}</p>
                </div>
                <i aria-hidden="true">↗</i>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section intelligence-os dark-grid">
        <div className="site-shell os-grid">
          <Reveal className="os-copy">
            <p className="eyebrow eyebrow-light">An intelligence operating system</p>
            <h2>Not more data.<br /><em>More certainty.</em></h2>
            <p>
              Turn noisy, time-sensitive market movements into a shared basis
              for product, growth, operations, and strategy decisions.
            </p>
          </Reveal>
          <Reveal className="signal-table" delay={120}>
            <div className="signal-row signal-head">
              <span>Source</span><span>Signal</span><span>Priority</span><span>Confidence</span>
            </div>
            {[
              ["CBN", "Policy signal", "High", "92%"],
              ["NIBSS", "Settlement stability", "Monitor", "86%"],
              ["Market", "Competitor movement", "High", "88%"]
            ].map((row, index) => (
              <div className="signal-row" key={row[0]}>
                <strong><i className={`status-dot status-${index}`} />{row[0]}</strong>
                <span>{row[1]}</span>
                <span className={row[2] === "Monitor" ? "monitor" : "high"}>{row[2]}</span>
                <b>{row[3]}</b>
              </div>
            ))}
            <div className="signal-foot">
              <span>Signal field updated continuously</span>
              <span>Open intelligence map →</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section briefs-section">
        <div className="site-shell">
          <Reveal className="centered">
            <p className="eyebrow">What arrives with every brief</p>
          </Reveal>
          <div className="three-grid brief-grid">
            {[
              ["What changed", "A focused account of the movement that deserves attention."],
              ["Why it matters", "Evidence, local context, and a confidence level your team can question."],
              ["What to do next", "A decision-ready prompt designed for your operating reality."]
            ].map(([title, text], index) => (
              <Reveal className="brief-output" key={title} delay={index * 90}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
