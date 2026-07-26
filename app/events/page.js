import fs from "fs";
import path from "path";
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
import { eventPhotographyGalleries } from "@/data/content";

export const metadata = { title: "Kitty Wang - Events & Photography" };

function getImages(folder, alt) {
  const dir = path.join(process.cwd(), "public", "images", folder);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .sort()
      .map((f) => ({ src: `/images/${folder}/${f}`, alt }));
  } catch (e) {
    return [];
  }
}

function Gallery({ folder, alt, title, date }) {
  const images = getImages(folder, alt);
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
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-2">Events & Photography</h1>
      <p className="text-ink/60 mb-12 max-w-xl">
        Event photography — client and social event coverage. (Documentation from her
        own gallery shows lives under Contemporary Art › Exhibitions.)
      </p>

      <div className="flex flex-col">
        {eventPhotographyGalleries.map((g) => (
          <Gallery key={g.title} folder={g.imageFolder} alt={g.title} title={g.title} date={g.date} />
        ))}
      </div>
    </div>
  );
}
