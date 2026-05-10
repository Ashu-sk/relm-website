import "server-only";

import { createClient } from "@supabase/supabase-js";

function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  if (!url) throw new Error("Server misconfiguration");
  return url;
}

function getServiceRoleKey(): string {
  const key =
    process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error("Server misconfiguration");
  return key;
}

// Server-only, service-role Supabase client. Import ONLY in API routes / server utilities.
export const supabaseAdmin = createClient(getSupabaseUrl(), getServiceRoleKey());

