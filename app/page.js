import VideoHero from "@/components/VideoHero";

export default function HomePage() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center text-center px-6">
      <VideoHero />
      <h1 className="text-3xl sm:text-5xl uppercase tracking-widest font-serif text-white">
        Kitty Wang
      </h1>
    </div>
  );
}
