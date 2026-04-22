/**
 * When `true`, next/image serves the file directly (no /_next/image optimizer).
 *
 * We skip optimization for everything under /images/home/ so when you rename
 * or delete files in public/images/home/, the browser loads the real path and
 * updates immediately instead of stale optimizer cache.
 */
const LOCAL_HOME_IMAGES = "/images/home/";

export function imageUnoptimized(src) {
  if (typeof src !== "string") return true;
  if (src.endsWith(".svg")) return true;
  if (src.includes("/placeholders/")) return true;
  if (src.startsWith(LOCAL_HOME_IMAGES)) return true;
  return false;
}
