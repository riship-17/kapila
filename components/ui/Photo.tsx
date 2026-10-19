import { resolveImage } from "@/lib/images";
import { PhotoFrame, type PhotoFrameProps } from "./PhotoFrame";

type PhotoProps = Omit<PhotoFrameProps, "image"> & { image: { src: string; alt: string } };

/** Server wrapper for <PhotoFrame> that checks whether the photograph exists yet. */
export function Photo({ image, ...frame }: PhotoProps) {
  return <PhotoFrame image={resolveImage(image)} {...frame} />;
}
