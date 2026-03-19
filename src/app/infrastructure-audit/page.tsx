import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "DevOps Infrastructure Audit",
  description:
    "Get a complete picture of your infrastructure in 72 hours. We audit your CI/CD pipelines, deployment process, monitoring, secrets management, and disaster recovery. Clear report with prioritized recommendations.",
  alternates: {
    canonical: "https://kenitech.io/infrastructure-audit",
  },
  openGraph: {
    title: "DevOps Infrastructure Audit | Keni Engineering",
    description:
      "Get a complete picture of your infrastructure in 72 hours. Clear report with prioritized recommendations for your team.",
    url: "https://kenitech.io/infrastructure-audit",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a DevOps infrastructure audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A DevOps infrastructure audit is a comprehensive review of your software delivery pipeline, infrastructure, monitoring, security, and operational practices. It evaluates maturity across seven key areas and delivers a prioritized roadmap of improvements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an infrastructure audit take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical infrastructure audit takes 72 hours (3 business days) from the time we get access to your systems. Day 1 is discovery and access, days 1-2 are the evaluation, and day 3 is the final report.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need access to for the audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We need read-only access to your code repositories, CI/CD configuration, cloud accounts, and monitoring tools. We don't need admin access and we don't make any changes to your systems during the audit.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an infrastructure audit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on the size and complexity of your infrastructure. We price audits based on ROI share, so the cost scales with the value we find. Book a free call and we'll scope it together.",
      },
    },
  ],
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
      name: "Infrastructure Audit",
      item: "https://kenitech.io/infrastructure-audit",
    },
  ],
};

const auditAreas = [
  {
    title: "Deployment Process",
    description:
      "How code gets from a developer's machine to production. Manual steps, automation gaps, rollback capabilities, and deployment frequency.",
  },
  {
    title: "CI/CD Pipelines",
    description:
      "Build times, test coverage, pipeline reliability. Whether failures block merges, how fast feedback reaches developers.",
  },
  {
    title: "Infrastructure Definition",
    description:
      "How your servers, networks, and services are configured. Infrastructure as code adoption, drift detection, reproducibility.",
  },
  {
    title: "Monitoring and Observability",
    description:
      "What you can see when something goes wrong. Logging, metrics, dashboards, alerting, and incident response process.",
  },
  {
    title: "Secrets Management",
    description:
      "Where credentials live, who has access, how they rotate. Whether API keys are in code, .env files, or a proper vault.",
  },
  {
    title: "Disaster Recovery",
    description:
      "Backup strategy, restore testing, recovery time objectives. What happens if your production database disappears right now.",
  },
  {
    title: "Security Posture",
    description:
      "Network segmentation, access controls, dependency scanning, container security. The basics that prevent breaches.",
  },
];

const deliverables = [
  {
    title: "Maturity scorecard",
    description:
      "A clear score across every area, so you know exactly where you stand compared to industry standards.",
  },
  {
    title: "Risk assessment",
    description:
      "Critical vulnerabilities and risks ranked by impact. What needs fixing now vs. what can wait.",
  },
  {
    title: "Prioritized roadmap",
    description:
      "A concrete plan with recommended changes ordered by impact and effort. Quick wins first, then structural improvements.",
  },
  {
    title: "Cost analysis",
    description:
      "What each fix costs to implement and what it saves you. Real numbers, not vague estimates.",
  },
];

export default function InfrastructureAuditPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <h1 className="text-heading text-foreground font-light tracking-wide mb-8">
                Know exactly where your infrastructure stands
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                A complete audit of your DevOps setup in 72 hours. We look at
                your repos, pipelines, deploys, monitoring, and security. You
                get a clear report with exactly what to fix and in what order.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Why an audit */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-32 md:mb-40 font-light text-center">
                WHY AN AUDIT
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-8">
                The right assessment pays for itself many times over
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-6">
                Most teams know something isn&apos;t right, but they don&apos;t know
                where to start. They fix the symptom that hurts most today and
                ignore the structural issues underneath.
              </p>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                An audit gives you the full picture. Instead of guessing, you
                get a prioritized list of changes that will have the most impact
                on your team&apos;s ability to ship.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* What We Audit */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-32 md:mb-40 font-light text-center">
                WHAT WE AUDIT
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-16 text-center">
                Seven areas that determine your team&apos;s velocity
              </h2>
            </FadeIn>
            <div className="space-y-16">
              {auditAreas.map((area, index) => (
                <FadeIn key={area.title} delay={index * 0.08}>
                  <div>
                    <h3 className="text-body text-foreground font-light tracking-wide mb-3">
                      {area.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                      {area.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What You Get */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-32 md:mb-40 font-light text-center">
                WHAT YOU GET
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-16 text-center">
                A report your CTO can act on Monday morning
              </h2>
            </FadeIn>
            <div className="space-y-16">
              {deliverables.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div>
                    <h3 className="text-body text-foreground font-light tracking-wide mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Self-Assessment */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-6">
                Not sure if you need an audit?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-8">
                Take our free DevOps health check. 7 questions, 2 minutes. You
                will get an instant score and see where your team stands.
              </p>
              <Link
                href="/healthcheck"
                className="inline-block bg-foreground hover:bg-foreground/85 text-background px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors"
              >
                Take the Health Check
              </Link>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to see the full picture?"
        subtext="30 minutes. We will walk you through how the audit works and whether it makes sense for your team."
        buttonText="Book a free call"
        buttonHref="/contact"
      />
    </main>
  );
}
