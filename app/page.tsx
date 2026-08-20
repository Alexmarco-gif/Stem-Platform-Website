import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Decision Intelligence for Nigerian Fintechs",
  description: "Stem Cogent connects verified external changes to your fintech's products, priorities and exposures—then turns what matters into evidence-backed Decision Briefs.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Stem Cogent | Decision Intelligence for Nigerian Fintechs",
    description: "Know which changes matter to your fintech—and what decision they require.",
    url: "/"
  }
};

const value = [
  ["Protect revenue", "Understand when infrastructure failures, competitive moves or customer shifts threaten important products and commercial activity."],
  ["Avoid unnecessary cost", "Identify relevant developments before teams spend time responding to noise or discover requirements late."],
  ["Move products faster", "Connect regulatory and market changes to active products and launches before they become last-minute blockers."],
  ["Reduce decision delay", "Give the responsible leader a clear brief containing the exposure, evidence, decision and time window."]
];

const contexts = [
  ["01", "Company Context", "What does your fintech actually do?", "Products · Markets · Customer segments · Competitors · Dependencies · Regulatory exposure"],
  ["02", "Decision Lens", "What are you responsible for?", "CEO · Strategy · Operations · Finance · Product · Growth · Compliance"],
  ["03", "Focus Areas", "What matters right now?", "A launch · Expansion · A competitor · Merchant profitability · Reliability · Regulation"]
];

