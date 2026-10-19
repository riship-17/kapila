import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };

/** Paper, ink and one hairline: the site's opening, as a share card. */
export function ogImage(title: string, detail: string) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 72,
          background: "#FAFAF8",
          color: "#111111",
        }}
      >
        <div style={{ display: "flex", fontSize: 28 }}>{site.name}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 0.95 }}>
            {title}
          </div>
          <div style={{ display: "flex", height: 1, background: "#DEDCD6", margin: "40px 0 24px" }} />
          <div style={{ display: "flex", fontSize: 22, letterSpacing: "0.06em", textTransform: "uppercase", color: "#73716A" }}>
            {detail}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
