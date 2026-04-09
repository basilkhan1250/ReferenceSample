/** True when next/image should skip optimization (local SVG / bundled placeholders). */
export function imageUnoptimized(src) {
  if (typeof src !== "string") return true;
  if (src.endsWith(".svg")) return true;
  if (src.includes("/placeholders/")) return true;
  return false;
}
