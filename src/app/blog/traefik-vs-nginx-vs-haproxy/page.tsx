import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import BlogEmailCapture from "@/components/BlogEmailCapture";

export const metadata: Metadata = {
  title: "Traefik vs Nginx vs HAProxy: Choosing a Reverse Proxy in 2026",
  description:
    "A practical comparison of Traefik, Nginx, and HAProxy for small to mid-sized teams. Auto-discovery, configuration style, performance, TLS, and when to use each one.",
  alternates: {
    canonical: "https://kenitech.io/blog/traefik-vs-nginx-vs-haproxy",
  },
  openGraph: {
    title: "Traefik vs Nginx vs HAProxy: Choosing a Reverse Proxy",
    description:
      "A practical comparison of Traefik, Nginx, and HAProxy for small to mid-sized teams.",
    url: "https://kenitech.io/blog/traefik-vs-nginx-vs-haproxy",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Traefik vs Nginx vs HAProxy: Choosing a Reverse Proxy in 2026",
  description:
    "A practical comparison of Traefik, Nginx, and HAProxy for small to mid-sized teams.",
  datePublished: "2026-03-07",
  dateModified: "2026-03-07",
  image: "https://kenitech.io/blog/traefik-vs-nginx-vs-haproxy/opengraph-image",
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
    "@id": "https://kenitech.io/blog/traefik-vs-nginx-vs-haproxy",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kenitech.io" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://kenitech.io/blog" },
    { "@type": "ListItem", position: 3, name: "Traefik vs Nginx vs HAProxy", item: "https://kenitech.io/blog/traefik-vs-nginx-vs-haproxy" },
  ],
};

