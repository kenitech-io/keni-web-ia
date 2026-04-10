import { ImageResponse } from "next/og";

export type OgTheme = "dark" | "light" | "orange";

const themes = {
  dark: {
    background: "#1A1A1A",
    title: "#FFFFFF",
    subtitle: "#A3A3A3",
    label: "#737373",
    accent: "#F97316",
  },
  light: {
    background: "#FAFAF8",
    title: "#1A1A1A",
    subtitle: "#525252",
    label: "#737373",
    accent: "#F97316",
  },
  orange: {
    background: "#F97316",
    title: "#FFFFFF",
    subtitle: "rgba(255,255,255,0.75)",
    label: "rgba(255,255,255,0.6)",
    accent: "transparent",
  },
};

export function resolveTheme(title: string, category: string): OgTheme {
  const t = title.toLowerCase();
  // Orange: bold opinions, provocative statements
  if (t.startsWith("why ") || t.includes("doesn't need") || t.includes("don't"))
    return "orange";
  if (t.includes("replace") || t.includes("without")) return "orange";
  // Dark: comparisons, data-driven, audits
  if (t.includes(" vs ")) return "dark";
  if (t.includes("how much") || t.includes("cost")) return "dark";
  if (t.includes("audit") || t.includes("what happens")) return "dark";
  // Light: guides, checklists, educational
  if (
    t.includes("checklist") ||
    t.includes("guide") ||
    t.includes("how to")
  )
    return "light";
  if (category === "Platform Engineering") return "light";
  if (category === "DevOps") return "light";
  return "dark";
}

export const ogSize = { width: 1200, height: 630 };

export function generateBlogOgImage(opts: {
  title: string;
  subtitle: string;
  theme?: OgTheme;
  category?: string;
}) {
  const theme = opts.theme ?? resolveTheme(opts.title, opts.category ?? "");
  const t = themes[theme];
  const isOrange = theme === "orange";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "56px 80px",
          backgroundColor: isOrange ? "#EA580C" : t.background,
        }}
      >
        {isOrange && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              backgroundImage:
                "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
            }}
          />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 14,
              fontWeight: 500,
              color: t.label,
              letterSpacing: "0.2em",
              marginBottom: 32,
            }}
          >
            KENI ENGINEERING BLOG
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 300,
              color: t.title,
              lineHeight: 1.2,
              maxWidth: 960,
            }}
          >
            {opts.title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 300,
              color: t.subtitle,
              marginTop: 28,
              maxWidth: 760,
              lineHeight: 1.6,
            }}
          >
            {opts.subtitle}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: isOrange ? 0 : 3,
            display: "flex",
            backgroundColor: isOrange ? "transparent" : t.accent,
          }}
        />
      </div>
    ),
    { ...ogSize }
  );
}
