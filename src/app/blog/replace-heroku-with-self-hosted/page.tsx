import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import BlogEmailCapture from "@/components/BlogEmailCapture";

export const metadata: Metadata = {
  title: "Replace Heroku with a Self-Hosted Platform (And Cut Your Bill by 80%)",
  description:
    "Step-by-step guide to migrating from Heroku to a self-hosted platform. Real cost comparison, equivalent open-source stack, migration path, and when to stay on Heroku.",
  alternates: {
    canonical: "https://kenitech.io/blog/replace-heroku-with-self-hosted",
  },
  openGraph: {
    title: "Replace Heroku with a Self-Hosted Platform (And Cut Your Bill by 80%)",
    description:
      "Step-by-step guide to migrating from Heroku to a self-hosted platform. Real cost comparison and migration path.",
    url: "https://kenitech.io/blog/replace-heroku-with-self-hosted",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Replace Heroku with a Self-Hosted Platform (And Cut Your Bill by 80%)",
  description: "Step-by-step guide to migrating from Heroku to a self-hosted platform. Real cost comparison and migration path.",
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  image: "https://kenitech.io/blog/replace-heroku-with-self-hosted/opengraph-image",
  author: { "@type": "Person", name: "Mikel Martin", url: "https://www.linkedin.com/in/mikelm20/" },
  publisher: {
    "@type": "Organization",
    name: "Keni Engineering",
    logo: { "@type": "ImageObject", url: "https://kenitech.io/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kenitech.io/blog/replace-heroku-with-self-hosted",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kenitech.io" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://kenitech.io/blog" },
    { "@type": "ListItem", position: 3, name: "Replace Heroku with Self-Hosted", item: "https://kenitech.io/blog/replace-heroku-with-self-hosted" },
  ],
};

export default function ReplaceHerokuWithSelfHosted() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article>
        <section className="pt-28 pb-14 md:pt-36 md:pb-16">
          <Container>
            <div className="max-w-[640px] mx-auto">
              <FadeIn>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-4">INFRASTRUCTURE</p>
                <h1 className="text-heading text-foreground font-light tracking-wide mb-4">
                  Replace Heroku with a self-hosted platform (and cut your bill by 80%)
                </h1>
                <p className="text-label text-muted/60 font-light">April 2, 2026 &middot; 10 min read</p>
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
                  Heroku changed the game when it launched. Push code, it runs. No servers to manage, no deploy scripts to write, no infrastructure to think about. For a long time, that simplicity was worth the premium. But in 2026, Heroku pricing has become brutal for growing teams. A single Performance-M dyno costs $250 per month. A comparable VPS with more resources runs $20 to $40 per month. The math no longer works.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This guide walks through the full migration: what you actually lose, what you gain, the exact stack that replaces each Heroku component, and a step-by-step migration path. If your Heroku bill has crossed $500 per month and keeps climbing, this is for you.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The Heroku cost problem</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Heroku pricing looks reasonable when you start. A Basic dyno is $7 per month. But the moment you need production-grade resources, the cost curve goes vertical. Let us walk through a typical setup for a growing SaaS application with a small team.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">2x Performance-M dynos (web + worker)</strong>: $500/month. You need at least two for a production app with background jobs.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Heroku Postgres Standard 0</strong>: $50/month. The free tier maxes out at 10,000 rows, so any real application needs a paid plan. Standard 0 gives you 64 GB and 120 connections.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Heroku Redis Premium 0</strong>: $15/month. Needed for caching, sessions, or Sidekiq/Celery queues.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Heroku Scheduler</strong>: Free, but it runs on a dyno that costs $7+ per execution.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Papertrail (logging)</strong>: $11/month for the 10 MB/day plan. You will need more.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Scout APM or New Relic</strong>: $25 to $99/month for basic monitoring.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">SSL endpoint</strong>: Included now, but Heroku ACM only covers *.herokuapp.com. Custom domains need proper configuration.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Total for this modest setup: $600 to $700 per month. And this is for a single application. Teams running a staging environment, multiple services, or higher-tier database plans easily hit $1,000 to $1,500 per month. We have seen Heroku bills over $3,000 per month for teams with 5 developers running two apps with staging environments.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Now compare that to a self-hosted setup. A Hetzner CX41 server (4 vCPU, 16 GB RAM, 160 GB SSD) costs $15.90 per month. A DigitalOcean droplet with similar specs runs about $48 per month. Even if you go with two servers for redundancy plus a managed database, you are looking at $80 to $150 per month total. That is the same workload at 10 to 20% of the Heroku price.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The gap only widens as you grow. On Heroku, scaling means adding more dynos at $250 each. On a VPS, scaling means upgrading to a bigger server at marginal cost. A server with 8 vCPU and 32 GB RAM at Hetzner costs $30 per month. That is less than one-eighth of a single Performance-M dyno.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">What you lose (and what you don&apos;t)</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Let us be honest about what Heroku gives you and what actually matters once you leave. The fear of leaving Heroku is usually worse than the reality.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">What you lose</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">git push deploys</strong>: the magical <code className="text-foreground text-sm">git push heroku main</code> workflow disappears. But CI/CD replaces it with something better: automatic deploys on push to main, with tests running first. You trade one command for zero commands.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Managed Postgres</strong>: Heroku handles backups, failover, and upgrades for you. On a VPS, you run Postgres in Docker with automated daily backups. It takes 30 minutes to set up and runs reliably for years. For teams that want managed Postgres without Heroku, services like Neon or Supabase offer it at a fraction of the cost.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Add-on marketplace</strong>: Heroku&apos;s add-on ecosystem made it easy to bolt on services. But most popular add-ons have open-source equivalents or cheaper standalone services. Papertrail becomes Loki or just Docker log drivers. New Relic becomes Prometheus plus Grafana.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Zero ops</strong>: someone needs to maintain the server. Security updates, Docker upgrades, disk space monitoring. This is real work, but it is predictable and can be automated. It takes about 2 to 4 hours per month for a well-configured server.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">What you keep</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Containerized applications</strong>: if your app runs on Heroku, it already runs in a container. Docker Compose gives you the same isolation with more control.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Environment variables</strong>: Docker Compose and CI/CD tools support environment variables natively. The workflow is the same.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Automatic TLS</strong>: Traefik with Let&apos;s Encrypt gives you free automatic HTTPS certificates. No manual renewal, no configuration per domain.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Scaling</strong>: Docker Compose supports replicas. For most small to mid-size apps, a single server with proper resource allocation handles more traffic than multiple Heroku dynos.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The self-hosted equivalent stack</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Every Heroku component has a direct self-hosted equivalent. Here is the stack we use and recommend to clients. It is battle-tested, well-documented, and runs on a single server for most teams.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">VPS provider: $20 to $80 per month</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Hetzner is the best value for most teams. Their CX41 (4 vCPU, 16 GB RAM) at $15.90 per month handles what would require $500+ in Heroku dynos. DigitalOcean and Vultr are solid alternatives with better US data center coverage. For teams that need US-based servers for latency or compliance, DigitalOcean droplets in NYC or SFO work well at $48 to $96 per month for comparable specs.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Start with a single server. Add a second one only when you genuinely need high availability or your workload outgrows the first. Most apps with under 10,000 daily active users run comfortably on one well-sized server.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Docker Compose for orchestration</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Docker Compose replaces Heroku&apos;s Procfile and dyno management. Your entire application stack, including web server, worker processes, databases, and cache, is defined in a single <code className="text-foreground text-sm">docker-compose.yml</code> file. Each service is a container. You start everything with <code className="text-foreground text-sm">docker compose up -d</code>.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The advantage over Heroku: you control resource allocation. Instead of paying $250 per dyno and hoping Heroku allocates enough memory, you define exactly how much CPU and RAM each container gets. You also get persistent storage, which Heroku&apos;s ephemeral filesystem does not provide.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Traefik for routing and TLS</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Traefik is a reverse proxy that replaces Heroku&apos;s built-in router and SSL termination. It automatically discovers your Docker containers, routes traffic to the right service based on domain names, and provisions Let&apos;s Encrypt TLS certificates. No manual configuration per service. Add a few labels to your Docker Compose service and Traefik handles the rest.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Traefik also gives you middleware for rate limiting, basic auth, IP whitelisting, and request headers. Things that require separate Heroku add-ons or buildpacks are built into Traefik.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">CI/CD for deployments</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  GitHub Actions or Woodpecker CI replace Heroku&apos;s git push deploys. The workflow: push to main, CI runs tests, builds a Docker image, pushes it to a registry, and tells the server to pull the new image. The whole process takes 2 to 5 minutes and requires zero manual intervention.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This is actually better than Heroku&apos;s deploy model. With Heroku, a failed deploy still goes to production unless you set up a separate CI service. With a proper CI/CD pipeline, your tests must pass before deployment even starts. You also get build caching, parallel test execution, and deployment rollbacks, all things that Heroku either does not offer or charges extra for.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  GitHub Actions is free for public repos and offers 2,000 minutes per month on the free tier for private repos. For most teams, that is plenty. Woodpecker CI is a self-hosted alternative that runs on your own server with no usage limits.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">PostgreSQL with automated backups</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  PostgreSQL runs in a Docker container with a mounted volume for data persistence. Set up a daily backup job using <code className="text-foreground text-sm">pg_dump</code> piped to a tool like Restic, which encrypts and uploads backups to S3-compatible storage. Total cost for backup storage: $1 to $5 per month depending on database size.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Heroku Postgres Standard 0 gives you 64 GB and daily backups for $50 per month. A self-hosted Postgres with the same storage and automated backups costs the price of the disk space on your VPS (included) plus $2 per month for backup storage. The performance is often better because you are not sharing resources with other tenants.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Redis in Docker</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Redis runs as another container in your Docker Compose file. One line in the configuration. Heroku Redis Premium 0 costs $15 per month for 50 MB. Self-hosted Redis gets whatever memory you allocate from your server, at no additional cost. Most applications need less than 500 MB of Redis, which is trivial on a modern VPS.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Prometheus and Grafana for monitoring</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Prometheus scrapes metrics from your containers and server. Grafana displays them in dashboards. Together, they replace Heroku Metrics, Librato, and whatever APM add-on you were paying for. Prometheus collects CPU, memory, request latency, error rates, and custom application metrics. Grafana gives you alerting via email, Slack, or PagerDuty.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The setup takes about an hour. The ongoing cost is zero since both run as Docker containers on your existing server. Compare that to New Relic at $25 to $99 per month or Datadog at $15 per host per month.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The migration path</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Migrating from Heroku to a self-hosted platform is not as scary as it sounds. For a typical web application with a database, you can do it in a weekend. Here is the step-by-step path.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Step 1: Containerize your application</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If your app runs on Heroku, it already has a Procfile. You need a Dockerfile instead. Most frameworks have well-documented Docker setups. A Rails app, a Django app, or a Node.js app each takes 15 to 30 minutes to containerize properly. The key is to match your Heroku buildpack&apos;s runtime version. If Heroku runs your app on Ruby 3.2 with Node 18, your Dockerfile should use the same versions.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Test locally with <code className="text-foreground text-sm">docker compose up</code>. If the app runs on your laptop, it will run on the server. This is one of Docker&apos;s core promises and it actually delivers.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Step 2: Set up CI/CD</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Create a GitHub Actions workflow (or Woodpecker pipeline) that builds your Docker image, pushes it to a registry (GitHub Container Registry is free for public repos, $4 per month for private), and deploys to your server via SSH or a deployment tool. The workflow file is typically 30 to 50 lines of YAML. Run your existing test suite as part of the pipeline so you never deploy broken code.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Step 3: Configure the VPS</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Provision a VPS, install Docker, set up a firewall, and configure Traefik. This can be done manually in about an hour, or automated with Ansible in 15 minutes if you have playbooks ready. The server needs: Docker and Docker Compose installed, ports 80 and 443 open, SSH key authentication (disable password login), and automatic security updates enabled.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Set up Traefik as your entry point. It listens on ports 80 and 443, handles TLS termination, and routes requests to the right container based on domain names. A basic Traefik configuration is about 20 lines of YAML.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Step 4: Migrate the database</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This is the most delicate part. Export your Heroku Postgres database using <code className="text-foreground text-sm">heroku pg:backups:capture</code> followed by <code className="text-foreground text-sm">heroku pg:backups:download</code>. Import it into your new Postgres container using <code className="text-foreground text-sm">pg_restore</code>. For small databases (under 10 GB), this takes minutes. For larger databases, you might want to schedule a maintenance window.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Test the import thoroughly. Run your application against the migrated database and verify that everything works before switching production traffic. A common mistake is forgetting to migrate Heroku-specific extensions or configurations.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Step 5: Update DNS and go live</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Point your domain&apos;s DNS to the new server&apos;s IP address. If you are using Cloudflare, the switch is instant. For other DNS providers, lower the TTL to 300 seconds a day before migration, then make the switch. Keep Heroku running for 24 to 48 hours after the DNS change as a fallback. Once you confirm everything works on the new server, tear down the Heroku app.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The whole process, from Dockerfile creation to DNS switch, can be done in a weekend for a straightforward application. More complex setups with multiple services, queues, and scheduled jobs might take a week of part-time work.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">What about Render, Railway, and Fly.io?</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Before going fully self-hosted, it is worth considering the modern PaaS alternatives. They have learned from Heroku&apos;s mistakes and offer a much better price-to-value ratio.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Render</strong>: the closest Heroku replacement. Web services start at $7 per month, with a generous free tier. Managed Postgres starts at $7 per month. A comparable setup to our Heroku example runs about $50 to $150 per month. Good developer experience, auto-deploys from Git, built-in TLS. The downside: pricing still scales linearly with resources, and you are locked into their platform.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Railway</strong>: usage-based pricing starting at $5 per month. Great for small projects and prototypes. You pay for actual CPU and memory usage, which can be cheaper for low-traffic apps but unpredictable for high-traffic ones. The developer experience is excellent, maybe the best of any PaaS.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Fly.io</strong>: deploys containers to edge locations worldwide. Starts at $0 for small apps. Great for applications that need low latency globally. The pricing model is more complex, and costs can surprise you when traffic spikes. Database hosting (Fly Postgres) is still maturing.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  These platforms are a legitimate middle ground. They cost 50 to 70% less than Heroku while keeping the managed experience. But they are still 3 to 5x more expensive than self-hosted infrastructure. For a team spending $150 per month on Render, the savings from going self-hosted might not justify the operational overhead. For a team spending $500+ per month, the math changes significantly.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The other consideration is vendor lock-in. Render, Railway, and Fly.io are all relatively young companies. If one of them shuts down or changes pricing (remember Heroku removing its free tier in 2022?), you need to migrate again. A self-hosted Docker Compose setup runs on any VPS provider. Switching from Hetzner to DigitalOcean takes an afternoon, not a rewrite.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">When to stay on Heroku</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Self-hosting is not always the right call. Here are the situations where Heroku (or a managed PaaS) still makes sense.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Your team has zero ops knowledge</strong>: if nobody on the team has ever SSH&apos;d into a server, self-hosting introduces a steep learning curve. A managed PaaS lets you focus on building product. The premium is the cost of not learning infrastructure.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">You are pre-revenue and time matters more than money</strong>: when you are racing to find product-market fit, every hour spent on infrastructure is an hour not spent on the product. Heroku&apos;s simplicity has genuine value in this phase. Pay the premium, ship faster, revisit infrastructure when the bill becomes painful.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">You have one developer and no bandwidth</strong>: a solo developer maintaining infrastructure while building features is a recipe for burnout. If you cannot dedicate even 2 to 4 hours per month to server maintenance, a managed platform is the right choice.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Compliance requirements</strong>: if you need SOC 2, HIPAA, or PCI compliance, Heroku and other managed platforms provide compliance certifications out of the box. Achieving the same on self-hosted infrastructure requires significant additional work.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Your bill is under $200 per month</strong>: the savings from self-hosting a $200/month Heroku setup might be $100 to $150 per month. That is $1,200 to $1,800 per year. If the migration takes 20 hours of engineering time at $100/hour, it takes over a year to break even. The ROI only becomes compelling when your Heroku bill exceeds $500 per month.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The real cost of self-hosting</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Self-hosting is not free. The VPS costs less, but someone needs to maintain it. Here is a realistic accounting of the ongoing effort.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Server maintenance</strong>: 1 to 2 hours per month. Security updates, Docker upgrades, disk space management. Most of this can be automated.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Incident response</strong>: 0 to 4 hours per month. Servers crash, disks fill up, certificates expire. Monitoring and alerting catch most issues before they become outages, but you need someone available to respond.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Infrastructure improvements</strong>: 2 to 4 hours per month initially, decreasing over time. Setting up monitoring dashboards, optimizing backup schedules, tuning performance.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Budget 4 to 8 hours per month for the first 3 months, then 2 to 4 hours per month once everything is stable. At $100/hour fully loaded developer cost, that is $200 to $800 per month in engineering time. Add that to your VPS cost and compare against Heroku. For most teams spending $500+ per month on Heroku, self-hosting still saves $200 to $1,000 per month even after accounting for engineering time.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The alternative: hire a DevOps consultancy to handle the migration and ongoing maintenance. A managed DevOps service typically costs $2,000 to $5,000 per month, which includes the migration, server management, monitoring, and incident response. For teams that want the cost savings of self-hosting without the operational burden, this is the sweet spot.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Making the switch</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Heroku served the industry well for over a decade. It proved that developer experience matters and that deployment should be simple. But the industry has caught up. Docker, Traefik, and CI/CD pipelines deliver the same developer experience at a fraction of the cost. The tools are mature, well-documented, and battle-tested by millions of teams.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If your Heroku bill is growing faster than your revenue, it is time to evaluate self-hosting. The migration is less complex than you think, the cost savings are real, and the operational overhead is manageable for any team with basic Docker knowledge.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Want to understand what a self-hosted platform looks like for your team? Learn about our{" "}
                  <Link href="/platform-engineering" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    platform engineering
                  </Link>
                  {" "}approach or explore{" "}
                  <Link href="/managed-devops" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    managed DevOps
                  </Link>
                  {" "}if you want the savings without the operational work.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-t border-foreground/[0.08] pt-8 mt-8">
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    Related reading:{" "}
                    <Link href="/blog/docker-compose-in-production" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                      Docker Compose in production
                    </Link>
                    {" "}and{" "}
                    <Link href="/blog/how-much-does-devops-cost" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                      how much does DevOps cost
                    </Link>.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </article>

      <BlogEmailCapture />

      <CTASection
        headline="Ready to cut your hosting bill by 80%?"
        subtext="We migrate teams from Heroku to self-hosted platforms with zero downtime."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
