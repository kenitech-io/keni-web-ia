import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "What Happens During a DevOps Infrastructure Audit",
  description:
    "A step-by-step breakdown of a DevOps infrastructure audit: what we look at, how we score it, and what the deliverable looks like. Everything a CTO needs to know before commissioning one.",
  alternates: {
    canonical: "https://kenitech.io/blog/devops-audit-what-to-expect",
  },
  openGraph: {
    title: "What Happens During a DevOps Infrastructure Audit",
    description:
      "A step-by-step breakdown of what we look at during an infrastructure audit and what the report looks like.",
    url: "https://kenitech.io/blog/devops-audit-what-to-expect",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Happens During a DevOps Infrastructure Audit",
  description:
    "A step-by-step breakdown of a DevOps infrastructure audit: what we look at, how we score it, and what the deliverable looks like.",
  datePublished: "2026-03-17",
  author: {
    "@type": "Organization",
    name: "Keni Engineering",
    url: "https://kenitech.io",
  },
  publisher: {
    "@type": "Organization",
    name: "Keni Engineering",
    logo: {
      "@type": "ImageObject",
      url: "https://kenitech.io/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kenitech.io/blog/devops-audit-what-to-expect",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://kenitech.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://kenitech.io/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "What Happens During a DevOps Audit",
      item: "https://kenitech.io/blog/devops-audit-what-to-expect",
    },
  ],
};

export default function DevOpsAuditWhatToExpect() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article>
        <section className="py-32 md:py-48">
          <Container>
            <div className="max-w-[640px] mx-auto">
              <FadeIn>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                  INFRASTRUCTURE
                </p>
                <h1 className="text-heading text-foreground font-light tracking-wide mb-8">
                  What happens during a DevOps infrastructure audit
                </h1>
                <p className="text-label text-muted/60 font-light">
                  March 17, 2026 &middot; 5 min read
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="pb-32 md:pb-48">
          <Container>
            <div className="max-w-[640px] mx-auto space-y-10">
              <FadeIn delay={0.1}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  An infrastructure audit is the starting point for any
                  serious DevOps improvement. But if you have never gone through
                  one, the process can feel opaque. Here is exactly what
                  happens, what we look at, and what you get at the end.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">
                  Day 1: Access and discovery
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  We start by getting read-only access to your repositories,
                  CI/CD configuration, cloud accounts, and monitoring tools. We
                  do not need admin access, and we do not make any changes to
                  your systems.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  We also schedule a 60-minute call with your technical lead or
                  CTO. This is not a sales call. We need to understand context
                  that code alone cannot tell us: why certain decisions were
                  made, what the team&apos;s pain points are, and what has been
                  tried before.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">
                  Day 1-2: The seven areas we evaluate
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Every audit covers the same seven areas. Each one gets scored
                  on a maturity scale from 0 (manual/absent) to 4
                  (fully automated and battle-tested):
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-body text-foreground font-light tracking-wide mb-2">
                      1. Deployment process
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                      How does code get from a developer&apos;s machine to
                      production? We look at the number of manual steps, rollback
                      capability, deployment frequency, and whether any developer
                      on the team can deploy or only specific people.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-body text-foreground font-light tracking-wide mb-2">
                      2. CI/CD pipelines
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                      What happens when someone pushes code? We evaluate build
                      times, test coverage, whether failures block merges, and
                      how fast developers get feedback.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-body text-foreground font-light tracking-wide mb-2">
                      3. Environment parity
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                      Does your staging environment match production? We check
                      for drift between environments, whether infrastructure is
                      defined in code, and whether the same configuration is used
                      everywhere.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-body text-foreground font-light tracking-wide mb-2">
                      4. Monitoring and observability
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                      How do you know when something is broken? We look at
                      logging, metrics, dashboards, alerting thresholds, and
                      incident response process. The goal is to answer: would
                      you know about a problem before your users do?
                    </p>
                  </div>

                  <div>
                    <h3 className="text-body text-foreground font-light tracking-wide mb-2">
                      5. Infrastructure definition
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                      Is your infrastructure in code or in someone&apos;s head? We
                      evaluate Terraform, Ansible, Docker Compose, or whatever
                      tools are in use. The key question is whether the entire
                      setup can be reproduced from scratch.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-body text-foreground font-light tracking-wide mb-2">
                      6. Secrets management
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                      Where do API keys, database passwords, and certificates
                      live? We check for secrets in code, .env files, shared
                      documents, and evaluate rotation policies and access
                      controls.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-body text-foreground font-light tracking-wide mb-2">
                      7. Disaster recovery
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                      What happens if your production database disappears? We
                      verify backup existence, frequency, storage location, and
                      whether restores have ever been tested. Untested backups
                      are not backups.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">
                  Day 3: The report
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The final deliverable is a document your CTO can act on
                  immediately. It includes:
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Maturity scorecard</strong>: a
                    visual score across all seven areas, benchmarked against
                    industry standards
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Risk assessment</strong>: critical
                    issues ranked by severity and likelihood of impact
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Prioritized roadmap</strong>: what
                    to fix first, second, and third. Ordered by impact vs. effort
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Cost estimates</strong>: what each
                    improvement costs to implement and what it saves
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">
                  What happens after
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The report is yours. You can implement the recommendations
                  in-house, hire someone else to do it, or ask our{" "}
                  <Link href="/devops-consulting" className="text-foreground/80 hover:text-foreground transition-colors">
                    DevOps consulting team
                  </Link>
                  {" "}to handle it. There is no lock-in and no obligation.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Most teams choose to start with the quick wins: the changes
                  that take 1-2 weeks and have the biggest immediate impact.
                  That alone can transform how a team ships.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If you want the full picture of where your infrastructure stands, our audit covers all seven areas in 72 hours.{" "}
                  <Link
                    href="/infrastructure-audit"
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Learn more about our infrastructure audit
                  </Link>
                  .
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-t border-foreground/[0.08] pt-8 mt-8">
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    Curious where your team would score?{" "}
                    <Link
                      href="/healthcheck"
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Take our free DevOps health check
                    </Link>
                    {" "}for a quick self-assessment across all seven areas. Or{" "}
                    <Link
                      href="/infrastructure-audit"
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      learn more about our full audit service
                    </Link>
                    .
                  </p>
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light mt-4">
                    For background on why this matters for small teams, read{" "}
                    <Link
                      href="/blog/why-smbs-need-devops"
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      why 53% of SMBs still don&apos;t have DevOps
                    </Link>
                    .
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </article>

      <CTASection
        headline="Want the full picture?"
        subtext="We will walk you through how the audit works for your specific setup."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
