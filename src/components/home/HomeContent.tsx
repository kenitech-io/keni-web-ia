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
              viewBox="0 0 960 280"
              fill="none"
              className="w-full"
              role="img"
              aria-label="CI/CD pipeline diagram"
              style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
            >
              {/* CI pipeline */}
              <line x1="58" y1="48" x2="80" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
              <line x1="160" y1="48" x2="185" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
              <line x1="285" y1="48" x2="310" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
              <line x1="410" y1="48" x2="480" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />

              <rect x="173" y="18" width="250" height="60" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
              <text x="298" y="12" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CI</text>

              <rect x="0" y="34" width="58" height="28" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
              <text x="29" y="52" fontSize="9" fontWeight="300" fill="var(--muted)" textAnchor="middle">dev</text>

              <rect x="80" y="34" width="80" height="28" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
              <text x="120" y="52" fontSize="10" fontWeight="300" fill="var(--muted)" textAnchor="middle">Repo</text>

              <rect x="185" y="34" width="100" height="28" rx="4" fill="var(--pipe-purple-bg)" stroke="var(--pipe-purple-border)" strokeWidth="0.8" />
              <text x="235" y="52" fontSize="11" fontWeight="400" fill="var(--pipe-purple-text)" textAnchor="middle">Build</text>

              <rect x="310" y="34" width="100" height="28" rx="4" fill="var(--pipe-green-bg)" stroke="var(--pipe-green-border)" strokeWidth="0.8" />
              <text x="360" y="52" fontSize="11" fontWeight="400" fill="var(--pipe-green-text)" textAnchor="middle">Test</text>

              <rect x="480" y="34" width="100" height="28" rx="4" fill="var(--pipe-yellow-bg)" stroke="var(--pipe-yellow-border)" strokeWidth="0.8" />
              <text x="530" y="52" fontSize="11" fontWeight="400" fill="var(--pipe-yellow-text)" textAnchor="middle">Store</text>

              {/* Branches to 3 environments */}
              <line x1="580" y1="48" x2="650" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
              <path d="M530 62 L530 100 Q530 128 550 128 L650 128" stroke="var(--border-color)" strokeWidth="0.8" fill="none" />
              <path d="M530 62 L530 190 Q530 218 550 218 L650 218" stroke="var(--border-color)" strokeWidth="0.8" fill="none" />

              {/* DEV environment */}
              <rect x="620" y="18" width="310" height="60" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
              <text x="775" y="12" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>
              <rect x="650" y="34" width="100" height="28" rx="4" fill="var(--pipe-blue-bg)" stroke="var(--pipe-blue-border)" strokeWidth="0.8" />
              <text x="700" y="52" fontSize="10" fontWeight="400" fill="var(--pipe-blue-text)" textAnchor="middle">Secrets</text>
              <line x1="750" y1="48" x2="780" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
              <rect x="780" y="34" width="100" height="28" rx="4" fill="var(--pipe-orange-bg)" stroke="var(--pipe-orange-border)" strokeWidth="0.8" />
              <text x="830" y="52" fontSize="11" fontWeight="400" fill="var(--pipe-orange-text)" textAnchor="middle">DEV</text>

              {/* STG environment */}
              <rect x="620" y="98" width="310" height="60" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
              <text x="775" y="92" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>
              <rect x="650" y="114" width="100" height="28" rx="4" fill="var(--pipe-blue-bg)" stroke="var(--pipe-blue-border)" strokeWidth="0.8" />
              <text x="700" y="132" fontSize="10" fontWeight="400" fill="var(--pipe-blue-text)" textAnchor="middle">Secrets</text>
              <line x1="750" y1="128" x2="780" y2="128" stroke="var(--border-color)" strokeWidth="0.8" />
              <rect x="780" y="114" width="100" height="28" rx="4" fill="var(--pipe-orange-bg)" stroke="var(--pipe-orange-border)" strokeWidth="0.8" />
              <text x="830" y="132" fontSize="11" fontWeight="400" fill="var(--pipe-orange-text)" textAnchor="middle">STG</text>

              {/* PRO environment */}
              <rect x="620" y="188" width="310" height="60" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
              <text x="775" y="182" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>
              <rect x="650" y="204" width="100" height="28" rx="4" fill="var(--pipe-blue-bg)" stroke="var(--pipe-blue-border)" strokeWidth="0.8" />
              <text x="700" y="222" fontSize="10" fontWeight="400" fill="var(--pipe-blue-text)" textAnchor="middle">Secrets</text>
              <line x1="750" y1="218" x2="780" y2="218" stroke="var(--border-color)" strokeWidth="0.8" />
              <rect x="780" y="204" width="100" height="28" rx="4" fill="var(--pipe-orange-bg)" stroke="var(--pipe-orange-border)" strokeWidth="0.8" />
              <text x="830" y="222" fontSize="11" fontWeight="400" fill="var(--pipe-orange-text)" textAnchor="middle">PRO</text>

              {/* Animated particles */}
              <circle r="2.5" fill="var(--foreground)" opacity="0">
                <animate attributeName="cx" values="58;80;160;185" dur="1.5s" repeatCount="indefinite" begin="1s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
                <animate attributeName="cy" values="48;48;48;48" dur="1.5s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="opacity" values="0;0.25;0.25;0" dur="1.5s" repeatCount="indefinite" begin="1s" keyTimes="0;0.05;0.9;1" />
              </circle>

              <rect width="5" height="5" rx="1" fill="var(--pipe-purple-border)" opacity="0">
                <animate attributeName="x" values="410;480" dur="1.5s" repeatCount="indefinite" begin="1s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
                <animate attributeName="y" values="46;46" dur="1.5s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="opacity" values="0;0.3;0.3;0" dur="1.5s" repeatCount="indefinite" begin="1s" keyTimes="0;0.05;0.9;1" />
              </rect>

              <rect width="5" height="5" rx="1" fill="var(--pipe-orange-border)" opacity="0">
                <animate attributeName="x" values="580;650" dur="1.2s" repeatCount="indefinite" begin="1s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
                <animate attributeName="y" values="46;46" dur="1.2s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="opacity" values="0;0.25;0.25;0" dur="1.2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.05;0.9;1" />
              </rect>

              <rect width="5" height="5" rx="1" fill="var(--pipe-orange-border)" opacity="0">
                <animate attributeName="x" values="528;528;550;650" dur="2s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
                <animate attributeName="y" values="62;100;126;126" dur="2s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
                <animate attributeName="opacity" values="0;0.25;0.25;0" dur="2s" repeatCount="indefinite" begin="1.5s" keyTimes="0;0.05;0.9;1" />
              </rect>

              <rect width="5" height="5" rx="1" fill="var(--pipe-orange-border)" opacity="0">
                <animate attributeName="x" values="528;528;550;650" dur="2.2s" repeatCount="indefinite" begin="2s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
                <animate attributeName="y" values="62;190;216;216" dur="2.2s" repeatCount="indefinite" begin="2s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
                <animate attributeName="opacity" values="0;0.25;0.25;0" dur="2.2s" repeatCount="indefinite" begin="2s" keyTimes="0;0.05;0.9;1" />
              </rect>
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
