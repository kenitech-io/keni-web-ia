import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { BOOKING_URL } from "@/lib/config";

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
    { "@type": "Question", name: "How long does it take to set up CI/CD?", acceptedAnswer: { "@type": "Answer", text: "Most CI/CD pipelines are running in 1-2 weeks. Simple setups can be done in a few days. More complex configurations with multiple environments and approval workflows take closer to two weeks." } },
    { "@type": "Question", name: "Which CI/CD tools do you use?", acceptedAnswer: { "@type": "Answer", text: "We work with GitHub Actions, GitLab CI, Woodpecker CI, and Jenkins. The choice depends on your existing setup, hosting preferences, and team size." } },
    { "@type": "Question", name: "Can you work with our existing CI/CD tools?", acceptedAnswer: { "@type": "Answer", text: "Yes. If you already have pipelines running, we can audit and optimize them rather than starting from scratch." } },
    { "@type": "Question", name: "How much does CI/CD consulting cost?", acceptedAnswer: { "@type": "Answer", text: "CI/CD pipeline setup is typically part of a broader DevOps engagement. We offer fixed-price packages so you know the cost upfront." } },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kenitech.io" },
    { "@type": "ListItem", position: 2, name: "CI/CD Consulting", item: "https://kenitech.io/ci-cd-consulting" },
  ],
};

const pipelineItems = [
  { title: "Automated build pipelines", description: "Every push triggers a build. Docker images built, tagged, and pushed to a registry automatically. No manual steps." },
  { title: "Test automation integration", description: "Unit tests, integration tests, and linting on every commit. Failures block merges. Main branch stays clean." },
  { title: "Staging and production deploys", description: "Staging deploys on merge. Production on tag or approval. Same process every time, no surprises." },
  { title: "Rollback strategies", description: "Every deployment is reversible. If something breaks in production, you roll back in seconds." },
  { title: "Build caching and optimization", description: "Docker layer caching, dependency caching, parallelized steps. A 15-minute build becomes 3 minutes." },
  { title: "Pipeline monitoring", description: "Build times, failure rates, and deployment frequency tracked over time. You see trends before they become problems." },
];

const tools = [
  { name: "GitHub Actions", description: "The default for teams on GitHub. Native integration, huge marketplace, generous free tier." },
  { name: "GitLab CI", description: "Tightly integrated with GitLab. Strong built-in container registry and environment management." },
  { name: "Woodpecker CI", description: "Lightweight, self-hosted, open-source. Full control, no vendor lock-in, no per-seat pricing." },
  { name: "Jenkins", description: "The legacy workhorse. If you already run it, we optimize it. For new setups, we recommend alternatives." },
];

export default function CiCdConsultingPage() {
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
                CI/CD pipelines that actually work
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Automated builds, tests, and deployments that your team can
                trust. No more manual deploys, no more &quot;it works on my
                machine.&quot; Set up in weeks, not months.
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
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 text-center">
              Manual deployments are costing you
            </h2>
            <p className="text-sm text-white/70 font-light text-center mb-20 max-w-[500px] mx-auto">
              Teams without CI/CD deploy less often, ship larger changesets, and break more things.
            </p>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">ELITE TEAMS</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-none mb-2">Multiple</h3>
                <p className="text-sm text-white/70 font-light mb-4">deploys per day</p>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  Lead times under an hour. Small changesets, low risk per release. DORA elite performance.
                </p>
              </div>
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">WITHOUT CI/CD</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-none mb-2">Weekly</h3>
                <p className="text-sm text-white/70 font-light mb-4">or monthly deploys</p>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  Lead times in days. Large changesets, high risk. When it breaks, nobody knows which change caused it.
                </p>
              </div>
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">THE DIFFERENCE</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-none mb-2">Tooling</h3>
                <p className="text-sm text-white/70 font-light mb-4">not talent</p>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  The gap between elite and struggling teams is not skill. It is automation. CI/CD closes that gap.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* What We Set Up */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="bg-white dark:bg-[#1c1c1e] py-24 md:py-32 px-8">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              WHAT WE SET UP
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-20 text-center">
              Everything your pipeline needs
            </h2>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {pipelineItems.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.06}>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-black dark:text-white mb-3">
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

      {/* Tools */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div data-dark-section className="py-24 md:py-32 px-8" style={{ background: "linear-gradient(180deg, #0f1520 0%, #131d2a 50%, #0c1318 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              TOOLS WE WORK WITH
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-20 text-center">
              The right tool for your team
            </h2>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
              {tools.map((tool, index) => (
                <FadeIn key={tool.name} delay={index * 0.1}>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-3">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                      {tool.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Timeline */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="bg-white dark:bg-[#1c1c1e] py-24 md:py-32 px-8">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              TIMELINE
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-20 text-center">
              Running in 1-2 weeks
            </h2>
            <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-16">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-black dark:text-white mb-3">Week one</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  Build pipeline, test automation, staging deployment. Your team reviews and we adjust based on feedback.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-black dark:text-white mb-3">Week two</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  Production pipeline, rollback strategy, build optimization, monitoring. Your team ships with confidence.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-black dark:text-white mb-3">Part of a bigger picture</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  CI/CD works best inside a{" "}
                  <Link href="/platform-engineering" className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white underline decoration-black/20 dark:decoration-white/20 hover:decoration-black/50 dark:hover:decoration-white/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    well-built platform
                  </Link>
                  {" "}with monitoring, secrets, and infrastructure as code.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-black dark:text-white mb-3">Already have CI/CD?</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  We can audit and optimize your existing setup. Start with an{" "}
                  <Link href="/infrastructure-audit" className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white underline decoration-black/20 dark:decoration-white/20 hover:decoration-black/50 dark:hover:decoration-white/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    infrastructure audit
                  </Link>
                  {" "}to find the gaps.
                </p>
              </div>
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
            <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <FadeIn delay={0.1}>
                <Link href="/blog/github-actions-vs-gitlab-ci-vs-jenkins" className="group block">
                  <h3 className="text-base font-bold tracking-tight text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors mb-3">
                    GitHub Actions vs GitLab CI vs Jenkins
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed font-light">
                    A detailed comparison of the three most popular CI/CD platforms, with recommendations by team size.
                  </p>
                </Link>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link href="/blog/argocd-vs-flux-vs-watchtower" className="group block">
                  <h3 className="text-base font-bold tracking-tight text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors mb-3">
                    ArgoCD vs Flux vs Watchtower
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed font-light">
                    Continuous deployment tools compared. When you need GitOps and when a simple image watcher is enough.
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
          <div data-dark-section className="py-24 md:py-32 px-8 bg-black text-center">
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light">
              READY?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to automate your deployments?
            </h2>
            <p className="text-sm text-white/70 font-light mb-10 max-w-[380px] mx-auto leading-relaxed">
              We&apos;ll walk you through how CI/CD fits into your stack<br />and what the first week looks like.
            </p>
            <a
              href={BOOKING_URL}
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
