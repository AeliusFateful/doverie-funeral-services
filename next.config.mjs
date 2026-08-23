/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/doverie-funeral-services" : "",
  assetPrefix: isProd ? "/doverie-funeral-services/" : "",
  output: "export",
};

export default nextConfig;
