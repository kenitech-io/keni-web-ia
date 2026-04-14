"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import HelpSection from "@/components/home/HelpSection";
import HomeCTA from "@/components/home/HomeCTA";
import MetricsSection from "@/components/home/MetricsSection";
import GlobeSection from "@/components/home/GlobeSection";
import TrustedBy from "@/components/home/TrustedBy";
import TechGrid from "@/components/home/TechGrid";
import LiveScreen from "@/components/LiveScreen";
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

      <section className="py-24 md:py-40 px-6 md:px-[8%] lg:px-[10%]">
        <FadeIn>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="flex-1 text-center">
              <h2 className="text-[clamp(0.9rem,2.5vw,1.25rem)] text-foreground font-semibold tracking-tight mb-4 md:mb-6">
                An internal development platform built for your team
              </h2>
              <p className="text-[clamp(0.75rem,2vw,0.9rem)] text-foreground-secondary/70 leading-loose font-light mb-6 md:mb-10">
                CI/CD pipelines, containerized environments, monitoring, and
                automated deploys. All wired together around how your team
                actually works. You push, it gets deployed.
              </p>
              <div className="flex items-center justify-center gap-3 md:gap-6">
                <Link href="/devops-consulting" className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all duration-300 py-2">Consulting services</Link>
                <span className="text-border-color">·</span>
                <Link href="/infrastructure-audit" className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all duration-300 py-2">Infrastructure audit</Link>
              </div>
            </div>
            <div className="flex-1 text-center">
              <GlobeSection />
            </div>
          </div>
        </FadeIn>
      </section>

      <TechGrid />

      {/* Pipeline + Terminals */}
      <section className="py-32 md:py-48 px-6 md:px-[8%] lg:px-[10%]">
          <FadeIn>
            <LiveScreen />
          </FadeIn>
      </section>

      <HelpSection />

      <MetricsSection />

      <TrustedBy />

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
