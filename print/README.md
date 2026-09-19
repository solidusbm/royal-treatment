# Print pieces for Royal Treatment

Generated 2026-09-19 by the printables skill from `~/projects/royal-treatment` (repo) and
https://royaltreatmentclean.net/ (live site, byte-identical to the repo's `index.html` on that date).
Facts: `brand-facts.yaml` (reviewed 2026-09-19). Regenerate by asking for it; hand edits to a piece survive re-runs.

Every piece is one standalone HTML file with its brand values hardcoded. It links only the logo
artwork and photos in `../assets/img/` by relative path, so keep this folder inside the repo.

## Pieces

- `business-card.html`: 3.5 × 2 in, 2 pages. Destination Save as PDF, Margins at Default; the Paper size picker disappears and the PDF is 3.5 × 2 in. One face per page. Front is dark with the gold wordmark; back lists the three services with the QR.
- `letter-flyer.html`: 8.5 × 11 in, 1 page. Destination Save as PDF, Margins at Default. Dark header band, tagline, the three services as photo columns, Janet Tyra's Google review on a dark block, the trust row, contact and QR (filled out 2026-09-19 after the first version read bare).
- `half-sheet-two-up.html`: 8.5 × 11 in, 1 page. Destination Save as PDF, Margins at Default. Cut along the dashed line for two 8.5 × 5.5 in flyers. Van photo, "Free estimates" badge, tagline, services, QR.
- `tri-fold.html`: 11 × 8.5 in, 2 pages. Destination Save as PDF, Margins at Default; the PDF is 11 × 8.5 in landscape. Print double-sided, flip on the short edge, fold the inner flap in first. Outside: two Google reviews with the QR on the flap, back cover with the three steps, a photo and contact, van cover. Inside: why us with the trust row, services, and the three "Service may include" lists with the rain callout (filled out 2026-09-19 after the first version read bare).
- `social-square.html`: 1080 × 1080 px, not a print piece. Capture as an image at 100% zoom. Dark square with gold wordmark, tagline, services, phone and site.

Skipped (already present): none.

## Facts to look at

- inferred: `colors.roles.accent-ink` → `#544000`, the stylesheet's contact-eyebrow colour, 9.38:1 on cream. The brand gold `#f4c430` is 1.55:1 on cream and fails even the 3:1 large-text bar, so no piece sets gold type on a cream face; gold appears only on dark faces (11.12:1) and as bullet squares.
- inferred: `colors.roles.paper` → cream `#fbf8f0`. The site body is plain white; cream is the named light surface (hero, reviews).
- logo: pieces use the script wordmark (`royal-treatment-script.png`, gold on transparent) masked to a role colour rather than `header-logo.png`, because the full lockup carries the phone number inside the artwork and every piece already prints the phone. The descriptor "Carpet, Upholstery, & Tile Cleaning" is set as text beside it. Swap `royal-treatment-script.png` for `header-logo.png` in a piece's `mask` rule to use the full lockup.
- `business.licence`: none exists (confirmed 2026-09-19); no piece carries a licence line.
- missing, no slot in any piece: `business.legal_name`, `contact.socials`, `logo.mark`.
- decided at review 2026-09-19: no street address or hours (service-area business), so "Serving Bandera, TX and the Texas Hill Country" prints instead; no offers; no prices.
- photos: none reaches 300 dpi at full Letter width, so the flyer uses three service photos at 2.4 in each (about 500 dpi), the brochure cover uses the van at 3 in (about 520 dpi) and the two-up uses the van at 3.1 in.
- copy choices, all verbatim from the site: the flyer, two-up and social lede is the hero paragraph rather than the about line; the tri-fold panel labels are the site's own section eyebrows ("Why Royal Treatment", "Our services", "Simple from start to finish", "Ready for a fresh start?", "Google reviews"); the two-up's service line joins the three service names with middle dots. "What to expect" on the brochure's last inside panel is a template label, not site copy.
- the repo `README.md` is stale: it describes a `v1/` folder and no custom domain, while the checked-in site is at the repo root with a `CNAME`.

## Invented copy

- none.

## Verification

- QR `qr/royaltreatmentclean-net.svg` → https://royaltreatmentclean.net/ PASS (inlined in the four print pieces)
- QR `qr/google-reviews.svg` → https://www.google.com/maps?cid=1706301989705631566 PASS (encoded and verified for a review-ask piece; not placed yet)
- contrast, normal face: ink/paper 17.21:1, accent-ink/paper 9.38:1, muted/paper 5.25:1; reverse face: paper/ink 17.21:1, accent/ink 11.12:1, muted/ink 7.77:1
- placeholder inventory: none
- sheet lint: PASS, 5 files (fixed sheet size equals `@page`, hint states the size)
- browser render: business card saved as PDF at 3.5 × 2 in from Chrome via the code-server proxy on 2026-09-19, once Destination was Save as PDF. The other four pieces are not yet eyeballed; no Chrome starts on the VPS box (sysroot missing libglib and libGL).

## Next

What the skill did: generated and verified the five files, started a static server on port 6090 of the VPS box that serves this repo, and checked it answers locally. What it could not do: render a piece, because no Chrome on the VPS box currently starts (missing libglib and libGL). What you do: open each piece in your own browser and save it as a PDF.

1. In the browser you use for code.sastx.net, open `https://code.sastx.net/proxy/6090/print/business-card.html`. You should see a grey page with a dark card front and a cream card back stacked, a hint line above them and two buttons, "Save as PDF" and "Save as PDF (black & white)". The `/proxy/<port>/` path is the same pattern the VNC and inbox pages use; the port 6090 server was not verified through the proxy from here, so if the page does not load, say what you see.
2. Click "Save as PDF". You should see Chrome's print dialog. Set **Destination** to "Save as PDF" (2026-09-19: it opened on a printer, which is why the first try said Letter). Once it is Save as PDF the Paper size picker disappears from the dialog and the preview shows a small landscape card, not a Letter page.
3. Leave Margins at Default and click Save. You should get a two-page PDF, card front then card back, 3.5 × 2 in in the file's properties.
4. Repeat steps 1 to 3 with `letter-flyer.html` and `half-sheet-two-up.html` (8.5 × 11 in) and `tri-fold.html` (11 × 8.5 in landscape, two pages).
5. For `social-square.html`, take a screenshot at 100% zoom cropped to the 1080 × 1080 square instead of printing.

Check: open one saved PDF and confirm the page size in its properties matches the size in the hint line. A pass is the exact trim size with no white border.

| Symptom | Meaning | Do |
|---|---|---|
| The proxy URL shows a code-server login or Cloudflare Access page | You are not signed in to code.sastx.net | Sign in, then reload |
| "not found" or a connection error on the proxy URL | The port 6090 server has stopped (it is not a service and dies with the box) | Ask for it to be restarted, or open the file from a local clone of the repo |
| A Paper size picker is visible and reads Letter | Destination is a printer; Chrome only applies the CSS size to Save as PDF (Safari never does) | Change Destination to Save as PDF. In Safari set Paper Size by hand to the size in the hint |
| A photo looks soft in the PDF | The source image is below 300 dpi at that slot size | Supply a larger original under `assets/img/` |

What happens next: report anything that looks wrong on screen and the piece gets fixed; the facts file is the place to correct a wrong value.
