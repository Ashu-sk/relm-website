import type { Config } from "tailwindcss";

/**
 * Tailwind v4 uses CSS-first configuration. Design tokens (colors, fonts,
 * spacing, etc.) are defined in app/globals.css via @theme and :root.
 *
 * This file is for content paths and any JS-only options if needed.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
