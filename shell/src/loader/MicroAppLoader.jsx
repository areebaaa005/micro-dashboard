import { useState, useEffect } from "react";

// Each micro-app runs on its own port — simulating independent deployment
const APP_REGISTRY = {
  analytics: {
    label: "Analytics",
    url: "http://localhost:3001",
    port: 3001,
    color: "#dbeafe",
    badge: "ANALYTICS MODULE v2.1",
  },
  users: {
    label: "Users",
    url: "http://localhost:3002",
    port: 3002,
    color: "#fef3c7",
    badge: "USERS MODULE v1.4",
  },
  settings: {
    label: "Settings",
    url: "http://localhost:3003",
    port: 3003,
    color: "#f3e8ff",
    badge: "SETTINGS MODULE v1.0",
  },
};

export default function MicroAppLoader({ appKey }) {
  const [loading, setLoading] = useState(true);
  const [loadTime, setLoadTime] = useState(0);

  const app = APP_REGISTRY[appKey];

  useEffect(() => {
    setLoading(true);
    const start = Date.now();
    // Simulate the network latency of fetching a remote JS bundle
    const delay = 400 + Math.random() * 400;
    const t = setTimeout(() => {
      setLoading(false);
      setLoadTime(Math.round(Date.now() - start));
    }, delay);
    return () => clearTimeout(t);
  }, [appKey]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: 400,
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            border: "3px solid #e2e8f0",
            borderTop: "3px solid #6366f1",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
          Fetching <strong>{app?.label}</strong> bundle from port {app?.port}...
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div>
      {/* Load metadata bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem",
          padding: "0.5rem 0.75rem",
          background: "#f0fdf4",
          borderRadius: "8px",
          border: "1px solid #bbf7d0",
        }}
      >
        <span style={{ color: "#15803d", fontSize: "0.8rem", fontWeight: 600 }}>
          ✓ Remote module loaded in {loadTime}ms
        </span>
        <span style={{ color: "#64748b", fontSize: "0.75rem" }}>
          Source: {app?.url}
        </span>
        <span
          style={{
            marginLeft: "auto",
            background: app?.color,
            color: "#0f172a",
            padding: "0.2rem 0.6rem",
            borderRadius: "999px",
            fontSize: "0.7rem",
            fontWeight: 600,
          }}
        >
          {app?.badge}
        </span>
      </div>

      {/* The micro-app runs in its own iframe — true isolation, own JS context */}
      <iframe
        key={appKey}
        src={app?.url}
        title={`${app?.label} micro-app`}
        style={{
          width: "100%",
          height: 520,
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          background: "#f8fafc",
        }}
      />
    </div>
  );
}
