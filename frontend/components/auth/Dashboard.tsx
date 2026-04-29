"use client";

import Sidebar from "./Sidebar";
import StatCards from "./Statcards";
import DeliveryStatusChart from "./DeliveryStatusChart";
import LineChartWidget from "./LineChartWidget";
import TopRiders from "./TopRiders";
import MapWidget from "./MapWidget";

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0f0f0f",
        fontFamily: "'DM Sans',sans-serif",
        color: "#e0e0e0",
        overflow: "hidden",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Topbar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 28px",
            borderBottom: "1px solid #1e1e1e",
            flexShrink: 0,
          }}
        >
          <h1
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 700,
              fontSize: 26,
              color: "#f0f0f0",
            }}
          >
            Dashboard
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: 10,
              padding: "8px 14px",
              gap: 8,
              width: 280,
            }}
          >
            <span style={{ color: "#555", fontSize: 14 }}>🔍</span>
            <input
              placeholder="Search"
              style={{
                background: "none",
                border: "none",
                outline: "none",
                color: "#aaa",
                fontSize: 13,
                fontFamily: "'DM Sans',sans-serif",
                width: "100%",
              }}
            />
          </div>
        </div>

        {/* Scrollable content */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Stat cards */}
          <StatCards />

          {/* Charts row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: 14,
            }}
          >
            <DeliveryStatusChart />
            <LineChartWidget />
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 14,
            }}
          >
            <TopRiders />
            <MapWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
