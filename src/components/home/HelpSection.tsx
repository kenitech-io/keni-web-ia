"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
  bgHex?: string;
  icon?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
  textTop?: boolean;
  imageWidth?: string;
  imageOffset?: string;
  labelColor2?: string;
  keepBlackDark?: boolean;
}

const cards: Card[] = [
  {
    label: "SMALL TEAMS",
    headline: "Built for teams like yours.",
    image: "/help-team.png",
    alt: "Team collaborating on infrastructure",
    href: "/devops-consulting",
    dark: true,
    objectPosition: "center top",
    textTop: true,
  },
  {
    label: "OUR SERVICES",
    headline: "We handle it all.",
    image: null,
    alt: "",
    href: "/devops-consulting",
    dark: false,
    bgHex: "#f0f0f0",
    icon: "devops",
  },
  {
    label: "AUTOMATION",
    headline: "Push code. We handle the rest.",
    image: null,
    alt: "",
    href: "/platform",
    dark: true,
    icon: "automation",
    bgHex: "#000000",
  },
  {
    label: "CASE STUDIES",
    headline: "Eyes on everything.",
    image: null,
    alt: "",
    href: "/devops-consulting",
    dark: true,
    bgHex: "#000000",
    icon: "dashboard",
  },
  {
    label: "KENI SPECIALISTS",
    headline: "Real experts. Real conversations.",
    image: "/help-meet-us.png",
    alt: "Mikel, co-founder of Keni Engineering",
    href: "/about",
    dark: false,
    bgHex: "#f0f0f0",
    objectFit: "contain",
    objectPosition: "center top",
    textTop: true,
  },
  {
    label: "DEDICATED EXPERTS",
    headline: "Always learning. Always building.",
    image: "/help-cube.png",
    alt: "Abstract 3D crystal cube representing innovation",
    href: "/about",
    dark: true,
    bgHex: "#000000",
    keepBlackDark: true,
    labelColor: "text-[#C65100]",
    objectFit: "contain",
    textTop: true,
    imageWidth: "220%",
    imageOffset: "0",
  },
  {
    label: "SEE THE RESULTS",
    headline: "30 days to fully automated.",
    image: null,
    alt: "",
    href: "/devops-consulting",
    dark: true,
    icon: "rocket",
    bgHex: "#000000",
    labelColor: "text-green-500",
  },
];

