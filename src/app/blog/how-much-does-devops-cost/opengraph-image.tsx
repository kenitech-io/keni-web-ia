import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "How Much Does DevOps Cost in 2026 | Keni Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: "#000000", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px" }}>
        <div style={{ fontSize: 18, color: "#999999", letterSpacing: "0.15em", marginBottom: 24 }}>KENI ENGINEERING BLOG</div>
        <div style={{ fontSize: 48, fontWeight: 300, color: "#FAFAFA", lineHeight: 1.2, maxWidth: 900 }}>How much does DevOps cost in 2026? Full-time hire vs consulting vs DIY</div>
        <div style={{ fontSize: 20, color: "#999999", marginTop: 32, maxWidth: 700, lineHeight: 1.6 }}>Salary data, consulting pricing models, and ROI comparison for small software teams.</div>
        <div style={{ fontSize: 16, color: "#666666", marginTop: "auto", display: "flex", justifyContent: "space-between", width: "100%" }}><span>kenitech.io</span><span>8 min read</span></div>
      </div>
    ),
    { ...size }
  );
}
