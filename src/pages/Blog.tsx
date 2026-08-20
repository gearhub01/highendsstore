import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, TrendingUp, Cpu, Wrench, Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Skeleton } from "@/components/ui/skeleton";
import { useArticles, FALLBACK_IMAGE, type DbArticle } from "@/hooks/use-content";
import SEOHead from "@/components/SEOHead";

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

const BlogCard = ({ article, featured = false }: { article: DbArticle; featured?: boolean }) => {
  const Icon = categoryIcon[article.category ?? ""] ?? Newspaper;
  return (
    <Link
      to={`/blog/${article.slug}`}
      className={`group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all ${featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}
    >
      <div className={`overflow-hidden ${featured ? "h-64 md:h-full" : "h-48"}`}>
        <img
          src={article.image || FALLBACK_IMAGE}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${categoryColor[article.category ?? ""] ?? "bg-muted text-muted-foreground"}`}>
              <Icon className="h-3 w-3" />
              {article.tag || article.category || "Article"}
            </span>
          </div>
          <h3 className={`font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors ${featured ? "text-xl md:text-2xl" : "text-base"}`}>
            {article.title}
          </h3>
          {article.excerpt && <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{article.excerpt}</p>}
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}</span>
            {article.read_time && <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.read_time}</span>}
          </div>
          <span className="inline-flex items-center gap-1 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Lire <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};

const Blog = () => {
  const { data: articles = [], isLoading } = useArticles();
  const [featured, ...rest] = articles;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog Gaming — Actus, Tests & Tutos Périphériques"
        description="Actualités, analyses et tutoriels sur les périphériques gaming : claviers, souris, casques et moniteurs. Nos articles mis à jour régulièrement."
        canonical="/blog"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fade-up">
            <div className="max-w-2xl mb-10">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Le <span className="gradient-neon-text">Blog</span>
              </h1>
              <p className="text-muted-foreground">
                Actualités, guides techniques et tutoriels pour les passionnés de périphériques gaming.
              </p>
            </div>
          </AnimatedSection>

          {/* Category filters */}
          <AnimatedSection variant="fade-up" delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(categoryIcon).map(([cat, Icon]) => (
                <span key={cat} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-border bg-card cursor-default ${categoryColor[cat]}`}>
                  <Icon className="h-3.5 w-3.5" />{cat}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {isLoading && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-72 rounded-xl" />
              ))}
            </div>
          )}

          {!isLoading && articles.length === 0 && (
            <p className="text-muted-foreground">Aucun article publié pour le moment.</p>
          )}

          {featured && (
            <AnimatedSection variant="fade-up" delay={0.15}>
              <BlogCard article={featured} featured />
            </AnimatedSection>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {rest.map((article, i) => (
              <AnimatedSection key={article.id} variant="fade-up" delay={0.1 + i * 0.05}>
                <BlogCard article={article} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
