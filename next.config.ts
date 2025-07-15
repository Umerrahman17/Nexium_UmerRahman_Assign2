import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ... your other config options ...
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
