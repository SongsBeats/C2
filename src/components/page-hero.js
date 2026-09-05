import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PageHero({ label, title, accent, description, aside }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-kicker" data-reveal><p className="eyebrow">{label}</p><Link href="/" aria-label="Back to home">Corevolvix <ArrowUpRight size={16} /></Link></div>
        <div className="page-hero-grid">
          <h1 data-reveal>{title} {accent && <span>{accent}</span>}</h1>
          <div className="page-hero-copy" data-reveal="stagger"><p>{description}</p>{aside && <p className="page-aside">{aside}</p>}</div>
        </div>
      </div>
    </section>
  );
}
