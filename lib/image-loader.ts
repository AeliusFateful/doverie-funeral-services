// Custom loader for next/image under images.unoptimized (static export has
// no image optimization server). Picks the smallest pre-generated variant
// that is >= the requested width, produced by scripts/generate-responsive-images.mjs.
const GENERATED_WIDTHS = [640, 1080, 1920];

type LoaderParams = {
  src: string;
  width: number;
};

export default function responsiveImageLoader({ src, width }: LoaderParams) {
  const match = src.match(/^(.*)\.(webp|png|jpe?g)$/i);
  if (!match) return src;

  const [, base, ext] = match;
  if (ext.toLowerCase() !== "webp") return src;

  const targetWidth = GENERATED_WIDTHS.find((w) => w >= width);
  if (!targetWidth) return src;

  return `${base}-${targetWidth}w.webp`;
}
