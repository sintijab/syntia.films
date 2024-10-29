import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: '',
  assetPrefix: '',
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
