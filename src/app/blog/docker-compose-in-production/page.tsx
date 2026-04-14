import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import BlogEmailCapture from "@/components/BlogEmailCapture";

export const metadata: Metadata = {
  title: "Docker Compose in Production: A Guide for Small Teams",
  description:
    "How to run Docker Compose in production with health checks, zero-downtime deployments, monitoring, backups, and proper security. A practical guide for teams with 2-30 developers.",
  alternates: {
    canonical: "https://kenitech.io/blog/docker-compose-in-production",
  },
  openGraph: {
    title: "Docker Compose in Production: A Guide for Small Teams",
    description:
      "Health checks, zero-downtime deploys, monitoring, and backups. Everything you need to run Compose in production.",
    url: "https://kenitech.io/blog/docker-compose-in-production",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Docker Compose in Production: A Guide for Small Teams",
  description:
    "How to run Docker Compose in production with health checks, zero-downtime deployments, monitoring, backups, and proper security.",
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  image: "https://kenitech.io/blog/docker-compose-in-production/opengraph-image",
  author: {
    "@type": "Person",
    name: "Mikel Martin",
    url: "https://www.linkedin.com/in/mikelm20/",
  },
  publisher: {
    "@type": "Organization",
    name: "Keni Engineering",
    logo: { "@type": "ImageObject", url: "https://kenitech.io/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kenitech.io/blog/docker-compose-in-production",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kenitech.io" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://kenitech.io/blog" },
    { "@type": "ListItem", position: 3, name: "Docker Compose in Production", item: "https://kenitech.io/blog/docker-compose-in-production" },
  ],
};

export default function DockerComposeInProduction() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article>
        <section className="pt-28 pb-14 md:pt-36 md:pb-16">
          <Container>
            <div className="max-w-[640px] mx-auto">
              <FadeIn>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-4">CONTAINERS</p>
                <h1 className="text-heading text-foreground font-light tracking-wide mb-4">
                  Docker Compose in production: a guide for small teams
                </h1>
                <p className="text-label text-muted/60 font-light">April 2, 2026 &middot; 12 min read</p>
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
                  Docker Compose is often dismissed as &quot;just for development.&quot; That is wrong. With the right setup, Compose runs production workloads reliably for thousands of companies. It is simple, declarative, and easy to reason about. For teams with 2-30 developers running a handful of services on a single host, it is often the best choice you can make.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The problem is not Compose itself. The problem is that most teams use it the same way in production as they do in development: no health checks, no resource limits, no monitoring, no backup strategy. That is what turns a reliable tool into a liability. This guide covers everything you need to run Compose in production properly.
                </p>
              </FadeIn>

              {/* Why Compose works in production */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Why Compose works in production</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The case for Compose in production comes down to simplicity. A single <code className="text-foreground text-sm">docker-compose.yml</code> file describes your entire stack: services, networks, volumes, environment variables, and dependencies. Anyone on the team can read it and understand what is running. Compare that to Kubernetes, where the equivalent setup requires dozens of YAML files, a control plane, and a dedicated platform team.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Compose gives you declarative configuration. You define the desired state, and Docker makes it happen. Need to roll back? Change the image tag and run <code className="text-foreground text-sm">docker compose up -d</code>. The previous version is running again in seconds. No deployment pipelines to revert, no Helm charts to roll back.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Restart policies mean your services come back after a crash or a server reboot. Health checks let Docker know when a container is actually ready to serve traffic, not just running. These two features alone cover most of the &quot;self-healing&quot; behavior that people think requires an orchestrator.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The single-host constraint is real, but it is also an advantage. There is no distributed consensus to fail, no network partitions between nodes, no split-brain scenarios. Your application runs on one server, and you can SSH in and inspect it directly when something goes wrong. For most small teams, that simplicity is worth more than horizontal scaling they do not need yet.
                </p>
              </FadeIn>

              {/* The production-ready Compose stack */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The production-ready Compose stack</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  A development Compose file and a production Compose file should look very different. In development, you mount source code, skip health checks, and run everything with default settings. In production, you lock things down. Here is what a production-ready Compose stack needs.
                </p>
              </FadeIn>

              {/* Health checks */}
              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Health checks on every service</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  A running container is not necessarily a healthy container. Your application might have started but failed to connect to the database. Or it might be stuck in a crash loop. Without health checks, Docker has no way to know.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Add a <code className="text-foreground text-sm">healthcheck</code> to every service in your Compose file. For web services, an HTTP check against a <code className="text-foreground text-sm">/health</code> endpoint works well. For databases, use the native client: <code className="text-foreground text-sm">pg_isready</code> for PostgreSQL, <code className="text-foreground text-sm">redis-cli ping</code> for Redis. Set reasonable intervals, timeouts, and retry counts. Five seconds between checks, three retries, and a ten-second timeout is a good starting point for most services.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Health checks also enable dependency ordering. When service A depends on service B with a <code className="text-foreground text-sm">condition: service_healthy</code> clause, Compose will wait until B&apos;s health check passes before starting A. This solves the classic &quot;app starts before database is ready&quot; problem without sleep hacks in your entrypoint.
                </p>
              </FadeIn>

              {/* Restart policies */}
              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Restart policies</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Every production service should have a restart policy. The two practical options are <code className="text-foreground text-sm">always</code> and <code className="text-foreground text-sm">unless-stopped</code>. The difference: <code className="text-foreground text-sm">always</code> restarts containers even after you explicitly stop them (on the next Docker daemon start), while <code className="text-foreground text-sm">unless-stopped</code> respects manual stops.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  For most services, <code className="text-foreground text-sm">unless-stopped</code> is the right choice. It gives you self-healing (automatic restart after a crash or reboot) while still letting you stop a service manually for maintenance without it coming back immediately.
                </p>
              </FadeIn>

              {/* Resource limits */}
              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Resource limits</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Without memory limits, a single misbehaving service can consume all available RAM and take down every other container on the host. This is the number one cause of &quot;everything crashed at 3 AM&quot; incidents on single-host setups.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Set <code className="text-foreground text-sm">mem_limit</code> and <code className="text-foreground text-sm">cpus</code> for every service. Start with generous limits based on observed usage, then tighten them over time. A typical web application might get 512MB of memory and 0.5 CPU. A database might need 2GB and 1.0 CPU. Monitor actual usage through cAdvisor or Docker stats, and adjust accordingly.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Also set <code className="text-foreground text-sm">memswap_limit</code> equal to <code className="text-foreground text-sm">mem_limit</code> to prevent swap usage. Containers swapping to disk will make your entire host slow and unresponsive, which is worse than the container being killed for exceeding its memory limit.
                </p>
              </FadeIn>

              {/* Named volumes */}
              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Named volumes for persistent data</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Never use bind mounts for production data. Named volumes are managed by Docker, survive container recreation, and have predictable paths. Define them in the top-level <code className="text-foreground text-sm">volumes</code> section of your Compose file and reference them in your services.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Database data, uploaded files, and any state that must survive a <code className="text-foreground text-sm">docker compose down &amp;&amp; docker compose up</code> cycle should live in a named volume. Everything else should be ephemeral. If you lose your container and your application breaks because it was storing data in the container filesystem, that is a bug.
                </p>
              </FadeIn>

              {/* Network isolation */}
              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Network isolation between services</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  By default, all services in a Compose file share a single network. That means your frontend can talk directly to your database, which is not ideal. Create separate networks for different security zones. A common pattern: a <code className="text-foreground text-sm">frontend</code> network for services that need to be exposed to the reverse proxy, and a <code className="text-foreground text-sm">backend</code> network for internal communication between the app and the database.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Your web application joins both networks. Your database only joins the backend network. The reverse proxy only joins the frontend network. Now your database is unreachable from outside the backend network, even if someone compromises the proxy.
                </p>
              </FadeIn>

              {/* Environment variables */}
              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Environment variables via .env files</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Never hardcode credentials, API keys, or database URLs in your Compose file. Use <code className="text-foreground text-sm">env_file</code> to load variables from a <code className="text-foreground text-sm">.env</code> file that is gitignored. This keeps secrets out of version control and makes it easy to have different configurations per environment.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  For extra security, consider using Docker secrets (available in Compose v3+ with <code className="text-foreground text-sm">docker stack deploy</code>) or mounting secrets from an external secrets manager. At minimum, your <code className="text-foreground text-sm">.env</code> file should have restrictive permissions (<code className="text-foreground text-sm">chmod 600</code>) and be owned by the user running Docker.
                </p>
              </FadeIn>

              {/* Reverse proxy and TLS */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Reverse proxy and TLS</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Your Compose services should never be exposed directly to the internet. A reverse proxy sits in front, handles TLS termination, and routes traffic to the correct container. For Compose-based setups, Traefik is the best choice because it integrates natively with Docker.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Traefik watches the Docker socket and automatically discovers services based on labels. When you add labels like <code className="text-foreground text-sm">traefik.http.routers.myapp.rule=Host(`app.example.com`)</code> to a service in your Compose file, Traefik picks it up and configures routing automatically. No config files to edit, no reloads to trigger.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  TLS certificates are handled by Traefik&apos;s built-in ACME client. Point it at Let&apos;s Encrypt, and certificates are issued and renewed automatically for every discovered service. You configure it once, and then you never think about certificates again. No certbot cron jobs, no manual renewals, no expired certificate incidents at 2 AM.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The Traefik container itself runs as part of your Compose stack. It listens on ports 80 and 443, redirects HTTP to HTTPS, and proxies traffic to your other services over the internal Docker network. The only ports exposed on the host are 80 and 443. Everything else is internal. For a deeper comparison of proxy options, see our post on{" "}
                  <Link href="/blog/traefik-vs-nginx-vs-haproxy" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    Traefik vs Nginx vs HAProxy
                  </Link>.
                </p>
              </FadeIn>

              {/* Zero-downtime deployments */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Zero-downtime deployments</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The basic deployment workflow with Compose is straightforward. Pull the new images, then run <code className="text-foreground text-sm">docker compose up -d</code>. Compose detects which services have new images, stops the old containers, and starts new ones. The whole process takes a few seconds.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  For most internal tools and low-traffic applications, this is fine. There is a brief moment where the service is unavailable while the new container starts, but it is typically under five seconds. If your users refresh and see a momentary error, that is acceptable for many workloads.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  For true zero-downtime, you need a bit more setup. The approach: run two instances of your service behind the reverse proxy. Pull the new image, scale up to two containers with the new version, wait for the health check to pass, then scale down the old one. Traefik handles this naturally because it routes traffic based on health check status. Once the new container is healthy, traffic shifts to it. Once the old container is removed, Traefik stops routing to it.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  You can script this with a simple deploy script: <code className="text-foreground text-sm">docker compose pull</code>, then <code className="text-foreground text-sm">docker compose up -d --no-deps --scale myapp=2 myapp</code>, wait for health, then <code className="text-foreground text-sm">docker compose up -d --no-deps --scale myapp=1 myapp</code>. It is not as elegant as Kubernetes rolling updates, but it works, and it takes ten lines of bash instead of a cluster.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  One critical detail: make sure your application handles graceful shutdown. When Docker sends SIGTERM, your app should finish in-flight requests, close database connections, and exit cleanly. Set <code className="text-foreground text-sm">stop_grace_period</code> in your Compose file to give it enough time. Thirty seconds is a reasonable default.
                </p>
              </FadeIn>

              {/* Monitoring your Compose stack */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Monitoring your Compose stack</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Running services without monitoring is flying blind. The good news: you can run a complete monitoring stack as Compose services alongside your application. No external services needed, no SaaS bills.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The standard stack is Prometheus for metrics collection, Grafana for dashboards and alerting, node-exporter for host-level metrics (CPU, memory, disk, network), and cAdvisor for container-level metrics (per-container resource usage). All four run as containers in your Compose file.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Prometheus</strong> scrapes metrics from your services on a configurable interval. Most applications can expose a <code className="text-foreground text-sm">/metrics</code> endpoint using a Prometheus client library. Prometheus stores the data locally and provides a query language (PromQL) to analyze it.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Grafana</strong> connects to Prometheus and lets you build dashboards that visualize your metrics. More importantly, it handles alerting. You can set up alerts for high CPU, low disk space, service down, or any custom metric your application exports. Alerts go to email, Google Chat, PagerDuty, or any other supported channel.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">node-exporter</strong> exposes host-level metrics that Prometheus scrapes. Disk usage trending toward full, memory pressure, high CPU load. These are the metrics that tell you about infrastructure problems before they cause application problems.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">cAdvisor</strong> provides container-level metrics. How much memory is each container using? Which one is consuming the most CPU? Is any container hitting its resource limits? This data helps you right-size your resource limits over time.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The entire monitoring stack adds roughly 500MB of memory overhead. On a 4GB or 8GB server, that is a reasonable cost for the visibility it provides. Without monitoring, you are guessing. With it, you know exactly what is happening on your server at all times.
                </p>
              </FadeIn>

              {/* Backup strategy */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Backup strategy</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Backups are non-negotiable. If your server dies and you do not have backups, you lose everything. The strategy has three parts: database dumps, volume backups, and offsite storage.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  For databases, run regular logical dumps. <code className="text-foreground text-sm">pg_dump</code> for PostgreSQL, <code className="text-foreground text-sm">mysqldump</code> for MySQL. Schedule these via cron or a dedicated backup container. Logical dumps are portable, human-readable, and can be restored to any version of the database. Run them daily at minimum, hourly if the data changes frequently.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  For Docker volumes that contain uploaded files or application state, use Restic. It is an encrypted, deduplicated backup tool that supports multiple storage backends: S3, B2, SFTP, and local storage. Restic runs as a container in your Compose stack, mounts the volumes it needs to back up, and pushes encrypted snapshots to your offsite storage on a schedule.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The offsite part is critical. If your backups live on the same server as your data, a disk failure takes out both. Use S3 (or an S3-compatible service like Backblaze B2 or Wasabi) as your backup target. Storage costs are minimal: a few dollars per month for most small teams.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Test your restores. A backup that has never been restored is a backup that might not work. Schedule a monthly restore test to a separate environment. It takes an hour and gives you confidence that your recovery process actually works when you need it.
                </p>
              </FadeIn>

              {/* When Compose is not enough */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">When Compose is not enough</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Compose is excellent for many production workloads, but it has real limitations. Being honest about them helps you make the right decision.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Multi-host requirements</strong>. Compose runs on a single host. If your application needs to run across multiple servers for redundancy or capacity, you need an orchestrator. Docker Swarm is the simplest step up from Compose (it uses nearly identical YAML). Kubernetes is the industry standard for larger deployments.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">30+ services</strong>. A Compose file with 30 or more services becomes hard to manage. Dependency graphs get complex, startup order becomes fragile, and a single <code className="text-foreground text-sm">docker compose up</code> takes too long. At this scale, splitting into multiple Compose files or moving to an orchestrator makes sense.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Auto-scaling</strong>. Compose does not scale services based on load. You set a fixed number of replicas, and that is what you get. If your traffic is spiky and you need to handle 10x the normal load for short periods, you need something that can scale dynamically.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Multi-team deployments</strong>. When multiple teams need to deploy independently to the same infrastructure, Compose&apos;s single-file model becomes a bottleneck. Kubernetes namespaces or separate Compose projects can help, but the coordination overhead grows.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If any of these apply to you, read our detailed comparison of{" "}
                  <Link href="/blog/kubernetes-vs-docker-compose" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    Kubernetes vs Docker Compose
                  </Link>
                  {" "}to understand the tradeoffs. The key takeaway: move to Kubernetes when you need its features, not before. Premature orchestration is one of the most common sources of unnecessary complexity in small engineering teams.
                </p>
              </FadeIn>

              {/* Conclusion */}
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Making it work for your team</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Docker Compose in production is not a compromise. It is a deliberate choice to keep your infrastructure simple, understandable, and maintainable. Add health checks to every service. Set resource limits so one bad deploy does not take down the host. Put Traefik in front for TLS and routing. Monitor everything with Prometheus and Grafana. Back up your data with Restic to offsite storage. Test your restores.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  That is the entire playbook. No cluster to manage, no control plane to keep alive, no etcd backups to worry about. Just your application, running in containers, on a server you can understand. For teams with 2-30 developers, this setup handles far more traffic and complexity than most people realize.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If you want help setting this up for your team, our{" "}
                  <Link href="/platform-engineering" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    platform engineering
                  </Link>
                  {" "}service builds production-ready Compose stacks with all of the above included. Or if you already have a setup and want a second opinion, start with our{" "}
                  <Link href="/devops-consulting" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    DevOps consulting
                  </Link>.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-t border-foreground/[0.08] pt-8 mt-8">
                  <h2 className="text-xl font-light text-foreground tracking-wide mb-6">Related reading</h2>
                  <ul className="space-y-3">
                    <li><Link href="/blog/docker-vs-podman" className="text-foreground-secondary hover:text-foreground transition-colors">Docker vs Podman: which container runtime should you use in 2026</Link></li>
                    <li><Link href="/blog/traefik-vs-nginx-vs-haproxy" className="text-foreground-secondary hover:text-foreground transition-colors">Traefik vs Nginx vs HAProxy: choosing a reverse proxy in 2026</Link></li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </article>

      <BlogEmailCapture />

      <CTASection
        headline="Need help running Compose in production?"
        subtext="We build production-ready Docker Compose stacks with monitoring, backups, and zero-downtime deploys."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
