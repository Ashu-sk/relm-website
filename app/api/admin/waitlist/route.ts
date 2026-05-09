import "server-only";

import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { rateLimit } from "@/lib/rate-limit";

const WAITLIST_TABLE = "waitlist_users";
const PROFESSIONALS_TABLE = "waitlist_professionals";

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
  for (const name of ["sb-access-token", "supabase-access-token", "access-token"] as const) {
    const v = c.get(name)?.value;
    if (v) return v;
  }
  return null;
}

function isAdminRole(user: { app_metadata?: unknown; user_metadata?: unknown }): boolean {
  const appRole = (user.app_metadata as Record<string, unknown> | undefined)?.role;
  const userRole = (user.user_metadata as Record<string, unknown> | undefined)?.role;
  return appRole === "admin" || userRole === "admin";
}

export async function GET(req: Request) {
  const h = await headers();
  const ipRaw = h.get("x-forwarded-for") ?? h.get("x-real-ip") ?? "127.0.0.1";
  const ip = ipRaw.split(",")[0]?.trim() || "127.0.0.1";
  if (!rateLimit(`admin:waitlist:${ip}`, 30)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const accessToken = await getAccessTokenFromRequest();
  if (!accessToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const supabaseAuth = createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    auth: { persistSession: false },
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
  });
  const { data: userData, error: userErr } = await supabaseAuth.auth.getUser();
  if (userErr || !userData?.user || !isAdminRole(userData.user)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const [{ data: users, error: usersErr }, { data: professionals, error: prosErr }] =
    await Promise.all([
      supabaseAdmin
        .from(WAITLIST_TABLE)
        .select(
          "id,email,full_name,phone_country_code,phone,country,desired_domain,created_at,status"
        )
        .order("created_at", { ascending: false }),
      supabaseAdmin
        .from(PROFESSIONALS_TABLE)
        .select(
          "id,email,full_name,phone_country_code,phone,profession,experience,interests,country,created_at,status"
        )
        .order("created_at", { ascending: false }),
    ]);

  if (usersErr || prosErr) {
    const err = usersErr ?? prosErr!;
    return NextResponse.json({ error: err.message }, { status: 500 });
  }

  return NextResponse.json({
    users: users ?? [],
    professionals: professionals ?? [],
  });
}

