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
// like "-95%" only reveals everything for one specific row length.
export default function HorizontalScrollGallery({ images = [] }) {
  const targetRef = useRef(null);
  const rowRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    function measure() {
      if (!rowRef.current) return;
      const rowWidth = rowRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setDistance(Math.max(0, rowWidth - viewportWidth));
    }

    measure();
    window.addEventListener("resize", measure);

    const imgs = rowRef.current ? Array.from(rowRef.current.querySelectorAll("img")) : [];
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", measure);
    });

    return () => {
      window.removeEventListener("resize", measure);
      imgs.forEach((img) => img.removeEventListener("load", measure));
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
        </motion.div>
      </div>
    </section>
  );
}
