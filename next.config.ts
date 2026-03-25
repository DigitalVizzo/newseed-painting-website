import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/newseed-painting-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
