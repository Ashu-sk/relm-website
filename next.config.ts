import type { NextConfig } from "next";
import path from "path";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
    resolveAlias: {
      // Ensure Tailwind v4's `@import "tailwindcss";` resolves correctly even if
      // Next.js infers an unexpected workspace root due to external lockfiles.
      tailwindcss: path.join(__dirname, "node_modules/tailwindcss"),
    },
  },
};
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
export default bundleAnalyzer(nextConfig);
