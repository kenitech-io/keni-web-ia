import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import BlogEmailCapture from "@/components/BlogEmailCapture";

export const metadata: Metadata = {
  title:
    "Platform Engineering Without Kubernetes: A Simpler Path for Small Teams",
  description:
    "You do not need Kubernetes to build a great developer platform. Here is a practical, Docker-based platform stack for teams with 2-30 developers.",
  alternates: {
    canonical:
      "https://kenitech.io/blog/platform-engineering-without-kubernetes",
  },
  openGraph: {
    title: "Platform Engineering Without Kubernetes",
    description:
      "A practical, Docker-based platform stack for teams with 2-30 developers. Same developer experience, fraction of the cost.",
    url: "https://kenitech.io/blog/platform-engineering-without-kubernetes",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Platform Engineering Without Kubernetes: A Simpler Path for Small Teams",
  description:
    "You do not need Kubernetes to build a great developer platform. Here is a practical, Docker-based platform stack for teams with 2-30 developers.",
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  image:
    "https://kenitech.io/blog/platform-engineering-without-kubernetes/opengraph-image",
  author: {
    "@type": "Person",
    name: "Mikel Martin",
    url: "https://www.linkedin.com/in/mikelm20/",
  },
  publisher: {
    "@type": "Organization",
    name: "Keni Engineering",
    logo: {
      "@type": "ImageObject",
      url: "https://kenitech.io/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://kenitech.io/blog/platform-engineering-without-kubernetes",
  },
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
      name: "Blog",
      item: "https://kenitech.io/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Platform Engineering Without Kubernetes",
      item: "https://kenitech.io/blog/platform-engineering-without-kubernetes",
    },
  ],
};

