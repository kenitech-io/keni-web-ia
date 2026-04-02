import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import BlogEmailCapture from "@/components/BlogEmailCapture";

export const metadata: Metadata = {
  title: "Why Your 10-Person Dev Team Doesn't Need Kubernetes (And What to Use Instead)",
  description:
    "Kubernetes is overkill for most small teams. Learn what 2-30 developer teams actually need: Docker, Traefik, CI/CD, and monitoring. Practical kubernetes alternatives for small teams.",
  keywords: [
    "kubernetes small teams",
    "kubernetes alternatives",
    "docker vs kubernetes for small teams",
    "kubernetes overkill",
    "docker compose production",
    "small team infrastructure",
  ],
  alternates: {
    canonical: "https://kenitech.io/blog/why-your-team-doesnt-need-kubernetes",
  },
  openGraph: {
    title: "Why Your 10-Person Dev Team Doesn't Need Kubernetes",
    description:
      "Kubernetes is overkill for most small teams. Learn what 2-30 developer teams actually need instead.",
    url: "https://kenitech.io/blog/why-your-team-doesnt-need-kubernetes",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Your 10-Person Dev Team Doesn't Need Kubernetes (And What to Use Instead)",
  description: "Kubernetes is overkill for most small teams. Learn what 2-30 developer teams actually need instead.",
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  image: "https://kenitech.io/blog/why-your-team-doesnt-need-kubernetes/opengraph-image",
  author: { "@type": "Person", name: "Mikel Martin", url: "https://www.linkedin.com/in/mikelmartin/" },
  publisher: {
    "@type": "Organization",
    name: "Keni Engineering",
    logo: { "@type": "ImageObject", url: "https://kenitech.io/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kenitech.io/blog/why-your-team-doesnt-need-kubernetes",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kenitech.io" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://kenitech.io/blog" },
    { "@type": "ListItem", position: 3, name: "Why Your Team Doesn't Need Kubernetes", item: "https://kenitech.io/blog/why-your-team-doesnt-need-kubernetes" },
  ],
};

export default function WhyYourTeamDoesntNeedKubernetes() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article>
        <section className="py-32 md:py-48">
          <Container>
            <div className="max-w-[640px] mx-auto">
              <FadeIn>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">INFRASTRUCTURE</p>
                <h1 className="text-heading text-foreground font-light tracking-wide mb-8">
                  Why your 10-person dev team doesn&apos;t need Kubernetes (and what to use instead)
                </h1>
                <p className="text-label text-muted/60 font-light">April 2, 2026 &middot; 10 min read</p>
                <div className="flex items-center gap-3 mt-6">
                  <div>
                    <p className="text-sm text-foreground font-light">
                      <a href="https://www.linkedin.com/in/mikelmartin/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/80 transition-colors">Mikel Martin</a>
                    </p>
                    <p className="text-xs text-muted/60 font-light">CTO, Keni Engineering</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="pb-32 md:pb-48">
          <Container>
            <div className="max-w-[640px] mx-auto space-y-10">
              <FadeIn delay={0.1}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Kubernetes dominates the infrastructure conversation. It is on every job listing, every conference agenda, every cloud provider&apos;s landing page. If you are a CTO or engineering lead at a growing company, you have probably wondered whether your team should adopt it. The short answer for most teams under 30 developers: no, not yet, and possibly not ever.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This is not an anti-Kubernetes post. Kubernetes is a remarkable piece of engineering that solves real problems at scale. But &quot;at scale&quot; is doing a lot of heavy lifting in that sentence. For a 10-person dev team running a handful of services, Kubernetes introduces complexity that far outweighs its benefits. The goal of this post is right-sizing: matching your infrastructure to your actual needs, not your aspirational ones.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The Kubernetes tax</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Every technology choice comes with a cost, and Kubernetes has one of the highest total costs of ownership in the infrastructure world. We call it the Kubernetes tax: the ongoing price you pay in money, time, and cognitive load just to keep the platform running before you deploy a single application.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-sm text-foreground font-normal tracking-wide">Financial cost</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  A managed Kubernetes cluster on EKS, GKE, or AKS starts at $70 to $75/month for the control plane alone. That is before you add worker nodes, load balancers, persistent volumes, or data transfer. A realistic small production cluster with 3 worker nodes runs $300 to $600/month in compute. Add monitoring, logging, and backup tooling, and a basic Kubernetes setup costs $500 to $1,000/month. For a team that could run the same workload on a $40 to $80/month VPS, that is a 10x cost increase with no corresponding benefit.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-sm text-foreground font-normal tracking-wide">Engineering time</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Self-hosted Kubernetes (k3s, kubeadm, or bare-metal) eliminates the managed service fee but adds operational burden. Certificate rotation, etcd backups, version upgrades, node drains, CNI plugin issues. These tasks consume 20 to 30% of an engineer&apos;s time on an ongoing basis. For a 10-person team, that is effectively losing one full engineer to infrastructure maintenance. That engineer could be shipping features, fixing bugs, or improving the product.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-sm text-foreground font-normal tracking-wide">Learning curve</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Kubernetes has a notoriously steep learning curve. Pods, Deployments, Services, Ingresses, ConfigMaps, Secrets, PersistentVolumeClaims, NetworkPolicies, RBAC, Operators, CRDs, Helm charts, Kustomize. A developer who is productive with Docker in a week will need months to become comfortable with Kubernetes. Multiply that across your team, and the onboarding cost is substantial. Every new hire needs to learn not just your application, but your Kubernetes configuration, your custom operators, and your deployment pipeline.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-sm text-foreground font-normal tracking-wide">Debugging complexity</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  When something goes wrong in a Docker Compose stack, the debugging surface is small. Check container logs, check resource usage, restart the container. When something goes wrong in Kubernetes, the debugging surface is enormous. Is it a scheduling issue? A networking issue? A resource quota? An RBAC permission? A DNS resolution failure? A kubelet problem on a specific node? We routinely see teams spend hours debugging Kubernetes-specific issues that would not exist in a simpler setup.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">What Kubernetes actually solves</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  To be fair, Kubernetes solves real problems. The issue is not that Kubernetes is bad. The issue is that most small teams do not have the problems it solves. Here is where Kubernetes genuinely earns its complexity:
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Auto-scaling under variable load</strong>: if your traffic spikes 10x during peak hours and drops to baseline overnight, Kubernetes Horizontal Pod Autoscaler dynamically adjusts your replica count based on CPU, memory, or custom metrics. This saves real money at scale by not over-provisioning.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Multi-region deployments</strong>: if compliance, latency, or disaster recovery requires running your application across multiple geographic regions, Kubernetes federation and multi-cluster tools provide the primitives to make this work.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">50+ microservices</strong>: when you have dozens of independently deployed services with complex dependency graphs, Kubernetes&apos;s service discovery, load balancing, and rolling update mechanisms genuinely help manage the chaos.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Zero-downtime rolling updates at scale</strong>: Kubernetes handles rolling deployments across hundreds of pods with health checks, readiness probes, and automatic rollback. At scale, this is hard to replicate with simpler tools.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">A dedicated platform team</strong>: if you have 2 to 3 engineers whose full-time job is maintaining the platform, the investment in Kubernetes expertise makes sense. Their knowledge compounds over time and serves the whole engineering organization.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If you read that list and thought &quot;none of that applies to us,&quot; you are in the majority. Most teams with 2 to 30 developers have predictable traffic, fewer than 20 services, a single region, and no dedicated platform team. That is not a criticism. It is a description of a healthy, growing company that should be focused on product, not infrastructure.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">What most small teams actually need</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Instead of Kubernetes, here is what actually moves the needle for small teams. These are the building blocks of a production-ready infrastructure that any developer can understand and maintain.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-sm text-foreground font-normal tracking-wide">Containerized applications with Docker</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Containers are the foundation. Every application should run in a Docker container with a well-written Dockerfile, pinned base images, multi-stage builds, and a <code className="text-foreground text-sm">.dockerignore</code> file. This gives you reproducible builds, environment parity between development and production, and easy rollbacks by redeploying a previous image tag. Docker Compose ties multiple containers together into a coherent stack. One YAML file defines your entire application topology: web server, API, database, cache, worker queues. Any developer can read it, understand it, and modify it.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-sm text-foreground font-normal tracking-wide">Automated CI/CD pipelines</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Every push to main should trigger an automated pipeline that builds your container, runs tests, scans for vulnerabilities, and deploys to production. GitHub Actions is the obvious choice if your code lives on GitHub. GitLab CI works well for GitLab users. For teams that want self-hosted CI without vendor lock-in, Woodpecker CI is an excellent lightweight option that runs alongside your application stack. The key insight: you do not need Kubernetes to have automated deployments. A CI pipeline that builds an image, pushes it to a registry, and tells your server to pull and restart is all you need. Tools like Watchtower can even automate the pull-and-restart step.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-sm text-foreground font-normal tracking-wide">A reverse proxy with automatic TLS</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Traefik is our recommendation here. It automatically discovers your Docker containers, routes traffic to them based on labels, and provisions TLS certificates from Let&apos;s Encrypt. Zero manual certificate management, zero nginx config files to maintain. A single Traefik instance can route traffic to dozens of services on one server. It handles HTTPS termination, automatic HTTP-to-HTTPS redirects, and health checking. Nginx and HAProxy are solid alternatives, but Traefik&apos;s Docker integration makes it particularly well-suited for small teams.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-sm text-foreground font-normal tracking-wide">Monitoring and alerting</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Prometheus for metrics collection and Grafana for visualization is the industry standard, and it runs perfectly well as Docker containers alongside your application. Set up dashboards for the things that matter: request latency, error rates, CPU and memory usage, disk space, container health. Configure alerts for the things that require immediate attention: service down, error rate spike, disk filling up. This stack gives you the same observability that Kubernetes users get, without the Kubernetes overhead. You can set it up in an afternoon and it will run reliably for years.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-sm text-foreground font-normal tracking-wide">Secrets management</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Stop storing secrets in <code className="text-foreground text-sm">.env</code> files committed to git. Use a proper secrets manager: 1Password for teams that want simplicity and a great developer experience, or HashiCorp Vault for teams that need fine-grained access control and audit logs. Both integrate with CI/CD pipelines, so your deployment process can pull secrets at build or deploy time without them ever touching version control.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-sm text-foreground font-normal tracking-wide">Automated backups</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Restic or BorgBackup for encrypted, deduplicated backups to S3 or any object storage. Run backups on a cron schedule, verify them regularly, and test restores quarterly. This is not glamorous, but it is the single most important piece of infrastructure you will ever set up. A database backup that runs every hour and ships to offsite storage has saved more companies than Kubernetes ever has.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The Docker Compose production stack</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  When you combine the building blocks above, you get a production stack that covers 90% of what small teams need. Here is what it looks like in practice:
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Traefik</strong>: sits at the edge, handles all incoming traffic, terminates TLS, routes requests to the right container based on domain or path. Configuration lives in Docker labels on your service containers.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Your application containers</strong>: API, web frontend, worker processes, whatever your app needs. Each defined as a service in docker-compose.yml with resource limits, health checks, and restart policies.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Database</strong>: PostgreSQL, MySQL, or MongoDB running as a container with data stored on a Docker volume. For production, consider a managed database service if your budget allows.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Prometheus + Grafana</strong>: running as containers, scraping metrics from your application and infrastructure. Grafana dashboards give your team visibility into system health.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Woodpecker CI</strong>: self-hosted CI/CD running alongside your stack. Builds images on push, runs tests, deploys automatically. No external CI service needed.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Restic backup</strong>: scheduled container that backs up database dumps and critical volumes to S3-compatible storage every hour.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This entire stack runs on a single server. A $40 to $80/month VPS from Hetzner, DigitalOcean, or Hostinger handles a surprising amount of traffic. We have seen this setup serve 10,000+ requests per minute without breaking a sweat. For redundancy, add a second server with the same stack behind a DNS failover. Total cost: $80 to $160/month. Total Kubernetes manifests: zero.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The key advantage of this approach is transparency. Any developer on your team can read the docker-compose.yml file and understand exactly what is running, how it is connected, and how to modify it. There are no abstractions hiding complexity. No operators running reconciliation loops in the background. No custom resource definitions to decode. Just containers, networks, and volumes.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">When to actually migrate to Kubernetes</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  We are not saying never use Kubernetes. We are saying wait until you have concrete reasons, not hypothetical ones. Here are the signals that indicate you have genuinely outgrown a simpler setup:
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Traffic spikes 10x or more</strong>: if your load varies dramatically and you are paying for peak capacity 24/7, auto-scaling will save real money. A steady 2x growth in traffic is not a reason. Just get a bigger server.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">30+ independently deployed services</strong>: when your docker-compose.yml file is 500+ lines and deploys take 20 minutes because everything restarts, the coordination overhead justifies an orchestrator.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Multi-region compliance requirements</strong>: GDPR data residency, SOC 2 geographic redundancy, or regulatory requirements that mandate multi-region deployments. This is a legitimate forcing function.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">You can afford a dedicated platform team</strong>: at least 2 to 3 engineers whose primary job is maintaining the platform. If you cannot dedicate this headcount, Kubernetes will be a burden, not an accelerator.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Your deployment frequency demands it</strong>: if you are deploying 50+ times per day across multiple services and need sophisticated canary deployments, blue-green switching, and automatic rollback based on metrics, Kubernetes service mesh integrations (Istio, Linkerd) provide this natively.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Notice that &quot;our investors expect us to use Kubernetes&quot; and &quot;we want to attract engineers who know K8s&quot; are not on this list. Those are organizational decisions, not technical ones. Make infrastructure decisions based on what your application needs, not what looks good on a pitch deck.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The migration path is easier than you think</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  One common objection: &quot;If we start with Docker Compose, won&apos;t we have to rewrite everything when we migrate to Kubernetes?&quot; No. If your applications are properly containerized with Docker, moving to Kubernetes is a translation exercise, not a rewrite. Your Dockerfiles stay the same. Your application code stays the same. You are converting docker-compose.yml definitions into Kubernetes manifests (Deployments, Services, Ingresses). Tools like Kompose automate most of this translation.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The reverse is not true. If you start with Kubernetes and later realize it is too complex for your needs, simplifying is painful. You have Helm charts, operators, custom CRDs, and team knowledge deeply embedded in Kubernetes patterns. Downgrading infrastructure is always harder than upgrading it. Start simple. Upgrade when the pain of simplicity exceeds the cost of complexity.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Our recommendation</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  For teams with 2 to 30 developers, our recommendation is clear: start with Docker Compose, Traefik, and a solid monitoring stack. Get your CI/CD pipeline automated. Get your backups running and tested. Get your secrets out of git. These fundamentals matter far more than which orchestrator you use.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The companies we work with that have the most reliable infrastructure are not the ones using the most sophisticated tools. They are the ones using tools they fully understand, configured correctly, with good monitoring and tested backup procedures. A Docker Compose stack that every developer on your team can debug at 2 AM is worth more than a Kubernetes cluster that only one person understands.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Focus your engineering time on what makes your product unique. Let the infrastructure be boring, reliable, and simple. When you genuinely outgrow that simplicity, you will know, and the migration path will be straightforward.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Want to see what a right-sized infrastructure looks like for your team? Explore our{" "}
                  <Link href="/platform-engineering" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    platform engineering
                  </Link>
                  {" "}approach, start with an{" "}
                  <Link href="/infrastructure-audit" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    infrastructure audit
                  </Link>
                  , or talk to us about{" "}
                  <Link href="/devops-consulting" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    DevOps consulting
                  </Link>
                  {" "}to get hands-on help building the right stack for your team.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-t border-foreground/[0.08] pt-8 mt-8">
                  <p className="text-label text-foreground font-light mb-3">Related reading</p>
                  <ul className="space-y-2 text-sm text-foreground-secondary/70 leading-loose font-light">
                    <li>
                      <Link href="/blog/kubernetes-vs-docker-compose" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                        Kubernetes vs Docker Compose: which one does your team actually need?
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/docker-vs-podman" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                        Docker vs Podman: which container runtime should you use?
                      </Link>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </article>

      <BlogEmailCapture />

      <CTASection
        headline="Not sure if your infrastructure is right-sized?"
        subtext="We will evaluate your current setup and recommend the simplest stack that meets your needs."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
