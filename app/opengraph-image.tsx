import { ogImage, ogSize } from "@/lib/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogImage("Activated carbon, filter media and RO plants", site.tagline);
}
