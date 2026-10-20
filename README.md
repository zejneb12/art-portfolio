# Zejneb Demaj — Photography & Artwork

A minimal, image-first portfolio site: a quiet gallery of photography and artwork with a simple project view for each piece. It's plain HTML, CSS and JavaScript in a single file, with no build step, dependencies or backend.

## Pages

| Route | Page |
| --- | --- |
| `#works` | Photography gallery (home) |
| `#artwork` | Artwork gallery |
| `#work/photo-N` | Single photograph, with a "Next work" link |
| `#piece/untamed-spring` | Single artwork |
| `#about`, `#contact` | Text pages |

## Project structure

```
index.html                  Markup, styles and script
favicon.svg                 Browser tab icon
assets/
  Portland-2026/            Photography from Portland, 2026
  Bosnia-2026/              Photography from Bosnia, 2026
  artwork/                  Paintings and other artwork
```

## Run locally

Open `index.html` in a browser. No installation is required.

## Add a photograph

1. Save the image (JPEG or WebP) in `assets/Portland-2026/`, or create a new folder in `assets/` for a new series, for example `assets/Oregon-Coast-2026/`.
2. In `index.html`, add a `<figure>` to the gallery, copying an existing one and changing the `href`, `aria-label`, `src` and `alt`:

   ```html
   <figure><a href="#work/photo-7" aria-label="View Your title"><img src="assets/Portland-2026/photo-7.jpg" alt="Describe the photo" loading="lazy"></a>
   <figcaption><span class="caption-title">Your title</span><span class="caption-subtitle">Portland, 2026</span></figcaption></figure>
   ```

3. In the `photos` array in the `<script>` at the bottom of `index.html`, add a matching entry. The `slug` must match the `href`, and `index` is the figure's position in the gallery, counting from 0:

   ```js
   {slug:'photo-7', title:'Your title', subtitle:'Portland, 2026', alt:'Describe the photo', index:6}
   ```

Write descriptive `alt` text for every image so the site works for screen reader users.

## Customize

- **Name and copy:** edit the header, About and Contact sections, the footer, and the `<title>` and `<meta name="description">` in `index.html`.
- **Colors and type:** edit the CSS variables (`--bg`, `--ink`, `--muted`) in the `<style>` block.

## Deploy

The site is static, so any static host works.

- **GitHub Pages:** push the repository, then enable Pages in **Settings → Pages** for the main branch root.
- **Vercel or Netlify:** import the repository, choose **Other** as the framework preset, and leave the build command empty.

## Inspiration

The quiet, image-first layout is inspired by the restraint of [Rinko Kawauchi's website](https://rinkokawauchi.com). No images or text from that site are used here.

## Image rights

All photographs and artwork in this repository are © Zejneb Demaj. All rights reserved. Please don't copy, reuse or redistribute them without permission.
