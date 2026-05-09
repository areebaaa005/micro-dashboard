import { useAuth } from "../context/AuthContext";

const NAV_ITEMS = [
  { key: "analytics", label: "Analytics", icon: "📊", port: 3001 },
  { key: "users",     label: "Users",     icon: "👥", port: 3002 },
  { key: "settings",  label: "Settings",  icon: "⚙️",  port: 3003 },
];

export default function Sidebar({ activeApp, setActiveApp }) {
  const { user, token, logout, login } = useAuth();

  return (
    <aside
      style={{
        width: 240,
        background: "#0f172a",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        minHeight: "100vh",
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "1.5rem 1.25rem",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "1.1rem",
            }}
          >
            ⬡
          </div>
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", margin: 0 }}>
              MicroShell
            </p>
            <p style={{ color: "#475569", fontSize: "0.7rem", margin: 0 }}>
              Host App · port 3000
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ padding: "1.25rem 0.75rem", flex: 1 }}>
        <p
          style={{
            color: "#475569",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0 0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          Micro-Apps
        </p>

        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveApp(item.key)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.65rem 0.75rem",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: activeApp === item.key ? "#1e293b" : "transparent",
              color: activeApp === item.key ? "#fff" : "#94a3b8",
              fontSize: "0.875rem",
              fontWeight: activeApp === item.key ? 600 : 400,
              marginBottom: "0.25rem",
              textAlign: "left",
              transition: "all 0.15s",
            }}
          >
            <span style={{ fontSize: "1rem" }}>{item.icon}</span>
            <span style={{ flex: 1 }}>{item.label}</span>
            <span style={{ fontSize: "0.65rem", color: "#475569" }}>
              :{item.port}
            </span>
            {activeApp === item.key && (
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#6366f1",
                  flexShrink: 0,
                }}
              />
            )}
          </button>
        ))}
      </nav>

      {/* Shared Auth State Panel */}
      <div
        style={{
          padding: "1.25rem",
          borderTop: "1px solid #1e293b",
        }}
      >
        <p
          style={{
            color: "#475569",
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Shared Auth State
        </p>

        {user ? (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {user.avatar}
              </div>
              <div>
                <p style={{ color: "#e2e8f0", fontSize: "0.78rem", fontWeight: 600, margin: 0 }}>
                  {user.name}
                </p>
                <p style={{ color: "#475569", fontSize: "0.65rem", margin: 0 }}>
                  {user.role}
                </p>
              </div>
            </div>

            <p
              style={{
                color: "#334155",
                fontSize: "0.6rem",
                wordBreak: "break-all",
                lineHeight: 1.5,
                marginBottom: "0.75rem",
              }}
            >
              {token?.slice(0, 30)}...
            </p>

            <button
              onClick={logout}
              style={{
                width: "100%",
                padding: "0.4rem",
                background: "#1e293b",
                color: "#ef4444",
                border: "1px solid #ef444430",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <p style={{ color: "#ef4444", fontSize: "0.75rem", marginBottom: "0.75rem" }}>
              Not authenticated
            </p>
            <button
              onClick={login}
              style={{
                width: "100%",
                padding: "0.4rem",
                background: "#1e293b",
                color: "#10b981",
                border: "1px solid #10b98130",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
            >
              Login
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
