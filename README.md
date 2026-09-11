# TPMG — brand landing page

Single page, no build step. Open `index.html` in a browser to preview.
Behind a password gate, same mechanism as before.

## Upload to GitHub / Vercel

Two items go in the repo root:

    index.html
    media/          (3 files: crest.png, crest-small.png, burbank.geojson)

Use **Add file → Upload files**, drag both items in together so the `media`
folder structure survives, and **Commit changes**. Vercel redeploys itself in
about thirty seconds. Hard-refresh (Cmd/Ctrl+Shift+R) to see it.

If you're dragging `media` in on its own (recommended — see the note at the
bottom of this file on folder uploads), do that as a separate drop from
`index.html`, or make sure your browser supports folder drag-and-drop first.

## Domain

Point `tpmg.app` at the Vercel project (or whatever host you use) once it's
live. Nothing in the page itself is hard-coded to a domain.

## The password gate

**Code: `TPMG`** — change it on the `PASSWORD` line in the script near the
bottom of `index.html`. The gate copy, email address and phone placeholder
live near the top of the gate markup and in the Contact section.

**The gate is cosmetic, not secure**, same as before: the page is fully
downloaded before the gate appears, so anyone who views source sees
everything. A `noindex, nofollow` tag keeps search engines out. For real
protection, ask for the serverless version.

## What changed since the last version

**Hero — video replaced with an interactive map.** The looping video is gone.
The hero background is now a live Leaflet map (light "Positron" basemap from
CARTO, no API key needed) with Burbank, CA's city boundary drawn as a navy
outline with a soft baby-blue fill. The polygon coordinates come from the
Census Bureau's TIGERweb service and are simplified and embedded directly in
`index.html` (search for `BURBANK_OUTLINE`) — no separate file fetch, so it
still works if you just double-click `index.html` locally. Click the map
once to enable scroll-to-zoom (so scrolling the page doesn't fight with
zooming the map); it deactivates again when your cursor leaves the map.
`media/burbank.geojson` is included as the reference source for that outline,
in case you ever want to redraw or adjust it — the page itself doesn't load
this file.

**Large disclaimer bar.** A fixed amber notice bar now sits above everything
on the page — above the header, and above the password gate itself — reading:
*"This website is for educational purposes and is not an active LLC with no
services being offered."* It's intentionally not dismissible, and it stays
pinned while scrolling. Edit the text directly in `index.html` inside the
`disclaimer-bar` div near the top of the body.

**New headline.** Both the password gate and the hero now read *"Hands on so
owners are hands off."* The small tagline under the logo in the header still
reads "Trusted stewardship, every property" (the official tagline from the
brand guidelines) — let me know if you'd rather that changed too.

**Crest added.** The lion-and-shield crest from the brand guidelines doc now
appears next to the wordmark in the header and centered above the headline
on the password gate (`media/crest.png` and `media/crest-small.png`).

**Header text recolored.** Since the hero background is now a light map
instead of a dark photo, the header nav text switched from white to dark ink
so it stays legible against the light basemap at the top of the page.

## A note on uploading folders to GitHub

If you drag a folder into GitHub's "Upload files" box and it "opens up" —
i.e. the files inside land loose in the repo instead of staying inside a
`media/` folder — that means your browser flattened the folder structure on
drop (this varies by browser, and can also happen if you drop the folder
alongside other loose files in the same drag). Two ways around it:

- Drag **only** the `media` folder by itself, as its own drag-and-drop,
  separate from `index.html` and `README.md`.
- If it still flattens, use [GitHub Desktop](https://desktop.github.com/) or
  the `git` command line instead of the web uploader — both always preserve
  folder structure correctly.



Removed entirely:
- Market analysis section (CoStar submarket data)
- Glendale city / demographics section (Esri data)
- The amenity map / "the block" section
- Parking section and the full photo gallery + lightbox
- All 1807 Glenoaks / brokerage-listing specific copy (DRE numbers, "For
  sale," asking price facts, etc.)

Added (from the original 1807 Glenoaks template):
- **Mission statement** section near the top: five sentences, editable in
  place (search for "Why TPMG exists").
- **By the numbers** band: two large placeholder stats — *Units under
  management* and *Total assets under management*. Both currently read
  `[ Add unit count ]` / `[ Add AUM figure ]` — replace the text inside those
  two `<dd class="tbd">` tags in the "BY THE NUMBERS" section with your real
  figures (and drop the `tbd` class once they're real numbers, if you want
  them in the accent color instead of dimmed).
- **Fee schedule** section: management fee table, other recurring fees,
  per-event fees, the onboarding fee scale (1st–6th+ property), and no-charge
  services — all pulled from the TPMG fee schedule document.
- Contact form fields reworded for a property owner inquiry (was a
  commercial-buyer inquiry form).

## A flag on the fee schedule

The source fee schedule document is marked **"Internal working document —
not for owner distribution until legal review is complete,"** and separately
flags the tenant late fee (1% per day) as a term a CA attorney should review
before it's relied on. I left both the late fee and the referral program out
of/adjusted on the public page:

- The **late fee row is included** (it's a real recurring fee), but the
  attorney-review flag from the source doc is not reproduced verbatim on the
  public site — you may want your attorney to sign off on that rate before
  this goes live either way.
- The **owner referral program** (unit banking, cash-out, discount caps) was
  left off this page entirely — it's a more complex internal mechanism, not
  obviously something you want prospects reverse-engineering `tpmg.app` to
  understand. It can be added as its own section, or gated behind a client
  portal, whenever you're ready.

Recommend a final legal read before this page goes public, same as the
launch plan already calls for on the PMA and fee structure.

## Colors, type

Unchanged design system: matte navy (#2B3A55) and baby blue (#B7CEE0)
accents against the same dark/paper palette, Bricolage Grotesque for
headings, Instrument Sans for body, IBM Plex Mono for labels — pulled from
the TPMG brand guidelines doc.
