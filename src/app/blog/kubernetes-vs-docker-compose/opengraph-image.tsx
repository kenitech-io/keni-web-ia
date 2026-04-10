import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Kubernetes vs Docker Compose | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Kubernetes vs Docker Compose: Which One Does Your Team Actually Need?",
    subtitle: "Cost comparison, operational overhead, and when each tool makes sense for teams with 2-30 developers.",
  });
}
