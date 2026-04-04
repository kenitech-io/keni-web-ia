import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
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
    <main className="bg-[#f5f5f7] text-foreground overflow-x-hidden">
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
          <FadeIn>
            <p className="text-label uppercase tracking-[0.25em] text-muted mb-16 md:mb-20 font-light text-center">
              THE PROBLEM
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-heading text-foreground font-light tracking-wide mb-20 text-center">
              53% of SMBs have no DevOps
            </h2>
          </FadeIn>
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <FadeIn delay={0.2}>
                <div className="bg-black rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between" style={{ aspectRatio: "4 / 3" }}>
                  <div>
                    <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-6">COST</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-none">$130K</h3>
                    <p className="text-sm text-white/50 font-light mt-1">to $220K/year</p>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    The real cost of one DevOps engineer. For 5-30 devs, that is a big bet on a role that might not need to be full-time.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-black rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between" style={{ aspectRatio: "4 / 3" }}>
                  <div>
                    <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-6">TIME</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-none">50%</h3>
                    <p className="text-sm text-white/50 font-light mt-1">of engineering time</p>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    Spent on manual deploys, debugging servers, and firefighting production. Not building features.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="bg-black rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between" style={{ aspectRatio: "4 / 3" }}>
                  <div>
                    <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-6">RISK</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-none">Zero</h3>
                    <p className="text-sm text-white/50 font-light mt-1">visibility</p>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed font-light">
                    No CI/CD, no monitoring, no IaC. When something breaks, everyone stops.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="py-32 md:py-48">
        <FadeIn>
          <p className="text-label uppercase tracking-[0.25em] text-muted mb-16 md:mb-20 text-center font-light">
            HOW WE WORK
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <PhaseCarousel />
        </FadeIn>
      </section>

      {/* What We Do */}
      <ProcessSection />

      {/* Not sure where to start */}
      <section className="py-32 md:py-48">
        <FadeIn>
          <p className="text-label uppercase tracking-[0.25em] text-muted mb-16 md:mb-20 font-light text-center">
            NOT SURE WHERE TO START?
          </p>
        </FadeIn>
        <div className="px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FadeIn delay={0.1}>
                <div className="overflow-hidden flex flex-col" style={{ aspectRatio: "4 / 3", backgroundColor: "#050503" }}>
                  <div className="text-center pt-[8%] px-8">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-2">
                      Infrastructure Audit
                    </h3>
                    <p className="text-sm text-white/40 font-light mb-5">
                      Full review of your CI/CD, security, and infra in 72 hours.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <Link href="/infrastructure-audit" className="inline-block bg-white text-black px-5 py-2 text-xs font-light tracking-wide rounded-full hover:bg-white/85 transition-colors">
                        Learn more
                      </Link>
                      <Link href="/contact" className="inline-block border border-white/20 text-white px-5 py-2 text-xs font-light tracking-wide rounded-full hover:border-white/50 transition-colors">
                        Get started
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/audit-radar.png"
                      alt="Radar scanning infrastructure"
                      width={700}
                      height={400}
                      className="object-contain w-[85%]"
                      draggable={false}
                    />
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="overflow-hidden flex flex-col" style={{ aspectRatio: "4 / 3", background: "linear-gradient(180deg, #d4e2f0 0%, #e2ebf4 50%, #eef2f7 100%)" }}>
                  <div className="text-center pt-[8%] px-8">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-black mb-2">
                      Health Check
                    </h3>
                    <p className="text-sm text-black/40 font-light mb-5">
                      Score your DevOps across 7 areas in 2 minutes. Free.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <Link href="/healthcheck" className="inline-block bg-black text-white px-5 py-2 text-xs font-light tracking-wide rounded-full hover:bg-black/85 transition-colors">
                        Take the test
                      </Link>
                      <Link href="/contact" className="inline-block border border-black/20 text-black px-5 py-2 text-xs font-light tracking-wide rounded-full hover:border-black/50 transition-colors">
                        Talk to us
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center overflow-hidden relative">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/healthcheck-hero3.png"
                          alt="Laptop showing health check diagnostics"
                          width={500}
                          height={300}
                          className="object-contain w-[82%] absolute left-[-3%]"
                          draggable={false}
                        />
                        <Image
                          src="/healthcheck-hero4.png"
                          alt="Laptop showing health check diagnostics"
                          width={500}
                          height={300}
                          className="object-contain w-[82%] absolute right-[-7%]"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
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
                    <h3 className="text-body text-foreground font-light tracking-wide mb-3 text-center">
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
