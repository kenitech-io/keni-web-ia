"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BLOCKED_DOMAINS } from "@/lib/config";

export default function BlogEmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const validate = (value: string): string | null => {
    if (!value || !value.includes("@")) return "Please enter a valid email.";
    const domain = value.split("@")[1]?.toLowerCase();
    if (!domain) return "Please enter a valid email.";
    if (BLOCKED_DOMAINS.includes(domain)) return "Please use a work email address.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate(email);
    if (error) {
      setStatus("error");
      setMessage(error);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage(data.message);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-16 md:py-24">
      <Container>
        <FadeIn>
          <div className="max-w-[640px] mx-auto bg-surface rounded-2xl p-8 md:p-12">
            <h3 className="text-body-lg text-foreground font-light tracking-wide mb-3">
              Get the DevOps checklist for your stack
            </h3>
            <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-8">
              We send one practical guide per week. No spam, unsubscribe anytime.
            </p>

            {status === "success" ? (
              <p className="text-sm text-foreground font-light">{message}</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  required
                  className="flex-1 bg-background border border-foreground/[0.08] rounded-full px-5 py-3 text-sm text-foreground font-light placeholder:text-muted/40 focus:outline-none focus:border-foreground/20 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-foreground hover:bg-foreground/85 text-background px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Subscribe"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="text-sm text-red-400 font-light mt-3">{message}</p>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
