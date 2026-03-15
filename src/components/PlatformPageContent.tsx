"use client";

import { useState, FormEvent } from "react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import InteractiveDiagram from "@/components/InteractiveDiagram";

const BLOCKED_DOMAINS = [
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.es",
  "yahoo.fr",
  "yahoo.de",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "protonmail.com",
  "proton.me",
  "zoho.com",
  "yandex.com",
  "yandex.ru",
  "mail.ru",
  "gmx.com",
  "gmx.de",
  "tutanota.com",
  "fastmail.com",
];

export default function PlatformPageContent() {
  const [diagramOpen, setDiagramOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error" | "blocked"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isBusinessEmail = (addr: string): boolean => {
    const domain = addr.split("@")[1]?.toLowerCase();
    if (!domain) return false;
    return !BLOCKED_DOMAINS.includes(domain);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!isBusinessEmail(email)) {
      setStatus("blocked");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/architecture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 422) {
          setStatus("blocked");
        } else {
          setErrorMessage(data.message || "Something went wrong.");
          setStatus("error");
        }
        return;
      }

      setStatus("sent");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const inputClasses =
    "bg-transparent border-b border-border-color focus:border-foreground py-3 text-body text-foreground w-full outline-none transition-colors placeholder:text-muted";

  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="flex flex-col items-center text-center w-full px-6 -mt-16">
          <FadeIn type="up" delay={0.2} once className="w-full flex justify-center">
            <h1 className="text-display-sm text-foreground text-center max-w-[720px] mx-auto">
              Your first platform diagram
            </h1>
          </FadeIn>

          <FadeIn type="up" delay={0.5} once className="w-full flex justify-center">
            <div className="mt-8 md:mt-10">
              <button
                onClick={() => setDiagramOpen(true)}
                className="inline-block bg-foreground hover:bg-charcoal text-background rounded-full px-8 py-4 font-medium transition-colors duration-200"
              >
                Show me
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Interactive diagram overlay */}
      <InteractiveDiagram
        isOpen={diagramOpen}
        onClose={() => setDiagramOpen(false)}
      />

      {/* Email gate */}
      <section className="py-section-sm">
        <Container>
          <div className="max-w-[480px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-heading text-foreground mb-4">
                Get the full architecture reference
              </h2>
              <p className="text-body text-foreground-secondary mb-10">
                The detailed version with specific tools, how they connect, and
                why each one was chosen. Sent to your work email.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              {status === "sent" ? (
                <div className="py-8">
                  <p className="text-body-lg text-foreground mb-3">
                    Check your inbox.
                  </p>
                  <p className="text-body text-foreground-secondary">
                    The full architecture reference is on its way to{" "}
                    <span className="text-foreground">{email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="text-left">
                  <div className="mb-6">
                    <label
                      htmlFor="work-email"
                      className="block text-label uppercase tracking-widest text-muted mb-2"
                    >
                      Work email
                    </label>
                    <input
                      id="work-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "blocked" || status === "error") {
                          setStatus("idle");
                          setErrorMessage("");
                        }
                      }}
                      className={inputClasses}
                      placeholder="you@company.com"
                      required
                    />
                    {status === "blocked" && (
                      <p className="text-sm text-foreground-secondary mt-3">
                        Please use your work email. We send this to engineering
                        teams, not personal inboxes.
                      </p>
                    )}
                    {status === "error" && errorMessage && (
                      <p className="text-sm text-red-600 mt-3">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-foreground hover:bg-charcoal disabled:opacity-50 text-background w-full px-8 py-4 text-body font-medium rounded-full transition-colors"
                  >
                    {status === "sending"
                      ? "Sending..."
                      : "Send me the reference"}
                  </button>
                  <p className="text-xs text-muted mt-4 text-center">
                    No spam, no sequences. Just the architecture document.
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
