"use client";

import { useEffect, useCallback } from "react";

// Full-screen click-to-expand overlay shared by the horizontal scroll
// galleries and the masonry image grids. Takes the same {src, alt}[] array
// the gallery already has and an index into it; pass index={null} to keep it
// closed. Arrow keys / on-screen arrows step through the same set of images,
// Escape or clicking the backdrop closes it.
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const handleKey = useCallback(
    (e) => {
      if (index == null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    },
    [index, onClose, onNavigate]
  );

  useEffect(() => {
    if (index == null) return;
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, handleKey]);

  if (index == null || !images || images.length === 0) return null;
  const img = images[index];
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 sm:p-12"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white text-3xl leading-none hover:opacity-70"
      >
        ×
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-8 text-white text-4xl leading-none hover:opacity-70"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-8 text-white text-4xl leading-none hover:opacity-70"
          >
            ›
          </button>
        </>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}
