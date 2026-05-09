import { useState } from "react";

export default function UsersApp({ user: currentUser }) {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Ali Hassan",   email: "ali@corp.io",   role: "Engineer", status: "Active",   joined: "Jan 2024" },
    { id: 2, name: "Sara Malik",   email: "sara@corp.io",  role: "Designer", status: "Active",   joined: "Mar 2024" },
    { id: 3, name: "Umar Farooq", email: "umar@corp.io",  role: "PM",       status: "Inactive", joined: "Dec 2023" },
    { id: 4, name: "Hina Baig",   email: "hina@corp.io",  role: "Engineer", status: "Active",   joined: "Feb 2024" },
    { id: 5, name: "Bilal Ahmed",  email: "bilal@corp.io", role: "DevOps",   status: "Active",   joined: "Apr 2024" },
  ];

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <h2
            style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 }}
          >
            User Management
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            Managed by <strong>{currentUser?.name}</strong>
          </p>
        </div>
        <span
          style={{
            background: "#fef3c7",
            color: "#b45309",
            padding: "0.3rem 0.75rem",
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}
        >
          USERS MODULE v1.4
        </span>
      </div>

      {/* Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name or email..."
        style={{
          width: "100%",
          padding: "0.65rem 1rem",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
          fontSize: "0.9rem",
          marginBottom: "1rem",
          boxSizing: "border-box",
          background: "#f8fafc",
          outline: "none",
        }}
      />

      {/* Table */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
              {["Name", "Email", "Role", "Status", "Joined"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "0.75rem 1rem",
                    textAlign: "left",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((u, i) => (
              <tr
                key={u.id}
                style={{
                  borderBottom:
                    i < filtered.length - 1 ? "1px solid #f1f5f9" : "none",
                }}
              >
                <td style={{ padding: "0.85rem 1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: `hsl(${u.id * 60}, 60%, 55%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {u.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span
                      style={{
                        fontWeight: 600,
                        color: "#0f172a",
                        fontSize: "0.875rem",
                      }}
                    >
                      {u.name}
                    </span>
                  </div>
                </td>
                <td style={{ padding: "0.85rem 1rem", color: "#64748b", fontSize: "0.85rem" }}>
                  {u.email}
                </td>
                <td style={{ padding: "0.85rem 1rem", color: "#334155", fontSize: "0.85rem" }}>
                  {u.role}
                </td>
                <td style={{ padding: "0.85rem 1rem" }}>
                  <span
                    style={{
                      padding: "0.2rem 0.6rem",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      background: u.status === "Active" ? "#dcfce7" : "#fee2e2",
                      color: u.status === "Active" ? "#15803d" : "#dc2626",
                    }}
                  >
                    {u.status}
                  </span>
                </td>
                <td style={{ padding: "0.85rem 1rem", color: "#94a3b8", fontSize: "0.8rem" }}>
                  {u.joined}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  style={{ padding: "2rem", textAlign: "center", color: "#94a3b8" }}
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
