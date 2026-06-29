import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret =
    request.nextUrl.searchParams.get("secret") ??
    request.headers.get("x-revalidate-secret");

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let slug: string | undefined;

  try {
    const body = (await request.json()) as { slug?: string };
    slug = typeof body.slug === "string" ? body.slug : undefined;
  } catch {
    slug = undefined;
  }

  revalidatePath("/blog");

  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }

  revalidatePath("/sitemap.xml");
  revalidatePath("/feed.xml");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
