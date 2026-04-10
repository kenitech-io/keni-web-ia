import { ImageResponse } from "next/og";

export type OgTheme = "dark" | "light" | "orange";

const themes = {
  dark: {
    background: "#1A1A1A",
    title: "#FFFFFF",
  },
  light: {
    background: "#FAFAF8",
    title: "#1A1A1A",
  },
  orange: {
    background: "#EA580C",
    title: "#FFFFFF",
  },
};

export function resolveTheme(title: string, category: string): OgTheme {
  const t = title.toLowerCase();
  if (t.startsWith("why ") || t.includes("doesn't need") || t.includes("don't"))
    return "orange";
  if (t.includes("replace") || t.includes("without")) return "orange";
  if (t.includes(" vs ")) return "dark";
  if (t.includes("how much") || t.includes("cost")) return "dark";
  if (t.includes("audit") || t.includes("what happens")) return "dark";
  if (t.includes("checklist") || t.includes("guide") || t.includes("how to"))
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

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 120px",
          backgroundColor: t.background,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 54,
            fontWeight: 500,
            color: t.title,
            lineHeight: 1.3,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {opts.title}
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
