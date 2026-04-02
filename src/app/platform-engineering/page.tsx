import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";

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
        text: "An internal developer platform (IDP) is the set of tools and infrastructure that developers use to build, test, deploy, and monitor their applications. It includes CI/CD pipelines, container orchestration, a reverse proxy, monitoring dashboards, secrets management, and backup automation. Instead of each developer configuring these tools independently, the IDP provides a single, standardized path from code to production.",
      },
    },
    {
      "@type": "Question",
      name: "Do small teams need an internal developer platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Small teams benefit the most from a well-built IDP because they cannot afford to waste developer time on manual deployments and infrastructure firefighting. A platform that automates CI/CD, monitoring, and deployments can save each developer 5-10 hours per week. The key is building an IDP that matches your team size: Docker Compose and simple tooling instead of Kubernetes and enterprise complexity.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an internal developer platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complete IDP for a team of 2-30 developers typically takes 4-8 weeks to build and deploy. Week 1 is the infrastructure audit and design. Weeks 2-6 are implementation: CI/CD pipelines, container orchestration, monitoring, secrets management, and backup automation. The final weeks are testing, documentation, and handoff to your team.",
      },
    },
    {
      "@type": "Question",
      name: "What tools do you use to build the platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use open-source, battle-tested tools: Docker for containerization, Traefik for reverse proxy with automatic TLS, Prometheus and Grafana for monitoring, GitHub Actions or Woodpecker CI for pipelines, Restic for encrypted backups, and Ansible for infrastructure as code. Every tool is chosen for reliability and simplicity, not vendor lock-in.",
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
      name: "Platform Engineering",
      item: "https://kenitech.io/platform-engineering",
    },
  ],
};

const platformComponents = [
  {
    title: "CI/CD pipelines",
    description:
      "Automated build, test, and deploy pipelines that run on every push. Fast feedback, reliable builds, zero manual steps between code and production.",
  },
  {
    title: "Container orchestration",
    description:
      "Docker-based deployments with health checks, rolling updates, and resource limits. Every service runs in isolated containers with reproducible builds.",
  },
  {
    title: "Reverse proxy with auto-TLS",
    description:
      "Traefik handles routing, load balancing, and automatic HTTPS certificates. New services get a domain and TLS in minutes, not days.",
  },
  {
    title: "Monitoring and dashboards",
    description:
      "Prometheus collects metrics, Grafana displays them. CPU, memory, disk, response times, error rates. Alerts when something breaks, before your users notice.",
  },
  {
    title: "Secrets management",
    description:
      "Credentials stored in a vault, injected at runtime, rotated on schedule. No API keys in code, no passwords in environment files committed to git.",
  },
  {
    title: "Backup automation",
    description:
      "Encrypted daily backups with verified restores. Databases, volumes, configurations. You know your recovery time because we test it.",
  },
  {
    title: "Deployment orchestration",
    description:
      "A single interface to deploy, rollback, and manage all your services. GitOps workflow: push to main, the platform handles the rest.",
  },
  {
    title: "Developer onboarding",
    description:
      "New engineers get access to the platform, read the docs, and ship their first deploy on day one. No tribal knowledge required.",
  },
];

const steps = [
  {
    step: "01",
    title: "Audit your current state",
    description:
      "We start with a 72-hour infrastructure audit. We review your repos, pipelines, servers, monitoring, and security posture. You get a clear picture of where you are and what needs to change.",
  },
  {
    step: "02",
    title: "Design the platform",
    description:
      "Based on the audit, we design an IDP that fits your team size, tech stack, and budget. No over-engineering. Every component earns its place.",
  },
  {
    step: "03",
    title: "Build and deploy",
    description:
      "We build the platform incrementally, starting with CI/CD and deployments, then adding monitoring, secrets, and backups. Each component is tested end-to-end before moving to the next.",
  },
  {
    step: "04",
    title: "Hand off with documentation",
    description:
      "Your team gets full documentation, runbooks, and a walkthrough. The platform is yours. If you want ongoing maintenance, our managed DevOps team keeps it running.",
  },
];

