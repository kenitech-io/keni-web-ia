"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function ProblemSection() {
  return (
    <section className="py-32 md:py-48">
      <Container>
        <FadeIn>
          <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-32 md:mb-40 text-center font-light">
            The problem
          </p>
        </FadeIn>
        <div className="max-w-[640px] mx-auto text-center">
          <FadeIn delay={0.1}>
            <h2 className="text-heading text-foreground font-light tracking-wide mb-8">
              Your devs spend half their time on ops instead of shipping
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
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
