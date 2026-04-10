import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Migrate to Containers | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "How to Migrate from a Single Server to Containers Without Downtime",
    subtitle: "Step-by-step guide for teams running bare-metal or VM-based apps.",
  });
}
