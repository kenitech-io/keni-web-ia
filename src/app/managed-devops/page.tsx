import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Managed DevOps for Small Development Teams",
  description:
    "Managed DevOps services for US software companies with 2-30 developers. CI/CD, monitoring, security patching, backups, and incident response. Your infrastructure, managed by senior engineers.",
  alternates: {
    canonical: "https://kenitech.io/managed-devops",
  },
  openGraph: {
    title: "Managed DevOps for Small Development Teams | Keni Engineering",
    description:
      "Managed DevOps services for US software companies with 2-30 developers. CI/CD, monitoring, security patching, backups, and incident response.",
    url: "https://kenitech.io/managed-devops",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is managed DevOps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Managed DevOps is an ongoing service where an external team handles your CI/CD pipelines, monitoring, security updates, backups, and infrastructure maintenance. Your developers use the platform to deploy code, while the managed team keeps everything running, updated, and secure.",
      },
    },
    {
      "@type": "Question",
      name: "How much does managed DevOps cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Managed DevOps services typically cost between $2,000 and $8,000 per month depending on infrastructure complexity and the number of environments. Compare that to a full-time DevOps engineer at $130K-$220K per year plus benefits and overhead.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in managed DevOps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A managed DevOps service typically includes CI/CD pipeline management, monitoring and alerting, security patching and updates, backup and disaster recovery, performance optimization, and incident response. The goal is to keep your infrastructure healthy so your developers can focus on shipping features.",
      },
    },
    {
      "@type": "Question",
      name: "How is managed DevOps different from hiring a DevOps engineer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A managed DevOps service gives you a team of senior engineers for a fraction of the cost of one full-time hire. You get broader expertise, no PTO gaps, no recruiting overhead, and no ramp-up time. For teams with 2-30 developers, managed DevOps covers the same scope at 20-40% of the cost.",
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
      name: "Managed DevOps",
      item: "https://kenitech.io/managed-devops",
    },
  ],
};

const included = [
  {
    title: "CI/CD pipeline management",
    description:
      "We build, maintain, and optimize your deployment pipelines. Automated builds, tests, and deploys to staging and production. When something breaks in the pipeline, we fix it.",
  },
  {
    title: "Monitoring and alerting",
    description:
      "Prometheus, Grafana, and structured alerting configured for your stack. You get dashboards that show what matters and alerts that wake up the right people, not noise that everyone ignores.",
  },
  {
    title: "Security patching and updates",
    description:
      "OS patches, container base image updates, dependency vulnerability scanning, and TLS certificate management. Applied on a regular schedule with zero downtime.",
  },
  {
    title: "Backup and disaster recovery",
    description:
      "Encrypted daily backups with automated restore testing. Documented recovery procedures your team can execute if needed. We verify backups actually work, not just that they ran.",
  },
  {
    title: "Performance optimization",
    description:
      "Ongoing review of resource usage, response times, and infrastructure costs. We right-size your servers, tune your databases, and eliminate bottlenecks before they become incidents.",
  },
  {
    title: "Incident response",
    description:
      "When production goes down, we respond. Root cause analysis, fix, and a post-mortem documenting what happened and what we changed to prevent it from happening again.",
  },
];

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "We start with a 72-hour infrastructure audit. We review your CI/CD, monitoring, security posture, backup strategy, and deployment process. You get a detailed report with findings and a prioritized remediation plan.",
  },
  {
    number: "02",
    title: "Setup",
    description:
      "We implement the internal developer platform your team needs. CI/CD pipelines, monitoring dashboards, automated backups, security hardening. Everything is infrastructure as code, documented, and reproducible.",
  },
  {
    number: "03",
    title: "Ongoing management",
    description:
      "Once the platform is running, we manage it. Security patches, dependency updates, performance tuning, incident response. Your developers push code and it goes to production. We handle everything underneath.",
  },
];

