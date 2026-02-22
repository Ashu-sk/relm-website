import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();

  const { fullName, email, desiredDomain, country, phone_country_code, phone } =
    body;

  // Basic validation
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

  // Call atomic RPC
  const { error } = await supabaseAdmin
  .from("waitlist_users")
  .insert({
    email: email.toLowerCase(),
    full_name: fullName,
    desired_domain: desiredDomain.toLowerCase(),
    country: country ?? null,
    phone_country_code: phone_country_code ?? null,
    phone: String(phone).replace(/\D/g, ""),
    status: "pending",
  });


  if (error) {
	// Explicit domain-claim conflict
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
}
