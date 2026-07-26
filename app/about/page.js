import Image from "next/image";
import { bio, bioPhotoCredit } from "@/data/content";

export const metadata = { title: "Kitty Wang - About" };

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-8">About</h1>
      <div className="relative w-full max-w-sm aspect-[3/2] mb-2 bg-ink/5">
        <Image
          src="/images/about/kitty-wang-portrait.jpg"
          alt="Kitty Wang"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
          priority
        />
      </div>
      <p className="text-xs text-ink/50 mb-8">{bioPhotoCredit}</p>
      <div className="prose-body text-[15px] leading-relaxed whitespace-pre-line">{bio}</div>
    </div>
  );
}
