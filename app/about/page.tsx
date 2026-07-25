import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Nigeria-first team building a calmer, more accountable intelligence layer for African financial services.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Stem-Cogent",
    description:
      "Built from the realities of African financial services—not abstract assumptions.",
    url: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="site-shell">
          <Reveal>
            <p className="eyebrow">About Stem-Cogent</p>
            <h1>
              Built for the signals<br />that shape <em>African<br />finance.</em>
            </h1>
            <p>
              Stem-Cogent is a decision intelligence operating system from Stem
              Systems Ltd. We are building for leaders who need a clearer
              understanding of what is changing before they move.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section belief-section dark-grid">
        <div className="site-shell belief-grid">
          <Reveal>
            <p className="eyebrow eyebrow-light">Our belief</p>
            <h2>The context changes the decision.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>
              Financial services in Nigeria and across Africa run on
              relationships, infrastructure, regulation, behaviour, and timing.
              A useful intelligence system has to see that whole picture.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              That is why Stem-Cogent is local by design: grounded in the forces
              that shape the market, and built to make those forces easier to
              act on.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section team-section">
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
                <p>Building intelligent systems for a more legible financial ecosystem.</p>
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
                <p>Shaping the commercial direction and path from signal to scale.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-close">
        <div className="site-shell about-close-grid">
          <Reveal>
            <p className="eyebrow">What we are building</p>
            <h2>A calmer way to see what matters.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              We believe teams should spend less time hunting through scattered
              information and more time making decisions with conviction.
            </p>
            <p>
              Our work brings early signals, transparent sources, and useful
              recommendations into a single intelligence practice.
            </p>
            <Link className="button button-primary" href="/waitlist">
              Join the waitlist <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
