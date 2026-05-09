import { useState } from "react";

export default function SettingsApp({ user }) {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [theme, setTheme] = useState("light");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

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
            Settings
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            Account &amp; preferences
          </p>
        </div>
        <span
          style={{
            background: "#f3e8ff",
            color: "#7c3aed",
            padding: "0.3rem 0.75rem",
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}
        >
          SETTINGS MODULE v1.0
        </span>
      </div>

      <div style={{ display: "grid", gap: "1rem" }}>
        {/* Profile Card */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <h3
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "1rem",
            }}
          >
            Profile
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {user?.avatar}
            </div>
            <div>
              <p style={{ fontWeight: 700, color: "#0f172a", margin: 0 }}>{user?.name}</p>
              <p style={{ color: "#64748b", fontSize: "0.85rem", margin: "0.15rem 0 0" }}>
                {user?.role}
              </p>
              <p style={{ color: "#10b981", fontSize: "0.8rem", margin: "0.15rem 0 0" }}>
                ● Authenticated
              </p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <h3
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "1rem",
            }}
          >
            Notifications
          </h3>
          {Object.entries(notifications).map(([key, val]) => (
            <div
              key={key}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.65rem 0",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              <span
                style={{
                  fontSize: "0.9rem",
                  color: "#334155",
                  textTransform: "capitalize",
                }}
              >
                {key === "sms" ? "SMS" : key} notifications
              </span>

              {/* Toggle Switch */}
              <div
                onClick={() =>
                  setNotifications((n) => ({ ...n, [key]: !n[key] }))
                }
                style={{
                  width: 44,
                  height: 24,
                  borderRadius: "999px",
                  cursor: "pointer",
                  background: val ? "#6366f1" : "#e2e8f0",
                  position: "relative",
                  transition: "background 0.2s",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 3,
                    left: val ? 23 : 3,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#fff",
                    transition: "left 0.2s",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Theme */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <h3
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "1rem",
            }}
          >
            Appearance
          </h3>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {["light", "dark", "system"].map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  border: "2px solid",
                  borderColor: theme === t ? "#6366f1" : "#e2e8f0",
                  background: theme === t ? "#eef2ff" : "#f8fafc",
                  color: theme === t ? "#4338ca" : "#64748b",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textTransform: "capitalize",
                  transition: "all 0.15s",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          style={{
            background: saved ? "#10b981" : "#6366f1",
            color: "#fff",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: "0.9rem",
            alignSelf: "flex-start",
            transition: "background 0.3s",
          }}
        >
          {saved ? "✓ Saved!" : "Save Preferences"}
        </button>
      </div>
    </div>
  );
}
