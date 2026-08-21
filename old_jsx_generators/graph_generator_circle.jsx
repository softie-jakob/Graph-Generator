import React from "react";

const data = [
  { label: "A", value: 36, pattern: "dots" },
  { label: "B", value: 56, pattern: "hash" },
  { label: "C", value: 61, pattern: "star" },
  { label: "D", value: 74, pattern: "plus" },
  { label: "E", value: 100, pattern: "at" }
];

export default function App() {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  let currentAngle = 0;

  const radius = 220;
  const centerX = 400;
  const centerY = 320;

  return (
    <div
      style={{
        background: "#000000",
        minHeight: "100vh",
        padding: "40px",
      }}
    >

<button
  onClick={() => {
    const svg = document.querySelector("svg");
    const svgData = svg.outerHTML;

    const blob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "tortendiagramm.svg";
    link.click();

    URL.revokeObjectURL(url);
  }}
  style={{
    marginBottom: "20px",
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  SVG exportieren
</button>

      <svg width="900" height="700">

        <defs>

          <pattern
            id="dots"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="0"
              y="5"
              fill="white"
              fontSize="16"
              fontFamily="IBM Plex Mono"
            >
              .
            </text>
          </pattern>

          <pattern
            id="hash"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="0"
              y="5"
              fill="white"
              fontSize="12"
              fontFamily="IBM Plex Mono"
            >
              #
            </text>
          </pattern>

          <pattern
            id="star"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="0"
              y="5"
              fill="white"
              fontSize="10"
              fontFamily="IBM Plex Mono"
            >
              *
            </text>
          </pattern>

          <pattern
            id="plus"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="0"
              y="5"
              fill="white"
              fontSize="12"
              fontFamily="IBM Plex Mono"
            >
              +
            </text>
          </pattern>

          <pattern
            id="at"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <text
              x="0"
              y="5"
              fill="white"
              fontSize="14"
              fontFamily="IBM Plex Mono"
            >
              @
            </text>
          </pattern>

        </defs>

        {data.map((slice, index) => {
          const angle = (slice.value / total) * 360;

          const startAngle = currentAngle;
          const endAngle = currentAngle + angle;

          currentAngle += angle;

          const startX =
            centerX +
            radius * Math.cos((startAngle * Math.PI) / 180);

          const startY =
            centerY +
            radius * Math.sin((startAngle * Math.PI) / 180);

          const endX =
            centerX +
            radius * Math.cos((endAngle * Math.PI) / 180);

          const endY =
            centerY +
            radius * Math.sin((endAngle * Math.PI) / 180);

          const largeArc = angle > 180 ? 1 : 0;

          const path = `
            M ${centerX} ${centerY}
            L ${startX} ${startY}
            A ${radius} ${radius}
            0 ${largeArc} 1
            ${endX} ${endY}
            Z
          `;

          const labelAngle = startAngle + angle / 2;

          const labelX =
            centerX +
            radius *
              0.65 *
              Math.cos((labelAngle * Math.PI) / 180);

          const labelY =
            centerY +
            radius *
              0.65 *
              Math.sin((labelAngle * Math.PI) / 180);

          return (
            <g key={index}>

              <path
                d={path}
                fill={`url(#${slice.pattern})`}
                stroke="white"
                strokeWidth="2"
              />


            </g>
          );
        })}
      </svg>
    </div>
  );
}