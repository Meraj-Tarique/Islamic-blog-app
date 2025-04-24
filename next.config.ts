import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "mlena6qa4grg.i.optimole.com",
      'islamic-blog-app-spzz.vercel.app',
      'islamic-blog-app-spzz-git-main-merajtariqs-projects.vercel.app',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "islamic-blog-app-spzz.vercel.app",
      },
      {
        protocol: 'http',
        hostname: 'localhost',
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
