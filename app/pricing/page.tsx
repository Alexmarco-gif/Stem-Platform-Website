import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Pricing", description: "Pay for decision relevance, not another information feed. Stem Cogent plans start at $149 per month, with a guided 21-day pilot.", alternates: { canonical: "/pricing" } };

const plans = [
  { name:"Individual", price:"$149", audience:"For individual founders and decision-makers.", cta:"Start Individual Pilot", features:["1 Decision Lens","Company Context","Personal Focus Areas","Decision Briefs","Core Nigeria fintech intelligence","Alerts and weekly briefing","Cogent investigation"] },
  { name:"Team", price:"$499", audience:"For strategy, product, finance or operations teams.", cta:"Request Team Pilot", featured:true, features:["Everything in Individual","Multiple Decision Lenses","Shared Company Context and Focus Areas","Team Decision Briefs","Escalation and status workflow","Larger entity watchlists","Team digests"] },
  { name:"Company", price:"$1,250", audience:"For cross-functional fintech deployments.", cta:"Request Company Pilot", features:["Everything in Team","Company Lens","Cross-functional intelligence","Private document context","Higher user limits","Expanded watchlists and priority support","Company-level value reporting"] },
  { name:"Enterprise", price:"Custom", audience:"For larger and regional fintech organisations.", cta:"Talk to Stem", features:["Custom data sources","SSO and API","Advanced integrations","Custom taxonomy and SLA","Dedicated onboarding","Regional intelligence packages"] }
];

export default function PricingPage(){return <>
  <section className="v2-page-hero"><div className="site-shell"><Reveal><p className="eyebrow">Pricing</p><h1>Pay for decision relevance.<br/><span className="accent">Not another information feed.</span></h1><p>Start with the scope that matches how Stem Cogent will be used inside your fintech.</p></Reveal></div></section>
  <section className="section"><div className="site-shell"><div className="pricing-grid v2-pricing">{plans.map((plan,i)=><Reveal className={`price-card ${plan.featured?"featured":""}`} key={plan.name} delay={i*60}>{plan.featured&&<div className="plan-badge">Recommended</div>}<p className="eyebrow">{plan.name}</p><div className="price"><strong>{plan.price}</strong>{plan.price.startsWith("$")&&<span>/ month</span>}</div><p className="plan-audience">{plan.audience}</p><ul>{plan.features.map(x=><li key={x}>{x}</li>)}</ul><Link className={`button ${plan.featured?"button-primary":"button-secondary"}`} href="/pilot">{plan.cta} <span>→</span></Link></Reveal>)}</div></div></section>
  <section className="section section-soft"><div className="site-shell split-grid"><Reveal><p className="eyebrow">Not sure where to start?</p><h2>Test Stem against one real operating priority.</h2></Reveal><Reveal><p>Start with the 21-day guided pilot. We&apos;ll configure your Company Context and Decision Lens around a decision your fintech already cares about.</p><Link className="button button-primary" href="/pilot">Request 21-Day Pilot →</Link></Reveal></div></section>
  </>}
