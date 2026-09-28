import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { brand } from "@/data/brand";
import { company } from "@/data/company";

export const dynamic = "force-static";

export async function GET() {
  const logo = await readFile(join(process.cwd(), "public", brand.logo.src));
  const logoData = `data:image/jpeg;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 64, background: "#21102f", color: "#ffffff" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Official JPEG retained unchanged, including its white background. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoData} width={213} height={104} alt={brand.logo.alt} />
        <div style={{ display: "flex", fontSize: 23, color: "#d8b4fe" }}>{company.contact.city} · {company.contact.country}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700 }}>{company.displayName}</div>
        <div style={{ display: "flex", maxWidth: 980, marginTop: 24, fontSize: 35, lineHeight: 1.3, color: "#f6f1fc" }}>{company.tagline}</div>
      </div>
      <div style={{ display: "flex", borderTop: "2px solid #7830d8", paddingTop: 24, fontSize: 23, color: "#d8b4fe" }}>Bureau d’études · Ingénierie · Construction</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
