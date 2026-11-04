import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Letícia Moraes — Arquitetura e Interiores · Maringá e Londrina, PR";

export default function Image() {
  const logoBuffer = fs.readFileSync(
    path.join(process.cwd(), "public/assets/logo-horizontal-verde.png"),
  );
  const logo = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#f4f2ec",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-160px",
            top: "-120px",
            width: "720px",
            height: "720px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #b5c4a8 0%, rgba(181,196,168,0) 65%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 80px",
            height: "100%",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Letícia Moraes"
              style={{ width: "335px", height: "auto", objectFit: "contain" }}
            />
          </div>

          <div
            style={{
              fontSize: "76px",
              fontFamily: "serif",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#2c3a2e",
              maxWidth: "800px",
            }}
          >
            Interiores que respiram.
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              fontSize: "22px",
              color: "#4a6b4e",
            }}
          >
            <span>Projeto residencial</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Consultoria online</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Design biofílico</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
