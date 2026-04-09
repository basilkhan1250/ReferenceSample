import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { siteConfig } from "../../config/site";
import { imageUnoptimized } from "../../lib/imageUtils";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: `Books | ${siteConfig.authorName}`,
};

export default function BooksPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-none px-8 py-14 md:px-12 md:py-20 lg:px-16">
        <h1
          className={[
            display.className,
            "mb-12 text-4xl font-semibold tracking-wide text-neutral-900",
          ].join(" ")}
        >
          Books
        </h1>
        <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.books.map((book) => (
            <li key={book.slug}>
              <Link className="group flex gap-6" href={`/books/${book.slug}`}>
                <div className="relative h-56 w-36 shrink-0 overflow-hidden shadow-md ring-1 ring-black/5">
                  <Image
                    alt={book.pageTitle}
                    className="object-cover transition group-hover:scale-[1.02]"
                    fill
                    sizes="144px"
                    src={book.coverSrc}
                    unoptimized={imageUnoptimized(book.coverSrc)}
                  />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-semibold text-neutral-900 group-hover:underline">
                    {book.pageTitle}
                  </h2>
                  {book.blurb ? (
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {book.blurb}
                    </p>
                  ) : null}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
