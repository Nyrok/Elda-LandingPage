import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stray lockfile in the parent folder makes Next infer the wrong workspace
  // root (and watch the whole 1GB+ workspace). Pin it to this app.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
