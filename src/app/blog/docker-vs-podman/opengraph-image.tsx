import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Docker vs Podman | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Docker vs Podman: Which Container Runtime Should You Use in 2026",
    subtitle: "Daemon vs daemonless, rootless containers, Compose compatibility, and the ecosystem tradeoff.",
  });
}
