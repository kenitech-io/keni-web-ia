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
    slug: "github-actions-vs-gitlab-ci-vs-jenkins",
    title: "GitHub Actions vs GitLab CI vs Jenkins: CI Tools Compared in 2026",
    description:
      "A practical comparison of GitHub Actions, GitLab CI/CD, and Jenkins. Setup, pricing, self-hosting, pipeline syntax, and when each one makes sense for your team.",
    date: "2026-03-03",
    readTime: "9 min read",
    category: "CI/CD",
  },
  {
    slug: "argocd-vs-flux-vs-watchtower",
    title: "Argo CD vs Flux vs Watchtower: CD Tools for Automated Deployments in 2026",
    description:
      "GitOps with Argo CD and Flux for Kubernetes, or Watchtower for Docker Compose. When each approach makes sense and how to choose.",
    date: "2026-03-05",
    readTime: "8 min read",
    category: "CI/CD",
  },
  {
    slug: "traefik-vs-nginx-vs-haproxy",
    title: "Traefik vs Nginx vs HAProxy: Choosing a Reverse Proxy in 2026",
    description:
      "A practical comparison of Traefik, Nginx, and HAProxy for small to mid-sized teams. Auto-discovery, configuration style, performance, TLS, and when to use each one.",
    date: "2026-03-07",
    readTime: "8 min read",
    category: "Infrastructure",
  },
  {
    slug: "tailscale-vs-netbird-overlay-networks",
    title: "Tailscale vs Netbird vs ZeroTier: Overlay Networks for Small Teams",
    description:
      "A practical comparison of overlay networks for connecting servers across locations. Self-hosted vs managed, WireGuard internals, access control, and which one fits your team.",
    date: "2026-03-09",
    readTime: "7 min read",
    category: "Networking",
  },
  {
    slug: "docker-vs-podman",
    title: "Docker vs Podman: Which Container Runtime Should You Use in 2026",
    description:
      "Daemon vs daemonless, rootless containers, Docker Compose compatibility, and when each container runtime makes sense for your team.",
    date: "2026-03-11",
    readTime: "7 min read",
    category: "Containers",
  },
  {
    slug: "secrets-management-1password-vs-keeper-vs-cyberark",
    title: "Secrets Management: 1Password vs Keeper vs CyberArk vs Vault in 2026",
    description:
      "A practical comparison of secrets management tools. 1Password, Keeper, CyberArk, HashiCorp Vault, and Infisical compared on automation, injection, self-hosting, and team size fit.",
    date: "2026-03-13",
    readTime: "8 min read",
    category: "Security",
  },
  {
    slug: "why-smbs-need-devops",
    title: "Why 53% of SMBs Still Don't Have DevOps (And What It's Costing Them)",
    description:
      "Most small software teams know their deployment process is broken. The real question is how much it costs them every week and what a realistic fix looks like.",
    date: "2026-03-15",
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
  {
    slug: "devops-checklist-for-startups",
    title: "The DevOps Checklist for Startups: 15 Things to Get Right Before You Scale",
    description:
      "A practical 15-point checklist covering version control, CI/CD, containers, secrets management, monitoring, IaC, and the other foundations every startup needs before scaling.",
    date: "2026-03-19",
    readTime: "10 min read",
    category: "DevOps",
  },
  {
    slug: "how-much-does-devops-cost",
    title: "How Much Does DevOps Cost in 2026? Full-Time Hire vs Consulting vs DIY",
    description:
      "A full breakdown of DevOps costs. Full-time engineer ($130K-$220K), consulting ($5K-$20K per project), and DIY. Salary data, hidden costs, and ROI comparison.",
    date: "2026-03-21",
    readTime: "8 min read",
    category: "DevOps",
  },
  {
    slug: "kubernetes-vs-docker-compose",
    title: "Kubernetes vs Docker Compose: Which One Does Your Team Actually Need? (2026)",
    description:
      "For teams with 2-30 developers, Docker Compose is usually the right choice. When K8s makes sense, cost comparison, operational overhead, and the migration path.",
    date: "2026-03-23",
    readTime: "9 min read",
    category: "Containers",
  },
];
