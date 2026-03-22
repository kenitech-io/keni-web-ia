"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";

const inputClasses =
  "bg-transparent border-b border-border-color focus:border-muted py-3 text-sm font-light text-foreground w-full outline-none transition-colors placeholder:text-muted/50";
const labelClasses =
  "block text-label uppercase tracking-[0.25em] text-muted font-light mb-3";

export default function MessageModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-[400px] max-h-[90vh] overflow-y-auto border border-border-color bg-background rounded-lg p-10">
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
          <div className="text-center py-10">
            <p className="text-heading text-foreground font-light tracking-wide mb-6">Message sent.</p>
            <p className="text-sm text-foreground-secondary leading-loose font-light">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <p className="text-body text-foreground font-light tracking-wide mb-2">Send us a message</p>
            <p className="text-sm text-foreground-secondary font-light mb-8">
              We&apos;ll get back to you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="modal-name" className={labelClasses}>Name</label>
                <input id="modal-name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputClasses} placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="modal-company" className={labelClasses}>Company</label>
                <input id="modal-company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} className={inputClasses} placeholder="Your company" />
              </div>
              <div>
                <label htmlFor="modal-email" className={labelClasses}>Email</label>
                <input id="modal-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClasses} placeholder="you@company.com" required />
              </div>
              <div>
                <label htmlFor="modal-message" className={labelClasses}>Message</label>
                <textarea id="modal-message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClasses} resize-none`} placeholder="Tell us about your project..." />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-foreground hover:bg-foreground/85 disabled:opacity-50 text-background w-full px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-400 font-light">Something went wrong. Please try again.</p>
              )}
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
}
