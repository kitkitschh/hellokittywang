"use client";

import { useState } from "react";
import Lightbox from "@/components/Lightbox";

// Same visual treatment as HorizontalScrollGallery (title/date, photos at
// natural aspect ratio and a shared height, click-to-expand) but rendered in
// normal document flow instead of pinned + scroll-linked — for sub-sections
// with too few photos for a scroll animation to make sense.
export default function StaticPhotoRow({ images = [], title, date }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (images.length === 0) return null;

  return (
    <div className="px-6 pb-16 pt-4">
      {(title || date) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-2xl sm:text-3xl uppercase tracking-widest font-serif">{title}</h2>
          )}
          {date && <p className="text-sm text-ink/60 mt-1">{date}</p>}
        </div>
      )}
      <div className="flex items-center gap-4 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="h-[60vh] flex-shrink-0 bg-ink/5 cursor-zoom-in"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="h-full w-auto object-contain"
            />
          </button>
        ))}
      </div>

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
