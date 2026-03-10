"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/config";

const serviceOptions = [
  "Internal Development Platform",
  "CI/CD Pipelines",
  "Cloud Migration",
  "Infrastructure as Code",
  "Monitoring & Observability",
  "Not sure yet",
];

export default function ContactPageContent() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, service, message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setName("");
      setCompany("");
      setEmail("");
      setService("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "bg-transparent border-b border-border-color focus:border-foreground py-3 text-body text-foreground w-full outline-none transition-colors placeholder:text-muted";
  const labelClasses =
    "block text-label uppercase tracking-widest text-muted mb-2";

  return (
    <section className="pt-32 pb-section">
      <Container>
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-label uppercase tracking-widest text-muted mb-4">
              CONTACT
            </p>
            <h1 className="text-display-sm text-foreground mb-6">
              Let&apos;s take this off your plate
            </h1>
            <p className="text-body text-foreground-secondary max-w-[480px] mx-auto">
              Pick a time that works for you. 30 minutes, no pitch, no pressure
              — just a calm conversation about what&apos;s keeping you up at night.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-[480px] mx-auto mb-20">
            <div className="rounded-2xl border border-border-color bg-surface p-10 text-center">
              <div className="flex justify-center items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border-color">
                  <Image src="/team/ane.jpg" alt="Ane" width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border-color -ml-3">
                  <Image src="/team/mikel.jpg" alt="Mikel" width={80} height={80} className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-body text-foreground-secondary mb-6">
                Pick a 30-minute slot that works for you.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground hover:bg-charcoal text-background px-8 py-4 text-body font-medium rounded-full transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="w-full max-w-[200px] mx-auto mb-20 h-px bg-border-color" />
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="text-center mb-12">
            <button
              onClick={() => setShowForm(!showForm)}
              className="text-muted hover:text-foreground text-body transition-colors"
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
                <div>
                  <h2 className="text-heading text-foreground mb-6">
                    Send us a message
                  </h2>
                  <p className="text-body text-foreground-secondary mb-10">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-body text-foreground hover:text-muted transition-colors"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                    <p className="text-body text-muted">Remote-first.</p>
                    <div className="flex gap-6">
                      <a href="https://www.linkedin.com/company/keniengineering/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  {status === "sent" ? (
                    <div className="text-center py-12">
                      <p className="text-heading text-foreground mb-4">Message sent.</p>
                      <p className="text-body text-foreground-secondary">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  ) : (
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
                          <option value="" disabled className="bg-background text-muted">Select a service...</option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option} className="bg-background text-foreground">{option}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className={labelClasses}>Message</label>
                        <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClasses} resize-none`} placeholder="Tell us about your project..." />
                      </div>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="bg-foreground hover:bg-charcoal disabled:opacity-50 text-background w-full sm:w-auto px-8 py-4 text-body font-medium rounded-full transition-colors"
                      >
                        {status === "sending" ? "Sending..." : "Send Message"}
                      </button>
                      {status === "error" && (
                        <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
