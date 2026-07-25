import ImageGrid from "@/components/ImageGrid";
import VimeoEmbed from "@/components/VimeoEmbed";
import { exhibitionDocumentation } from "@/data/content";

export const metadata = { title: "Kitty Wang - Contemporary Art" };

export default function ContemporaryArtPage() {
  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-2">Contemporary Art</h1>
      <p className="text-ink/60 mb-12 max-w-xl">
        Documentation from her own exhibitions — kept separate from the video/marketing/
        event work.
      </p>

      <div className="flex flex-col gap-16">
        {exhibitionDocumentation.map((e) => (
          <div key={e.title}>
            <h2 className="text-lg font-medium">{e.title}</h2>
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
