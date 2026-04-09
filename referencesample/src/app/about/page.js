import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { siteConfig } from "../../config/site";
import { imageUnoptimized } from "../../lib/imageUtils";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: `About | ${siteConfig.authorName}`,
};

export default function AboutPage() {
  const src = siteConfig.images.authorPortrait;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-8 py-14 md:px-12 md:py-20 lg:px-16">
        <h1
          className={[
            display.className,
            "text-4xl font-semibold tracking-wide text-neutral-900",
          ].join(" ")}
        >
          About
        </h1>
        <div className="relative mx-auto mt-10 aspect-[4/5] max-w-sm overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.06]">
          <Image
            alt={siteConfig.authorName}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 384px"
            src={src}
            unoptimized={imageUnoptimized(src)}
          />
        </div>
      </div>
    </div>
  );
}
