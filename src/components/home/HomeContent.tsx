"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ProcessSection from "@/components/home/ProcessSection";
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
      <Suspense><HeroSection /></Suspense>
      <ProblemSection />

      {/* Pipeline */}
      <section className="flex flex-col items-center py-32 md:py-48">
        <FadeIn>
          <p className="text-body text-foreground-secondary mb-12 md:mb-16 text-center">
            From commit to production, hands-free
          </p>
        </FadeIn>
        <div className="w-full max-w-[1100px] mx-auto px-4">
          <svg
              viewBox="0 0 900 80"
              fill="none"
              className="w-full"
              role="img"
              aria-label="CI/CD pipeline diagram"
              style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
            >
              <rect x="80" y="4" width="370" height="52" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
              <text x="265" y="72" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CI</text>
              <rect x="490" y="4" width="370" height="52" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
              <text x="675" y="72" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>
              <rect x="0" y="16" width="55" height="28" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
              <text x="27" y="34" fontSize="9" fontWeight="300" fill="var(--muted)" textAnchor="middle">dev</text>
              <line x1="55" y1="30" x2="95" y2="30" stroke="var(--border-color)" strokeWidth="0.8" />
              <rect x="95" y="16" width="100" height="28" rx="4" fill="var(--pipe-purple-bg)" stroke="var(--pipe-purple-border)" strokeWidth="0.8" />
              <text x="145" y="34" fontSize="11" fontWeight="400" fill="var(--pipe-purple-text)" textAnchor="middle">Build</text>
              <line x1="195" y1="30" x2="215" y2="30" stroke="var(--border-color)" strokeWidth="0.8" />
              <rect x="215" y="16" width="100" height="28" rx="4" fill="var(--pipe-green-bg)" stroke="var(--pipe-green-border)" strokeWidth="0.8" />
              <text x="265" y="34" fontSize="11" fontWeight="400" fill="var(--pipe-green-text)" textAnchor="middle">Test</text>
              <line x1="315" y1="30" x2="335" y2="30" stroke="var(--border-color)" strokeWidth="0.8" />
              <rect x="335" y="16" width="100" height="28" rx="4" fill="var(--pipe-yellow-bg)" stroke="var(--pipe-yellow-border)" strokeWidth="0.8" />
              <text x="385" y="34" fontSize="11" fontWeight="400" fill="var(--pipe-yellow-text)" textAnchor="middle">Store</text>
              <line x1="435" y1="30" x2="505" y2="30" stroke="var(--border-color)" strokeWidth="0.8" />
              <rect x="505" y="16" width="100" height="28" rx="4" fill="var(--pipe-blue-bg)" stroke="var(--pipe-blue-border)" strokeWidth="0.8" />
              <text x="555" y="34" fontSize="10" fontWeight="400" fill="var(--pipe-blue-text)" textAnchor="middle">Secrets</text>
              <line x1="605" y1="30" x2="625" y2="30" stroke="var(--border-color)" strokeWidth="0.8" />
              <rect x="625" y="16" width="100" height="28" rx="4" fill="var(--pipe-orange-bg)" stroke="var(--pipe-orange-border)" strokeWidth="0.8" />
              <text x="675" y="34" fontSize="11" fontWeight="400" fill="var(--pipe-orange-text)" textAnchor="middle">Deploy</text>
              <line x1="725" y1="30" x2="745" y2="30" stroke="var(--border-color)" strokeWidth="0.8" />
              <rect x="745" y="16" width="100" height="28" rx="4" fill="var(--pipe-teal-bg)" stroke="var(--pipe-teal-border)" strokeWidth="0.8" />
              <text x="795" y="34" fontSize="10" fontWeight="400" fill="var(--pipe-teal-text)" textAnchor="middle">Production</text>
              <circle r="3" fill="var(--foreground)" opacity="0">
                <animate attributeName="cx" values="55;145;265;385;555;675;795" dur="4s" repeatCount="indefinite" begin="0.5s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
                <animate attributeName="cy" values="30;30;30;30;30;30;30" dur="4s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="opacity" values="0;0.3;0.3;0.3;0.3;0.3;0" dur="4s" repeatCount="indefinite" begin="0.5s" keyTimes="0;0.05;0.2;0.4;0.6;0.9;1" />
              </circle>
            </svg>
        </div>
      </section>

      <section className="pt-0 pb-32 md:pb-48">
        <Container>
          <FadeIn>
            <LiveScreen />
          </FadeIn>
        </Container>
      </section>
      <ProcessSection />
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
