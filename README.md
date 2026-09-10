# TPMG website

Static 3-page site (Home, About, Contact) for TPMG, built to brand: navy
`#2B3A55` / baby blue `#B7CEE0` / white, Times New Roman display headlines,
Outfit for the wordmark, Inter for body copy. Plain HTML/CSS/JS — no build
step, no framework.

## Before you launch

- **Replace placeholder contact info**: phone number, email, office address,
  and DRE license number appear in `index.html`, `about.html`, `contact.html`,
  and the shared footer in each file.
- **Wire up the contact form**: `contact.html` currently posts nowhere —
  `js/main.js` just shows a confirmation message so the page is demoable.
  Easiest real options on Vercel:
  - [Formspree](https://formspree.io) — change the `<form>` tag's `action` to
    your Formspree endpoint and remove the `preventDefault()` block in
    `js/main.js`.
  - A Vercel serverless function (`/api/contact.js`) that emails you or writes
    to a database — a bit more setup, full control.
- **Pricing is intentionally omitted** from the site. Your fee schedule doc is
  marked internal / pending legal review, so the site points people to
  "contact us" instead of publishing rates. Add a pricing page once that
  review is done, if you want rates public.
- Swap `assets/crest.svg` for your actual AI-generated crest artwork whenever
  it's ready — the current file is a simple placeholder built from the brand
  guideline description (shield, columns, navy/baby blue).

## Run locally

No build step needed. Either open `index.html` directly in a browser, or serve
it locally so relative paths behave exactly like production:

```bash
npx serve .
```

## Deploy

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial TPMG site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### Launch on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Other** (it's static — no build command, no output
   directory needed).
3. Click **Deploy**. Vercel will serve the files as-is.

Any push to `main` will auto-redeploy.

## File structure

```
tpmg-site/
├── index.html
├── about.html
├── contact.html
├── css/styles.css
├── js/main.js
├── assets/crest.svg
└── README.md
```
