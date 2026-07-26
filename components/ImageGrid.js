import fs from "fs";
import path from "path";
import ImageGridView from "@/components/ImageGridView";

// Reads images directly from /public/images/<folder> at build time so Kitty
// can just drop exported files into the matching folder in the media dump
// and they'll show up on the site automatically. The actual grid rendering
// (and click-to-expand lightbox) lives in the client-side ImageGridView,
// since this part needs Node's fs and stays a plain server component.
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

  const images = files.map((f) => ({ src: `/images/${folder}/${f}`, alt }));

  return <ImageGridView images={images} />;
}
