import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPurple: "rgba(58, 12, 163, 1)",
        customTitle: "rgba(68, 68, 68, 1)",
        customHover: "rgba(67, 97, 238, 0.3)",
        customBlue: "rgba(67, 97, 238, 1)",
        customPink: "rgba(255, 225, 225, 1)",
        customLightBlue: "rgba(215, 238, 255, 1)",
        customLightGreen: "rgba(241, 255, 241, 1)",
      },
      fontSize: {
        customSize: "13.3px",
      },
    },
  },
  plugins: [],
} satisfies Config;
