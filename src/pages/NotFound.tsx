import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <SEOHead
        title="Page introuvable"
        description="Cette page n'existe pas ou a été déplacée sur Highends Store."
        noindex
        nofollow
      />
      <Helmet>
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <div className="max-w-lg text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{t("ui.notFoundTitle")}</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          {t("ui.notFoundText")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("ui.backHome")}
          </Link>
          <Link
            to="/iphone-18-pro"
            className="inline-flex rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            iPhone 18 Pro
          </Link>
          <Link
            to="/guides"
            className="inline-flex rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            {t("ui.buyingGuide")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
