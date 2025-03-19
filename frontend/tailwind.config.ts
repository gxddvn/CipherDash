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
        backgroundSecondary: "var(--background-side)",
        mainBgColor: "var(--main-bg-color)",
        borderColor: "var(--border-color)",
        foreground: "var(--foreground)",
        secondColor: "var(--secondary-color)",
        blackColor: "var(--black-color)", 
        inputColor: "var(--input-color)",
        outputColor: "var(--output-color)",
        noFocusColor: "var(--no-focus-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
