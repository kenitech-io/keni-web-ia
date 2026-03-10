"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { phases } from "@/data/phases";

export default function ProcessSection() {
  return (
    <section className="py-section">
      <Container>
        <div className="max-w-[640px] mx-auto">
          <FadeIn>
            <p className="text-label uppercase tracking-widest text-muted mb-8">
              HOW WE WORK
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-heading text-foreground mb-16">
              Four phases, one clear outcome
            </h2>
          </FadeIn>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <FadeIn key={phase.number} delay={index * 0.1}>
                <div>
                  <p className="text-label text-muted mb-3">
                    {phase.number}
                  </p>
                  <h3 className="text-body-lg text-foreground font-normal mb-3">
                    {phase.name}
                  </h3>
                  <p className="text-body text-foreground-secondary">
                    {phase.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
