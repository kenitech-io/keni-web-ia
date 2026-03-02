"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const titles = ["WE LISTEN", "WE BUILD", "WE STAY"];

export default function ApproachSection() {
  return (
    <section className="py-section">
      <Container>
        <FadeIn type="up" delay={0}>
          <div className="relative rounded-3xl bg-[#0E1220]/90 border border-white/[0.05] overflow-hidden backdrop-blur-sm">
            {/* Top edge light */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

            <div className="flex flex-col items-center gap-16 md:gap-24 py-24 md:py-36 px-8">
              {titles.map((title, index) => (
                <FadeIn key={title} type="up" delay={index * 0.15}>
                  <h3 className="text-display md:text-display-lg font-medium tracking-tight text-foreground text-center">
                    {title}
                  </h3>
                </FadeIn>
              ))}
            </div>

            {/* Bottom edge light */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
