import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Platform Engineering Without K8s | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Platform Engineering Without Kubernetes: A Simpler Path for Small Teams",
    subtitle: "A simpler path for teams with 2-30 developers.",
  });
}
