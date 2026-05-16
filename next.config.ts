import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nexhire",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
