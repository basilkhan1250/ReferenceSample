/**
 * All homepage / book images live in: public/images/home/
 */
const DIR = "/images/home";

function path(filename) {
  return `${DIR}/${filename}`;
}

export const homeHeaderLogoVersion = 2;

export const homeImageNames = {
  headerLogo: "header-logo.png",
  authorPortrait: "author-portrait.jpg",
  firstHeroBackground: "first-hero-background.jpg",
  secondHeroBackground: "second-hero-background.jpg",
  readersSectionBackground: "readers-section-background.jpg",
  firstHeroBookCover: "first-book-cover.jpg",
  secondBookCover: "second-book-cover.jpg",
  thirdBookCover: "third-book-cover.jpg",
  decorativeIllustration: "decorative-illustration.png",
};

export const homeAssets = {
  authorPortrait: path(homeImageNames.authorPortrait),
  firstHeroBackground: path(homeImageNames.firstHeroBackground),
  secondHeroBackground: path(homeImageNames.secondHeroBackground),
  readersSectionBackground: path(homeImageNames.readersSectionBackground),
  firstHeroBookCover: path(homeImageNames.firstHeroBookCover),
  secondBookCover: path(homeImageNames.secondBookCover),
  decorativeIllustration: path(homeImageNames.decorativeIllustration),
  headerLogo:
    homeHeaderLogoVersion > 0
      ? `${path(homeImageNames.headerLogo)}?v=${homeHeaderLogoVersion}`
      : path(homeImageNames.headerLogo),
};

export const bookCoverBySlug = {
  almiyah: path(homeImageNames.firstHeroBookCover),
  "nietzsche-in-a-nutshell": path(homeImageNames.secondBookCover),
  thoughts: path(homeImageNames.thirdBookCover),
};
