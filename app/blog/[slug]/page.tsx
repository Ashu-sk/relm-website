import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import SiteFooter from "@/components/SiteFooter";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { SITE_URL } from "@/lib/faqData";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatPublishedDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date(iso));
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found — rarelm",
    };
  }

  const canonical = `${SITE_URL}/blog/${slug}`;
  const coverImage = post.cover_image ?? `${SITE_URL}/relm-logo.png`;

  return {
    title: `${post.title} — rarelm`,
    description: post.excerpt,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      type: "article",
      publishedTime: post.published_at,
      authors: [post.author],
      images: [{ url: coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonical = `${SITE_URL}/blog/${slug}`;
  const dateModified = post.updated_at ?? post.published_at;
  const coverImage = post.cover_image ?? `${SITE_URL}/relm-logo.png`;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: coverImage,
    datePublished: post.published_at,
    dateModified,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "rarelm",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/relm-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="cc-subpage">
        <article className="cc-subpage-section cc-subpage-hero">
          <div className="cc-section-inner mx-auto max-w-3xl">
            <nav className="mb-8 text-body text-(--fg-tertiary)" aria-label="Breadcrumb">
              <Link
                href="/blog"
                className="text-(--fg-secondary) underline underline-offset-2 transition-smooth hover:text-foreground"
              >
                Blog
              </Link>
              <span aria-hidden className="mx-2">
                /
              </span>
              <span className="text-(--fg-secondary)">{post.title}</span>
            </nav>

            {post.cover_image ? (
              <div className="mb-8 overflow-hidden rounded-xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.cover_image}
                  alt=""
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            ) : null}

            <header>
              <p className="cc-hero-eyebrow">
                <span className="cc-hero-dot" aria-hidden />
                rarelm Blog
              </p>
              <h1 className="mt-4 rl-h1">{post.title}</h1>
              <p className="mt-4 text-body text-(--fg-secondary)">
                By {post.author} ·{" "}
                <time dateTime={post.published_at}>
                  {formatPublishedDate(post.published_at)}
                </time>
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
            </header>

            <div className="prose prose-invert mt-10 max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-(--fg-secondary) prose-a:text-[#FF5800] prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-(--fg-secondary) prose-blockquote:border-[#FF5800] prose-blockquote:text-(--fg-secondary) prose-code:text-foreground prose-pre:bg-(--bg-elevated)">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
                {post.content}
              </ReactMarkdown>
            </div>

            <footer className="mt-14 space-y-4 border-t border-white/10 pt-10">
              <p className="text-title font-semibold text-foreground">
                Explore rarelm
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  href="/pagestock"
                  className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
                >
                  Back creators early with PageStock
                </Link>
                <Link
                  href="/qac"
                  className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
                >
                  Anonymous confessions with QAC
                </Link>
                <Link
                  href="/vision"
                  className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
                >
                  Our vision for real social
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
