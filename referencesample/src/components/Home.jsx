import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { siteConfig } from "../config/site";
import { imageUnoptimized } from "../lib/imageUtils";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/** First hero: warm orange to match the first-book cover art */
const firstHeroTitle = "text-[#ff9238]";
const firstHeroButton =
  "bg-[#e85d04] text-white hover:bg-[#c94a03] hover:text-white";
/** Second hero: white copy, black CTA */
const secondHeroTitle = "text-white";
const secondHeroButton =
  "border border-white/25 bg-black text-white hover:bg-neutral-900 hover:text-white";

function CoverFrame({ src, alt, priority = false }) {
  return (
    <div className="relative mx-auto aspect-[2/3] w-full max-w-[300px] shadow-[0_8px_40px_rgba(0,0,0,0.45)] md:max-w-[340px]">
      <Image
        alt={alt}
        className="object-cover"
        fill
        priority={priority}
        sizes="(max-width: 768px) 90vw, 340px"
        src={src}
        unoptimized={imageUnoptimized(src)}
      />
    </div>
  );
}

export default function Home() {
  const h = siteConfig.home;
  const a = siteConfig.homeAssets;

  return (
    <div className="bg-black text-white">
      <section className="relative min-h-[520px] overflow-hidden md:min-h-[580px]">
        <Image
          alt=""
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={a.firstHeroBackground}
          unoptimized={imageUnoptimized(a.firstHeroBackground)}
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-12 md:px-10 md:py-20 lg:px-16">
          <div className="flex flex-col gap-6 md:gap-7">
            <h2
              className={[
                display.className,
                firstHeroTitle,
                "text-2xl font-semibold leading-snug sm:text-3xl md:text-[1.75rem] lg:text-[2rem]",
              ].join(" ")}
            >
              {h.almiyah.headline}
            </h2>
            <blockquote className="space-y-3 text-white/95">
              <p className="font-sans text-base italic leading-relaxed sm:text-lg">
                &lsquo;{h.almiyah.quote}&rsquo;
              </p>
              <footer className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white sm:text-sm">
                {h.almiyah.quoteAttribution}
              </footer>
            </blockquote>
            <div>
              <Link
                className={[
                  "inline-block px-8 py-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors",
                  firstHeroButton,
                ].join(" ")}
                href={h.almiyah.ctaHref}
              >
                {h.almiyah.ctaLabel.toUpperCase()}
              </Link>
            </div>
          </div>
          <CoverFrame
            alt={h.almiyah.headline}
            priority
            src={a.firstHeroBookCover}
          />
        </div>
      </section>

      <section className="relative min-h-[520px] overflow-hidden md:min-h-[580px]">
        <Image
          alt=""
          className="object-cover"
          fill
          sizes="100vw"
          src={a.secondHeroBackground}
          unoptimized={imageUnoptimized(a.secondHeroBackground)}
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-12 md:px-10 md:py-20 lg:px-16">
          <div className="order-2 flex flex-col gap-6 md:order-1 md:gap-7">
            <h2
              className={[
                display.className,
                secondHeroTitle,
                "text-2xl font-semibold leading-snug sm:text-3xl md:text-[1.75rem] lg:text-[2rem]",
              ].join(" ")}
            >
              {h.nietzsche.headline}
            </h2>
            <blockquote className="space-y-3 text-white/95">
              <p className="font-sans text-base italic leading-relaxed sm:text-lg">
                &lsquo;{h.nietzsche.quote}&rsquo;
              </p>
              <footer className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-white sm:text-sm">
                {h.nietzsche.quoteAttribution}
              </footer>
            </blockquote>
            <div className="flex flex-col items-start gap-5">
              <Link
                className={[
                  "inline-block px-8 py-3 font-sans text-xs font-bold uppercase tracking-[0.2em] transition-colors",
                  secondHeroButton,
                ].join(" ")}
                href={h.nietzsche.ctaHref}
              >
                {h.nietzsche.ctaLabel.toUpperCase()}
              </Link>
              <div className="relative h-24 w-40 opacity-95 sm:h-28 sm:w-44">
                <Image
                  alt=""
                  className="object-contain object-left"
                  fill
                  sizes="176px"
                  src={a.decorativeIllustration}
                  unoptimized={imageUnoptimized(a.decorativeIllustration)}
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <CoverFrame alt={h.nietzsche.headline} src={a.secondBookCover} />
          </div>
        </div>
      </section>

      <section className="relative min-h-[480px] overflow-hidden md:min-h-[520px]">
        <Image
          alt=""
          className="object-cover"
          fill
          sizes="100vw"
          src={a.readersSectionBackground}
          unoptimized={imageUnoptimized(a.readersSectionBackground)}
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-20 lg:px-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden shadow-xl ring-1 ring-white/15 md:mx-0 md:max-w-none md:justify-self-start">
            <Image
              alt={siteConfig.authorName}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              src={a.authorPortrait}
              unoptimized={imageUnoptimized(a.authorPortrait)}
            />
          </div>
          <div className="flex flex-col gap-5 text-left md:gap-6">
            <h2
              className={[
                display.className,
                "text-3xl font-semibold text-white md:text-4xl",
              ].join(" ")}
            >
              {h.stayUpdated.title}
            </h2>
            <p className="max-w-lg font-sans text-base leading-relaxed text-white/90 md:text-lg">
              {h.stayUpdated.body}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
