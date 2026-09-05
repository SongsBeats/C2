import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "../../components/cta-section";
import { PageHero } from "../../components/page-hero";
import { industries } from "../../lib/site-data";

export const metadata = {
  title: "Industries",
  description:
    "Corevolvix supports organisations across manufacturing, retail, healthcare, financial services, the public sector and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries we serve"
        title="Industry context."
        accent="Enterprise-wide impact."
        description="Corevolvix supports organisations facing complex operational, technology and transformation challenges."
        aside="Our work is adapted to sector realities—from regulatory requirements and legacy estates to customer expectations, operational risk and talent needs."
      />

      <section className="section industries-section">
        <div className="container industry-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.title} data-reveal>
              <span className="icon-tile" aria-hidden="true">
                <industry.icon size={30} strokeWidth={1.6} />
              </span>
              <h2>{industry.title}</h2>
              <p>{industry.description}</p>
              <Link
                href="/contact"
                className="text-link"
                aria-label={`Discuss ${industry.title}`}
              >
                Discuss your priorities <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        label="Your context matters"
        title="Bring us the challenge. We’ll connect the right capabilities."
        text="Share the operational, technology or transformation priority in front of you and we will help frame a practical way forward."
      />
    </>
  );
}
