import Image from "next/image";
import { notFound } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import { getBookBySlug, siteConfig } from "../../../config/site";
import { imageUnoptimized } from "../../../lib/imageUtils";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return siteConfig.books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: siteConfig.siteTitle };
  return {
    title: `${book.pageTitle} | ${siteConfig.authorName}`,
    description: book.blurb || siteConfig.siteDescription,
  };
}

export default async function BookPage({ params }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16 md:px-10 md:py-20">
        <div className="relative mx-auto aspect-[2/3] w-full max-w-[280px] shadow-lg ring-1 ring-black/10">
          <Image
            alt={book.pageTitle}
            className="object-cover"
            fill
            priority
            sizes="280px"
            src={book.coverSrc}
            unoptimized={imageUnoptimized(book.coverSrc)}
          />
        </div>
        <div>
          <h1
            className={[
              display.className,
              "text-4xl font-semibold tracking-wide text-neutral-900 md:text-5xl",
            ].join(" ")}
          >
            {book.pageTitle}
          </h1>
          {book.upcoming ? (
            <p className="mt-4 inline-block rounded border border-amber-600/40 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
              Upcoming
            </p>
          ) : null}
          {book.blurb ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              {book.blurb}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
