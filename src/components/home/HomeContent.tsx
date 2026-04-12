"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ProcessSection from "@/components/home/ProcessSection";
import HelpSection from "@/components/home/HelpSection";
import HomeCTA from "@/components/home/HomeCTA";
import PillHeadline from "@/components/home/PillHeadline";
import TrustedBy from "@/components/home/TrustedBy";
import GlobeSection from "@/components/home/GlobeSection";
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
      <TrustedBy />
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

      <GlobeSection />

      <ProcessSection />

      <HelpSection />

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
