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
      "We audit your current infrastructure, map dependencies, and identify bottlenecks. In 72 hours you get a clear picture of where you are and what needs to change.",
  },
  {
    number: "02",
    name: "Design",
    description:
      "We architect the solution: CI/CD pipelines, server management, containerization, monitoring. Everything documented, nothing left to interpretation.",
  },
  {
    number: "03",
    name: "Implementation",
    description:
      "We build it. Infrastructure as code, automated deployments, centralized management. Your developers push code — everything else happens automatically.",
  },
  {
    number: "04",
    name: "Maintenance",
    description:
      "A dedicated engineer manages your infrastructure ongoing. Updates, monitoring, incident response, optimization. You focus on product.",
  },
];
