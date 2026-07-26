import fs from "fs";
import path from "path";

// Minimal, dependency-free JPEG/PNG header readers — just enough to pull the
// pixel width/height out of the file without decoding the whole image. We
// use these dimensions to set explicit width/height attributes on <img> tags
// so the browser can reserve the correct box (and correct aspect ratio)
// before the image has finished downloading. Without this, images with no
// intrinsic size collapse to ~0 width while loading, which was throwing off
// the horizontal-scroll galleries' width measurements (and, by extension,
// how far they'd scroll) until every photo had finished loading.
function parsePngDimensions(buf) {
  if (buf.length < 24) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function parseJpegDimensions(buf) {
  let offset = 2;
  const len = buf.length;
  while (offset + 4 <= len) {
    if (buf[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = buf[offset + 1];
    const isSOF =
      marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSOF) {
      if (offset + 9 > len) return null;
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      return { width, height };
    }
    const segmentLength = buf.readUInt16BE(offset + 2);
    offset += 2 + segmentLength;
  }
  return null;
}

function getImageDimensions(filePath) {
  try {
    const buf = fs.readFileSync(filePath);
    if (buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
      return parsePngDimensions(buf);
    }
    if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
      return parseJpegDimensions(buf);
    }
    return null;
  } catch (e) {
    return null;
  }
}

// Reads every image in /public/images/<folder>, sorted, returning
// {src, alt, width, height} for each (width/height omitted if the file
// couldn't be parsed — components fall back to unsized <img> in that case).
export function getImagesFromFolder(folder, alt = "") {
  const dir = path.join(process.cwd(), "public", "images", folder);
  let files = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .sort();
  } catch (e) {
    return [];
  }

  return files.map((f) => {
    const dims = getImageDimensions(path.join(dir, f));
    return {
      src: `/images/${folder}/${f}`,
      alt,
      width: dims?.width,
      height: dims?.height,
    };
  });
}
