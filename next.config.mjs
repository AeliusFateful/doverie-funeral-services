/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
  basePath: isProd ? "/doverie-funeral-services" : "",
  assetPrefix: isProd ? "/doverie-funeral-services/" : "",
  output: "export",
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
