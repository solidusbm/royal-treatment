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
