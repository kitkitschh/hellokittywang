import Link from "next/link";
import VimeoEmbed from "@/components/VimeoEmbed";
import { filmVideoWorks } from "@/data/content";

export default function WorkPage() {
  const featured = filmVideoWorks.slice(0, 4);

  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-8">Work</h1>
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
        <Link href="/exhibitions" className="underline">
          Exhibitions
        </Link>
        ,{" "}
        <Link href="/sculpture" className="underline">
          Sculpture
        </Link>
        , and{" "}
        <Link href="/drawings" className="underline">
          Drawings
        </Link>
        .
      </p>
    </div>
  );
}
