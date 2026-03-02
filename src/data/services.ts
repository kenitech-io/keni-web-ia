export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  hero: string;
  problem: string;
  approach: { title: string; description: string }[];
  tools: string[];
  deliverables: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "monitoring",
    name: "Monitoring & Observability",
    shortDescription: "Full-stack observability so you find issues before your customers do.",
    hero: "See everything. Miss nothing.",
    problem:
      "You find out about outages from your customers, not your dashboards. Logs are scattered, alerts are noisy, and nobody trusts the monitoring setup.",
    approach: [
      {
        title: "Audit current observability stack and gaps",
        description:
          "We review your existing monitoring tools, dashboards, and alerting rules to understand what's working and what's missing.",
      },
      {
        title: "Design unified monitoring strategy",
        description:
          "We design a monitoring strategy that covers infrastructure, applications, and business metrics — all in one place.",
      },
      {
        title: "Implement dashboards, alerting rules, SLOs and SLIs",
        description:
          "We build the dashboards your teams actually need and set up meaningful alerts that reduce noise and surface real issues.",
      },
      {
        title: "Set up on-call workflows and runbooks",
        description:
          "We establish clear escalation paths, on-call rotations, and documented runbooks so your team can respond fast.",
      },
    ],
    tools: ["Prometheus", "Grafana", "Datadog", "ELK Stack", "OpenTelemetry", "PagerDuty", "Loki"],
    deliverables: [
      "Full observability stack deployed",
      "Custom dashboards per team",
      "Alert routing and escalation policies",
      "Runbook documentation",
    ],
    metaTitle: "Monitoring & Observability Services | Keni",
    metaDescription:
      "Full-stack monitoring and observability consulting. Prometheus, Grafana, Datadog, and OpenTelemetry implementation for engineering teams.",
  },
  {
    slug: "cloud-migration",
    name: "Cloud Migration",
    shortDescription: "Migrate to the cloud with zero downtime and a clear roadmap.",
    hero: "Move to the cloud. Without the chaos.",
    problem:
      "You know you need to migrate, but the risk of downtime, data loss, and spiraling costs keeps the project stuck in planning forever.",
    approach: [
      {
        title: "Discovery and assessment of current infrastructure",
        description:
          "We map your existing systems, dependencies, and data flows to build a complete picture of what needs to move.",
      },
      {
        title: "Migration strategy based on ROI",
        description:
          "We recommend lift-and-shift, re-platform, or re-architect for each workload based on cost, risk, and business value.",
      },
      {
        title: "Phased execution with rollback plans",
        description:
          "We migrate in phases, with rollback plans at every stage, so you're never locked into a one-way door.",
      },
      {
        title: "Validation, performance testing, and cutover",
        description:
          "We validate every migrated workload, run performance tests, and execute the final cutover with minimal disruption.",
      },
    ],
    tools: ["AWS", "GCP", "Azure", "Terraform", "CloudEndure", "AWS DMS", "Velero"],
    deliverables: [
      "Migration roadmap and timeline",
      "Infrastructure as Code for target environment",
      "Zero-downtime migration execution",
      "Post-migration validation report",
    ],
    metaTitle: "Cloud Migration Services | Keni",
    metaDescription:
      "Cloud migration consulting for AWS, GCP, and Azure. Zero-downtime migrations with phased execution and rollback plans.",
  },
  {
    slug: "cloud-management",
    name: "Cloud Management",
    shortDescription: "Optimize costs, harden security, and bring order to your cloud.",
    hero: "Your cloud, under control.",
    problem:
      "Cloud bills are growing faster than your revenue. Resources are over-provisioned, security groups are a mess, and nobody has a clear picture of what's running where.",
    approach: [
      {
        title: "Cloud cost audit and optimization recommendations",
        description:
          "We analyze your cloud spend line by line and identify immediate savings opportunities — typically 20-40% reduction.",
      },
      {
        title: "Security review and hardening",
        description:
          "We review IAM policies, network security, encryption, and compliance posture to close gaps before they become incidents.",
      },
      {
        title: "Resource right-sizing and auto-scaling policies",
        description:
          "We right-size instances, set up auto-scaling, and implement spot/reserved strategies to match spend to actual usage.",
      },
      {
        title: "Ongoing management and governance framework",
        description:
          "We establish tagging standards, budget alerts, and governance policies so your cloud stays clean long-term.",
      },
    ],
    tools: ["AWS", "GCP", "Azure", "CloudHealth", "Spot.io", "AWS Organizations", "Landing Zones"],
    deliverables: [
      "Cost optimization report with projected savings",
      "Security posture assessment",
      "Governance policies and guardrails",
      "Monthly infrastructure reviews",
    ],
    metaTitle: "Cloud Management & Optimization Services | Keni",
    metaDescription:
      "Cloud cost optimization, security hardening, and governance consulting. Get your AWS, GCP, or Azure environment under control.",
  },
  {
    slug: "ci-cd",
    name: "CI/CD Pipelines",
    shortDescription: "Automated pipelines that let your team ship with confidence.",
    hero: "Ship with confidence. Every time.",
    problem:
      "Deployments are manual, stressful, and happen on Fridays at midnight. Developers wait hours for builds. Releases feel like rolling the dice.",
    approach: [
      {
        title: "Audit current build and deployment workflows",
        description:
          "We review your current CI/CD setup — build times, test coverage, deployment frequency, and failure rates.",
      },
      {
        title: "Design pipeline architecture",
        description:
          "We design end-to-end pipelines covering build, test, security scan, and deploy stages with clear ownership and SLAs.",
      },
      {
        title: "Implement progressive delivery",
        description:
          "We set up canary deployments, blue-green strategies, and feature flags so you can ship safely and roll back instantly.",
      },
      {
        title: "Automate everything that should never be manual",
        description:
          "We automate releases, rollbacks, environment provisioning, and anything else that slows your team down.",
      },
    ],
    tools: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "Flux", "Tekton", "Spinnaker"],
    deliverables: [
      "Automated CI/CD pipelines per service",
      "Integrated security scanning (SAST/DAST)",
      "Deployment strategies (canary/blue-green)",
      "Pipeline documentation and runbooks",
    ],
    metaTitle: "CI/CD Pipeline Implementation Services | Keni",
    metaDescription:
      "CI/CD pipeline design and implementation. GitHub Actions, GitLab CI, ArgoCD, and progressive delivery strategies for engineering teams.",
  },
  {
    slug: "iac",
    name: "Infrastructure as Code",
    shortDescription: "Codify your infrastructure. Version it. Automate it.",
    hero: "If it's not in code, it doesn't exist.",
    problem:
      "Your infrastructure was built by hand, configured through consoles, and lives in someone's head. When that person leaves or that server dies, you're starting from scratch.",
    approach: [
      {
        title: "Audit existing infrastructure and document current state",
        description:
          "We inventory every resource across your cloud accounts and document the current architecture as-is.",
      },
      {
        title: "Define IaC standards, module structure, and state management",
        description:
          "We establish coding standards, module patterns, and state management strategies before writing a single line of Terraform.",
      },
      {
        title: "Codify all infrastructure",
        description:
          "We codify networking, compute, storage, IAM, and everything else into version-controlled, reusable modules.",
      },
      {
        title: "Implement CI/CD for infrastructure changes (GitOps)",
        description:
          "We set up automated plan/apply workflows so infrastructure changes go through the same review process as application code.",
      },
    ],
    tools: ["Terraform", "Pulumi", "CloudFormation", "Ansible", "Crossplane", "Atlantis"],
    deliverables: [
      "Complete infrastructure codified in version control",
      "Reusable module library",
      "State management and locking strategy",
      "GitOps workflow for infra changes",
    ],
    metaTitle: "Infrastructure as Code (IaC) Services | Keni",
    metaDescription:
      "Infrastructure as Code consulting with Terraform, Pulumi, and CloudFormation. Codify, version, and automate your cloud infrastructure.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
