import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Solutions by Fintech Role", description: "Configure Stem Cogent for founders, strategy, operations, finance and product leaders.", alternates:{canonical:"/solutions"}, openGraph:{title:"Stem Cogent Solutions",description:"One external environment. Relevance shaped for each fintech decision-maker.",url:"/solutions"} };
const roles = [
  {id:"ceo", role:"CEO / Founder", headline:"Know what deserves executive attention before it reaches the strategy meeting.", focus:["Strategic risk","Revenue exposure","Major competitor moves","Expansion","Regulatory consequences","Critical infrastructure"]},
  {id:"strategy", role:"CSO / Strategy", headline:"Turn market movement into strategic questions worth answering.", focus:["Competitor direction","Expansion","Partnerships","Market structure","Category shifts","Regulatory consequences"]},
  {id:"operations", role:"COO", headline:"See external events through operational exposure.", focus:["Infrastructure","Partner issues","Payment rails","Operational deadlines","Customer-impacting disruption"]},
  {id:"finance", role:"CFO", headline:"Connect external change to the economics it can affect.", focus:["Pricing","Margin","Transaction economics","FX","Partner costs","Capital and funding"]},
  {id:"product", role:"Product", headline:"Know when the market actually deserves roadmap attention.", focus:["Competitor features","Regulatory constraints","Customer signals","Infrastructure UX","Launch blockers","Adoption shifts"]}
];
export default function SolutionsPage(){return <>
  <section className="v2-page-hero"><div className="site-shell"><Reveal><p className="eyebrow">Solutions</p><h1>Stem Cogent changes with the decision-maker.</h1><p>Your company shares one external environment. Your responsibilities inside it are different.</p></Reveal></div></section>
  <section className="section"><div className="site-shell"><nav className="role-jump" aria-label="Choose a role">{roles.map(x=><a href={`#${x.id}`} key={x.id}>{x.role}</a>)}</nav><div className="solution-roles">{roles.map((item,i)=><Reveal className="solution-role" key={item.id} delay={i*40}><article id={item.id}><div><p className="eyebrow">{String(i+1).padStart(2,"0")} · {item.role}</p><h2>{item.headline}</h2><Link className="text-link" href="/pilot">Configure {item.role.split(" /")[0]} Lens →</Link></div><ul>{item.focus.map(x=><li key={x}>{x}</li>)}</ul></article></Reveal>)}</div><Reveal className="finance-boundary"><b>A clear financial boundary</b><p>Where internal financial data is not connected, Stem Cogent identifies the type of financial exposure without fabricating a monetary value.</p></Reveal></div></section>
  <CTASection />
</>}
