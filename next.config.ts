import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A lockfile in a parent directory would otherwise be taken as the workspace root.
  outputFileTracingRoot: import.meta.dirname,
  turbopack: { root: import.meta.dirname },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2560],
    imageSizes: [96, 160, 280, 400, 560],
  },
  // Products no longer sold.
  redirects: async () => [{ source: "/products/filter-sand-and-gravel", destination: "/products", permanent: true }],
};

export default nextConfig;
