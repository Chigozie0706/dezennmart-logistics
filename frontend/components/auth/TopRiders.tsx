const riders = [
  { avatar: "👨", stars: 5, status: "Completed" as const },
  { avatar: "👩", stars: 5, status: "Pending" as const },
  { avatar: "🧑", stars: 5, status: "Pending" as const },
];

export default function TopRiders() {
  return (
    <div
      style={{
        background: "#1a1a1a",
        border: "1px solid #222",
        borderRadius: 14,
        padding: "18px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 600,
            fontSize: 14,
            color: "#e0e0e0",
          }}
        >
          Top-Rated Riders
        </span>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#888",
            fontSize: 12,
            cursor: "pointer",
          }}
        >
          📅 Jan 2024 ∨
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          padding: "6px 0",
          borderBottom: "1px solid #222",
          marginBottom: 8,
        }}
      >
        {["Profile Pic", "⭐ Rating Stars", "📦 Delivery Status"].map((h) => (
          <span
            key={h}
            style={{ fontSize: 11, color: "#555", fontWeight: 500 }}
          >
            {h}
          </span>
        ))}
      </div>

      {riders.map((r, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            padding: "9px 0",
            borderBottom: "1px solid #1e1e1e",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#2a2a2a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              border: "1.5px solid #333",
            }}
          >
            {r.avatar}
          </div>
          <span style={{ color: "#f59e0b", fontSize: 12 }}>
            {"★".repeat(r.stars)}
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              borderRadius: 5,
              padding: "3px 8px",
              display: "inline-block",
              background:
                r.status === "Completed"
                  ? "rgba(34,197,94,0.15)"
                  : "rgba(245,158,11,0.15)",
              color: r.status === "Completed" ? "#22c55e" : "#f59e0b",
            }}
          >
            + {r.status}
          </span>
        </div>
      ))}
    </div>
  );
}
