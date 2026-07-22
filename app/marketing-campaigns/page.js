import ImageGrid from "@/components/ImageGrid";
import { marketingCampaigns } from "@/data/content";

export const metadata = { title: "Kitty Wang - Marketing Campaigns" };

export default function MarketingCampaignsPage() {
  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-8">Marketing Campaigns</h1>
      <div className="flex flex-col gap-16">
        {marketingCampaigns.map((c) => (
          <div key={c.client}>
            <h2 className="text-lg font-medium">{c.client}</h2>
            <p className="text-sm text-ink/60 mb-4">{c.date}</p>
            <ImageGrid folder={c.imageFolder} alt={c.client} />
          </div>
        ))}
      </div>
    </div>
  );
}
