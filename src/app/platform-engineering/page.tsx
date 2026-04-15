import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Platform Engineering for Small Teams",
  description:
    "We build internal developer platforms for teams with 2-30 developers. CI/CD, container orchestration, monitoring, secrets management, and automated deployments. One platform, fully managed.",
  alternates: {
    canonical: "https://kenitech.io/platform-engineering",
  },
  openGraph: {
    title: "Platform Engineering for Small Teams | Keni Engineering",
    description:
      "We build internal developer platforms for teams with 2-30 developers. CI/CD, containers, monitoring, secrets, and deployments. One platform, fully managed.",
    url: "https://kenitech.io/platform-engineering",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an internal developer platform (IDP)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An internal developer platform (IDP) is the set of tools and infrastructure that developers use to build, test, deploy, and monitor their applications. It includes CI/CD pipelines, container orchestration, a reverse proxy, monitoring dashboards, secrets management, and backup automation.",
      },
    },
    {
      "@type": "Question",
      name: "Do small teams need an internal developer platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Small teams benefit the most from a well-built IDP because they cannot afford to waste developer time on manual deployments and infrastructure firefighting. A platform that automates CI/CD, monitoring, and deployments can save each developer 5-10 hours per week.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an internal developer platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complete IDP for a team of 2-30 developers typically takes 4-8 weeks to build and deploy.",
      },
    },
    {
      "@type": "Question",
      name: "What tools do you use to build the platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use open-source, battle-tested tools: Docker, Traefik, Prometheus, Grafana, GitHub Actions or Woodpecker CI, Restic, and Ansible. Every tool is chosen for reliability and simplicity, not vendor lock-in.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kenitech.io" },
    { "@type": "ListItem", position: 2, name: "Platform Engineering", item: "https://kenitech.io/platform-engineering" },
  ],
};

const platformComponents = [
  { title: "CI/CD pipelines", description: "Automated build, test, and deploy on every push. Fast feedback, reliable builds, zero manual steps." },
  { title: "Container orchestration", description: "Docker-based deployments with health checks, rolling updates, and resource limits. Reproducible builds." },
  { title: "Reverse proxy with auto-TLS", description: "Traefik handles routing, load balancing, and automatic HTTPS. New services get a domain and TLS in minutes." },
  { title: "Monitoring and dashboards", description: "Prometheus collects metrics, Grafana displays them. CPU, memory, response times, error rates. Alerts before users notice." },
  { title: "Secrets management", description: "Credentials in a vault, injected at runtime, rotated on schedule. No API keys in code, no passwords in git." },
  { title: "Backup automation", description: "Encrypted daily backups with verified restores. Databases, volumes, configurations. Tested recovery times." },
  { title: "Deployment orchestration", description: "A single interface to deploy, rollback, and manage all services. Push to main, the platform handles the rest." },
  { title: "Developer onboarding", description: "New engineers get access, read the docs, and ship their first deploy on day one. No tribal knowledge required." },
];

const steps = [
  { number: "01", title: "Audit", description: "We start with a 72-hour infrastructure audit. We review your repos, pipelines, servers, monitoring, and security. You get a clear picture of where you are." },
  { number: "02", title: "Design", description: "Based on the audit, we design an IDP that fits your team size, tech stack, and budget. No over-engineering. Every component earns its place." },
  { number: "03", title: "Build", description: "We build incrementally: CI/CD first, then monitoring, secrets, and backups. Each component tested end-to-end before moving to the next." },
  { number: "04", title: "Handoff", description: "Full documentation, runbooks, and a walkthrough. The platform is yours. If you want ongoing maintenance, our managed DevOps team keeps it running." },
];

