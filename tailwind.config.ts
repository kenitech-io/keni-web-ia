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
        background: "#0B0D15",
        surface: "#131620",
        "surface-light": "#1A1D27",
        foreground: "#FAFAFA",
        "foreground-secondary": "#8A8A9A",
        accent: "#7ECEB3",
        "accent-hover": "#6BC0A3",
        "accent-blue": "#5CAED4",
        "accent-yellow": "#E5C44E",
        muted: "#5A5A6A",
        "border-color": "#1E2130",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "system-ui", "Helvetica Neue", "sans-serif"],
        mono: ["SF Mono", "var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-lg": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "500" }],
        "display": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "500" }],
        "display-sm": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "500" }],
        "heading": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "500" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body": ["1.0625rem", { lineHeight: "1.7", fontWeight: "400" }],
        "label": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em", fontWeight: "500" }],
      },
      spacing: {
        "section": "clamp(80px, 12vw, 200px)",
        "section-sm": "clamp(60px, 8vw, 120px)",
      },
      maxWidth: {
        "content": "1200px",
        "narrow": "700px",
      },
      backgroundImage: {
        "gradient-mesh": "radial-gradient(at 20% 80%, #5CAED4 0%, transparent 50%), radial-gradient(at 80% 20%, #7ECEB3 0%, transparent 50%), radial-gradient(at 60% 90%, #E5C44E 0%, transparent 50%), radial-gradient(at 10% 10%, #6BC0A3 0%, transparent 40%)",
        "gradient-mesh-subtle": "radial-gradient(at 20% 80%, rgba(92,174,212,0.15) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(126,206,179,0.12) 0%, transparent 50%), radial-gradient(at 60% 90%, rgba(229,196,78,0.08) 0%, transparent 50%)",
        "gradient-text": "linear-gradient(135deg, #5CAED4 0%, #7ECEB3 40%, #E5C44E 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
