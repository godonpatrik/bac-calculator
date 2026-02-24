import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: "50%",
      }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2" cy="25" r="2" fill="black" />
        <circle cx="15" cy="19" r="2" fill="black" />
        <circle cx="25" cy="11" r="2" fill="black" />
        <circle cx="35" cy="17" r="2" fill="black" />
        <circle cx="48" cy="5" r="2" fill="black" />
        <circle cx="2" cy="39" r="2" fill="black" />
        <circle cx="15" cy="41" r="2" fill="black" />
        <circle cx="25" cy="33" r="2" fill="black" />
        <circle cx="35" cy="43" r="2" fill="black" />
        <circle cx="48" cy="31" r="2" fill="black" />
        <polyline
          fill="none"
          points="2,25 15,19 25,11 35,17 48,5"
          stroke="black"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <polyline
          fill="none"
          points="2,39 15,41 25,33 35,43 48,31"
          stroke="black"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </svg>
    </div>,
    {
      ...size,
    },
  );
}
