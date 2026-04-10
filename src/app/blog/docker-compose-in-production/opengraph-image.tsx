import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Docker Compose in Production | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Docker Compose in Production: A Guide for Small Teams",
    subtitle: "Health checks, zero-downtime deploys, monitoring, and backups.",
  });
}
