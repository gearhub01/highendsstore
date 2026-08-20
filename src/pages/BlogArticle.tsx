import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, TrendingUp, Cpu, Wrench, Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import RelatedContent from "@/components/RelatedContent";
import { Skeleton } from "@/components/ui/skeleton";
import { useArticle, useArticles, FALLBACK_IMAGE } from "@/hooks/use-content";

const categoryIcon: Record<string, typeof TrendingUp> = {
  Tendance: TrendingUp,
  Tech: Cpu,
  Tuto: Wrench,
  Actu: Newspaper,
};

const categoryColor: Record<string, string> = {
  Tendance: "bg-primary/15 text-primary",
  Tech: "bg-accent/15 text-accent",
  Tuto: "bg-emerald-500/15 text-emerald-500",
  Actu: "bg-amber-500/15 text-amber-500",
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading } = useArticle(slug);
  const { data: allArticles = [] } = useArticles();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 container mx-auto px-4 max-w-3xl space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-64 w-full rounded-xl" />
          <Skeleton className="h-40 w-full" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) return <Navigate to="/blog" replace />;

  const Icon = categoryIcon[article.category ?? ""] ?? Newspaper;

  const blocks = (article.content ?? "")
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3)
    .map((a) => ({
      type: "guide" as const,
      title: a.title,
      description: a.excerpt ?? "",
      href: `/blog/${a.slug}`,
    }));

  const articleUrl = `${SITE_URL}/blog/${article.slug}`;
  const articleImage = article.image || FALLBACK_IMAGE;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={article.title}
        description={article.excerpt ?? `${article.title} — article GearHub sur les périphériques gaming.`}
        canonical={`/blog/${article.slug}`}
        type="article"
        image={articleImage}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt ?? undefined,
            image: [articleImage],
            datePublished: article.date,
            author: { "@type": article.author ? "Person" : "Organization", name: article.author || "GearHub" },
            publisher: { "@type": "Organization", name: "GearHub", url: SITE_URL },
            mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
            articleSection: article.category ?? undefined,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
            ],
          },
        ]}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection variant="fade-up">
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft className="h-4 w-4" /> Retour au blog
              </Link>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.05}>
              <div className="mb-6">
                <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${categoryColor[article.category ?? ""] ?? "bg-muted text-muted-foreground"}`}>
                  <Icon className="h-3 w-3" />{article.tag || article.category || "Article"}
                </span>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {article.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  {article.author && <span className="flex items-center gap-1"><User className="h-4 w-4" />{article.author}</span>}
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                  {article.read_time && <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{article.read_time} de lecture</span>}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="scale-in" delay={0.1}>
              <div className="rounded-xl overflow-hidden mb-10 border border-border">
                <img src={article.image || FALLBACK_IMAGE} alt={article.title} className="w-full h-64 md:h-96 object-cover" />
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.15}>
              <div className="prose prose-lg max-w-none">
                {blocks.map((block, i) => {
                  if (block.startsWith("## ")) {
                    return <h2 key={i} className="text-xl font-display font-bold text-foreground mt-8 mb-3">{block.replace("## ", "")}</h2>;
                  }
                  return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block}</p>;
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <RelatedContent items={relatedArticles} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
