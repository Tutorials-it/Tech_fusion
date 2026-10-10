import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "#101827",
          card: "#1E293B",
          accent: "#22D3EE",
          text: "#F8FAFC",
          muted: "#94A3B8",
          critical: "#F87171",
          warning: "#FBBF24",
          stable: "#34D399",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34, 211, 238, 0.15), 0 16px 48px rgba(2, 132, 199, 0.18)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at top, rgba(34, 211, 238, 0.12), transparent 40%), linear-gradient(180deg, rgba(16, 24, 39, 0.94), rgba(16, 24, 39, 1))",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
