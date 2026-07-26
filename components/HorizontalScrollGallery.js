"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Pins the section while the page scrolls through it, translating a row of
// photos horizontally. Each photo keeps its own natural aspect ratio (fixed
// height, auto width) rather than being cropped into a fixed box.
//
// The horizontal distance is measured from the row's actual rendered width
// (not a flat percentage) so every photo scrolls fully into view no matter
// how many there are or how wide the row ends up being — a fixed percentage
// like "-95%" only reveals everything for one specific row length. A
// ResizeObserver keeps that measurement correct as each photo finishes
// loading and the row's real width changes, plus a small buffer so the very
// last photo is guaranteed to clear the edge of the screen.
export default function HorizontalScrollGallery({ images = [] }) {
  const targetRef = useRef(null);
  const rowRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const BUFFER = 48;

    function measure() {
      const rowWidth = row.scrollWidth;
      const viewportWidth = window.innerWidth;
      setDistance(Math.max(0, rowWidth - viewportWidth + BUFFER));
    }

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(row);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [images.length]);

  if (images.length === 0) return null;

  const scrollVh = Math.min(500, Math.max(200, images.length * 28));

  return (
    <section ref={targetRef} className="relative" style={{ height: `${scrollVh}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div ref={rowRef} style={{ x }} className="flex items-center gap-4 px-6">
          {images.map((img) => (
            <div key={img.src} className="h-[65vh] flex-shrink-0 bg-ink/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} className="h-full w-auto object-contain" />
            </div>
          ))}
          <div className="flex-shrink-0 w-6" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
