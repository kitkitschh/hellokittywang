"use client";

import { useState } from "react";
import Lightbox from "@/components/Lightbox";

// Masonry-style grid (CSS columns) so each photo keeps its own original
// aspect ratio instead of being cropped to a fixed shape. Clicking a photo
// opens it full-screen via the shared Lightbox, with arrow-key/arrow-button
// navigation through the rest of this folder's images.
export default function ImageGridView({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="columns-2 md:columns-3 gap-4">
      {images.map((img, i) => (
        <button
          key={img.src}
          type="button"
          onClick={() => setLightboxIndex(i)}
          className="mb-4 block w-full break-inside-avoid bg-ink/5 cursor-zoom-in"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.src} alt={img.alt} loading="lazy" className="block w-full h-auto" />
        </button>
      ))}

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(delta) =>
          setLightboxIndex((i) => (i + delta + images.length) % images.length)
        }
      />
    </div>
  );
}
