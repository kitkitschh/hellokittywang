"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, socials } from "@/data/content";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-ink/10">
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
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-wide text-ink/70">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "text-ink underline" : "hover:text-ink hover:underline"}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
