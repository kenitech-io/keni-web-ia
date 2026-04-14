"use client";

import { useState, useEffect, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";

type Phase = "loading" | "intro" | "transition" | "hero";

export default function HeroAnimation({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const skip = searchParams.get("skip") !== null;
  const [phase, setPhase] = useState<Phase>(() => {
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
    <section
      className="h-screen flex items-center justify-center lg:justify-start px-6 md:px-[8%] lg:px-[10%] relative overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Orange background overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#C65100",
          opacity: phase === "intro" || phase === "loading" ? 1 : 0,
          transition: "opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none",
        }}
      />

      {/* Intro content (animation-only, not SEO-critical) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        aria-hidden="true"
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

      {/* Main hero content, server-rendered children with animation wrapper */}
      <div
        className="w-full max-w-[1200px] text-center lg:text-left pb-16 lg:pb-8"
        style={{
          opacity: phase === "hero" ? 1 : 0,
          transform: phase === "hero" ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {children}
      </div>

    </section>
  );
}
