import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import ProcessSection from "@/components/home/ProcessSection";
import PhaseScreen from "@/components/PhaseScreen";

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
                Only 47% of SMBs use DevOps tools
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-2">
                According to Statista, the majority of small and mid-sized
                businesses still operate without proper DevOps practices.
              </p>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-6">
                Hiring a full-time DevOps engineer in the US costs $130K-$220K
                per year when you include benefits and overhead. For a team of
                5-30 developers, that&apos;s a significant investment for a role that
                might not need to be full-time.
              </p>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Meanwhile, your developers are spending half their time on
                manual deploys, debugging servers, and firefighting production
                issues instead of building features.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="py-32 md:py-48">
        <Container>
          <FadeIn>
            <p className="text-label uppercase tracking-[0.25em] text-muted mb-16 md:mb-20 text-center font-light">
              HOW WE WORK
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <PhaseScreen />
          </FadeIn>
        </Container>
      </section>

      {/* What We Do */}
      <ProcessSection />

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
                    <Link href="/infrastructure-audit" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                      72-hour infrastructure audit
                    </Link>
                    {" "}gives you a complete picture of your CI/CD, monitoring, security, and infrastructure. You get a prioritized roadmap your team can act on immediately.
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
                    <Link href="/healthcheck" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                      free DevOps health check
                    </Link>
                    {" "}to score your team across seven key areas in 2 minutes.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Keni */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted mb-16 md:mb-20 font-light text-center">
                WHY KENI
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-16 text-center">
                Built different from the big firms
              </h2>
            </FadeIn>
            <div className="space-y-16">
              {differentiators.map((item, index) => (
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
                  <Link href="/blog/why-smbs-need-devops" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    Why 53% of SMBs still don&apos;t have DevOps
                  </Link>
                  {" "}: the real cost of not having a proper deployment process, and what a realistic fix looks like.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <Link href="/blog/github-actions-vs-gitlab-ci-vs-jenkins" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    GitHub Actions vs GitLab CI vs Jenkins
                  </Link>
                  {" "}: a practical comparison of CI tools for small to mid-sized teams.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <Link href="/blog/devops-audit-what-to-expect" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    What happens during a DevOps infrastructure audit
                  </Link>
                  {" "}: a step-by-step breakdown of our audit process and what the report looks like.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to stop firefighting?"
        subtext="Just a conversation about what's slowing your team down and how to fix it."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
