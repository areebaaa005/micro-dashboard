export default function AnalyticsApp({ user }) {
  const data = [
    { month: "Jan", revenue: 42000 },
    { month: "Feb", revenue: 58000 },
    { month: "Mar", revenue: 51000 },
    { month: "Apr", revenue: 73000 },
    { month: "May", revenue: 89000 },
    { month: "Jun", revenue: 95000 },
  ];
  const max = Math.max(...data.map((d) => d.revenue));

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
            Revenue Analytics
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: "0.25rem" }}>
            Viewing as <strong>{user?.name}</strong> · {user?.role}
          </p>
        </div>
        <span
          style={{
            background: "#dbeafe",
            color: "#1d4ed8",
            padding: "0.3rem 0.75rem",
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}
        >
          ANALYTICS MODULE v2.1
        </span>
      </div>

      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {[
          { label: "Total Revenue", value: "$408,000", delta: "+23.4%", color: "#10b981" },
          { label: "Active Users",  value: "12,800",   delta: "+18.2%", color: "#6366f1" },
          { label: "Conversion",    value: "4.73%",    delta: "+0.8%",  color: "#f59e0b" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "1.25rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: "#94a3b8",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                margin: 0,
              }}
            >
              {kpi.label}
            </p>
            <p
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#0f172a",
                margin: "0.25rem 0",
              }}
            >
              {kpi.value}
            </p>
            <span style={{ color: kpi.color, fontSize: "0.8rem", fontWeight: 600 }}>
              ▲ {kpi.delta} vs last period
            </span>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
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
            fontSize: "0.9rem",
            fontWeight: 700,
            color: "#334155",
            marginBottom: "1.25rem",
          }}
        >
          Monthly Revenue
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "1rem",
            height: "160px",
          }}
        >
          {data.map((d) => (
            <div
              key={d.month}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                height: "100%",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "flex-end",
                  width: "100%",
                }}
              >
                <div
                  title={`$${d.revenue.toLocaleString()}`}
                  style={{
                    width: "100%",
                    height: `${(d.revenue / max) * 100}%`,
                    background: "linear-gradient(180deg, #6366f1, #818cf8)",
                    borderRadius: "6px 6px 0 0",
                    minHeight: 8,
                    transition: "height 0.4s ease",
                    cursor: "pointer",
                  }}
                />
              </div>
              <span style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: 600 }}>
                {d.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
