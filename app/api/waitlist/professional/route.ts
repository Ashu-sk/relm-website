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
    const {
      full_name,
      email,
      profession,
      experience,
      phone_country_code,
      phone,
      linkedin,
      desired_domain,
      country,
      interests,
    } = body;

    if (!full_name || !email || !profession || !experience) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!phone || !/^\d{8,15}$/.test(String(phone).replaceAll(/\D/g, ""))) {
      return NextResponse.json(
        { fieldErrors: { phone: "Enter a valid 10-digit phone number" } },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    const { error } = await supabase.from("waitlist_professionals").insert([
      {
        full_name,
        email,
        profession,
        experience,
        phone_country_code: phone_country_code ?? null,
        phone: String(phone).replaceAll(/\D/g, ""),
        linkedin,
        desired_domain,
        country,
        interests,
      },
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
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
    console.error("Waitlist professional error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
