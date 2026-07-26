import fs from "fs";
import path from "path";

// Reads images directly from /public/images/<folder> at build time so Kitty
// can just drop exported files into the matching folder in the media dump
// and they'll show up on the site automatically. Laid out as a masonry-style
// grid (CSS columns) so each photo keeps its own original aspect ratio
// instead of being cropped to a fixed shape.
export default function ImageGrid({ folder, alt = "" }) {
  const dir = path.join(process.cwd(), "public", "images", folder);
  let files = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .sort();
  } catch (e) {
    files = [];
  }

  if (files.length === 0) {
    return (
      <div className="border border-dashed border-ink/20 rounded p-8 text-sm text-ink/50">
        Drop images into <code className="px-1">/public/images/{folder}</code> to display them here.
      </div>
    );
  }

  return (
    <div className="columns-2 md:columns-3 gap-4">
      {files.map((f) => (
        <div key={f} className="mb-4 break-inside-avoid bg-ink/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/${folder}/${f}`}
            alt={alt}
            loading="lazy"
            className="block w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}
