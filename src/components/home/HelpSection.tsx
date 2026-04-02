"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

interface Card {
  label: string;
  headline: string;
  image: string | null;
  alt: string;
  href: string;
  dark: boolean;
  labelColor?: string;
  portrait?: boolean;
  bgWhite?: boolean;
  icon?: string;
  fullBleed?: boolean;
  bgHex?: string;
  glowBlue?: boolean;
  glowGreen?: boolean;
}

const cards: Card[] = [
  {
    label: "DEDICATED EXPERTS",
    headline: "Always learning. Always building.",
    image: "/help-innovation.png",
    alt: "Abstract 3D blocks representing innovation and teamwork",
    href: "/about",
    dark: true,
    labelColor: "text-[#C65100]",
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
    label: "AUTOMATION",
    headline: "Push code. We handle the rest.",
    image: null,
    alt: "",
    href: "/platform",
    dark: false,
    icon: "automation",
    bgWhite: true,
    labelColor: "text-muted",
  },
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
    label: "SEE THE RESULTS",
    headline: "30 days to fully automated.",
    image: null,
    alt: "",
    href: "/devops-consulting",
    dark: false,
    icon: "rocket",
    bgWhite: true,
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
                className="group block flex-shrink-0 w-[280px] md:w-[340px] snap-start"
              >
                <div
                  className={`relative rounded-2xl overflow-hidden h-[380px] md:h-[440px] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-2xl ${
                    card.bgHex
                      ? "text-white"
                      : card.dark
                      ? "bg-black text-white"
                      : card.bgWhite
                      ? "bg-[#F5F5F5] dark:bg-[#F5F5F5] text-black"
                      : "bg-surface text-foreground"
                  }`}
                  style={card.bgHex ? { backgroundColor: card.bgHex } : undefined}
                >
                  {/* Blue glow effect */}
                  {card.glowBlue && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(100, 160, 255, 0.05) 40%, transparent 70%)",
                      }}
                    />
                  )}

                  {/* Green glow effect */}
                  {card.glowGreen && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(74, 222, 128, 0.05) 40%, transparent 70%)",
                      }}
                    />
                  )}

                  {/* Full-bleed background image */}
                  {card.fullBleed && card.image && (
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 320px, 420px"
                    />
                  )}

                  <div className="relative z-10 p-6 md:p-7">
                    <p
                      className={`text-xs font-semibold tracking-[0.08em] mb-3 ${
                        card.labelColor
                          ? card.labelColor
                          : card.fullBleed
                          ? card.dark ? "text-white/70" : "text-muted"
                          : card.dark
                          ? "text-blue-400"
                          : "text-muted"
                      }`}
                    >
                      {card.label}
                    </p>
                    <h3 className="text-[1.1rem] md:text-[1.2rem] font-normal leading-snug tracking-wide">
                      {card.headline}
                    </h3>
                  </div>

                  {/* Portrait image (Apple style, no gradient) */}
                  {card.portrait && card.image && (
                    <div className="absolute bottom-0 left-0 right-0 h-[68%] flex justify-center">
                      <div className="relative w-[90%] h-full">
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
                  {card.image && !(card.fullBleed) && !(card.portrait) && (
                    <div className="absolute bottom-0 left-0 right-0 h-[65%]">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 320px, 420px"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${
                          card.dark
                            ? "from-black via-transparent to-transparent"
                            : "from-surface via-transparent to-transparent"
                        }`}
                      />
                    </div>
                  )}

                  {!card.image && (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center pt-20">
                        {"icon" in card && card.icon === "rocket" && (
                          <svg
                            className="w-28 h-28 md:w-36 md:h-36"
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
                        {"icon" in card && card.icon === "automation" && (
                          <svg
                            className="w-28 h-28 md:w-36 md:h-36"
                            viewBox="0 0 64 64"
                            fill="none"
                          >
                            {/* Outer ring */}
                            <circle cx="32" cy="32" r="28" stroke="#2563eb" strokeWidth="0.5" opacity="0.3" />
                            {/* Inner ring with dash */}
                            <circle cx="32" cy="32" r="20" stroke="#2563eb" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.2" />
                            {/* Flowing arc - top */}
                            <path d="M32 4a28 28 0 0 1 24.2 14" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                            {/* Flowing arc - bottom */}
                            <path d="M32 60a28 28 0 0 1-24.2-14" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                            {/* Center dot */}
                            <circle cx="32" cy="32" r="2" fill="#2563eb" opacity="0.6" />
                            {/* Node dots on the arcs */}
                            <circle cx="56" cy="18" r="2.5" fill="#2563eb" opacity="0.5" />
                            <circle cx="8" cy="46" r="2.5" fill="#2563eb" opacity="0.5" />
                            {/* Connecting lines through center */}
                            <line x1="10" y1="45" x2="30" y2="33" stroke="#2563eb" strokeWidth="0.5" opacity="0.25" />
                            <line x1="34" y1="31" x2="54" y2="19" stroke="#2563eb" strokeWidth="0.5" opacity="0.25" />
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
