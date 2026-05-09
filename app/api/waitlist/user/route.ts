import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    const h = await headers();
    const ipRaw = h.get("x-forwarded-for") ?? h.get("x-real-ip") ?? "127.0.0.1";
    const ip = ipRaw.split(",")[0]?.trim() || "127.0.0.1";
    if (!rateLimit(`waitlist:user:${ip}`, 5)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { fullName, email, desiredDomain, country, phone_country_code, phone } =
      body;

    const emailStr = email != null ? String(email).trim() : "";
    const domainStr =
      desiredDomain != null ? String(desiredDomain).trim() : "";

    if (!emailStr) {
      return NextResponse.json(
        { fieldErrors: { email: "Email is required" } },
        { status: 400 }
      );
    }

    const phoneClean = String(phone ?? "")
      .replaceAll(/\D/g, "")
      .trim();
    const row = {
      email: emailStr.toLowerCase(),
      full_name:
        fullName != null && String(fullName).trim() !== ""
          ? String(fullName).trim()
          : null,
      desired_domain: domainStr !== "" ? domainStr.toLowerCase() : null,
      country:
        country != null && String(country).trim() !== ""
          ? String(country).trim()
          : null,
      phone_country_code:
        phone_country_code != null && String(phone_country_code).trim() !== ""
          ? String(phone_country_code).trim()
          : null,
      phone: phoneClean !== "" ? phoneClean : null,
      status: "pending",
    };

    const { error } = await supabaseAdmin.from("waitlist_users").insert(row);

    if (error) {
      if (error.code === "23505") {
        // Avoid domain enumeration; treat as idempotent success.
        return NextResponse.json({ success: true });
      }
      console.error("Waitlist insert error:", error.message, error.code, error.details);
      const message =
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal server error";
      return NextResponse.json({ error: message }, { status: 500 });
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
    const message =
      process.env.NODE_ENV === "development" && e instanceof Error
        ? e.message
        : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
