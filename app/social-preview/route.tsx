import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

export async function GET() {
  const font = await readFile(
    path.join(
      process.cwd(),
      "node_modules/@fontsource/roboto/files/roboto-latin-700-normal.woff",
    ),
  );
  return new ImageResponse(
    <div
      style={{
        background: "#023272",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "80px",
        fontFamily: "Roboto",
      }}
    >
      <div style={{ color: "#F1E7B2", fontSize: 24, marginBottom: 32 }}>
        Dublin, Ireland · Business. People. Technology.
      </div>
      <div style={{ fontSize: 88, lineHeight: 1.05 }}>Passapol Phukhang</div>
      <div style={{ color: "#F1E7B2", fontSize: 40, marginTop: 32 }}>
        Digital Innovation &amp; AI Transformation
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Roboto", data: font, weight: 700, style: "normal" }],
    },
  );
}
