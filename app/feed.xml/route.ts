import { getPublishedPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/faqData";

export const revalidate = 3600;

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toRfc822(dateIso: string) {
  return new Date(dateIso).toUTCString();
}

export async function GET() {
  const posts = await getPublishedPosts();
  const channelLink = `${SITE_URL}/blog`;

  const items = posts
    .map((post) => {
      const link = `${SITE_URL}/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${toRfc822(post.published_at)}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>rarelm Blog</title>
    <link>${channelLink}</link>
    <description>Stories and updates from rarelm — the AI-verified social platform for real humans.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
