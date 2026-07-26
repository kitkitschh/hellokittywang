import ImageGrid from "@/components/ImageGrid";
import VimeoEmbed from "@/components/VimeoEmbed";
import { marketingCampaigns } from "@/data/content";

export const metadata = { title: "Kitty Wang - Marketing Campaigns" };

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
              {c.subCampaigns.map((sub) => (
                <div key={sub.title}>
                  <h3 className="text-sm uppercase tracking-wide text-ink/70 mb-3">{sub.title}</h3>
                  {sub.videos ? (
                    <div className="flex flex-col gap-6">
                      {sub.videos.map((v) => (
                        <VimeoEmbed key={v.id} id={v.id} hash={v.hash} title={`${c.client} — ${sub.title}`} />
                      ))}
                    </div>
                  ) : (
                    <ImageGrid folder={sub.imageFolder} alt={`${c.client} — ${sub.title}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
