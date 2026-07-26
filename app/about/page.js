import Image from "next/image";
import { bio } from "@/data/content";

export const metadata = { title: "Kitty Wang - About" };

export default function AboutPage() {
  return (
    <div className="fixed inset-0">
      <div className="absolute inset-0 -z-10 bg-black">
        <Image
          src="/images/about/kitty-wang-portrait.jpg"
          alt="Kitty Wang holding a vintage film camera up to her eye"
          fill
          sizes="100vw"
          className="object-cover object-[70%_30%]"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="h-full overflow-y-auto px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl uppercase tracking-widest font-serif mb-8 text-white">About</h1>
          <div className="prose-body text-base leading-relaxed whitespace-pre-line text-white/90">
            {bio}
          </div>
        </div>
      </div>
    </div>
  );
}
