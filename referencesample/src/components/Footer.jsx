import { siteConfig } from "../config/site";

export default function Footer() {
  const y = siteConfig.footer.startYear;
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/85 md:py-10">
      <p>
        © {siteConfig.authorName} {y}
        {siteConfig.footer.designCredit ? (
          <>
            {" "}
            |{" "}
            <span className="text-white/60">
              {siteConfig.footer.designCredit}
            </span>
          </>
        ) : null}
      </p>
    </footer>
  );
}
