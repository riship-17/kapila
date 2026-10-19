import Image from "next/image";
import { cx } from "@/lib/cx";
import type { ResolvedImage } from "@/lib/images";
import { Label } from "./Label";

export type PhotoFrameProps = {
  image: ResolvedImage;
  /** Responsive sizes hint for next/image, per breakpoint. */
  sizes: string;
  /** Sizing classes for the frame: a height or an aspect ratio. */
  className: string;
  priority?: boolean;
  caption?: boolean;
  /** Duplicates information already in text nearby: empty alt, hidden from assistive tech. */
  decorative?: boolean;
};

/**
 * Fixed-size frame with the photograph filling it. Until the file exists in
 * /public, renders a neutral block captioned with the expected filename.
 */
export function PhotoFrame({
  image,
  sizes,
  className,
  priority = false,
  caption = true,
  decorative = false,
}: PhotoFrameProps) {
  const alt = decorative ? "" : image.alt;

  return (
    <div className={cx("relative overflow-hidden bg-placeholder", className)}>
      {image.available ? (
        <Image src={image.src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div role={decorative ? undefined : "img"} aria-label={alt || undefined} className="absolute inset-0">
          {/* Children of role="img" are presentational, so the filename stays out of the accessible name. */}
          {caption && (
            <Label as="p" className="absolute right-3 bottom-3 left-3 break-all">
              public{image.src}
            </Label>
          )}
        </div>
      )}
    </div>
  );
}
