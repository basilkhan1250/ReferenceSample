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
    startYear: 2016,
    designCredit: "Site Design by Faith Tilleray",
  },

  images: {
    headerLogo: "",
    homeDividerGraphic: "",
    authorPortrait: homeAssets.authorPortrait,
    heroAnnaSharpe: homeAssets.firstHeroBookCover,
    heroItalyNovel: homeAssets.secondBookCover,
  },

  homeAssets,

  home: {
    annaSharpe: {
      headline:
        "The first Anna Sharpe book, a fast-paced and razor-sharp thriller, is out now!",
      quote:
        "A high octane, page-turning thriller, but with characters who are fully rounded human beings you care about. I really loved it",
      quoteAttribution: "JENNIE GODFREY",
      ctaLabel: "Find out More",
      ctaHref: "/books/anna-sharpe",
    },
    italyNovel: {
      headline:
        "A chilling, mesmerising and darkly delicious novel inspired by real events that took place in 17th century Italy",
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
