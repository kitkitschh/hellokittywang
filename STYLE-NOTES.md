# Style notes

Running log of Kitty's preferences for this site, so future changes don't
re-tread ground she's already ruled in or out. Updated as we go.

## Liked / keep

- Horizontal scroll-pin photo carousel on Events & Photography (framer-motion:
  pins the section, slides photos horizontally as you scroll). Iterated on
  this a lot — wants it slow/gradual, not fast.
- Sub-section titles: big (roughly matching the page's serif heading style),
  and pinned/visible the whole time you're scrolling through that gallery —
  not left behind above it.
- Photos shown at their real, original aspect ratio — not cropped into
  squares or any fixed shape.
- Full-bleed photo/video backgrounds for hero-style pages (Home = video reel,
  About = portrait photo), with nav overlaying transparently on top.
- Larger, more legible base font size (root font-size bumped up twice, now a
  fixed 20px).

## Disliked / reverted

- Sparkly + glitchy interactive dot-grid homepage background — removed
  entirely, went back to plain background.
- Scroll-tilt "rise into focus, tilt away" grid effect on Events &
  Photography sub-sections — reverted to the horizontal scroll carousel.
- Fan-of-cards / hand-of-cards hover effect (gsap) on Marketing Campaigns
  sub-campaigns, where photos are cropped to a uniform card size — reverted
  to plain masonry grid. (Note: this effect requires cropping to a fixed
  card size, which conflicts with the "original aspect ratio" preference
  above — worth remembering before suggesting card-stack-style effects again.)
- Forcing every gallery photo into a 1:1 square crop — disliked, replaced
  with a masonry layout that preserves each photo's natural shape.

## General taste signal

- Prefers effects that feel deliberate/slow over fast or flashy.
- Comfortable with fairly involved scroll-driven interactions (the
  horizontal carousel took several rounds of real engineering) as long as
  the effect itself is one she likes — willing to iterate on execution, but
  quick to revert a whole effect if the concept itself isn't landing.
- Sensitive to photos being cropped/distorted from their original shape.
