import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Internal Developer Platforms | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Internal Developer Platforms for Small Teams: A Practical Guide",
    subtitle: "The right-sized IDP for teams with 2-30 developers.",
  });
}
