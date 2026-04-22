/**
 * All homepage / book images live in: public/images/home/
 *
 * firstHeroBookCover = first hero column ONLY (your new `first-book-cover` art).
 * secondBookCover    = second hero + Book of Secrets routes (the image you used before for both heroes).
 */
const DIR = "/images/home";

function path(filename) {
  return `${DIR}/${filename}`;
}

export const homeImageNames = {
  authorPortrait: "author-portrait.jpg",
  firstHeroBackground: "first-hero-background.jpg",
  secondHeroBackground: "second-hero-background.jpg",
  readersSectionBackground: "readers-section-background.jpg",
  /** First homepage hero (right column) only — not reused for the second hero. */
  firstHeroBookCover: "first-book-cover.jpg",
  /** Second homepage hero + `/books/the-book-of-secrets` (previous “shared” cover). */
  secondBookCover: "second-book-cover.jpg",
  decorativeIllustration: "decorative-illustration.png",
  thirdBookCover: "third-book-cover.jpg",
  fourthBookCover: "fourth-book-cover.jpg",
  fifthBookCover: "fifth-book-cover.jpg",
  sixthBookCover: "sixth-book-cover.jpg",
};

export const homeAssets = {
  authorPortrait: path(homeImageNames.authorPortrait),
  firstHeroBackground: path(homeImageNames.firstHeroBackground),
  secondHeroBackground: path(homeImageNames.secondHeroBackground),
  readersSectionBackground: path(homeImageNames.readersSectionBackground),
  firstHeroBookCover: path(homeImageNames.firstHeroBookCover),
  secondBookCover: path(homeImageNames.secondBookCover),
  decorativeIllustration: path(homeImageNames.decorativeIllustration),
};

export const bookCoverBySlug = {
  "anna-sharpe": path(homeImageNames.firstHeroBookCover),
  "the-book-of-secrets": path(homeImageNames.secondBookCover),
  "the-house-of-whispers": path(homeImageNames.thirdBookCover),
  "the-clockwork-girl": path(homeImageNames.fourthBookCover),
  "the-story-keeper": path(homeImageNames.fifthBookCover),
  "the-unseeing": path(homeImageNames.sixthBookCover),
};
