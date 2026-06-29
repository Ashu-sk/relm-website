import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { getPublishedPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/faqData";

export const revalidate = 3600;

const BLOG_URL = `${SITE_URL}/blog`;
const BLOG_DESCRIPTION =
  "Stories, updates, and real talk from rarelm — the AI-verified social platform where verified humans back each other.";

export const metadata: Metadata = {
  title: "Blog — rarelm",
  description: BLOG_DESCRIPTION,
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title: "Blog — rarelm",
    description: BLOG_DESCRIPTION,
    url: BLOG_URL,
    type: "website",
    images: [{ url: `${SITE_URL}/relm-logo.png` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — rarelm",
    description: BLOG_DESCRIPTION,
    images: [`${SITE_URL}/relm-logo.png`],
  },
};

function formatPublishedDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date(iso));
}

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "rarelm Blog",
        url: BLOG_URL,
        description: BLOG_DESCRIPTION,
        mainEntity: { "@id": `${BLOG_URL}#blog` },
      },
      {
        "@type": "Blog",
        "@id": `${BLOG_URL}#blog`,
        name: "rarelm Blog",
        url: BLOG_URL,
        description: BLOG_DESCRIPTION,
        publisher: {
          "@type": "Organization",
          name: "rarelm",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/relm-logo.png`,
          },
        },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.published_at,
          description: post.excerpt,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <main className="cc-subpage">
        <header className="cc-subpage-section cc-subpage-hero">
          <div className="cc-section-inner">
            <div className="cc-subpage-hero-stack">
              <p className="cc-hero-eyebrow">
                <span className="cc-hero-dot" aria-hidden />
                rarelm Blog
              </p>
              <h1 className="rl-h1">Real stories from a real platform</h1>
              <p className="mt-6 rl-ss">
                Updates on verified humans, creator backing, and building a
                bot-free internet — in plain language.
              </p>
            </div>
          </div>
        </header>

        <section className="cc-subpage-section" aria-label="Blog posts">
          <div className="cc-section-inner">
            {posts.length === 0 ? (
              <div className="cc-blog-empty mx-auto max-w-xl rounded-xl border border-white/10 bg-white/[0.025] px-8 py-12 text-center">
                <p className="text-title font-semibold text-foreground">
                  First posts coming soon
                </p>
                <p className="mt-3 rl-ss">
                  We&apos;re getting the blog ready. Meanwhile, explore{" "}
                  <Link
                    href="/pagestock"
                    className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
                  >
                    PageStock
                  </Link>
                  , read the{" "}
                  <Link
                    href="/faq"
                    className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
                  >
                    FAQ
                  </Link>
                  , or{" "}
                  <Link
                    href="/join"
                    className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
                  >
                    join the waitlist
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] transition-smooth hover:border-white/20 hover:bg-white/[0.04]">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex h-full flex-col"
                      >
                        {post.cover_image ? (
                          <div className="relative aspect-[16/9] w-full overflow-hidden bg-(--bg-elevated)">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={post.cover_image}
                              alt=""
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                          </div>
                        ) : (
                          <div
                            className="aspect-[16/9] w-full bg-(--bg-elevated)"
                            aria-hidden
                          />
                        )}
                        <div className="flex flex-1 flex-col p-5">
                          <time
                            className="text-caption text-(--fg-tertiary)"
                            dateTime={post.published_at}
                          >
                            {formatPublishedDate(post.published_at)}
                          </time>
                          <h2 className="mt-2 text-title font-semibold text-foreground transition-smooth group-hover:text-[#FF5800]">
                            {post.title}
                          </h2>
                          <p className="mt-2 flex-1 text-body text-(--fg-secondary) line-clamp-3">
                            {post.excerpt}
                          </p>
                          {post.tags && post.tags.length > 0 ? (
                            <ul className="mt-4 flex flex-wrap gap-2">
                              {post.tags.map((tag) => (
                                <li
                                  key={tag}
                                  className="rounded-full border border-white/10 px-2.5 py-0.5 text-caption text-(--fg-tertiary)"
                                >
                                  {tag}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
