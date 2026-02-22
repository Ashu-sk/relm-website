import AdminAction from "./AdminAction";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Update this table name to match your Supabase schema (e.g. waitlist_users, users, etc.)
const WAITLIST_TABLE = "waitlist_users";
const PROFESSIONALS_TABLE = "waitlist_professionals";


type WaitlistRow = {
  id: string;
  email: string;
  full_name: string | null;
  desired_domain: string | null;
  country: string | null;
  phone_country_code?: string | null;
  phone?: string | null;
  status: string;
  created_at: string;
};

type ProfessionalRow = {
  id: string;
  email: string;
  full_name: string | null;
  profession: string | null;
  experience: number | null;
  phone_country_code?: string | null;
  phone?: string | null;
  country?: string | null;
  interests: string[] | null;
  status: string;
  created_at: string;
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const { key } = await searchParams;
  const adminSecret = process.env.ADMIN_SECRET;
  
  if (!adminSecret || key !== adminSecret) {
    return (
      <main className="min-h-screen px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-md rounded-2xl bg-(--bg-elevated) p-8 text-center">
          <h1 className="text-(--text-title) font-semibold text-(--fg-primary)">
            Admin
          </h1>
          <p className="mt-4 text-(--text-body) text-(--fg-secondary)">
            Unauthorized. Use the correct link or set ADMIN_SECRET in .env.local.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block text-(--text-caption) text-(--fg-secondary) underline hover:text-(--fg-primary)"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    );
  }

  const { data: rows, error } = await supabaseAdmin
    .from(WAITLIST_TABLE)
    .select("*")
    .order("created_at", { ascending: false });

  const { data: professionalRows } = await supabaseAdmin
    .from(PROFESSIONALS_TABLE)
    .select("*")
    .order("created_at", { ascending: false });
    

  if (error) {
    return (
      <main className="min-h-screen px-4 py-16 sm:px-6 md:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-(--text-headline) font-semibold text-(--fg-primary)">
            Admin
          </h1>
          <div className="mt-6 rounded-xl bg-red-500/10 p-4 text-(--fg-primary)">
            <p className="font-medium">Error loading waitlist</p>
            <p className="mt-1 text-(--text-caption) text-(--fg-secondary)">
              {error.message}
            </p>
            <p className="mt-2 text-(--text-caption) text-(--fg-tertiary)">
              Ensure the table &quot;{WAITLIST_TABLE}&quot; exists in Supabase, or
              update WAITLIST_TABLE in app/admin/page.tsx.
            </p>
          </div>
          <Link
            href="/"
            className="mt-6 inline-block text-(--text-caption) text-(--fg-secondary) underline hover:text-(--fg-primary)"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    );
  }

  const users = (rows ?? []) as WaitlistRow[];
  const professionals = (professionalRows ?? []) as ProfessionalRow[];
  const capitalize = (text?: string | null) =>
    text ? text.charAt(0).toUpperCase() + text.slice(1) : "-";
  

  return (

      <main className="min-h-screen px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-16">
    
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-semibold">Admin Dashboard</h1>
            <p className="text-gray-400">
              Manage Relm waitlist applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-10">
  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
    <h3 className="text-sm text-gray-400">Total Users</h3>
    <p className="text-3xl font-bold">{users.length}</p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
    <h3 className="text-sm text-gray-400">Total Professionals</h3>
    <p className="text-3xl font-bold">{professionals.length}</p>
  </div>
</div>

    
          {/* USERS */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Users Waitlist ({users.length})
            </h2>
    
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Phone</th>
                    <th className="px-4 py-3">Country</th>
                    <th className="px-4 py-3">Domain</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((row, i) => (
                    <tr key={row.id ?? i} className="border-t border-white/10">
                      <td className="px-4 py-3">{row.email}</td>
                      <td className="px-4 py-3">{capitalize(row.full_name) ?? "-"}</td>
                      <td className="px-4 py-3">
                        {row.phone
                          ? `${row.phone_country_code ?? ""} ${row.phone}`.trim()
                          : "-"}
                      </td>
                      <td className="px-4 py-3">{capitalize(row.country) ?? "-"}</td>
                      <td className="px-4 py-3">{row.desired_domain ?? "-"}</td>
                      <td className="px-4 py-3">
                        {row.created_at
                          ? new Date(row.created_at).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="px-4 py-3">
  <AdminAction
    id={row.id}
    table="waitlist_users"
  />
</td>
<td className="px-4 py-3">
  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${
      row.status === "approved"
        ? "bg-green-500/20 text-green-400"
        : row.status === "rejected"
        ? "bg-yellow-500/20 text-yellow-400"
        : "bg-gray-500/20 text-gray-400"
    }`}
  >
    {row.status}
  </span>
</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
    
          {/* PROFESSIONALS */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Professionals Waitlist ({professionals.length})
            </h2>
    
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Phone</th>
                    <th className="px-4 py-3">Profession</th>
                    <th className="px-4 py-3">Experience</th>
                    <th className="px-4 py-3">Interest</th>
                    <th className="px-4 py-3">Country</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {professionals.map((row, i) => (
                    <tr key={row.id ?? i} className="border-t border-white/10">
                      <td className="px-4 py-3">{row.email}</td>
                      <td className="px-4 py-3">{row.full_name ?? "-"}</td>
                      <td className="px-4 py-3">
                        {row.phone
                          ? `${row.phone_country_code ?? ""} ${row.phone}`.trim()
                          : "-"}
                      </td>
                      <td className="px-4 py-3">{row.profession
  ? row.profession.charAt(0).toUpperCase() + row.profession.slice(1)
  : "-"}
</td>
                      <td className="px-4 py-3">{row.experience ?? "-"}</td>
                      <td className="px-4 py-3">{row.interests ?? "-"}</td>
                      <td className="px-4 py-3">{capitalize(row.country) ?? "-"}</td>
                      <td className="px-4 py-3">
                        {row.created_at
                          ? new Date(row.created_at).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="px-4 py-3">
  <AdminAction
    id={row.id}
    table="waitlist_professionals"
  />
</td>
<td className="px-4 py-3">
  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${
      row.status === "approved"
        ? "bg-green-500/20 text-green-400"
        : row.status === "rejected"
        ? "bg-yellow-500/20 text-yellow-400"
        : "bg-gray-500/20 text-gray-400"
    }`}
  >
    {row.status}
  </span>
</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
    
        </div>
      </main>
    );
    
}
