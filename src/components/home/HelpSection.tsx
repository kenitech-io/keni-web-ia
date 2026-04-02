"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const cards = [
  {
    label: "SMALL TEAMS",
    headline: "Built for teams like yours.",
    image: "/help-team.png",
    alt: "Team collaborating on infrastructure",
    href: "/devops-consulting",
    dark: true,
    fullBleed: true,
  },
  {
    label: "AUTOMATION",
    headline: "Push code. We handle the rest.",
    image: null,
    alt: "",
    href: "/platform",
    dark: false,
    icon: "automation",
    bgWhite: true,
    bgHex: "#F4F5F9",
    labelColor: "text-muted",
  },
  {
    label: "CASE STUDIES",
    headline: "Eyes on everything.",
    image: "/help-dashboard.png",
    alt: "Keni dashboard showing real-time infrastructure metrics",
    href: "/devops-consulting",
    dark: false,
    bgWhite: true,
    bgHex: "#FFFFFF",
  },
  {
    label: "KENI SPECIALISTS",
    headline: "Real experts. Real conversations.",
    image: "/help-meet-us.png",
    alt: "Mikel, co-founder of Keni Engineering",
    href: "/about",
    dark: false,
    portrait: true,
    bgWhite: true,
  },
  {
    label: "DEDICATED EXPERTS",
    headline: "Always learning. Always building.",
    image: "/help-innovation.png",
    alt: "Abstract 3D blocks representing innovation and teamwork",
    href: "/about",
    dark: true,
    labelColor: "text-[#C65100]",
    imageOffset: "30%",
  },
  {
    label: "SEE THE RESULTS",
    headline: "30 days to fully automated.",
    image: null,
    alt: "",
    href: "/devops-consulting",
    dark: false,
    icon: "rocket",
    bgWhite: true,
    bgHex: "#F4F7F4",
    labelColor: "text-green-800",
  },
];