export default function PlatformEngineeringWithoutKubernetes() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article>
        <section className="pt-28 pb-14 md:pt-36 md:pb-16">
          <Container>
            <div className="max-w-[640px] mx-auto">
              <FadeIn>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-4">
                  PLATFORM ENGINEERING
                </p>
                <h1 className="text-heading text-foreground font-light tracking-wide mb-4">
                  Platform engineering without Kubernetes: a simpler path for
                  small teams
                </h1>
                <p className="text-label text-muted/60 font-light">
                  April 2, 2026 &middot; 10 min read
                </p>
                <a href="https://www.linkedin.com/in/mikelm20/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 mt-3 group">
                  <Image src="/team/mikel.jpg" alt="Mikel Martin" width={24} height={24} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-xs text-foreground font-light group-hover:text-foreground/70 transition-colors">Mikel Martin</span>
                </a>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="pb-32 md:pb-48">
          <Container>
            <div className="max-w-[640px] mx-auto space-y-10">
              <FadeIn delay={0.1}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Platform engineering has become the hottest topic in DevOps.
                  Every conference talk, every vendor pitch, every &quot;getting
                  started&quot; guide assumes the same stack: Kubernetes,
                  Backstage, Crossplane, ArgoCD. The message is clear. If you
                  want a real developer platform, you need to go all-in on K8s.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  But what if your team has 10 developers and three services?
                  What if you are running a SaaS product that serves thousands of
                  users reliably from a single server? You still deserve a good
                  platform. You just do not need Kubernetes to build one.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This post lays out a practical, battle-tested platform
                  engineering approach for small teams. No K8s. No managed
                  clusters. No $2,000/month infrastructure bill. Just a clean
                  path from code to production that your developers will actually
                  enjoy using.
                </p>
              </FadeIn>

              {/* What platform engineering actually means */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">
                  What platform engineering actually means
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Strip away the buzzwords and platform engineering is about one
                  thing: building a paved road from code to production. A road
                  that developers can walk without needing to understand every
                  piece of infrastructure along the way.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Gartner predicts that by 2026, 80% of software engineering
                  organizations will establish platform teams as internal
                  providers of reusable services. But the definition of
                  &quot;platform&quot; is not prescriptive. It does not say
                  Kubernetes anywhere. A platform is whatever system lets your
                  developers ship code confidently without filing tickets or
                  SSH-ing into servers.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The core principles are consistent regardless of scale:
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">
                      Self-service
                    </strong>
                    . Developers push code and it reaches production without
                    manual intervention.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">
                      Automation
                    </strong>
                    . Builds, tests, deployments, TLS certificates, monitoring,
                    and backups all happen without human steps.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">
                      Observability
                    </strong>
                    . Everyone can see what is deployed, whether it is healthy,
                    and what happened when something broke.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">
                      Reproducibility
                    </strong>
                    . Environments are defined in code. Nothing is hand-crafted
                    or tribal knowledge.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The specific tools are secondary. What matters is that those
                  principles are met. And for a team of 2-30 developers, you can
                  meet every single one of them without touching Kubernetes.
                </p>
              </FadeIn>

              {/* The K8s-free platform stack */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">
                  The K8s-free platform stack
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Here is a complete platform stack that delivers the same
                  developer experience as a K8s-based platform, at a fraction of
                  the cost and complexity. Every component is production-proven
                  and widely adopted.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">
                  Container runtime: Docker (or Podman)
                </h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Docker remains the industry standard for containerization.
                  Every developer knows it, every CI system supports it, and it
                  runs identically on laptops and servers. For teams that prefer
                  a daemonless, rootless alternative,{" "}
                  <Link
                    href="/blog/docker-vs-podman"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    Podman is a drop-in replacement
                  </Link>
                  . Either works. The important thing is that your apps run in
                  containers, which gives you portability, isolation, and
                  reproducible builds.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">
                  Orchestration: Docker Compose
                </h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Docker Compose is not just for local development. It is a
                  perfectly valid production orchestration tool for teams running
                  a handful of services. A single{" "}
                  <code className="text-foreground text-sm">
                    docker-compose.yml
                  </code>{" "}
                  file defines your entire application stack: services,
                  networks, volumes, health checks, restart policies, and
                  resource limits. It is version-controlled, reviewable, and
                  easy to reason about. For most teams under 30 developers,{" "}
                  <Link
                    href="/blog/kubernetes-vs-docker-compose"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    Compose does everything K8s does
                  </Link>
                  , just with less ceremony.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">
                  CI/CD: GitHub Actions, GitLab CI, or Woodpecker
                </h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Continuous integration and continuous delivery are the backbone
                  of any platform. The choice depends on where your code lives.
                  GitHub Actions is excellent for teams already on GitHub, with
                  generous free tiers and a massive marketplace. GitLab CI is
                  tightly integrated if you are on GitLab. Woodpecker is a
                  lightweight, self-hosted option if you want full control over
                  your build infrastructure.{" "}
                  <Link
                    href="/blog/github-actions-vs-gitlab-ci-vs-jenkins"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    We have compared all three in detail
                  </Link>
                  . The pipeline pattern is the same: push code, run tests,
                  build an image, tag it, push it to a registry.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">
                  Reverse proxy: Traefik with auto-TLS
                </h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Traefik is purpose-built for containerized environments. It
                  discovers services automatically through Docker labels, handles
                  TLS certificate generation via Let&apos;s Encrypt, and manages
                  routing without manual configuration files. Add a new service
                  to your Compose file with the right labels, and Traefik picks
                  it up. HTTPS just works. No Nginx config files to maintain, no
                  manual{" "}
                  <code className="text-foreground text-sm">certbot</code>{" "}
                  renewals.{" "}
                  <Link
                    href="/blog/traefik-vs-nginx-vs-haproxy"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    We compared Traefik, Nginx, and HAProxy
                  </Link>
                  , and for Docker-based platforms Traefik wins on simplicity
                  every time.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">
                  Deployment: Komodo, Watchtower, or custom CD
                </h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This is the layer that ties CI to your running infrastructure.
                  Komodo is an open-source deployment tool that watches your
                  Docker registry and manages container deployments across
                  servers. Watchtower is simpler: it monitors running containers
                  and automatically pulls new images when they appear. For teams
                  that want full control, a custom CD script triggered by a
                  webhook works too. The key is that deployments happen
                  automatically when a new image is tagged.{" "}
                  <Link
                    href="/blog/argocd-vs-flux-vs-watchtower"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    We compared CD tools including ArgoCD, Flux, and Watchtower
                  </Link>{" "}
                  if you want to explore the options.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">
                  Monitoring: Prometheus + Grafana + alerting
                </h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Prometheus scrapes metrics from your containers and
                  infrastructure. Grafana turns those metrics into dashboards
                  your team can actually use. Together they give you CPU, memory,
                  disk, request rates, error rates, response times, and anything
                  custom your application exports. Add alerting rules and you get
                  notified before your users notice a problem. This is the same
                  monitoring stack that companies 100x your size use. The only
                  difference is you are running it on one server instead of a
                  cluster.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">
                  Secrets: 1Password, Infisical, or Vault
                </h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Secrets management is non-negotiable.{" "}
                  <Link
                    href="/blog/secrets-management-1password-vs-keeper-vs-cyberark"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    We have compared the major options
                  </Link>
                  . For small teams, 1Password with its CLI and service accounts
                  is remarkably effective: secrets are injected at deploy time,
                  never stored in git, and rotated through a UI your team already
                  knows. Infisical is a strong open-source alternative with
                  native Docker and CI integrations. HashiCorp Vault is the
                  enterprise standard if you need advanced policies and audit
                  trails. Pick the one that matches your team size and compliance
                  requirements.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">
                  Backup: Restic with automated schedules
                </h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Backups are the part of the platform nobody thinks about until
                  they need them. Restic is fast, encrypted, and supports
                  multiple backends including S3, Backblaze B2, and local
                  storage. Wrap it in a cron job or a container with a scheduler,
                  and you get daily encrypted backups with retention policies,
                  automatic pruning, and Prometheus metrics so you know when a
                  backup fails. The entire setup is a single Docker container and
                  a config file.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">
                  Documentation: README-driven, runbooks in repo
                </h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The final piece of a platform is documentation. Not a wiki that
                  nobody updates, but runbooks that live next to the code they
                  describe. How to deploy. How to rollback. How to add a new
                  service. How to respond to an incident. When documentation
                  lives in the repo, it gets reviewed in pull requests and stays
                  current. When it lives in Confluence, it drifts.
                </p>
              </FadeIn>

              {/* What this looks like in practice */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">
                  What this looks like in practice
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Let us walk through a typical deployment on this stack. A
                  developer opens a pull request. CI kicks off automatically:
                  linting, tests, security scans. The PR gets reviewed and
                  merged. CI builds a Docker image, tags it with the git SHA and
                  a semantic version, and pushes it to a private registry.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The CD tool detects the new image. It pulls it, stops the old
                  container, starts the new one, and verifies the health check
                  passes. Traefik automatically routes traffic to the new
                  container. Grafana shows the deploy as an annotation on the
                  dashboard. If response times spike or error rates jump, the
                  alert fires.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If something breaks, you roll back by deploying the previous
                  image tag. One command or one click, depending on your CD tool.
                  The entire flow is automated. No SSH. No manual Docker
                  commands. No copying files to a server. The developer&apos;s
                  experience is identical to what they would get on a K8s-based
                  platform: push code, see it live.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Zero downtime deployments? Achievable with Docker Compose and
                  Traefik through rolling restarts and health checks. Blue-green
                  deployments? Spin up the new version, switch the Traefik route,
                  tear down the old one. You do not need K8s primitives to get
                  deployment safety.
                </p>
              </FadeIn>

              {/* Cost comparison */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">
                  Cost comparison
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Numbers make the case better than arguments. Here is what each
                  approach costs for a typical small team running 3-10 services.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <strong className="text-foreground font-normal">
                    K8s-based platform
                  </strong>
                  : Managed EKS/GKE at $73/month for the control plane, plus 3
                  worker nodes at $150-$400/month each, plus a load balancer at
                  $20/month, plus Backstage hosting, plus ArgoCD, plus the time
                  to operate it all. Realistic monthly cost: $1,000-$2,000 in
                  infrastructure alone. Add a dedicated platform engineer at
                  $120K-$180K/year to keep it running.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <strong className="text-foreground font-normal">
                    Docker-based platform
                  </strong>
                  : A single VPS at $20-$80/month handles most small team
                  workloads. A second server for redundancy brings it to
                  $40-$160/month. Traefik, Prometheus, Grafana, and your CD tool
                  all run on the same infrastructure. GitHub Actions CI is free
                  for public repos and $4/month for private repos on the Team
                  plan. Total infrastructure cost: $40-$160/month. Operations
                  time: a few hours per month once the platform is set up.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  That is a 10-20x difference in infrastructure costs. And the
                  developer experience, the thing that actually affects your
                  team&apos;s velocity, is equivalent. Your developers push code
                  and see it deployed. They check dashboards for metrics. They
                  get alerts when things break. The underlying machinery is
                  different, but the interface is the same.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  For a deeper breakdown of DevOps costs across different team
                  sizes,{" "}
                  <Link
                    href="/blog/how-much-does-devops-cost"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    read our full cost analysis
                  </Link>
                  .
                </p>
              </FadeIn>

              {/* When you need to level up */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">
                  When you actually need Kubernetes
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This is not an anti-Kubernetes post. K8s is excellent software
                  that solves real problems. The issue is that those problems do
                  not match most small teams. Here are the concrete signals that
                  you have outgrown a Docker-based platform:
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">
                      30+ microservices
                    </strong>
                    . When you have dozens of services with complex
                    interdependencies, K8s service discovery, health checking,
                    and orchestration start earning their complexity.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">
                      Multi-region deployments
                    </strong>
                    . If you need to run the same workloads in US-East, EU-West,
                    and APAC, Kubernetes federation and managed services
                    simplify what would be very manual otherwise.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">
                      Auto-scaling requirements
                    </strong>
                    . If your traffic is spiky and you need to scale from 2
                    replicas to 20 within minutes, K8s HPA (Horizontal Pod
                    Autoscaler) is purpose-built for this. Docker Compose does
                    not have an equivalent.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">
                      Compliance and audit requirements
                    </strong>
                    . SOC 2, HIPAA, or PCI compliance at scale often requires the
                    kind of namespace isolation, RBAC, and network policies that
                    K8s provides natively.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">
                      Multiple teams deploying independently
                    </strong>
                    . When 5+ teams need to deploy to shared infrastructure
                    without stepping on each other, K8s namespaces and resource
                    quotas provide guardrails that are hard to replicate with
                    Compose.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If none of those describe your situation, Kubernetes adds
                  complexity without adding value. And complexity has a cost:
                  longer onboarding times for new developers, more things that
                  can break, more specialized knowledge required to debug
                  production issues. For teams where the CTO is also writing
                  code, that cost is especially steep.
                </p>
              </FadeIn>

              {/* How to get started */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">
                  How to get started
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The best platform strategy starts with what you already have
                  and adds layers incrementally. Each step delivers value on its
                  own, so you do not need to build the entire stack before seeing
                  results.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <strong className="text-foreground font-normal">
                    Step 1: Containerize your applications.
                  </strong>{" "}
                  Write Dockerfiles for every service. Use multi-stage builds to
                  keep images small. Make sure each service starts with{" "}
                  <code className="text-foreground text-sm">
                    docker compose up
                  </code>{" "}
                  locally. This alone eliminates &quot;works on my machine&quot;
                  problems and cuts onboarding time from days to hours.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <strong className="text-foreground font-normal">
                    Step 2: Add CI/CD.
                  </strong>{" "}
                  Set up a pipeline that runs tests on every push and builds a
                  Docker image on merge to main. Use semantic versioning or git
                  SHA-based tags. Push images to a private registry. This step
                  eliminates manual build processes and catches bugs before they
                  reach production.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <strong className="text-foreground font-normal">
                    Step 3: Automate deployments.
                  </strong>{" "}
                  Connect your CI pipeline to your production server. When a new
                  image is built, deploy it automatically. Add health checks so
                  bad deployments are caught immediately. This is where your
                  team stops doing manual deployments and starts shipping with
                  confidence.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <strong className="text-foreground font-normal">
                    Step 4: Add monitoring and alerting.
                  </strong>{" "}
                  Deploy Prometheus and Grafana. Set up dashboards for each
                  service. Configure alerts for high error rates, slow response
                  times, and resource exhaustion. Your team starts seeing
                  production as a dashboard instead of a black box.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <strong className="text-foreground font-normal">
                    Step 5: Secure secrets and backups.
                  </strong>{" "}
                  Move all secrets out of environment files and into a proper
                  secrets manager. Set up automated, encrypted backups with
                  tested restores. These two steps are what separate a
                  &quot;we have containers&quot; setup from a production-grade
                  platform.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  <strong className="text-foreground font-normal">
                    Step 6: Document everything.
                  </strong>{" "}
                  Write runbooks for common operations: deploying, rolling back,
                  adding a new service, responding to incidents. Put them in the
                  repo, not a wiki. Review them in PRs. A platform without
                  documentation is just infrastructure that one person
                  understands.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This entire journey can take 2-4 weeks with focused effort, or
                  be done in a few days with experienced help. The important
                  thing is that you start. Every step forward reduces risk and
                  gives your developers time back.
                </p>
              </FadeIn>

              {/* Conclusion */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">
                  Start with what fits your team
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Platform engineering is not about using the most sophisticated
                  tools. It is about giving your developers a reliable,
                  automated path from code to production. For teams with 2-30
                  developers, a Docker-based platform delivers everything you
                  need at a cost and complexity level that actually makes sense.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The goal is not to avoid Kubernetes forever. It is to avoid
                  adopting it before you need it, which is a mistake that has
                  sunk countless small engineering teams. Build the platform
                  that fits your team today. If you outgrow it, migrating to K8s
                  from a well-containerized, well-monitored Docker setup is
                  straightforward. Migrating from chaos to K8s is not.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If you want help building a platform for your team, take a
                  look at our{" "}
                  <Link
                    href="/platform-engineering"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    platform engineering service
                  </Link>
                  . If you already have infrastructure and want to know where
                  the gaps are, our{" "}
                  <Link
                    href="/infrastructure-audit"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    infrastructure audit
                  </Link>
                  {" "}is a good starting point. And if you need someone to
                  manage the platform after it is built, that is what{" "}
                  <Link
                    href="/managed-devops"
                    className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                  >
                    managed DevOps
                  </Link>
                  {" "}is for.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-t border-foreground/[0.08] pt-8 mt-8">
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    Not sure where to start? Our free self-assessment takes 2
                    minutes and covers all the fundamentals.{" "}
                    <Link
                      href="/healthcheck"
                      className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors"
                    >
                      Take the DevOps health check
                    </Link>
                    .
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-xl font-light text-foreground tracking-wide mt-16 mb-6">
                  Related reading
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/blog/internal-developer-platforms-for-small-teams"
                      className="text-foreground-secondary hover:text-foreground transition-colors"
                    >
                      Internal developer platforms for small teams
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/why-your-team-doesnt-need-kubernetes"
                      className="text-foreground-secondary hover:text-foreground transition-colors"
                    >
                      Why your team does not need Kubernetes
                    </Link>
                  </li>
                </ul>
              </FadeIn>
            </div>
          </Container>
        </section>
      </article>

      <BlogEmailCapture />

      <CTASection
        headline="Want to talk about your platform?"
        subtext="We will look at your setup and recommend a path that fits your team size and budget."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
