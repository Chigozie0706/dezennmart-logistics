"use client";

import Sidebar from "./Sidebar";

import DeliveryStatusChart from "./DeliveryStatusChart";
import LineChartWidget from "./LineChartWidget";
import TopRiders from "./TopRiders";
import MapWidget from "./MapWidget";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#0f0f0f] text-[#e0e0e0] overflow-hidden font-[var(--font-dm)]">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-[#1e1e1e] shrink-0">
          <h1 className="font-[var(--font-syne)] font-bold text-[26px] text-[#f0f0f0]">
            Dashboard
          </h1>
          <div className="flex items-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-3.5 py-2 gap-2 w-[280px]">
            <span className="text-[#555] text-sm">🔍</span>
            <input
              placeholder="Search"
              className="bg-transparent border-none outline-none text-[#aaa] text-sm font-[var(--font-dm)] w-full"
            />
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-7 py-6 flex flex-col gap-5">
          <StatCards />

          <div className="grid grid-cols-2 gap-3.5">
            <DeliveryStatusChart />
            <LineChartWidget />
          </div>

          <div className="grid grid-cols-[1fr_1.4fr] gap-3.5">
            <TopRiders />
            <MapWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
