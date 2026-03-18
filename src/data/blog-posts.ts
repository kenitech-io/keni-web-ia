export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "traefik-vs-nginx-vs-haproxy",
    title: "Traefik vs Nginx vs HAProxy: Choosing a Reverse Proxy in 2026",
    description:
      "A practical comparison of Traefik, Nginx, and HAProxy for small to mid-sized teams. Auto-discovery, configuration style, performance, TLS, and when to use each one.",
    date: "2026-03-17",
    readTime: "8 min read",
    category: "Infrastructure",
  },
  {
    slug: "tailscale-vs-netbird-overlay-networks",
    title: "Tailscale vs Netbird vs ZeroTier: Overlay Networks for Small Teams",
    description:
      "A practical comparison of overlay networks for connecting servers across locations. Self-hosted vs managed, WireGuard internals, access control, and which one fits your team.",
    date: "2026-03-17",
    readTime: "7 min read",
    category: "Networking",
  },
  {
    slug: "docker-vs-podman",
    title: "Docker vs Podman: Which Container Runtime Should You Use in 2026",
    description:
      "Daemon vs daemonless, rootless containers, Docker Compose compatibility, and when each container runtime makes sense for your team.",
    date: "2026-03-17",
    readTime: "7 min read",
    category: "Containers",
  },
  {
    slug: "secrets-management-1password-vs-keeper-vs-cyberark",
    title: "Secrets Management: 1Password vs Keeper vs CyberArk vs Vault in 2026",
    description:
      "A practical comparison of secrets management tools. 1Password, Keeper, CyberArk, HashiCorp Vault, and Infisical compared on automation, injection, self-hosting, and team size fit.",
    date: "2026-03-17",
    readTime: "8 min read",
    category: "Security",
  },
  {
    slug: "why-smbs-need-devops",
    title: "Why 53% of SMBs Still Don't Have DevOps (And What It's Costing Them)",
    description:
      "Most small software teams know their deployment process is broken. The real question is how much it costs them every week and what a realistic fix looks like.",
    date: "2026-03-17",
    readTime: "6 min read",
    category: "DevOps",
  },
  {
    slug: "devops-audit-what-to-expect",
    title: "What Happens During a DevOps Infrastructure Audit",
    description:
      "A step-by-step breakdown of what we look at during an infrastructure audit: deployments, CI/CD, monitoring, secrets, disaster recovery, and what the report looks like.",
    date: "2026-03-17",
    readTime: "5 min read",
    category: "Infrastructure",
  },
];
