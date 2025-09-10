import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "assets.basehub.com",
      },
    ],
  },
};

export default nextConfig;
