import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

const AUTH_COOKIE_CANDIDATES = [
  "sb-access-token",
  "supabase-access-token",
  "access-token",
] as const;

function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  if (!url) throw new Error("Server misconfiguration");
  return url;
}

function getSupabaseAnonKey(): string {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!key) throw new Error("Server misconfiguration");
  return key;
}

function getAccessToken(req: NextRequest): string | null {
  const auth = req.headers.get("authorization");
  const authValue = auth ?? "";
  if (authValue.toLowerCase().startsWith("bearer ")) {
    return authValue.slice("bearer ".length).trim();
  }
  for (const name of AUTH_COOKIE_CANDIDATES) {
    const v = req.cookies.get(name)?.value;
    if (v) return v;
  }
  return null;
}

function isAdminRole(user: { app_metadata?: unknown; user_metadata?: unknown }): boolean {
  const appRole = (user.app_metadata as Record<string, unknown> | undefined)?.role;
  const userRole = (user.user_metadata as Record<string, unknown> | undefined)?.role;
  return appRole === "admin" || userRole === "admin";
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const accessToken = getAccessToken(req);
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const supabase = createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    auth: { persistSession: false },
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
  });

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user || !isAdminRole(data.user)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

