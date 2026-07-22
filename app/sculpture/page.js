import ImageGrid from "@/components/ImageGrid";

export const metadata = { title: "Kitty Wang - Sculpture" };

export default function SculpturePage() {
  return (
    <div>
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-8">Sculpture</h1>
      <ImageGrid folder="sculpture" alt="Sculpture work" />
    </div>
  );
}