export default function HelpSection() {
  return (
    <section className="py-32 md:py-48">
      <Container>
        <FadeIn>
          <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
            We help you
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-heading text-foreground font-light tracking-wide mb-16 text-center">
            When, how and where you want
          </h2>
        </FadeIn>

        <div className="mt-12 md:mt-16 flex gap-5 overflow-x-auto overflow-y-visible pb-16 pt-6 snap-x snap-mandatory scrollbar-hide -mx-10 px-10 md:-mx-8 md:px-8 touch-pan-x">
          {cards.map((card, i) => (
            <FadeIn key={card.label} delay={i * 0.1}>
              <Link
                href={card.href}
                className="group block flex-shrink-0 w-[300px] md:w-[360px] snap-start"
              >
                <div
                  className={`relative rounded-2xl overflow-hidden h-[420px] md:h-[500px] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-2xl ${
                    card.dark
                      ? "bg-black text-white"
                      : "bgWhite" in card && card.bgWhite
                      ? "bg-[#F5F5F5] dark:bg-[#F5F5F5] text-black"
                      : "bgHex" in card
                      ? "text-white"
                      : "bg-surface text-foreground"
                  }`}
                  style={"bgHex" in card ? { backgroundColor: card.bgHex } : undefined}
                >
                  {/* Blue glow effect */}
                  {"glowBlue" in card && card.glowBlue && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(100, 160, 255, 0.05) 40%, transparent 70%)",
                      }}
                    />
                  )}

                  {/* Green glow effect */}
                  {"glowGreen" in card && card.glowGreen && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(74, 222, 128, 0.05) 40%, transparent 70%)",
                      }}
                    />
                  )}

                  {/* Full-bleed background image */}
                  {"fullBleed" in card && card.fullBleed && card.image && (
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 320px, 420px"
                    />
                  )}

                  <div className="relative z-10 p-8 md:p-10">
                    <p
                      className={`text-[0.65rem] font-semibold tracking-[0.15em] mb-4 ${
                        "labelColor" in card && card.labelColor
                          ? card.labelColor
                          : "fullBleed" in card && card.fullBleed
                          ? card.dark ? "text-white/70" : "text-muted"
                          : card.dark
                          ? "text-blue-400"
                          : "text-muted"
                      }`}
                    >
                      {card.label}
                    </p>
                    <h3 className="text-[1.4rem] md:text-[1.6rem] font-medium leading-tight tracking-wide">
                      {card.headline}
                    </h3>
                  </div>

                  {/* Portrait image (Apple style, no gradient) */}
                  {"portrait" in card && card.portrait && card.image && (
                    <div className="absolute -bottom-4 left-0 right-0 h-[70%] flex justify-center">
                      <div className="relative w-[85%] h-full">
                        <Image
                          src={card.image}
                          alt={card.alt}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 240px, 315px"
                        />
                      </div>
                    </div>
                  )}

                  {/* Partial image (non full-bleed, non portrait) */}
                  {card.image && !("fullBleed" in card && card.fullBleed) && !("portrait" in card && card.portrait) && (
                    <div className="absolute left-0 right-0 bottom-0" style={{ top: "imageOffset" in card ? card.imageOffset : "-40%" }}>
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className={`${"imageOffset" in card ? "object-cover" : "object-contain"} object-bottom ${card.dark ? "" : "mix-blend-multiply"}`}
                        sizes="(max-width: 768px) 320px, 420px"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${
                          card.dark
                            ? "from-black via-transparent to-transparent"
                            : "from-[#F5F5F5] via-transparent to-transparent"
                        }`}
                      />
                    </div>
                  )}

                  {!card.image && (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center pt-20">
                        {"icon" in card && card.icon === "rocket" && (
                          <svg
                            className="w-36 h-36 md:w-44 md:h-44"
                            viewBox="0 0 64 64"
                            fill="none"
                          >
                            {/* Base line */}
                            <line x1="4" y1="38" x2="16" y2="38" stroke="#166534" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                            {/* Pulse down */}
                            <path d="M16 38 L20 38 L23 46 L28 28 L33 42 L36 34 L39 38" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                            {/* Peak spike upward */}
                            <path d="M39 38 L42 20 L45 38" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                            {/* Trailing line */}
                            <line x1="45" y1="38" x2="60" y2="38" stroke="#166534" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                            {/* Glow dot at peak */}
                            <circle cx="42" cy="20" r="2" fill="#166534" opacity="0.4" />
                            <circle cx="42" cy="20" r="4" fill="#166534" opacity="0.1" />
                          </svg>
                        )}
                        {"icon" in card && card.icon === "scan" && (
                          <span className="text-xs font-medium tracking-widest text-black/30 uppercase">Click here</span>
                        )}
                        {"icon" in card && card.icon === "chart" && (
                          <svg
                            className="w-44 h-36 md:w-56 md:h-44"
                            viewBox="0 0 120 80"
                            fill="none"
                          >
                            {/* Laptop body */}
                            <rect x="15" y="4" width="90" height="58" rx="4" stroke="#1a1a1a" strokeWidth="2" fill="#111" />
                            {/* Screen */}
                            <rect x="19" y="8" width="82" height="50" rx="1" fill="#0d1117" />
                            {/* Screen content - dark dashboard */}
                            {/* Top bar */}
                            <rect x="22" y="11" width="20" height="2" rx="1" fill="#30363d" />
                            <circle cx="94" cy="12" r="1.5" fill="#238636" opacity="0.8" />
                            {/* Left panel - metric cards */}
                            <rect x="22" y="16" width="18" height="10" rx="1.5" fill="#161b22" />
                            <rect x="24" y="18" width="8" height="2" rx="0.5" fill="#238636" opacity="0.6" />
                            <rect x="24" y="22" width="14" height="1.5" rx="0.5" fill="#30363d" />
                            <rect x="22" y="29" width="18" height="10" rx="1.5" fill="#161b22" />
                            <rect x="24" y="31" width="10" height="2" rx="0.5" fill="#1f6feb" opacity="0.6" />
                            <rect x="24" y="35" width="12" height="1.5" rx="0.5" fill="#30363d" />
                            {/* Main chart area */}
                            <rect x="43" y="16" width="55" height="36" rx="1.5" fill="#161b22" />
                            {/* Chart line */}
                            <path d="M48 44 L55 40 L62 42 L69 35 L76 32 L83 28 L90 24 L94 20" stroke="#238636" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
                            {/* Chart area fill */}
                            <path d="M48 44 L55 40 L62 42 L69 35 L76 32 L83 28 L90 24 L94 20 L94 48 L48 48 Z" fill="#238636" opacity="0.08" />
                            {/* Bottom stats */}
                            <rect x="22" y="42" width="18" height="10" rx="1.5" fill="#161b22" />
                            <rect x="24" y="44" width="6" height="2" rx="0.5" fill="#f0883e" opacity="0.6" />
                            <rect x="24" y="48" width="14" height="1.5" rx="0.5" fill="#30363d" />
                            {/* Laptop base */}
                            <path d="M10 62 L15 62 Q15 66 12 66 L108 66 Q105 66 105 62 L110 62" stroke="#1a1a1a" strokeWidth="1.5" fill="#222" />
                            <line x1="12" y1="66" x2="108" y2="66" stroke="#1a1a1a" strokeWidth="1.5" />
                            {/* Trackpad hint */}
                            <rect x="50" y="63" width="20" height="2" rx="1" fill="#333" opacity="0.5" />
                          </svg>
                        )}
                        {"icon" in card && card.icon === "automation" && (
                          <svg
                            className="w-36 h-36 md:w-44 md:h-44"
                            viewBox="0 0 64 64"
                            fill="none"
                          >
                            {/* Pipeline flow: three nodes connected by curved lines */}
                            {/* Node 1 - left */}
                            <rect x="6" y="26" width="12" height="12" rx="3" stroke="#2563eb" strokeWidth="1" opacity="0.4" />
                            <rect x="9" y="29" width="6" height="6" rx="1.5" fill="#2563eb" opacity="0.15" />
                            {/* Connection 1-2 */}
                            <path d="M18 32 C24 32, 22 20, 28 20" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                            {/* Node 2 - center top */}
                            <rect x="26" y="14" width="12" height="12" rx="3" stroke="#2563eb" strokeWidth="1" opacity="0.5" />
                            <rect x="29" y="17" width="6" height="6" rx="1.5" fill="#2563eb" opacity="0.25" />
                            {/* Connection 2-3 */}
                            <path d="M38 20 C44 20, 42 38, 48 38" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                            {/* Node 3 - right */}
                            <rect x="46" y="32" width="12" height="12" rx="3" stroke="#2563eb" strokeWidth="1" opacity="0.6" />
                            <rect x="49" y="35" width="6" height="6" rx="1.5" fill="#2563eb" opacity="0.35" />
                            {/* Arrow at end */}
                            <path d="M58 38 L62 38" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
                            <path d="M60 36 L63 38 L60 40" stroke="#2563eb" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                          </svg>
                        )}
                      </div>
                      {/* CTA */}
                      <div className="absolute bottom-8 left-7 right-7 md:left-9 md:right-9">
                        <div className="flex items-center gap-2 text-sm font-medium text-muted group-hover:text-foreground transition-colors duration-300">
                          See how we do it
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
