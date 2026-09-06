/** @type {import('next').NextConfig} */
// Set NEXT_PUBLIC_BASE_PATH="/doverie-funeral-services" only for the GitHub Pages build.
// Left empty for the custom-domain (root) build and for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
