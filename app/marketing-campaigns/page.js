import fs from "fs";
import path from "path";
import SocialCards from "@/components/SocialCards";
import VimeoEmbed from "@/components/VimeoEmbed";
import { marketingCampaigns } from "@/data/content";

export const metadata = { title: "Kitty Wang - Marketing Campaigns" };

function getCards(folder, alt) {
  const dir = path.join(process.cwd(), "public", "images", folder);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .sort()
      .map((f) => ({ imgUrl: `/images/${folder}/${f}`, alt }));
  } catch (e) {
    return [];
  }
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
            <div className="flex flex-col gap-12">
              {c.subCampaigns.map((sub) => {
                const alt = `${c.client} — ${sub.title}`;
                const cards = sub.videos ? [] : getCards(sub.imageFolder, alt);
                return (
                  <div key={sub.title}>
                    <h3 className="text-sm uppercase tracking-wide text-ink/70 mb-3">{sub.title}</h3>
                    {sub.videos ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {sub.videos.map((v) => (
                          <VimeoEmbed
                            key={v.id}
                            id={v.id}
                            hash={v.hash}
                            title={alt}
                            aspect={sub.videoAspect}
                          />
                        ))}
                      </div>
                    ) : cards.length === 0 ? (
                      <div className="border border-dashed border-ink/20 rounded p-8 text-sm text-ink/50">
                        Drop images into <code className="px-1">/public/images/{sub.imageFolder}</code> to
                        display them here.
                      </div>
                    ) : (
                      <SocialCards cards={cards} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
