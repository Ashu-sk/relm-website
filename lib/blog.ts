import { supabase } from "@/lib/supabaseClient";

const POST_LIST_FIELDS =
  "slug, title, excerpt, cover_image, tags, author, published_at" as const;

const POST_DETAIL_FIELDS =
  "slug, title, excerpt, content, cover_image, tags, author, published_at, updated_at" as const;

export type PostListItem = {
  slug: string;
  title: string;
  excerpt: string;
  cover_image: string | null;
  tags: string[] | null;
  author: string;
  published_at: string;
};

export type Post = PostListItem & {
  content: string;
  updated_at: string | null;
};

function mapTags(tags: unknown): string[] | null {
  if (!tags) return null;
  if (Array.isArray(tags)) {
    return tags.filter((tag): tag is string => typeof tag === "string");
  }
  return null;
}

function mapListRow(row: Record<string, unknown>): PostListItem {
  return {
    slug: String(row.slug),
    title: String(row.title),
    excerpt: String(row.excerpt ?? ""),
    cover_image: row.cover_image ? String(row.cover_image) : null,
    tags: mapTags(row.tags),
    author: String(row.author ?? "rarelm"),
    published_at: String(row.published_at),
  };
}

function mapDetailRow(row: Record<string, unknown>): Post {
  return {
    ...mapListRow(row),
    content: String(row.content ?? ""),
    updated_at: row.updated_at ? String(row.updated_at) : null,
  };
}

export async function getPublishedPosts(): Promise<PostListItem[]> {
  const { data, error } = await supabase
    .from("posts")
    .select(POST_LIST_FIELDS)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("[blog] getPublishedPosts:", error.message);
    return [];
  }

  return (data ?? []).map((row) => mapListRow(row as Record<string, unknown>));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select(POST_DETAIL_FIELDS)
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("[blog] getPostBySlug:", error.message);
    return null;
  }

  if (!data) return null;

  return mapDetailRow(data as Record<string, unknown>);
}

export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("slug")
    .eq("status", "published");

  if (error) {
    console.error("[blog] getAllSlugs:", error.message);
    return [];
  }

  return (data ?? [])
    .map((row) => String((row as { slug: string }).slug))
    .filter(Boolean);
}
