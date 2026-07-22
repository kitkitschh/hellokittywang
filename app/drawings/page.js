import ImageGrid from "@/components/ImageGrid";

export const metadata = { title: "Kitty Wang - Drawings" };

export default function DrawingsPage() {
  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-8">Drawings</h1>
      <ImageGrid folder="drawings" alt="Drawing work" />
    </div>
  );
}
