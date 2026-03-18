import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "DevOps Consulting Services for Small Teams",
  description:
    "DevOps consulting for US software companies with 2-30 developers. CI/CD pipelines, infrastructure automation, monitoring, and ongoing maintenance. Fixed pricing, no surprises.",
  alternates: {
    canonical: "https://kenitech.io/devops-consulting",
  },
  openGraph: {
    title: "DevOps Consulting Services for Small Teams | Keni Engineering",
    description:
      "DevOps consulting for US software companies with 2-30 developers. CI/CD pipelines, infrastructure automation, monitoring, and ongoing maintenance.",
    url: "https://kenitech.io/devops-consulting",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does DevOps consulting cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevOps consulting rates vary widely depending on scope and company size. Big firms charge $200+/hr, offshore teams $35-70/hr. Keni Engineering offers fixed pricing for each engagement so you know the cost before we start.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a full-time DevOps engineer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. A full-time US DevOps engineer costs $130K-$220K+/year depending on seniority and location. For teams with 2-30 developers, a consulting engagement to set up the right infrastructure followed by a maintenance retainer is often more cost-effective than a full-time hire.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to set up CI/CD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic CI/CD pipeline can be set up in 1-2 weeks. A full internal development platform with CI/CD, monitoring, infrastructure as code, and automated deployments typically takes 4-8 weeks depending on the complexity of your existing setup.",
      },
    },
    {
      "@type": "Question",
      name: "What tools do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use open-source, battle-tested tools: GitHub Actions or GitLab CI for pipelines, Docker for containerization, Terraform for infrastructure as code, Prometheus and Grafana for monitoring, and industry-standard secrets managers. We pick what fits your stack, not what locks you in.",
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
      name: "DevOps Consulting",
      item: "https://kenitech.io/devops-consulting",
    },
  ],
};

const services = [
  {
    title: "CI/CD Pipeline Setup",
    description:
      "Automated build, test, and deploy pipelines. Every push triggers the right checks, every merge to main goes to production. No manual steps, no SSH.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Your entire infrastructure defined in version-controlled code. Terraform, Ansible, or whatever fits your stack. Reproducible, auditable, and reviewable.",
  },
  {
    title: "Container Orchestration",
    description:
      "Docker environments that match across dev, staging, and production. Consistent behavior everywhere, with automated scaling when you need it.",
  },
  {
    title: "Monitoring and Alerting",
    description:
      "Dashboards that show real system health and alerts that fire before your users notice. Structured logs, metrics, and runbooks for every alert.",
  },
  {
    title: "Secrets Management",
    description:
      "Centralized vault with automated injection. No more API keys in .env files or credentials shared over Slack. Rotation and audit logs included.",
  },
  {
    title: "Disaster Recovery",
    description:
      "Automated backups with tested restores. Documented recovery time objectives. When the worst happens, you know exactly how to come back.",
  },
];

const differentiators = [
  {
    title: "Fixed pricing",
    description:
      "No hourly billing, no incentive to drag things out. You know the cost before we start.",
  },
  {
    title: "Senior engineers only",
    description:
      "No juniors billing as seniors. The people on the call are the people doing the work.",
  },
  {
    title: "Built for small teams",
    description:
      "We work with companies that have 2-30 developers. Our solutions are right-sized, not enterprise bloat scaled down.",
  },
  {
    title: "US timezone, real-time collaboration",
    description:
      "Same working hours, same Slack channels, same standups. No overnight handoffs or lost-in-translation delays.",
  },
];

export default function DevOpsConsultingPage() {
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
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <h1 className="text-display text-foreground mb-8">
                DevOps consulting for teams that ship software
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-body text-foreground-secondary">
                Your developers should write code, not fight infrastructure. We
                set up your CI/CD, automate your deploys, and keep everything
                running. You push code, it goes to production. That is it.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* The Problem */}
      <section className="py-section-sm bg-surface">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-widest text-muted mb-8">
                THE PROBLEM
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground mb-8">
                53% of SMBs lack DevOps capabilities
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-foreground-secondary mb-6">
                Hiring a full-time DevOps engineer in the US costs $130K-$220K+
                per year when you include benefits and overhead. For a team of
                5-30 developers, that is a massive investment for a role that
                might not need to be full-time.
              </p>
              <p className="text-body text-foreground-secondary">
                Meanwhile, your developers are spending half their time on
                manual deploys, debugging servers, and firefighting production
                issues instead of building features.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-section">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-widest text-muted mb-8">
                WHAT WE DO
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground mb-16">
                Everything your team needs to ship with confidence
              </h2>
            </FadeIn>
            <div className="space-y-12">
              {services.map((service, index) => (
                <FadeIn key={service.title} delay={index * 0.1}>
                  <div>
                    <h3 className="text-body-lg text-foreground font-normal mb-3">
                      {service.title}
                    </h3>
                    <p className="text-body text-foreground-secondary">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Keni */}
      <section className="py-section-sm bg-surface">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-widest text-muted mb-8">
                WHY KENI
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground mb-16">
                Built different from the big firms
              </h2>
            </FadeIn>
            <div className="space-y-12">
              {differentiators.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div>
                    <h3 className="text-body-lg text-foreground font-normal mb-3">
                      {item.title}
                    </h3>
                    <p className="text-body text-foreground-secondary">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="py-section">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-widest text-muted mb-8">
                HOW WE WORK
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground mb-8">
                Four phases, one clear outcome
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-foreground-secondary mb-6">
                Every engagement follows the same structured process. We start
                with a diagnosis of your current setup, design the right
                solution, implement it, and then maintain it for you.
              </p>
              <p className="text-body text-foreground-secondary">
                <Link href="/platform" className="text-foreground hover:text-muted transition-colors">
                  See what the platform looks like
                </Link>
                {" "}or{" "}
                <Link href="/healthcheck" className="text-foreground hover:text-muted transition-colors">
                  take our free DevOps health check
                </Link>
                {" "}to see where your team stands.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to stop firefighting?"
        subtext="30 minutes. No pitch, no pressure. Just a conversation about what's slowing your team down and how to fix it."
        buttonText="Book a Free Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
