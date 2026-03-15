"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

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

const layers = [
  {
    label: "SaaS",
    description:
      "Managed services that connect, secure, and back up the entire platform: overlay networking, secret management, identity, source control, and off-site backups.",
  },
  {
    label: "CI/CD",
    description:
      "Code gets built, stored as an artifact, and deployed automatically. No manual steps between git push and production.",
  },
  {
    label: "Observability",
    description:
      "Monitoring dashboards and alert rules that catch problems before your users do. Metrics, logs, and notifications in one place.",
  },
  {
    label: "Networking",
    description:
      "Overlay network connecting all servers securely, with a reverse proxy handling TLS termination and routing at each node.",
  },
  {
    label: "Environments",
    description:
      "Identical dev and prod servers, each running containerized app stacks with their own deploy agents and secret injection.",
  },
];

export default function PlatformPageContent() {
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
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-widest text-muted mb-4">
                PLATFORM
              </p>
              <h1 className="text-display-sm text-foreground mb-6">
                This is what good infrastructure looks like
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-body text-foreground-secondary">
                A complete internal development platform: CI/CD, monitoring,
                networking, secrets, backups. Your developers push code,
                everything else is automated.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="pb-section-sm">
        <Container>
          <FadeIn delay={0.2}>
            <div className="max-w-[960px] mx-auto">
              <Image
                src="/architecture-teaser.svg"
                alt="Internal development platform architecture overview"
                width={960}
                height={760}
                className="w-full h-auto"
                priority
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-section-sm bg-surface">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-widest text-muted mb-12">
                WHAT EACH LAYER DOES
              </p>
            </FadeIn>
            <div className="space-y-10">
              {layers.map((layer, index) => (
                <FadeIn key={layer.label} delay={index * 0.08}>
                  <div>
                    <h3 className="text-body-lg text-foreground font-normal mb-2">
                      {layer.label}
                    </h3>
                    <p className="text-body text-foreground-secondary">
                      {layer.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

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
