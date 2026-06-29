import type { MetadataRoute } from "next";

const AI_AND_SEARCH_AGENTS = [
  "Googlebot",
  "Google-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Bingbot",
  "CCBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_AND_SEARCH_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.rarelm.com/sitemap.xml",
  };
}
