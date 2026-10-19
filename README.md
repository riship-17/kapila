# Water filtration catalogue site

Next.js 15 (App Router), TypeScript strict, Tailwind CSS v4, `motion`, Lenis. Every page is statically generated except `/api/enquiry`.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm typecheck
pnpm lint
```

## 1. Company details

`content/site.ts` holds the company details. The name, contact person, phone numbers and email are filled in from the business card. Values still marked `TODO`:

- **`content/site.ts`**: street address, city, state, postcode, opening hours, and the map coordinates (`map.latitude` / `map.longitude`). Until the coordinates are set, the Contact page shows a grey block where the map will go.
- **`content/pages.ts`**: the manufacturing and About copy. These paragraphs were drafted from the product specifications. Check that they describe your factory accurately before launch.

The company name feeds the header, footer, page titles, OpenGraph cards and the Organization JSON-LD. Nothing else needs editing.

## 2. Add or edit a product

`content/products.ts` is the single source for product pages, the product index, the Industries page, the sitemap, the contact form's product list and the Product JSON-LD.

To add a product, append an object to `products`:

| Field | Notes |
| --- | --- |
| `slug` | URL segment: `/products/{slug}` |
| `index` | Two-digit display number, e.g. `"07"`. The array order sets the index order and the "Next" links. |
| `name`, `category` | `category` is the Schema.org Product category |
| `summary` | 1–3 paragraphs for the Construction section |
| `highlights` | Exactly three short uppercase lines for the index row |
| `images` | At least one; the first is the hero and the index preview |
| `specTables` | Two-column tables (`label` / `value`) |
| `comparisonTables` | Optional multi-column tables; the first header is the row-label column |
| `note` | Optional extra section (used for RO pre-treatment); `body` mixes text and `{ text, href }` links |
| `ordering` | Optional example part number; `pattern` is split on `-` and matched to `segments` |
| `applications` | Plain list |
| `downloads` | Datasheets (see below) |

To show a product in the Industries page, add its slug to the relevant `industries` entries in `content/site.ts`.

Write spec labels in sentence case ("Max operating temperature"). The tables set them in uppercase mono through CSS, so screen readers and search engines get natural text.

### Downloads and certificates

Put PDFs in `/public` (e.g. `/public/downloads/pp-spun-datasheet.pdf`) and list them:

```ts
downloads: [{ name: "PP spun cartridge datasheet", href: "/downloads/pp-spun-datasheet.pdf", format: "PDF", size: "240 KB" }]
```

A file is only listed once it exists in `/public`, and the Downloads section is hidden while no listed file exists. Certificates on the About page work the same way, through `about.certifications` in `content/pages.ts`.

## 3. Photography

The site currently uses **licensed stand-in photographs from Wikimedia Commons**. They show other companies' plant and generic equipment, not your products. Replace them with your own photography before launch.

| Slot | File |
| --- | --- |
| Home opening | `public/images/site/opening-01.jpg` |
| Home manufacturing (tall, 3:4) | `public/images/site/manufacturing-01.jpg` |
| About, full-width | `public/images/site/production-01.jpg` |
| Product hero and index preview | `public/images/products/{slug}-01.jpg` |

To replace a photograph:

1. Overwrite the file at the same path. `next/image` serves AVIF and WebP at the right size for each breakpoint. Use at least 2560px wide for full-bleed images and at least 1200px for the others.
2. Update its `alt` text in `content/products.ts` or `content/pages.ts` so it describes the new picture.
3. Delete its entry from `content/credits.ts`. Once that list is empty, the footer's "Photo credits" link and the `/credits` page disappear.

While the stand-ins are in use, keep `/credits`. The CC BY and CC BY-SA licences require the author, licence and source to be credited.

If a file is deleted, its slot shows a neutral `#F0EEE9` block captioned with the expected path.

## 4. Enquiry email (Resend)

The form posts to `/api/enquiry`. The route validates everything again on the server with the same zod schema the form uses (`lib/enquiry.ts`), then sends via [Resend](https://resend.com). Attachments up to 5 MB (PDF, JPG, PNG, Excel) are forwarded. Each email's reply-to is set to the enquirer.

Set three environment variables (copy `.env.example` to `.env.local` for local development):

```
RESEND_API_KEY=re_...
ENQUIRY_TO=sales@yourcompany.com        # where enquiries arrive
ENQUIRY_FROM=website@yourcompany.com    # must be on a domain verified in Resend
```

If any of them is missing, the form stays usable but tells the visitor to email `site.email` directly, and the server logs which variable is absent. Nothing crashes.

## 5. Deploy to Vercel

1. Push the repository to GitHub and import it in Vercel. The framework (Next.js) and `pnpm` are detected automatically.
2. In **Project → Settings → Environment Variables**, add `RESEND_API_KEY`, `ENQUIRY_TO`, `ENQUIRY_FROM`, and `NEXT_PUBLIC_SITE_URL` (your production URL, e.g. `https://www.yourcompany.com`, with no trailing slash). The site URL drives canonical links, the sitemap, robots.txt and the JSON-LD.
3. Deploy, then add your domain under **Settings → Domains**.

Or from the CLI: `vercel` for a preview and `vercel --prod` for production. `vercel env add` sets the variables.

## Notes

- **Design tokens** are in `app/globals.css`. Tailwind's default palette, type scale, radii and shadows are removed, so only the site's tokens can be used.
- **`--ink-secondary`** is `#73716A` rather than `#8A8880`. The original value is 3.4:1 against the paper colour and fails WCAG AA for the 11px labels.
- **Motion** has five behaviours. Three of them (scroll reveal, rule draw, index hover) and Lenis check reduced motion through `useMotionPreference()` in `lib/motion.ts`. The display-heading rise and the page fade are CSS animations, so first paint never waits on JavaScript. Their reduced-motion rule is at the bottom of `globals.css`.
- **The map** is built from plain OpenStreetMap tiles in greyscale, with no map library. OSM's [tile usage policy](https://operations.osmfoundation.org/policies/tiles/) suits a low-traffic catalogue. For heavy traffic, point the tile URL in `components/sections/ContactMap.tsx` at a commercial tile provider.
