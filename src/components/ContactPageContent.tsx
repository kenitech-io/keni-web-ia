"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BOOKING_URL } from "@/lib/config";

export default function ContactPageContent() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ name, company, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setName("");
      setCompany("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "bg-transparent border-b border-border-color focus:border-foreground py-2 text-sm text-foreground w-full outline-none transition-colors placeholder:text-muted";
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
              just a calm conversation about what&apos;s keeping you up at night.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-[480px] mx-auto mb-20">
            <div className="p-10 text-center">
              <div className="flex justify-center items-center mb-10">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border-color">
                  <Image src="/team/ane.jpg" alt="Ane" width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border-color -ml-3">
                  <Image src="/team/mikel.jpg" alt="Mikel" width={80} height={80} className="w-full h-full object-cover" />
                </div>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground hover:bg-charcoal text-background px-6 py-3 text-sm font-medium rounded-full transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-center">
            <button
              onClick={() => setShowForm(true)}
              className="text-muted hover:text-foreground text-sm transition-colors"
            >
              Prefer to send a message instead?
            </button>
          </div>
        </FadeIn>

        {/* Message form modal */}
        <AnimatePresence>
          {showForm && (
            <MessageModal
              onClose={() => setShowForm(false)}
              status={status}
              onSubmit={handleSubmit}
              name={name} setName={setName}
              company={company} setCompany={setCompany}
              email={email} setEmail={setEmail}
              message={message} setMessage={setMessage}
              inputClasses={inputClasses}
              labelClasses={labelClasses}
            />
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}

function MessageModal({
  onClose,
  status,
  onSubmit,
  name, setName,
  company, setCompany,
  email, setEmail,
  message, setMessage,
  inputClasses,
  labelClasses,
}: {
  onClose: () => void;
  status: "idle" | "sending" | "sent" | "error";
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  name: string; setName: (v: string) => void;
  company: string; setCompany: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  message: string; setMessage: (v: string) => void;
  inputClasses: string;
  labelClasses: string;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto border border-border-color bg-background rounded-lg p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        {status === "sent" ? (
          <div className="text-center py-8">
            <p className="text-heading text-foreground mb-4">Message sent.</p>
            <p className="text-body text-foreground-secondary">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <p className="text-sm font-medium text-foreground mb-1">Send us a message</p>
            <p className="text-xs text-foreground-secondary mb-6">
              We&apos;ll get back to you within 24 hours.
            </p>
            <form onSubmit={onSubmit} className="space-y-4">
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
                <label htmlFor="message" className={labelClasses}>Message</label>
                <textarea id="message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClasses} resize-none`} placeholder="Tell us about your project..." />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-foreground hover:bg-charcoal disabled:opacity-50 text-background w-full px-4 py-2.5 text-sm font-medium rounded-full transition-colors"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
              )}
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
}
