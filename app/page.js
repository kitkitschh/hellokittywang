import VideoHero from "@/components/VideoHero";

export default function HomePage() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center text-center px-6">
      <VideoHero />
      <h1 className="text-3xl sm:text-5xl uppercase tracking-widest font-serif text-white">
        Kitty Wang
      </h1>
      <p className="mt-4 max-w-md text-white/80 text-sm sm:text-base">
        Video, marketing, and event work — plus documentation from her own exhibitions.
      </p>
    </div>
  );
}
