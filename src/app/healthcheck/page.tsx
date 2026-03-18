import { Metadata } from "next";
import HealthCheckContent from "@/components/HealthCheckContent";

export const metadata: Metadata = {
  title: "Free DevOps Maturity Assessment",
  description:
    "Score your DevOps maturity in 2 minutes. A free self-assessment across deployments, CI/CD, monitoring, infrastructure as code, secrets management, and disaster recovery.",
  alternates: {
    canonical: "https://kenitech.io/healthcheck",
  },
};

export default function HealthCheckPage() {
  return <HealthCheckContent />;
}
