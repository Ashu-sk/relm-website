import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Server misconfiguration");
  }
  return createClient(url, key);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, desiredDomain, country, phone_country_code, phone } =
      body;

    const supabaseAdmin = getSupabase();

    if (!email || !desiredDomain) {
      return NextResponse.json(
        {
          fieldErrors: {
            email: !email ? "Email is required" : undefined,
            desiredDomain: !desiredDomain ? "Domain is required" : undefined,
          },
        },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin.from("waitlist_users").insert({
      email: email.toLowerCase(),
      full_name: fullName,
      desired_domain: desiredDomain.toLowerCase(),
      country: country ?? null,
      phone_country_code: phone_country_code ?? null,
      phone: String(phone ?? "").replace(/\D/g, ""),
      status: "pending",
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { fieldErrors: { desiredDomain: "Domain already taken" } },
          { status: 409 }
        );
      }
      console.error("RPC error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    if (e instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }
    if (e instanceof Error && e.message === "Server misconfiguration") {
      return NextResponse.json(
        { error: "Service temporarily unavailable" },
        { status: 503 }
      );
    }
    console.error("Waitlist user error:", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
