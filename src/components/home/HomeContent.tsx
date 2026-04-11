"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ProcessSection from "@/components/home/ProcessSection";
import HelpSection from "@/components/home/HelpSection";
import HomeCTA from "@/components/home/HomeCTA";
import LiveScreen from "@/components/LiveScreen";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BLOCKED_DOMAINS } from "@/lib/config";

const InteractiveDiagram = dynamic(
  () => import("@/components/InteractiveDiagram"),
  { ssr: false }
);

export default function HomeContent() {
  const [diagramOpen, setDiagramOpen] = useState(false);
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "sending" | "sent" | "error" | "blocked"
  >("idle");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleEmailSubmit = async (email: string, note: string) => {
    if (email === "__reset__") {
      setEmailStatus("idle");
      return;
    }

    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain || BLOCKED_DOMAINS.includes(domain)) {
      setEmailStatus("blocked");
      return;
    }

    setEmailStatus("sending");

    try {
      const res = await fetch("/api/architecture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, note }),
      });

      if (!res.ok) {
        if (res.status === 422) setEmailStatus("blocked");
        else setEmailStatus("error");
        return;
      }

      setSubmittedEmail(email);
      setEmailStatus("sent");
    } catch {
      setEmailStatus("error");
    }
  };

  return (
    <>
      <HeroSection />
      <ProblemSection />

      {/* Pipeline + Terminals */}
      <section className="py-32 md:py-48">
        <Container>
          {/* Terminals */}
          <FadeIn>
            <LiveScreen />
          </FadeIn>

        </Container>
      </section>

      <ProcessSection />

      <HelpSection />

      {/* Explore links - hidden on mobile */}
      <section className="hidden md:block py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light">
                EXPLORE
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                <Link
                  href="/healthcheck"
                  className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all duration-300"
                >
                  Free health check
                </Link>
                <span className="text-border-color">·</span>
                <Link
                  href="/platform"
                  className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all duration-300"
                >
                  Platform architecture
                </Link>
                <span className="text-border-color">·</span>
                <Link
                  href="/blog"
                  className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all duration-300"
                >
                  Blog
                </Link>
                <span className="text-border-color">·</span>
                <Link
                  href="/about"
                  className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all duration-300"
                >
                  About us
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
      <HomeCTA />
      <InteractiveDiagram
        isOpen={diagramOpen}
        onClose={() => setDiagramOpen(false)}
        emailStatus={emailStatus}
        onEmailSubmit={handleEmailSubmit}
        submittedEmail={submittedEmail}
      />
    </>
  );
}
