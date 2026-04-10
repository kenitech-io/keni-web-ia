import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "DevOps Infrastructure Audit | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "What Happens During a DevOps Infrastructure Audit",
    subtitle: "A step-by-step breakdown: what we look at, how we score it, and what you get at the end.",
  });
}
