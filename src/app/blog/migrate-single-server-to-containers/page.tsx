import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import BlogEmailCapture from "@/components/BlogEmailCapture";

export const metadata: Metadata = {
  title: "How to Migrate from a Single Server to Containers Without Downtime",
  description:
    "A step-by-step guide to containerizing your application from a bare-metal or VM setup. Covers Dockerfile creation, Docker Compose, database migration, reverse proxy setup, and zero-downtime cutover for teams with 2 to 30 developers.",
  alternates: {
    canonical: "https://kenitech.io/blog/migrate-single-server-to-containers",
  },
  openGraph: {
    title: "How to Migrate from a Single Server to Containers Without Downtime",
    description:
      "A step-by-step guide to containerizing your application from a bare-metal or VM setup.",
    url: "https://kenitech.io/blog/migrate-single-server-to-containers",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Migrate from a Single Server to Containers Without Downtime",
  description: "A step-by-step guide to containerizing your application from a bare-metal or VM setup.",
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  image: "https://kenitech.io/blog/migrate-single-server-to-containers/opengraph-image",
  author: { "@type": "Person", name: "Mikel Martin", url: "https://www.linkedin.com/in/mikelm20/" },
  publisher: {
    "@type": "Organization",
    name: "Keni Engineering",
    logo: { "@type": "ImageObject", url: "https://kenitech.io/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kenitech.io/blog/migrate-single-server-to-containers",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kenitech.io" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://kenitech.io/blog" },
    { "@type": "ListItem", position: 3, name: "Migrate Single Server to Containers", item: "https://kenitech.io/blog/migrate-single-server-to-containers" },
  ],
};

export default function MigrateSingleServerToContainers() {
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
                  How to migrate from a single server to containers without downtime
                </h1>
                <p className="text-label text-muted/60 font-light">April 2, 2026 &middot; 11 min read</p>
                <a href="https://www.linkedin.com/in/mikelm20/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 mt-3 group">
                  <img src="/team/mikel.jpg" alt="Mikel Martin" className="w-6 h-6 rounded-full object-cover" />
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
                  You have a single server running your app directly. Maybe it is a bare Ubuntu box with nginx, your application process, and a database. It works. Deploys happen over SSH, someone runs a script or pulls the latest code, restarts the service, and hopes for the best. There is no rollback plan beyond &quot;revert the commit and restart again.&quot;
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This setup gets you surprisingly far. But eventually you hit the wall. A deploy breaks something and you cannot roll back cleanly. A new developer joins and spends two days trying to reproduce the production environment locally. The server is running out of memory and you cannot scale without rebuilding everything. If that server dies, your business goes with it.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Containerizing your application solves these problems. But the migration itself is the scary part. You have a running production system serving real users, and you need to move it to a completely different deployment model without breaking anything. This guide walks through exactly how to do that.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Why containerize</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Before diving into the how, it is worth understanding what you actually gain from containers. This is not about following trends. Containers solve specific, real problems that teams running on bare servers deal with every day.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Reproducible environments</strong>: your Dockerfile defines exactly what the application needs. Every environment, from your laptop to staging to production, runs the same image. No more &quot;works on my machine.&quot;
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Easy rollbacks</strong>: every deploy creates a new image with a tag. Rolling back means pointing to the previous image tag. No git reverts, no hoping the old code still works with the current state of the filesystem.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Isolated services</strong>: your app, database, cache, and background workers each run in their own container with their own dependencies. A memory leak in your background worker does not take down your web server.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Portable across providers</strong>: containers run the same way on any Linux server. Moving from one hosting provider to another means moving your Compose file and images, not rewriting deploy scripts.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Scalability</strong>: need more capacity? Run more instances of the container behind a load balancer. No need to provision and configure a new server from scratch.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The cost is complexity upfront. You need to learn Docker, write Dockerfiles, set up a container orchestration layer (even if it is just Docker Compose), and rethink how your application handles state. But once you are through the migration, every deploy after that is simpler, safer, and faster.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Before you start: audit everything</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The number one reason container migrations fail is incomplete understanding of what is running on the server. Before you write a single line of Dockerfile, you need a complete inventory of your production environment.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  SSH into your server and document everything. List all running processes. Check systemd services. Look at cron jobs. Find every database, every background worker, every scheduled task. Check what ports are open and what is listening on them.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Application processes</strong>: what runs your app? Node, Python, Ruby, Go? How is it managed, with systemd, supervisor, or PM2? What environment variables does it need?
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Databases</strong>: PostgreSQL, MySQL, Redis, MongoDB? Are they running locally on the same server or externally? What is the data directory? How are backups handled?
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Cron jobs</strong>: check <code className="text-foreground text-sm">crontab -l</code> for each user. Check <code className="text-foreground text-sm">/etc/cron.d/</code> and <code className="text-foreground text-sm">/etc/crontab</code>. These are the tasks people forget about until they stop running.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">File uploads and persistent data</strong>: where does the application write files? User uploads, generated reports, logs. Anything written to the local filesystem needs a plan for container volumes or object storage.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Background workers</strong>: queue processors, email senders, data sync tasks. These need their own containers.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Reverse proxy and TLS</strong>: how is nginx configured? What domains point to this server? How are TLS certificates managed, with Let&apos;s Encrypt, manual certificates, or a CDN?
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Write all of this down. You will use this inventory as your checklist during the migration. Every item on this list needs a corresponding container, volume, or external service in your new setup.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The migration plan</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  A clean migration happens in four phases. Each phase is independently testable, which means you can pause, verify, and continue without putting production at risk.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Phase 1: Containerize locally</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Start by getting your application running in containers on your local machine. This is where you will spend most of your time, and that is fine. Getting the Dockerfile right is the foundation of everything else.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Write a Dockerfile for your application. Start with an official base image that matches your runtime. Use multi-stage builds to keep the final image small: one stage for building dependencies and compiling assets, another for the runtime. Pin your base image versions. Do not use <code className="text-foreground text-sm">latest</code> tags. They will break your builds when the upstream image changes.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Create a <code className="text-foreground text-sm">docker-compose.yml</code> that defines your entire stack. Your application, your database, your cache, your background workers. Each gets its own service. Define volumes for persistent data (database files, uploads). Define networks so services can communicate.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Test locally until the containerized version matches your production behavior exactly. Seed the database with a copy of production data (anonymized if needed). Run through your application&apos;s core workflows. Check that background jobs process correctly. Verify cron-equivalent tasks run on schedule. This is the phase where you catch most problems, and fixing them here costs nothing.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Phase 2: Set up the new infrastructure</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  With your containerized app working locally, prepare the server that will run it. You can use a new VPS or your existing server. A new server is cleaner and lets you run both old and new in parallel during cutover. If budget is tight, you can install Docker alongside your existing setup on the same server.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Install Docker and Docker Compose on the server. Harden the server: disable root SSH, set up key-based authentication, configure a firewall. These are basics that many bare-metal setups skip.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Set up Traefik as your reverse proxy. Traefik auto-discovers Docker containers and routes traffic to them. It handles TLS certificates through Let&apos;s Encrypt automatically. No more manually configuring nginx server blocks or renewing certificates. When you deploy a new container with the right labels, Traefik picks it up and starts routing traffic to it.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Add monitoring from day one. Prometheus scrapes metrics from your containers and server. Grafana gives you dashboards to see CPU, memory, disk, request latency, and error rates. You will need this during and after the cutover to confirm the new setup is healthy. Do not skip this step. Flying blind during a migration is how outages happen.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Phase 3: Migrate the database</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The database is the hardest part of any migration. It is stateful, it is the source of truth, and data loss is unacceptable. Treat this phase with extra care.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Dump your production database using the appropriate tool for your engine. For PostgreSQL, use <code className="text-foreground text-sm">pg_dump</code>. For MySQL, use <code className="text-foreground text-sm">mysqldump</code>. Transfer the dump to the new server. Restore it into the containerized database instance. Verify row counts, check critical tables, and run your application&apos;s health checks against the restored data.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If your application has low traffic, you can do this with a brief maintenance window. Put the old application in read-only mode or show a maintenance page, dump the database, restore it, cut over, and bring the new application up. Total downtime can be minutes.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  For applications that cannot afford any downtime, set up database replication from the old server to the new one. Let it sync, then switch the application to the new database. The specifics depend on your database engine, but the pattern is the same: replicate first, switch later.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Always test the restore before the real migration. Dump the database, restore it somewhere, run your app against it. If this fails in testing, it will fail in production. Find the problems now.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Phase 4: Cut over with zero downtime</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This is the moment everything comes together. Your containerized application is running on the new server. The database is migrated and verified. Monitoring is in place. Now you switch traffic.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Before the cutover day, lower your DNS TTL to something short, like 60 seconds. Do this at least 48 hours in advance so the old, longer TTL has expired everywhere. This means when you change the DNS record, clients will pick up the new IP quickly instead of caching the old one for hours.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Run both the old and new servers in parallel. Point the DNS to the new server. Watch your monitoring dashboards. Check error rates, response times, and resource usage on the new server. Compare them with your baseline from the old server.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Keep the old server running for 24 to 48 hours after the cutover. If something goes wrong, you can point DNS back to the old server and be up in 60 seconds (because of the low TTL). This is your safety net. Only decommission the old setup once you are confident the new one is stable.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Handling stateful services</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Containers are designed to be stateless and ephemeral. Your application probably has stateful components that need special treatment.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Databases</strong>: run in a container with a named volume for data persistence. The volume survives container restarts and updates. Set up automated backups with a tool like restic that backs up the volume data to offsite storage. Test your restore process regularly.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">File uploads</strong>: if your application stores user uploads on the local filesystem, you have two options. Use a Docker volume to persist the upload directory across container restarts. Or, better, migrate to object storage (S3 or an S3-compatible service like MinIO). Object storage is more durable, scalable, and does not tie you to a single server.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Cron jobs</strong>: do not install cron inside your application container. Instead, run a separate container for scheduled tasks. You can use a lightweight scheduler, use Docker&apos;s built-in restart policies with a sleep loop, or run the cron container as a sidecar that executes commands in the main application container.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Background workers</strong>: these get their own container, running the same image as your application but with a different entrypoint command. A queue processor might run <code className="text-foreground text-sm">python manage.py runworker</code> instead of <code className="text-foreground text-sm">gunicorn</code>. Same code, different process, separate container. If the worker crashes, it restarts independently without affecting the web server.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Session storage</strong>: if your app stores sessions on disk, move them to Redis or your database. File-based sessions do not work well when containers can be replaced at any time.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Common mistakes</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  We have seen dozens of container migrations. These are the mistakes that come up again and again.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Containerizing the database too early</strong>: running PostgreSQL or MySQL in a container is fine, but some teams are more comfortable with a managed database service. If your team does not have experience managing containerized databases, consider using a managed service (RDS, Cloud SQL, or a managed offering from your hosting provider) and only containerize the application. You can always containerize the database later.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Not testing backups</strong>: you set up automated database backups. Great. But have you tested restoring from one? A backup you cannot restore from is not a backup. Run a restore drill before the migration and on a regular schedule after.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Skipping monitoring</strong>: deploying containers without monitoring means you will not know when something is wrong until your users tell you. At minimum, you need container health checks, resource usage metrics, and uptime alerts. Set this up before the migration, not after.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Trying to containerize everything at once</strong>: if your server runs multiple applications, do not migrate all of them simultaneously. Pick the simplest one first. Get it running in containers successfully. Learn from the process. Then migrate the next one. Each migration gets easier as your team builds confidence and your infrastructure patterns solidify.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Ignoring image size</strong>: a 2GB Docker image built on <code className="text-foreground text-sm">ubuntu:latest</code> with every dependency installed will work, but it will be slow to build, slow to push, and slow to deploy. Use multi-stage builds, use Alpine or slim base images, and clean up build artifacts. A well-built image for a typical web application should be under 200MB.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Hardcoding configuration</strong>: environment variables and config files should not be baked into the image. Use environment variables in your Compose file or a <code className="text-foreground text-sm">.env</code> file. The same image should be deployable to development, staging, and production with different configuration.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The before and after</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  It is worth painting the picture of what changes day to day once you are running on containers.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Before: you SSH into the server. Pull the latest code with git. Run the build command. Restart the application process with systemd or supervisor. Check the logs to see if it started. Hope nginx is still routing correctly. If something breaks, SSH back in, check the logs, revert the code, restart again. If the server dies, you are rebuilding from memory and old notes.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  After: you push code to your repository. CI builds a Docker image, runs tests, and tags it. CD deploys the new image to your server. Traefik detects the new container and routes traffic to it. Prometheus confirms the new container is healthy and response times are normal. Grafana dashboards show the deploy as a vertical line on your metrics graphs. If something is wrong, you deploy the previous image tag. The rollback takes seconds, not minutes.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  A new developer joins the team. They clone the repo, run <code className="text-foreground text-sm">docker compose up</code>, and have the entire application stack running locally in minutes. No installing specific versions of Node, Python, or PostgreSQL. No following a 20-step setup guide that is already out of date. The Compose file is the setup guide.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  You need to move to a different hosting provider. You spin up a new server, install Docker, transfer your Compose file, pull your images, and start the containers. The migration takes hours instead of days. Your deploy scripts, monitoring configuration, and reverse proxy setup all move with you because they are defined in code, not in manual server configuration.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Getting started</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The migration from a single server to containers is one of the highest-leverage infrastructure changes a small team can make. It takes planning, careful execution, and attention to stateful services. But the result is a deployment pipeline that is faster, safer, and reproducible.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Start with the audit. Document what you have. Containerize locally. Test until it matches production. Then set up the infrastructure and cut over. Each phase is a clear milestone with its own validation criteria. You do not need to rush through it.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If you want help planning or executing this migration, that is exactly what we do. Our{" "}
                  <Link href="/infrastructure-audit" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    infrastructure audit
                  </Link>
                  {" "}starts with a full inventory of your current setup and produces a containerization plan. Our{" "}
                  <Link href="/devops-consulting" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    DevOps consulting
                  </Link>
                  {" "}team can handle the migration end to end. Or explore our{" "}
                  <Link href="/platform-engineering" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    platform engineering
                  </Link>
                  {" "}services to see how containers fit into a complete internal developer platform.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-t border-foreground/[0.08] pt-8 mt-8">
                  <h2 className="text-xl font-light text-foreground tracking-wide mb-6">Related reading</h2>
                  <ul className="space-y-3">
                    <li><Link href="/blog/docker-compose-in-production" className="text-foreground-secondary hover:text-foreground transition-colors">Docker Compose in production: patterns that actually work</Link></li>
                    <li><Link href="/blog/docker-vs-podman" className="text-foreground-secondary hover:text-foreground transition-colors">Docker vs Podman: which container runtime should you use in 2026</Link></li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </article>

      <BlogEmailCapture />

      <CTASection
        headline="Ready to containerize your application?"
        subtext="We will audit your server, plan the migration, and handle the cutover."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
