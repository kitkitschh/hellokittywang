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

Reorganized to center the site on marketing/video/event work first, with drawing and
sculpture kept as a separate contemporary-art practice:

- `app/` — Work (home), Film/Video, Marketing Campaigns, Events & Documentation
  (client/social event photography), Contemporary Art (Drawings, Sculpture, and
  Exhibitions — documentation from her own gallery shows), About, CV, Contact.
- `data/content.js` — all text content + the Vimeo video IDs pulled from the live site.
  Edit this file to update bio, CV, video list, or gallery sections.
- `public/images/<folder>` — web-ready photos live here and show up automatically on
  the matching page:
  - `events/essence-unleashed-2025`, `events/boyscoutmarie-elsewhere-2026`,
    `events/passport-mudhouse-2024`, `events/social-parties` — named event galleries
  - `events/event-photography` — catch-all for other event photography
  - `contemporary-art/drawings`, `contemporary-art/sculpture`
  - `contemporary-art/exhibitions/superstar-superstar-death`,
    `contemporary-art/exhibitions/when-will-you-play`,
    `contemporary-art/exhibitions/reflections-of-home` — exhibition documentation
  - `marketing-campaigns/easyherb`, `marketing-campaigns/glo-studio`

  See `../media/` (one level up, outside this git repo) for the staging folder — drop
  raw originals there and Claude will resize/compress a web copy into the matching
  folder above.
- `components/ImageGrid.js` — reads whatever images are in a `public/images/<folder>`
  at build time, no code changes needed to add photos.

## Still needs your input

- `app/contact/page.js` has a placeholder email (`hello@hellokittywang.com`) — swap in
  your real contact address.
- Sculpture and Drawings still have no images — drop originals into
  `../media/contemporary-art/sculpture` or `../media/contemporary-art/drawings`.

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
