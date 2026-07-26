"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lightbox from "@/components/Lightbox";

// Pins the section while the page scrolls through it, translating a row of
// photos horizontally. Each photo keeps its own natural aspect ratio (fixed
// height, auto width) rather than being cropped into a fixed box. The
// title/date stay in the pinned area (not above it in normal page flow) so
// they remain visible for the whole time this gallery is scrolling by.
//
// The horizontal distance is measured from the row's actual rendered width
// versus the actual visible container's width (NOT window.innerWidth — the
// gallery sits inside the page's centered max-w-5xl column, which is
// narrower than the browser window on most screens, so using the window
// width under-shifts the row and clips the last photo). A ResizeObserver
// keeps both measurements correct as photos finish loading and the row's
// real width settles, plus a small buffer + trailing spacer so the last
// photo always fully clears the edge.
export default function HorizontalScrollGallery({ images = [], title, date }) {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const rowRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const row = rowRef.current;
    const container = containerRef.current;
    if (!row || !container) return;

    const BUFFER = 48;
    let frame = null;

    function measure() {
      const rowWidth = row.scrollWidth;
      const containerWidth = container.clientWidth;
      setDistance(Math.max(0, rowWidth - containerWidth + BUFFER));
    }

    // Photos loading in one-by-one (rather than from cache) each nudge the
    // row's width, and each nudge was triggering its own recalculation —
    // a burst of re-renders while a gallery's images were still trickling in,
    // which is what made scrolling feel laggy on a fresh (uncached) load.
    // Collapsing same-frame ResizeObserver callbacks into one measurement
    // keeps that down to a single recalculation per visual update.
    function scheduleMeasure() {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        measure();
      });
    }

    measure();

    const ro = new ResizeObserver(scheduleMeasure);
    ro.observe(row);
    ro.observe(container);
    window.addEventListener("resize", scheduleMeasure);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
    };
  }, [images.length]);

  if (images.length === 0) return null;

  const scrollVh = Math.min(900, Math.max(350, images.length * 58));

  function skipSection() {
    const el = targetRef.current;
    if (!el) return;

    // Jump straight to the next sub-section (this section's next sibling in
    // the page), rather than just past this carousel's own scroll range —
    // that way "skip" lands the viewer at the start of the next gallery
    // instead of on this one's last photo.
    const next = el.nextElementSibling;
    if (next) {
      const targetY = window.scrollY + next.getBoundingClientRect().top;
      window.scrollTo({ top: targetY, behavior: "smooth" });
      return;
    }

    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.bottom - window.innerHeight + 2;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }

  function previousSection() {
    const el = targetRef.current;
    if (!el) return;

    // Jump straight to the start of the previous sub-section, same idea as
    // skip but backwards — otherwise going "back up" means scrolling through
    // this whole carousel in reverse.
    const prev = el.previousElementSibling;
    if (prev) {
      const targetY = window.scrollY + prev.getBoundingClientRect().top;
      window.scrollTo({ top: targetY, behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section ref={targetRef} className="relative" style={{ height: `${scrollVh}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center px-6">
        <button
          type="button"
          onClick={previousSection}
          className="absolute bottom-6 left-6 z-10 rounded-full border border-ink/30 bg-paper/70 backdrop-blur-sm px-4 py-1.5 text-sm uppercase tracking-wide hover:bg-paper/90"
        >
          ↑ Previous section
        </button>
        <button
          type="button"
          onClick={skipSection}
          className="absolute bottom-6 right-6 z-10 rounded-full border border-ink/30 bg-paper/70 backdrop-blur-sm px-4 py-1.5 text-sm uppercase tracking-wide hover:bg-paper/90"
        >
          Skip section ↓
        </button>
        {(title || date) && (
          <div className="mb-8">
            {title && (
              <h2 className="text-2xl sm:text-3xl uppercase tracking-widest font-serif">{title}</h2>
            )}
            {date && <p className="text-sm text-ink/60 mt-1">{date}</p>}
          </div>
        )}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div ref={rowRef} style={{ x }} className="flex items-center gap-4">
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
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-auto object-contain"
                />
              </button>
            ))}
            <div className="flex-shrink-0 w-6" aria-hidden="true" />
          </motion.div>
        </div>
      </div>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(delta) =>
          setLightboxIndex((i) => (i + delta + images.length) % images.length)
        }
      />
    </section>
  );
}
