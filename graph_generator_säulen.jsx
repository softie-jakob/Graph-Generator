import React from "react";

const data = [
  { label: "A", value: 40, digit: "0" },
  { label: "B", value: 75, digit: "1" },
  { label: "C", value: 55, digit: "0" },
  { label: "D", value: 95, digit: "1" }
];

export default function Binary3DChart() {
  const chartHeight = 500;
  const barWidth = 110;
  const spacing = 70;

  const depthX = 35;
  const depthY = -24;

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div
      style={{
        background: "#000000",
        padding: 40,
        minHeight: "100vh"
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
    link.download = "saeulendiagramm.svg";
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

      <svg width="1200" height="700">
        {data.map((bar, index) => {
          const x = 120 + index * (barWidth + spacing);

          const height =
            (bar.value / maxValue) * chartHeight;

          const y = 600 - height;

          return (
            <g key={index}>
              <BarFace
                x={x}
                y={y}
                width={barWidth}
                height={height}
                digit={bar.digit}
                fill="white"
              />

              <TopFace
                x={x}
                y={y}
                width={barWidth}
                dx={depthX}
                dy={depthY}
                digit={bar.digit}
              />

              <SideFace
                x={x}
                y={y}
                width={barWidth}
                height={height}
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

function BarFace({
  x,
  y,
  width,
  height,
  digit,
  fill
}) {
  const cols = 12;
  const rows = Math.floor(height / 14);

  const cellX = width / cols;
  const cellY = height / rows;

  return (
    <g opacity={1}>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <text
            key={`${r}-${c}`}
            x={x + c * cellX}
            y={y + r * cellY}
            fill={fill}
            fontSize="11"
            fontWeight="500"
            fontFamily="IBM Plex Mono, monospace"
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
  const rows = 5;
  const cols = 12;

  return (
    <g opacity={0.8}>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <text
            key={`${r}-${c}`}
            x={
              x +
              c * (width / cols) +
              r * (dx / rows)
            }
            y={
              y +
              r * (dy / rows)
            }
            fill="white"
            fontSize="10"
            fontFamily="IBM Plex Mono, monospace"
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
  const rows = Math.floor(height / 14);
  const cols = 5;

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
              r * (height / rows) +
              c * (dy / cols)
            }
            fill="white"
            fontSize="10"
            fontFamily="IBM Plex Mono, monospace"
          >
            {digit}
          </text>
        ))
      )}
    </g>
  );
}
``