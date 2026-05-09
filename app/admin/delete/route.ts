import { createClient } from "@supabase/supabase-js";
import { cookies, headers } from "next/headers";
import { rateLimit } from "@/lib/rate-limit";

const ALLOWED_TABLES = {
  user: "waitlist_users",
  professional: "waitlist_professionals",
} as const;
type AllowedTarget = keyof typeof ALLOWED_TABLES;

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
  const authValue = auth ?? "";
  if (authValue.toLowerCase().startsWith("bearer ")) {
    return authValue.slice("bearer ".length).trim();
  }

  const c = await cookies();
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

export async function POST(req: Request) {
  const h0 = await headers();
  const ipRaw = h0.get("x-forwarded-for") ?? h0.get("x-real-ip") ?? "127.0.0.1";
  const ip = ipRaw.split(",")[0]?.trim() || "127.0.0.1";
  if (!rateLimit(`admin:delete:${ip}`, 60)) {
    return Response.json({ error: "Too many requests" }, { status: 429 });
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

  const actorId = userData.user.id;

  const role =
    (userData.user.app_metadata as Record<string, unknown> | undefined)
      ?.role ??
    (userData.user.user_metadata as Record<string, unknown> | undefined)?.role;
  if (role !== "admin") {
    console.info(
      JSON.stringify({
        event: "admin_soft_delete",
        actorId,
        timestamp: new Date().toISOString(),
        outcome: "forbidden_non_admin",
      })
    );
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    console.info(
      JSON.stringify({
        event: "admin_soft_delete",
        actorId,
        timestamp: new Date().toISOString(),
        outcome: "invalid_json",
      })
    );
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const target = (body as { target?: unknown })?.target as
    | AllowedTarget
    | undefined;
  const id = (body as { id?: unknown })?.id as string | undefined;

  if (!target || !(target in ALLOWED_TABLES)) {
    console.info(
      JSON.stringify({
        event: "admin_soft_delete",
        actorId,
        timestamp: new Date().toISOString(),
        outcome: "invalid_target",
        recordId: id ?? null,
      })
    );
    return Response.json({ error: "Invalid target" }, { status: 400 });
  }

  if (!id || !UUID_V4_LIKE.test(String(id))) {
    console.info(
      JSON.stringify({
        event: "admin_soft_delete",
        actorId,
        timestamp: new Date().toISOString(),
        outcome: "invalid_id",
        target,
      })
    );
    return Response.json({ error: "Invalid id" }, { status: 400 });
  }

  const tableName = ALLOWED_TABLES[target];
  const deletedAt = new Date().toISOString();

  console.info(
    JSON.stringify({
      event: "admin_soft_delete",
      actorId,
      timestamp: deletedAt,
      outcome: "attempt",
      target,
      table: tableName,
      recordId: id,
    })
  );

  const { error } = await supabaseAuth
    .from(tableName)
    .update({ deleted_at: deletedAt })
    .eq("id", id);

  if (error) {
    console.warn(
      JSON.stringify({
        event: "admin_soft_delete",
        actorId,
        timestamp: new Date().toISOString(),
        outcome: "db_error",
        target,
        table: tableName,
        recordId: id,
        errorCode: error.code,
        errorMessage: error.message,
      })
    );
    return Response.json({ error: error.message }, { status: 400 });
  }

  console.info(
    JSON.stringify({
      event: "admin_soft_delete",
      actorId,
      timestamp: new Date().toISOString(),
      outcome: "success",
      target,
      table: tableName,
      recordId: id,
    })
  );

  return Response.json({ success: true });
}
