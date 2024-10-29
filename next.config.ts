import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  bbasePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.ASSET_PREFIX || "",
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
