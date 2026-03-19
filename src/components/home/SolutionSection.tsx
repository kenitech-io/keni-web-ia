"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function SolutionSection() {
  return (
    <section className="py-32 md:py-48 bg-surface">
      <Container>
        <FadeIn>
          <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-32 md:mb-40 text-center font-light">
            The solution
          </p>
        </FadeIn>
        <div className="max-w-[640px] mx-auto text-center">
          <FadeIn delay={0.1}>
            <h2 className="text-heading text-foreground font-light tracking-wide mb-8">
              An internal development platform built for your team
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-8">
              CI/CD pipelines, containerized environments, monitoring, and
              automated deploys. All wired together around how your team
              actually works. You push, it gets deployed. That&apos;s it.
            </p>
            <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-8">
              For software teams with 2-30 developers who ship a product but don&apos;t have dedicated DevOps.
            </p>
            <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
              <Link href="/devops-consulting" className="text-foreground/80 hover:text-foreground transition-colors">
                See our consulting services
              </Link>
              {" "}or{" "}
              <Link href="/infrastructure-audit" className="text-foreground/80 hover:text-foreground transition-colors">
                start with an infrastructure audit
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
