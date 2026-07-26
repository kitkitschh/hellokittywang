import fs from "fs";
import path from "path";
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
import StaticPhotoRow from "@/components/StaticPhotoRow";
import VimeoEmbed from "@/components/VimeoEmbed";
import { marketingCampaigns } from "@/data/content";

export const metadata = { title: "Kitty Wang - Marketing Campaigns" };

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

function SubCampaign({ client, sub }) {
  const alt = `${client} — ${sub.title}`;

  if (sub.videos) {
    return (
      <div className="px-6 pb-16 pt-4">
        <h2 className="text-2xl sm:text-3xl uppercase tracking-widest font-serif">{sub.title}</h2>
        <p className="text-sm text-ink/60 mt-1 mb-6">{client}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl">
          {sub.videos.map((v) => (
            <VimeoEmbed key={v.id} id={v.id} hash={v.hash} title={alt} aspect={sub.videoAspect} />
          ))}
        </div>
      </div>
    );
  }

  const images = getImages(sub.imageFolder, alt);

  if (images.length === 0) {
    return (
      <div className="px-6 pb-16 pt-4">
        <h2 className="text-2xl sm:text-3xl uppercase tracking-widest font-serif">{sub.title}</h2>
        <p className="text-sm text-ink/60 mt-1 mb-6">{client}</p>
        <div className="border border-dashed border-ink/20 rounded p-8 text-sm text-ink/50">
          Drop images into <code className="px-1">/public/images/{sub.imageFolder}</code> to display them here.
        </div>
      </div>
    );
  }

  // Too few photos for the scroll-pin carousel to make sense — show them in
  // the same title/date + full-height-photo styling, just not pinned/scrolled.
  if (images.length <= 2) {
    return <StaticPhotoRow images={images} title={sub.title} date={client} />;
  }

  return <HorizontalScrollGallery images={images} title={sub.title} date={client} />;
}

export default function MarketingCampaignsPage() {
  return (
    <div>
      <div className="fixed inset-0 -z-10 gradient-bg" aria-hidden="true" />
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-12">Marketing Campaigns</h1>

      <div className="flex flex-col">
        {marketingCampaigns.map((c) =>
          c.subCampaigns.map((sub) => (
            <SubCampaign key={`${c.client}-${sub.title}`} client={c.client} sub={sub} />
          ))
        )}
      </div>
    </div>
  );
}
