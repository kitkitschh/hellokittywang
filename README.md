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
  (event photography + art show documentation), Contemporary Art (Drawings +
  Sculpture as sub-pages), About, CV, Contact.
- `data/content.js` — all text content + the Vimeo video IDs pulled from the live site.
  Edit this file to update bio, CV, video list, or gallery sections.
- `public/images/<folder>` — drop exported photos here and they show up automatically
  on the matching page:
  - `events/event-photography` — general event photography
  - `events/superstar-superstar-death`, `events/when-will-you-play` — art show documentation
  - `contemporary-art/drawings`, `contemporary-art/sculpture`
  - `marketing-campaigns/easyherb`, `marketing-campaigns/glo-studio`

  See `../media/` (one level up, outside this git repo) for a place to stage raw/original
  files before exporting web-ready versions in here.
- `components/ImageGrid.js` — reads whatever images are in a `public/images/<folder>`
  at build time, no code changes needed to add photos.

## Still needs your input

- `app/contact/page.js` has a placeholder email (`hello@hellokittywang.com`) — swap in
  your real contact address.
- Every gallery page is wired up but has no images yet (the old site's images live on
  Adobe's CDN and weren't accessible to copy directly) — export/drop photos into the
  relevant `public/images/...` folder listed above.

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
