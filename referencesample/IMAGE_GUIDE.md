# Images

Files go in **`public/images/home/`**. URLs in code look like **`/images/home/your-file.jpg`** (no `public` in the path).

## One file lists every filename

Edit **`src/config/homeImagePaths.js`** — object **`homeImageNames`**. Each value is a filename; paths are built automatically.

| Key | Used for |
|-----|-----------|
| `authorPortrait` | Author photo (readers section + About) |
| `firstHeroBackground` | First full-width hero background |
| `secondHeroBackground` | Second full-width hero background |
| `readersSectionBackground` | Readers’ club background |
| `firstHeroBookCover` | First hero cover only + `/books/anna-sharpe` |
| `secondBookCover` | Second hero cover + `/books/the-book-of-secrets` |
| `decorativeIllustration` | Small graphic under second hero CTA |
| `thirdBookCover` … `sixthBookCover` | “Also by” row + matching book pages |

## Site copy and author name

**`src/config/site.js`** — `authorName`, `siteTitle`, book titles, blurbs.  
**`images.headerLogo`** — path to a logo image, or **`""`** for text name in the navbar.

## After renaming or deleting files on disk

1. **`homeImageNames`** in **`homeImagePaths.js`** must match the real filenames in **`public/images/home/`** (including extension: `.jpg`, `.png`, etc.).
2. Local home images are loaded **directly** (no Next.js optimizer cache) so renames and deletes should show correctly after a normal browser refresh.
3. If anything still looks stuck: stop the dev server, delete the **`.next`** folder in the project root, run **`npm run dev`** again, then hard-refresh the browser (Ctrl+Shift+R) or disable cache in DevTools → Network.
