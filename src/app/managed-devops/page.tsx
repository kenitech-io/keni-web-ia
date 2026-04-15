import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

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
        text: "A managed DevOps service typically includes CI/CD pipeline management, monitoring and alerting, security patching and updates, backup and disaster recovery, performance optimization, and incident response.",
      },
    },
    {
      "@type": "Question",
      name: "How is managed DevOps different from hiring a DevOps engineer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A managed DevOps service gives you a team of senior engineers for a fraction of the cost of one full-time hire. You get broader expertise, no PTO gaps, no recruiting overhead, and no ramp-up time.",
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
  { title: "CI/CD pipeline management", description: "We build, maintain, and optimize your deployment pipelines. Automated builds, tests, and deploys. When something breaks, we fix it." },
  { title: "Monitoring and alerting", description: "Prometheus, Grafana, and structured alerting. Dashboards that show what matters and alerts that wake up the right people." },
  { title: "Security patching and updates", description: "OS patches, container image updates, dependency scanning, TLS certificate management. Applied regularly with zero downtime." },
  { title: "Backup and disaster recovery", description: "Encrypted daily backups with automated restore testing. Documented recovery procedures. We verify backups actually work." },
  { title: "Performance optimization", description: "Ongoing review of resource usage, response times, and costs. We right-size servers, tune databases, and eliminate bottlenecks." },
  { title: "Incident response", description: "When production goes down, we respond. Root cause analysis, fix, and a post-mortem documenting what happened and how we prevent it." },
];

const steps = [
  { number: "01", title: "Audit", description: "We start with a 72-hour infrastructure audit. We review your CI/CD, monitoring, security, backup strategy, and deployment process. You get a detailed report with findings and a prioritized plan." },
  { number: "02", title: "Setup", description: "We implement the internal developer platform your team needs. CI/CD pipelines, monitoring, automated backups, security hardening. Everything as code, documented, reproducible." },
  { number: "03", title: "Ongoing management", description: "Once the platform is running, we manage it. Security patches, dependency updates, performance tuning, incident response. You push code, it goes to production. We handle everything underneath." },
];

export default function ManagedDevOpsPage() {
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
                Your infrastructure, managed by senior engineers
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                CI/CD pipelines, monitoring, security updates, backups, and
                incident response. We handle the infrastructure so your team
                ships product, not fights servers.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* The Problem */}
      <section className="px-3">
        <FadeIn>
          <div data-dark-section className="py-16 md:py-32 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #0a1a10 0%, #0d1f14 50%, #091208 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              THE PROBLEM
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 text-center">
              Infrastructure does not maintain itself
            </h2>
            <p className="text-sm text-white/70 font-light text-center mb-20 max-w-[500px] mx-auto">
              Every hour your developers spend on infrastructure is an hour not spent on product.
            </p>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">COST</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-none mb-2">$130K+</h3>
                <p className="text-sm text-white/70 font-light mb-4">per year for one hire</p>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  Salary, benefits, recruiting, onboarding. For a role that may not need to be full-time.
                </p>
              </div>
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">RISK</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-none mb-2">2 days</h3>
                <p className="text-sm text-white/70 font-light mb-4">average fire drill</p>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  Production down, customers affected. A problem proper monitoring would catch in five minutes.
                </p>
              </div>
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">DEBT</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-none mb-2">Ignored</h3>
                <p className="text-sm text-white/70 font-light mb-4">until it breaks</p>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  Security patches, certificate renewals, dependency updates. Most teams skip until it is too late.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* What's Included */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="bg-white dark:bg-[#1c1c1e] py-24 md:py-32 px-8">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              WHAT&apos;S INCLUDED
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white tracking-tight mb-20 text-center">
              Everything your infrastructure needs
            </h2>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
              {included.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.06}>
                  <div>
                    <h3 className="text-body text-black dark:text-white font-light tracking-wide mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* How It Works */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div data-dark-section className="py-16 md:py-32 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #0f1520 0%, #131d2a 50%, #0c1318 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-20 text-center">
              Three steps to managed infrastructure
            </h2>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
              {steps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 0.1}>
                  <div className="text-center">
                    <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">{step.number}</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-none mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-light max-w-[300px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Why Not Hire */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="bg-white dark:bg-[#1c1c1e] py-24 md:py-32 px-8">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              WHY NOT JUST HIRE?
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white tracking-tight mb-20 text-center">
              A team for a fraction of one hire
            </h2>
            <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-20 md:gap-y-16">
              <div>
                <h3 className="text-body text-black dark:text-white font-light tracking-wide mb-3">No recruiting</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  Skip the 2-4 months of hiring and another month of onboarding. Coverage starts in weeks.
                </p>
              </div>
              <div>
                <h3 className="text-body text-black dark:text-white font-light tracking-wide mb-3">No single point of failure</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  A team of senior engineers, not one person. No PTO gaps, no knowledge silos, no starting over if someone leaves.
                </p>
              </div>
              <div>
                <h3 className="text-body text-black dark:text-white font-light tracking-wide mb-3">20-40% of the cost</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  Same scope as a full-time hire at a fraction of the total cost. The math is straightforward.
                </p>
              </div>
              <div>
                <h3 className="text-body text-black dark:text-white font-light tracking-wide mb-3">Broader expertise</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  Engineers who have seen dozens of stacks, not just yours. Patterns and solutions from real production environments.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Free Audit */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div data-dark-section className="py-16 md:py-32 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #1a1008 0%, #201510 50%, #1a1008 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              NOT SURE WHERE TO START?
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 text-center">
              <span className="text-[#C65100]">Free</span> Infrastructure Audit
            </h2>
            <p className="text-sm text-white/70 font-light mb-10 max-w-[480px] mx-auto text-center leading-relaxed">
              Full review of your CI/CD, security, and infrastructure in 72 hours. You get a prioritized roadmap your team can act on immediately.
            </p>
            <div className="text-center">
              <Link href="/infrastructure-audit" className="inline-block bg-white text-black px-6 py-2.5 text-xs font-light tracking-wide rounded-full hover:bg-white/85 transition-colors">
                Learn more
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* From the Blog */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="py-24 md:py-32 px-8 bg-light-gradient">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              FROM THE BLOG
            </p>
            <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-16">
              <FadeIn delay={0.1}>
                <Link href="/blog/how-much-does-devops-cost" className="group block">
                  <h3 className="text-base font-light tracking-wide text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors mb-3">
                    How much does DevOps cost?
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed font-light">
                    A breakdown of what companies actually spend on DevOps, from in-house hires to managed services.
                  </p>
                </Link>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link href="/blog/why-smbs-need-devops" className="group block">
                  <h3 className="text-base font-light tracking-wide text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors mb-3">
                    Why 53% of SMBs still don&apos;t have DevOps
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed font-light">
                    The real cost of not having a proper deployment process, and what a realistic fix looks like.
                  </p>
                </Link>
              </FadeIn>
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
              Ready to hand off your infrastructure?
            </h2>
            <p className="text-sm text-white/70 font-light mb-10 max-w-[360px] mx-auto leading-relaxed">
              Tell us what you&apos;re running. We&apos;ll tell you<br />what it takes to manage it properly.
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
