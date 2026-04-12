"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-0 md:min-h-screen md:flex md:items-center">
      <Container className="w-full">
        <div className="max-w-[640px] mx-auto text-center md:mt-12">
          <FadeIn>
            <h2 className="text-heading text-foreground font-normal md:font-light tracking-wide mb-6 md:mb-8">
              An <strong>internal development platform</strong> built for your team
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-6 md:mb-10">
              CI/CD pipelines, containerized environments, monitoring, and
              automated deploys. All wired together around how your team
              actually works. You push, it gets deployed. That&apos;s it.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex items-center justify-center gap-3 md:gap-6">
              <Link
                href="/devops-consulting"
                className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all duration-300 py-2"
              >
                Consulting services
              </Link>
              <span className="text-border-color">·</span>
              <Link
                href="/infrastructure-audit"
                className="text-sm text-foreground font-light underline underline-offset-4 decoration-border-color hover:decoration-foreground transition-all duration-300 py-2"
              >
                Infrastructure audit
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
