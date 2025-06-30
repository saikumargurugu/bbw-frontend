import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", 
  images: {
    domains: ["www.shutterstock.com", "images.unsplash.com"], // Add the external domain here
    unoptimized: true, 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
