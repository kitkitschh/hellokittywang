import fs from "fs";
import path from "path";
import HorizontalScrollGallery from "@/components/HorizontalScrollGallery";
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
  if (sub.videos) {
    return (
      <div className="my-16">
        <h3 className="text-sm uppercase tracking-wide text-ink/70 mb-3">{sub.title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {sub.videos.map((v) => (
            <VimeoEmbed
              key={v.id}
              id={v.id}
              hash={v.hash}
              title={`${client} — ${sub.title}`}
              aspect={sub.videoAspect}
            />
          ))}
        </div>
      </div>
    );
  }

  const alt = `${client} — ${sub.title}`;
  const images = getImages(sub.imageFolder, alt);

  if (images.length === 0) {
    return (
      <div className="my-16">
        <h3 className="text-sm uppercase tracking-wide text-ink/70 mb-3">{sub.title}</h3>
        <div className="border border-dashed border-ink/20 rounded p-8 text-sm text-ink/50">
          Drop images into <code className="px-1">/public/images/{sub.imageFolder}</code> to display them here.
        </div>
      </div>
    );
  }

  return <HorizontalScrollGallery images={images} title={sub.title} />;
}

export default function MarketingCampaignsPage() {
  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-8">Marketing Campaigns</h1>
      <div className="flex flex-col gap-20">
        {marketingCampaigns.map((c) => (
          <div key={c.client}>
            <h2 className="text-xl font-medium">{c.client}</h2>
            <p className="text-sm text-ink/60 mb-8">{c.date}</p>
            <div className="flex flex-col">
              {c.subCampaigns.map((sub) => (
                <SubCampaign key={sub.title} client={c.client} sub={sub} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
