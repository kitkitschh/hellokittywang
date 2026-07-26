import Image from "next/image";
import { bio } from "@/data/content";

export const metadata = { title: "Kitty Wang - About" };

export default function AboutPage() {
  return (
    <div className="relative min-h-[85vh]">
      <div className="fixed inset-0 -z-10 bg-black">
        <Image
          src="/images/about/kitty-wang-portrait.jpg"
          alt="Kitty Wang"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="max-w-2xl">
        <h1 className="text-2xl uppercase tracking-widest font-serif mb-8 text-white">About</h1>
        <div className="prose-body text-[15px] leading-relaxed whitespace-pre-line text-white/90">
          {bio}
        </div>
      </div>
    </div>
  );
}
