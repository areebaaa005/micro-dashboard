import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import MicroAppLoader from "./loader/MicroAppLoader";

const APP_TITLES = {
  analytics: "Revenue Analytics",
  users:     "User Management",
  settings:  "Settings",
};

export default function App() {
  const [activeApp, setActiveApp] = useState("analytics");

  return (
    <AuthProvider>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#f8fafc",
        }}
      >
        {/* Sidebar */}
        <Sidebar activeApp={activeApp} setActiveApp={setActiveApp} />

        {/* Main content area */}
        <main style={{ flex: 1, padding: "2rem", overflow: "auto" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            {/* Breadcrumb */}
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.8rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.25rem",
              }}
            >
              Shell (port 3000) → Remote Module → {activeApp}
            </p>

            {/* Page title */}
            <h1
              style={{
                fontSize: "1.85rem",
                fontWeight: 800,
                color: "#0f172a",
                margin: "0 0 2rem",
                letterSpacing: "-0.02em",
              }}
            >
              {APP_TITLES[activeApp]}
            </h1>

            {/* Micro-app mount point */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "1.5rem",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              <MicroAppLoader key={activeApp} appKey={activeApp} />
            </div>
          </div>
        </main>
      </div>
    </AuthProvider>
  );
}
