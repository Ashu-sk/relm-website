import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    const h = await headers();
    const ipRaw = h.get("x-forwarded-for") ?? h.get("x-real-ip") ?? "127.0.0.1";
    const ip = ipRaw.split(",")[0]?.trim() || "127.0.0.1";
    if (!rateLimit(`waitlist:professional:${ip}`, 5)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

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

    const { error } = await supabaseAdmin.from("waitlist_professionals").insert([
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
