"use client";

import { useEffect, useRef, useState, useCallback } from "react";

function lemniscatePoint(
  t: number,
  cx: number,
  cy: number,
  a: number
): { x: number; y: number } {
  const sinT = Math.sin(t);
  const cosT = Math.cos(t);
  const denom = 1 + sinT * sinT;
  return {
    x: cx + (a * cosT) / denom,
    y: cy + (a * sinT * cosT) / denom,
  };
}

// Angular distance on a circle (0..2π), always positive
function angularDist(a: number, b: number): number {
  const TWO_PI = Math.PI * 2;
  let d = ((a - b) % TWO_PI + TWO_PI) % TWO_PI;
  if (d > Math.PI) d = TWO_PI - d;
  return d;
}

interface LabelDef {
  text: string;
  angle: number;
  x: number;
  y: number;
  description: string;
}

const LABELS: LabelDef[] = [
  { text: "PLAN",    angle: Math.PI * 0.72, x: 370, y: 168, description: "Define goals, priorities, and timelines. Align engineering with business needs." },
  { text: "CODE",    angle: Math.PI * 0.97, x: 138, y: 272, description: "Write, review, and version control. Clean code, clear standards." },
  { text: "BUILD",   angle: Math.PI * 1.18, x: 290, y: 446, description: "Compile, package, and prepare artifacts. Automated and reproducible." },
  { text: "TEST",    angle: Math.PI * 1.38, x: 448, y: 400, description: "Validate quality, security, and performance before anything ships." },
  { text: "RELEASE", angle: Math.PI * 1.62, x: 542, y: 198, description: "Package and prepare for production. Controlled, versioned, ready to go." },
  { text: "DEPLOY",  angle: Math.PI * 1.82, x: 710, y: 155, description: "Ship to production with confidence. Zero downtime, every time." },
  { text: "OPERATE", angle: Math.PI * 0.03, x: 870, y: 330, description: "Manage infrastructure, scale resources, keep everything running smoothly." },
  { text: "MONITOR", angle: Math.PI * 0.28, x: 625, y: 435, description: "Observe, alert, and respond. Know what's happening before anyone else." },
];

// How close the light needs to be (in radians) to fully illuminate a label
const LIGHT_RADIUS = 0.35;

const DURATION = 12000;
const CX = 500;
const CY = 300;
const A = 320;

const LABEL_POSITIONS = LABELS.map((label) => ({ x: label.x, y: label.y }));

function buildPath(): string {
  const steps = 300;
  const segments: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const p = lemniscatePoint(t, CX, CY, A);
    segments.push(i === 0 ? `M ${p.x.toFixed(2)} ${p.y.toFixed(2)}` : `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`);
  }
  segments.push("Z");
  return segments.join(" ");
}

const INFINITY_PATH = buildPath();

