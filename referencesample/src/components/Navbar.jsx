"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import { imageUnoptimized } from "../lib/imageUtils";

const TOP_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/articles", label: "ARTICLES" },
  { href: "/contact", label: "CONTACT" },
];

const navLinkActiveNeon =
  "text-[#ff1744] [text-shadow:0_0_10px_rgba(255,23,68,0.95),0_0_22px_rgba(255,23,68,0.45)] transition-[color,text-shadow] duration-200 hover:text-[#ff5c8a] hover:[text-shadow:0_0_14px_rgba(255,92,138,0.85)]";

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
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

  // 🔥 Scroll state
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 border-b border-white/10 text-white shadow-[0_4px_24px_rgba(0,0,0,0.45)] transition-all duration-300 ${
        scrolled ? "h-16 bg-black/90 backdrop-blur-md" : "h-24 bg-black"
      }`}
    >
      <nav
        className={`flex w-full items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        {/* Logo */}
        {logoSrc ? (
          <Link
            href="/"
            className={`relative block transition-all duration-300 ${
              scrolled
                ? "h-10 w-[160px] ml-6"
                : "h-18 w-[min(92vw,480px)] ml-15"
            }`}
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
          </Link>
        ) : (
          <Link
            href="/"
            className={`font-sans font-bold leading-none tracking-[0.12em] uppercase transition-all duration-300 ${
              scrolled
                ? "text-2xl pl-6"
                : "text-5xl pl-14"
            }`}
          >
            {siteConfig.authorName}
          </Link>
        )}

        {/* Mobile Dropdown */}
        <div className="flex items-center gap-4 pr-4 sm:pr-8 md:hidden">
          <select
            className="max-w-[min(52vw,220px)] cursor-pointer border border-white/40 bg-black py-2 pl-3 pr-8 text-[11px] font-semibold uppercase tracking-[0.12em] text-white focus:border-red-500 focus:outline-none"
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

        {/* Desktop Nav */}
        <ul
          className={`hidden items-center pr-10 font-semibold tracking-[0.10em] md:flex transition-all duration-300 ${
            scrolled ? "gap-4 text-[13px]" : "gap-6 text-[16px]"
          }`}
        >
          {TOP_LINKS.slice(0, 1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={[
                  "inline-flex items-center py-2 transition-colors",
                  linkActive(pathname, item.href)
                    ? navLinkActiveNeon
                    : "text-white hover:text-red-500",
                ].join(" ")}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Books Dropdown */}
          <li className="group relative">
            <span
              className={[
                "inline-flex cursor-default items-center gap-1 py-2 transition-colors",
                booksActive
                  ? navLinkActiveNeon
                  : "text-white group-hover:text-red-500",
              ].join(" ")}
            >
              BOOKS
              <ChevronDownIcon className="h-4 w-4 translate-y-[1px]" />
            </span>

            <ul className="invisible absolute left-0 top-full z-50 min-w-[260px] translate-y-1 border border-white/10 bg-black py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {siteConfig.books.map((b) => {
                const bookPath = `/books/${b.slug}`;
                const active = pathname === bookPath;

                return (
                  <li key={b.slug}>
                    <Link
                      href={bookPath}
                      className={[
                        "block px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors hover:bg-white/10",
                        active
                          ? navLinkActiveNeon
                          : "text-white/90 hover:text-red-500",
                      ].join(" ")}
                    >
                      {b.navLabel}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>

          {TOP_LINKS.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={[
                  "inline-flex items-center py-2 transition-colors",
                  linkActive(pathname, item.href)
                    ? navLinkActiveNeon
                    : "text-white hover:text-red-500",
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