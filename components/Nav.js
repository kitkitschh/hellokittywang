"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/content";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/about";

  const base = isHome ? "text-white" : "text-ink";
  const dim = isHome ? "text-white/70" : "text-ink/70";
  const dividerClass = isHome ? "" : "border-b border-ink/10";
  const wrapperClass = isHome ? "absolute inset-x-0 top-0 z-10" : "relative";

  return (
    <header className={`${wrapperClass} ${dividerClass} ${base}`}>
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <Link href="/" className="text-lg tracking-widest uppercase font-serif">
            Kitty Wang
          </Link>
          <div className="flex gap-4 text-sm uppercase tracking-wide">
            <Link href="/about" className={pathname === "/about" ? "underline" : "hover:underline"}>
              About
            </Link>
            <Link href="/cv" className={pathname === "/cv" ? "underline" : "hover:underline"}>
              CV
            </Link>
            <Link href="/contact" className={pathname === "/contact" ? "underline" : "hover:underline"}>
              Contact
            </Link>
          </div>
        </div>
        <nav className={`flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-wide ${dim}`}>
          {nav.map((item) => {
            const active = pathname === item.href;
            const linkClass = active
              ? isHome
                ? "text-white underline"
                : "text-ink underline"
              : isHome
                ? "hover:text-white hover:underline"
                : "hover:text-ink hover:underline";
            return (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
