import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
import VimeoEmbed from "@/components/VimeoEmbed";
import { getImagesFromFolder } from "@/lib/images";
import { exhibitionDocumentation } from "@/data/content";

export const metadata = { title: "Kitty Wang - Exhibitions" };

function Exhibition({ title, date, venue, imageFolder, vimeoId }) {
  const images = getImagesFromFolder(imageFolder, title);
  const dateLine = [date, venue].filter(Boolean).join(" — ");

  if (images.length === 0) {
    return (
      <div>
        <h2 className="text-2xl sm:text-3xl uppercase tracking-widest font-serif mb-2">{title}</h2>
        {dateLine && <p className="text-sm text-ink/60 mb-4">{dateLine}</p>}
        <div className="border border-dashed border-ink/20 rounded p-8 text-sm text-ink/50">
          Drop images into <code className="px-1">/public/images/{imageFolder}</code> to display them here.
        </div>
        {vimeoId && (
          <div className="mt-4">
            <VimeoEmbed id={vimeoId} title={title} />
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <HorizontalScrollGallery images={images} title={title} date={dateLine} />
      {vimeoId && (
        <div className="px-6 pb-16 max-w-2xl">
          <VimeoEmbed id={vimeoId} title={title} />
        </div>
      )}
    </>
  );
}

export default function ContemporaryArtPage() {
  return (
    <div>
      <div className="fixed inset-0 -z-10 gradient-bg" aria-hidden="true" />
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-12">Exhibitions</h1>

      <div className="flex flex-col">
        {exhibitionDocumentation.map((e) => (
          <Exhibition
            key={e.title}
            title={e.title}
            date={e.date}
            venue={e.venue}
            imageFolder={e.imageFolder}
            vimeoId={e.vimeoId}
          />
        ))}
      </div>
    </div>
  );
}
