"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NO_SCROLL_ROUTES = ["/", "/about"];

// Locks page scroll on specific routes (full-screen hero pages) without
// affecting normal, longer pages like the CV or galleries.
export default function ScrollLock() {
  const pathname = usePathname();

  useEffect(() => {
    const lock = NO_SCROLL_ROUTES.includes(pathname);
    document.documentElement.style.overflow = lock ? "hidden" : "";
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [pathname]);

  return null;
}