export default function InfinityLoop() {
  const lightRef = useRef<SVGCircleElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const devRef = useRef<SVGTextElement>(null);
  const opsRef = useRef<SVGTextElement>(null);
  const labelRefs = useRef<(SVGGElement | null)[]>([]);
  const animationRef = useRef<number>(0);
  const prevTimestampRef = useRef<number>(0);
  const angleRef = useRef<number>(Math.PI);
  const revealedRef = useRef<Set<number>>(new Set());
  const revealDoneAtRef = useRef<number>(0);
  const currentSpeedRef = useRef<number>(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const hoveredRef = useRef<string | null>(null);
  const isMobileRef = useRef(false);

  // Keep hoveredRef in sync so we can read it in rAF without stale closures
  useEffect(() => {
    hoveredRef.current = hoveredLabel;
  }, [hoveredLabel]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    isMobileRef.current = mq.matches;
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => {
      isMobileRef.current = e.matches;
      setIsMobile(e.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Center Dev/Ops by measuring actual rendered text bounding box
  useEffect(() => {
    const centerText = (el: SVGTextElement | null, targetX: number, targetY: number) => {
      if (!el) return;
      // Remove any previous transform so getBBox measures raw text
      el.removeAttribute("transform");
      const bbox = el.getBBox();
      // Translate so the bbox center lands exactly on (targetX, targetY)
      const dx = targetX - (bbox.x + bbox.width / 2);
      const dy = targetY - (bbox.y + bbox.height / 2);
      el.setAttribute("transform", `translate(${dx}, ${dy})`);
    };
    // Left loop center: (340, 300), Right loop center: (660, 300)
    centerText(devRef.current, 340, 300);
    centerText(opsRef.current, 660, 300);
  }, []);

  const setPos = useCallback(
    (el: SVGCircleElement | null, x: number, y: number) => {
      if (el) {
        el.setAttribute("cx", String(x));
        el.setAttribute("cy", String(y));
      }
    },
    []
  );

  useEffect(() => {
    if (reducedMotion) return;

    // Speeds in radians per millisecond
    const FAST_SPEED = (Math.PI * 2) / 5000;   // first pass: 5s per loop
    const NORMAL_SPEED = (Math.PI * 2) / DURATION; // after: 12s per loop
    const EASE_DURATION = 3000; // 3s to ease from fast to normal

    currentSpeedRef.current = FAST_SPEED;

    const animate = (timestamp: number) => {
      if (!prevTimestampRef.current) prevTimestampRef.current = timestamp;
      const dt = Math.min(timestamp - prevTimestampRef.current, 50);
      prevTimestampRef.current = timestamp;

      const allRevealed = revealedRef.current.size >= LABELS.length;

      // Track when all labels were revealed
      if (allRevealed && !revealDoneAtRef.current) {
        revealDoneAtRef.current = timestamp;
      }

      // Smoothly ease from fast to normal speed over EASE_DURATION
      let targetSpeed: number;
      if (!allRevealed) {
        targetSpeed = FAST_SPEED;
      } else {
        const sinceDone = timestamp - revealDoneAtRef.current;
        const easeProgress = Math.min(sinceDone / EASE_DURATION, 1);
        // Smooth ease-out curve
        const eased = 1 - Math.pow(1 - easeProgress, 3);
        targetSpeed = FAST_SPEED + (NORMAL_SPEED - FAST_SPEED) * eased;
      }

      currentSpeedRef.current = targetSpeed;
      angleRef.current += currentSpeedRef.current * dt;

      const t = angleRef.current % (Math.PI * 2);
      const point = lemniscatePoint(t, CX, CY, A);
      setPos(lightRef.current, point.x, point.y);
      setPos(glowRef.current, point.x, point.y);

      // Fade in Dev/Ops watermarks when light is on their side
      if (devRef.current && devRef.current.getAttribute("opacity") === "0" && point.x < CX) {
        devRef.current.setAttribute("opacity", "0.1");
      }
      if (opsRef.current && opsRef.current.getAttribute("opacity") === "0" && point.x > CX) {
        opsRef.current.setAttribute("opacity", "0.1");
      }

      const mobile = isMobileRef.current;

      // Update label brightness based on proximity to light
      const baseOpacity = mobile ? 0.7 : 0.4;
      for (let i = 0; i < LABELS.length; i++) {
        const el = labelRefs.current[i];
        if (!el) continue;

        const dist = angularDist(t, LABELS[i].angle);
        const intensity = Math.max(0, 1 - dist / LIGHT_RADIUS);
        const isRevealed = revealedRef.current.has(i);

        // Label not yet revealed: stay hidden until light touches it
        if (!isRevealed) {
          if (intensity < 0.3) {
            const textEl = el.querySelector("text");
            if (textEl) {
              textEl.setAttribute("fill", "rgba(250,250,250,0)");
              textEl.setAttribute("filter", "none");
            }
            continue;
          }
          // Light reached this label — reveal it
          revealedRef.current.add(i);
        }

        const isHovered = hoveredRef.current === LABELS[i].text;
        const lit = isHovered || intensity > 0.1;
        const textEl = el.querySelector("text");
        if (textEl) {
          if (isHovered) {
            textEl.setAttribute("fill", "#7ECEB3");
            textEl.setAttribute("filter", "drop-shadow(0 0 10px rgba(126,206,179,0.5))");
          } else if (lit) {
            textEl.setAttribute("fill", `rgba(250,250,250,${baseOpacity + intensity * 0.6})`);
            textEl.setAttribute("filter", `drop-shadow(0 0 ${intensity * (mobile ? 18 : 12)}px rgba(126,206,179,${intensity * (mobile ? 0.7 : 0.5)}))`);
          } else {
            textEl.setAttribute("fill", `rgba(250,250,250,${baseOpacity})`);
            textEl.setAttribute("filter", "none");
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [reducedMotion, setPos]);

  const hoveredIndex = hoveredLabel ? LABELS.findIndex((l) => l.text === hoveredLabel) : -1;
  const hoveredData = hoveredIndex >= 0 ? LABELS[hoveredIndex] : null;

  return (
    <section className="flex items-center justify-center relative overflow-hidden py-10" style={{ minHeight: "100svh" }}>

      <div className="relative z-10 w-full px-0 md:px-4">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[950px]">
            <svg
              viewBox={isMobile ? "50 80 900 440" : "0 0 1000 600"}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              role="img"
              aria-label="DevOps infinity loop"
            >
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#5CAED4" stopOpacity="0.6" />
                  <stop offset="25%" stopColor="#7ECEB3" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#E5C44E" stopOpacity="0.25" />
                  <stop offset="75%" stopColor="#7ECEB3" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#5CAED4" stopOpacity="0.6" />
                </linearGradient>

                <radialGradient id="glow-left" cx="32%" cy="50%" r="25%">
                  <stop offset="0%" stopColor="#5CAED4" stopOpacity="0.07" />
                  <stop offset="100%" stopColor="#5CAED4" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="glow-right" cx="68%" cy="50%" r="25%">
                  <stop offset="0%" stopColor="#7ECEB3" stopOpacity="0.07" />
                  <stop offset="100%" stopColor="#7ECEB3" stopOpacity="0" />
                </radialGradient>

                <filter id="light-outer" x="-300%" y="-300%" width="700%" height="700%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="28" />
                </filter>

                <filter id="light-inner" x="-200%" y="-200%" width="500%" height="500%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                </filter>

                {/* Radial gradient glow for mobile (no heavy blur filters) */}
                <radialGradient id="light-glow-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7ECEB3" stopOpacity="0.25" />
                  <stop offset="40%" stopColor="#7ECEB3" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#7ECEB3" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="light-core-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                  <stop offset="50%" stopColor="#7ECEB3" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#7ECEB3" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Subtle glow fills */}
              <rect x="0" y="0" width="1000" height="600" fill="url(#glow-left)" />
              <rect x="0" y="0" width="1000" height="600" fill="url(#glow-right)" />

              {/* The infinity line */}
              <path
                d={INFINITY_PATH}
                stroke="url(#line-grad)"
                strokeWidth="1.5"
                fill="none"
                strokeLinejoin="round"
                className="infinity-line-draw"
              />

              {/* Dev / Ops watermarks — centered via getBBox measurement */}
              <text
                ref={devRef}
                x={0}
                y={0}
                fill="#5CAED4"
                opacity="0"
                fontSize="68"
                fontFamily="-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
                fontWeight="300"
                className="select-none pointer-events-none dev-watermark"
                style={{ transition: "opacity 2s ease" }}
              >
                Dev
              </text>
              <text
                ref={opsRef}
                x={0}
                y={0}
                fill="#7ECEB3"
                opacity="0"
                fontSize="68"
                fontFamily="-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
                fontWeight="300"
                className="select-none pointer-events-none ops-watermark"
                style={{ transition: "opacity 2s ease" }}
              >
                Ops
              </text>

              {/* Stage labels — light reveals them, hover keeps them */}
              {LABEL_POSITIONS.map((pos, i) => {
                const label = LABELS[i];

                return (
                  <g
                    key={label.text}
                    ref={(el) => { labelRefs.current[i] = el; }}
                  >
                    <rect
                      x={pos.x - 50}
                      y={pos.y - 14}
                      width="100"
                      height="28"
                      fill="transparent"
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredLabel(label.text)}
                      onMouseLeave={() => setHoveredLabel(null)}
                    />
                    <text
                      x={pos.x}
                      y={pos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="rgba(250,250,250,0)"
                      fontSize="12"
                      fontFamily="-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
                      fontWeight="500"
                      letterSpacing="0.2em"
                      className="cursor-pointer select-none"
                      onMouseEnter={() => setHoveredLabel(label.text)}
                      onMouseLeave={() => setHoveredLabel(null)}
                    >
                      {label.text}
                    </text>
                  </g>
                );
              })}

              {/* Traveling light */}
              {!reducedMotion && !isMobile && (
                <>
                  <circle
                    ref={glowRef}
                    cx={CX + A}
                    cy={CY}
                    r="22"
                    fill="#7ECEB3"
                    opacity="0.25"
                    filter="url(#light-outer)"
                  />
                  <circle
                    ref={lightRef}
                    cx={CX + A}
                    cy={CY}
                    r="8"
                    fill="rgba(255,255,255,0.7)"
                    opacity="0.5"
                    filter="url(#light-inner)"
                  />
                </>
              )}
              {/* Mobile: gradient-based glow (no heavy blur filters) */}
              {!reducedMotion && isMobile && (
                <>
                  <circle
                    ref={glowRef}
                    cx={CX + A}
                    cy={CY}
                    r="45"
                    fill="url(#light-glow-grad)"
                  />
                  <circle
                    ref={lightRef}
                    cx={CX + A}
                    cy={CY}
                    r="12"
                    fill="url(#light-core-grad)"
                  />
                </>
              )}
            </svg>

            {/* Description below the loop */}
            <div
              className="h-16 flex items-start justify-center mt-2 md:-mt-4 pointer-events-none"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif" }}
            >
              <div
                key={hoveredData?.text || "empty"}
                className="text-center"
                style={{
                  opacity: hoveredData ? 1 : 0,
                  transform: hoveredData ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                <span
                  className="block mb-1.5"
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    color: "#7ECEB3",
                  }}
                >
                  {hoveredData?.text}
                </span>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "rgba(250,250,250,0.45)",
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  {hoveredData?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
