"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Container from "@/components/ui/Container";
import CTASection from "@/components/CTASection";
import { BLOCKED_DOMAINS } from "@/lib/config";

const InteractiveDiagram = dynamic(
  () => import("@/components/InteractiveDiagram"),
  { ssr: false }
);

export default function PlatformPageContent() {
  const router = useRouter();
  const [diagramOpen, setDiagramOpen] = useState(true);
  const [guideOpen, setGuideOpen] = useState(false);
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "sending" | "sent" | "error" | "blocked"
  >("idle");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const handleEmailSubmit = async (email: string, note: string) => {
    // Reset signal from child
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
        if (res.status === 422) {
          setEmailStatus("blocked");
        } else {
          setEmailStatus("error");
        }
        return;
      }

      setSubmittedEmail(email);
      setEmailStatus("sent");
    } catch {
      setEmailStatus("error");
    }
  };

  return (
    <main>
      {/* Hero with diagram preview */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="flex flex-col items-center text-center w-full px-6 -mt-16">
          {/* Diagram preview thumbnail */}
          <FadeIn type="up" delay={0.2} once className="w-full flex justify-center">
            <button
              onClick={() => setDiagramOpen(true)}
              className="mt-10 md:mt-12 group relative w-full max-w-[520px] aspect-[960/760] border border-border-color rounded-lg overflow-hidden transition-all duration-300 hover:border-foreground/30 hover:shadow-lg"
            >
              {/* Static SVG preview (complete diagram) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 960 760"
                className="w-full h-full"
                style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
              >
                <rect width="960" height="760" fill="var(--background)" />

                {/* SaaS row */}
                <text x="56" y="58" fontSize="10" fontWeight="500" fill="var(--muted)" letterSpacing="2">SAAS</text>
                <line x1="56" y1="96" x2="892" y2="96" stroke="var(--border-color)" strokeWidth="0.6" />
                <rect x="136" y="42" width="138" height="34" rx="17" fill="var(--background)" stroke="var(--pipe-saas-border)" strokeWidth="0.8" />
                <text x="205" y="64" fontSize="12" fontWeight="400" fill="var(--foreground-secondary)" textAnchor="middle">Overlay Network</text>
                <rect x="290" y="42" width="138" height="34" rx="17" fill="var(--background)" stroke="var(--pipe-saas-border)" strokeWidth="0.8" />
                <text x="359" y="64" fontSize="12" fontWeight="400" fill="var(--foreground-secondary)" textAnchor="middle">Secrets</text>
                <rect x="444" y="42" width="138" height="34" rx="17" fill="var(--background)" stroke="var(--pipe-saas-border)" strokeWidth="0.8" />
                <text x="513" y="64" fontSize="12" fontWeight="400" fill="var(--foreground-secondary)" textAnchor="middle">Identity</text>
                <rect x="598" y="42" width="138" height="34" rx="17" fill="var(--background)" stroke="var(--pipe-saas-border)" strokeWidth="0.8" />
                <text x="667" y="64" fontSize="12" fontWeight="400" fill="var(--foreground-secondary)" textAnchor="middle">Repository</text>
                <rect x="752" y="42" width="138" height="34" rx="17" fill="var(--background)" stroke="var(--pipe-saas-border)" strokeWidth="0.8" />
                <text x="821" y="64" fontSize="12" fontWeight="400" fill="var(--foreground-secondary)" textAnchor="middle">Backup</text>

                {/* Core server */}
                <rect x="56" y="132" width="836" height="240" rx="6" fill="transparent" stroke="var(--border-color)" strokeWidth="1" />
                <text x="86" y="154" fontSize="10" fontWeight="500" fill="var(--muted)" letterSpacing="2">CORE</text>
                <text x="86" y="170" fontSize="11" fontWeight="300" fill="var(--muted)" opacity="0.6">Bare Metal</text>

                {/* Overlay bars */}
                <rect x="80" y="186" width="788" height="20" rx="10" fill="var(--pipe-overlay-bg)" stroke="var(--pipe-overlay-border)" strokeWidth="0.6" />
                <text x="474" y="200" fontSize="9" fontWeight="400" fill="var(--pipe-overlay-text)" textAnchor="middle" letterSpacing="1">OVERLAY NETWORK</text>

                {/* Docker core */}
                <rect x="80" y="214" width="788" height="110" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="96" y="230" fontSize="11" fontWeight="300" fill="var(--muted)">Docker</text>

                {/* CI group */}
                <rect x="88" y="242" width="300" height="66" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="238" y="258" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CI</text>

                {/* CD group core */}
                <rect x="400" y="242" width="162" height="66" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="481" y="258" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>

                {/* Observability group */}
                <rect x="574" y="242" width="284" height="66" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="716" y="258" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">OBSERVABILITY</text>

                {/* Inner components */}
                <rect x="104" y="270" width="130" height="28" rx="4" fill="var(--pipe-purple-bg)" stroke="var(--pipe-purple-border)" strokeWidth="0.8" />
                <text x="169" y="289" fontSize="11" fontWeight="400" fill="var(--pipe-purple-text)" textAnchor="middle">Build</text>
                <rect x="242" y="270" width="130" height="28" rx="4" fill="var(--pipe-yellow-bg)" stroke="var(--pipe-yellow-border)" strokeWidth="0.8" />
                <text x="307" y="289" fontSize="11" fontWeight="400" fill="var(--pipe-yellow-text)" textAnchor="middle">Store</text>
                <rect x="416" y="270" width="130" height="28" rx="4" fill="var(--pipe-orange-bg)" stroke="var(--pipe-orange-border)" strokeWidth="0.8" />
                <text x="481" y="289" fontSize="11" fontWeight="400" fill="var(--pipe-orange-text)" textAnchor="middle">Deploy</text>
                <rect x="582" y="270" width="130" height="28" rx="4" fill="var(--pipe-green-bg)" stroke="var(--pipe-green-border)" strokeWidth="0.8" />
                <text x="647" y="289" fontSize="11" fontWeight="400" fill="var(--pipe-green-text)" textAnchor="middle">Monitoring</text>
                <rect x="720" y="270" width="130" height="28" rx="4" fill="var(--pipe-green-bg)" stroke="var(--pipe-green-border)" strokeWidth="0.8" />
                <text x="785" y="289" fontSize="11" fontWeight="400" fill="var(--pipe-green-text)" textAnchor="middle">Alerts</text>

                {/* Proxy core */}
                <rect x="80" y="336" width="788" height="18" rx="4" fill="var(--pipe-red-bg)" stroke="var(--pipe-red-border)" strokeWidth="0.8" />
                <text x="474" y="349" fontSize="9" fontWeight="400" fill="var(--pipe-red-text)" textAnchor="middle">Proxy</text>

                {/* Dev server */}
                <rect x="56" y="408" width="400" height="304" rx="6" fill="transparent" stroke="var(--border-color)" strokeWidth="1" />
                <text x="86" y="430" fontSize="10" fontWeight="500" fill="var(--muted)" letterSpacing="2">DEV</text>
                <text x="86" y="446" fontSize="11" fontWeight="300" fill="var(--muted)" opacity="0.6">Bare Metal</text>

                {/* Dev overlay */}
                <rect x="80" y="462" width="352" height="20" rx="10" fill="var(--pipe-overlay-bg)" stroke="var(--pipe-overlay-border)" strokeWidth="0.6" />
                <text x="256" y="476" fontSize="9" fontWeight="400" fill="var(--pipe-overlay-text)" textAnchor="middle" letterSpacing="1">OVERLAY NETWORK</text>

                {/* Dev Docker */}
                <rect x="80" y="490" width="352" height="174" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="96" y="506" fontSize="11" fontWeight="300" fill="var(--muted)">Docker</text>

                {/* Dev CD */}
                <rect x="100" y="518" width="168" height="102" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="184" y="534" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>

                {/* Dev inner */}
                <rect x="119" y="546" width="130" height="28" rx="4" fill="var(--pipe-orange-bg)" stroke="var(--pipe-orange-border)" strokeWidth="0.8" />
                <text x="184" y="565" fontSize="11" fontWeight="400" fill="var(--pipe-orange-text)" textAnchor="middle">Deploy Agent</text>
                <rect x="119" y="582" width="130" height="28" rx="4" fill="var(--pipe-blue-bg)" stroke="var(--pipe-blue-border)" strokeWidth="0.8" />
                <text x="184" y="601" fontSize="11" fontWeight="400" fill="var(--pipe-blue-text)" textAnchor="middle">Secrets Agent</text>

                {/* Dev app stacks */}
                <rect x="284" y="518" width="130" height="28" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="349" y="537" fontSize="11" fontWeight="300" fill="var(--muted)" textAnchor="middle">App Stack</text>
                <rect x="284" y="554" width="130" height="28" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="349" y="573" fontSize="11" fontWeight="300" fill="var(--muted)" textAnchor="middle">App Stack</text>
                <rect x="284" y="590" width="130" height="28" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="349" y="609" fontSize="11" fontWeight="300" fill="var(--muted)" textAnchor="middle">App Stack</text>

                {/* Dev proxy */}
                <rect x="80" y="676" width="352" height="18" rx="4" fill="var(--pipe-red-bg)" stroke="var(--pipe-red-border)" strokeWidth="0.8" />
                <text x="256" y="689" fontSize="9" fontWeight="400" fill="var(--pipe-red-text)" textAnchor="middle">Proxy</text>

                {/* Prod server */}
                <rect x="492" y="408" width="400" height="304" rx="6" fill="transparent" stroke="var(--border-color)" strokeWidth="1" />
                <text x="522" y="430" fontSize="10" fontWeight="500" fill="var(--muted)" letterSpacing="2">PROD</text>
                <text x="522" y="446" fontSize="11" fontWeight="300" fill="var(--muted)" opacity="0.6">Bare Metal</text>

                {/* Prod overlay */}
                <rect x="516" y="462" width="352" height="20" rx="10" fill="var(--pipe-overlay-bg)" stroke="var(--pipe-overlay-border)" strokeWidth="0.6" />
                <text x="692" y="476" fontSize="9" fontWeight="400" fill="var(--pipe-overlay-text)" textAnchor="middle" letterSpacing="1">OVERLAY NETWORK</text>

                {/* Prod Docker */}
                <rect x="516" y="490" width="352" height="174" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="532" y="506" fontSize="11" fontWeight="300" fill="var(--muted)">Docker</text>

                {/* Prod CD */}
                <rect x="536" y="518" width="168" height="102" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="620" y="534" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>

                {/* Prod inner */}
                <rect x="555" y="546" width="130" height="28" rx="4" fill="var(--pipe-orange-bg)" stroke="var(--pipe-orange-border)" strokeWidth="0.8" />
                <text x="620" y="565" fontSize="11" fontWeight="400" fill="var(--pipe-orange-text)" textAnchor="middle">Deploy Agent</text>
                <rect x="555" y="582" width="130" height="28" rx="4" fill="var(--pipe-blue-bg)" stroke="var(--pipe-blue-border)" strokeWidth="0.8" />
                <text x="620" y="601" fontSize="11" fontWeight="400" fill="var(--pipe-blue-text)" textAnchor="middle">Secrets Agent</text>

                {/* Prod app stacks */}
                <rect x="720" y="518" width="130" height="28" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="785" y="537" fontSize="11" fontWeight="300" fill="var(--muted)" textAnchor="middle">App Stack</text>
                <rect x="720" y="554" width="130" height="28" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="785" y="573" fontSize="11" fontWeight="300" fill="var(--muted)" textAnchor="middle">App Stack</text>
                <rect x="720" y="590" width="130" height="28" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
                <text x="785" y="609" fontSize="11" fontWeight="300" fill="var(--muted)" textAnchor="middle">App Stack</text>

                {/* Prod backup agent */}
                <rect x="536" y="633" width="314" height="18" rx="4" fill="var(--pipe-teal-bg)" stroke="var(--pipe-teal-border)" strokeWidth="0.8" />
                <text x="693" y="646" fontSize="9" fontWeight="400" fill="var(--pipe-teal-text)" textAnchor="middle">Backup Agent</text>

                {/* Prod proxy */}
                <rect x="516" y="676" width="352" height="18" rx="4" fill="var(--pipe-red-bg)" stroke="var(--pipe-red-border)" strokeWidth="0.8" />
                <text x="692" y="689" fontSize="9" fontWeight="400" fill="var(--pipe-red-text)" textAnchor="middle">Proxy</text>
              </svg>

              {/* Overlay with CTA */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 group-hover:bg-background/60 transition-colors duration-300">
                <span className="bg-foreground text-background rounded-full px-5 py-2 font-medium text-sm">
                  Explore
                </span>
              </div>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Interactive diagram overlay */}
      <InteractiveDiagram
        isOpen={diagramOpen}
        onClose={() => router.push("/?skip")}
        emailStatus={emailStatus}
        onEmailSubmit={handleEmailSubmit}
        submittedEmail={submittedEmail}
      />

      {/* Guide request */}
      <section className="py-section-sm">
        <Container>
          <FadeIn>
            <div className="max-w-[480px] mx-auto text-center">
              {emailStatus === "sent" ? (
                <div className="py-8">
                  <p className="text-sm font-medium text-foreground mb-1">Got it.</p>
                  <p className="text-xs text-foreground-secondary">
                    We will send the full reference to{" "}
                    <span className="text-foreground">{submittedEmail}</span> shortly.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-body text-foreground-secondary mb-6">
                    Want the full guide with exact tool recommendations and design principles?
                  </p>
                  <button
                    onClick={() => setGuideOpen(true)}
                    className="text-muted hover:text-foreground text-sm transition-colors"
                  >
                    Request the guide
                  </button>
                </>
              )}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Guide request modal */}
      <AnimatePresence>
        {guideOpen && (
          <GuideModal
            onClose={() => setGuideOpen(false)}
            emailStatus={emailStatus}
            onSubmit={(e) => {
              e.preventDefault();
              handleEmailSubmit(email, note);
            }}
            email={email}
            setEmail={setEmail}
            note={note}
            setNote={setNote}
            onReset={() => handleEmailSubmit("__reset__", "")}
          />
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <CTASection
        headline="Want us to build yours?"
        subtext="We look at your current setup and tell you exactly what we would change, and why."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}

function GuideModal({
  onClose,
  emailStatus,
  onSubmit,
  email,
  setEmail,
  note,
  setNote,
  onReset,
}: {
  onClose: () => void;
  emailStatus: "idle" | "sending" | "sent" | "error" | "blocked";
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  email: string;
  setEmail: (v: string) => void;
  note: string;
  setNote: (v: string) => void;
  onReset: () => void;
}) {
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

  const inputClasses =
    "bg-transparent border-b border-border-color focus:border-foreground py-2 text-sm text-foreground w-full outline-none transition-colors placeholder:text-muted";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-[400px] border border-border-color bg-background rounded-lg p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <p className="text-sm font-medium text-foreground mb-1">Get the guide</p>
        <p className="text-xs text-foreground-secondary mb-6">
          Exact tool recommendations and design principles.
        </p>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailStatus === "blocked" || emailStatus === "error") onReset();
            }}
            className={inputClasses}
            placeholder="you@company.com"
            required
          />
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={1}
            className={`${inputClasses} resize-none`}
            placeholder="Add a note"
          />
          {emailStatus === "blocked" && (
            <p className="text-xs text-foreground-secondary">Please use your work email.</p>
          )}
          {emailStatus === "error" && (
            <p className="text-xs text-red-600">Something went wrong. Please try again.</p>
          )}
          <button
            type="submit"
            disabled={emailStatus === "sending"}
            className="bg-foreground hover:bg-charcoal disabled:opacity-50 text-background w-full px-4 py-2.5 text-sm font-medium rounded-full transition-colors"
          >
            {emailStatus === "sending" ? "Sending..." : "Request guide"}
          </button>
          <p className="text-[10px] text-muted text-center">We promise no spam.</p>
        </form>
      </div>
    </motion.div>
  );
}
