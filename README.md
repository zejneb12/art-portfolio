# Zejneb Demaj — Photography & Artwork

A minimal, image-first portfolio site: a fixed left sidebar with your name and navigation, and photographs stacked full width on the right. It's plain HTML, CSS and JavaScript in a single file, with no build step, dependencies or backend.

## Pages

| Route | Page |
| --- | --- |
| `#works` | Photography (home), opens on Iridescence |
| `#works/iridescence`, `#works/portland`, `#works/bosnia` | Photography, one page per series, chosen from the list beside the main nav |
| `#artwork` | Artwork |
| `#about`, `#contact` | Text pages |

## Project structure

```
index.html                  Markup, styles and script
favicon.svg                 Browser tab icon
assets/
  Portland-2026/            Photography from Portland, 2026
  Bosnia-2026/              Photography from Bosnia, 2026
  Iridescence/              Photography for the Iridescence series
  artwork/                  Paintings and other artwork
  fonts/                    EB Garamond (SIL Open Font License, see OFL.txt)
```

## Run locally

Open `index.html` in a browser. No installation is required.

## Add a photograph

1. Save the image (JPEG or WebP) in `assets/Portland-2026/`, or create a new folder in `assets/` for a new series, for example `assets/Oregon-Coast-2026/`.
2. In `index.html`, add a `<figure data-series="portland">` (or `bosnia`, `iridescence`) to the gallery, copying an existing one and changing the `src` and `alt`:

   ```html
   <figure data-series="portland"><img src="assets/Portland-2026/photo-7.jpg" alt="Describe the photo" loading="lazy" decoding="async"></figure>
   ```

   For a new series, also add a link to the `#series-nav` list, and add its name to `seriesList` and `seriesTitle` in the `<script>`.

Write descriptive `alt` text for every image so the site works for screen reader users.

## Customize

- **Name and copy:** edit the sidebar name, About and Contact sections, the copyright line, and the `<title>` and `<meta name="description">` in `index.html`.
- **Colors and type:** edit the CSS variables (`--bg`, `--ink`, `--muted`, `--serif`) in the `<style>` block.

## Deploy

The site is static, so any static host works.

- **GitHub Pages:** push the repository, then enable Pages in **Settings → Pages** for the main branch root.
- **Vercel or Netlify:** import the repository, choose **Other** as the framework preset, and leave the build command empty.

## Inspiration

The quiet, image-first layout is inspired by the restraint of [Rinko Kawauchi's website](https://rinkokawauchi.com). No images or text from that site are used here.

## Image rights

All photographs and artwork in this repository are © Zejneb Demaj. All rights reserved. Please don't copy, reuse or redistribute them without permission.
