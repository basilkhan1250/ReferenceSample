# How to use your own images

Everything the browser loads from your project uses files under the **`public`** folder. There is no `/public` in the URL: a file at **`public/images/home/author.png`** is requested in the app as **`/images/home/author.png`**.

You usually only edit **`src/config/site.js`** to point at the paths you want.

---

## 1. Put files on disk

Example layout (you can rename or reorganize; just match paths in `site.js`):

```
referencesample/
  public/
    images/
      home/
        bg-sharpe.png          ← hero 1 background
        bg-italy.png           ← hero 2 background
        bg-readers.png         ← readers’ club background
        cover-sharpe.png
        cover-secrets.png
        decor.png
        cover-whispers.png
        cover-clockwork.png
        cover-story-keeper.png
        cover-unseeing.png
        author.png
```

Supported formats: **PNG**, **JPG**, **WEBP**, **GIF**. SVG works but is treated as unoptimized in code.

---

## 2. Wire paths in `src/config/site.js`

| What you want to change | Where to edit |
|-------------------------|----------------|
| **Homepage** hero backgrounds | `homeAssets.bgSharpe`, `homeAssets.bgItaly`, `homeAssets.bgReaders` |
| **Homepage** book covers in heroes | `homeAssets.coverSharpe`, `homeAssets.coverSecrets` |
| **Homepage** small illustration (Italy block) | `homeAssets.decor` |
| **Homepage** author photo (readers’ section) | `homeAssets.author` |
| **About** page portrait | `images.authorPortrait` (can be the same path as `homeAssets.author`) |
| **Books** pages (grid + each book page) | Each item’s **`coverSrc`** in the **`books`** array |
| **Header logo** (optional image instead of text) | `images.headerLogo` — e.g. `/images/my-logo.png`, or **`""`** for text name |

Use strings starting with **`/`**, for example: **`/images/home/my-photo.jpg`**.

---

## 3. Using images on other pages

- **About** (`src/app/about/page.js`): uses **`siteConfig.images.authorPortrait`**.
- **Books** listing and **`/books/[slug]`**: use each book’s **`coverSrc`** from **`site.js`**.
- **Home** only: built from **`siteConfig.homeAssets`** in **`src/app/page.js`**. To add a **new** image in a new section, add a path in **`site.js`** and use `<Image src={...} />` in **`page.js`** (same pattern as existing sections).

---

## 4. Images hosted on the internet (not in `public/`)

If the URL is **`https://...`** on **your** domain, add a rule in **`next.config.mjs`** under **`images.remotePatterns`** (hostname + pathname) so Next.js is allowed to optimize it. Files only under **`public/`** need no extra config.

---

## 5. After you change files

Restart **`npm run dev`** if the dev server does not pick up new files. Run **`npm run build`** before deploy to confirm there are no errors.

---

## 6. Author name (navbar, footer, tab title)

Edit **`authorName`** and **`siteTitle`** at the top of **`src/config/site.js`**.
