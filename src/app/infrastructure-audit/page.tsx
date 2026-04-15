import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

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
  { title: "Deployment Process", description: "How code gets from a developer's machine to production. Manual steps, automation gaps, rollback capabilities." },
  { title: "CI/CD Pipelines", description: "Build times, test coverage, pipeline reliability. Whether failures block merges, how fast feedback reaches developers." },
  { title: "Infrastructure as Code", description: "How your servers, networks, and services are configured. IaC adoption, drift detection, reproducibility." },
  { title: "Monitoring & Observability", description: "What you can see when something goes wrong. Logging, metrics, dashboards, alerting, and incident response." },
  { title: "Secrets Management", description: "Where credentials live, who has access, how they rotate. Whether API keys are in code or a proper vault." },
  { title: "Disaster Recovery", description: "Backup strategy, restore testing, recovery time objectives. What happens if your database disappears right now." },
  { title: "Security Posture", description: "Network segmentation, access controls, dependency scanning, container security. The basics that prevent breaches." },
  { title: "Cost Efficiency", description: "Cloud spend analysis, unused resources, right-sizing opportunities. Where you're overpaying and where to optimize." },
  { title: "Developer Experience", description: "Onboarding friction, local dev setup, documentation gaps. How fast a new engineer can ship their first feature." },
];

const deliverables = [
  { title: "Maturity scorecard", description: "A clear score across every area, so you know exactly where you stand compared to industry standards." },
  { title: "Risk assessment", description: "Critical vulnerabilities and risks ranked by impact. What needs fixing now vs. what can wait." },
  { title: "Prioritized roadmap", description: "A concrete plan with recommended changes ordered by impact and effort. Quick wins first, then structural improvements." },
  { title: "Cost analysis", description: "What each fix costs to implement and what it saves you. Real numbers, not vague estimates." },
];

export default function InfrastructureAuditPage() {
  return (
    <main className="bg-[#f5f5f7] dark:bg-[#0A0A0A] text-foreground">
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

      {/* 72 Hours */}
      <section className="px-3">
        <FadeIn>
          <div data-dark-section className="py-16 md:py-32 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #0f1520 0%, #131d2a 50%, #0c1318 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              72 HOURS
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-20 text-center">
              Three days, full picture
            </h2>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">DAY 1</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-none mb-3">Discovery</h3>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  We get read-only access to your repos, pipelines, cloud accounts, and monitoring. No admin needed.
                </p>
              </div>
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">DAY 2</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-none mb-3">Evaluation</h3>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  We audit all nine areas systematically. Every finding documented, every risk scored.
                </p>
              </div>
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">DAY 3</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-none mb-3">Report</h3>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  You get the full report: scores, risks, roadmap, and cost analysis. Ready to act on.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* What We Audit */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="bg-white dark:bg-[#1c1c1e] py-24 md:py-32 px-8">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              WHAT WE AUDIT
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white tracking-tight mb-20 text-center">
              Nine areas, zero blind spots
            </h2>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              {auditAreas.map((area, index) => (
                <FadeIn key={area.title} delay={index * 0.06}>
                  <div>
                    <h3 className="text-body text-black dark:text-white font-light tracking-wide mb-3">
                      {area.title}
                    </h3>
                    <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                      {area.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* What You Get */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div data-dark-section className="py-16 md:py-32 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #0a1a10 0%, #0d1f14 50%, #091208 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              WHAT YOU GET
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-20 text-center">
              A report your CTO can act on Monday morning
            </h2>
            <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-20 md:gap-y-16">
              {deliverables.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <div>
                    <h3 className="text-body text-white font-light tracking-wide mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* After the audit */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="bg-white dark:bg-[#1c1c1e] py-24 md:py-32 px-8 text-center">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light">
              WHAT HAPPENS NEXT
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white tracking-tight mb-6">
              The report is yours
            </h2>
            <p className="text-sm text-black/50 dark:text-white/50 font-light mb-8 max-w-[480px] mx-auto leading-relaxed">
              Implement the recommendations in-house, or our{" "}
              <Link href="/devops-consulting" className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white underline decoration-black/20 dark:decoration-white/20 hover:decoration-black/50 dark:hover:decoration-white/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                DevOps consulting team
              </Link>
              {" "}can handle it for you. Fixed pricing, no surprises, no lock-in.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Related reading */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="py-24 md:py-32 px-8 bg-light-gradient">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              FROM THE BLOG
            </p>
            <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-16">
              <FadeIn delay={0.1}>
                <Link href="/blog/devops-audit-what-to-expect" className="group block">
                  <h3 className="text-base font-light tracking-wide text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors mb-3">
                    What happens during a DevOps audit
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed font-light">
                    A step-by-step walkthrough of our audit process and what the deliverable looks like.
                  </p>
                </Link>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link href="/blog/why-smbs-need-devops" className="group block">
                  <h3 className="text-base font-light tracking-wide text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors mb-3">
                    Why 53% of SMBs still don&apos;t have DevOps
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed font-light">
                    The data behind why small teams struggle with infrastructure, and what it costs them.
                  </p>
                </Link>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Health Check */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div data-dark-section className="py-16 md:py-32 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #1a1008 0%, #201510 50%, #1a1008 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              NOT SURE YET?
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 text-center">
              Take the Health Check first
            </h2>
            <p className="text-sm text-white/70 font-light mb-10 max-w-[400px] mx-auto text-center leading-relaxed">
              7 questions, 2 minutes. Instant score across key DevOps areas. Free, no email required.
            </p>
            <div className="text-center">
              <Link href="/healthcheck" className="inline-block bg-white text-black px-8 py-2.5 text-xs font-light tracking-wide rounded-full hover:bg-white/85 transition-colors">
                Take the Health Check
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="px-3 pt-3 pb-3">
        <FadeIn>
          <div data-dark-section className="py-16 md:py-32 px-4 md:px-8 bg-black text-center">
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light">
              READY?
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              Ready to see the full picture?
            </h2>
            <p className="text-sm text-white/70 font-light mb-10 max-w-[360px] mx-auto leading-relaxed">
              We&apos;ll walk you through how the audit works<br />and whether it makes sense for your team.
            </p>
            <a
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-2.5 text-xs font-light tracking-wide rounded-full hover:bg-white/85 transition-colors"
            >
              Let&apos;s talk
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
