import { Metadata } from "next";
import HealthCheckContent from "@/components/HealthCheckContent";

export const metadata: Metadata = {
  title: "DevOps Health Check",
  description:
    "Find out where your team stands. A quick self-assessment that scores your DevOps maturity across deployments, CI/CD, monitoring, and infrastructure.",
};

export default function HealthCheckPage() {
  return <HealthCheckContent />;
}
