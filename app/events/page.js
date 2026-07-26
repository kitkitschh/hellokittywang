import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
import { getImagesFromFolder } from "@/lib/images";
import { eventPhotographyGalleries } from "@/data/content";

export const metadata = { title: "Kitty Wang - Events & Photography" };

function Gallery({ folder, alt, title, date }) {
  const images = getImagesFromFolder(folder, alt);
  if (images.length === 0) {
    return (
      <div>
        <h2 className="text-2xl sm:text-3xl uppercase tracking-widest font-serif mb-2">{title}</h2>
        {date && <p className="text-sm text-ink/60 mb-4">{date}</p>}
        <div className="border border-dashed border-ink/20 rounded p-8 text-sm text-ink/50">
          Drop images into <code className="px-1">/public/images/{folder}</code> to display them here.
        </div>
      </div>
    );
  }
  return <HorizontalScrollGallery images={images} title={title} date={date} />;
}

export default function EventsPage() {
  return (
    <div>
      <div className="fixed inset-0 -z-10 gradient-bg" aria-hidden="true" />
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-12">Events & Photography</h1>

      <div className="flex flex-col">
        {eventPhotographyGalleries.map((g) => (
          <Gallery key={g.title} folder={g.imageFolder} alt={g.title} title={g.title} date={g.date} />
        ))}
      </div>
    </div>
  );
}
