import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { CtaSection } from "../../components/cta-section";
import { PageHero } from "../../components/page-hero";
import { services } from "../../lib/site-data";
import { siteUrl } from "../../lib/site-config";

export const metadata = {
  alternates: { canonical: siteUrl("/services/") },
  title: "Services",
  description:
    "Connected consulting across business process, technology, AI, enterprise architecture and GCC advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="The capabilities to move from"
        accent="ambition to execution."
        description="Corevolvix brings together business process consulting, technology consulting, artificial intelligence, enterprise architecture and specialised GCC advisory."
        aside="Work with us on one priority or combine disciplines to address a wider transformation agenda."
      />

      <section className="section services-section">
        <div className="container">
          <nav className="service-jump" aria-label="Explore our services" data-reveal>
            {services.map((service) => (
              <a href={`#${service.slug}`} key={service.slug}>
                {service.title} <ArrowDown size={15} aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="services-list">
            {services.map((service) => (
              <article
                className="service-detail"
                id={service.slug}
                key={service.slug}
                aria-labelledby={`${service.slug}-title`}
                data-reveal
              >
                <div className="service-intro">
                  <span className="icon-tile" aria-hidden="true">
                    <service.icon size={32} strokeWidth={1.6} />
                  </span>
                  <h2 id={`${service.slug}-title`}>{service.title}</h2>
                  <p>{service.full}</p>
                  <Link href="/contact" className="text-link">
                    Discuss this capability <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
                <div className="capability-panel">
                  <ul className="capability-list" aria-label={`${service.title} capabilities`}>
                    {service.capabilities.map((capability) => (
                      <li key={capability}>
                        <Check size={17} strokeWidth={2} aria-hidden="true" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Find the right place to begin."
        text="Start with the priority that matters most. We will help you determine the scope, dependencies and next steps required to move with confidence."
      />
    </>
  );
}
