import { site } from "@/content/site";
import { Label } from "../ui/Label";

const ZOOM = 15;
const TILE = 256;
const COLUMNS = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const ROWS = [-2, -1, 0, 1, 2];

/** Fractional OpenStreetMap tile coordinates for a latitude and longitude. */
function tilePosition(latitude: number, longitude: number) {
  const scale = 2 ** ZOOM;
  const radians = (latitude * Math.PI) / 180;
  return {
    x: ((longitude + 180) / 360) * scale,
    y: ((1 - Math.log(Math.tan(radians) + 1 / Math.cos(radians)) / Math.PI) / 2) * scale,
  };
}

/**
 * Full-bleed greyscale map from plain OSM tiles: no map library, lazy-loaded
 * images only, and a black dot on the factory.
 */
export function ContactMap() {
  const { latitude, longitude } = site.map;
  const label = `Map showing ${site.name}, ${site.address.locality}`;

  if (latitude === 0 && longitude === 0) {
    return (
      <div role="img" aria-label={label} className="relative mt-24 h-[40vh] bg-placeholder lg:mt-40">
        <Label as="p" className="absolute bottom-3 left-3">
          Set map coordinates in content/site.ts
        </Label>
      </div>
    );
  }

  const centre = tilePosition(latitude, longitude);
  const originX = Math.floor(centre.x);
  const originY = Math.floor(centre.y);
  const osmLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=${ZOOM}/${latitude}/${longitude}`;

  return (
    <div className="relative mt-24 h-[40vh] overflow-hidden bg-placeholder lg:mt-40">
      <div role="img" aria-label={label} className="absolute inset-0 grayscale contrast-[0.9]">
        {ROWS.flatMap((row) =>
          COLUMNS.map((column) => (
            // eslint-disable-next-line @next/next/no-img-element -- third-party tiles; the optimiser would only add a hop
            <img
              key={`${column}:${row}`}
              src={`https://tile.openstreetmap.org/${ZOOM}/${originX + column}/${originY + row}.png`}
              alt=""
              width={TILE}
              height={TILE}
              loading="lazy"
              decoding="async"
              className="absolute max-w-none"
              style={{
                left: `calc(50% + ${Math.round((originX + column - centre.x) * TILE)}px)`,
                top: `calc(50% + ${Math.round((originY + row - centre.y) * TILE)}px)`,
              }}
            />
          )),
        )}
      </div>
      <span aria-hidden className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
      <p className="absolute right-0 bottom-0 bg-paper px-2 py-1">
        <Label>
          <a href={osmLink} className="link">
            © OpenStreetMap contributors
          </a>
        </Label>
      </p>
    </div>
  );
}
