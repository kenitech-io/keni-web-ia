import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Why SMBs Need DevOps | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Why 53% of SMBs still don\'t have DevOps (and what it\'s costing them)",
    subtitle: "The real cost of manual deployments, the hiring problem, and what a realistic fix looks like.",
  });
}
