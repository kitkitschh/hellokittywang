import Link from "next/link";
import VimeoEmbed from "@/components/VimeoEmbed";
import { filmVideoWorks } from "@/data/content";

export default function WorkPage() {
  const featured = filmVideoWorks.slice(0, 4);

  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-2">Work</h1>
      <p className="text-ink/60 mb-10 max-w-xl">
        Video, marketing, and event work — plus documentation from her own exhibitions.
      </p>
      <div className="grid sm:grid-cols-2 gap-8">
        {featured.map((w) => (
          <div key={w.id}>
            <VimeoEmbed id={w.id} title={w.title} />
            <p className="mt-3 text-sm">
              <span className="font-medium">{w.title}</span> {w.year}
              {w.medium ? ` — ${w.medium}` : ""}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-sm text-ink/60">
        See more in{" "}
        <Link href="/film-video" className="underline">
          Film / Video
        </Link>
        ,{" "}
        <Link href="/marketing-campaigns" className="underline">
          Marketing Campaigns
        </Link>
        ,{" "}
        <Link href="/events" className="underline">
          Events & Documentation
        </Link>
        , and{" "}
        <Link href="/contemporary-art" className="underline">
          Contemporary Art
        </Link>
        .
      </p>
    </div>
  );
}
