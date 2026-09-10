# TPMG — brand landing page

Single page, no build step. Open `index.html` in a browser to preview.
Behind a password gate, same mechanism as before.

## Upload to GitHub / Vercel

Two items go in the repo root:

    index.html
    media/          (2 files: hero-loop.mp4, hero-poster.jpg)

Use **Add file → Upload files**, drag both items in together so the `media`
folder structure survives, and **Commit changes**. Vercel redeploys itself in
about thirty seconds. Hard-refresh (Cmd/Ctrl+Shift+R) to see it.

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

## What changed from the 1807 Glenoaks template

Removed entirely:
- Market analysis section (CoStar submarket data)
- Glendale city / demographics section (Esri data)
- The amenity map / "the block" section
- Parking section and the full photo gallery + lightbox
- All 1807 Glenoaks / brokerage-listing specific copy (DRE numbers, "For
  sale," asking price facts, etc.)

Added:
- **Hero**: your looped MP4 (`media/hero-loop.mp4`) plays muted/autoplay
  behind the headline, with a still frame (`media/hero-poster.jpg`) as the
  fallback if a browser blocks autoplay. Swap either file to change it —
  same filenames, same spot.
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
