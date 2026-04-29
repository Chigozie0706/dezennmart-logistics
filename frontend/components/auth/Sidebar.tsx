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
    <aside className="w-[220px] shrink-0 bg-[#141414] border-r border-[#1e1e1e] flex flex-col p-3.5">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-2 pb-5">
        <div className="flex gap-0.5">
          {[
            [1, 0.5],
            [0.5, 1],
          ].map((col, ci) => (
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
        <span className="font-[var(--font-syne)] font-extrabold text-[13px] tracking-[0.1em] text-[#f0f0f0]">
          DEZENMART
        </span>
      </div>

      {/* Main nav */}
      <nav className="flex flex-col gap-0.5">
        {mainNav.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-none cursor-pointer text-[13px] text-left w-full transition-all font-[var(--font-dm)]
              ${
                item.active
                  ? "bg-white text-[#111] font-semibold"
                  : "bg-transparent text-[#666] font-normal hover:bg-white/5 hover:text-[#ccc]"
              }`}
          >
            <span className="text-[15px]">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex-1" />

      {/* Bottom nav */}
      <div className="border-t border-[#222] pt-3 flex flex-col gap-0.5">
        {bottomNav.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl border-none cursor-pointer text-[13px] text-left w-full bg-transparent text-[#555] hover:bg-white/5 hover:text-[#ccc] transition-all font-[var(--font-dm)]"
          >
            <span className="text-sm">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* Upgrade */}
      <button className="mt-2.5 bg-[#ff2d2d] text-white border-none rounded-xl py-2.5 font-[var(--font-syne)] font-semibold text-[13px] cursor-pointer tracking-wide hover:opacity-90 transition-opacity">
        Upgrade for Free
      </button>

      {/* User */}
      <div className="flex items-center gap-2.5 pt-3 mt-2.5 border-t border-[#1e1e1e]">
        <div className="w-9 h-9 rounded-full bg-[#2a2a2a] flex items-center justify-center text-lg border border-[#333]">
          🐵
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-[#555] m-0">Welcome back 👋</p>
          <p className="text-[13px] font-semibold text-[#e0e0e0] m-0 font-[var(--font-syne)] truncate">
            Johnathan
          </p>
        </div>
        <span className="text-[#444] text-base">›</span>
      </div>
    </aside>
  );
}
