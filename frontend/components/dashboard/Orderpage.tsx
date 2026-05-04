"use client";

import { useState } from "react";
import { useSidebar } from "@/components/dashboard/SidebarContext";

type Status = "Pending" | "In-transit" | "Delivered" | "Cancelled";
type OrderType = "Local" | "Interstate" | "International";
type Priority = "Express" | "Bulk";

interface Order {
  id: string;
  status: Status;
  customer: string;
  customerAvatar: string;
  pickup: string;
  dropoff: string;
  type: OrderType;
  priority: Priority;
  rider: string;
  riderAvatar: string;
}

const ORDERS: Order[] = [
  {
    id: "OR-48273619",
    status: "Pending",
    customer: "Chinedu Okafor",
    customerAvatar: "👨🏿",
    pickup: "Ikeja, Lagos",
    dropoff: "Choba, Rivers",
    type: "Local",
    priority: "Express",
    rider: "Chinedu Okafor",
    riderAvatar: "👨🏿",
  },
  {
    id: "OR-48273620",
    status: "In-transit",
    customer: "Aisha Khan",
    customerAvatar: "👩🏽",
    pickup: "Victoria Island, Lagos",
    dropoff: "Port Harcourt, Rivers",
    type: "Interstate",
    priority: "Bulk",
    rider: "Avery Johnson",
    riderAvatar: "👨🏻",
  },
  {
    id: "OR-48273621",
    status: "In-transit",
    customer: "Marcus Liu",
    customerAvatar: "👨🏻",
    pickup: "Ikorodu, Lagos",
    dropoff: "Lagos, Lagos",
    type: "International",
    priority: "Bulk",
    rider: "Maya Patel",
    riderAvatar: "👩🏽",
  },
  {
    id: "OR-48273622",
    status: "Cancelled",
    customer: "Leila Patel",
    customerAvatar: "👩🏽",
    pickup: "Lekki, Lagos",
    dropoff: "Abuja, FTC",
    type: "International",
    priority: "Bulk",
    rider: "Liam Thompson",
    riderAvatar: "👨🏻",
  },
  {
    id: "OR-48273623",
    status: "In-transit",
    customer: "Zachary Smith",
    customerAvatar: "👨🏼",
    pickup: "Surulere, Lagos",
    dropoff: "Enugu, Enugu",
    type: "Local",
    priority: "Express",
    rider: "Sophia Wang",
    riderAvatar: "👩🏻",
  },
  {
    id: "OR-48273624",
    status: "In-transit",
    customer: "Fatima Al-Farsi",
    customerAvatar: "👩🏽",
    pickup: "Yaba, Lagos",
    dropoff: "Ibadan, Oyo",
    type: "Local",
    priority: "Express",
    rider: "Ethan Kim",
    riderAvatar: "👨🏻",
  },
  {
    id: "OR-48273625",
    status: "Delivered",
    customer: "Henry Johnson",
    customerAvatar: "👨🏿",
    pickup: "Apapa, Lagos",
    dropoff: "Kaduna, Kaduna",
    type: "Local",
    priority: "Express",
    rider: "Zara Khan",
    riderAvatar: "👩🏽",
  },
  {
    id: "OR-48273626",
    status: "Delivered",
    customer: "Nina Garcia",
    customerAvatar: "👩🏽",
    pickup: "Mushin, Lagos",
    dropoff: "Benin City, Edo",
    type: "Local",
    priority: "Express",
    rider: "Noah Garcia",
    riderAvatar: "👨🏽",
  },
  {
    id: "OR-48273627",
    status: "Delivered",
    customer: "Rajesh Kumar",
    customerAvatar: "👨🏽",
    pickup: "Festac Town, Lagos",
    dropoff: "Onitsha, Anambra",
    type: "Interstate",
    priority: "Bulk",
    rider: "Isabella Martinez",
    riderAvatar: "👩🏻",
  },
  {
    id: "OR-48273628",
    status: "Cancelled",
    customer: "Emily Nguyen",
    customerAvatar: "👩🏻",
    pickup: "Gbagada, Lagos",
    dropoff: "Calabar, Cross River",
    type: "Interstate",
    priority: "Bulk",
    rider: "Oliver Brown",
    riderAvatar: "👨🏼",
  },
];

