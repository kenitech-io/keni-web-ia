"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/CTASection";
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
      <Suspense><HeroSection /></Suspense>
      <ProblemSection />
      <SolutionSection />
      <SocialProofSection />
      <ProcessSection />
      <CTASection
        headline="Ready to just ship?"
        subtext="30 minutes. No pitch, no pressure. Just a conversation about what's slowing your team down and how to fix it."
        buttonText="Let's Talk"
        buttonHref="/contact"
      />
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
