"use client";

import { useState } from "react";
import Sidebar from "./auth/Sidebar";

/* ── Types ── */
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

/* ── Mock Data ── */
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

/* ── Status Badge ── */
const statusStyles: Record<Status, string> = {
  Pending: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  "In-transit": "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  Delivered: "bg-green-500/15 text-green-400 border border-green-500/30",
  Cancelled: "bg-red-500/15 text-red-400 border border-red-500/30",
};

function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

/* ── Type Badge ── */
const typeStyles: Record<OrderType, string> = {
  Local: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  Interstate: "bg-[#2a2a2a] text-[#888] border border-[#333]",
  International: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
};

function TypeBadge({ type }: { type: OrderType }) {
  return (
    <span
      className={`text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${typeStyles[type]}`}
    >
      {type}
    </span>
  );
}

/* ── Priority Badge ── */
function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span
      className={`text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap
      ${
        priority === "Express"
          ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
          : "bg-[#2a2a2a] text-[#888] border border-[#333]"
      }`}
    >
      {priority}
    </span>
  );
}

/* ── Column Header ── */
function ColHeader({ label }: { label: string }) {
  return (
    <th className="text-left text-[11px] font-medium text-[#555] py-3 px-4 whitespace-nowrap">
      <span className="flex items-center gap-1">
        {label}
        {label !== "" && <span className="text-[#444]">↑</span>}
      </span>
    </th>
  );
}

/* ── Main Page ── */
export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<Status | "All">("All");
  const [visible, setVisible] = useState(10);

  const filtered = ORDERS.filter((o) => {
    const matchSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.rider.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const shown = filtered.slice(0, visible);

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-[#e0e0e0] overflow-hidden font-[var(--font-dm)]">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-[#1e1e1e] shrink-0">
          <h1 className="font-[var(--font-syne)] font-bold text-[26px] text-[#f0f0f0]">
            Orders
          </h1>
          <div className="flex items-center gap-3">
            {/* Export */}
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[13px] text-[#aaa] hover:border-[#444] hover:text-[#e0e0e0] transition-all cursor-pointer">
              <span>↑</span> Export
            </button>
            {/* Date Range */}
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[13px] text-[#aaa] hover:border-[#444] hover:text-[#e0e0e0] transition-all cursor-pointer whitespace-nowrap">
              📅 14 Jan, 2026 – 24 Jan, 2026{" "}
              <span className="text-[#555]">∨</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-7 py-6 flex flex-col gap-5">
          {/* Summary Stats */}
          <div className="grid grid-cols-4 gap-3.5">
            {[
              {
                label: "Total Orders",
                value: "16",
                icon: "📦",
                color: "text-[#f0f0f0]",
              },
              {
                label: "In Transit",
                value: "4",
                icon: "🚚",
                color: "text-blue-400",
              },
              {
                label: "Delivered",
                value: "3",
                icon: "✅",
                color: "text-green-400",
              },
              {
                label: "Cancelled",
                value: "2",
                icon: "❌",
                color: "text-red-400",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[#1a1a1a] border border-[#222] rounded-2xl p-4 hover:border-[#333] transition-colors"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[#777] flex items-center gap-1.5">
                    <span>{s.icon}</span>
                    {s.label}
                  </span>
                </div>
                <div
                  className={`font-[var(--font-syne)] font-bold text-3xl ${s.color}`}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          {/* Table card */}
          <div className="bg-[#1a1a1a] border border-[#222] rounded-2xl overflow-hidden">
            {/* Table toolbar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#222]">
              <div className="flex items-center gap-3">
                <span className="text-[13px] text-[#666] font-medium">
                  {filtered.length} Orders
                </span>
                {/* Filter tabs */}
                <div className="flex items-center gap-1 bg-[#111] border border-[#2a2a2a] rounded-xl p-1">
                  {(
                    [
                      "All",
                      "Pending",
                      "In-transit",
                      "Delivered",
                      "Cancelled",
                    ] as const
                  ).map((s) => (
                    <button
                      key={s}
                      onClick={() => setStatusFilter(s)}
                      className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all cursor-pointer border-none
                        ${
                          statusFilter === s
                            ? "bg-[#ff2d2d] text-white"
                            : "bg-transparent text-[#666] hover:text-[#ccc]"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="flex items-center bg-[#111] border border-[#2a2a2a] rounded-xl px-3 py-2 gap-2 w-[280px] focus-within:border-[#ff2d2d] transition-colors">
                <span className="text-[#555] text-sm">🔍</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search order, customer, rider..."
                  className="bg-transparent border-none outline-none text-[#aaa] text-[13px] w-full placeholder:text-[#444]"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="text-[#555] hover:text-[#aaa] text-xs cursor-pointer border-none bg-transparent"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-[#1e1e1e]">
                  <tr className="bg-[#141414]">
                    <ColHeader label="Order ID" />
                    <ColHeader label="Status" />
                    <ColHeader label="Customer" />
                    <ColHeader label="Pickup Location" />
                    <ColHeader label="Drop-off Location" />
                    <ColHeader label="Type" />
                    <ColHeader label="Priority" />
                    <ColHeader label="Rider" />
                    <th className="w-8" />
                  </tr>
                </thead>
                <tbody>
                  {shown.map((order, i) => (
                    <tr
                      key={order.id}
                      className={`border-b border-[#1e1e1e] hover:bg-white/[0.02] transition-colors group
                        ${i % 2 === 0 ? "bg-transparent" : "bg-[#141414]/40"}`}
                    >
                      <td className="px-4 py-3.5 text-[13px] text-[#888] font-mono whitespace-nowrap">
                        {order.id}
                      </td>
                      <td className="px-4 py-3.5">
                        <StatusBadge status={order.status} />
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">
                            {order.customerAvatar}
                          </span>
                          <span className="text-[13px] text-[#e0e0e0] font-medium whitespace-nowrap">
                            {order.customer}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-[13px] text-[#aaa] whitespace-nowrap">
                        {order.pickup}
                      </td>
                      <td className="px-4 py-3.5 text-[13px] text-[#aaa] whitespace-nowrap">
                        {order.dropoff}
                      </td>
                      <td className="px-4 py-3.5">
                        <TypeBadge type={order.type} />
                      </td>
                      <td className="px-4 py-3.5">
                        <PriorityBadge priority={order.priority} />
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{order.riderAvatar}</span>
                          <span className="text-[13px] text-[#e0e0e0] whitespace-nowrap">
                            {order.rider}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5">
                        <button className="text-[#555] hover:text-[#aaa] transition-colors opacity-0 group-hover:opacity-100 cursor-pointer border-none bg-transparent text-lg tracking-widest">
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

            {/* Load more */}
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
