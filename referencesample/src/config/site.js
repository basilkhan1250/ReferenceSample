/**
 * Site copy + metadata. Image filenames live in `homeImagePaths.js`.
 */
import { bookCoverBySlug, homeAssets } from "./homeImagePaths";

export const siteConfig = {
  authorName: "Moiz Haider",
  siteTitle: "Moiz Haider | Official Author Site",
  siteDescription:
    "Official author website — books, news, and readers club.",
  footer: {
    startYear: 2026,
    designCredit: "Created by Basil khan",
  },

  images: {
    headerLogo: homeAssets.headerLogo,
    homeDividerGraphic: "",
    authorPortrait: homeAssets.authorPortrait,
    heroAlmiyah: homeAssets.firstHeroBookCover,
    heroNietzsche: homeAssets.secondBookCover,
  },

  homeAssets,

  home: {
    almiyah: {
      headline:
        "Poetry of what remains after loss.",
      quote: "What we have once enjoyed we can never lose.",
      quoteAttribution: "Helen Keller",
      ctaLabel: "Find out More",
      ctaHref: "/books/almiyah",
    },
    nietzsche: {
      headline: "The Death of God and more, made clear.",
      quote: "Become who you are.",
      quoteAttribution: "Friedrich Nietzsche",
      ctaLabel: "Find out More",
      ctaHref: "/books/nietzsche-in-a-nutshell",
    },
    readersClub: {
      title: "Join my Readers' Club",
      body: "Join my Readers' Club to receive a FREE short story, plus news of giveaways, book recommendations, writing tips and more.",
      thanksMessage:
        "Thanks for joining me! Look out for the email asking you to confirm your address.",
    },
  },

  books: [
    {
      slug: "almiyah",
      navLabel: "Almiyah",
      pageTitle: "Almiyah",
      coverSrc: bookCoverBySlug.almiyah,
      blurb:
        "A powerful exploration of what endures when everything else falls away — by Moiz Haider.",
    },
    {
      slug: "nietzsche-in-a-nutshell",
      navLabel: "Nietzsche in a Nutshell",
      pageTitle: "Nietzsche in a Nutshell",
      coverSrc: bookCoverBySlug["nietzsche-in-a-nutshell"],
      blurb: "A concise, vivid guide to Nietzsche’s essential ideas — by Moiz Haider.",
    },
    {
      slug: "thoughts",
      navLabel: "Thoughts",
      pageTitle: "Thoughts",
      coverSrc: bookCoverBySlug.thoughts,
      blurb: "A new work — details to be announced.",
      upcoming: true,
    },
  ],
};

export function getBookBySlug(slug) {
  return siteConfig.books.find((b) => b.slug === slug) ?? null;
}
