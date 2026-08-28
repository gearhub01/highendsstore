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
        title={article.title}
        description={article.seo.description}
        canonicalPath={`${IPHONE_BASE_PATH}/${article.slug}`}
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
        items={[{ label: COLLECTION_NAME, href: IPHONE_BASE_PATH }, { label: article.title }]}
      />

      <main className="pb-16">
        <article className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
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
                Dernière mise à jour le{" "}
                <time dateTime={article.updatedAt} className="font-medium text-foreground">
                  {formatDate(article.updatedAt)}
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
                  <h2 className="mb-3 text-xl font-display font-bold">À lire aussi</h2>
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
