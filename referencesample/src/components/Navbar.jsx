import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const brandFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const NAV_ITEMS = [
  { href: "/", label: "HOME", active: true },
  { href: "/books", label: "BOOKS", hasDropdown: true },
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

export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <nav
        className="flex h-28 w-full items-center justify-between px-0"
        aria-label="Primary"
      >
        <Link
          href="/"
          className={[
            brandFont.className,
            "pl-16 text-4xl font-semibold tracking-[0.22em] uppercase",
          ].join(" ")}
        >
          Moiz Haider
        </Link>

        <ul className="flex items-center gap-6 pr-10 text-[16px] font-semibold tracking-[0.10em]">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={[
                  "inline-flex items-center gap-1 py-2 transition-colors",
                  item.active
                    ? "text-lime-400"
                    : "text-white/85 hover:text-white",
                ].join(" ")}
              >
                {item.label}
                {item.hasDropdown ? (
                  <ChevronDownIcon className="h-4 w-4 translate-y-[1px] text-white/80" />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

