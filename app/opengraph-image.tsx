import { ogImage, ogSize } from "@/lib/og";
import { site } from "@/content/site";

export const alt = `${site.name}, manufacturer of water filtration consumables`;
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogImage("Water filtration consumables", "Filter cartridges / Filter housings / Activated carbon / RO membrane elements");
}
