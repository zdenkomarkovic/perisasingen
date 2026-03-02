import sharp from "sharp";
import { readdir, stat, rename, unlink } from "fs/promises";
import { join } from "path";

const PUBLIC_DIR = new URL("../public", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

const JPEG_QUALITY = 82;
const MAX_WIDTH = 1920;

const files = await readdir(PUBLIC_DIR);

for (const file of files) {
  const filePath = join(PUBLIC_DIR, file);
  const ext = file.split(".").pop()?.toLowerCase();

  if (!["jpg", "jpeg", "png"].includes(ext)) continue;

  const before = (await stat(filePath)).size;
  const tmpPath = filePath + ".tmp";

  const image = sharp(filePath);
  const meta = await image.metadata();

  let pipeline = image;
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (ext === "png") {
    const webpPath = filePath.replace(/\.png$/i, ".webp");
    await pipeline.webp({ quality: JPEG_QUALITY, effort: 6 }).toFile(webpPath);
    const after = (await stat(webpPath)).size;
    console.log(
      `${file} → ${file.replace(".png", ".webp")}  ${kb(before)} → ${kb(after)}  (-${pct(before, after)}%)`
    );
  } else {
    // Schreibe in .tmp, dann ersetze Original
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath);
    await unlink(filePath);
    await rename(tmpPath, filePath);
    const after = (await stat(filePath)).size;
    console.log(
      `${file}  ${kb(before)} → ${kb(after)}  (-${pct(before, after)}%)`
    );
  }
}

console.log("\nFertig.");

function kb(bytes) { return (bytes / 1024).toFixed(0) + " kB"; }
function pct(before, after) { return (((before - after) / before) * 100).toFixed(0); }
