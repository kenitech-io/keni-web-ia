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
