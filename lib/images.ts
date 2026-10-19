import fs from "node:fs";
import path from "node:path";

export type ResolvedImage = { src: string; alt: string; available: boolean };

/** Server only. True when a path such as /images/x.jpg exists under /public. */
export function publicFileExists(publicPath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

/** Server only. Flags images not yet in /public so a placeholder renders instead. */
export function resolveImage(image: { src: string; alt: string }): ResolvedImage {
  return { ...image, available: publicFileExists(image.src) };
}
