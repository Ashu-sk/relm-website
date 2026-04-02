import type { NextConfig } from "next";
import path from "path";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "rarelm.com" }],
        destination: "https://www.rarelm.com/:path*",
        permanent: true,
      },
    ];
  },
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
