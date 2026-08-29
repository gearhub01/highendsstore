import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <span className="font-display text-base font-bold tracking-wider">
                GEAR<span className="text-primary">HUB</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold tracking-widest uppercase mb-4 text-foreground">{t("footer.guides")}</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/guides/best-gaming-keyboards" className="hover:text-primary transition-colors">{t("cats.keyboards")}</Link></li>
              <li><Link to="/guides" className="hover:text-primary transition-colors">{t("cats.mice")}</Link></li>
              <li><Link to="/guides" className="hover:text-primary transition-colors">{t("cats.headsets")}</Link></li>
              <li><Link to="/guides" className="hover:text-primary transition-colors">{t("cats.monitors")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold tracking-widest uppercase mb-4 text-foreground">{t("footer.resources")}</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/guides" className="hover:text-primary transition-colors">{t("footer.allGuides")}</Link></li>
              <li><Link to="/comparaison/gaming-keyboards" className="hover:text-primary transition-colors">{t("footer.comparisons")}</Link></li>
              <li><Link to="/reviews/wooting-80he" className="hover:text-primary transition-colors">{t("footer.reviews")}</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">{t("footer.blog")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold tracking-widest uppercase mb-4 text-foreground">{t("footer.legal")}</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/mentions-legales" className="hover:text-primary transition-colors">{t("footer.legalNotice")}</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-primary transition-colors">{t("footer.privacy")}</Link></li>
              <li><Link to="/divulgation-affiliation" className="hover:text-primary transition-colors">{t("footer.affiliate")}</Link></li>
              <li><button type="button" onClick={openBanner} className="hover:text-primary transition-colors">Gérer les cookies</button></li>
              <li><a href="mailto:contact@gearhub.fr" className="hover:text-primary transition-colors">{t("footer.contact")}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>{t("footer.copyright")}</span>
          <span>{t("footer.affiliateNotice")} <Link to="/mentions-legales" className="underline hover:text-primary">{t("footer.learnMore")}</Link>.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
