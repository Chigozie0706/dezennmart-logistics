"use client";

const mainNav = [
  { icon: "⊞", label: "Dashboard", active: true },
  { icon: "🚚", label: "Deliveries", active: false },
  { icon: "🚴", label: "Riders", active: false },
  { icon: "💰", label: "Earnings", active: false },
  { icon: "⭐", label: "Ratings & Feedback", active: false },
];

const bottomNav = [
  { icon: "🔔", label: "Notifications" },
  { icon: "⚙️", label: "Settings" },
  { icon: "ℹ️", label: "Support" },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 220,
        flexShrink: 0,
        background: "#141414",
        borderRight: "1px solid #1e1e1e",
        display: "flex",
        flexDirection: "column",
        padding: "20px 14px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "4px 8px 20px",
        }}
      >
        <div style={{ display: "flex", gap: 3 }}>
          {[
            [1, 0.5],
            [0.5, 1],
          ].map((col, ci) => (
            <div
              key={ci}
              style={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              {col.map((op, ri) => (
                <div
                  key={ri}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#ff2d2d",
                    opacity: op,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <span
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 800,
            fontSize: 14,
            letterSpacing: "0.1em",
            color: "#f0f0f0",
          }}
        >
          DEZENMART
        </span>
      </div>

      {/* Main nav */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {mainNav.map((item) => (
          <button
            key={item.label}
            className="dash-nav-btn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 13,
              fontWeight: item.active ? 600 : 400,
              background: item.active ? "#fff" : "transparent",
              color: item.active ? "#111" : "#666",
              textAlign: "left",
              width: "100%",
            }}
          >
            <span style={{ fontSize: 15 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      <div style={{ flex: 1 }} />

      {/* Bottom nav */}
      <div
        style={{
          borderTop: "1px solid #222",
          paddingTop: 12,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {bottomNav.map((item) => (
          <button
            key={item.label}
            className="dash-nav-btn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 12px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 13,
              background: "transparent",
              color: "#555",
              textAlign: "left",
              width: "100%",
            }}
          >
            <span style={{ fontSize: 14 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* Upgrade */}
      <button
        style={{
          background: "#ff2d2d",
          color: "#fff",
          border: "none",
          borderRadius: 10,
          padding: "11px 0",
          fontFamily: "'Syne',sans-serif",
          fontWeight: 600,
          fontSize: 13,
          cursor: "pointer",
          marginTop: 10,
        }}
      >
        Upgrade for Free
      </button>

      {/* User */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 6px 2px",
          borderTop: "1px solid #1e1e1e",
          marginTop: 10,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "#2a2a2a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            border: "1.5px solid #333",
          }}
        >
          🐵
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 10, color: "#555", margin: 0 }}>
            Welcome back 👋
          </p>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#e0e0e0",
              margin: 0,
              fontFamily: "'Syne',sans-serif",
            }}
          >
            Johnathan
          </p>
        </div>
        <span style={{ color: "#444", fontSize: 16 }}>›</span>
      </div>
    </aside>
  );
}
