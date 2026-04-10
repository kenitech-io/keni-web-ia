import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "How Much Does DevOps Cost | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "How Much Does DevOps Cost in 2026? Full-Time Hire vs Consulting vs DIY",
    subtitle: "Salary data, consulting pricing models, and ROI comparison for small software teams.",
  });
}
