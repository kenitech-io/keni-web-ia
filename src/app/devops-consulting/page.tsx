import { Metadata } from "next";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import ProcessSection from "@/components/home/ProcessSection";
import PhaseScreen from "@/components/PhaseScreen";
import { phases } from "@/data/phases";

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
    title: "US timezone, real-time collaboration",
    description:
      "Same working hours, same Slack channels, same standups. No overnight handoffs or lost-in-translation delays.",
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
              <p className="text-sm text-foreground leading-loose font-light">
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
              <p className="text-label uppercase tracking-[0.25em] text-muted mb-32 md:mb-40 font-light text-center">
                THE PROBLEM
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-8">
                53% of SMBs lack DevOps capabilities
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm text-foreground leading-loose font-light mb-6">
                Hiring a full-time DevOps engineer in the US costs $130K-$220K+
                per year when you include benefits and overhead. For a team of
                5-30 developers, that&apos;s a significant investment for a role that
                might not need to be full-time.
              </p>
              <p className="text-sm text-foreground leading-loose font-light">
                Meanwhile, your developers are spending half their time on
                manual deploys, debugging servers, and firefighting production
                issues instead of building features.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <ProcessSection />

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

      {/* Why Keni */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted mb-32 md:mb-40 font-light text-center">
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
                    <p className="text-sm text-foreground leading-loose font-light">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to stop firefighting?"
        subtext="30 minutes. No pitch, no pressure. Just a conversation about what's slowing your team down and how to fix it."
        buttonText="Book a free call"
        buttonHref="/contact"
      />
    </main>
  );
}
