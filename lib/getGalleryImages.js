import fs from "fs";
import path from "path";

// Reads image filenames directly from /public/images/<folder> (server-side)
// so pages can just drop files in without touching code. Shared by
// ImageGrid and any other gallery component that needs the file list.
export function getGalleryImages(folder) {
  const dir = path.join(process.cwd(), "public", "images", folder);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .sort()
      .map((f) => `/images/${folder}/${f}`);
  } catch (e) {
    return [];
  }
}