export default function PlatformEngineeringPage() {
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
                An internal developer platform built for your team
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Your developers should have a paved road to production. We build
                the platform that gets code from a laptop to a live URL with
                CI/CD, monitoring, secrets, and backups included.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* What is an IDP */}
      <section className="px-3">
        <FadeIn>
          <div data-dark-section className="py-16 md:py-32 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #0f1520 0%, #131d2a 50%, #0c1318 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              WHAT IS AN IDP
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 text-center">
              The infrastructure your developers actually use
            </h2>
            <p className="text-sm text-white/70 font-light text-center mb-20 max-w-[520px] mx-auto leading-relaxed">
              A single, coherent system that turns a git push into a running application. CI/CD, containers, monitoring, secrets, and backups wired together.
            </p>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">WITHOUT A PLATFORM</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-none mb-3">SSH</h3>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  Manual deploys, scripts only one person understands, monitoring as an afterthought. When it breaks at 2 AM, one person knows the fix.
                </p>
              </div>
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">WITH A PLATFORM</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-none mb-3">git push</h3>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  Every deploy is the same. Every rollback works. Every new engineer ships on day one because the process is the platform, not a person.
                </p>
              </div>
              <div className="text-center">
                <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">TIME SAVED</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-none mb-3">5-10h</h3>
                <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                  Per developer, per week. Small teams have the most to gain because every hour on infra is an hour not building product.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* What We Build */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="bg-white dark:bg-[#1c1c1e] py-16 md:py-32 px-5 md:px-8">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              WHAT WE BUILD
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white tracking-tight mb-20 text-center">
              Eight components, one platform
            </h2>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
              {platformComponents.map((component, index) => (
                <FadeIn key={component.title} delay={index * 0.06}>
                  <div>
                    <h3 className="text-base font-light tracking-wide text-black dark:text-white mb-3">
                      {component.title}
                    </h3>
                    <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                      {component.description}
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
          <div data-dark-section className="py-16 md:py-32 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #0a1a10 0%, #0d1f14 50%, #091208 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              HOW IT WORKS
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-20 text-center">
              Four steps to your platform
            </h2>
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12">
              {steps.map((step, index) => (
                <FadeIn key={step.number} delay={index * 0.1}>
                  <div className="text-center">
                    <p className="text-[0.55rem] font-mono tracking-[0.3em] text-[#C65100] mb-4">{step.number}</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-none mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-light max-w-[260px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Why Not Kubernetes */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="bg-white dark:bg-[#1c1c1e] py-16 md:py-32 px-5 md:px-8">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              WHY NOT KUBERNETES
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-black dark:text-white tracking-tight mb-20 text-center">
              You probably don&apos;t need Kubernetes
            </h2>
            <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-20 md:gap-y-16">
              <div>
                <h3 className="text-body text-black dark:text-white font-light tracking-wide mb-3">Built for a different scale</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  K8s is designed for hundreds of microservices across data centers. For 2-30 developers with a handful of services, it is the wrong tool.
                </p>
              </div>
              <div>
                <h3 className="text-body text-black dark:text-white font-light tracking-wide mb-3">A full-time job to operate</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  Networking, ingress, RBAC, persistent volumes, cluster upgrades. That complexity needs a dedicated person your team may not have.
                </p>
              </div>
              <div>
                <h3 className="text-body text-black dark:text-white font-light tracking-wide mb-3">Docker gives you 90%</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  Docker Compose with good tooling gives you 90% of the benefits at 10% of the complexity. A single server handles more traffic than most startups see in five years.
                </p>
              </div>
              <div>
                <h3 className="text-body text-black dark:text-white font-light tracking-wide mb-3">Migration-ready</h3>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed font-light">
                  When you outgrow it, the containerized architecture makes migration straightforward. Start simple, scale when you need to.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* After the Platform */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div data-dark-section className="py-16 md:py-32 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #1a1008 0%, #201510 50%, #1a1008 100%)" }}>
            <p className="text-label uppercase tracking-[0.25em] text-white/50 mb-8 font-light text-center">
              WHAT HAPPENS NEXT
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 text-center">
              The platform is yours
            </h2>
            <p className="text-sm text-white/70 font-light mb-8 max-w-[480px] mx-auto text-center leading-relaxed">
              Your team owns it, operates it, and extends it. If you want someone to keep it running, our{" "}
              <Link href="/managed-devops" className="text-white underline decoration-white/30 hover:decoration-white/60 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                managed DevOps service
              </Link>
              {" "}handles updates, monitoring, and incident response.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Related Reading */}
      <section className="px-3 pt-3">
        <FadeIn>
          <div className="py-16 md:py-32 px-5 md:px-8 bg-light-gradient">
            <p className="text-label uppercase tracking-[0.25em] text-black/30 dark:text-white/30 mb-8 font-light text-center">
              FROM THE BLOG
            </p>
            <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-16">
              <FadeIn delay={0.1}>
                <Link href="/blog/kubernetes-vs-docker-compose" className="group block">
                  <h3 className="text-base font-light tracking-wide text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors mb-3">
                    Kubernetes vs Docker Compose for small teams
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed font-light">
                    When K8s makes sense, when it doesn&apos;t, and what to use instead.
                  </p>
                </Link>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Link href="/blog/devops-checklist-for-startups" className="group block">
                  <h3 className="text-base font-light tracking-wide text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors mb-3">
                    The DevOps checklist for startups
                  </h3>
                  <p className="text-xs text-black/40 dark:text-white/40 leading-relaxed font-light">
                    The minimum viable infrastructure every software team needs before scaling.
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
              Ready to give your team a real platform?
            </h2>
            <p className="text-sm text-white/70 font-light mb-10 max-w-[400px] mx-auto leading-relaxed">
              We&apos;ll walk you through what an IDP looks like<br />for your team and how long it takes to build.
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
