import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "DevOps Audit Before Hiring | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "DevOps Audit: What to Check Before Hiring a Consultant",
    subtitle: "Self-assessment checklist and red flags to watch for.",
  });
}
