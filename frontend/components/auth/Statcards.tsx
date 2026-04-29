const stats = [
  {
    icon: "🚚",
    label: "Total Deliveries",
    value: "120,347",
    change: "28.4%",
    up: true,
    color: "#f0f0f0",
  },
  {
    icon: "📦",
    label: "Pending Deliveries",
    value: "23.6K",
    change: "5.2%",
    up: false,
    color: "#f59e0b",
  },
  {
    icon: "✅",
    label: "Completed Deliveries",
    value: "756",
    change: "3.1%",
    up: true,
    color: "#f0f0f0",
  },
  {
    icon: "💵",
    label: "Earnings Summary",
    value: "30",
    change: "11.3%",
    up: true,
    color: "#f0f0f0",
  },
];

export default function StatCards() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="stat-card"
          style={{
            background: "#1a1a1a",
            border: "1px solid #222",
            borderRadius: 14,
            padding: "16px 18px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: "#777",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>{s.icon}</span>
              {s.label}
            </span>
            <span style={{ color: "#444", fontSize: 16, cursor: "pointer" }}>
              ···
            </span>
          </div>
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 700,
              fontSize: 28,
              color: s.color,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            {s.value}
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                borderRadius: 20,
                padding: "2px 7px",
                display: "flex",
                alignItems: "center",
                gap: 3,
                background: s.up
                  ? "rgba(34,197,94,0.12)"
                  : "rgba(239,68,68,0.12)",
                color: s.up ? "#22c55e" : "#ef4444",
              }}
            >
              {s.up ? "↑" : "↓"} {s.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
