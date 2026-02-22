import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
	const { table, id } = await req.json();
      
	const { error } = await supabase
	  .from(table)
	  .delete()
	  .eq("id", id);
      
	if (error) {
	  return Response.json({ error: error.message }, { status: 400 });
	}
      
	return Response.json({ success: true });
      }
      