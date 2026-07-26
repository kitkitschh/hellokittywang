"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Pins the section while the page scrolls through it, translating a row of
// photos horizontally. Each photo keeps its own natural aspect ratio (fixed
// height, auto width) rather than being cropped into a fixed box.
export default function HorizontalScrollGallery({ images = [] }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  if (images.length === 0) return null;

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-4 px-6">
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
