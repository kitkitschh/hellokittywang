"use client";

import { useEffect, useRef } from "react";

// A grid where each photo rises from below, settles flat/in-focus as it
// crosses the middle of the viewport, then tilts away as the page keeps
// scrolling past it — driven continuously by scroll position, not a
// one-shot reveal animation.
export default function ScrollTiltedGrid({ images = [] }) {
  const itemRefs = useRef([]);

  useEffect(() => {
    let ticking = false;

    function update() {
      const vh = window.innerHeight;
      const center = vh / 2;

      itemRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const raw = (itemCenter - center) / (center + rect.height / 2);
        const progress = Math.max(-1, Math.min(1, raw));

        const rotate = progress * -18;
        const translate = progress * 36;
        const scale = 1 - Math.abs(progress) * 0.06;
        const opacity = Math.max(0.2, 1 - Math.abs(progress) * 0.85);

        el.style.transform = `perspective(1000px) rotateX(${rotate.toFixed(2)}deg) translateY(${translate.toFixed(2)}px) scale(${scale.toFixed(3)})`;
        el.style.opacity = opacity.toFixed(2);
      });

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8" style={{ perspective: "1200px" }}>
      {images.map((img, i) => (
        <div
          key={img.src}
          ref={(el) => (itemRefs.current[i] = el)}
          className="relative aspect-[4/5] bg-ink/5 will-change-transform"
          style={{ transition: "transform 0.05s linear, opacity 0.05s linear" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
