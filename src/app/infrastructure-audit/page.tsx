import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "DevOps Infrastructure Audit in 72 Hours",
  description:
    "Get a full infrastructure audit in 72 hours. We review your CI/CD, deployments, monitoring, secrets, and disaster recovery. Prioritized roadmap included.",
  alternates: {
    canonical: "https://kenitech.io/infrastructure-audit",
  },
  openGraph: {
    title: "DevOps Infrastructure Audit in 72 Hours | Keni Engineering",
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
        text: "The infrastructure audit is free. We review your systems, deliver the report, and you decide what to do next. No commitment, no hidden fees.",
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
      "How code gets from a developer's machine to production. Manual steps, automation gaps, rollback capabilities.",
  },
  {
    title: "CI/CD Pipelines",
    description:
      "Build times, test coverage, pipeline reliability. Whether failures block merges, how fast feedback reaches developers.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "How your servers, networks, and services are configured. IaC adoption, drift detection, reproducibility.",
  },
  {
    title: "Monitoring & Observability",
    description:
      "What you can see when something goes wrong. Logging, metrics, dashboards, alerting, and incident response.",
  },
  {
    title: "Secrets Management",
    description:
      "Where credentials live, who has access, how they rotate. Whether API keys are in code or a proper vault.",
  },
  {
    title: "Disaster Recovery",
    description:
      "Backup strategy, restore testing, recovery time objectives. What happens if your database disappears right now.",
  },
  {
    title: "Security Posture",
    description:
      "Network segmentation, access controls, dependency scanning, container security. The basics that prevent breaches.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Cloud spend analysis, unused resources, right-sizing opportunities. Where you're overpaying and where to optimize.",
  },
  {
    title: "Developer Experience",
    description:
      "Onboarding friction, local dev setup, documentation gaps. How fast a new engineer can ship their first feature.",
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
                A full infrastructure audit of your stack, delivered in 72 hours
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

      {/* How it works — 3 days timeline */}
      <section className="py-32 md:py-48">
        <Container>
          <FadeIn>
            <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
              72 HOURS
            </p>
          </FadeIn>
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                day: "Day 1",
                title: "Discovery",
                desc: "We get read-only access to your repos, pipelines, cloud accounts, and monitoring. No admin needed.",
              },
              {
                day: "Day 2",
                title: "Evaluation",
                desc: "We audit all seven areas systematically. Every finding documented, every risk scored.",
              },
              {
                day: "Day 3",
                title: "Report",
                desc: "You get the full report: scores, risks, roadmap, and cost analysis. Ready to act on.",
              },
            ].map((step, i) => (
              <FadeIn key={step.day} delay={i * 0.1}>
                <div className="bg-surface rounded-2xl p-8 h-full shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
                  <span className="text-xs text-muted font-mono block mb-4">{step.day}</span>
                  <h3 className="text-body text-foreground font-medium tracking-wide mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary/70 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Audit — cards */}
      <section className="py-32 md:py-48">
        <Container>
          <FadeIn>
            <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
              WHAT WE AUDIT
            </p>
          </FadeIn>
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {auditAreas.map((area, index) => (
              <FadeIn key={area.title} delay={index * 0.06}>
                <div className="bg-surface rounded-2xl p-8 h-full shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
                  <h3 className="text-body text-foreground font-light tracking-wide mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary/70 leading-relaxed font-light">
                    {area.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* What You Get — horizontal grid */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[900px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
                WHAT YOU GET
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-12 text-center">
                A report your CTO can act on Monday morning
              </h2>
            </FadeIn>
            <div>
              {deliverables.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <div className={`grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-16 py-10 ${
                    index < deliverables.length - 1 ? "border-b border-border-color" : ""
                  }`}>
                    <h3 className="text-body text-foreground font-light tracking-wide">
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

      {/* After the audit */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-6">
                What happens after the audit
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-8">
                The report is yours. You can implement the recommendations
                in-house, or our{" "}
                <Link href="/devops-consulting" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                  DevOps consulting team
                </Link>
                {" "}can handle it for you. Fixed pricing, no surprises, no lock-in.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Related reading */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
                RELATED READING
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <Link href="/blog/devops-audit-what-to-expect" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    What happens during a DevOps infrastructure audit
                  </Link>
                  {" "}: a step-by-step walkthrough of our audit process and what the deliverable looks like.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <Link href="/blog/why-smbs-need-devops" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    Why 53% of SMBs still don&apos;t have DevOps
                  </Link>
                  {" "}: the data behind why small teams struggle with infrastructure, and what it costs them.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Health Check CTA */}
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
        subtext="We will walk you through how the audit works and whether it makes sense for your team."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
