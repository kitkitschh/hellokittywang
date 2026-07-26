import ImageGridView from "@/components/ImageGridView";
import { getImagesFromFolder } from "@/lib/images";

// Reads images directly from /public/images/<folder> at build time so Kitty
// can just drop exported files into the matching folder in the media dump
// and they'll show up on the site automatically. The actual grid rendering
// (and click-to-expand lightbox) lives in the client-side ImageGridView,
// since this part needs Node's fs and stays a plain server component.
export default function ImageGrid({ folder, alt = "" }) {
  const images = getImagesFromFolder(folder, alt);

  if (images.length === 0) {
    return (
      <div className="border border-dashed border-ink/20 rounded p-8 text-sm text-ink/50">
        Drop images into <code className="px-1">/public/images/{folder}</code> to display them here.
      </div>
    );
  }

  return <ImageGridView images={images} />;
}
