import Link from "next/link";
import ImageGrid from "@/components/ImageGrid";
import { contemporaryArt } from "@/data/content";

export const metadata = { title: "Kitty Wang - Contemporary Art" };

export default function ContemporaryArtPage() {
  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-2">Contemporary Art</h1>
      <p className="text-ink/60 mb-12 max-w-xl">
        Gallery-based practice — drawing and sculpture, separate from the
        video/production/event work.
      </p>
      <div className="flex flex-col gap-16">
        {contemporaryArt.map((section) => (
          <div key={section.slug}>
            <Link href={`/contemporary-art/${section.slug}`} className="text-lg font-medium hover:underline">
              {section.title} →
            </Link>
            <div className="mt-4">
              <ImageGrid folder={section.imageFolder} alt={section.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
