import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Traefik vs Nginx vs HAProxy | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Traefik vs Nginx vs HAProxy: choosing a reverse proxy in 2026",
    subtitle: "Auto-discovery, TLS, performance, and when to use each one.",
  });
}
