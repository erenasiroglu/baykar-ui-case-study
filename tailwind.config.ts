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
      },
      fontSize: {
        customSize: "13.3px",
      },
    },
  },
  plugins: [],
} satisfies Config;
