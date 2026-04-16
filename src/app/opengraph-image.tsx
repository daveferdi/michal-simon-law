import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = 'מיכל סיימון - עורכת דין | נדל"ן ומקרקעין';
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #141420 0%, #3A3A52 50%, #1D1D2E 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative terracotta accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #9C5D4E, #CD8575, #9C5D4E)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "60px",
          }}
        >
          {/* Logo circle */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "#3A3A52",
              border: "2px solid rgba(156, 93, 78, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            MS
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            מיכל סיימון
          </div>

          {/* Terracotta line */}
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "#9C5D4E",
              marginBottom: "20px",
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              fontSize: "28px",
              color: "rgba(249, 249, 249, 0.7)",
              fontWeight: 300,
              letterSpacing: "0.15em",
            }}
          >
            עורכת דין | נדל״ן ומקרקעין
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "18px",
              color: "rgba(249, 249, 249, 0.4)",
              marginTop: "24px",
              fontWeight: 300,
            }}
          >
            ליווי משפטי מקצועי ואישי • בית שמש והסביבה
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
