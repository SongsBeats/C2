import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaSection({ label = "Ready to move forward?", title = "Build the capabilities your next stage of growth requires.", text = "Let’s explore how process, technology, AI and architecture can work together for your organisation." }) {
  return (
    <section className="cta-section">
      <div className="container cta-inner" data-reveal>
        <div><p className="eyebrow">{label}</p><h2>{title}</h2></div>
        <div className="cta-copy"><p>{text}</p><Link className="button button-white" href="/contact/">Start a conversation <ArrowUpRight size={18} /></Link></div>
      </div>
    </section>
  );
}
