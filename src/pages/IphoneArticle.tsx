import { Navigate, useParams } from "react-router-dom";
import { CalendarClock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import TableOfContents from "@/components/TableOfContents";
import GuideFAQ from "@/components/guide/GuideFAQ";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import SEOHead, { SITE_URL } from "@/components/SEOHead";
import PriceCTA from "@/components/iphone/PriceCTA";
import LaunchBadge from "@/components/iphone/LaunchBadge";
import ModelBadge from "@/components/iphone/ModelBadge";
import {
  getCollectionArticle,
  articleModels,
  COLLECTION_NAME,
  IPHONE_BASE_PATH,
  HIDE_PAGES_WHEN_DISABLED,
  isCollectionVisible,
} from "@/config/iphone-collection";

/** Formate une date ISO en français lisible (ex. 21 août 2026). */
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

/**
 * Gabarit d'article de la collection iPhone 18 Pro.
 * Le même composant sert à tous les articles : le contenu vient de
 * src/config/iphone-collection.ts (COLLECTION_ARTICLES).
 */
const IphoneArticle = () => {
  const { slug } = useParams();
  const article = getCollectionArticle(slug);

  if (!article) return <Navigate to="/404" replace />;
  if (!isCollectionVisible() && HIDE_PAGES_WHEN_DISABLED) return <Navigate to="/" replace />;

  const toc = article.sections.map((s) => ({ id: s.id, label: s.heading }));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={article.seo.title}
        description={article.seo.description}
        canonical={`${IPHONE_BASE_PATH}/${article.slug}`}
        type="article"
        image={article.seo.ogImage || article.image}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.seo.description,
          image: article.image,
          dateModified: article.updatedAt,
          mainEntityOfPage: `${SITE_URL}${IPHONE_BASE_PATH}/${article.slug}`,
          publisher: { "@type": "Organization", name: "GearHub" },
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[{ label: "iPhone 18 Pro", href: IPHONE_BASE_PATH }, { label: article.title }]}
      />

      <main className="pb-16">
        <article className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* En-tête */}
            <AnimatedSection variant="fade-up">
              <LaunchBadge className="mb-4" />
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{article.title}</h1>
              <p className="text-muted-foreground leading-relaxed">{article.intro}</p>

              {/* Encart date de dernière mise à jour */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
                <CalendarClock className="h-3.5 w-3.5 text-primary" />
                Dernière mise à jour le{" "}
                <time dateTime={article.updatedAt} className="font-medium text-foreground">
                  {formatDate(article.updatedAt)}
                </time>
              </div>

              <img
                src={article.image}
                alt={article.title}
                className="mt-6 w-full rounded-xl border border-border object-cover max-h-80"
                loading="lazy"
              />
            </AnimatedSection>

            {/* Sommaire ancré */}
            <div className="mt-8">
              <TableOfContents items={toc} />
            </div>

            {/* Sections H2 */}
            {article.sections.map((section) => (
              <AnimatedSection key={section.id} variant="fade-up">
                <section id={section.id} className="scroll-mt-24 mt-10">
                  <h2 className="text-2xl font-display font-bold mb-4">{section.heading}</h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mb-4 space-y-2">
                      {section.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* CTA Amazon : jamais de prix en dur, uniquement le lien */}
                  {section.showCta && (
                    <PriceCTA
                      url={article.amazonUrl}
                      productName={article.productName}
                      label={article.amazonLabel}
                    />
                  )}
                </section>
              </AnimatedSection>
            ))}
          </div>
        </article>

        {/* FAQ en accordéon */}
        {article.faq.length > 0 && <GuideFAQ items={article.faq} />}

        <AffiliateDisclosure />
      </main>

      <Footer />
    </div>
  );
};

export default IphoneArticle;
