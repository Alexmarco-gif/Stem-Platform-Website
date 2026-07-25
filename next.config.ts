import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/solutions", destination: "/platform", permanent: true },
      { source: "/use-cases", destination: "/platform", permanent: true },
      { source: "/insights", destination: "/platform", permanent: true },
      { source: "/company-facts", destination: "/about", permanent: true }
    ];
  }
};

export default nextConfig;
