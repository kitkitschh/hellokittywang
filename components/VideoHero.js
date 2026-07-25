// Full-bleed looping background video for the homepage. Fixed positioning
// means it fills the viewport regardless of the page's max-width/padding,
// same trick used for the old dot-grid background.
//
// Drop the actual reel file at public/videos/reel.mp4 (and optionally a
// poster frame at public/videos/reel-poster.jpg) — nothing else needs to
// change once it's there.
export default function VideoHero({
  src = "/videos/reel.mp4",
  poster = "/videos/reel-poster.jpg",
}) {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <video
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}
