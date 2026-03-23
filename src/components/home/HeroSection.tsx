"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BOOKING_URL } from "@/lib/config";

export default function HeroSection() {
  const searchParams = useSearchParams();
  const skip = searchParams.get("skip") !== null;
  const [phase, setPhase] = useState<"loading" | "intro" | "transition" | "hero">(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("intro-seen") === "true") return "hero";
    return "loading";
  });
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("intro-seen") === "true";
    if (skip || alreadySeen) {
      setPhase("hero");
      return;
    }
    setPhase("intro");
    const s1 = setTimeout(() => setShowTitle(true), 200);
    const s2 = setTimeout(() => setShowSubtitle(true), 550);
    const t1 = setTimeout(() => {
      sessionStorage.setItem("intro-seen", "true");
      setPhase("transition");
    }, 1400);
    const t2 = setTimeout(() => setPhase("hero"), 2100);
    return () => { clearTimeout(s1); clearTimeout(s2); clearTimeout(t1); clearTimeout(t2); };
  }, [skip]);

  return (
    <>
      {/* Hero section */}
      <section
        className="h-screen flex items-center justify-center px-6 relative overflow-hidden"
        style={{ backgroundColor: "var(--background)" }}
      >
        {/* Orange background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#EF6C00",
            opacity: phase === "intro" || phase === "loading" ? 1 : 0,
            transition: "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
            pointerEvents: "none",
          }}
        />

        {/* Intro content */}
        <div
          className="absolute flex flex-col items-center text-center"
          style={{
            opacity: phase === "intro" ? 1 : 0,
            transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            pointerEvents: phase === "intro" ? "auto" : "none",
          }}
        >
          <span
            className="font-semibold text-white"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: 1,
              opacity: showTitle ? 1 : 0,
              transition: "opacity 0.8s ease-out",
            }}
          >
            DEVOPS
          </span>
          <span
            className="font-light text-white/70 tracking-[0.3em] uppercase mt-4"
            style={{
              fontSize: "clamp(0.5rem, 0.8vw, 0.7rem)",
              opacity: showSubtitle ? 1 : 0,
              transition: "opacity 0.8s ease-out",
            }}
          >
            Keni Engineering
          </span>
        </div>

        {/* Main hero content — fades in slowly during transition */}
        <div
          className="max-w-[800px] text-center"
          style={{
            opacity: phase === "hero" ? 1 : 0,
            transform: phase === "hero" ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
            <h1
              className="text-foreground font-bold tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              Push. Build. Deploy.
            </h1>
            <p className="text-foreground-secondary text-base md:text-lg font-light mt-5 mb-9 max-w-[520px] mx-auto leading-relaxed">
              We automate everything so your team can focus on product.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-foreground hover:bg-foreground/85 text-background px-10 py-3 text-base font-light tracking-wide rounded-full transition-colors"
            >
              Let&apos;s talk
            </a>
            <div className="mt-12 pt-10 border-t border-border-color w-[130%] -ml-[15%]">
              <a href="/infrastructure-audit">
                <p className="text-sm tracking-wide font-semibold mb-1 hover:opacity-70 transition-opacity">
                  <span className="text-[#EF6C00]">FREE</span> <span className="text-foreground">INFRASTRUCTURE AUDIT</span>
                </p>
              </a>
              <p className="text-sm text-muted font-light">
                CI/CD review, security audit, cost analysis, architecture report & actionable roadmap
              </p>
            </div>
          </div>
      </section>

    </>
  );
}
