import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "DevOps as a Service | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "DevOps as a Service: What SMBs Actually Need in 2026",
    subtitle: "Cost comparison, service models, and what to look for.",
  });
}
