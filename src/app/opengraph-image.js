import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abdelrahman Mostafa – Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #f97316, #60a5fa)",
          }}
        />

        {/* Window chrome decoration */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "900px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Title bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 20px",
              background: "#424242",
              gap: "8px",
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#22c55e" }} />
            <span style={{ color: "#fff", fontSize: 16, marginLeft: 12, fontWeight: 600 }}>
              portfolio.exe
            </span>
          </div>

          {/* Content area */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "60px 60px",
              background: "#1e293b",
              gap: "20px",
            }}
          >
            {/* Availability badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "999px",
                background: "rgba(34,197,94,0.15)",
                border: "1px solid rgba(34,197,94,0.4)",
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ color: "#4ade80", fontSize: 16, fontWeight: 600 }}>
                Available for work
              </span>
            </div>

            {/* Name */}
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                textAlign: "center",
              }}
            >
              Abdelrahman{" "}
              <span style={{ color: "#60a5fa" }}>Mostafa</span>
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 28,
                color: "#94a3b8",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Frontend Developer · React / Next.js
            </div>

            {/* Tech pills */}
            <div style={{ display: "flex", gap: "12px", marginTop: "8px", flexWrap: "wrap", justifyContent: "center" }}>
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "8px",
                    background: "rgba(96,165,250,0.1)",
                    border: "1px solid rgba(96,165,250,0.3)",
                    color: "#93c5fd",
                    fontSize: 18,
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
