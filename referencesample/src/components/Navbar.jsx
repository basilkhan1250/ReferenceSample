"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { siteConfig } from "../config/site";
import { imageUnoptimized } from "../lib/imageUtils";

const TOP_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/articles", label: "ARTICLES" },
  { href: "/news-events", label: "NEWS & EVENTS" },
  { href: "/contact", label: "CONTACT" },
];

function ChevronDownIcon(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function linkActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const booksActive = pathname.startsWith("/books");
  const logoSrc = siteConfig.images.headerLogo;

  const selectOptions = useMemo(() => {
    const opts = [{ href: "/", label: "HOME" }];
    for (const b of siteConfig.books) {
      opts.push({ href: `/books/${b.slug}`, label: b.navLabel });
    }
    for (const item of TOP_LINKS.slice(1)) {
      opts.push({ href: item.href, label: item.label });
    }
    return opts;
  }, []);

  const selectValue = useMemo(() => {
    const match = selectOptions.find(
      (o) => o.href === pathname || pathname.startsWith(`${o.href}/`),
    );
    return match?.href ?? "";
  }, [pathname, selectOptions]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
      <nav
        className="flex h-28 w-full items-center justify-between px-0"
        aria-label="Primary"
      >
        {logoSrc ? (
          <Link
            href="/"
            className="group relative isolate block h-18 w-[min(92vw,480px)] ml-15"
          >
            <Image
              alt={siteConfig.authorName}
              className="object-contain object-left"
              fill
              priority
              sizes="(max-width: 768px) 120vw, (max-width: 1080px) 90vw, 1000px"
              src={logoSrc}
              unoptimized={imageUnoptimized(logoSrc)}
            />
            <span
              className="pointer-events-none absolute inset-0 z-[1] bg-red-500 opacity-0 mix-blend-multiply transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
              aria-hidden
            />
          </Link>
        ) : (
          <Link
            href="/"
            className="pl-8 font-sans text-3xl font-bold leading-none tracking-[0.12em] text-white uppercase transition-colors hover:text-red-500 sm:pl-10 sm:text-4xl md:pl-12 md:text-5xl lg:pl-14"
          >
            {siteConfig.authorName}
          </Link>
        )}

        <div className="flex items-center gap-4 pr-4 sm:pr-8 md:hidden">
          <label className="sr-only" htmlFor="select-page">
            Select Page
          </label>
          <select
            id="select-page"
            className="max-w-[min(52vw,220px)] cursor-pointer border border-white/40 bg-black py-2 pl-3 pr-8 text-[11px] font-semibold uppercase tracking-[0.12em] text-white focus:border-lime-400 focus:outline-none"
            value={selectValue}
            onChange={(e) => {
              const v = e.target.value;
              if (v) router.push(v);
            }}
          >
            <option value="">Select Page</option>
            {selectOptions.map((o) => (
              <option key={o.href} value={o.href}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <ul className="hidden items-center gap-5 pr-10 text-[15px] font-semibold tracking-[0.10em] md:flex md:text-[15px] lg:gap-6 lg:text-[16px]">
          {TOP_LINKS.slice(0, 1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={[
                  "inline-flex items-center gap-1 py-2 transition-colors hover:text-red-500",
                  linkActive(pathname, item.href)
                    ? "text-lime-400"
                    : "text-white/85",
                ].join(" ")}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="group relative">
            <span
              className={[
                "inline-flex cursor-default items-center gap-1 py-2 transition-colors group-hover:text-red-500",
                booksActive ? "text-lime-400" : "text-white/85",
              ].join(" ")}
            >
              BOOKS
              <ChevronDownIcon className="h-4 w-4 translate-y-[1px] text-current opacity-80" />
            </span>
            <ul className="invisible absolute left-0 top-full z-50 min-w-[260px] translate-y-1 border border-white/10 bg-black py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {siteConfig.books.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/books/${b.slug}`}
                    className="block px-4 py-2 text-[13px] font-semibold tracking-wide text-white/90 transition-colors hover:bg-white/10 hover:text-red-500"
                  >
                    {b.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {TOP_LINKS.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={[
                  "inline-flex items-center gap-1 py-2 transition-colors hover:text-red-500",
                  linkActive(pathname, item.href)
                    ? "text-lime-400"
                    : "text-white/85",
                ].join(" ")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
