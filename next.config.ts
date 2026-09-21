import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    loadPaths: ['./app/_styles'],
    additionalData: `@use './index' as *;`
  },
  images: {
    localPatterns: [
      {
        pathname: '/**'
      },
    ]
  }
};

export default nextConfig;
