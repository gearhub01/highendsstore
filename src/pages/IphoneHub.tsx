import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ArrowRight, Smartphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead, { SITE_URL } from "@/components/SEOHead";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import LaunchCountdown from "@/components/iphone/LaunchCountdown";
import LaunchBadge from "@/components/iphone/LaunchBadge";
import ModelBadge from "@/components/iphone/ModelBadge";
import PriceCTA from "@/components/iphone/PriceCTA";
import {
  COLLECTION_ARTICLES,
  COLLECTION_NAME,
  MODEL_TABS,
  HUB_SEO,
  HUB_IPHONE_CTAS,
  IPHONE_BASE_PATH,
  WHY_HERE,
  HIDE_PAGES_WHEN_DISABLED,
  isCollectionVisible,
  articleModels,
} from "@/config/iphone-collection";

/**
 * Page hub de la collection temporaire iPhone 18 Pro.
 * Contenu éditable dans src/config/iphone-collection.ts.
 */
const IphoneHub = () => {
  // Onglet de filtrage actif : "all" | "pro" | "pro_max" | "both" (comparatif).
  const [activeTab, setActiveTab] = useState<(typeof MODEL_TABS)[number]["id"]>("all");
  const visibleArticles =
    activeTab === "all"
      ? COLLECTION_ARTICLES
      : COLLECTION_ARTICLES.filter((a) => a.model === activeTab);

  // Si la collection est désactivée et que l'on veut aussi fermer les pages.
  if (!isCollectionVisible() && HIDE_PAGES_WHEN_DISABLED) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={HUB_SEO.title}
        description={HUB_SEO.description}
        canonical={IPHONE_BASE_PATH}
        image={HUB_SEO.ogImage}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: HUB_SEO.title,
          description: HUB_SEO.description,
          url: `${SITE_URL}${IPHONE_BASE_PATH}`,
          hasPart: COLLECTION_ARTICLES.map((a) => ({
            "@type": "Article",
            headline: a.title,
            url: `${SITE_URL}${IPHONE_BASE_PATH}/${a.slug}`,
            dateModified: a.updatedAt,
          })),
        }}
      />
      <Navbar />
      <Breadcrumbs items={[{ label: COLLECTION_NAME }]} />

      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* En-tête + compte à rebours + CTAs iPhone */}
          <AnimatedSection variant="fade-up">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start mt-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <LaunchBadge />
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  iPhone 18 Pro & Pro Max —{" "}
                  <span className="gradient-neon-text">l'accessoire ultime de votre setup</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl">
                  Webcam 4K pour le PC, capture pour le stream, accessoires USB-C mutualisés :
                  une collection temporaire centrée sur ce que l'iPhone 18 Pro et le Pro Max
                  apportent réellement à un bureau gaming.
                </p>
              </div>
              <LaunchCountdown />
            </div>
          </AnimatedSection>

          {/* Grille des articles */}
          <AnimatedSection variant="fade-up" delay={0.1}>
            <h2 className="text-2xl font-display font-bold mt-14 mb-6">
              Les articles de la collection
            </h2>

            {/* Onglets de tri par modèle (libellés éditables dans la config) */}
            <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrer par modèle">
              {MODEL_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                    activeTab === tab.id
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((article, i) => (
              <AnimatedSection key={article.slug} variant="fade-up" delay={0.15 + i * 0.05}>
                <Link
                  to={`${IPHONE_BASE_PATH}/${article.slug}`}
                  className="group block h-full rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <LaunchBadge />
                      <ModelBadge model={article.model} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>

                    {/* CTA Amazon sur la carte produit — un bouton par modèle concerné */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      {articleModels(article.model).map((m) => {
                        const link = article.amazon[m];
                        if (!link) return null;
                        return (
                          <PriceCTA
                            key={m}
                            model={m}
                            url={link.url}
                            productName={link.productName}
                            label={article.amazonLabel}
                          />
                        );
                      })}
                    </div>

                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Lire l'article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {visibleArticles.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Aucun article pour ce modèle pour le moment.
            </p>
          )}

          {/* Encart « pourquoi ici » */}
          <AnimatedSection variant="fade-up" delay={0.1}>
            <section className="mt-14 max-w-3xl rounded-xl border border-border bg-muted/30 p-6">
              <h2 className="text-xl font-display font-bold mb-3">{WHY_HERE.title}</h2>
              {WHY_HERE.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </section>
          </AnimatedSection>
        </div>

        <AffiliateDisclosure />
      </main>

      <Footer />
    </div>
  );
};

export default IphoneHub;