export default function HomePage() {
  return <>
    <section className="v2-hero">
      <div className="site-shell v2-hero-grid">
        <Reveal className="v2-hero-copy">
          <p className="eyebrow">Nigeria-first fintech decision intelligence</p>
          <h1>Know what changed.<br />Know why it matters to your fintech.<br /><em>Know what needs deciding.</em></h1>
          <p>Stem Cogent connects regulatory, competitor, infrastructure, customer and market developments to your fintech&apos;s products, priorities and exposures—then turns the changes that matter into evidence-backed Decision Briefs.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/pilot">Request 21-Day Pilot →</Link><Link className="text-link" href="/how-it-works">See how Stem Cogent works →</Link></div>
          <small>Built for fintech founders, strategy, operations, finance and product teams.</small>
        </Reveal>
        <Reveal className="decision-preview" delay={120}>
          <div className="preview-greeting"><span>Good morning, Tunde</span><b>3 decisions require your attention</b></div>
          <div className="preview-brief"><p className="priority">REGULATORY · HIGH PRIORITY</p><h2>CBN issues new requirement affecting wallet onboarding</h2><div><b>Why this matters to you</b><p>Your company operates a wallet product in Nigeria and has product onboarding configured as a current focus area.</p></div><p className="tags">Affected Product · Onboarding · Nigeria</p><div><b>Decision required</b><p>Determine whether the planned onboarding release requires modification before implementation.</p></div><footer><span>Evidence: CBN · Official source</span><strong>Confidence: High</strong></footer><button>Open Decision Brief</button><button className="quiet">Investigate</button></div>
        </Reveal>
      </div>
    </section>

    <section className="section v2-problem"><div className="site-shell split-grid"><Reveal><p className="eyebrow">The real problem</p><h2>Your fintech already has information.<br />The expensive part is knowing when it requires a decision.</h2><p>Regulatory updates arrive. Competitors move. Payment infrastructure fails. Customer behaviour changes. Markets shift.</p><p>Dashboards explain what is happening inside your company. The difficult part is connecting that to the outside world quickly enough to know whether it affects you.</p></Reveal><Reveal className="question-flow" delay={100}>{["What changed", "Does it matter to us?", "What is exposed?", "What is at stake?", "What needs deciding?"].map((item) => <div key={item}>{item}<span>↓</span></div>)}</Reveal></div></section>

    <section className="section section-soft"><div className="site-shell"><Reveal className="section-heading"><p className="eyebrow">Why teams pay</p><h2>Intelligence becomes valuable when something is at stake.</h2></Reveal><div className="four-grid">{value.map(([title, text], i) => <Reveal className="value-card" key={title} delay={i * 70}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div><Reveal><p className="commercial-line">Stem Cogent is not priced around how much information it gives you. It is built around the decisions that information affects.</p></Reveal></div></section>

    <section className="section signal-section"><div className="site-shell"><Reveal className="section-heading centered"><p className="eyebrow">Information vs relevance</p><h2>A signal is not a decision.</h2></Reveal><div className="signal-contrast"><Reveal><span>What everyone can see</span><h3>CBN releases a new circular.</h3><p>Google can find it. AI can summarize it. Your compliance team can read it.</p></Reveal><i>↓</i><Reveal><span>What Stem Cogent works toward</span><h3>This requirement relates to a product you operate, affects an active priority, has an implementation window and creates a decision for Product + Compliance.</h3></Reveal></div><p className="center-note">That&apos;s the difference between information and decision relevance.</p></div></section>

    <section className="section context-section"><div className="site-shell"><Reveal className="section-heading centered"><p className="eyebrow">Your fintech. Your role. Your priorities.</p><h2>The same market event should not look the same to everyone.</h2><p>Stem Cogent combines three layers of context before deciding what deserves your attention.</p></Reveal><div className="three-grid">{contexts.map(([no, title, question, details], i) => <Reveal className="context-card" key={title} delay={i * 80}><span>{no}</span><h3>{title}</h3><b>{question}</b><p>{details}</p></Reveal>)}</div><Reveal className="relevance-equation">Company Context <b>×</b> Decision Lens <b>×</b> Live Signals <strong>= Decision Relevance</strong></Reveal></div></section>

    <section className="section role-lenses"><div className="site-shell"><Reveal className="section-heading"><p className="eyebrow">One event. Four perspectives.</p><h2>Payment infrastructure degradation detected.</h2><p>Relevance changes with the responsibility of the person looking at it.</p></Reveal><div className="four-grid">{[["CFO Lens","Financial exposure","Transaction economics and failed-payment volume."],["COO Lens","Operational exposure","Payment reliability and routing continuity."],["Product Lens","Experience exposure","Checkout performance and merchant experience."],["CEO Lens","Executive exposure","Revenue continuity and customer trust."]].map(([lens,title,copy],i)=><Reveal className="lens-card" key={lens} delay={i*60}><span>{lens}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div><p className="commercial-line">One verified event. Different relevance for different responsibilities.</p></div></section>

    <section className="section section-soft"><div className="site-shell brief-showcase"><Reveal><p className="eyebrow">The core product unit</p><h2>Every important development becomes a Decision Brief.</h2><p>A brief connects verified evidence to your business exposure, the question someone must resolve and the time available to resolve it.</p><Link className="text-link" href="/product">Explore the product →</Link></Reveal><Reveal className="brief-anatomy" delay={100}>{[["What changed","A concise, verified event."],["Why it matters to you","Company Context + Decision Lens."],["What’s affected","Products · markets · dependencies · initiatives."],["What’s at stake","Revenue · cost · customer · regulation · execution."],["Decision required","The question someone needs to resolve."],["Decision window","Now · 7 days · deadline · monitor threshold."],["Evidence","Sources · confidence · corroboration · history."],["Ownership","Suggested function—not an autonomous assignment."]].map(([a,b])=><div key={a}><b>{a}</b><span>{b}</span></div>)}<footer>✓ Decision remains human-owned</footer></Reveal></div></section>

    <section className="section"><div className="site-shell"><Reveal className="section-heading"><p className="eyebrow">External change, business consequence</p><h2>Built around changes that create expensive fintech decisions.</h2></Reveal><div className="feature-list">{[["Regulatory change","Which products, launches, markets or workflows are affected?"],["Infrastructure disruption","Which products or customer experiences depend on it?"],["Competitive movement","Does this move threaten something we actually care about?"],["Customer & market change","Is there enough evidence to reconsider product, pricing or growth?"],["Expansion signals","Has something changed where or when we should enter a market?"]].map(([a,b])=><article key={a}><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>

    <section className="section trust-section"><div className="site-shell split-grid"><Reveal><p className="eyebrow">Built for trust</p><h2>AI can write the brief.<br /><em>It does not get to invent the truth.</em></h2></Reveal><Reveal><p>Stem Cogent separates evidence from explanation. Signals are sourced, validated, classified and connected before language models make the intelligence easier to understand.</p><div className="trust-list">{["Verified sources", "Visible evidence", "Explicit confidence", "Human-owned decisions"].map(x => <span key={x}>{x}</span>)}</div></Reveal></div></section>
    <CTASection />
  </>;
}
