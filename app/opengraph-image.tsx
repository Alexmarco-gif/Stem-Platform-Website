import { ImageResponse } from "next/og";

export const alt = "Stem Cogent — Decision Intelligence for Nigerian Fintechs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#F5F6FA",
          color: "#0B0F1A",
          fontFamily: "Arial, sans-serif",
          padding: "74px 80px"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.55,
            backgroundImage:
              "linear-gradient(rgba(42,75,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(42,75,255,.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "#2A4BFF",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Arial",
                fontWeight: 700
              }}
            >SC</div>
            Stem Cogent
          </div>
          <div style={{ display: "flex", marginTop: 90, fontFamily: "Arial", fontSize: 17, letterSpacing: 5, textTransform: "uppercase", color: "#9AA7D6" }}>
            Nigeria-first fintech decision intelligence
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 24, fontSize: 72, lineHeight: 1.03, letterSpacing: -3, maxWidth: 900 }}>
            Know which changes matter—and <span style={{ color: "#2A4BFF" }}>what needs deciding.</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
