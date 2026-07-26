# Kitty Wang Portfolio

Rebuilt from hellokittywang.com (previously on Adobe Portfolio) as a Next.js site,
ready to host on Vercel and version with GitHub.

## Run locally

```
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

Reorganized to center the site on marketing/video/event work first, with her own
exhibitions kept separate under Contemporary Art:

- `app/` — Work (home — full-bleed video reel hero), Film/Video, Marketing Campaigns,
  Events & Documentation (client/social event photography), Contemporary Art
  (exhibition documentation from her own gallery shows only), About, CV, Contact.
- `public/videos/reel.mp4` — the homepage background reel. Not included yet; drop a
  compressed file here (h.264 mp4, no audio needed since it autoplays muted, 1080p is
  plenty, aim under ~15-20MB so the homepage loads quickly). Optionally add
  `public/videos/reel-poster.jpg` as a fallback frame while it loads.
  `components/VideoHero.js` is the component that renders it full-screen.
- `data/content.js` — all text content + the Vimeo video IDs pulled from the live site.
  Edit this file to update bio, CV, video list, or gallery sections.
- `public/images/<folder>` — web-ready photos live here and show up automatically on
  the matching page:
  - `events/essence-unleashed-2025`, `events/boyscoutmarie-elsewhere-2026`,
    `events/passport-mudhouse-2024`, `events/social-parties` — named event galleries
  - `events/event-photography` — catch-all for other event photography
  - `contemporary-art/exhibitions/superstar-superstar-death`,
    `contemporary-art/exhibitions/when-will-you-play`,
    `contemporary-art/exhibitions/reflections-of-home` — exhibition documentation
  - `marketing-campaigns/easyherb/<sub-campaign>` (what-is-easyherb, lets-get-connected,
    meme-format, two-robbers, assets), `marketing-campaigns/glo-studio/<sub-campaign>`
    (uniqlo-x-glo-studio-neons, dark-matter-coffee-x-glo-studio-install,
    cooper-union-tuition-free-announcement, glo-studio-sample-sale-announcement)
  - `about/kitty-wang-portrait.jpg` — her About page photo

  See `../media/` (one level up, outside this git repo) for the staging folder — drop
  raw originals there and Claude will resize/compress a web copy into the matching
  folder above.
- `components/ImageGrid.js` — reads whatever images are in a `public/images/<folder>`
  at build time, no code changes needed to add photos.

## Still needs your input

- `app/contact/page.js` has a placeholder email (`hello@hellokittywang.com`) — swap in
  your real contact address.
- The "Instagram Reels" sub-folders for EasyHerb and GLO Studio are video files (.mp4),
  which the site can't embed directly — upload those to Vimeo and add them to
  `filmVideoWorks` (or a new marketing-reels list) in `data/content.js` if you want them
  playable on the site.

## Push to GitHub

```
git remote add origin https://github.com/kittywang/portfolio.git
git branch -M main
git push -u origin main
```

(Create the `kittywang/portfolio` repo on GitHub first if it doesn't exist yet.)

## Deploy to Vercel

Once the repo is on GitHub: go to vercel.com/new, import the repo, and Vercel will
build and deploy automatically (zero config needed for Next.js). Every future push to
`main` redeploys.
