"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Mesh gradient background — only on hero */}
      <div className="mesh-gradient-strong absolute inset-0" />
      <div className="noise absolute inset-0" />

      {/* Content — nudge up slightly to feel optically centered */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-6 -mt-16">
        {/* Headline */}
        <FadeIn type="up" delay={0.2} className="w-full flex justify-center">
          <h1 className="text-display-sm md:text-display font-medium text-center max-w-[780px] mx-auto leading-[1.2] tracking-tight">
            <span className="text-foreground">Your infrastructure, </span>
            <span className="gradient-text">handled.</span>
          </h1>
        </FadeIn>

        {/* Subtext */}
        <FadeIn type="up" delay={0.45} className="w-full flex justify-center">
          <p className="text-body text-foreground-secondary max-w-[520px] mx-auto text-center mt-6 md:mt-8 leading-relaxed">
            We take care of your DevOps and Platform Engineering so your team
            can focus on building product. No firefighting, no surprises — just
            infrastructure that works.
          </p>
        </FadeIn>

        {/* Buttons */}
        <FadeIn type="up" delay={0.65} className="w-full flex justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10">
            <Link
              href="/contact"
              className="bg-accent text-background rounded-full px-6 py-3 font-medium hover:bg-accent-hover transition-colors duration-300"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/services"
              className="border border-border-color text-foreground rounded-full px-6 py-3 font-medium hover:border-foreground-secondary transition-colors duration-300"
            >
              Explore Services
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator pinned to bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <FadeIn type="fade" delay={1.0}>
          <div className="scroll-line w-[1px] h-[40px] bg-foreground/30" />
        </FadeIn>
      </div>
    </section>
  );
}
