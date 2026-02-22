import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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

    if (!phone || !/^\d{8,15}$/.test(String(phone).replace(/\D/g, ""))) {
      return NextResponse.json(
        { fieldErrors: { phone: "Enter a valid 10-digit phone number" } },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("waitlist_professionals")
      .insert([
        {
          full_name,
          email,
          profession,
          experience,
          phone_country_code: phone_country_code ?? null,
          phone: String(phone).replace(/\D/g, ""),
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
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
