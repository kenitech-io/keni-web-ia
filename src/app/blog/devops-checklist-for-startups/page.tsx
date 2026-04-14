import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import BlogEmailCapture from "@/components/BlogEmailCapture";

export const metadata: Metadata = {
  title: "The DevOps Checklist for Startups: 15 Things to Get Right Before You Scale",
  description:
    "A practical 15-point DevOps checklist for startups. Version control, CI/CD, containers, secrets management, monitoring, IaC, and more. What to implement, why it matters, and which tools to use.",
  alternates: {
    canonical: "https://kenitech.io/blog/devops-checklist-for-startups",
  },
  openGraph: {
    title: "The DevOps Checklist for Startups: 15 Things to Get Right Before You Scale",
    description:
      "A practical 15-point DevOps checklist covering the foundations every startup needs before scaling.",
    url: "https://kenitech.io/blog/devops-checklist-for-startups",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The DevOps Checklist for Startups: 15 Things to Get Right Before You Scale",
  description: "A practical 15-point DevOps checklist covering the foundations every startup needs before scaling.",
  datePublished: "2026-03-19",
  dateModified: "2026-03-19",
  image: "https://kenitech.io/blog/devops-checklist-for-startups/opengraph-image",
  author: { "@type": "Person", name: "Mikel Martin", url: "https://www.linkedin.com/in/mikelm20/" },
  publisher: {
    "@type": "Organization",
    name: "Keni Engineering",
    logo: { "@type": "ImageObject", url: "https://kenitech.io/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kenitech.io/blog/devops-checklist-for-startups",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kenitech.io" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://kenitech.io/blog" },
    { "@type": "ListItem", position: 3, name: "DevOps Checklist for Startups", item: "https://kenitech.io/blog/devops-checklist-for-startups" },
  ],
};

export default function DevOpsChecklistForStartups() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article>
        <section className="pt-28 pb-14 md:pt-36 md:pb-16">
          <Container>
            <div className="max-w-[640px] mx-auto">
              <FadeIn>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-4">DEVOPS</p>
                <h1 className="text-heading text-foreground font-light tracking-wide mb-4">
                  The DevOps checklist for startups: 15 things to get right before you scale
                </h1>
                <p className="text-label text-muted/60 font-light">March 19, 2026 &middot; 10 min read</p>
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
                  Scaling a product is hard. Scaling a product on top of fragile infrastructure is a nightmare. Most startups know they need &quot;better DevOps&quot; but do not know where to start. This checklist covers the 15 foundations that every startup should have in place before scaling. Not aspirational best practices. The practical minimum.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">1. Version control with Git</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Every line of code, configuration, and infrastructure definition should live in Git. Not just application code. Dockerfiles, CI configs, Terraform modules, database migrations. If it affects how your software runs, it belongs in version control. Use GitHub or GitLab. Enforce branch protection on main: require pull requests, at least one review, and passing CI checks before merging.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">2. CI pipeline</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Every push to your repository should trigger an automated pipeline that builds your code, runs tests, and reports the result. No exceptions. If a developer can merge broken code into main, your CI is not doing its job. GitHub Actions is the easiest starting point for most teams. GitLab CI if you are already on GitLab. Jenkins if you need maximum flexibility and do not mind the maintenance.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">3. Automated testing</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  You do not need 100% coverage. You need tests that catch the bugs that matter. Start with integration tests for your critical paths: user signup, payment processing, the core feature that generates revenue. Add unit tests for complex business logic. Run them in CI on every push. A test suite that takes more than 10 minutes will get ignored, so keep it fast.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">4. Containerization</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Docker is the standard. Containerize your applications so they run identically in development, staging, and production. A well-written Dockerfile eliminates &quot;works on my machine&quot; problems. Use multi-stage builds to keep images small. Pin your base image versions. Do not run containers as root.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">5. Secrets management</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  API keys, database passwords, and tokens must never be in your code repository. Not in environment files committed to Git, not in Docker images, not in CI logs. Use a secrets manager: 1Password for small teams, HashiCorp Vault for complex setups, or your cloud provider&apos;s native solution (AWS Secrets Manager, GCP Secret Manager). Inject secrets at runtime, never at build time.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">6. Monitoring and alerting</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  You need to know when your application is down before your users tell you. At minimum: uptime monitoring (is the service responding?), error rate tracking, and response time metrics. Grafana with Prometheus is the open-source standard. Datadog if you want a managed solution. Set up alerts for the things that actually matter: 5xx error spikes, response time above your SLA, disk usage above 80%. Do not alert on everything or you will ignore everything.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">7. Backup strategy</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Databases must be backed up automatically, daily at minimum. Store backups in a different region or provider than your primary data. Test your restores regularly. A backup you have never restored is not a backup, it is a hope. Document the restore procedure so any team member can execute it under pressure.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">8. Infrastructure as Code</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Every server, database, load balancer, and DNS record should be defined in code. Terraform is the industry standard for cloud infrastructure. The goal: if your entire infrastructure disappears, you can recreate it by running <code className="text-foreground text-sm">terraform apply</code>. No clicking through cloud consoles, no undocumented manual steps. Start with your core infrastructure (VPC, compute, database) and expand from there.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">9. Documentation</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Document three things at minimum. How to set up the development environment (should take less than 30 minutes for a new developer). How to deploy to production (every step, including rollback). Architecture overview: what services exist, how they communicate, where data lives. Keep docs next to the code in the repository. Docs in a wiki nobody visits are docs that do not exist.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">10. Incident response plan</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  When production goes down at 2am, you need a plan, not a panic. Define: who gets paged (use PagerDuty or Opsgenie for on-call rotation), how to communicate with stakeholders (status page, Slack channel), and runbooks for common failures (database connection issues, high memory usage, deployment rollback). Practice it. Run a game day where you simulate a failure and work through the response.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">11. Centralized logging</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  SSH-ing into servers to read log files does not scale. Aggregate logs from all services into a central location where you can search and filter. The ELK stack (Elasticsearch, Logstash, Kibana) is the open-source option. Grafana Loki is lighter weight and works well with Prometheus. Use structured logging (JSON) so you can query by fields like user ID, request ID, or error type.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">12. SSL/TLS everywhere</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Every external-facing endpoint must use HTTPS. No exceptions. Let&apos;s Encrypt provides free certificates with automatic renewal. Use a reverse proxy (Traefik, Nginx) to terminate TLS. Internal service-to-service communication should also be encrypted, especially if your services communicate across the public internet. Certificate expiration is a preventable outage. Automate renewal and alert 30 days before expiration.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">13. Dependency updates</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Outdated dependencies are security vulnerabilities waiting to happen. Enable Dependabot (GitHub) or Renovate to automatically create PRs for dependency updates. Review and merge security patches within 48 hours. Schedule a regular cadence (weekly or biweekly) for reviewing non-critical updates. Pin your dependency versions so updates are intentional, not accidental.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">14. Access control</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Principle of least privilege: every person and service should have the minimum access needed to do their job. No shared credentials. No root access for everyday operations. Use SSO for your cloud provider. Enable MFA on every account, no exceptions. Review access quarterly and revoke immediately when someone leaves the team. Use IAM roles for services instead of long-lived API keys.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">15. Deployment strategy</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Define how code gets from &quot;merged to main&quot; to &quot;running in production.&quot; At minimum, have a one-command deploy process and a one-command rollback. Blue-green or rolling deployments let you update without downtime. Start simple: deploy from CI when a tag is pushed to main. Add complexity (canary releases, feature flags) only when the simple approach stops working. Always be able to roll back in under 5 minutes.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Where to start</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  You do not need all 15 on day one. Prioritize in this order: version control (1), CI pipeline (2), automated testing (3), secrets management (5), and monitoring (6). These five give you the biggest immediate impact. Add the rest as you grow.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Not sure where your team stands on this checklist? Our{" "}
                  <Link href="/infrastructure-audit" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    infrastructure audit
                  </Link>
                  {" "}evaluates your setup against these foundations and more. Or try our{" "}
                  <Link href="/healthcheck" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    free healthcheck
                  </Link>
                  {" "}to get a quick score. Need hands-on help implementing? That is what our{" "}
                  <Link href="/devops-consulting" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    DevOps consulting
                  </Link>
                  {" "}is for.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>
      </article>

      <BlogEmailCapture />

      <CTASection
        headline="How many of these 15 does your team have covered?"
        subtext="Our infrastructure audit scores your setup and gives you a prioritized action plan."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