export default function TraefikVsNginxVsHAProxy() {
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
                  Traefik vs Nginx vs HAProxy: choosing a reverse proxy in 2026
                </h1>
                <p className="text-label text-muted/60 font-light">March 7, 2026 &middot; 8 min read</p>
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
                  Every internal development platform needs a reverse proxy. It
                  sits in front of your services, handles TLS termination, routes
                  traffic, and acts as the single entry point to your
                  infrastructure. The three dominant options for self-hosted
                  setups are Traefik, Nginx, and HAProxy. Each one makes
                  different tradeoffs.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The short version</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Traefik</strong>: best for
                    Docker-native and container-first environments. Auto-discovers services,
                    handles Let&apos;s Encrypt out of the box. Higher memory footprint.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Nginx</strong>: most widely
                    deployed, massive ecosystem, excellent static file serving. Config is
                    manual and requires reloads.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">HAProxy</strong>: highest raw
                    performance, best for pure load balancing. Steeper learning curve,
                    less HTTP-layer flexibility.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Configuration and service discovery</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  This is where the three diverge most. Traefik watches your
                  Docker daemon (or Kubernetes API) and automatically registers
                  routes when containers start. You define routing rules as
                  labels on your containers. No config files to edit, no reloads
                  to trigger.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Nginx uses static configuration files. Every new service means
                  editing a config, writing an upstream block and a server block,
                  then running <code className="text-foreground text-sm">nginx -s reload</code>.
                  Tools like nginx-proxy or Nginx Proxy Manager add Docker
                  integration, but they are wrappers, not native behavior.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  HAProxy also uses static configuration. Its config syntax is
                  different from Nginx (frontends, backends, ACLs) and takes
                  longer to learn. It supports runtime API changes for some
                  operations, but most routing changes still require a config
                  reload.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  For a team running 5-20 services in Docker Compose on a single
                  server, Traefik&apos;s auto-discovery is a significant
                  advantage. You add a container, it gets a route. You remove it,
                  the route disappears. No manual steps.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">TLS and certificates</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Traefik has a built-in ACME client. Point it at Let&apos;s
                  Encrypt (or any ACME provider), and it automatically obtains
                  and renews certificates for every service it discovers. Zero
                  configuration beyond the initial ACME setup.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Nginx requires a separate tool for automated certificates.
                  Certbot is the standard choice, but you need to configure it,
                  set up renewal hooks, and make sure Nginx reloads after
                  renewal. It works, but it is another moving part.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  HAProxy can terminate TLS and has excellent cipher suite
                  control, but like Nginx, it does not handle certificate
                  issuance natively. You need an external tool.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Performance</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  HAProxy is the performance champion. It was built from the
                  ground up as a load balancer and consistently delivers the
                  lowest latency and highest throughput in benchmarks. It powers
                  some of the highest-traffic sites on the internet.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Nginx is close behind for most workloads and also excels at
                  serving static files directly, something HAProxy cannot do.
                  For a typical web application, the performance difference
                  between Nginx and HAProxy is negligible.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Traefik is written in Go and uses more memory than either Nginx
                  or HAProxy. For a small team running dozens of services, this
                  rarely matters. For high-throughput scenarios with thousands of
                  requests per second, it can become a consideration.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Middleware and extensibility</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Traefik has a middleware system for common needs: rate limiting,
                  authentication, path stripping, headers, compression. You apply
                  them as labels on your containers. It covers 80% of what teams
                  need without plugins.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Nginx has the largest module ecosystem of any proxy. From
                  GeoIP to Lua scripting to ModSecurity WAF, there is a module
                  for almost everything. The tradeoff is that many modules
                  require recompiling Nginx or using specific builds.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  HAProxy has excellent built-in features for load balancing
                  (sticky sessions, health checks, connection draining) but
                  fewer HTTP-layer features compared to Nginx or Traefik.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Dashboard and observability</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Traefik ships with a built-in web dashboard that shows all
                  discovered services, routes, and middleware in real time. It
                  also exposes Prometheus metrics natively.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  HAProxy has a stats page that shows connection counts, error
                  rates, and backend health. It is functional but basic compared
                  to Traefik&apos;s dashboard.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Nginx exposes a stub status module for basic metrics. For
                  anything more detailed, you need the commercial Nginx Plus or
                  third-party exporters.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">When to use each one</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Choose Traefik</strong> if you
                    run Docker or Kubernetes, want automatic service discovery
                    and TLS, and prefer convention over configuration. Ideal for
                    teams with 5-30 services who want to minimize ops overhead.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Choose Nginx</strong> if you
                    need to serve static files, require specific modules (WAF,
                    Lua scripting), or your team already knows Nginx well. Good
                    for hybrid setups where the proxy also serves assets.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Choose HAProxy</strong> if raw
                    performance and advanced load balancing are your primary
                    concerns. Best for high-traffic TCP/HTTP workloads where
                    every millisecond of latency matters.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">Our take</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  For most small to mid-sized teams running containerized
                  workloads, Traefik is the pragmatic choice. Auto-discovery
                  eliminates an entire class of manual configuration work, and
                  the built-in Let&apos;s Encrypt support means one less thing to
                  manage. The performance overhead is irrelevant for the traffic
                  volumes most SMBs handle.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  That said, there is no wrong answer among these three. All of
                  them are battle-tested, production-grade, and actively
                  maintained. The worst choice is the one that creates ongoing
                  manual work for your team.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  We help teams set up and configure their infrastructure, including reverse proxies, as part of our consulting engagements. Our{" "}
                  <Link href="/infrastructure-audit" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    infrastructure audit
                  </Link>
                  {" "}evaluates your current proxy setup alongside the rest of your stack, or you can go directly to{" "}
                  <Link href="/devops-consulting" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    our DevOps consulting
                  </Link>
                  .
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-t border-foreground/[0.08] pt-8 mt-8">
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    Want to see how a reverse proxy fits into a full internal
                    development platform?{" "}
                    <Link href="/platform" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                      Explore our reference architecture
                    </Link>
                    .
                  </p>
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light mt-4">
                    Your proxy sits in front of containers. If you are still choosing a runtime, read our comparison of{" "}
                    <Link href="/blog/docker-vs-podman" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                      Docker vs Podman
                    </Link>
                    .
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-xl font-light text-foreground tracking-wide mt-16 mb-6">Related reading</h2>
                <ul className="space-y-3">
                  <li><Link href="/blog/docker-vs-podman" className="text-foreground-secondary hover:text-foreground transition-colors">Docker vs Podman: which container runtime should you use in 2026</Link></li>
                  <li><Link href="/blog/tailscale-vs-netbird-overlay-networks" className="text-foreground-secondary hover:text-foreground transition-colors">Tailscale vs Netbird vs ZeroTier: overlay networks for small teams</Link></li>
                </ul>
              </FadeIn>
            </div>
          </Container>
        </section>
      </article>

      <BlogEmailCapture />

      <CTASection
        headline="Not sure which proxy fits your setup?"
        subtext="We will look at your current infrastructure and recommend the right tools."
        buttonText="Let's talk"
        buttonHref="/contact"
      />
    </main>
  );
}
