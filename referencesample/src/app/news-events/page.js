import { Playfair_Display } from "next/font/google";
import { siteConfig } from "../../config/site";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: `News & Events | ${siteConfig.authorName}`,
};

export default function NewsEventsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-8 py-14 md:px-12 md:py-20 lg:px-16">
        <h1
          className={[
            display.className,
            "text-4xl font-semibold tracking-wide text-neutral-900",
          ].join(" ")}
        >
          News &amp; Events
        </h1>
      </div>
    </div>
  );
}
