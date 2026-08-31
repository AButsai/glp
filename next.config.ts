import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the built site can be uploaded as plain files to
  // GoDaddy shared hosting (no Node/SSR runtime there). The app has no
  // API routes or server actions, so this is a safe fit.
  output: "export",
  images: {
    // next/image's optimization API needs a Node server; unoptimized
    // serves the local /public images as-is, which static hosting can do.
    unoptimized: true,
  },
};

export default nextConfig;
