import type { NextConfig } from "next";

const env = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactStrictMode: true,

  ...(env && {
    basePath: "/prathameshnimkar10.github.io",
    assetPrefix: "/prathameshnimkar10.github.io/"
  }),

  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;