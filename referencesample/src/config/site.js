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
    heroAnnaSharpe: homeAssets.firstHeroBookCover,
    heroItalyNovel: homeAssets.secondBookCover,
  },

  homeAssets,

  home: {
    annaSharpe: {
      headline:
        "Poetry of what remains after loss.",
      quote:
        "What we have once enjoyed we can never lose.",
      quoteAttribution: "Helen Keller",
      ctaLabel: "Find out More",
      ctaHref: "/books/alamiyah",
    },
    italyNovel: {
      headline:
        "The Death of God and more, made clear.",
        quote:
        "Become who you are.",
      quoteAttribution: "Friedrich Nietzsche",
      ctaLabel: "Find out More",
      ctaHref: "/books/the-book-of-secrets",
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
      slug: "anna-sharpe",
      navLabel: "Anna Sharpe Books",
      pageTitle: "Anna Sharpe Books",
      coverSrc: bookCoverBySlug["anna-sharpe"],
      blurb:
        "A fast-paced and razor-sharp thriller — the first Anna Sharpe novel.",
    },
    {
      slug: "the-book-of-secrets",
      navLabel: "The Book of Secrets",
      pageTitle: "The Book of Secrets",
      coverSrc: bookCoverBySlug["the-book-of-secrets"],
      blurb:
        "A chilling, mesmerising novel inspired by real events in 17th century Italy.",
    },
    {
      slug: "the-house-of-whispers",
      navLabel: "The House of Whispers",
      pageTitle: "The House of Whispers",
      coverSrc: bookCoverBySlug["the-house-of-whispers"],
      blurb: "",
    },
    {
      slug: "the-clockwork-girl",
      navLabel: "The Clockwork Girl",
      pageTitle: "The Clockwork Girl",
      coverSrc: bookCoverBySlug["the-clockwork-girl"],
      blurb: "",
    },
    {
      slug: "the-story-keeper",
      navLabel: "The Story Keeper",
      pageTitle: "The Story Keeper",
      coverSrc: bookCoverBySlug["the-story-keeper"],
      blurb: "",
    },
    {
      slug: "the-unseeing",
      navLabel: "The Unseeing",
      pageTitle: "The Unseeing",
      coverSrc: bookCoverBySlug["the-unseeing"],
      blurb: "",
    },
  ],
};

export function getBookBySlug(slug) {
  return siteConfig.books.find((b) => b.slug === slug) ?? null;
}
