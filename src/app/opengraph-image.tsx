import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Keni · Tu equipo usando IA en su trabajo diario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#999999",
            letterSpacing: "0.1em",
            marginBottom: 24,
          }}
        >
          KENI
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 300,
            color: "#FAFAFA",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Tu equipo usando IA en su trabajo diario.
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#999999",
            marginTop: 32,
            maxWidth: 700,
            lineHeight: 1.6,
          }}
        >
          Formación AI-native para empresas LATAM hispano y ES. Sin slides, sin
          teoría. Con su terminal, sus tareas y sus métricas.
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#666666",
            marginTop: "auto",
          }}
        >
          ia.kenitech.io
        </div>
      </div>
    ),
    { ...size }
  );
}
