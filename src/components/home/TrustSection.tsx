"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const technologies = [
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/white" },
  { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/white" },
  { name: "Azure", icon: "https://cdn.simpleicons.org/microsoftazure/white" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/white" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/white" },
  { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/white" },
  { name: "Ansible", icon: "https://cdn.simpleicons.org/ansible/white" },
  { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/white" },
  { name: "ArgoCD", icon: "https://cdn.simpleicons.org/argo/white" },
  { name: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus/white" },
  { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana/white" },
  { name: "Datadog", icon: "https://cdn.simpleicons.org/datadog/white" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/white" },
  { name: "Pulumi", icon: "https://cdn.simpleicons.org/pulumi/white" },
];

export default function TrustSection() {
  return (
    <section className="py-section-sm">
      <Container>
        <FadeIn type="up" delay={0}>
          <p className="text-heading font-light text-center text-foreground mb-14 md:mb-20">
            Technologies we work with.
          </p>
        </FadeIn>

        <FadeIn type="fade" delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-3xl mx-auto">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xs text-foreground-secondary">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
