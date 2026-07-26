export default function VimeoEmbed({ id, hash, title }) {
  const params = new URLSearchParams({
    title: "0",
    byline: "0",
    portrait: "0",
    badge: "0",
    autopause: "0",
    player_id: "0",
    app_id: "58479",
  });
  if (hash) params.set("h", hash);

  return (
    <div className="relative w-full aspect-video bg-black">
      <iframe
        src={`https://player.vimeo.com/video/${id}?${params.toString()}`}
        title={title}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
