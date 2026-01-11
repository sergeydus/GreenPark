export default function Logo({ className = "", width = 40, height = 40 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Tree/Leaf Design */}
      <g>
        {/* Main leaf/tree shape */}
        <path
          d="M50 10 C30 10, 20 25, 20 40 C20 50, 25 58, 35 62 C35 62, 33 70, 33 75 L67 75 C67 70, 65 62, 65 62 C75 58, 80 50, 80 40 C80 25, 70 10, 50 10Z"
          fill="#7cb342"
        />
        
        {/* Overlapping leaf accent */}
        <path
          d="M50 15 C35 15, 28 25, 28 35 C28 42, 31 48, 38 52 C38 52, 37 58, 37 62 L63 62 C63 58, 62 52, 62 52 C69 48, 72 42, 72 35 C72 25, 65 15, 50 15Z"
          fill="#8fb573"
          opacity="0.8"
        />
        
        {/* Trunk */}
        <rect
          x="45"
          y="62"
          width="10"
          height="20"
          fill="#5a8c3a"
          rx="2"
        />
        
        {/* Ground/Base */}
        <ellipse
          cx="50"
          cy="85"
          rx="25"
          ry="4"
          fill="#2d5016"
          opacity="0.6"
        />
        
        {/* Leaf details/veins */}
        <line
          x1="50"
          y1="20"
          x2="50"
          y2="55"
          stroke="#5a8c3a"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <line
          x1="50"
          y1="30"
          x2="40"
          y2="40"
          stroke="#5a8c3a"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="50"
          y1="30"
          x2="60"
          y2="40"
          stroke="#5a8c3a"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="50"
          y1="45"
          x2="38"
          y2="50"
          stroke="#5a8c3a"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="50"
          y1="45"
          x2="62"
          y2="50"
          stroke="#5a8c3a"
          strokeWidth="1"
          opacity="0.3"
        />
      </g>
    </svg>
  );
}
