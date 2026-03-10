"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function ProblemSection() {
  return (
    <section className="py-section">
      <Container>
        <div className="max-w-[640px] mx-auto">
          <FadeIn>
            <p className="text-label uppercase tracking-widest text-muted mb-8">
              THE PROBLEM
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-heading text-foreground mb-8">
              Small dev teams handle frontend, backend, databases — and also
              manage servers, manual deployments, and on-call incidents.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body text-foreground-secondary">
              Your developers are spending half their time on infrastructure
              instead of building product. Deployments are manual and stressful.
              There is no CI/CD. When something breaks, everyone stops what
              they&apos;re doing. The IT team and the dev team are constantly
              stepping on each other&apos;s toes.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
