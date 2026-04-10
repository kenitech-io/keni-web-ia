import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Why You Don't Need Kubernetes | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Why Your 10-Person Dev Team Doesn\'t Need Kubernetes",
    subtitle: "And what to use instead for reliable, automated deployments.",
  });
}
