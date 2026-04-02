"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const cards = [
  {
    label: "SMALL TEAMS",
    headline: "Simple solutions for every kind of workflow.",
    image: "/help-team.png",
    alt: "Team collaborating on infrastructure",
    href: "/devops-consulting",
    dark: true,
    fullBleed: true,
  },
  {
    label: "AUTOMATION",
    headline: "One platform. Every workflow automated. Every deploy zero-touch.",
    image: null,
    alt: "",
    href: "/platform",
    dark: false,
    glowBlue: true,
    icon: "automation",
  },
  {
    label: "DEDICATED EXPERTS",
    headline: "A team of specialists in constant innovation, at your service.",
    image: "/help-innovation.png",
    alt: "Abstract 3D blocks representing innovation and teamwork",
    href: "/about",
    dark: true,
    labelColor: "text-[#C65100]",
  },
  {
    label: "SEE THE RESULTS",
    headline: "From manual deploys to fully automated in under 30 days.",
    image: null,
    alt: "",
    href: "/devops-consulting",
    dark: false,
    icon: "rocket",
    glowGreen: true,
  },
  {
    label: "KENI SPECIALISTS",
    headline: "Build with the help of Specialists, online or on a call.",
    image: "/help-meet-us.png",
    alt: "Mikel, co-founder of Keni Engineering",
    href: "/about",
    dark: false,
    portrait: true,
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

        <div className="mt-12 md:mt-16 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {cards.map((card, i) => (
            <FadeIn key={card.label} delay={i * 0.1}>
              <Link
                href={card.href}
                className="group block flex-shrink-0 w-[280px] md:w-[340px] snap-start"
              >
                <div
                  className={`relative rounded-2xl overflow-hidden h-[380px] md:h-[440px] ${
                    card.dark
                      ? "bg-black text-white"
                      : "bg-surface text-foreground"
                  }`}
                >
                  {/* Blue glow effect */}
                  {"glowBlue" in card && card.glowBlue && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(100, 160, 255, 0.1) 40%, transparent 70%)",
                      }}
                    />
                  )}

                  {/* Green glow effect */}
                  {"glowGreen" in card && card.glowGreen && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(34, 197, 94, 0.25) 0%, rgba(74, 222, 128, 0.1) 40%, transparent 70%)",
                      }}
                    />
                  )}

                  {/* Full-bleed background image */}
                  {"fullBleed" in card && card.fullBleed && card.image && (
                    <>
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 320px, 420px"
                      />
                      <div className="absolute inset-0 bg-black/5" />
                    </>
                  )}

                  <div className="relative z-10 p-6 md:p-7">
                    <p
                      className={`text-xs font-semibold tracking-[0.08em] mb-3 ${
                        "labelColor" in card && card.labelColor
                          ? card.labelColor
                          : "fullBleed" in card && card.fullBleed
                          ? "text-white/70"
                          : card.dark
                          ? "text-blue-400"
                          : "text-muted"
                      }`}
                    >
                      {card.label}
                    </p>
                    <h3 className="text-[1.2rem] md:text-[1.35rem] font-semibold leading-tight">
                      {card.headline}
                    </h3>
                  </div>

                  {/* Portrait image (Apple style, no gradient) */}
                  {"portrait" in card && card.portrait && card.image && (
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
                  {card.image && !("fullBleed" in card && card.fullBleed) && !("portrait" in card && card.portrait) && (
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
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="text-muted"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                          </svg>
                        )}
                        {"icon" in card && card.icon === "automation" && (
                          <svg
                            className="w-28 h-28 md:w-36 md:h-36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {/* Workflow/automation: connected nodes (Lucide Workflow) */}
                            <rect x="3" y="3" width="6" height="6" rx="1" />
                            <rect x="15" y="3" width="6" height="6" rx="1" />
                            <rect x="9" y="15" width="6" height="6" rx="1" />
                            <path d="M6 9v3a1 1 0 0 0 1 1h2" />
                            <path d="M18 9v3a1 1 0 0 1-1 1h-2" />
                            <path d="M12 12v3" />
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
