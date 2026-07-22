import VimeoEmbed from "@/components/VimeoEmbed";
import { filmVideoWorks } from "@/data/content";

export const metadata = { title: "Kitty Wang - Film / Video" };

export default function FilmVideoPage() {
  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-8">Film / Video</h1>
      <div className="flex flex-col gap-16">
        {filmVideoWorks.map((w) => (
          <div key={w.id}>
            <VimeoEmbed id={w.id} title={w.title} />
            <p className="mt-3 text-sm">
              <span className="font-medium">{w.title}</span> {w.year}
              {w.medium ? ` — ${w.medium}` : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
