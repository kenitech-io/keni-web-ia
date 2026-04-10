import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "GitHub Actions vs GitLab CI vs Jenkins | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "GitHub Actions vs GitLab CI vs Jenkins: CI Tools Compared in 2026",
    subtitle: "Setup, pricing, self-hosting, pipeline syntax, and when each one makes sense.",
  });
}
