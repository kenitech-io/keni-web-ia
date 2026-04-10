import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        foreground: "var(--foreground)",
        "foreground-secondary": "var(--foreground-secondary)",
        muted: "var(--muted)",
        "border-color": "var(--border-color)",
        charcoal: "var(--charcoal)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "300" }],
        "display": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" }],
        "display-sm": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "300" }],
        "heading": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "300" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7", fontWeight: "300" }],
        "body": ["1.0625rem", { lineHeight: "1.7", fontWeight: "300" }],
        "label": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em", fontWeight: "500" }],
      },
      spacing: {
        "section": "clamp(80px, 12vw, 160px)",
        "section-sm": "clamp(60px, 8vw, 100px)",
      },
      maxWidth: {
        "content": "1320px",
        "narrow": "640px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
