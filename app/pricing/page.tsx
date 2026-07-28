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
    name: "Starter",
    price: "$99",
    annual: "$990 billed annually",
    audience: "Founders, early-stage fintechs, and solo strategy operators",
    features: [
      "3 users",
      "5 monitored entities",
      "90 days of signal history",
      "Full feed, alerts, and daily digest",
      "100 investigation queries / month",
      "Email support"
    ]
  },
  {
    name: "Growth",
    price: "$399",
    annual: "$3,990 billed annually",
    audience: "Scaling fintechs, product teams, and operations leaders",
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
    name: "Professional",
    price: "$999",
    annual: "$9,990 billed annually",
    audience: "Established fintechs, regional operators, and strategy functions",
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
    audience: "Banks, large fintechs, investment firms, and regulators",
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
            <h1>Pay for operational clarity.<br /><em>Not AI theatre.</em></h1>
            <p>
              Every plan includes the full intelligence feed, all signal
              domains, confidence and evidence, and alert delivery. Plans scale
              with team size, monitored entities, history, investigations, and
              integration depth.
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
