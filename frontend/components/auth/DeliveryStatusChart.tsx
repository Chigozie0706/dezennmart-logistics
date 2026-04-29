const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
const data = [
  { pending: 12, pickedUp: 8, inTransit: 6, delivered: 10 },
  { pending: 10, pickedUp: 9, inTransit: 5, delivered: 8 },
  { pending: 18, pickedUp: 12, inTransit: 8, delivered: 5 },
  { pending: 14, pickedUp: 10, inTransit: 7, delivered: 6 },
  { pending: 8, pickedUp: 6, inTransit: 5, delivered: 14 },
  { pending: 10, pickedUp: 8, inTransit: 6, delivered: 10 },
];
const COLORS = {
  pending: "#3b82f6",
  pickedUp: "#f59e0b",
  inTransit: "#22c55e",
  delivered: "#84cc16",
};
const MAX = 40,
  H = 160,
  BW = 12,
  GAP = 3,
  GW = (BW + GAP) * 4;

export default function DeliveryStatusChart() {
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
          Deliveries Status Chart
        </span>
        <span
          style={{
            color: "#555",
            cursor: "pointer",
            fontSize: 18,
            letterSpacing: 2,
          }}
        >
          ···
        </span>
      </div>

      <svg
        width="100%"
        viewBox={`0 0 ${months.length * (GW + 14) + 30} ${H + 40}`}
        style={{ overflow: "visible" }}
      >
        {[0, 10, 20, 30, 40].map((v) => {
          const y = H - (v / MAX) * H;
          return (
            <g key={v}>
              <text x={0} y={y + 4} fontSize={9} fill="#444" textAnchor="end">
                {v}k
              </text>
              <line
                x1={14}
                y1={y}
                x2={months.length * (GW + 14) + 30}
                y2={y}
                stroke="#222"
                strokeWidth={1}
              />
            </g>
          );
        })}
        {data.map((d, i) => {
          const x = 20 + i * (GW + 14);
          const bars = [
            { val: d.pending, color: COLORS.pending },
            { val: d.pickedUp, color: COLORS.pickedUp },
            { val: d.inTransit, color: COLORS.inTransit },
            { val: d.delivered, color: COLORS.delivered },
          ];
          return (
            <g key={i}>
              {bars.map((b, j) => {
                const bh = (b.val / MAX) * H;
                return (
                  <rect
                    key={j}
                    x={x + j * (BW + GAP)}
                    y={H - bh}
                    width={BW}
                    height={bh}
                    rx={3}
                    fill={b.color}
                    opacity={0.85}
                  />
                );
              })}
              <text
                x={x + GW / 2 - 4}
                y={H + 16}
                fontSize={9}
                fill="#555"
                textAnchor="middle"
              >
                {months[i]}
              </text>
            </g>
          );
        })}
      </svg>

      <div
        style={{ display: "flex", gap: 14, marginTop: 12, flexWrap: "wrap" }}
      >
        {Object.entries(COLORS).map(([key, color]) => (
          <div
            key={key}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: 11,
              color: "#888",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: color,
              }}
            />
            {key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (s) => s.toUpperCase())}
          </div>
        ))}
      </div>
    </div>
  );
}
