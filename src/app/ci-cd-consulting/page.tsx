import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "CI/CD Pipeline Consulting for Small Teams",
  description:
    "CI/CD pipeline setup and consulting for teams of 2-30 developers. Automated builds, tests, and deployments running in 1-2 weeks. GitHub Actions, GitLab CI, Woodpecker CI.",
  alternates: {
    canonical: "https://kenitech.io/ci-cd-consulting",
  },
  openGraph: {
    title: "CI/CD Pipeline Consulting for Small Teams | Keni Engineering",
    description:
      "Automated builds, tests, and deployments your team can trust. Set up in weeks, not months.",
    url: "https://kenitech.io/ci-cd-consulting",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to set up CI/CD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most CI/CD pipelines are running in 1-2 weeks. Simple setups with a single build and deploy pipeline can be done in a few days. More complex configurations with multiple environments, test suites, and approval workflows take closer to two weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Which CI/CD tools do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with GitHub Actions, GitLab CI, Woodpecker CI, and Jenkins. The choice depends on your existing setup, hosting preferences, and team size. GitHub Actions is the default for teams already on GitHub. Woodpecker CI is our recommendation for self-hosted pipelines.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with our existing CI/CD tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you already have pipelines running, we can audit and optimize them rather than starting from scratch. We fix slow builds, flaky tests, missing stages, and security gaps in existing setups.",
      },
    },
    {
      "@type": "Question",
      name: "How much does CI/CD consulting cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CI/CD pipeline setup is typically part of a broader DevOps engagement. We offer fixed-price packages so you know the cost upfront. Contact us for a quote based on your specific setup and requirements.",
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
      name: "CI/CD Consulting",
      item: "https://kenitech.io/ci-cd-consulting",
    },
  ],
};

const pipelineItems = [
  {
    title: "Automated build pipelines",
    description:
      "Every push triggers a build. Docker images built, tagged, and pushed to a registry automatically. No manual steps, no forgotten commands.",
  },
  {
    title: "Test automation integration",
    description:
      "Unit tests, integration tests, and linting run on every commit. Failures block merges. Your main branch stays clean.",
  },
  {
    title: "Staging and production deployments",
    description:
      "Staging deploys automatically on merge. Production deploys on tag or approval. Same process every time, no surprises.",
  },
  {
    title: "Rollback strategies",
    description:
      "Every deployment is reversible. If something breaks in production, you roll back in seconds. Not minutes, not hours.",
  },
  {
    title: "Build caching and optimization",
    description:
      "Docker layer caching, dependency caching, parallelized steps. A 15-minute build becomes a 3-minute build.",
  },
  {
    title: "Pipeline monitoring",
    description:
      "Build times, failure rates, and deployment frequency tracked over time. You see trends before they become problems.",
  },
];

const tools = [
  {
    name: "GitHub Actions",
    description:
      "The default for teams on GitHub. Native integration, huge marketplace, generous free tier. Best for teams that want zero infrastructure to manage.",
  },
  {
    name: "GitLab CI",
    description:
      "Tightly integrated with GitLab repositories. Strong if your code already lives on GitLab. Good built-in container registry and environment management.",
  },
  {
    name: "Woodpecker CI",
    description:
      "Lightweight, self-hosted, open-source. Our recommendation when you need full control over your CI infrastructure. No vendor lock-in, no per-seat pricing.",
  },
  {
    name: "Jenkins",
    description:
      "The legacy workhorse. If you already run Jenkins, we can optimize it. For new setups, we typically recommend alternatives with less operational overhead.",
  },
];

export default function CiCdConsultingPage() {
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
                CI/CD pipelines that actually work
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Automated builds, tests, and deployments that your team can
                trust. No more manual deploys, no more &quot;it works on my
                machine.&quot; We set up CI/CD pipelines that run reliably, fail
                fast, and give your developers confidence to ship.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* The problem */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
                THE PROBLEM
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-8 text-center">
                Manual deployments are costing you more than you think
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If your team deploys by SSH-ing into a server and running
                  commands, you have a problem. Not because it doesn&apos;t
                  work. It does, until it doesn&apos;t. Manual deployments are
                  slow, error-prone, and they depend on one person who
                  &quot;knows the steps.&quot;
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Teams without CI/CD deploy less often because deploying is
                  painful. Less frequent deploys mean larger changesets, which
                  mean more risk per release. When something breaks, nobody
                  knows which change caused it. Rollbacks are manual and
                  stressful.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The data backs this up. The DORA metrics research shows that
                  elite teams deploy multiple times per day with lead times
                  under an hour. Teams without automation deploy weekly or
                  monthly, with lead times measured in days. The difference is
                  not talent. It is tooling.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* What we set up */}
      <section className="py-32 md:py-48">
        <Container>
          <FadeIn>
            <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
              WHAT WE SET UP
            </p>
          </FadeIn>
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pipelineItems.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="bg-surface rounded-2xl p-8 h-full shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
                  <h3 className="text-body text-foreground font-light tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools we work with */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[900px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
                TOOLS WE WORK WITH
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-12 text-center">
                We pick the right tool for your team, not the trendiest one
              </h2>
            </FadeIn>
            <div>
              {tools.map((tool, index) => (
                <FadeIn key={tool.name} delay={index * 0.08}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-16 py-10 ${
                      index < tools.length - 1
                        ? "border-b border-border-color"
                        : ""
                    }`}
                  >
                    <h3 className="text-body text-foreground font-light tracking-wide">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                      {tool.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.4}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light mt-12 text-center">
                Already have CI/CD running? We can audit and optimize your
                existing setup. Start with an{" "}
                <Link
                  href="/infrastructure-audit"
                  className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                >
                  infrastructure audit
                </Link>{" "}
                to find the gaps.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-8">
                Most pipelines are running in 1-2 weeks
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Week one: we configure your build pipeline, set up test
                  automation, and deploy to staging. Your team reviews the
                  workflow and we adjust based on feedback.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Week two: production deployment pipeline, rollback strategy,
                  build optimization, and monitoring. By the end, your team is
                  shipping with confidence.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  CI/CD is typically part of a broader{" "}
                  <Link
                    href="/platform-engineering"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    platform engineering
                  </Link>{" "}
                  engagement. Pipelines work best when they deploy into a well
                  structured environment with proper monitoring, secrets
                  management, and infrastructure as code.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-8">
                How we work
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  We start with a{" "}
                  <Link
                    href="/devops-consulting"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    discovery call
                  </Link>{" "}
                  to understand your stack, your team, and your deployment
                  workflow. Then we propose a pipeline architecture that fits
                  your needs. No over-engineering, no Kubernetes when Docker
                  Compose will do.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Everything we build is documented and handed off to your team.
                  Pipeline configuration lives in your repo. Your developers
                  own it. We are there to set it up right and make sure your
                  team can maintain it.
                </p>
              </div>
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
                  <Link
                    href="/blog/github-actions-vs-gitlab-ci-vs-jenkins"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    GitHub Actions vs GitLab CI vs Jenkins
                  </Link>
                  {" "}: a detailed comparison of the three most popular CI/CD
                  platforms, with recommendations by team size and use case.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <Link
                    href="/blog/argocd-vs-flux-vs-watchtower"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    ArgoCD vs Flux vs Watchtower
                  </Link>
                  {" "}: continuous deployment tools compared. When you need
                  GitOps and when a simple image watcher is enough.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to automate your deployments?"
        subtext="We will walk you through how CI/CD fits into your stack and what the first week looks like."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
