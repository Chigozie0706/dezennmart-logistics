export default function MapWidget() {
  return (
    <div
      style={{
        background: "#1a2a1a",
        borderRadius: 14,
        overflow: "hidden",
        position: "relative",
        minHeight: 280,
        border: "1px solid #222",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 280"
        style={{ position: "absolute", inset: 0 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width={500} height={280} fill="#1a2a1a" />
        {/* Green areas */}
        <rect
          x={300}
          y={160}
          width={200}
          height={120}
          rx={4}
          fill="#1e3a1e"
          opacity={0.8}
        />
        <rect
          x={0}
          y={200}
          width={120}
          height={80}
          rx={4}
          fill="#1e3a1e"
          opacity={0.6}
        />
        {/* Water */}
        <ellipse
          cx={220}
          cy={180}
          rx={60}
          ry={20}
          fill="#1a3a4a"
          opacity={0.7}
        />
        {/* Roads horizontal */}
        <rect x={0} y={100} width={500} height={8} fill="#2a2a2a" />
        <rect x={0} y={150} width={500} height={5} fill="#252525" />
        <rect x={0} y={60} width={500} height={4} fill="#222" />
        <rect x={0} y={200} width={500} height={6} fill="#252525" />
        <rect x={0} y={240} width={500} height={4} fill="#222" />
        {/* Roads vertical */}
        <rect x={80} y={0} width={6} height={280} fill="#252525" />
        <rect x={160} y={0} width={5} height={280} fill="#222" />
        <rect x={250} y={0} width={8} height={280} fill="#2a2a2a" />
        <rect x={340} y={0} width={5} height={280} fill="#222" />
        <rect x={420} y={0} width={4} height={280} fill="#222" />
        {/* Diagonal */}
        <line
          x1={80}
          y1={100}
          x2={340}
          y2={200}
          stroke="#2a2a2a"
          strokeWidth={6}
        />
        {/* Delivery route */}
        <path
          d="M 120 104 Q 200 104 250 140 Q 300 175 380 168"
          stroke="#22c55e"
          strokeWidth={3}
          fill="none"
          strokeDasharray="6,3"
          opacity={0.9}
        />
        {/* ATM */}
        <rect x={370} y={88} width={28} height={16} rx={3} fill="#7c3aed" />
        <text
          x={384}
          y={100}
          fontSize={9}
          fill="#fff"
          textAnchor="middle"
          fontWeight="bold"
        >
          ATM
        </text>
        {/* Pins */}
        <circle cx={240} cy={175} r={8} fill="#ff2d2d" opacity={0.9} />
        <circle cx={310} cy={168} r={6} fill="#f59e0b" opacity={0.9} />
        <circle cx={160} cy={200} r={6} fill="#3b82f6" opacity={0.9} />
        {/* Labels */}
        <text
          x={400}
          y={50}
          fontSize={11}
          fill="#555"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          WES_IGHTON
        </text>
        <text
          x={380}
          y={250}
          fontSize={10}
          fill="#3a5a3a"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          Clove Lakes
        </text>
      </svg>
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 14,
          background: "rgba(0,0,0,0.5)",
          borderRadius: 6,
          padding: "4px 10px",
          fontSize: 11,
          color: "#aaa",
          backdropFilter: "blur(4px)",
          border: "1px solid #2a2a2a",
        }}
      >
        🗺 Live Delivery Map
      </div>
    </div>
  );
}
