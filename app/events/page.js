import VimeoEmbed from "@/components/VimeoEmbed";
import ImageGrid from "@/components/ImageGrid";
import { eventDocumentation, eventPhotographyFolder } from "@/data/content";

export const metadata = { title: "Kitty Wang - Events & Documentation" };

export default function EventsPage() {
  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-2">Events & Documentation</h1>
      <p className="text-ink/60 mb-12 max-w-xl">
        Event photography and art show documentation — installation shots, opening
        nights, and behind-the-scenes coverage.
      </p>

      <section className="mb-16">
        <h2 className="uppercase text-sm tracking-widest font-medium mb-4">Event Photography</h2>
        <ImageGrid folder={eventPhotographyFolder} alt="Event photography" />
      </section>

      <div className="flex flex-col gap-16">
        {eventDocumentation.map((e) => (
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