export default function ManagedDevOpsPage() {
  return (
    <main className="bg-background text-foreground">
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
                Your infrastructure, managed by senior engineers
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                CI/CD pipelines, monitoring, security updates, backups, and
                incident response. We handle the infrastructure so your team
                ships product, not fights servers. Managed DevOps for companies
                with 2-30 developers.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* The Problem */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted mb-16 md:mb-20 font-light text-center">
                THE PROBLEM
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-8">
                Infrastructure does not maintain itself
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-2">
                Every week there are security patches to apply, certificates to
                renew, dependencies to update, and alerts to tune. Your
                developers can do this work. But every hour they spend on
                infrastructure is an hour they are not spending on your product.
              </p>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-6">
                Most teams ignore maintenance until something breaks. Then it is
                a fire drill: production is down, customers are affected, and
                your best engineer spends two days debugging a problem that
                proper monitoring would have caught in five minutes.
              </p>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Hiring a full-time DevOps engineer costs $130K-$220K per year in
                the US. For a team of 5-15 developers, that is a big commitment
                for a role that may not need to be full-time. Managed DevOps
                gives you the same coverage at a fraction of the cost.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[900px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted mb-16 md:mb-20 font-light text-center">
                WHAT&apos;S INCLUDED
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-16 text-center">
                Everything your infrastructure needs to stay healthy
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              {included.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.05}>
                  <div className="bg-surface rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
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

      {/* How It Works */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted mb-16 md:mb-20 font-light text-center">
                HOW IT WORKS
              </p>
            </FadeIn>
            <div className="space-y-16">
              {steps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 0.1}>
                  <div>
                    <p className="text-sm text-muted/60 font-light mb-2">
                      {step.number}
                    </p>
                    <h3 className="text-body text-foreground font-light tracking-wide mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Not Hire */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted mb-16 md:mb-20 font-light text-center">
                WHY NOT JUST HIRE?
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-8">
                A team for the price of a fraction of one hire
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-6">
                A full-time DevOps engineer in the US costs $130K-$220K per year
                including benefits and overhead. Recruiting takes 2-4 months.
                Onboarding takes another month. If they leave, you start over.
              </p>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-6">
                With managed DevOps, you get a team of senior engineers who
                already know the tools, the patterns, and the failure modes. No
                recruiting. No ramp-up. No PTO gaps. Coverage starts in weeks,
                not months.
              </p>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                For most teams with 2-30 developers, managed infrastructure
                covers the same scope as a full-time hire at 20-40% of the
                total cost. The math is straightforward. Our{" "}
                <Link
                  href="/devops-consulting"
                  className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                >
                  consulting services
                </Link>{" "}
                page covers our full engagement model.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Not sure where to start */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted mb-16 md:mb-20 font-light text-center">
                NOT SURE WHERE TO START?
              </p>
            </FadeIn>
            <div className="space-y-16">
              <FadeIn delay={0.1}>
                <div>
                  <h3 className="text-body text-foreground font-light tracking-wide mb-3">
                    Infrastructure audit
                  </h3>
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    Our{" "}
                    <Link
                      href="/infrastructure-audit"
                      className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                    >
                      72-hour infrastructure audit
                    </Link>{" "}
                    gives you a complete picture of your CI/CD, monitoring,
                    security, and infrastructure. You get a prioritized roadmap
                    your team can act on immediately.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-body text-foreground font-light tracking-wide mb-3">
                    Quick self-assessment
                  </h3>
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    Take our{" "}
                    <Link
                      href="/healthcheck"
                      className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                    >
                      free DevOps health check
                    </Link>{" "}
                    to score your team across seven key areas in 2 minutes.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Related reading */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted mb-16 md:mb-20 font-light text-center">
                FROM THE BLOG
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <Link
                    href="/blog/how-much-does-devops-cost"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    How much does DevOps cost?
                  </Link>
                  {" "}: a breakdown of what companies actually spend on DevOps,
                  from in-house hires to managed services.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <Link
                    href="/blog/why-smbs-need-devops"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    Why 53% of SMBs still don&apos;t have DevOps
                  </Link>
                  {" "}: the real cost of not having a proper deployment process,
                  and what a realistic fix looks like.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to hand off your infrastructure?"
        subtext="Tell us what you're running. We'll tell you what it takes to manage it properly."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
