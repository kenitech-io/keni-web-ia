"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { phases } from "@/data/phases";

export default function ProcessSection() {
  return (
    <section className="py-32 md:py-48">
      <Container>
        <FadeIn>
          <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-32 md:mb-40 text-center font-light">
            How we work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-16 max-w-[1100px] mx-auto">
            {phases.map((phase, index) => (
              <FadeIn key={phase.number} delay={index * 0.12}>
                <div className="text-center">
                  <span className="text-lg font-extralight text-foreground/[0.08] leading-none block mb-6">
                    {phase.number}
                  </span>
                  <h3 className="text-body text-foreground font-light tracking-wide mb-6 min-h-[2.5em] flex items-center justify-center">
                    {phase.name}
                  </h3>
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    {phase.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
