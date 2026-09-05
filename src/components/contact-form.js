"use client";

import { ArrowRight, MailCheck } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Website enquiry from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Work email: ${data.get("email")}`,
      `Company: ${data.get("company")}`,
      `Role: ${data.get("role")}`,
      `Area of interest: ${data.get("interest")}`,
      "",
      String(data.get("message")),
    ].join("\n");

    setSubmitted(true);
    window.location.href = `mailto:hello@corevolvix.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} data-reveal>
      <div className="form-row">
        <label className="form-field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="form-field">
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="form-row">
        <label className="form-field">
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" required />
        </label>
        <label className="form-field">
          <span>Role</span>
          <input name="role" type="text" autoComplete="organization-title" />
        </label>
      </div>
      <label className="form-field">
        <span>Area of interest</span>
        <select name="interest" defaultValue="" required>
          <option value="" disabled>Select a capability</option>
          <option>Business Process Consulting</option>
          <option>Technology Consulting</option>
          <option>Artificial Intelligence &amp; Intelligent Automation</option>
          <option>Enterprise &amp; Technology Architecture</option>
          <option>GCC Setup &amp; Advisory</option>
          <option>Other</option>
        </select>
      </label>
      <label className="form-field">
        <span>How can we help?</span>
        <textarea name="message" rows={6} required />
      </label>
      <div className="form-submit">
        <button type="submit" className="button">
          Send enquiry <ArrowRight size={18} aria-hidden="true" />
        </button>
        {submitted && (
          <p className="form-status" role="status">
            <MailCheck size={20} aria-hidden="true" />
            <span>Your email app is opening. Review and send your enquiry there.</span>
          </p>
        )}
      </div>
    </form>
  );
}