const statusStyles: Record<Status, string> = {
  Pending: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  "In-transit": "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  Delivered: "bg-green-500/15 text-green-400 border border-green-500/30",
  Cancelled: "bg-red-500/15 text-red-400 border border-red-500/30",
};
const typeStyles: Record<OrderType, string> = {
  Local: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  Interstate: "bg-[#2a2a2a] text-[#888] border border-[#333]",
  International: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
};
const priorityStyles: Record<Priority, string> = {
  Express: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  Bulk: "bg-[#2a2a2a] text-[#888] border border-[#333]",
};

function OrderCard({ o }: { o: Order }) {
  return (
    <div className="bg-[#141414] border border-[#222] rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-[#555] font-mono">{o.id}</span>
        <span
          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${statusStyles[o.status]}`}
        >
          {o.status}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl">{o.customerAvatar}</span>
        <span className="text-[13px] font-semibold text-[#e0e0e0]">
          {o.customer}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[12px] text-[#777]">
        <div>
          <span className="text-[10px] text-[#555] block mb-0.5">Pickup</span>
          {o.pickup}
        </div>
        <div>
          <span className="text-[10px] text-[#555] block mb-0.5">Drop-off</span>
          {o.dropoff}
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full ${typeStyles[o.type]}`}
        >
          {o.type}
        </span>
        <span
          className={`text-[11px] px-2 py-0.5 rounded-full ${priorityStyles[o.priority]}`}
        >
          {o.priority}
        </span>
      </div>
      <div className="flex items-center gap-2 pt-2 border-t border-[#222]">
        <span className="text-lg">{o.riderAvatar}</span>
        <span className="text-[12px] text-[#aaa]">{o.rider}</span>
      </div>
    </div>
  );
}

const FILTERS = [
  "All",
  "Pending",
  "In-transit",
  "Delivered",
  "Cancelled",
] as const;
type Filter = (typeof FILTERS)[number];

