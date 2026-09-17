import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sintech-business-solution",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
