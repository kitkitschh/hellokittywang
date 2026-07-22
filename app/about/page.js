import { bio, bioPhotoCredit } from "@/data/content";

export const metadata = { title: "Kitty Wang - About" };

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-8">About</h1>
      <div className="prose-body text-[15px] leading-relaxed whitespace-pre-line">{bio}</div>
      <p className="mt-6 text-xs text-ink/50">{bioPhotoCredit}</p>
    </div>
  );
}
