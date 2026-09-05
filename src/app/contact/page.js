import { ArrowUpRight, Mail, MessageSquareText } from "lucide-react";
import { ContactForm } from "../../components/contact-form";
import { PageHero } from "../../components/page-hero";

export const metadata = {
  title: "Contact",
  description:
    "Talk to Corevolvix about your process, technology, AI, architecture or GCC priority.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact us"
        title="Start with the business challenge"
        accent="you need to solve."
        description="Tell us about the process, technology, AI, architecture or GCC priority in front of you."
        aside="We will help you identify a practical way to begin."
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow">Let’s connect</p>
            <h2>A useful conversation starts with context.</h2>
            <p>
              Whether you are improving an operating process, planning a technology
              initiative, evaluating AI opportunities, addressing architecture complexity
              or considering a GCC, share what you are trying to achieve and where you are
              encountering friction.
            </p>
            <div className="contact-detail">
              <span className="icon-tile" aria-hidden="true"><Mail size={22} /></span>
              <div>
                <span>Email us directly</span>
                <a href="mailto:hello@corevolvix.com">
                  hello@corevolvix.com <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="contact-detail response-note">
              <MessageSquareText size={22} strokeWidth={1.6} aria-hidden="true" />
              <p>Share as much context as you can. We’ll respond with a practical next step.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
