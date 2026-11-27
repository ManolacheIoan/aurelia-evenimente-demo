import type { NextConfig } from "next";

// BASE_PATH="/aurelia-evenimente-demo" pe GitHub Pages; gol local.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
    rules: { "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" } },
  },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
