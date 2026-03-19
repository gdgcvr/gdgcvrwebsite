import { ImageResponse } from "next/og";
import { nextEvent } from "@/data/events";

export const runtime = "edge";
export const alt = "GDG on Campus CVR — Where Campus Meets Google";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BLUE = "hsl(217, 89%, 61%)";
const RED = "hsl(4, 69%, 54%)";
const YELLOW = "hsl(45, 100%, 48%)";
const GREEN = "hsl(145, 83%, 34%)";

export default function Image() {
  const desc = nextEvent.description.slice(0, 80) + "…";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#fafafa",
        position: "relative",
        overflow: "hidden",
        padding: "40px",
        gap: "24px",
      }}
    >
      {/* Dot grid */}
      <svg
        style={{ position: "absolute", inset: 0, opacity: 0.2 }}
        width="1200"
        height="630"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="1.5" fill="rgba(0,0,0,0.4)" />
          </pattern>
        </defs>
        <rect width="1200" height="630" fill="url(#dots)" />
      </svg>

      {/* Blue blob */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "-80px",
          left: "-60px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: BLUE,
          opacity: 0.08,
          filter: "blur(80px)",
        }}
      />

      {/* Yellow blob */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "60px",
          right: "-80px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: YELLOW,
          opacity: 0.08,
          filter: "blur(80px)",
        }}
      />

      {/* LEFT card */}
      <div
        style={{
          flex: "1 1 0",
          background: "#f5f5f4",
          borderRadius: "32px",
          padding: "52px 56px",
          border: "1px solid #e5e5e5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Arrow button */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "28px",
            right: "28px",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "1px solid #d4d4d4",
            alignItems: "center",
            justifyContent: "center",
            color: "#a3a3a3",
            fontSize: "18px",
          }}
        >
          ↘
        </div>

        {/* Heading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "84px",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-3px",
            color: "#111827",
          }}
        >
          <span>WHERE</span>
          <span>CAMPUS</span>
          <span>MEETS</span>
          <div style={{ display: "flex", letterSpacing: "-3px" }}>
            <span style={{ color: BLUE }}>G</span>
            <span style={{ color: RED }}>O</span>
            <span style={{ color: YELLOW }}>O</span>
            <span style={{ color: BLUE }}>G</span>
            <span style={{ color: GREEN }}>L</span>
            <span style={{ color: RED }}>E</span>
          </div>
        </div>

        {/* Subtext */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "24px",
            fontSize: "17px",
            lineHeight: 1.6,
            maxWidth: "470px",
            color: "#737373",
            fontWeight: 500,
          }}
        >
          <span>The bridge between theory and impact.</span>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#171717", fontWeight: 700 }}>
              CVR College of Engineering's
            </span>
            <span>premier developer ecosystem.</span>
          </div>
        </div>
      </div>

      {/* RIGHT stack */}
      <div
        style={{
          width: "340px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flexShrink: 0,
        }}
      >
        {/* Terminal */}
        <div
          style={{
            flex: 1,
            background: "#171717",
            borderRadius: "32px",
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <div
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "rgba(239,68,68,0.8)",
              }}
            />
            <div
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "rgba(234,179,8,0.8)",
              }}
            />
            <div
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "rgba(34,197,94,0.8)",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#a3a3a3",
            }}
          >
            <div style={{ display: "flex", gap: "4px" }}>
              <span style={{ color: "#c084fc" }}>const</span>
              <span style={{ color: "#60a5fa" }}>future</span>
              <span>=</span>
              <span style={{ color: "#facc15" }}>init</span>
              <span>();</span>
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              <span style={{ color: "#c084fc" }}>await</span>
              <span>future.</span>
              <span style={{ color: "#4ade80" }}>build</span>
              <span>();</span>
            </div>
          </div>
        </div>

        {/* Next Event card */}
        <div
          style={{
            flex: 1,
            background: BLUE,
            borderRadius: "32px",
            padding: "22px 26px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <svg
            style={{
              position: "absolute",
              bottom: "-10px",
              right: "-10px",
              opacity: 0.1,
              transform: "rotate(-12deg)",
            }}
            width="110"
            height="110"
            viewBox="0 0 24 24"
            fill="white"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              NEXT EVENT
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              marginTop: "4px",
            }}
          >
            <span
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
              }}
            >
              {nextEvent.title}
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.8)",
                fontWeight: 500,
              }}
            >
              {nextEvent.date}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.4,
              }}
            >
              {desc}
            </span>
          </div>
        </div>

        {/* All Events + Team */}
        <div style={{ display: "flex", gap: "12px", height: "80px" }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              background: "#FED7AA",
              borderRadius: "24px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
            }}
          >
            <span
              style={{ fontWeight: 700, fontSize: "15px", color: "#7C2D12" }}
            >
              All Events
            </span>
            <span style={{ fontSize: "14px", color: "#7C2D12" }}>→</span>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              background: "#CEEAD6",
              borderRadius: "24px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
            }}
          >
            <span
              style={{ fontWeight: 700, fontSize: "15px", color: "#0D652D" }}
            >
              Team
            </span>
            <span style={{ fontSize: "14px", color: "#0D652D" }}>→</span>
          </div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
