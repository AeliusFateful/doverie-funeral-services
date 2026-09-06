/** @type {import('next').NextConfig} */
// Set NEXT_PUBLIC_BASE_PATH="/doverie-funeral-services" for the GitHub Pages
// build (done in .github/workflows/nextjs.yml). Leave empty for a custom-domain
// (root) build and for local dev.
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
