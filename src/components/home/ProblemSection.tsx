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
              Your devs spend half their time on ops instead of shipping
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-body text-foreground-secondary">
              Deploys are manual and scary. There&apos;s no CI/CD. When something
              breaks in production, the whole team stops what they&apos;re doing
              to firefight. Your best engineers are debugging servers instead
              of building features.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