const AUTOPLAY_MS = 5500;
// Smooth exponential ease-out: gentle start, very gradual deceleration
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function HelpSection() {
  const [current, setCurrent] = useState(cards.length * 10); // start in the middle of 20 copies
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const update = () => setVisibleCards(window.innerWidth < 1024 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = cards.length;

  // Plenty of copies so we never visibly run out
  const COPIES = 20;
  const repeatedCards = Array.from({ length: COPIES }, () => cards).flat();
  const startOffset = total * Math.floor(COPIES / 2);

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => setCurrent((c) => c + 1), AUTOPLAY_MS);
  }, []);

  const next = useCallback(() => { setCurrent((c) => c + 1); resetAutoplay(); }, [resetAutoplay]);
  const prev = useCallback(() => { setCurrent((c) => c - 1); resetAutoplay(); }, [resetAutoplay]);

  // Silently snap back to the center equivalent after each transition
  const midpoint = total * Math.floor(COPIES / 2);
  const snapToCenter = useCallback(() => {
    const el = scrollRef.current?.firstElementChild as HTMLElement | null;
    if (!el) return;
    setCurrent((c) => {
      const posInCycle = ((c % total) + total) % total;
      const target = midpoint + posInCycle;
      if (c === target) return c;
      el.style.transition = "none";
      void el.offsetHeight;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (el) el.style.transition = "";
        });
      });
      return target;
    });
  }, [total, midpoint]);

  // Snap on transitionend
  useEffect(() => {
    const el = scrollRef.current?.firstElementChild as HTMLElement | null;
    if (!el) return;
    const handleTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== el || e.propertyName !== "transform") return;
      snapToCenter();
    };
    el.addEventListener("transitionend", handleTransitionEnd);
    return () => el.removeEventListener("transitionend", handleTransitionEnd);
  }, [snapToCenter]);

  // Safety net: snap back if we drift too far from center (e.g. rapid clicking)
  useEffect(() => {
    const distFromCenter = Math.abs(current - midpoint);
    if (distFromCenter > total * 3) {
      snapToCenter();
    }
  }, [current, midpoint, total, snapToCenter]);

  // Autoplay
  useEffect(() => {
    if (isDragging) return;
    autoplayRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [next, isDragging]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  // Drag / swipe
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - dragStart);
  };
  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = window.innerWidth < 768 ? 30 : 60;
    if (dragOffset < -threshold) next();
    else if (dragOffset > threshold) prev();
    setDragOffset(0);
  };

  // Apple arrow button component
  const ArrowButton = ({
    direction,
    onClick,
  }: {
    direction: "left" | "right";
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className={`absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-md ${direction === "left" ? "left-2 md:left-6" : "right-2 md:right-6"}`}
    >
      <svg
        className="w-4 h-4 text-black/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );

  return (
    <section
      className="py-32 md:py-48"
    >
      <FadeIn>
        <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-8 md:mb-20 font-light text-center">
          We help you
        </p>
      </FadeIn>
      {/* Carousel - Apple style */}
      <div
        className="relative mt-12 md:mt-16 group/carousel"
      >
        {/* Arrow buttons - always visible on mobile, hover on desktop */}
        <div className="lg:opacity-0 lg:group-hover/carousel:opacity-100 transition-opacity duration-300">
          <ArrowButton direction="left" onClick={prev} />
          <ArrowButton direction="right" onClick={next} />
        </div>

        {/* Track */}
        <div
          ref={scrollRef}
          className="overflow-hidden select-none touch-pan-y relative py-6 -my-6"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div
            className="flex"
            style={{
              gap: visibleCards === 1 ? 10 : 14,
              paddingLeft: visibleCards === 1 ? 16 : "max(24px, calc((100vw - 1320px) / 2 + 24px))",
              paddingRight: visibleCards === 1 ? 16 : "max(24px, calc((100vw - 1320px) / 2 + 24px))",
              transform: `translateX(calc(${-current * (visibleCards === 1 ? 55 : 100 / visibleCards)}% - ${current * (visibleCards === 1 ? 10 : 14)}px + ${dragOffset}px))`,
              transition: isDragging ? "none" : `transform ${visibleCards === 1 ? "1.2s" : "1.8s"} ${EASE}`,
            }}
          >
            {repeatedCards.map((card, i) => (
              <div
                key={`${card.label}-${i}`}
                className="flex-shrink-0"
                style={{
                  width: visibleCards === 1 ? "calc(55% - 6px)" : "calc(30% - 8px)",
                }}
              >
                <Link
                  href={card.href}
                  className="group block"
                  draggable={false}
                >
                  <div
                    className={`relative overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 ${card.dark && !card.keepBlackDark ? "dark:!bg-[#1c1c1e]" : ""}`}
                    style={{
                      aspectRatio: "3 / 5",
                      backgroundColor: card.bgHex || (card.dark ? "#111" : "#F5F5F5"),
                      boxShadow: "0 6px 20px -4px rgba(0,0,0,0.15), 0 2px 6px -2px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Card image */}
                    {card.image && card.objectFit === "contain" ? (
                      <div
                        className={`absolute inset-0 flex justify-center px-[5%] transition-transform duration-500 group-hover:scale-[1.03] ${card.textTop ? "items-end" : "items-start pt-[8%]"}`}
                        style={{ marginBottom: card.imageOffset || "0" }}
                      >
                        <div className="relative" style={{ width: card.imageWidth || "100%", aspectRatio: "1 / 1" }}>
                          <Image
                            src={card.image}
                            alt={card.alt}
                            fill
                            className="object-contain object-bottom"
                            sizes="(max-width: 768px) 80vw, 33vw"
                            draggable={false}
                            priority
                          />
                        </div>
                      </div>
                    ) : card.image ? (
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{ objectPosition: card.objectPosition || "center center" }}
                        sizes="(max-width: 768px) 80vw, 33vw"
                        draggable={false}
                        priority
                      />
                    ) : null}

                    {/* Icon cards */}
                    {!card.image && card.icon === "automation" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-32 h-32 md:w-40 md:h-40"
                          viewBox="0 0 64 64"
                          fill="none"
                        >
                          <rect x="6" y="26" width="12" height="12" rx="3" stroke="#60a5fa" strokeWidth="1" opacity="0.4" />
                          <rect x="9" y="29" width="6" height="6" rx="1.5" fill="#60a5fa" opacity="0.15" />
                          <path d="M18 32 C24 32, 22 20, 28 20" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                          <rect x="26" y="14" width="12" height="12" rx="3" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />
                          <rect x="29" y="17" width="6" height="6" rx="1.5" fill="#60a5fa" opacity="0.25" />
                          <path d="M38 20 C44 20, 42 38, 48 38" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                          <rect x="46" y="32" width="12" height="12" rx="3" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
                          <rect x="49" y="35" width="6" height="6" rx="1.5" fill="#60a5fa" opacity="0.35" />
                          <path d="M58 38 L62 38" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
                          <path d="M60 36 L63 38 L60 40" stroke="#60a5fa" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                        </svg>
                      </div>
                    )}

                    {!card.image && card.icon === "dashboard" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-[85%] h-[65%]"
                          viewBox="0 0 320 200"
                          fill="none"
                        >
                          {/* Outer frame */}
                          <rect x="0" y="0" width="320" height="200" rx="8" fill="white" opacity="0.03" />
                          <rect x="0" y="0" width="320" height="200" rx="8" stroke="white" strokeWidth="0.5" opacity="0.06" />

                          {/* Sidebar */}
                          <rect x="0" y="0" width="44" height="200" rx="8" fill="white" opacity="0.02" />
                          <line x1="44" y1="12" x2="44" y2="188" stroke="white" strokeWidth="0.3" opacity="0.06" />
                          {/* Sidebar icons */}
                          <rect x="14" y="18" width="16" height="3" rx="1.5" fill="white" opacity="0.15" />
                          <rect x="16" y="40" width="12" height="2" rx="1" fill="white" opacity="0.08" />
                          <rect x="16" y="52" width="12" height="2" rx="1" fill="white" opacity="0.08" />
                          <rect x="15" y="64" width="14" height="2.5" rx="1" fill="#4ade80" opacity="0.3" />
                          <rect x="16" y="76" width="12" height="2" rx="1" fill="white" opacity="0.08" />
                          <rect x="16" y="88" width="12" height="2" rx="1" fill="white" opacity="0.08" />

                          {/* Top header bar */}
                          <line x1="56" y1="30" x2="308" y2="30" stroke="white" strokeWidth="0.3" opacity="0.06" />
                          <text x="56" y="22" fill="white" opacity="0.4" fontSize="7" fontFamily="system-ui" fontWeight="600" letterSpacing="0.5">Overview</text>
                          <rect x="264" y="14" width="44" height="12" rx="6" fill="#4ade80" opacity="0.12" />
                          <text x="286" y="22.5" fill="#4ade80" opacity="0.5" fontSize="5" fontFamily="system-ui" textAnchor="middle">Live</text>
                          <circle cx="270" cy="20.5" r="1.5" fill="#4ade80" opacity="0.6" />

                          {/* KPI Cards Row */}
                          {/* Card 1 */}
                          <rect x="56" y="38" width="60" height="36" rx="4" fill="white" opacity="0.025" />
                          <rect x="56" y="38" width="60" height="36" rx="4" stroke="white" strokeWidth="0.3" opacity="0.05" />
                          <text x="64" y="50" fill="white" opacity="0.25" fontSize="4" fontFamily="system-ui">Deployments</text>
                          <text x="64" y="62" fill="white" opacity="0.7" fontSize="10" fontFamily="system-ui" fontWeight="700">247</text>
                          <text x="94" y="62" fill="#4ade80" opacity="0.5" fontSize="4" fontFamily="system-ui">+18%</text>

                          {/* Card 2 */}
                          <rect x="122" y="38" width="60" height="36" rx="4" fill="white" opacity="0.025" />
                          <rect x="122" y="38" width="60" height="36" rx="4" stroke="white" strokeWidth="0.3" opacity="0.05" />
                          <text x="130" y="50" fill="white" opacity="0.25" fontSize="4" fontFamily="system-ui">Uptime</text>
                          <text x="130" y="62" fill="white" opacity="0.7" fontSize="10" fontFamily="system-ui" fontWeight="700">99.98%</text>

                          {/* Card 3 */}
                          <rect x="188" y="38" width="60" height="36" rx="4" fill="white" opacity="0.025" />
                          <rect x="188" y="38" width="60" height="36" rx="4" stroke="white" strokeWidth="0.3" opacity="0.05" />
                          <text x="196" y="50" fill="white" opacity="0.25" fontSize="4" fontFamily="system-ui">MTTR</text>
                          <text x="196" y="62" fill="white" opacity="0.7" fontSize="10" fontFamily="system-ui" fontWeight="700">4.2m</text>
                          <text x="224" y="62" fill="#4ade80" opacity="0.5" fontSize="4" fontFamily="system-ui">-32%</text>

                          {/* Card 4 */}
                          <rect x="254" y="38" width="56" height="36" rx="4" fill="white" opacity="0.025" />
                          <rect x="254" y="38" width="56" height="36" rx="4" stroke="white" strokeWidth="0.3" opacity="0.05" />
                          <text x="262" y="50" fill="white" opacity="0.25" fontSize="4" fontFamily="system-ui">Error rate</text>
                          <text x="262" y="62" fill="white" opacity="0.7" fontSize="10" fontFamily="system-ui" fontWeight="700">0.02%</text>

                          {/* Main chart area */}
                          <rect x="56" y="82" width="186" height="106" rx="4" fill="white" opacity="0.025" />
                          <rect x="56" y="82" width="186" height="106" rx="4" stroke="white" strokeWidth="0.3" opacity="0.05" />
                          <text x="64" y="96" fill="white" opacity="0.3" fontSize="5" fontFamily="system-ui" fontWeight="500">Request throughput</text>
                          <text x="230" y="96" fill="white" opacity="0.15" fontSize="4" fontFamily="system-ui" textAnchor="end">24h</text>

                          {/* Y-axis labels */}
                          <text x="62" y="110" fill="white" opacity="0.1" fontSize="3" fontFamily="system-ui">15k</text>
                          <text x="62" y="130" fill="white" opacity="0.1" fontSize="3" fontFamily="system-ui">10k</text>
                          <text x="62" y="150" fill="white" opacity="0.1" fontSize="3" fontFamily="system-ui">5k</text>
                          <text x="62" y="170" fill="white" opacity="0.1" fontSize="3" fontFamily="system-ui">0</text>

                          {/* Grid */}
                          <line x1="72" y1="108" x2="234" y2="108" stroke="white" strokeWidth="0.2" opacity="0.04" />
                          <line x1="72" y1="128" x2="234" y2="128" stroke="white" strokeWidth="0.2" opacity="0.04" />
                          <line x1="72" y1="148" x2="234" y2="148" stroke="white" strokeWidth="0.2" opacity="0.04" />
                          <line x1="72" y1="168" x2="234" y2="168" stroke="white" strokeWidth="0.2" opacity="0.04" />

                          {/* Area fill */}
                          <path d="M72 160 C82 158, 92 152, 102 148 C112 144, 122 140, 132 132 C142 124, 148 118, 158 114 C168 110, 178 112, 188 108 C198 104, 208 106, 218 102 C228 98, 232 96, 234 94 L234 172 L72 172 Z" fill="url(#chartGrad)" />
                          <defs>
                            <linearGradient id="chartGrad" x1="0" y1="94" x2="0" y2="172" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.15" />
                              <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {/* Line */}
                          <path d="M72 160 C82 158, 92 152, 102 148 C112 144, 122 140, 132 132 C142 124, 148 118, 158 114 C168 110, 178 112, 188 108 C198 104, 208 106, 218 102 C228 98, 232 96, 234 94" stroke="#4ade80" strokeWidth="1.2" opacity="0.6" fill="none" strokeLinecap="round" />
                          {/* Current dot */}
                          <circle cx="234" cy="94" r="2.5" fill="#1c1c1e" stroke="#4ade80" strokeWidth="1" opacity="0.7" />

                          {/* Right sidebar: recent deploys */}
                          <rect x="248" y="82" width="62" height="106" rx="4" fill="white" opacity="0.025" />
                          <rect x="248" y="82" width="62" height="106" rx="4" stroke="white" strokeWidth="0.3" opacity="0.05" />
                          <text x="256" y="96" fill="white" opacity="0.3" fontSize="5" fontFamily="system-ui" fontWeight="500">Activity</text>

                          {/* Deploy entries */}
                          <circle cx="258" cy="108" r="2" fill="#4ade80" opacity="0.3" />
                          <text x="264" y="110" fill="white" opacity="0.25" fontSize="3.5" fontFamily="system-ui">Deploy #247</text>
                          <text x="264" y="116" fill="white" opacity="0.12" fontSize="3" fontFamily="system-ui">2m ago</text>

                          <circle cx="258" cy="126" r="2" fill="#60a5fa" opacity="0.3" />
                          <text x="264" y="128" fill="white" opacity="0.25" fontSize="3.5" fontFamily="system-ui">Scale up x3</text>
                          <text x="264" y="134" fill="white" opacity="0.12" fontSize="3" fontFamily="system-ui">14m ago</text>

                          <circle cx="258" cy="144" r="2" fill="#4ade80" opacity="0.3" />
                          <text x="264" y="146" fill="white" opacity="0.25" fontSize="3.5" fontFamily="system-ui">Deploy #246</text>
                          <text x="264" y="152" fill="white" opacity="0.12" fontSize="3" fontFamily="system-ui">1h ago</text>

                          <circle cx="258" cy="162" r="2" fill="#f59e0b" opacity="0.3" />
                          <text x="264" y="164" fill="white" opacity="0.25" fontSize="3.5" fontFamily="system-ui">Alert resolved</text>
                          <text x="264" y="170" fill="white" opacity="0.12" fontSize="3" fontFamily="system-ui">2h ago</text>
                        </svg>
                      </div>
                    )}

                    {!card.image && card.icon === "devops" && (
                      <div className="absolute inset-0 flex items-center justify-center -mt-[10%]">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#4ade80]">
                          DevOps
                        </span>
                      </div>
                    )}

                    {!card.image && card.icon === "rocket" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-40 h-28 md:w-48 md:h-36"
                          viewBox="0 0 64 64"
                          fill="none"
                        >
                          <line x1="4" y1="38" x2="16" y2="38" stroke="#4ade80" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                          <path d="M16 38 L20 38 L23 46 L28 28 L33 42 L36 34 L39 38" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                          <path d="M39 38 L42 20 L45 38" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                          <line x1="45" y1="38" x2="60" y2="38" stroke="#4ade80" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                          <circle cx="42" cy="20" r="2" fill="#4ade80" opacity="0.4" />
                          <circle cx="42" cy="20" r="4" fill="#4ade80" opacity="0.1" />
                        </svg>
                      </div>
                    )}

                    {/* Gradient overlays */}
                    {card.image && !card.objectFit && !card.textTop && (
                      <div className={`absolute inset-0 bg-gradient-to-t ${card.dark ? "from-black/80 via-black/20" : "from-white/80 via-transparent"} to-transparent`} />
                    )}
                    {card.image && !card.objectFit && card.textTop && (
                      <div className={`absolute inset-0 bg-gradient-to-b ${card.dark ? "from-black/80 via-black/20" : "from-white/80 via-transparent"} to-transparent`} />
                    )}

                    {/* Content */}
                    <div className={`absolute left-0 right-0 p-3 md:p-8 z-10 ${card.textTop ? "top-0" : "bottom-0"}`}>
                      <p
                        className={`text-[0.4rem] md:text-[0.5rem] font-medium tracking-[0.25em] mb-1.5 md:mb-3 ${
                          card.labelColor
                            ? card.labelColor
                            : card.dark
                            ? "text-white/60"
                            : "text-black/50"
                        }`}
                      >
                        {card.label}
                      </p>
                      <h3
                        className={`text-sm md:text-xl lg:text-2xl font-medium leading-tight tracking-wide ${
                          card.dark ? "text-white" : "text-black"
                        }`}
                      >
                        {card.headline}
                      </h3>
                      <div
                        className={`mt-1.5 md:mt-3 flex items-center gap-1 md:gap-1.5 text-[0.6rem] md:text-xs font-medium transition-colors duration-300 ${
                          card.dark
                            ? "text-white/50 group-hover:text-white"
                            : "text-black/40 group-hover:text-black"
                        }`}
                      >
                        Learn more
                        <svg
                          className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-3 md:gap-2 mt-8">
          {cards.map((card, i) => (
            <button
              key={card.label}
              onClick={() => { setCurrent(startOffset + i); resetAutoplay(); }}
              aria-label={`Go to slide ${i + 1}`}
              className="p-1 md:p-0"
              style={{
                width: visibleCards === 1 ? 9 : 7,
                height: visibleCards === 1 ? 9 : 7,
                borderRadius: "50%",
                backgroundColor:
                  ((current % total) + total) % total === i
                    ? "rgba(0,0,0,0.5)"
                    : "rgba(0,0,0,0.12)",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
