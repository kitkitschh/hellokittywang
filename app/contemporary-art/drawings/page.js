import Link from "next/link";
import ImageGrid from "@/components/ImageGrid";

export const metadata = { title: "Kitty Wang - Drawings" };

export default function DrawingsPage() {
  return (
    <div>
      <Link href="/contemporary-art" className="text-sm text-ink/60 hover:underline">
        ← Contemporary Art
      </Link>
      <h1 className="text-2xl uppercase tracking-widest font-serif mt-2 mb-8">Drawings</h1>
      <ImageGrid folder="contemporary-art/drawings" alt="Drawing work" />
    </div>
  );
}
