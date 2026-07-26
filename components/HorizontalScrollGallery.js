"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Pins the section while the page scrolls through it, translating a row of
// photos horizontally. Each photo keeps its own natural aspect ratio (fixed
// height, auto width) rather than being cropped into a fixed box.
//
// The horizontal distance is measured from the row's actual rendered width
// versus the actual visible container's width (NOT window.innerWidth — the
// gallery sits inside the page's centered max-w-5xl column, which is
// narrower than the browser window on most screens, so using the window
// width under-shifts the row and clips the last photo). A ResizeObserver
// keeps both measurements correct as photos finish loading and the row's
// real width settles, plus a small buffer + trailing spacer so the last
// photo always fully clears the edge.
export default function HorizontalScrollGallery({ images = [] }) {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const rowRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const row = rowRef.current;
    const container = containerRef.current;
    if (!row || !container) return;

    const BUFFER = 48;

    function measure() {
      const rowWidth = row.scrollWidth;
      const containerWidth = container.clientWidth;
      setDistance(Math.max(0, rowWidth - containerWidth + BUFFER));
    }

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(row);
    ro.observe(container);
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
      <div ref={containerRef} className="sticky top-0 flex h-screen items-center overflow-hidden">
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
