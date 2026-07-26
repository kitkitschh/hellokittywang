import ImageGrid from "@/components/ImageGrid";
import { eventPhotographyGalleries, eventPhotographyFolder } from "@/data/content";

export const metadata = { title: "Kitty Wang - Events & Photography" };

export default function EventsPage() {
  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-2">Events & Photography</h1>
      <p className="text-ink/60 mb-12 max-w-xl">
        Event photography — client and social event coverage. (Documentation from her
        own gallery shows lives under Contemporary Art › Exhibitions.)
      </p>

      <div className="flex flex-col gap-16">
        {eventPhotographyGalleries.map((g) => (
          <div key={g.title}>
            <h2 className="text-lg font-medium">{g.title}</h2>
            {g.date && <p className="text-sm text-ink/60 mb-4">{g.date}</p>}
            <ImageGrid folder={g.imageFolder} alt={g.title} />
          </div>
        ))}

        <div>
          <h2 className="text-lg font-medium">More Event Photography</h2>
          <ImageGrid folder={eventPhotographyFolder} alt="Event photography" />
        </div>
      </div>
    </div>
  );
}
