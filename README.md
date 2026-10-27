# Kruti Enterprise website

Next.js 15 (App Router), TypeScript, Tailwind CSS v4. Every page is statically generated except `/api/enquiry`.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build
pnpm typecheck && pnpm lint
```

Pages: Home (`/`), Products (`/products`), one page per product (`/products/{slug}`), Contact (`/contact`).

## Before launch

1. **Contact details** — `content/site.ts`: name, phones and email are set from the business card; `address` and `hours` are still empty (and hidden until filled in).
2. **Product details** — `content/products.ts`. The detail rows were written from the product photographs only. Check each one against your real specifications.
3. **About copy** — `home.about` in `content/site.ts`.

## Edit content

- `content/site.ts` — company name, home page text, the recent-work projects, the contact page text.
- `content/products.ts` — the single source for the product grid, product pages, the footer, the enquiry form's product list, the sitemap and the Product JSON-LD.

To add a product, append an object to `products`. Images go in `public/images/products/` and take `[width, height]` in pixels. The first image is the grid photo; `focus` (a CSS `object-position`) moves the square crop for wide photographs.

## Photographs and logo

- `Images/studio/` holds the studio photographs (RO plant, spun filters with antiscalant, warehouse, filter housing). `public/images` uses them directly or as crops.
- `Images/` holds the original WhatsApp photos. Granular carbon, carbon powder, sand and gravel, and the container RO plant still use crops of these.
- `public/logo.png` is the logo (header and footer). `app/icon.png` is the favicon, cut from the logo's K.

To replace a photograph, add the file under a **new name** in `public/images/products/` and update its path and `[width, height]` in `content/products.ts`. A new name avoids Next.js serving its cached copy of the old file. `focus` (a CSS `object-position`) moves the square crop used in the product grid.

## Enquiry email (Resend)

The form posts to `/api/enquiry`, which validates with the same zod schema as the form (`lib/enquiry.ts`) and sends through [Resend](https://resend.com). Attachments up to 5 MB are forwarded. Product pages link to `/contact?product={slug}`, which preselects that product.

```
RESEND_API_KEY=re_...
ENQUIRY_TO=sales@yourcompany.com
ENQUIRY_FROM=website@yourcompany.com    # must be on a domain verified in Resend
NEXT_PUBLIC_SITE_URL=https://www.yourcompany.com
```

Without these the form still renders but tells the visitor it can't send.

## Deploy to Vercel

Push to GitHub and import in Vercel, add the environment variables above under Project → Settings → Environment Variables, then deploy. From the CLI: `vercel` for a preview, `vercel --prod` for production.
