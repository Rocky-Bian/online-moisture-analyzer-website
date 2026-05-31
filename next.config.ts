import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/site/**",
      },
    ],
  },
  turbopack: {
    root: path.join(__dirname),
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/design-drafts/**",
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
