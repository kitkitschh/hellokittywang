"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas dot-grid background. Dots brighten near the cursor and continuously
 * twinkle/sparkle on their own, each on a randomized phase so it reads as
 * organic rather than a uniform pulse. On top of that, the whole grid
 * occasionally glitches: horizontal slices tear sideways and briefly split
 * into red/cyan channels, like a signal drop.
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
 *  - glitch:       set false to disable the periodic glitch bursts
 *  - glitchColorA / glitchColorB: "r, g, b" channel-split colors during a glitch
 *  - glitchInterval: [min, max] ms between glitch bursts
 *  - glitchDuration: [min, max] ms a burst lasts
 *  - glitchStrength: px, how far slices/channels shift during a burst
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
  glitch = true,
  glitchColorA = "255, 40, 90",
  glitchColorB = "50, 220, 255",
  glitchInterval = [3500, 8000],
  glitchDuration = [120, 260],
  glitchStrength = 14,
  className = "",
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef([]);
  const glitchRef = useRef({ active: false, startTime: 0, duration: 0, nextTrigger: 0, bands: [] });

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    const buffer = document.createElement("canvas");
    const bufferCtx = buffer.getContext("2d");
    const tint = document.createElement("canvas");
    const tintCtx = tint.getContext("2d");

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrame;
    let width = 0;
    let height = 0;
    let dpr = 1;

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

    function sizeCanvas(c, cctx) {
      c.width = width * dpr;
      c.height = height * dpr;
      c.style.width = width + "px";
      c.style.height = height + "px";
      cctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function resize() {
      dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      sizeCanvas(canvas, ctx);
      sizeCanvas(buffer, bufferCtx);
      sizeCanvas(tint, tintCtx);
      buildDots();
    }

    function mixColor(a, b, amount) {
      const pa = a.split(",").map((n) => parseFloat(n.trim()));
      const pb = b.split(",").map((n) => parseFloat(n.trim()));
      return pa.map((v, i) => Math.round(v + (pb[i] - v) * amount)).join(", ");
    }

    function drawDotsToBuffer(t) {
      bufferCtx.clearRect(0, 0, width, height);
      const { x: mx, y: my } = mouseRef.current;

      for (const dot of dotsRef.current) {
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / hoverRadius);

        const twinkle =
          sparkle && dot.sparkles ? Math.max(0, Math.sin(t * dot.speed + dot.phase)) ** 3 : 0;

        const opacity = Math.min(1, baseOpacity + proximity * 0.8 + twinkle * 0.9);
        const radius = dotRadius * (1 + proximity * 0.6 + twinkle * 0.9);

        const mix = Math.min(1, twinkle * 1.2 + proximity * 0.6);
        const rgb = mix > 0 ? mixColor(color, sparkleColor, mix) : color;

        bufferCtx.beginPath();
        bufferCtx.arc(dot.x, dot.y, Math.max(0, radius), 0, Math.PI * 2);
        bufferCtx.fillStyle = `rgba(${rgb}, ${opacity})`;
        bufferCtx.fill();
      }
    }

    function tintedBuffer(colorRgb, alpha) {
      tintCtx.clearRect(0, 0, width, height);
      tintCtx.drawImage(buffer, 0, 0, width, height);
      tintCtx.globalCompositeOperation = "source-atop";
      tintCtx.fillStyle = `rgba(${colorRgb}, ${alpha})`;
      tintCtx.fillRect(0, 0, width, height);
      tintCtx.globalCompositeOperation = "source-over";
      return tint;
    }

    function maybeTriggerGlitch(rawTime) {
      if (!glitch || reduceMotion) return;
      const g = glitchRef.current;
      if (!g.active && rawTime >= g.nextTrigger) {
        const bandCount = 6 + Math.floor(Math.random() * 8);
        const bands = [];
        let y = 0;
        for (let i = 0; i < bandCount && y < height; i++) {
          const bandHeight = Math.max(4, Math.random() * (height / bandCount) * 1.6);
          bands.push({
            y,
            height: Math.min(bandHeight, height - y),
            dx: (Math.random() - 0.5) * 2 * glitchStrength,
          });
          y += bandHeight;
        }
        g.bands = bands;
        g.active = true;
        g.startTime = rawTime;
        g.duration = glitchDuration[0] + Math.random() * (glitchDuration[1] - glitchDuration[0]);
      } else if (g.active && rawTime - g.startTime > g.duration) {
        g.active = false;
        g.nextTrigger =
          rawTime + glitchInterval[0] + Math.random() * (glitchInterval[1] - glitchInterval[0]);
      }
    }

    function draw(rawTime) {
      const t = rawTime / 1000;
      drawDotsToBuffer(t);
      maybeTriggerGlitch(rawTime);

      ctx.clearRect(0, 0, width, height);

      const g = glitchRef.current;
      if (g.active) {
        const shiftX = (Math.random() - 0.5) * glitchStrength * 0.6;

        for (const band of g.bands) {
          ctx.drawImage(
            buffer,
            0,
            band.y * dpr,
            width * dpr,
            band.height * dpr,
            band.dx,
            band.y,
            width,
            band.height
          );
        }

        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.45;
        ctx.drawImage(
          tintedBuffer(glitchColorA, 0.9),
          glitchStrength * 0.5 + shiftX,
          0,
          width,
          height
        );
        ctx.drawImage(
          tintedBuffer(glitchColorB, 0.9),
          -glitchStrength * 0.5 + shiftX,
          0,
          width,
          height
        );
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
      } else {
        ctx.drawImage(buffer, 0, 0, width, height);
      }

      animationFrame = requestAnimationFrame(draw);
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

    glitchRef.current.nextTrigger =
      performance.now() + glitchInterval[0] + Math.random() * (glitchInterval[1] - glitchInterval[0]);

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      ro.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    spacing,
    dotRadius,
    color,
    sparkleColor,
    baseOpacity,
    hoverRadius,
    sparkle,
    sparkleDensity,
    glitch,
    glitchColorA,
    glitchColorB,
    glitchInterval,
    glitchDuration,
    glitchStrength,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
