"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas dot-grid background. Dots brighten near the cursor and continuously
 * twinkle/sparkle on their own, each on a randomized phase so it reads as
 * organic rather than a uniform pulse.
 *
 * Props:
 *  - spacing:      px between dots
 *  - dotRadius:    base dot radius in px
 *  - color:        "r, g, b" base dot color
 *  - sparkleColor: "r, g, b" color dots flash toward at the peak of a twinkle
 *  - baseOpacity:  resting opacity of a dot with no hover/twinkle
 *  - hoverRadius:  px radius of the cursor's influence
 *  - sparkle:      set false to disable the idle twinkle and keep hover-only
 *  - sparkleDensity: 0-1, roughly what fraction of dots are twinkling at once
 */
export function InteractiveDots({
  spacing = 24,
  dotRadius = 2,
  color = "20, 20, 20",
  sparkleColor = "255, 225, 170",
  baseOpacity = 0.18,
  hoverRadius = 140,
  sparkle = true,
  sparkleDensity = 0.35,
  className = "",
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    let animationFrame;
    let width = 0;
    let height = 0;

    function buildDots() {
      const dots = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Stagger phase/speed per dot, and only give a subset an active
          // sparkle cycle so it doesn't look like the whole grid pulsing.
          const isSparkler = Math.random() < sparkleDensity;
          dots.push({
            x: i * spacing,
            y: j * spacing,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 1.4,
            sparkles: isSparkler,
          });
        }
      }
      dotsRef.current = dots;
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildDots();
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);
      const { x: mx, y: my } = mouseRef.current;
      const t = time / 1000;

      for (const dot of dotsRef.current) {
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / hoverRadius);

        const twinkle =
          sparkle && dot.sparkles ? Math.max(0, Math.sin(t * dot.speed + dot.phase)) ** 3 : 0;

        const opacity = Math.min(1, baseOpacity + proximity * 0.8 + twinkle * 0.9);
        const radius = dotRadius * (1 + proximity * 0.6 + twinkle * 0.9);

        // Blend toward the sparkle color as the twinkle peaks, and toward
        // full brightness near the cursor.
        const mix = Math.min(1, twinkle * 1.2 + proximity * 0.6);
        const rgb = mix > 0 ? mixColor(color, sparkleColor, mix) : color;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(0, radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${opacity})`;
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    }

    function mixColor(a, b, amount) {
      const pa = a.split(",").map((n) => parseFloat(n.trim()));
      const pb = b.split(",").map((n) => parseFloat(n.trim()));
      return pa.map((v, i) => Math.round(v + (pb[i] - v) * amount)).join(", ");
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function handleMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    resize();

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      ro.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [spacing, dotRadius, color, sparkleColor, baseOpacity, hoverRadius, sparkle, sparkleDensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
