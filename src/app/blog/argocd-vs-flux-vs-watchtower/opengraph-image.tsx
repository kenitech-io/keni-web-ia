import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Argo CD vs Flux vs Watchtower | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Argo CD vs Flux vs Watchtower: CD Tools for Automated Deployments in 2026",
    subtitle: "GitOps vs image watching, Kubernetes vs Docker Compose, and which fits your team.",
  });
}
