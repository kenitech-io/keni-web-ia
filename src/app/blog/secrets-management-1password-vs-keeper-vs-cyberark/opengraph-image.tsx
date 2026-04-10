import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Secrets Management Tools Compared | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Secrets Management: 1Password vs Keeper vs CyberArk vs Vault in 2026",
    subtitle: "Automated injection, rotation, audit trails, and which tool fits your team size.",
  });
}
