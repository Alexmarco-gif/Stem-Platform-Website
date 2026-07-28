import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Decision Intelligence Platform",
  description:
    "Explore Stem Cogent's priority feed, signal dossiers, entity intelligence, alerts, digests, deterministic confidence scoring, and grounded investigation layer.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "Stem Cogent Decision Intelligence Platform",
    description:
      "A Nigeria-first operating system for validated, explainable, decision-ready market intelligence.",
    url: "/platform"
  }
};

const capabilities = [
  {
    title: "Prioritize the signal",
    text: "Rank market events by importance and urgency so the newest item does not automatically become the loudest."
  },
  {
    title: "Interrogate the evidence",
    text: "Inspect confidence factors, corroborating sources, affected entities, historical context, and related signals."
  },
  {
    title: "Move with a next action",
    text: "Receive rule-grounded recommendations, timely alerts, and executive delivery formats built for the responsible team."
  }
];

const dossier = [
  {
    title: "What changed",
    text: "A concise account of the event, its domain, urgency, affected entities, and time-sensitive conditions."
  },
  {
    title: "Why it is credible",
    text: "Source reliability, corroboration, recency, entity resolution, classification quality, and linked evidence."
  },
  {
    title: "What it connects to",
    text: "Historical precedents, related signal clusters, emerging trends, and relationships across the entity graph."
  },
  {
    title: "What to do next",
    text: "A decision prompt produced by configurable rules and expressed in clear operational language."
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
              The operating system<br />for <em>market<br />intelligence.</em>
            </h1>
            <p>
              Stem Cogent is a market-facing intelligence layer—not an internal
              analytics dashboard. It continuously turns governed external
              signals into evidence-backed operational clarity.
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
            <p className="eyebrow eyebrow-light">Today&apos;s priority intelligence</p>
            <h2>Not a stream of news.<br /><em>A ranked field of action.</em></h2>
            <p>
              Every signal carries a domain, evidence trail, confidence score,
              source count, recency, and urgency—so teams can scan quickly
              without surrendering the detail.
            </p>
          </Reveal>
          <Reveal className="signal-table" delay={120}>
            <div className="signal-row signal-head">
              <span>Source</span><span>Signal</span><span>Priority</span><span>Confidence</span>
            </div>
            {[
              ["CBN", "Regulatory directive", "Critical", "97%"],
              ["NIBSS", "Settlement stability", "Monitor", "86%"],
              ["Market", "Competitor expansion", "High", "88%"]
            ].map((row, index) => (
              <div className="signal-row" key={row[0]}>
                <strong><i className={`status-dot status-${index}`} />{row[0]}</strong>
                <span>{row[1]}</span>
                <span className={row[2] === "Monitor" ? "monitor" : "high"}>{row[2]}</span>
                <b>{row[3]}</b>
              </div>
            ))}
            <div className="signal-foot">
              <span>Illustrative priority feed</span>
              <span>Open signal dossier →</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section briefs-section">
        <div className="site-shell">
          <Reveal className="section-heading centered">
            <p className="eyebrow">A complete signal dossier</p>
            <h2>Follow the conclusion back to its evidence.</h2>
            <p>The summary is the beginning of the intelligence—not the end of it.</p>
          </Reveal>
          <div className="four-grid dossier-grid">
            {dossier.map((item, index) => (
              <Reveal className="brief-output" key={item.title} delay={index * 75}>
                <span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cil-section">
        <div className="site-shell cil-grid">
          <Reveal className="cil-copy">
            <p className="eyebrow">Conversational Intelligence Layer</p>
            <h2>Investigate the signal. Do not chat around it.</h2>
            <p>
              CIL is a retrieval-first analyst interface grounded in Stem
              Cogent&apos;s signal store. Open it from a signal or entity, ask a
              scoped question, and receive an evidence-linked response with a
              confidence indicator.
            </p>
            <div className="scope-tags">
              <span>Signal investigation</span>
              <span>Historical analysis</span>
              <span>Competitor intelligence</span>
              <span>Regulatory inquiry</span>
              <span>Trend analysis</span>
              <span>Recommendation explanation</span>
            </div>
            <p className="scope-note">
              It is not a general chatbot and does not provide financial,
              investment, legal, or open-ended general-knowledge advice.
            </p>
          </Reveal>
          <Reveal className="cil-panel" delay={120}>
            <div className="cil-panel-top">
              <span>Signal-anchored investigation</span>
              <b>Evidence scope: 12 signals</b>
            </div>
            <div className="query-bubble">
              How does this directive compare with the 2022 enforcement pattern?
            </div>
            <div className="answer-block">
              <span className="data-label">Grounded response</span>
              <p>
                The current directive has a shorter operational window, while
                the earlier pattern shows enforcement following a staged notice
                period. Two historical signals support the comparison.
              </p>
              <div className="citation-row">
                <span>[1] Regulatory signal</span>
                <span>[2] Enforcement timeline</span>
              </div>
            </div>
            <div className="cil-confidence">
              <span>Response confidence</span><strong>High · 91%</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section delivery-section section-soft">
        <div className="site-shell">
          <Reveal className="section-heading centered">
            <p className="eyebrow">Intelligence where the work happens</p>
            <h2>Scan, investigate, receive, and share.</h2>
          </Reveal>
          <div className="three-grid">
            {[
              ["Priority dashboard", "A live, filterable feed organized by domain, entity, urgency, confidence, and recency."],
              ["Alerts and digests", "Critical and high-priority alerts for subscribed teams, plus daily, weekly, and regulatory delivery formats."],
              ["Entity intelligence", "Thirty-day activity, strategic movement, operational risk, relationships, and historical timelines for companies and institutions."]
            ].map(([title, text], index) => (
              <Reveal className="outcome-card" key={title} delay={index * 90}>
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
