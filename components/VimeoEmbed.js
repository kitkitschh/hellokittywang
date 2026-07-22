export default function VimeoEmbed({ id, title }) {
  return (
    <div className="relative w-full aspect-video bg-black">
      <iframe
        src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
        title={title}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
