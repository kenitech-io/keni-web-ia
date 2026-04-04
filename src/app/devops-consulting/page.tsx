import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { BOOKING_URL } from "@/lib/config";
import FadeIn from "@/components/ui/FadeIn";
import ProcessSection from "@/components/home/ProcessSection";
import PhaseCarousel from "@/components/PhaseCarousel";

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
        text: "Not necessarily. A full-time US DevOps engineer costs $130K-$220K/year depending on seniority and location. For teams with 2-30 developers, a consulting engagement to set up the right infrastructure followed by a maintenance retainer is often more cost-effective than a full-time hire.",
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
    title: "Real-time collaboration, no handoffs",
    description:
      "Same working hours, same Slack channels, same standups. No overnight delays or lost-in-translation communication gaps.",
  },
];

export default function DevOpsConsultingPage() {
  return (
    <main className="bg-[#f5f5f7] dark:bg-[#0A0A0A] text-foreground overflow-x-hidden">
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
                DevOps consulting for teams that ship software
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Your developers should write code, not fight infrastructure. We
                set up your CI/CD, automate your deploys, and keep everything
                running. You push code, it goes to production. That is it.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* The Problem */}
      <section className="px-3">
        <FadeIn>
          <div data-dark-section className="py-24 md:py-32 px-8" style={{ background: "linear-gradient(180deg, #0a1a10 0%, #0d1f14 50%, #091208 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              THE PROBLEM
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 text-center">
              53% of SMBs have no DevOps
            </h2>
            <p className="text-sm text-white/70 font-light text-center mb-20 max-w-[500px] mx-auto">
              Most small teams still operate without proper DevOps practices. The cost of inaction is real.
            </p>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">COST</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-none mb-2">$130K</h3>
                <p className="text-sm text-white/70 font-light mb-4">to $220K/year</p>
                <p className="text-xs text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  The real cost of one DevOps engineer. A big bet for a role that might not need to be full-time.
                </p>
              </div>
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">TIME</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-none mb-2">50%</h3>
                <p className="text-sm text-white/70 font-light mb-4">of engineering time</p>
                <p className="text-xs text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  Spent on manual deploys, debugging servers, and firefighting production. Not building features.
                </p>
              </div>
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">RISK</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-none mb-2">Zero</h3>
                <p className="text-sm text-white/70 font-light mb-4">visibility</p>
                <p className="text-xs text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  No CI/CD, no monitoring, no IaC. When something breaks, everyone stops.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* How We Work */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div data-dark-section className="py-24 md:py-32 px-8" style={{ background: "linear-gradient(180deg, #0f1520 0%, #131d2a 50%, #0c1318 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              HOW WE WORK
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-20 text-center">
              Four steps to production
            </h2>
            <PhaseCarousel />
          </div>
        </FadeIn>
      </section>

      {/* What We Do */}
      <ProcessSection />

      {/* Not sure where to start */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div data-dark-section className="py-24 md:py-32 px-8" style={{ background: "linear-gradient(180deg, #1a1008 0%, #201510 50%, #1a1008 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              NOT SURE WHERE TO START?
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 text-center">
              <span className="text-[#C65100]">Free</span> Infrastructure Audit
            </h2>
            <p className="text-sm text-white/50 font-light mb-8 max-w-[480px] mx-auto text-center">
              Full review of your CI/CD, security, and infrastructure in 72 hours. You get a prioritized roadmap your team can act on immediately.
            </p>
            <div className="flex items-center justify-center">
              <Link href="/infrastructure-audit" className="inline-block bg-white text-black px-6 py-2 text-xs font-light tracking-wide rounded-full hover:bg-white/85 transition-colors">
                Learn more
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Why Keni */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="bg-white dark:bg-[#1c1c1e] py-24 md:py-32 px-8">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              WHY KENI
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white tracking-tight mb-20 text-center">
              Built different from the big firms
            </h2>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-16">
              {differentiators.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.1}>
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

      {/* Related reading */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="py-24 md:py-32 px-8 bg-light-gradient">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              FROM THE BLOG
            </p>
            <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              <FadeIn delay={0.1}>
                <Link href="/blog/why-smbs-need-devops" className="group block">
                  <h3 className="text-base font-light tracking-wide text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors mb-3">
                    Why 53% of SMBs still don&apos;t have DevOps
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed font-light">
                    The real cost of not having a proper deployment process, and what a realistic fix looks like.
                  </p>
                </Link>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link href="/blog/github-actions-vs-gitlab-ci-vs-jenkins" className="group block">
                  <h3 className="text-base font-light tracking-wide text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors mb-3">
                    GitHub Actions vs GitLab CI vs Jenkins
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed font-light">
                    A practical comparison of CI tools for small to mid-sized teams.
                  </p>
                </Link>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link href="/blog/devops-audit-what-to-expect" className="group block">
                  <h3 className="text-base font-light tracking-wide text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors mb-3">
                    What happens during a DevOps audit
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed font-light">
                    A step-by-step breakdown of our audit process and what the report looks like.
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
          <div className="py-24 md:py-32 px-8 bg-white dark:bg-[#1c1c1e] text-center">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light">
              READY?
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white tracking-tight mb-6">
              Ready to stop firefighting?
            </h2>
            <p className="text-sm text-black/50 dark:text-white/50 font-light mb-10 max-w-[360px] mx-auto leading-relaxed">
              Just a conversation about what&apos;s slowing your team<br />down and how to fix it.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-2.5 text-xs font-light tracking-wide rounded-full hover:bg-black/85 dark:hover:bg-white/85 transition-colors"
            >
              Let&apos;s talk
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
