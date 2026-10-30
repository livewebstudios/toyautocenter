# Toy Auto Center: toyautocenter.net

Astro 7 static site with React islands, built by Live Web Studios (October 2026). Replaces the WordPress/Divi site.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro build + scripts/relativize.mjs (makes every internal path relative)
npm run preview    # serves dist/ on http://localhost:4321
```

Node 24 (see `engines`). `npm run build` must be used for deploys: the relativize step is part of it.

## Environment variables

Copy `.env.example` to `.env` locally, and set the same two in Netlify (Site settings > Environment variables):

| Variable | What it does |
|---|---|
| `PUBLIC_FORMSPREE_ID` | The ID after `/f/` in the Formspree endpoint. Without it the booking form posts to a placeholder. |
| `PUBLIC_GA4_ID` | GA4 measurement ID (`G-...`). Empty = no gtag snippet; the `<!-- GA4 -->` placeholder comment is always present. |

## Where things live

| What | File |
|---|---|
| Name, address, phones, hours, links, ratings, the oil change deal | `src/data/site.ts` (single source of truth) |
| The 13 services (number, group, symptom line, photo, related) | `src/data/services.ts` |
| Copy for each service page | `src/data/services/<slug>.ts` |
| Town pages | `src/data/towns.ts` + `src/data/towns/<slug>.ts` |
| Home, hubs, deals, contact, reviews, FAQ, 404 copy | `src/data/pages/*.ts` |
| Blog posts (Decap writes here) | `src/data/posts.json` |
| Colors, type, spacing, motion timing | `src/styles/tokens.css` |
| Photos | `src/assets/images/` (processed by `scripts/fetch-assets.mjs`) |

## Update the monthly deal

1. Edit `deal` in `src/data/site.ts` (price, synthetic price, includes, note). The home deal band, `/deals/`, the coupon and the schema all read from it.
2. Copy that talks about the deal: `src/data/pages/misc.ts` (`deals`) and `src/data/services/oil-change-maintenance.ts`.
3. `validThrough` in the Offer schema and the "Valid through" line on the coupon are set automatically to the last day of the month the site was built. Rebuild (any commit) at the start of each month so the date rolls forward. A Netlify scheduled build hook on the 1st does this with no edits.

## Add real reviews

Never invent or paraphrase reviews. Export real ones as `src/data/reviews.json`:

```json
[
  { "author": "First L.", "rating": 5, "date": "2026-09-14", "text": "Exact review text.", "source": "Google", "url": "https://..." }
]
```

Rebuild. The home page and `/reviews/` switch on the reviews rail and `Review` schema automatically. To add an `AggregateRating` to the business schema, use the object form `{ "aggregate": { "rating": "4.9", "count": 52, "source": "Google" } }` (only with a real, linkable source). The Carfax / Yelp / Facebook rating strip is in `site.ratings`; update the numbers and `ratingsAsOf` when they change.

## Add a blog post (Decap CMS)

1. Go to `https://toyautocenter.net/admin/` and log in (Netlify Identity invite).
2. Blog > Blog posts > add a post at the top of the list.
3. Fill Title, URL slug (lowercase-with-hyphens), Publish date, Category, Excerpt (140 to 155 characters, mention Blauvelt or Rockland County: it is also the Google description), optional Featured image + alt text, and Body.
4. Publish. Decap commits to `src/data/posts.json`, Netlify rebuilds in about a minute. The post, its category page, the RSS feed, the sitemap and its OG image all update.

Decap is pinned to **3.1.2** in `public/admin/index.html` (later versions crash on empty image fields). Keep the pin.

## Jon's deploy steps (not done by the build)

1. Create the repo `livewebstudios/toyautocenter` on GitHub. From `build/`: `git remote add origin git@github.com:livewebstudios/toyautocenter.git && git push -u origin main`.
2. Netlify: Add new site > Import from GitHub > `toyautocenter`. Build command `npm run build`, publish `dist` (both already in `netlify.toml`).
3. Netlify env vars: `PUBLIC_FORMSPREE_ID`, `PUBLIC_GA4_ID`. Trigger a redeploy.
4. Netlify Identity: enable, registration **invite only**, then Services > Git Gateway: enable. Invite yourself (and the shop if they will post).
5. Check the `.netlify.app` URL: forms, `/admin/`, redirects (`/home/contact-us/` should land on `/contact/`).
6. DNS: apex `A` record to `75.2.60.5`, `www` `CNAME` to `<site>.netlify.app`. Add the domain in Netlify and let it issue the certificate.
7. Formspree: confirm the shop's email on the form, and add `toyautocenter.net` to the allowed domains.

## Jon's launch SEO checklist (off-site, not performed)

- **Google Business Profile**: primary category "Auto repair shop"; secondary "Vehicle inspection service", "Car battery store", "Brake shop", "Auto air conditioning service", "Transmission shop". Services list mirroring the 13 service pages. Hours Mon to Fri 8 to 5 (add Saturday once confirmed). Description built around "When car trouble arrives, we hope you WIND UP with us." Real photos only (storefront, bays, sign, the team if they agree). Seed Q&A with the FAQ page. Weekly posts from the blog.
- **Bing Places**: import from GBP. **Apple Business Connect**: claim and match.
- **Citations**: Yelp, Carfax, Facebook, Nextdoor, MapQuest. Name, address and phone identical to the site: Toy Auto Center, 628 NY-303, Blauvelt, NY 10913, 845.365.3003.
- **Google Search Console**: verify by DNS (the old site's `G-KSH0KJ15GJ` meta is a GA4 ID, not a GSC token). Submit `https://toyautocenter.net/sitemap-index.xml`. Request indexing for home, `/services/nys-inspection/`, `/toyota-lexus-repair/` and the ten `/service-area/` pages.
- **Reviews**: put the Google review link in post-service texts: `https://search.google.com/local/writereview?placeid=ChIJt5cZblvpwokRucHzfCQOoqA`.

## Quality scripts

| Command | Checks |
|---|---|
| `node scripts/killlist-scan.mjs` | Banned phrases and dashes in source and built HTML |
| `node scripts/dupe-check.mjs` | No 12-word run shared between town pages or between service pages |
| `node scripts/contrast-check.mjs` | WCAG AA for every token pair and interaction state |
| `node scripts/contrast-measure.mjs` | Hero text measured against the real photo (needs preview running) |
| `node scripts/seo-check.mjs` | One H1, unique titles/descriptions, canonical, OG, JSON-LD types, sitemap coverage |
| `node scripts/layout-check.mjs` | All pages at 320 to 1440: overflow, clipping, tap targets, image dimensions, anchors under the nav |
| `node scripts/qa.mjs [screens\|axe\|interact\|motion\|reduced\|nojs]` | Screenshots, axe, keyboard/menu/tray/form, motion, reduced motion, JS off |
| `node scripts/lighthouse.mjs` | Mobile Lighthouse, median of 3 |

QA scripts expect the preview server on port 4322 (`BASE=http://localhost:4322`) and the Playwright browsers already installed on the Mac.

## Notes

- Paths: every internal link and asset in `dist/` is relative (LWS rule). Absolute URLs appear only in canonical, Open Graph, JSON-LD, sitemap, RSS and robots. `404.html` uses `<base href="/">` because Netlify serves it at any depth.
- Images: never use AI images with faces. Photos in `src/assets/images/` were generated hands-only and checked; the generated shop exterior was excluded. Replace with real shop photos when available (see OPEN_QUESTIONS.md in the project folder).
