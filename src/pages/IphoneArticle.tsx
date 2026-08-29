import { Link, Navigate, useParams } from "react-router-dom";
import { CalendarClock, AlertTriangle, ArrowRight } from "lucide-react";
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
import { useTranslation } from "react-i18next";
import {
  getCollectionArticle,
  resolveCollectionArticle,
  articleModels,
  COLLECTION_NAME,
  IPHONE_BASE_PATH,
  HIDE_PAGES_WHEN_DISABLED,
  MERGED_SLUG_REDIRECTS,
  isCollectionVisible,
} from "@/config/iphone-collection";

/**
 * Gabarit d'article de la collection iPhone 18 Pro.
 * Le même composant sert à tous les articles : le contenu vient des dossiers
 * src/content/iphone/<slug>/ (fr.ts, en.ts) via l'index de collection.
 */
const IphoneArticle = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  // Version française : référence pour le SEO (titres et descriptions restent en FR).
  const source = getCollectionArticle(slug);
  const resolved = resolveCollectionArticle(slug, i18n.language);

  // Article fusionné dans un autre : canonical vers la cible + redirection
  // côté client (une 301 serveur est impossible sur une SPA).
  const mergedTarget = slug ? MERGED_SLUG_REDIRECTS[slug] : undefined;
  if (mergedTarget) {
    const targetPath = `${IPHONE_BASE_PATH}/${mergedTarget}`;
    return (
      <>
        <SEOHead
          title={COLLECTION_NAME}
          description=""
          canonicalPath={targetPath}
        />
        <Navigate to={targetPath} replace />
      </>
    );
  }

  if (!source || !resolved) return <Navigate to="/404" replace />;
  if (!isCollectionVisible() && HIDE_PAGES_WHEN_DISABLED) return <Navigate to="/" replace />;

  const article = resolved.article;
  const toc = article.sections.map((s) => ({ id: s.id, label: s.heading }));


  return (
    <div className="min-h-screen bg-background">
      {/* SEO : toujours émis en français (une seule URL par article). */}
      <SEOHead
        title={source.title}
        description={source.seo.description}
        canonicalPath={`${IPHONE_BASE_PATH}/${source.slug}`}
        type="article"
        image={source.seo.ogImage || source.image}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: source.title,
          description: source.seo.description,
          image: source.image,
          dateModified: source.updatedAt,
          mainEntityOfPage: `${SITE_URL}${IPHONE_BASE_PATH}/${source.slug}`,
          publisher: { "@type": "Organization", name: "Highends Store" },
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[{ label: COLLECTION_NAME, href: IPHONE_BASE_PATH }, { label: article.title }]}
      />

      <main className="pb-16">
        <article className="container mx-auto px-4" lang={resolved.locale}>
          <div className="max-w-3xl mx-auto">
            {/* Bandeau discret : contenu servi en français faute de traduction
                à jour dans la langue choisie. Le contenu reste intégral. */}
            {resolved.fallback && (
              <p className="mb-6 rounded-lg border border-border bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
                {t("ui.notTranslatedYet")}
              </p>
            )}
            {/* En-tête */}
            <AnimatedSection variant="fade-up">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <LaunchBadge />
                {/* Badge du modèle concerné (Pro, Pro Max ou comparatif) */}
                <ModelBadge model={article.model} />
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{article.title}</h1>
              <p className="text-muted-foreground leading-relaxed">{article.intro}</p>

              {/* Encart date de dernière mise à jour */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
                <CalendarClock className="h-3.5 w-3.5 text-primary" />
                  {t("ui.lastUpdatedOn")}{" "}
                <time dateTime={article.updatedAt} className="font-medium text-foreground">
                   {new Date(article.updatedAt).toLocaleDateString(i18n.language, { day: "numeric", month: "long", year: "numeric" })}
                </time>
              </div>

              {/* Encadré d'état des données (specs non confirmées) */}
              {article.notice && (
                <div className="mt-4 flex items-start gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-xs text-muted-foreground">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p>{article.notice}</p>
                </div>
              )}

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
            {article.sections.map((section) => {
              // Chaque section peut avoir ses propres liens ; sinon on fallback sur ceux de l'article.
              const sectionLinks = section.amazon ?? article.amazon;

              return (
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
                    {/* Tableau comparatif : vrai <table>, défilement horizontal sur mobile */}
                    {section.table && (
                      <figure className="mb-6">
                        <div className="w-full overflow-x-auto rounded-xl border border-border">
                          <table className="w-full min-w-[640px] border-collapse text-sm">
                            <thead>
                              <tr className="bg-muted/50">
                                {section.table.headers.map((h, i) => (
                                  <th
                                    key={i}
                                    scope="col"
                                    className="whitespace-nowrap border-b border-border px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-foreground"
                                  >
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.table.rows.map((row, ri) => (
                                <tr key={ri} className="border-b border-border/60 last:border-0">
                                  {row.map((cell, ci) => (
                                    <td
                                      key={ci}
                                      className={
                                        ci === 0
                                          ? "px-4 py-3 align-top font-medium text-foreground"
                                          : "px-4 py-3 align-top text-muted-foreground"
                                      }
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {section.table.caption && (
                          <figcaption className="mt-2 text-xs text-muted-foreground">
                            {section.table.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {/* Liens internes contextuels */}
                    {section.links && (
                      <ul className="mb-4 space-y-1">
                        {section.links.map((l) => (
                          <li key={l.href}>
                            <Link
                              to={l.href}
                              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                            >
                              {l.label} <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA Amazon : affiché uniquement quand showCta est true,
                        pour ne pas surcharger la lecture (un CTA par plusieurs sections). */}
                    {section.showCta &&
                      articleModels(article.model).map((m) => {
                        const link = sectionLinks[m];
                        if (!link) return null;
                        return (
                          <PriceCTA
                            key={m}
                            model={m}
                            url={link.url}
                            productName={link.productName}
                            label={article.amazonLabel}
                            articleSlug={article.slug}
                            sectionId={section.id}
                            placement="article-section"
                          />
                        );
                      })}
                  </section>
                </AnimatedSection>
              );
            })}
            {/* Maillage interne : contenus liés */}
            {article.related && article.related.length > 0 && (
              <AnimatedSection variant="fade-up">
                <section className="mt-12 rounded-xl border border-border bg-muted/30 p-6">
                  <h2 className="mb-3 text-xl font-display font-bold">{t("ui.readAlso")}</h2>
                  <ul className="space-y-2">
                    {article.related.map((l) => (
                      <li key={l.href}>
                        <Link
                          to={l.href}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                        >
                          {l.label} <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </AnimatedSection>
            )}
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
