import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

type Theme = (key: string) => string | undefined;
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      typography: (theme:Theme) => ({
        DEFAULT: {
          css: {
            h1: {
              marginBottom: theme('spacing.4'),
            },
            p: {
              marginBottom: theme('spacing.4'),
            },
          },
        },
      }),
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [typography],
};
export default config;
