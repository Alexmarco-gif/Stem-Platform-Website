import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Stem Cogent",
  description:
    "Stem Systems Ltd is building a Nigeria-first decision intelligence operating system for fintech operators and financial-services institutions.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Stem Cogent",
    description:
      "Built for the market structures, institutions, infrastructure, and timing that shape Nigerian financial services.",
    url: "/about"
  }
};

const audiences = [
  {
    title: "Enterprise fintech operators",
    text: "Series A–C teams operating in Nigeria and preparing for regional growth across African markets."
  },
  {
    title: "Financial-services institutions",
    text: "Banks, microfinance institutions, and insurance operators monitoring regulation, infrastructure, and fintech competition."
  },
  {
    title: "Strategic advisory firms",
    text: "Africa-focused research and consulting teams that need structured, sourced financial-sector intelligence."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="site-shell">
          <Reveal>
            <p className="eyebrow">About Stem Cogent</p>
            <h1>
              Built for the operating<br />reality of <em>African<br />finance.</em>
            </h1>
            <p>
              Stem Cogent is the decision intelligence platform from Stem
              Systems Ltd. Our mission is to eliminate strategic guesswork by
              turning fragmented market signals into validated, explainable,
              decision-ready operational intelligence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section belief-section dark-grid">
        <div className="site-shell belief-grid">
          <Reveal>
            <p className="eyebrow eyebrow-light">Our belief</p>
            <h2>Local context is part of the evidence.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              Nigerian financial services run through specific policy cycles,
              payment infrastructure, telco dependencies, distribution
              patterns, and institutional relationships. Those conditions
              change the meaning and urgency of a signal.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              That is why Stem Cogent launches with full-depth coverage for
              Nigeria. Regional expansion is deliberate: Ghana, Kenya, South
              Africa, and Egypt follow as source coverage and customer demand
              support equivalent depth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section audience-section">
        <div className="site-shell">
          <Reveal className="section-heading">
            <p className="eyebrow">Who we build for</p>
            <h2>Teams accountable for the next move.</h2>
            <p>
              The platform is designed for decisions with commercial,
              regulatory, product, growth, and operational consequences.
            </p>
          </Reveal>
          <div className="three-grid">
            {audiences.map((audience, index) => (
              <Reveal className="outcome-card audience-card" key={audience.title} delay={index * 90}>
                <span>0{index + 1}</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="role-strip">
            <span>Founder / CEO</span>
            <span>Strategy</span>
            <span>Growth</span>
            <span>Product</span>
            <span>Financial operations</span>
            <span>Research</span>
          </Reveal>
        </div>
      </section>

      <section className="section team-section section-soft">
        <div className="site-shell">
          <Reveal className="section-heading">
            <p className="eyebrow">The team behind Stem</p>
            <h2>Building the intelligence layer<br />financial teams deserve.</h2>
            <p>
              A focused team working from the realities of Nigerian financial
              services—not abstract assumptions.
            </p>
          </Reveal>
          <div className="team-grid">
            <Reveal className="team-card">
              <div className="portrait">
                <Image
                  src="/team/odion.jpg"
                  alt="Odion O. Alex"
                  width={768}
                  height={1221}
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>
              <div className="team-info">
                <h3>Odion O. Alex</h3>
                <span>Co-founder · CEO & AI Engineer</span>
                <p>Building the intelligence infrastructure and product system behind Stem Cogent.</p>
              </div>
            </Reveal>
            <Reveal className="team-card" delay={100}>
              <div className="portrait">
                <Image
                  src="/team/gift.jpg"
                  alt="Gift Chinedu Nduka"
                  width={1987}
                  height={2855}
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>
              <div className="team-info">
                <h3>Gift Chinedu Nduka</h3>
                <span>Co-founder · CSO & Strategic Operator</span>
                <p>Shaping the commercial direction and the path from intelligence to operating value.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-close">
        <div className="site-shell about-close-grid">
          <Reveal>
            <p className="eyebrow">What we will not become</p>
            <h2>More software that asks you to trust a black box.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Stem Cogent is not a general BI tool, open-ended chatbot, social
              listening suite, forecasting engine, autonomous decision-maker,
              or raw-data marketplace.
            </p>
            <p>
              It is a governed market-intelligence system that keeps evidence
              visible and decision ownership human.
            </p>
            <Link className="button button-primary" href="/platform">
              Explore the platform <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
