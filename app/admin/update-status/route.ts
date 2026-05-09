import { createClient } from "@supabase/supabase-js";
import { cookies, headers } from "next/headers";
import { rateLimit } from "@/lib/rate-limit";

const ALLOWED_TABLES = {
  user: "waitlist_users",
  professional: "waitlist_professionals",
} as const;
type AllowedTarget = keyof typeof ALLOWED_TABLES;

const ALLOWED_STATUSES = ["pending", "approved", "rejected"] as const;
type AllowedStatus = (typeof ALLOWED_STATUSES)[number];

const UUID_V4_LIKE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

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

async function getAccessTokenFromRequest() {
  const h = await headers();
  const auth = h.get("authorization");
  if (auth && auth.toLowerCase().startsWith("bearer ")) {
    return auth.slice("bearer ".length).trim();
  }

  const c = await cookies();
  // Supabase cookie names vary by integration; these are common patterns.
  const candidates = [
    "sb-access-token",
    "supabase-access-token",
    "access-token",
  ];
  for (const name of candidates) {
    const v = c.get(name)?.value;
    if (v) return v;
  }
  return null;
}

async function enforceCsrf() {
  // Double-submit CSRF token: cookie value must match header value.
  const h = await headers();
  const csrfHeader = h.get("x-csrf-token") ?? h.get("x-xsrf-token");

  const c = await cookies();
  const csrfCookie =
    c.get("csrf-token")?.value ??
    c.get("csrf_token")?.value ??
    c.get("xsrf-token")?.value ??
    c.get("XSRF-TOKEN")?.value;

  if (!csrfHeader || !csrfCookie || csrfHeader !== csrfCookie) {
    return false;
  }
  return true;
}

export async function POST(req: Request) {
  const h0 = await headers();
  const ipRaw = h0.get("x-forwarded-for") ?? h0.get("x-real-ip") ?? "127.0.0.1";
  const ip = ipRaw.split(",")[0]?.trim() || "127.0.0.1";
  if (!rateLimit(`admin:update-status:${ip}`, 60)) {
    return Response.json({ error: "Too many requests" }, { status: 429 });
  }

  const okCsrf = await enforceCsrf();
  if (!okCsrf) {
    return Response.json({ error: "CSRF validation failed" }, { status: 403 });
  }

  const accessToken = await getAccessTokenFromRequest();
  if (!accessToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseAuth = createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    auth: { persistSession: false },
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
  });

  const { data: userData, error: userErr } = await supabaseAuth.auth.getUser();
  if (userErr || !userData?.user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const role =
    (userData.user.app_metadata as Record<string, unknown> | undefined)?.role ??
    (userData.user.user_metadata as Record<string, unknown> | undefined)?.role;
  if (role !== "admin") {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const target = body?.target as AllowedTarget | undefined;
  const id = body?.id as string | undefined;
  const status = body?.status as AllowedStatus | undefined;

  if (!target || !(target in ALLOWED_TABLES)) {
    return Response.json({ error: "Invalid target" }, { status: 400 });
  }
  if (!id || !UUID_V4_LIKE.test(String(id))) {
    return Response.json({ error: "Invalid id" }, { status: 400 });
  }
  if (!status || !ALLOWED_STATUSES.includes(status)) {
    return Response.json({ error: "Invalid status" }, { status: 400 });
  }

  // Use anon key + JWT auth; rely on RLS + admin role claim for authorization.
  const tableName = ALLOWED_TABLES[target];
  const { error } = await supabaseAuth.from(tableName).update({ status }).eq("id", id);

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ success: true });
}
