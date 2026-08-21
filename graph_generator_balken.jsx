import React from "react";

const data = [
  { label: "2020", value: 36, digit: "." },
  { label: "2021", value: 56, digit: "," },
  { label: "2022", value: 61, digit: "*" },
  { label: "2023", value: 74, digit: "#" },
  { label: "2024", value: 100, digit: "@" }
];

export default function BinaryBarChart() {
  const maxValue = Math.max(...data.map(d => d.value));

  const barHeight = 50;
  const spacing = 40;

  const depthX = 25;
  const depthY = -15;

  return (
    <div
      style={{
        background: "#000000",
        minHeight: "100vh",
        padding: "40px"
      }}
    >
      <button
        onClick={() => {
          const svg = document.querySelector("svg");
          const svgData = svg.outerHTML;

          const blob = new Blob([svgData], {
            type: "image/svg+xml;charset=utf-8"
          });

          const url = URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.download = "balkendiagramm.svg";
          link.click();

          URL.revokeObjectURL(url);
        }}
        style={{
          marginBottom: "20px",
          padding: "10px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        SVG exportieren
      </button>

      <svg width="1400" height="600">
        {data.map((bar, index) => {
          const y = 80 + index * (barHeight + spacing);

          const width =
            (bar.value / maxValue) * 800;

          return (
            <g key={index}>
              <text
                x="20"
                y={y + 32}
                fill="white"
                fontSize="20"
                fontWeight="700"
              >
                {bar.label}
              </text>

              <text
                x={120 + width + 50}
                y={y + 32}
                fill="white"
                fontSize="28"
                fontWeight="800"
              >
                {bar.value}
              </text>

              <FrontFace
                x={120}
                y={y}
                width={width}
                height={barHeight}
                digit={bar.digit}
              />

              <TopFace
                x={120}
                y={y}
                width={width}
                dx={depthX}
                dy={depthY}
                digit={bar.digit}
              />

              <SideFace
                x={110}
                y={y}
                width={width}
                height={barHeight}
                dx={depthX}
                dy={depthY}
                digit={bar.digit}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function FrontFace({
  x,
  y,
  width,
  height,
  digit
}) {
  const cols = Math.floor(width / 12);
  const rows = 4;

  const isHeavyDigit =
    digit === "." || digit === ",";

  return (
    <g opacity={1}>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <text
            key={`${r}-${c}`}
            x={x + c * 12}
            y={y + 14 + r * 12}
            fill="white"
            fontSize="11"
            fontFamily="IBM Plex Mono"
            fontWeight={isHeavyDigit ? 900 : 400}
            stroke={isHeavyDigit ? "white" : "none"}
            strokeWidth={isHeavyDigit ? 1.2 : 0}
          >
            {digit}
          </text>
        ))
      )}
    </g>
  );
}

function TopFace({
  x,
  y,
  width,
  dx,
  dy,
  digit
}) {
  const cols = Math.floor(width / 12);
  const rows = 4;

  const isHeavyDigit =
    digit === "." || digit === ",";

  return (
    <g opacity={0.8}>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <text
            key={`${r}-${c}`}
            x={
              x +
              c * 12 +
              r * (dx / rows)
            }
            y={
              y +
              r * (dy / rows)
            }
            fill="white"
            fontSize="10"
            fontFamily="IBM Plex Mono"
            fontWeight={isHeavyDigit ? 900 : 400}
            stroke={isHeavyDigit ? "white" : "none"}
            strokeWidth={isHeavyDigit ? 1.2 : 0}
          >
            {digit}
          </text>
        ))
      )}
    </g>
  );
}

function SideFace({
  x,
  y,
  width,
  height,
  dx,
  dy,
  digit
}) {
  const cols = 4;
  const rows = 4;

  const isHeavyDigit =
    digit === "." || digit === ",";

  return (
    <g opacity={0.55}>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <text
            key={`${r}-${c}`}
            x={
              x +
              width +
              c * (dx / cols)
            }
            y={
              y +
              r * 16 +
              c * (dy / cols)
            }
            fill="white"
            fontSize="10"
            fontFamily="IBM Plex Mono"
            fontWeight={isHeavyDigit ? 900 : 400}
            stroke={isHeavyDigit ? "white" : "none"}
            strokeWidth={isHeavyDigit ? 1.2 : 0}
          >
            {digit}
          </text>
        ))
      )}
    </g>
  );
}