export default function PlatformEngineeringPage() {
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
                An internal developer platform built for your team
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                Your developers should have a paved road to production. We build
                the platform that gets code from a laptop to a live URL with
                CI/CD, monitoring, secrets, and backups included. One platform,
                fully automated, sized for teams of 2-30.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* What is an IDP */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
                WHAT IS AN IDP
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-8 text-center">
                The infrastructure your developers actually use
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  An internal developer platform is the layer between your
                  developers and your servers. It is the collection of tools,
                  pipelines, and automation that turns a git push into a running
                  application. CI/CD, container orchestration, monitoring,
                  secrets management, and backup automation, all wired together
                  into a single, coherent system.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Without a platform, each developer figures out deployments on
                  their own. Someone SSHs into a server and runs commands.
                  Someone else writes a deploy script that only they understand.
                  Monitoring is an afterthought. Backups exist in theory. When
                  something breaks at 2 AM, one person knows how to fix it
                  because the process lives in their head, not in code.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  A well-built IDP eliminates this entirely. Developers push
                  code, the platform builds it, tests it, deploys it, and
                  monitors it. Every deploy is the same. Every rollback works.
                  Every new engineer ships on day one because the process is the
                  platform, not a person.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The term &quot;platform engineering&quot; has become popular in
                  enterprise circles, but the concept is just as valuable for
                  small teams. In fact, smaller teams have more to gain because
                  every hour a developer spends on infrastructure is an hour they
                  are not building product. An{" "}
                  <Link
                    href="/infrastructure-audit"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    infrastructure audit
                  </Link>{" "}
                  is the fastest way to see where your team is losing time.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* What We Build */}
      <section className="py-32 md:py-48">
        <Container>
          <FadeIn>
            <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
              WHAT WE BUILD
            </p>
          </FadeIn>
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {platformComponents.map((component, index) => (
              <FadeIn key={component.title} delay={index * 0.06}>
                <div className="bg-surface rounded-2xl p-8 h-full shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
                  <h3 className="text-body text-foreground font-light tracking-wide mb-3">
                    {component.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary/70 leading-relaxed font-light">
                    {component.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-48">
        <Container>
          <FadeIn>
            <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
              HOW IT WORKS
            </p>
          </FadeIn>
          <div className="max-w-[640px] mx-auto space-y-16">
            {steps.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.1}>
                <div>
                  <span className="text-xs text-muted font-mono block mb-4">
                    {item.step}
                  </span>
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
        </Container>
      </section>

      {/* Why Not Kubernetes */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <FadeIn>
              <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 md:mb-20 font-light text-center">
                WHY NOT KUBERNETES
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-8 text-center">
                You probably don&apos;t need Kubernetes
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Kubernetes is a powerful container orchestration system
                  designed for teams running hundreds of microservices across
                  multiple data centers. If you have 2-30 developers and a
                  handful of services, it is almost certainly the wrong choice.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  K8s adds operational complexity that small teams cannot absorb.
                  You need someone who understands networking, ingress
                  controllers, service meshes, RBAC, persistent volumes, and
                  cluster upgrades. That is a full-time job. For most teams
                  under 30 engineers, Docker Compose with good tooling around it
                  gives you 90% of the benefits at 10% of the complexity.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  We build platforms on Docker because it is simple, well
                  understood, and sufficient for your scale. A single server
                  with Docker, Traefik, and proper monitoring handles more
                  traffic than most startups will see in their first five years.
                  When you outgrow it, the containerized architecture makes
                  migration straightforward. Read our{" "}
                  <Link
                    href="/blog/kubernetes-vs-docker-compose"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    detailed comparison of Kubernetes vs Docker Compose
                  </Link>{" "}
                  for the full breakdown.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* After the Platform */}
      <section className="py-32 md:py-48">
        <Container>
          <div className="max-w-[640px] mx-auto text-center">
            <FadeIn>
              <h2 className="text-heading text-foreground font-light tracking-wide mb-6">
                What happens after we build it
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                The platform is yours. Your team owns it, operates it, and
                extends it. If you want someone to keep it running, our{" "}
                <Link
                  href="/managed-devops"
                  className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                >
                  managed DevOps service
                </Link>{" "}
                handles updates, monitoring, incident response, and capacity
                planning. You can also explore our full{" "}
                <Link
                  href="/platform"
                  className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                >
                  platform overview
                </Link>{" "}
                to see how everything fits together.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Related Reading */}
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
                    href="/blog/kubernetes-vs-docker-compose"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    Kubernetes vs Docker Compose for small teams
                  </Link>
                  {" "}: when K8s makes sense, when it doesn&apos;t, and what to use instead.
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <Link
                    href="/blog/devops-checklist-for-startups"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    The DevOps checklist for startups
                  </Link>
                  {" "}: the minimum viable infrastructure every software team needs before scaling.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CTASection
        headline="Ready to give your team a real platform?"
        subtext="We will walk you through what an IDP looks like for your team and how long it takes to build."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
