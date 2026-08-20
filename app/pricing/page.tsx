import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Stem Cogent pricing for founders, fintech teams, regional operators, banks, and financial-services institutions. Start with a 14-day evaluation.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Stem Cogent Pricing",
    description:
      "Plans for teams that need prioritized feeds, evidence-backed signals, alerts, digests, exports, and intelligence APIs.",
    url: "/pricing"
  }
};

const plans = [
  {
    name: "Individual",
    price: "$149",
    annual: "Monthly subscription",
    audience: "Individual founders and decision-makers",
    features: [
      "1 Decision Lens", "Company Context", "Personal Focus Areas", "Decision Briefs", "Core Nigeria fintech intelligence", "Weekly briefing"
    ]
  },
  {
    name: "Team",
    price: "$499",
    annual: "Monthly subscription",
    audience: "Strategy, product, finance or operations teams",
    featured: true,
    features: [
      "10 users",
      "25 monitored entities",
      "2 years of signal history",
      "Daily and weekly executive digests",
      "1,000 investigation queries / month",
      "PDF and DOCX exports"
    ]
  },
  {
    name: "Company",
    price: "$1,250",
    annual: "Monthly subscription",
    audience: "Cross-functional fintech deployments",
    features: [
      "25 users",
      "100 monitored entities",
      "Unlimited signal history",
      "Priority processing and all digests",
      "5,000 investigation queries / month",
      "Read-only API, webhooks, and 2 custom sources"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    annual: "Annual contract",
    audience: "Larger and regional fintech organisations",
    features: [
      "Unlimited users and entities",
      "Unlimited history and investigations",
      "Full API and webhook access",
      "Custom sources, taxonomies, and feeds",
      "SSO and dedicated onboarding",
      "Dedicated account management and SLA"
    ]
  }
];

export default function PricingPage() {
  return (
    <>
      <section className="pricing-hero page-hero">
        <div className="site-shell pricing-hero-inner">
          <Reveal>
            <p className="eyebrow">Pricing</p>
            <h1>Pay for decision relevance.<br /><em>Not another information feed.</em></h1>
            <p>
              Start with the scope that matches how Stem Cogent will be used inside your fintech.
            </p>
          </Reveal>
          <Reveal className="trial-callout" delay={100}>
            <span>14 days</span>
            <div>
              <h2>Evaluate the full intelligence workflow.</h2>
              <p>
                3 users, 5 companies, 2 regulatory bodies, 90 days of history,
                alerts, a daily digest, and 100 investigation queries. No
                payment method required.
              </p>
            </div>
            <Link className="button button-primary" href="/waitlist">
              Request trial <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="site-shell">
          <Reveal className="pricing-note">
            <p>All prices are in USD. Annual plans include two months free.</p>
            <span>Monthly pricing shown</span>
          </Reveal>
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <Reveal
                className={`price-card ${plan.featured ? "featured" : ""}`}
                key={plan.name}
                delay={index * 65}
              >
                {plan.featured && <div className="plan-badge">Most common starting point</div>}
                <div className="price-card-head">
                  <p className="eyebrow">{plan.name}</p>
                  <div className="price">
                    <strong>{plan.price}</strong>
                    {plan.price.startsWith("$") && <span>/ month</span>}
                  </div>
                  <p className="annual">{plan.annual}</p>
                  <p className="plan-audience">{plan.audience}</p>
                </div>
                <ul>
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <Link
                  className={`button ${plan.featured ? "button-primary" : "button-secondary"}`}
                  href="/waitlist"
                >
                  {plan.name === "Enterprise" ? "Talk to the team" : "Request access"}
                  <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-boundary dark-grid">
        <div className="site-shell truth-grid">
          <Reveal>
            <p className="eyebrow eyebrow-light">One product principle</p>
            <h2>Conversation is a capability. Intelligence is the product.</h2>
          </Reveal>
          <Reveal className="truth-copy" delay={100}>
            <p>
              Plans scale the depth of investigation and delivery, but Stem
              Cogent is never priced or positioned as a chatbot. The value is
              the governed signal infrastructure beneath every response.
            </p>
            <Link className="text-link text-link-light" href="/platform">
              See the full intelligence workflow <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
