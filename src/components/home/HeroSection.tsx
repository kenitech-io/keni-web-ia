"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function HeroSection() {
  const searchParams = useSearchParams();
  const skip = searchParams.get("skip") !== null;
  const [showIntro, setShowIntro] = useState(!skip);

  useEffect(() => {
    if (skip) return;
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, [skip]);

  return (
    <>
      {/* Intro screen */}
      {showIntro && !skip && (
        <div
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center"
          style={{
            backgroundColor: "#EF6C00",
            animation: "introOut 1.5s ease-out 2.2s forwards",
          }}
        >
          <span
            className="font-semibold text-white"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: 1,
              opacity: 0,
              animation: "introFadeIn 0.8s ease-out 0.3s forwards",
            }}
          >
            DEVOPS
          </span>
          <span
            className="font-light text-white/70 tracking-[0.3em] uppercase mt-4"
            style={{
              fontSize: "clamp(0.5rem, 0.8vw, 0.7rem)",
              opacity: 0,
              animation: "introFadeIn 0.8s ease-out 0.8s forwards",
            }}
          >
            Keni Engineering
          </span>
        </div>
      )}

      <style>{`
        @keyframes introFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes introOut {
          to { opacity: 0; pointer-events: none; }
        }
      `}</style>

      {/* Main hero */}
      <section className="h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-[800px] text-center">
          <h1
            className="text-foreground font-bold tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            Push. Deploy. Build.
          </h1>
          <p className="text-foreground-secondary text-lg md:text-xl font-light mt-6 mb-10 max-w-[560px] mx-auto leading-relaxed">
            We take care of the plumbing so you can build the house.
          </p>
          <a
            href="/contact"
            className="inline-block bg-foreground hover:bg-foreground/85 text-background px-8 py-2.5 text-xs font-light tracking-wide rounded-full transition-colors"
          >
            Book a free call
          </a>
        </div>
      </section>

      {/* Pipeline section */}
      <section className="flex flex-col items-center py-24 md:py-32">
        <p className="text-body text-foreground-secondary mb-12 md:mb-16 text-center">
          From commit to production, hands-free
        </p>

        <div className="w-full max-w-[1100px] px-4">
          <svg
            viewBox="0 0 960 280"
            fill="none"
            className="w-full"
            style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
          >
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

            <rect x="185" y="34" width="100" height="28" rx="4" fill="#EDE7F6" stroke="#5E35B1" strokeWidth="0.8" />
            <text x="235" y="52" fontSize="11" fontWeight="400" fill="#4527A0" textAnchor="middle">Build</text>

            <rect x="310" y="34" width="100" height="28" rx="4" fill="#E0F2F1" stroke="#00897B" strokeWidth="0.8" />
            <text x="360" y="52" fontSize="11" fontWeight="400" fill="#00695C" textAnchor="middle">Test</text>

            <rect x="480" y="34" width="100" height="28" rx="4" fill="#FFF9C4" stroke="#D4B000" strokeWidth="0.8" />
            <text x="530" y="52" fontSize="11" fontWeight="400" fill="#C6A700" textAnchor="middle">Store</text>

            <line x1="580" y1="48" x2="650" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
            <path d="M530 62 L530 100 Q530 128 550 128 L650 128" stroke="var(--border-color)" strokeWidth="0.8" fill="none" />
            <path d="M530 62 L530 190 Q530 218 550 218 L650 218" stroke="var(--border-color)" strokeWidth="0.8" fill="none" />

            <rect x="620" y="18" width="310" height="60" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
            <text x="775" y="12" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>
            <rect x="650" y="34" width="100" height="28" rx="4" fill="#E3F2FD" stroke="#1565C0" strokeWidth="0.8" />
            <text x="700" y="52" fontSize="10" fontWeight="400" fill="#0D47A1" textAnchor="middle">Secrets</text>
            <line x1="750" y1="48" x2="780" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
            <rect x="780" y="34" width="100" height="28" rx="4" fill="#FFF3E0" stroke="#EF6C00" strokeWidth="0.8" />
            <text x="830" y="52" fontSize="11" fontWeight="400" fill="#E65100" textAnchor="middle">DEV</text>

            <rect x="620" y="98" width="310" height="60" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
            <text x="775" y="92" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>
            <rect x="650" y="114" width="100" height="28" rx="4" fill="#E3F2FD" stroke="#1565C0" strokeWidth="0.8" />
            <text x="700" y="132" fontSize="10" fontWeight="400" fill="#0D47A1" textAnchor="middle">Secrets</text>
            <line x1="750" y1="128" x2="780" y2="128" stroke="var(--border-color)" strokeWidth="0.8" />
            <rect x="780" y="114" width="100" height="28" rx="4" fill="#FFF3E0" stroke="#EF6C00" strokeWidth="0.8" />
            <text x="830" y="132" fontSize="11" fontWeight="400" fill="#E65100" textAnchor="middle">STG</text>

            <rect x="620" y="188" width="310" height="60" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
            <text x="775" y="182" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>
            <rect x="650" y="204" width="100" height="28" rx="4" fill="#E3F2FD" stroke="#1565C0" strokeWidth="0.8" />
            <text x="700" y="222" fontSize="10" fontWeight="400" fill="#0D47A1" textAnchor="middle">Secrets</text>
            <line x1="750" y1="218" x2="780" y2="218" stroke="var(--border-color)" strokeWidth="0.8" />
            <rect x="780" y="204" width="100" height="28" rx="4" fill="#FFF3E0" stroke="#EF6C00" strokeWidth="0.8" />
            <text x="830" y="222" fontSize="11" fontWeight="400" fill="#E65100" textAnchor="middle">PRO</text>

            <circle r="2.5" fill="var(--foreground)" opacity="0">
              <animate attributeName="cx" values="58;80;160;185" dur="1.5s" repeatCount="indefinite" begin="1s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
              <animate attributeName="cy" values="48;48;48;48" dur="1.5s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0;0.25;0.25;0" dur="1.5s" repeatCount="indefinite" begin="1s" keyTimes="0;0.05;0.9;1" />
            </circle>

            <rect width="5" height="5" rx="1" fill="#5E35B1" opacity="0">
              <animate attributeName="x" values="410;480" dur="1.5s" repeatCount="indefinite" begin="1s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
              <animate attributeName="y" values="46;46" dur="1.5s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0;0.3;0.3;0" dur="1.5s" repeatCount="indefinite" begin="1s" keyTimes="0;0.05;0.9;1" />
            </rect>

            <rect width="5" height="5" rx="1" fill="#EF6C00" opacity="0">
              <animate attributeName="x" values="580;650" dur="1.2s" repeatCount="indefinite" begin="1s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
              <animate attributeName="y" values="46;46" dur="1.2s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0;0.25;0.25;0" dur="1.2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.05;0.9;1" />
            </rect>

            <rect width="5" height="5" rx="1" fill="#EF6C00" opacity="0">
              <animate attributeName="x" values="528;528;550;650" dur="2s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
              <animate attributeName="y" values="62;100;126;126" dur="2s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
              <animate attributeName="opacity" values="0;0.25;0.25;0" dur="2s" repeatCount="indefinite" begin="1.5s" keyTimes="0;0.05;0.9;1" />
            </rect>

            <rect width="5" height="5" rx="1" fill="#EF6C00" opacity="0">
              <animate attributeName="x" values="528;528;550;650" dur="2.2s" repeatCount="indefinite" begin="2s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
              <animate attributeName="y" values="62;190;216;216" dur="2.2s" repeatCount="indefinite" begin="2s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
              <animate attributeName="opacity" values="0;0.25;0.25;0" dur="2.2s" repeatCount="indefinite" begin="2s" keyTimes="0;0.05;0.9;1" />
            </rect>
          </svg>
        </div>
      </section>
    </>
  );
}
