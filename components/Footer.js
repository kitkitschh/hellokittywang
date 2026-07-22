import { socials } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-4 sm:justify-between text-sm text-ink/60">
        <span>&copy; {new Date().getFullYear()} Kitty Wang</span>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="hover:text-ink hover:underline">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
