import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Product — Decision Briefs for Nigerian Fintechs",
  description: "See how Stem Cogent turns verified Nigerian fintech developments into personalised, evidence-backed Decision Briefs.",
  alternates: { canonical: "/product" },
  openGraph: { title: "Stem Cogent Product", description: "From market change to a decision your fintech team can act on.", url: "/product" }
};

const briefSections = ["What changed", "Why it matters", "Affected areas", "What’s at stake", "Decision required", "Decision window", "Evidence", "Historical context"];
const focusAreas = ["Kenya expansion", "Merchant pricing", "Monitor Moniepoint", "New credit product", "Payment reliability"];

export default function ProductPage() {
  return <>
    <section className="v2-page-hero"><div className="site-shell"><Reveal>
      <p className="eyebrow">Product</p>
      <h1>From market change to a decision your team can act on.</h1>
      <p>Stem Cogent continuously watches the Nigerian fintech environment, verifies important developments, connects them to your company&apos;s context and turns relevant changes into Decision Briefs.</p>
    </Reveal></div></section>

    <section className="section"><div className="site-shell product-story">
      <Reveal><p className="eyebrow">My Decision Briefing</p><h2>Your default workspace is not a news feed.</h2><p>It is a prioritised view of the developments most relevant to your responsibility.</p></Reveal>
      <Reveal className="workspace-ui" delay={100}>
        <header><b>My Decision Briefing</b><span>Updated 08:30 WAT</span></header>
        {[["Requires Your Attention","3"],["Watching","7"],["Recently Resolved","4"],["Wider Intelligence","128"]].map(([label,count],i)=><div className={i===0?"active":""} key={label}><span>{label}</span><b>{count}</b></div>)}
      </Reveal>
    </div></section>

    <section className="section section-soft"><div className="site-shell product-story reverse">
      <Reveal className="product-brief-ui">
        <p className="priority">REGULATORY · HIGH PRIORITY</p><h3>Wallet onboarding requirement creates a release decision</h3>
        <div className="brief-fields">{briefSections.map((item,i)=><span key={item}><b>{item}</b><small>{i===4?"Does the planned release need modification?":"Context and evidence visible in the brief"}</small></span>)}</div>
        <footer>✓ Decision remains human-owned</footer>
      </Reveal>
      <Reveal><p className="eyebrow">Decision Briefs</p><h2>The core unit of Stem Cogent.</h2><p>Every brief makes the connection between evidence, business exposure and a decision explicit—without pretending the system owns the final call.</p></Reveal>
    </div></section>

    <section className="section"><div className="site-shell"><Reveal className="section-heading"><p className="eyebrow">Personal relevance</p><h2>Company Lens, Decision Lens and Focus Areas work together.</h2></Reveal><div className="three-grid">
      <article className="context-card"><span>01</span><h3>Company Lens</h3><p>See cross-functional exposure across the whole fintech. Useful for CEOs and strategy leaders monitoring what crosses team boundaries.</p></article>
      <article className="context-card"><span>02</span><h3>Decision Lens</h3><p>Shape relevance around the responsibility you own while retaining the same shared Company Context and evidence.</p></article>
      <article className="context-card"><span>03</span><h3>Focus Areas</h3><p>Tell Stem Cogent what matters now—not only what your company generally does.</p><div className="focus-chips">{focusAreas.map(x=><span key={x}>{x}</span>)}</div></article>
    </div></div></section>

    <section className="section intelligence-section"><div className="site-shell product-story">
      <Reveal><p className="eyebrow">Wider Intelligence</p><h2>Investigate beyond your personalised briefing.</h2><p>Explore the larger Nigerian fintech signal environment across regulatory, competitive, infrastructure, market and consumer developments.</p><div className="focus-chips light">{["Regulatory","Competitive","Infrastructure","Market","Consumer"].map(x=><span key={x}>{x}</span>)}</div></Reveal>
      <Reveal className="cogent-panel"><p className="eyebrow">Cogent Intelligence Layer</p><h3>Investigate without starting from a blank chat box.</h3><p>Open Cogent from a Decision Brief, company or signal. The system begins with the evidence and context already associated with that issue.</p>{["Why was this marked relevant to me?","Which competitors are affected?","What evidence supports this assessment?","What remains uncertain?"].map(x=><button key={x}>{x}<span>→</span></button>)}</Reveal>
    </div></section>
    <CTASection />
  </>;
}
