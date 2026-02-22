"use client";

type Props = {
  id: string;
  table: "waitlist_users" | "waitlist_professionals";
};

export default function AdminActions({ id, table }: Props) {
	const updateStatus = async (status: string) => {
		const res = await fetch("/admin/update-status", {
		  method: "POST",
		  headers: {
		    "Content-Type": "application/json",
		  },
		  body: JSON.stringify({
		    table,
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
    await fetch("/admin/delete", {
      method: "POST",
      body: JSON.stringify({
        table,
        id,
      }),
    });

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
