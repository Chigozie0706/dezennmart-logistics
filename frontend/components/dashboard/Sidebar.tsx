"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarContext";

const mainNav = [
  { icon: "⊞", label: "Dashboard", href: "/dashboard" },
  { icon: "📦", label: "Orders", href: "/orderpage" },
  { icon: "🚚", label: "Deliveries", href: "/deliveries" },
  { icon: "🚴", label: "Riders", href: "/riders" },
  { icon: "💰", label: "Earnings", href: "/earnings" },
  { icon: "⭐", label: "Ratings & Feedback", href: "/ratings" },
];

const bottomNav = [
  { icon: "🔔", label: "Notifications", href: "/notifications" },
  { icon: "⚙️", label: "Settings", href: "/settings" },
  { icon: "ℹ️", label: "Support", href: "/support" },
];

function NavLink({
  icon,
  label,
  href,
  collapsed,
}: {
  icon: string;
  label: string;
  href: string;
  collapsed: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");
  const { close } = useSidebar();

  return (
    <Link
      href={href}
      onClick={close}
      title={collapsed ? label : undefined}
      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] w-full transition-all font-[var(--font-dm)] no-underline
        ${collapsed ? "justify-center" : ""}
        ${
          active
            ? "bg-white text-[#111] font-semibold"
            : "bg-transparent text-[#666] hover:bg-white/5 hover:text-[#ccc]"
        }`}
    >
      <span className="text-base shrink-0">{icon}</span>
      {!collapsed && <span className="truncate">{label}</span>}
    </Link>
  );
}

function SidebarInner({ collapsed }: { collapsed: boolean }) {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Logo */}
      <div
        className={`flex items-center gap-2.5 pb-5 pt-1 ${collapsed ? "justify-center" : "px-1"}`}
      >
        <div className="flex gap-0.5 shrink-0">
          {(
            [
              [1, 0.5],
              [0.5, 1],
            ] as number[][]
          ).map((col, ci) => (
            <div key={ci} className="flex flex-col gap-0.5">
              {col.map((op, ri) => (
                <div
                  key={ri}
                  style={{ opacity: op }}
                  className="w-2.5 h-2.5 rounded-full bg-[#ff2d2d]"
                />
              ))}
            </div>
          ))}
        </div>
        {!collapsed && (
          <span className="font-[var(--font-syne)] font-extrabold text-[13px] tracking-[0.1em] text-[#f0f0f0] truncate">
            DEZENEXPRESS
          </span>
        )}
      </div>

      {/* Main nav */}
      <nav className="flex flex-col gap-0.5">
        {mainNav.map((item) => (
          <NavLink key={item.href} {...item} collapsed={collapsed} />
        ))}
      </nav>

      <div className="flex-1" />

      {/* Bottom nav */}
      <div className="border-t border-[#222] pt-3 flex flex-col gap-0.5">
        {bottomNav.map((item) => (
          <NavLink key={item.href} {...item} collapsed={collapsed} />
        ))}
      </div>

      {/* Upgrade */}
      {!collapsed && (
        <button className="mt-2.5 bg-[#ff2d2d] text-white border-none rounded-xl py-2.5 font-[var(--font-syne)] font-semibold text-[13px] cursor-pointer tracking-wide hover:opacity-90 transition-opacity w-full">
          Upgrade for Free
        </button>
      )}

      {/* User */}
      <div
        className={`flex items-center gap-2.5 pt-3 mt-2.5 border-t border-[#1e1e1e] ${collapsed ? "justify-center" : ""}`}
      >
        <div className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center text-lg border border-[#333] shrink-0">
          🐵
        </div>
        {!collapsed && (
          <>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[#555] m-0">Welcome back 👋</p>
              <p className="text-[13px] font-semibold text-[#e0e0e0] m-0 font-[var(--font-syne)] truncate">
                Johnathan
              </p>
            </div>
            <span className="text-[#444] text-base shrink-0">›</span>
          </>
        )}
      </div>
    </div>
  );
}

export default function Sidebar() {
  const { isOpen, isCollapsed, collapse, close } = useSidebar();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={close}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`
        fixed top-0 left-0 h-full z-40 w-[220px]
        bg-[#141414] border-r border-[#1e1e1e] p-3.5
        transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <button
          onClick={close}
          className="absolute top-4 right-3 text-[#555] hover:text-[#aaa] bg-transparent border-none cursor-pointer text-base leading-none"
        >
          ✕
        </button>
        <SidebarInner collapsed={false} />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={`
        hidden lg:flex flex-col shrink-0 relative
        bg-[#141414] border-r border-[#1e1e1e] p-3.5
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-[68px]" : "w-[220px]"}
      `}
      >
        {/* Collapse toggle */}
        <button
          onClick={collapse}
          className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-[#2a2a2a] border border-[#333]
            flex items-center justify-center text-[#888] hover:text-white hover:bg-[#333]
            transition-all cursor-pointer z-10 text-xs"
        >
          {isCollapsed ? "›" : "‹"}
        </button>
        <SidebarInner collapsed={isCollapsed} />
      </aside>
    </>
  );
}
