import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Replace Heroku Self-Hosted | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Replace Heroku with a Self-Hosted Platform (And Cut Your Bill by 80%)",
    subtitle: "Same developer experience, 80% less cost. Here is how.",
  });
}
