# Royal Treatment — Website

A static site for Royal Treatment (cleaning company). No build step — just
HTML/CSS/JS. This is a rebuild of the original chatgpt.site page, with a
real contact form, real Google reviews, and an auto-populating before/after
gallery.

## Structure

- `index.html` / `css/hub.css` — project demo hub. Links to the original
  reference site and each working build.
- `v1/` — the actual site build:
  - `index.html` — homepage (services, why-us, reviews, before/after, contact form)
  - `css/style.css` — all styling
  - `js/main.js` — mobile nav, contact form submit, before/after gallery loader
  - `assets/img/` — logo, hero, and service photos
  - `assets/data/before-after.json` — before/after image pairs, read by the
    gallery loader at runtime
  - `assets/img/before-after/README.md` — how to add new before/after pairs
- `.github/workflows/before-after-manifest.yml` +
  `.github/scripts/build-before-after-manifest.js` — regenerates
  `before-after.json` automatically when photos are added to
  `assets/img/before-after/`
- `styles/` — empty comparison hub for future visual/layout variants,
  separate from `v1`'s feature iterations.

This project isn't hosted anywhere live yet (no GitHub Pages / custom domain
set up) — it's still in the demo/review stage.

## Connecting the contact form (Formspree)

The contact form on `v1/index.html` (`#estimateForm`) posts to
[Formspree](https://formspree.io), a free service that emails form
submissions to you — no server needed. Right now it points at a placeholder
and will tell visitors to call/email instead until you connect it:

1. Go to formspree.io and create a free account (50 submissions/month free,
   shared across all forms on the account — the same account can also power
   the East End Pizza reservation form if you'd rather manage one account
   than two).
2. Create a new form, point it at the email that should receive estimate
   requests (e.g. royaltreatmentclean@outlook.com).
3. Copy the form endpoint it gives you (looks like
   `https://formspree.io/f/abcdwxyz`).
4. In `v1/index.html`, find this line:
   ```html
   <form id="estimateForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   and replace `YOUR_FORM_ID` with your real endpoint.
5. Deploy, then submit a test request to confirm the email arrives.

Send me the real endpoint whenever you have it and I'll wire it in — I
can't create the Formspree account myself since that requires signing up
for a third-party service on your behalf.

## Style/layout variants

`styles/index.html` is a comparison hub for alternate designs of the `v1`
site — same pattern used on the East End Pizza and Wagon Wheel projects:
each variant lives in its own `styles/vN/` folder (`index.html` +
`css/style.css`), listed as a card on the hub linking to it. Alternate
takes on a variant's theme go in `styles/vNb/`, `styles/vNc/`, etc., nested
under that variant's card. All variants should share the same content —
only layout, typography, and styling differ.

No variants exist yet — this is just the empty hub shell.

## Deploying

Not deployed yet. When ready, this can go on GitHub Pages (push and enable
Pages in repo settings) or Netlify (drag-and-drop at app.netlify.com/drop).
Since `v1/` is a subfolder, not the repo root, GitHub Pages would serve the
demo hub at the domain root and the actual site at `/v1/` unless the
structure is flattened first (move `v1/`'s contents to the repo root) —
same tradeoff as the East End Pizza project.
