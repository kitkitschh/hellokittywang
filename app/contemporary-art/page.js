import Link from "next/link";
import ImageGrid from "@/components/ImageGrid";
import VimeoEmbed from "@/components/VimeoEmbed";
import { contemporaryArt, exhibitionDocumentation } from "@/data/content";

export const metadata = { title: "Kitty Wang - Contemporary Art" };

export default function ContemporaryArtPage() {
  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-2">Contemporary Art</h1>
      <p className="text-ink/60 mb-12 max-w-xl">
        Gallery-based practice — drawing and sculpture, plus documentation from her own
        exhibitions — kept separate from the video/marketing/event work.
      </p>

      <div className="flex flex-col gap-16 mb-16">
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

      <h2 className="uppercase text-sm tracking-widest font-medium mb-6">Exhibitions</h2>
      <div className="flex flex-col gap-16">
        {exhibitionDocumentation.map((e) => (
          <div key={e.title}>
            <h3 className="text-lg font-medium">{e.title}</h3>
            <p className="text-sm text-ink/60 mb-4">
              {e.date ? `${e.date} — ` : ""}
              {e.venue}
            </p>
            <ImageGrid folder={e.imageFolder} alt={e.title} />
            {e.vimeoId && (
              <div className="mt-4">
                <VimeoEmbed id={e.vimeoId} title={e.title} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
