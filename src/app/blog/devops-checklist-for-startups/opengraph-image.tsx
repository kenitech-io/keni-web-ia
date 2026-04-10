import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "DevOps Checklist for Startups | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "The DevOps Checklist for Startups: 15 Things to Get Right Before You Scale",
    subtitle: "Version control, CI/CD, containers, secrets, monitoring, IaC, and 9 more foundations.",
  });
}
