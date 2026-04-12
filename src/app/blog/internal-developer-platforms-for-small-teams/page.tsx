import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import BlogEmailCapture from "@/components/BlogEmailCapture";

export const metadata: Metadata = {
  title: "Internal Developer Platforms for Small Teams: A Practical Guide (2026)",
  description:
    "How to build an internal developer platform (IDP) for teams with 2-30 developers. Components, phased approach, enterprise vs small-team comparison, and common mistakes to avoid.",
  alternates: {
    canonical: "https://kenitech.io/blog/internal-developer-platforms-for-small-teams",
  },
  openGraph: {
    title: "Internal Developer Platforms for Small Teams: A Practical Guide",
    description:
      "The right-sized IDP for teams with 2-30 developers. Components, phased build approach, and common mistakes.",
    url: "https://kenitech.io/blog/internal-developer-platforms-for-small-teams",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Internal Developer Platforms for Small Teams: A Practical Guide (2026)",
  description: "How to build an internal developer platform (IDP) for teams with 2-30 developers.",
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  image: "https://kenitech.io/blog/internal-developer-platforms-for-small-teams/opengraph-image",
  author: { "@type": "Person", name: "Mikel Martin", url: "https://www.linkedin.com/in/mikelmartin/" },
  publisher: {
    "@type": "Organization",
    name: "Keni Engineering",
    logo: { "@type": "ImageObject", url: "https://kenitech.io/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kenitech.io/blog/internal-developer-platforms-for-small-teams",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kenitech.io" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://kenitech.io/blog" },
    { "@type": "ListItem", position: 3, name: "Internal Developer Platforms for Small Teams", item: "https://kenitech.io/blog/internal-developer-platforms-for-small-teams" },
  ],
};

export default function InternalDeveloperPlatformsForSmallTeams() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article>
        <section className="py-20 md:py-48">
          <Container>
            <div className="max-w-[640px] mx-auto">
              <FadeIn>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">PLATFORM ENGINEERING</p>
                <h1 className="text-heading text-foreground font-light tracking-wide mb-8">
                  Internal developer platforms for small teams: a practical guide
                </h1>
                <p className="text-label text-muted/60 font-light">April 2, 2026 &middot; 11 min read</p>
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
                  Internal developer platforms are one of the biggest trends in software engineering right now. Backstage, Kratix, Humanitec. The conference talks, blog posts, and vendor pitches all focus on the same profile: large enterprises with 100+ engineers, dozens of microservices, and dedicated platform teams. If that is not your company, you might assume IDPs are not for you.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  That assumption is wrong. The concept of an internal developer platform applies to teams of any size. A 5-person startup benefits from automated deploys, consistent environments, and self-service monitoring just as much as a 500-person enterprise. The difference is scope. You do not need a portal with a service catalog, golden paths, and scorecards. You need a set of tools and automation that lets your developers ship reliably without tribal knowledge or manual processes. This guide is about building that right-sized version.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">What is an internal developer platform</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  An internal developer platform (IDP) is the set of tools, automation, and infrastructure that lets developers go from code to production without filing tickets, SSHing into servers, or asking someone else to deploy for them. It is the paved road. Developers write code, push it, and the platform handles the rest: building, testing, deploying, monitoring, and scaling.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  At its core, an IDP answers a simple question: &quot;How does code running on my laptop get to production?&quot; If the answer involves manual steps, undocumented procedures, or a single person who knows how everything works, you do not have a platform. You have a process that breaks when that person is on vacation.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The key insight is that every team already has a platform, whether they realize it or not. It might be a collection of bash scripts, a shared document with deployment steps, or knowledge that lives entirely in one engineer&apos;s head. An IDP makes that implicit platform explicit, automated, and maintainable.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Why small teams need an IDP too</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The common objection: &quot;We only have 5 developers. We do not need a platform.&quot; But small teams are actually more vulnerable to the problems an IDP solves. A 200-person company can absorb one engineer spending a day debugging a deployment. A 5-person team cannot.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Tribal knowledge is a single point of failure</strong>. When only one person knows how to deploy, that person becomes a bottleneck. They cannot take vacation, get sick, or leave the company without the team losing a critical capability. An IDP encodes that knowledge in automation.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Manual processes do not scale</strong>. Deploying manually works when you deploy once a week. When you want to deploy multiple times a day, manual steps become the bottleneck. An IDP removes humans from the deployment path.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Consistency prevents outages</strong>. When every deployment follows the same automated path, you eliminate the &quot;I forgot to run the migration&quot; class of failures. Environments are identical because the same automation builds them.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Developer onboarding accelerates</strong>. A new developer should be able to deploy on their first day. With an IDP, they push code and the platform does the rest. Without one, they spend their first week learning undocumented deployment rituals.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Small teams need to move fast</strong>. Every hour spent on manual deployment, debugging environment differences, or recovering from a bad deploy is an hour not spent building product. An IDP gives that time back.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The components of a small-team IDP</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  A small-team IDP does not need every component that an enterprise platform has. It needs the components that solve real problems for teams with 2 to 30 developers. Here is what that looks like in practice.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Source control and branching strategy</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Git is the foundation. Every line of code, every Dockerfile, every CI configuration, every infrastructure definition lives in version control. But the branching strategy matters as much as the tool. For small teams, keep it simple: trunk-based development with short-lived feature branches. No release branches, no develop branch, no gitflow complexity. Developers create a branch, open a PR, get a review, merge to main. Main is always deployable. Branch protection rules enforce this: require at least one approval and passing CI checks before merging.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">CI/CD pipelines</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The CI/CD pipeline is the backbone of any IDP. On every push: build the code, run the tests, scan for vulnerabilities, build a container image, push it to a registry. On merge to main: deploy to staging automatically. On tag or manual approval: deploy to production. The pipeline should be fast. Under 10 minutes for the full cycle. If it takes longer, developers will find ways around it. GitHub Actions works well for teams on GitHub. Woodpecker CI is a strong self-hosted option if you need to run builds on your own infrastructure. GitLab CI if you are in that ecosystem.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Container orchestration</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This is where small teams get tripped up. The industry conversation is dominated by Kubernetes, but for teams with fewer than 30 developers running fewer than 20 services, Docker Compose is the right choice. It is simple, well-documented, and every developer already knows it. Define your services in a <code className="text-foreground text-sm">docker-compose.yml</code> file. Run them on a single server or a small cluster. Add services as your product grows. The upgrade path to Kubernetes exists when you need it, but most teams never will.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Reverse proxy and TLS</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Every service needs to be reachable over HTTPS. Traefik is the best option for container-based environments. It automatically discovers your Docker services, generates Let&apos;s Encrypt certificates, and routes traffic. No manual certificate management. No Nginx configuration files to maintain. Add a new service to your Docker Compose file and Traefik picks it up automatically. That is the kind of self-service infrastructure that makes an IDP work.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Monitoring and dashboards</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  You need to know what is happening in production. Prometheus collects metrics from your services, your servers, and your infrastructure. Grafana visualizes them and sends alerts when things go wrong. Together, they answer: Is the service up? How fast is it responding? Is the server running out of disk or memory? Where are the errors coming from? Set up dashboards for the basics (CPU, memory, disk, HTTP response codes) and expand from there. The important thing is not having perfect dashboards on day one. It is having any visibility at all. Most small teams have zero production monitoring until something breaks.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Secrets management</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  API keys, database passwords, and tokens must never live in your code repository. Not in <code className="text-foreground text-sm">.env</code> files committed to Git, not baked into Docker images, not in CI logs. For small teams, 1Password with its CLI and integrations is a practical starting point. Docker secrets work for runtime injection. The pattern is simple: store secrets in a secure vault, inject them at deploy time, rotate them regularly. Every secret in your codebase is a future security incident.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Backup and disaster recovery</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Databases need automated daily backups stored in a different location than your primary data. Restic is an excellent open-source option: encrypted, deduplicated backups to S3, Backblaze, or any cloud storage. Pair it with Prometheus metrics so you get alerted when a backup fails. Test your restores monthly. A backup you have never restored is not a backup. Document the restore procedure so any team member can execute it. When disaster strikes is not the time to figure out how to get your data back.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Deployment orchestration</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The CI pipeline builds your images. Something needs to deploy them. For simple setups, Watchtower watches your container registry and automatically pulls new images when they are available. For more control, tools like Komodo provide a deployment dashboard where you can see what is running, trigger deployments, and roll back. The key requirement: deploying should be a single action (a git tag, a button click, or a merged PR), not a series of manual steps.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Enterprise IDP vs small-team IDP</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The concepts are identical. The tools are different. Enterprise platforms solve problems of scale and organizational complexity. Small-team platforms solve problems of speed and simplicity. Here is how they compare across the core components.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Service catalog</strong>: enterprise uses Backstage with hundreds of registered services, golden paths, and scorecards. A small team uses a README in the repo and a Docker Compose file that documents every service.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Container orchestration</strong>: enterprise uses Kubernetes with ArgoCD, Crossplane, and custom operators. A small team uses Docker Compose on a VPS with Traefik for routing.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">CI/CD</strong>: enterprise uses complex multi-stage pipelines with canary releases, feature flags, and progressive delivery. A small team uses GitHub Actions or Woodpecker with build, test, and deploy stages.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Infrastructure provisioning</strong>: enterprise uses Terraform with Crossplane and custom controllers for self-service. A small team uses Terraform or Ansible with a handful of modules.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Monitoring</strong>: enterprise uses Datadog or New Relic with distributed tracing, custom metrics, and SLO dashboards across hundreds of services. A small team uses Prometheus and Grafana with dashboards for CPU, memory, HTTP errors, and response times.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Secrets</strong>: enterprise uses HashiCorp Vault with dynamic secrets, auto-rotation, and audit logging. A small team uses 1Password or AWS Secrets Manager with manual rotation.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Cost</strong>: an enterprise IDP costs $500K+ per year in tooling and platform team salaries. A small-team IDP costs $100 to $500/month in infrastructure and uses tools the team already knows.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The principle is the same: give developers a self-service path from code to production. The implementation just needs to match the scale of your team.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">How to build one: a phased approach</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Do not try to build everything at once. A phased approach lets you get value quickly and iterate based on what your team actually needs. Here is a four-week plan that takes you from zero to a functional IDP.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Week 1: containerize your applications</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Write Dockerfiles for every service. Use multi-stage builds to keep images small. Create a <code className="text-foreground text-sm">docker-compose.yml</code> that defines your entire application stack: services, databases, message queues, caches. Every developer should be able to run the full stack locally with <code className="text-foreground text-sm">docker compose up</code>. Set up a container registry (GitHub Container Registry is free for public repos, affordable for private). Push images with semantic version tags.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Week 2: CI/CD pipeline</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Set up a CI pipeline that runs on every push: lint, test, build the container image, push to the registry. Add branch protection rules on main. Set up a CD pipeline that deploys to staging when code merges to main, and to production on a tag push or manual approval. Install Traefik as your reverse proxy with automatic Let&apos;s Encrypt certificates. At the end of week 2, merging a PR should automatically deploy the change to staging.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Week 3: monitoring and visibility</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Deploy Prometheus and Grafana. Add exporters for your servers (node exporter), your containers (cAdvisor), and your applications (instrument your code with Prometheus client libraries or use middleware). Create dashboards for the essentials: server health, container status, HTTP request rate, error rate, and response time. Set up alerting for critical conditions: service down, error rate above threshold, disk usage above 85%. At the end of week 3, you can see your production environment in a dashboard and get notified when something breaks.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h3 className="text-body-lg text-foreground font-light tracking-wide">Week 4: secrets and backup</h3>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Move all secrets out of your codebase and into a secrets manager. Update your CI/CD pipeline to inject secrets at deploy time. Set up automated database backups with Restic or your cloud provider&apos;s backup service. Test a restore to verify the backups work. Document the restore procedure. Add backup success/failure to your monitoring. At the end of week 4, you have a functional IDP: containerized applications, automated CI/CD, production monitoring, managed secrets, and tested backups.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  After the initial four weeks, the IDP grows with your team. Add features as you need them: centralized logging, infrastructure as code, deployment orchestration with Komodo, performance testing in CI. The platform is never &quot;done.&quot; It evolves alongside your product and your team.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Common mistakes</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  We have seen dozens of small teams attempt to build internal platforms. The failures follow predictable patterns.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Over-engineering with Kubernetes</strong>. A 5-person team running 3 services does not need a Kubernetes cluster. They need Docker Compose on a well-configured server. K8s adds operational overhead that consumes 30 to 40% of engineering time for small teams. Start simple. Graduate to K8s when the real limits of Compose force the move, not when a blog post says you should.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Under-investing in monitoring</strong>. No monitoring means you discover outages when customers complain. Prometheus and Grafana take a day to set up. The ROI is immediate: you catch problems before users do, and you have data for debugging instead of guessing.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Building custom tools when open source exists</strong>. Do not write your own deployment tool, your own monitoring system, or your own secret manager. The open-source ecosystem has mature, battle-tested options for every IDP component. Your engineering time is better spent on your product.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">No backup testing</strong>. Teams set up automated backups and never test restores. Then the day comes when they need to restore, and the backups are corrupted, incomplete, or stored in a format nobody knows how to use. Test restores monthly. Document the procedure.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Ignoring secrets management until a breach</strong>. API keys in Git, database passwords in <code className="text-foreground text-sm">.env</code> files, tokens in CI logs. Every small team has this problem until they decide to fix it. Fix it before an incident forces you to. The cleanup after a credential leak is far more expensive than setting up 1Password or Docker secrets.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Treating the IDP as a one-time project</strong>. An IDP is not something you build once and forget. It needs maintenance, updates, and evolution as your team and product grow. Allocate ongoing time for platform work. Even 10% of engineering time dedicated to platform improvements compounds significantly over months.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The bottom line</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  An internal developer platform is not a product you buy or a massive infrastructure project you undertake. It is the set of tools and automation that lets your team ship reliably. For small teams, that means Docker Compose, a CI/CD pipeline, Traefik, Prometheus, Grafana, a secrets manager, and tested backups. You can build the foundation in four weeks and grow it from there.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The teams that invest in their developer platform early ship faster, onboard new developers in days instead of weeks, and spend their time building product instead of fighting infrastructure. The teams that delay it pay the cost in deployment failures, late-night debugging sessions, and the slow accumulation of tribal knowledge that makes every departure a crisis.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Want help building your IDP? Learn about our{" "}
                  <Link href="/platform-engineering" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    platform engineering
                  </Link>
                  {" "}service, or start with an{" "}
                  <Link href="/infrastructure-audit" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    infrastructure audit
                  </Link>
                  {" "}to see where your team stands today. For hands-on implementation, our{" "}
                  <Link href="/devops-consulting" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    DevOps consulting
                  </Link>
                  {" "}team can build your IDP alongside your developers.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-t border-foreground/[0.08] pt-8 mt-8">
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    Related reading: see our comparison of{" "}
                    <Link href="/blog/kubernetes-vs-docker-compose" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                      Kubernetes vs Docker Compose
                    </Link>
                    {" "}for a deeper dive on container orchestration, or our{" "}
                    <Link href="/blog/devops-checklist-for-startups" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                      DevOps checklist for startups
                    </Link>
                    {" "}for a broader operational foundation.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </article>

      <BlogEmailCapture />

      <CTASection
        headline="Ready to build your internal developer platform?"
        subtext="We design and implement right-sized IDPs for teams with 2-30 developers."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
