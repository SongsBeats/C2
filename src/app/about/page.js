import Image from "next/image";
import { ArrowDownRight, Check } from "lucide-react";
import { CtaSection } from "../../components/cta-section";
import { PageHero } from "../../components/page-hero";
import { approach } from "../../lib/site-data";

export const metadata = {
  title: "About",
  description:
    "Corevolvix is a business and technology consulting firm connecting strategy to practical execution.",
};

const principles = [
  ["Clarity", "We make complex choices easier to understand, prioritise and act upon."],
  ["Collaboration", "We work alongside client teams so knowledge, ownership and capability stay with the organisation."],
  ["Value", "We focus on outcomes that are relevant to the business, not activity for its own sake."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Corevolvix"
        title="Better transformation starts when"
        accent="business and technology work as one."
        description="Corevolvix is a business and technology consulting firm focused on business process improvement, technology consulting, artificial intelligence and enterprise architecture."
        aside="We also provide specialised advisory for Global Capability Centre setup and evolution."
      />

      <section className="section">
        <div className="container about-intro">
          <div className="brand-panel" aria-hidden="true" data-reveal>
            <Image
              src="/corevolvix-icon.png"
              alt=""
              width={1254}
              height={1254}
              sizes="(max-width: 760px) 80vw, 400px"
            />
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow">What we believe</p>
            <h2>Transformation becomes durable when strategy is connected to how work is done.</h2>
            <p>
              It also depends on how technology is designed and how people adopt change.
              That is why we bring these disciplines together in practical engagements
              built around the client’s business priorities.
            </p>
          </div>
        </div>
      </section>

      <section className="section commitment-section">
        <div className="container commitment-panel" data-reveal>
          <div>
            <p className="eyebrow">Our commitment</p>
            <h2>Clear thinking. Practical progress.</h2>
          </div>
          <p>
            We work with client teams to understand the challenge, define a realistic target
            state and create a route to implementation. Our role is not simply to recommend
            change, but to help make it actionable through strong processes, appropriate
            technology, sound architecture and clear governance.
          </p>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Our approach</p>
              <h2>From complexity to capability.</h2>
            </div>
            <ArrowDownRight size={48} strokeWidth={1.25} aria-hidden="true" />
          </div>
          <div className="process-grid">
            {approach.map((step) => (
              <article className="process-card" key={step.title} data-reveal>
                <span className="icon-tile" aria-hidden="true">
                  <step.icon size={29} strokeWidth={1.6} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">What guides us</p>
              <h2>How we show up in the work.</h2>
            </div>
          </div>
          <div className="principles-grid">
            {principles.map(([title, text]) => (
              <article className="principle-card" key={title} data-reveal>
                <span className="icon-tile" aria-hidden="true">
                  <Check size={23} strokeWidth={1.8} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
