"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function SolutionSection() {
  return (
    <section className="py-section bg-surface">
      <Container>
        <div className="max-w-[640px] mx-auto">
          <FadeIn>
            <p className="text-label uppercase tracking-widest text-muted mb-8">
              THE SOLUTION
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-heading text-foreground mb-8">
              An internal development platform built for your team
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body text-foreground-secondary">
              CI/CD pipelines, containerized environments, monitoring, and
              automated deploys — all wired together around how your team
              actually works. You git push, it goes to production. That&apos;s it.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
