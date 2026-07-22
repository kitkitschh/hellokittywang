import fs from "fs";
import path from "path";
import Image from "next/image";

// Reads images directly from /public/images/<folder> at build time so Kitty
// can just drop exported files into the matching folder in the media dump
// and they'll show up on the site automatically.
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
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {files.map((f) => (
        <div key={f} className="relative aspect-square bg-ink/5">
          <Image
            src={`/images/${folder}/${f}`}
            alt={alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
