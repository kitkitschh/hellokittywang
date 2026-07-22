import VimeoEmbed from "@/components/VimeoEmbed";
import ImageGrid from "@/components/ImageGrid";
import { exhibitions } from "@/data/content";

export const metadata = { title: "Kitty Wang - Exhibitions" };

export default function ExhibitionsPage() {
  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-8">Exhibitions</h1>
      <div className="flex flex-col gap-16">
        {exhibitions.map((e) => (
          <div key={e.title}>
            <h2 className="text-lg font-medium">{e.title}</h2>
            <p className="text-sm text-ink/60 mb-4">
              {e.date} — {e.venue}
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
