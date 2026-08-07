# LOCX Games Website

A responsive static website for **locxgames.link**.

## Included
- `index.html`
- `styles.css`
- `script.js`

## Main sections
- Home / hero
- Games
- Projects
- Upcoming / roadmap
- Devlog
- About
- Contact

## Theme
- Black / charcoal base
- Deep red LOCX accents
- Silver typography and borders
- Responsive desktop / tablet / phone layout

## Publish

### Cloudflare Pages
1. Create a new Cloudflare Pages project.
2. Upload these files or connect a Git repository.
3. Build command: none.
4. Output directory: `/` (site root).
5. Add the custom domain `locxgames.link`.
6. In DNS, follow Cloudflare's Pages domain instructions.

### GitHub Pages
1. Put the files in a repository.
2. Open Settings → Pages.
3. Deploy from the main branch/root.
4. Add `locxgames.link` as the custom domain.
5. Update DNS to the records GitHub provides.

### Traditional hosting / cPanel
Upload `index.html`, `styles.css`, and `script.js` into the site's public web root (commonly `public_html`).

## Before going live
- Replace `contact@locxgames.link` if that inbox does not exist.
- Add your real Discord/social/store/playtest links.
- Replace generated CSS title art with screenshots/key art when available.
- Update game descriptions/statuses as releases progress.

## Editing content
Most text and project names are directly in `index.html`.
Modal descriptions are in the `content` object inside `script.js`.
Colors are CSS variables near the top of `styles.css`.
