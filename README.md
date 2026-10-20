# Your minimalist art portfolio

A minimal, artwork-first website inspired by the *layout and restraint* of Rinko Kawauchi's Works index (https://rinkokawauchi.com/en/works/). It does not contain any of that artist's photographs or copy their branding. The demo illustrations are placeholders for your own art.

## What changed from the earlier draft

- No hero section or oversized headline.
- Pale gray-white background, tiny type, understated header.
- Just art, title and year. Mobile gallery is a single column.
- Minimal "Menu" with Works, About and Contact.
- Clicking an image opens a simple project page.
- Lightweight static HTML/CSS/JS; no build step or paid services.

## Add your art

1. Save your photos as JPEG or WebP inside the `assets` folder.
2. Open `content.js` and update the `works` entries with your file names, title, year, and a short description for accessibility (alt).
3. To show more than one image inside a project, add `images: ['assets/one.jpg', 'assets/two.jpg']` to that entry.
4. Add or remove works by adding or deleting entries in the array. Keep slugs unique (lowercase words with dashes).
5. Replace `Your Name` in `index.html` and `script.js` with your artist name. Update About and Contact in `index.html`.
6. Change the page background in `styles.css` by editing `--bg`.

## Preview locally

Double-click `index.html` to open in a browser. No installation required.

## Publish on Vercel

1. Create a new GitHub repository; upload `index.html`, `styles.css`, `content.js`, `script.js`, and the `assets` folder to the **root** of the repository.
2. Go to https://vercel.com/new and select **Import Git Repository**.
3. Choose your repository and use **Other** as the framework preset. Leave the build command blank. Output Directory should remain default (`.`) for this static site.
4. Click Deploy. Vercel will give you a `*.vercel.app` URL.
5. Edit your GitHub files whenever you want to update your site; Vercel redeploys automatically.

Vercel Hobby is intended for noncommercial personal projects; check your plan if you plan to sell artwork directly on the site.
