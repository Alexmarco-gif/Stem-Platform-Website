import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/platform", destination: "/product", permanent: true },
      { source: "/use-cases", destination: "/solutions", permanent: true },
      { source: "/insights", destination: "/product", permanent: true },
      { source: "/waitlist", destination: "/pilot", permanent: true },
      { source: "/company-facts", destination: "/about", permanent: true }
    ];
  }
};

export default nextConfig;
