export interface Phase {
  number: string;
  name: string;
  description: string;
}

export const phases: Phase[] = [
  {
    number: "01",
    name: "Diagnosis",
    description:
      "We look at your repos, your pipelines (or lack of), your deploy process, your monitoring. In 72 hours you get a clear report of what's broken and what to fix first.",
  },
  {
    number: "02",
    name: "Design",
    description:
      "We architect the solution: CI/CD pipelines, container orchestration, monitoring, automated deploys. Everything documented before we touch a single config file.",
  },
  {
    number: "03",
    name: "Implementation",
    description:
      "We build it. Pipelines, environments, IaC, the whole thing. When we're done, your devs push code and it goes to production. No manual steps, no\u00A0SSH. Fully tested before handoff.",
  },
  {
    number: "04",
    name: "Maintenance",
    description:
      "A dedicated engineer keeps everything running. Dependency updates, monitoring, incident response, scaling. You focus on shipping features, we handle the rest.",
  },
];
