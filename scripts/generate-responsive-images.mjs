// Generates responsive width variants for images used with next/image.
// Required because next.config.js sets images.unoptimized (static export /
// GitHub Pages has no image optimization server), so next/image can't
// resize images on demand — we pre-generate the sizes it needs instead.
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const WIDTHS = [640, 1080, 1920];
const SOURCE_EXT = new Set([".webp", ".png", ".jpg", ".jpeg"]);
const SKIP_SUFFIX = /-(\d+)w\.webp$/;

async function collectSourceImages(dir, files = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await collectSourceImages(fullPath, files);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (!SOURCE_EXT.has(ext)) continue;
    if (SKIP_SUFFIX.test(entry.name)) continue;
    files.push(fullPath);
  }
  return files;
}

async function isUpToDate(sourcePath, outputPath) {
  try {
    const [sourceStat, outputStat] = await Promise.all([
      stat(sourcePath),
      stat(outputPath),
    ]);
    return outputStat.mtimeMs >= sourceStat.mtimeMs;
  } catch {
    return false;
  }
}

async function generateVariants(sourcePath) {
  const dir = path.dirname(sourcePath);
  const base = path.basename(sourcePath, path.extname(sourcePath));

  // Always emit every configured width so the image loader can rely on the
  // file existing; withoutEnlargement caps output at the source's own size
  // for widths larger than the original (no upscaling).
  for (const width of WIDTHS) {
    const outputPath = path.join(dir, `${base}-${width}w.webp`);
    if (await isUpToDate(sourcePath, outputPath)) continue;
    await sharp(sourcePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(outputPath);
    console.log(`generated ${path.relative(process.cwd(), outputPath)}`);
  }
}

async function main() {
  await mkdir(IMAGES_DIR, { recursive: true });
  const sources = await collectSourceImages(IMAGES_DIR);
  for (const sourcePath of sources) {
    await generateVariants(sourcePath);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
