import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata={title:"How Stem Cogent Works",description:"Company Context, Decision Lens and verified signals become evidence-backed Decision Briefs—while decisions remain human-owned.",alternates:{canonical:"/how-it-works"},openGraph:{title:"How Stem Cogent Works",description:"Stem Cogent starts with context and evidence, not AI.",url:"/how-it-works"}};
const steps=[
  ["Understand your fintech","Company Context","Products, markets, customers, competitors, dependencies and regulatory exposure."],
  ["Understand your responsibility","Decision Lens","What you own and how you need to see external events."],
  ["Know what you’re watching","Focus Areas","The priorities, launches and operating concerns that matter now."],
  ["Monitor the environment","Live signals","Regulators, competitors, infrastructure and customer or market sources."],
  ["Verify and contextualise","Evidence","Source trust, corroboration, entities and historical context."],
  ["Determine relevance","Connection","Link the signal to this company and this responsible person."],
  ["Surface business exposure","Exposure","Product, market, dependency, customer segment or initiative."],
  ["Build the Decision Brief","Decision","Stakes, the question to resolve, evidence and time window."],
  ["Human decides","Ownership","Watch, escalate, act or dismiss. Stem does not make the final call."],
  ["Improve from feedback","Refinement","Feedback improves configuration and informs later product refinement."]
];
export default function HowItWorksPage(){return <>
  <section className="v2-page-hero"><div className="site-shell"><Reveal><p className="eyebrow">How it works</p><h1>Stem Cogent does not start with AI.<br/><span className="accent">It starts with context and evidence.</span></h1><p>Language models help explain the intelligence only after signals have been sourced, verified, classified and connected.</p></Reveal></div></section>
  <section className="section"><div className="site-shell"><Reveal className="relevance-formula"><span>Company Context</span><b>×</b><span>Decision Lens</span><b>×</b><span>Live Signals</span><strong>Decision Relevance</strong></Reveal><div className="pipeline">{steps.map(([title,label,text],i)=><Reveal key={title} delay={i*30}><article><span>{String(i+1).padStart(2,"0")}</span><div><p>{label}</p><h2>{title}</h2><small>{text}</small></div></article></Reveal>)}</div></div></section>
  <section className="section trust-section"><div className="site-shell split-grid"><Reveal><p className="eyebrow">The trust boundary</p><h2>Evidence and explanation stay separate.</h2></Reveal><Reveal><p>Recommendations remain evidence-linked. Confidence and uncertainty remain explicit. Suggested ownership never becomes autonomous assignment.</p><div className="trust-list">{["Verified sources","Visible evidence","Explicit confidence","Human-owned decisions"].map(x=><span key={x}>{x}</span>)}</div></Reveal></div></section>
  <CTASection />
</>}
