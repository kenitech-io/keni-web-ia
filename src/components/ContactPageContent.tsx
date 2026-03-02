"use client";

import { useState, FormEvent } from "react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/config";

const serviceOptions = [
  "Monitoring & Observability",
  "Cloud Migration",
  "Cloud Management",
  "CI/CD Pipelines",
  "Infrastructure as Code",
  "Kubernetes & Containers",
  "Not sure yet",
];

export default function ContactPageContent() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form submission:", { name, company, email, service, message });
  };

  const inputClasses =
    "bg-transparent border-b border-border-color focus:border-accent py-3 text-body text-foreground w-full outline-none transition-colors placeholder:text-muted";
  const labelClasses =
    "block text-label uppercase tracking-widest text-foreground-secondary mb-2";

  return (
    <section className="pt-32 pb-section">
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-label uppercase tracking-widest text-accent font-mono mb-4">
              CONTACT
            </p>
            <h1 className="text-display-sm text-foreground mb-6">
              Let&apos;s take this off your plate.
            </h1>
            <p className="text-body text-foreground-secondary max-w-[480px] mx-auto">
              Pick a time that works for you. 30 minutes, no pitch, no pressure
              — just a calm conversation about what&apos;s keeping you up at night.
            </p>
          </div>
        </FadeIn>

        {/* Book a call — button to open Google Calendar */}
        <FadeIn delay={0.15}>
          <div className="max-w-[480px] mx-auto mb-20">
            <div className="relative rounded-2xl border border-orange-400/30 overflow-hidden backdrop-blur-xl backdrop-saturate-150 bg-orange-500/20 p-10 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-orange-500/10 to-orange-600/10" />
              <div className="relative z-10">
                <p className="text-body text-white mb-6">
                  Pick a 30-minute slot that works for you.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent-hover text-background px-8 py-4 text-body font-medium rounded-full transition-colors"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.2}>
          <div className="glow-line w-full max-w-[200px] mx-auto mb-20" />
        </FadeIn>

        {/* Alternative: contact form toggle */}
        <FadeIn delay={0.25}>
          <div className="text-center mb-12">
            <button
              onClick={() => setShowForm(!showForm)}
              className="text-foreground-secondary hover:text-foreground text-body transition-colors"
            >
              {showForm
                ? "Hide form"
                : "Prefer to send a message instead?"}
              <span className="ml-2 inline-block transition-transform duration-200" style={{ transform: showForm ? "rotate(180deg)" : "rotate(0deg)" }}>
                ↓
              </span>
            </button>
          </div>
        </FadeIn>

        {showForm && (
          <FadeIn delay={0}>
            <div className="max-w-[800px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left */}
                <div>
                  <h2 className="text-heading text-foreground mb-6">
                    Send us a message.
                  </h2>
                  <p className="text-body text-foreground-secondary mb-10">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-body text-foreground hover:text-accent transition-colors"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                    <p className="text-body text-muted">Remote-first.</p>
                    <div className="flex gap-6">
                      <a href="#" className="text-foreground-secondary hover:text-accent transition-colors">
                        LinkedIn
                      </a>
                      <a href="#" className="text-foreground-secondary hover:text-accent transition-colors">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right — Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="name" className={labelClasses}>Name</label>
                      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputClasses} placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClasses}>Company</label>
                      <input id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} className={inputClasses} placeholder="Your company" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>Email</label>
                      <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClasses} placeholder="you@company.com" required />
                    </div>
                    <div>
                      <label htmlFor="service" className={labelClasses}>What do you need help with?</label>
                      <select id="service" value={service} onChange={(e) => setService(e.target.value)} className={`${inputClasses} appearance-none cursor-pointer`}>
                        <option value="" disabled className="bg-surface text-foreground-secondary">Select a service...</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option} className="bg-surface text-foreground">{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className={labelClasses}>Message</label>
                      <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClasses} resize-none`} placeholder="Tell us about your project..." />
                    </div>
                    <button type="submit" className="bg-accent hover:bg-accent-hover text-background w-full sm:w-auto px-8 py-4 text-body font-medium rounded-full transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
