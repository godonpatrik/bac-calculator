import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "BAC Calculator - Free Blood Alcohol Content Calculator & Tracker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 60px",
      }}
    >
      <div
        style={{
          fontSize: 80,
          marginBottom: 24,
        }}
      >
        🍺
      </div>
      <div
        style={{
          fontSize: 56,
          fontWeight: 800,
          textAlign: "center",
          lineHeight: 1.2,
          marginBottom: 16,
        }}
      >
        BAC Calculator
      </div>
      <div
        style={{
          fontSize: 28,
          color: "#9CA3AF",
          textAlign: "center",
          lineHeight: 1.4,
          maxWidth: 800,
        }}
      >
        Free Blood Alcohol Content Calculator & Tracker
      </div>
      <div
        style={{
          fontSize: 20,
          color: "#6B7280",
          marginTop: 32,
          letterSpacing: 1,
        }}
      >
        alcoholtrackr.com
      </div>
    </div>,
    { ...size },
  );
}
