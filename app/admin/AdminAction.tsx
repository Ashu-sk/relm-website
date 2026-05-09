"use client";

import { supabase } from "@/lib/supabaseClient";

type Props = {
  id: string;
  table: "waitlist_users" | "waitlist_professionals";
};

function tableToTarget(table: Props["table"]): "user" | "professional" {
  return table === "waitlist_users" ? "user" : "professional";
}

function getCsrfHeader(): Record<string, string> {
  if (typeof document === "undefined") return {};
  const re = /(?:^|; )csrf-token=([^;]*)/;
  const match = re.exec(document.cookie);
  const token = match?.[1] ? decodeURIComponent(match[1]) : null;
  return token ? { "x-csrf-token": token } : {};
}

export default function AdminActions({ id, table }: Readonly<Props>) {
	const updateStatus = async (status: string) => {
		const {
		  data: { session },
		} = await supabase.auth.getSession();
		if (!session?.access_token) {
		  alert("Not signed in");
		  return;
		}

		const res = await fetch("/admin/update-status", {
		  method: "POST",
		  headers: {
		    "Content-Type": "application/json",
		    Authorization: `Bearer ${session.access_token}`,
		    ...getCsrfHeader(),
		  },
		  body: JSON.stringify({
		    target: tableToTarget(table),
		    id,
		    status,
		  }),
		});
	      
		if (res.ok) {
		  alert(
		    status === "approved"
		      ? "Application Approved ✅"
		      : "Application Rejected ❌"
		  );
		  location.reload();
		} else {
		  alert("Something went wrong");
		}
	      };	      

  const deleteRow = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session?.access_token) {
      alert("Not signed in");
      return;
    }

    const res = await fetch("/admin/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({
        target: tableToTarget(table),
        id,
      }),
    });

    if (!res.ok) {
      alert("Something went wrong");
      return;
    }

    location.reload();
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => updateStatus("approved")}
        className="px-3 py-1 bg-green-500/20 text-green-400 rounded"
      >
        Approve
      </button>

      <button
        onClick={() => updateStatus("rejected")}
        className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded"
      >
        Reject
      </button>

      <button
        onClick={deleteRow}
        className="px-3 py-1 bg-red-500/20 text-red-400 rounded"
      >
        Delete
      </button>
    </div>
  );
}
