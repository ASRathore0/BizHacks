/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#111113",
        "surface-card": "#161619",
        "surface-border": "rgba(255, 255, 255, 0.08)",
        "surface-border-hover": "rgba(255, 255, 255, 0.18)",
        burgundy: {
          950: "#340A10",
          900: "#500E19",
          800: "#7E1B20",
          700: "#9E1B2B",
          600: "#BA1A32",
        },
        brand: {
          red: "#DC2626",
          crimson: "#E11D48",
          darkRed: "#7E1B20",
          gold: "#F59E0B",
          goldLight: "#FBBF24",
          charcoal: "#09090B",
          offwhite: "#F4F1EC",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "marquee-left": "marqueeLeft 28s linear infinite",
        "marquee-right": "marqueeRight 28s linear infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "glow-slow": "glowSlow 6s ease-in-out infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        glowSlow: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};
