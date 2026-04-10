import { generateBlogOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Tailscale vs Netbird vs ZeroTier | Keni Engineering";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return generateBlogOgImage({
    title: "Tailscale vs Netbird vs ZeroTier: Overlay Networks for Small Teams",
    subtitle: "Self-hosted vs managed, WireGuard internals, and which one fits your setup.",
  });
}
