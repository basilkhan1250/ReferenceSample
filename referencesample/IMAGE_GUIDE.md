# Where to put your images

By default, **`src/config/site.js`** points at the same image URLs used on [annamazzola.com](https://annamazzola.com/) (loaded from their server). To use **your** files instead, put them under **`public/`** and change those strings to paths like **`/images/your-file.jpg`**.

Anything in **`public/`** is served from the site root, e.g. `public/images/author.jpg` → **`/images/author.jpg`**.

---

## One file controls names, copy, and image paths

Open **`src/config/site.js`**:

| What to change | Where in `site.js` |
|----------------|-------------------|
| Author name (footer, metadata, “Also by …”) | `authorName`, `siteTitle` |
| **Header:** text instead of the reference logo | Set `images.headerLogo` to `""` (empty) — the navbar shows `authorName` in Playfair. |
| **Header:** your logo | `images.headerLogo` — e.g. `/images/my-logo-white.png` |
| Small illustration between homepage promos | `images.homeDividerGraphic` — or `""` to hide |
| Author photo (About, Readers’ Club strip) | `images.authorPortrait` |
| Anna Sharpe hero (both promos) | `images.heroAnnaSharpe` |
| Italy / Book of Secrets heroes | `images.heroItalyNovel` |
| Each book cover | each book’s `coverSrc` in the `books` array |

---

## Using images on your own domain or another host

`next.config.mjs` allows **`https://annamazzola.com/wp-content/**`** for the default clone. If you switch to **another HTTPS host**, add a matching entry under **`images.remotePatterns`** (same file as above) so `next/image` can load them.

Local files under **`public/`** need **no** extra config.

---

## Suggested `public/` layout (when you replace remotes)

```
public/
  images/
    logo-white.png
    divider.png
    author.jpg
    hero-sharpe.jpg
    hero-italy.jpg
    cover-anna-sharpe.jpg
    cover-book-of-secrets.jpg
    ...
```

Then point `site.js` at `/images/...` paths.

---

## Changing the author name only

Edit **`authorName`** and **`siteTitle`** in **`src/config/site.js`**. If you still use the Anna Mazzola **logo** image, replace **`images.headerLogo`** with your own logo file or clear it to use text.
