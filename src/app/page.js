import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, Workflow, Boxes, Sparkles, Network } from "lucide-react";
import { services, industries, approach } from "../lib/site-data";
import { CtaSection } from "../components/cta-section";

function TransformationVisual() {
  return (
    <div className="transformation-visual" aria-label="Outcome-led Corevolvix transformation system" data-reveal>
      <div className="visual-caption"><span className="status-dot" />Corevolvix transformation system</div>
      <div className="connection-map" aria-label="Process, technology, intelligence and architecture connected through Corevolvix">
        <div className="map-orbit map-orbit-outer" aria-hidden="true" />
        <div className="map-orbit map-orbit-inner" aria-hidden="true" />
        <div className="map-axis map-axis-x" aria-hidden="true" /><div className="map-axis map-axis-y" aria-hidden="true" />
        <div className="map-core"><Image src="/corevolvix-icon.png" width={1254} height={1254} alt="Corevolvix" priority /></div>
        <span className="map-label map-label-top"><Workflow size={19} />Process</span>
        <span className="map-label map-label-right"><Boxes size={19} />Technology</span>
        <span className="map-label map-label-bottom"><Sparkles size={19} />Intelligence</span>
        <span className="map-label map-label-left"><Network size={19} />Architecture</span>
        <i className="map-traveller" aria-hidden="true" />
      </div>
      <div className="visual-outcome"><div><span>Start with</span><strong>Complexity</strong></div><ArrowRight size={24} aria-hidden="true" /><div><span>Build toward</span><strong>Capability</strong></div></div>
      <p className="visual-note">Clearer decisions. Stronger foundations.</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal="stagger">
            <p className="eyebrow"><span className="eyebrow-dot" />Business, Technology & AI Consulting</p>
            <h1>Build a stronger <span>business.</span></h1>
            <p className="hero-subheading">Through better processes,<br className="desktop-break" /> technology and intelligence.</p>
            <p className="hero-description">Corevolvix helps organisations simplify complex operations, modernise enterprise technology, apply AI responsibly, and build the foundations required for lasting growth.</p>
            <div className="hero-actions"><Link className="button" href="/contact/">Start a conversation <ArrowUpRight size={18} /></Link><Link className="text-link" href="/services/">Explore our capabilities <ArrowRight size={17} /></Link></div>
          </div>
          <TransformationVisual />
        </div>
        <div className="container capability-ribbon" aria-label="Core capabilities">
          {services.map((service) => <Link key={service.slug} href={`/services/#${service.slug}`}><service.icon size={20} strokeWidth={1.6} aria-hidden="true" /><span>{service.title}</span></Link>)}
        </div>
      </section>

      <section className="section intro-section">
        <div className="container intro-grid" data-reveal>
          <div><p className="eyebrow">Corevolvix / What we do</p><h2>Transformation works best when the pieces <em>work together.</em></h2></div>
          <div className="intro-copy"><p>Business change rarely succeeds when processes, technology, data and people are addressed in isolation. Corevolvix brings these disciplines together to help leadership teams improve performance now while building the capabilities required for what comes next.</p><p>We work with growing businesses, enterprises and public-sector organisations that need a practical route from strategy to execution.</p><Link className="text-link" href="/about/">How we work <ArrowUpRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <div className="section-heading" data-reveal><div><p className="eyebrow">Our expertise</p><h2>Focused capabilities.<br /><em>One connected view.</em></h2></div><p>Engage us for a specific challenge or combine our capabilities for a broader transformation programme. Every engagement starts with the outcomes that matter.</p></div>
          <div className="expertise-grid">
            {services.map((service) => <Link className="expertise-card" href={`/services/#${service.slug}`} key={service.slug} data-reveal><div className="card-top"><span className="icon-tile"><service.icon size={27} strokeWidth={1.5} /></span><ArrowUpRight size={21} className="card-arrow" aria-hidden="true" /></div><h3>{service.title}</h3><p>{service.short}</p></Link>)}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="section-heading" data-reveal><div><p className="eyebrow">Why Corevolvix</p><h2>Built for the work that follows the strategy.</h2></div><p>Lasting transformation needs more than a recommendation. It needs a clear understanding of the business problem, a practical plan and the capability to carry the work forward.</p></div>
          <div className="value-grid">{[
            ["Business-led", "We begin with the operational, customer and commercial outcomes your organisation needs to achieve."],
            ["Connected by design", "We consider process, technology, AI, architecture and people together, so one decision does not create a problem elsewhere."],
            ["Practical in delivery", "We turn insight into prioritised actions, operating models, roadmaps and implementation support."],
          ].map(([title, text]) => <article className="value-card" key={title} data-reveal><Check size={24} strokeWidth={1.6} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container"><div className="section-heading" data-reveal><div><p className="eyebrow">Our approach</p><h2>A clear route from complexity to capability.</h2></div><p>Our approach creates alignment before action and keeps attention on outcomes throughout delivery.</p></div><div className="process-grid">{approach.map((step) => <article className="process-card" key={step.title} data-reveal><span className="icon-tile"><step.icon size={25} strokeWidth={1.6} /></span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div>
      </section>

      <section className="section industries-preview"><div className="container industries-layout"><div data-reveal><p className="eyebrow">Industries we serve</p><h2>Deep enough to understand the context. Broad enough to connect the change.</h2><p>We adapt our approach to sector realities while applying the same discipline: clarify the problem, design the right foundations and create a practical path forward.</p><Link className="button button-secondary" href="/industries/">Explore industries <ArrowUpRight size={18} /></Link></div><div className="industry-links" data-reveal>{industries.slice(0, 6).map((industry) => <Link href="/industries/" key={industry.title}><industry.icon size={24} strokeWidth={1.5} /><span>{industry.title}</span><ArrowUpRight size={18} aria-hidden="true" /></Link>)}</div></div></section>
      <CtaSection />
    </>
  );
}