export default function OrdersPage() {
  const { toggle } = useSidebar();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("All");
  const [visible, setVisible] = useState(10);

  const filtered = ORDERS.filter((o) => {
    const q = search.toLowerCase();
    return (
      (o.id.toLowerCase().includes(q) ||
        o.customer.toLowerCase().includes(q) ||
        o.rider.toLowerCase().includes(q)) &&
      (filter === "All" || o.status === filter)
    );
  });

  const shown = filtered.slice(0, visible);

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-[#e0e0e0] overflow-hidden font-[var(--font-dm)]">
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Topbar */}
        <div className="flex items-center justify-between px-4 lg:px-7 py-4 lg:py-5 border-b border-[#1e1e1e] shrink-0 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Hamburger — mobile only */}
            <button
              onClick={toggle}
              className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer bg-transparent border-none shrink-0"
              aria-label="Open menu"
            >
              <span className="w-5 h-0.5 bg-[#aaa] rounded block" />
              <span className="w-5 h-0.5 bg-[#aaa] rounded block" />
              <span className="w-5 h-0.5 bg-[#aaa] rounded block" />
            </button>
            <h1 className="font-[var(--font-syne)] font-bold text-xl lg:text-[26px] text-[#f0f0f0]">
              Orders
            </h1>
          </div>
          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            <button className="hidden sm:flex items-center gap-2 px-3 lg:px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[12px] lg:text-[13px] text-[#aaa] hover:border-[#444] hover:text-[#e0e0e0] transition-all cursor-pointer">
              ↑ Export
            </button>
            <button className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[12px] lg:text-[13px] text-[#aaa] hover:border-[#444] hover:text-[#e0e0e0] transition-all cursor-pointer whitespace-nowrap">
              📅 14 Jan, 2026 – 24 Jan, 2026{" "}
              <span className="text-[#555]">∨</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 lg:px-7 py-4 lg:py-6 flex flex-col gap-4 lg:gap-5">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3.5">
            {[
              {
                label: "Total Orders",
                value: String(ORDERS.length),
                icon: "📦",
                color: "text-[#f0f0f0]",
              },
              {
                label: "In Transit",
                value: String(
                  ORDERS.filter((o) => o.status === "In-transit").length,
                ),
                icon: "🚚",
                color: "text-blue-400",
              },
              {
                label: "Delivered",
                value: String(
                  ORDERS.filter((o) => o.status === "Delivered").length,
                ),
                icon: "✅",
                color: "text-green-400",
              },
              {
                label: "Cancelled",
                value: String(
                  ORDERS.filter((o) => o.status === "Cancelled").length,
                ),
                icon: "❌",
                color: "text-red-400",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[#1a1a1a] border border-[#222] rounded-2xl p-3 lg:p-4 hover:border-[#333] transition-colors"
              >
                <span className="text-[11px] lg:text-xs text-[#777] flex items-center gap-1.5 mb-2">
                  <span>{s.icon}</span>
                  <span className="truncate">{s.label}</span>
                </span>
                <div
                  className={`font-[var(--font-syne)] font-bold text-2xl lg:text-3xl ${s.color}`}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Table card */}
          <div className="bg-[#1a1a1a] border border-[#222] rounded-2xl overflow-hidden flex flex-col">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 lg:px-5 py-3 lg:py-4 border-b border-[#222]">
              <div className="flex items-center gap-2 overflow-x-auto shrink-0">
                <span className="text-[12px] text-[#555] whitespace-nowrap shrink-0">
                  {filtered.length} Orders
                </span>
                <div className="flex items-center gap-0.5 bg-[#111] border border-[#2a2a2a] rounded-xl p-1 shrink-0">
                  {FILTERS.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer border-none whitespace-nowrap
                        ${filter === f ? "bg-[#ff2d2d] text-white" : "bg-transparent text-[#666] hover:text-[#ccc]"}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center bg-[#111] border border-[#2a2a2a] rounded-xl px-3 py-2 gap-2 w-full sm:w-[240px] lg:w-[280px] focus-within:border-[#ff2d2d] transition-colors shrink-0">
                <span className="text-[#555] text-sm shrink-0">🔍</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search order, customer, rider..."
                  className="bg-transparent border-none outline-none text-[#aaa] text-[13px] w-full placeholder:text-[#444]"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="text-[#555] hover:text-[#aaa] text-xs cursor-pointer border-none bg-transparent shrink-0"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Desktop table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-[#1e1e1e] bg-[#141414]">
                  <tr>
                    {[
                      "Order ID",
                      "Status",
                      "Customer",
                      "Pickup Location",
                      "Drop-off Location",
                      "Type",
                      "Priority",
                      "Rider",
                      "",
                    ].map((h, i) => (
                      <th
                        key={i}
                        className="text-left text-[11px] font-medium text-[#555] py-3 px-4 whitespace-nowrap"
                      >
                        {h && (
                          <span className="flex items-center gap-1">
                            {h} <span className="text-[#3a3a3a]">↑</span>
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {shown.map((o, i) => (
                    <tr
                      key={o.id}
                      className={`border-b border-[#1e1e1e] hover:bg-white/[0.02] transition-colors group ${i % 2 !== 0 ? "bg-[#141414]/40" : ""}`}
                    >
                      <td className="px-4 py-3.5 text-[13px] text-[#888] font-mono whitespace-nowrap">
                        {o.id}
                      </td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${statusStyles[o.status]}`}
                        >
                          {o.status}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{o.customerAvatar}</span>
                          <span className="text-[13px] text-[#e0e0e0] font-medium whitespace-nowrap">
                            {o.customer}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-[13px] text-[#aaa] whitespace-nowrap">
                        {o.pickup}
                      </td>
                      <td className="px-4 py-3.5 text-[13px] text-[#aaa] whitespace-nowrap">
                        {o.dropoff}
                      </td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`text-[11px] px-2.5 py-1 rounded-full ${typeStyles[o.type]}`}
                        >
                          {o.type}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`text-[11px] px-2.5 py-1 rounded-full ${priorityStyles[o.priority]}`}
                        >
                          {o.priority}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{o.riderAvatar}</span>
                          <span className="text-[13px] text-[#e0e0e0] whitespace-nowrap">
                            {o.rider}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5">
                        <button className="text-[#555] hover:text-[#aaa] opacity-0 group-hover:opacity-100 transition-all cursor-pointer border-none bg-transparent text-lg tracking-widest">
                          ···
                        </button>
                      </td>
                    </tr>
                  ))}
                  {shown.length === 0 && (
                    <tr>
                      <td
                        colSpan={9}
                        className="px-4 py-12 text-center text-[#555] text-sm"
                      >
                        No orders match your search
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="lg:hidden flex flex-col gap-3 p-4">
              {shown.length === 0 ? (
                <p className="text-center text-[#555] text-sm py-8">
                  No orders match your search
                </p>
              ) : (
                shown.map((o) => <OrderCard key={o.id} o={o} />)
              )}
            </div>

            {visible < filtered.length && (
              <div className="flex justify-center py-4 border-t border-[#1e1e1e]">
                <button
                  onClick={() => setVisible((v) => v + 10)}
                  className="flex items-center gap-2 text-[13px] text-[#666] hover:text-[#aaa] transition-colors cursor-pointer border-none bg-transparent"
                >
                  ↓ Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
