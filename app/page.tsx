import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { IntelligenceStack } from "@/components/IntelligenceStack";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Decision Intelligence for Nigerian Financial Services",
  description:
    "Stem Cogent converts fragmented regulatory, competitive, infrastructure, consumer, and market signals into validated, explainable intelligence for Nigerian financial-services teams.",
  alternates: { canonical: "/" }
};

const problems = [
  {
    icon: "⌁",
    title: "Signals live in different places",
    text: "Circulars, status pages, app reviews, announcements, news, and internal research rarely arrive in one usable view."
  },
  {
    icon: "◎",
    title: "Generic tools miss local reality",
    text: "CBN policy cycles, NIBSS events, USSD dependencies, telco relationships, and informal distribution change how signals should be read."
  },
  {
    icon: "◌",
    title: "Recent is not the same as important",
    text: "Without importance, urgency, corroboration, and source quality, teams cannot separate a meaningful shift from market noise."
  }
];

const workflows = [
  {
    title: "Start the day with priorities.",
    text: "A ranked intelligence feed shows the signals that deserve attention, with confidence, source count, domain, and time context."
  },
  {
    title: "Investigate before you escalate.",
    text: "Open a signal dossier to inspect evidence, affected entities, related events, historical precedent, and the reasoning behind a recommended action."
  },
  {
    title: "Respond while the window is open.",
    text: "Use event-driven alerts and role-specific digests to move regulatory, competitive, and operational signals into the right team quickly."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero dark-grid">
        <div className="hero-glow" />
        <div className="site-shell hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow eyebrow-light">Nigeria-first decision intelligence</p>
            <h1>
              Turn market<br />
              movement into<br />
              decisions <em>you can defend.</em>
            </h1>
            <p className="hero-lede">
              Stem Cogent converts fragmented regulatory, competitive,
              infrastructure, consumer, macroeconomic, and operational signals
              into validated intelligence—prioritized for the decision in front
              of you.
            </p>
            <div className="hero-proof">
              <span>Prioritized</span>
              <span>Explainable</span>
              <span>Evidence-linked</span>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={180}>
            <IntelligenceStack />
          </Reveal>
        </div>
      </section>

      <div className="credibility dark-grid">
        <span>Deterministic scoring</span><i>·</i>
        <span>Traceable evidence</span><i>·</i>
        <span>Human-owned decisions</span><i>·</i>
        <span>Local context</span>
      </div>

      <section className="section section-light moments">
        <div className="site-shell">
          <Reveal className="section-heading centered">
            <p className="eyebrow">The operating problem</p>
            <h2>Your team does not need more information.</h2>
            <p>It needs a reliable way to know what matters, why, and how quickly to respond.</p>
          </Reveal>
          <div className="three-grid">
            {problems.map((problem, index) => (
              <Reveal key={problem.title} className="moment-card" delay={index * 90}>
                <i aria-hidden="true">{problem.icon}</i>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
                <Link href="/platform">See how it works <span aria-hidden="true">→</span></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section system-section dark-grid">
        <div className="site-shell">
          <Reveal className="section-heading centered inverse">
            <p className="eyebrow eyebrow-light">The intelligence operating system</p>
            <h2>From registered signal to accountable action.</h2>
            <p>One repeatable system for acquiring, validating, contextualizing, and delivering market intelligence.</p>
          </Reveal>
          <div className="process-grid">
            {[
              ["1", "Acquire", "Continuously collect structured and unstructured signals from registered, governed sources."],
              ["2", "Validate", "Classify, corroborate, score, deduplicate, and connect each signal to entities and history."],
              ["3", "Deliver", "Rank intelligence into feeds, dossiers, alerts, digests, and grounded investigations."]
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
                <li>Regulatory documents</li>
                <li>Competitor activity</li>
                <li>Infrastructure events</li>
                <li>Consumer and market signals</li>
              </ul>
            </div>
            <div className="engine">
              <span className="engine-ring"><i /></span>
              <b>Stem Cogent</b><small>Decision intelligence</small>
            </div>
            <div className="flow-card">
              <span className="data-label">Intelligence out</span>
              <ul>
                <li>Priority feed and dossiers</li>
                <li>Confidence and evidence</li>
                <li>Alerts and executive digests</li>
                <li>Recommended next action</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft outcomes">
        <div className="site-shell">
          <Reveal className="section-heading centered">
            <p className="eyebrow">Built around real workflows</p>
            <h2>Monitor passively. Investigate actively.<br />Move deliberately.</h2>
            <p>
              From the first scan of the day to a regulatory escalation or
              competitor briefing, the evidence stays attached.
            </p>
          </Reveal>
          <div className="three-grid">
            {workflows.map((workflow, index) => (
              <Reveal className="outcome-card" key={workflow.title} delay={index * 90}>
                <span>0{index + 1}</span>
                <h3>{workflow.title}</h3>
                <p>{workflow.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section truth-section">
        <div className="site-shell truth-grid">
          <Reveal>
            <p className="eyebrow">A hard product boundary</p>
            <h2>The model writes the brief. It does not decide what is true.</h2>
          </Reveal>
          <Reveal className="truth-copy" delay={100}>
            <p>
              Importance, urgency, confidence, and recommendations are produced
              by deterministic scoring and rule systems. Language models are
              constrained to grounded synthesis and readable explanation.
            </p>
            <p>
              Every claim must map back to supplied evidence. Every decision
              remains owned by a person.
            </p>
            <Link className="text-link" href="/platform">
              Explore the evidence model <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
