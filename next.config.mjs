/** @type {import('next').NextConfig} */
var basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath ? basePath + "/" : "",
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
