import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "mlena6qa4grg.i.optimole.com",
      "https://islamic-blog-app-spzz.vercel.app"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        pathname: "/my-bucket/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
