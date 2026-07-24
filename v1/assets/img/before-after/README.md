# Before & After photos

Upload photos here to add them to the "Before & After" section on the site.

## Naming

Each pair needs matching numbers, e.g.:

```
before1.jpg   after1.jpg
before2.jpg   after2.jpg
before3.png   after3.webp
```

- Numbers must match between a before/after pair. File extensions can differ (`.jpg`, `.jpeg`, `.png`, `.webp` are all fine).
- A pair only shows up on the site once **both** the `before` and `after` file for that number exist.
- The section on the site stays hidden entirely until at least one complete pair has been uploaded.

## How it works

Pushing images here to GitHub triggers a GitHub Action that scans this folder and rebuilds `assets/data/before-after.json` automatically — no other steps needed. The website reads that file and updates itself on the next page load.

## Taking the photos

- **Same spot, same angle.** Stand in the same place for the before and after shot so the comparison is obvious — don't recompose the shot.
- **Same lighting.** Take both photos in the same light (ideally natural daylight, no flash) so the "after" doesn't just look brighter/cleaner because the light changed.
- **Fill the frame with the surface.** Get close enough that the carpet/upholstery/tile is the main subject — avoid wide shots where the cleaned area is small and hard to see.
- **Landscape orientation**, roughly 4:3 (matches how the cards display — portrait or oddly-cropped photos will get cropped by the layout).
- **No people, faces, or license plates** in the shot — just the surface being cleaned.
- **Keep the pair visually honest.** Before = genuinely before cleaning (not pre-tidied), after = right after the job's done. Don't stage either shot.
- **Upload both at the same time** when possible, so a half-finished pair doesn't sit invisible on the site waiting on its match.
