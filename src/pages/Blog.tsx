import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, TrendingUp, Cpu, Wrench, Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { blogArticles, type BlogArticle } from "@/data/blog-articles";

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

const BlogCard = ({ article, featured = false }: { article: BlogArticle; featured?: boolean }) => {
  const Icon = categoryIcon[article.category] ?? Newspaper;
  return (
    <Link
      to={`/blog/${article.slug}`}
      className={`group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all ${featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}
    >
      <div className={`overflow-hidden ${featured ? "h-64 md:h-full" : "h-48"}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${categoryColor[article.category]}`}>
              <Icon className="h-3 w-3" />
              {article.tag}
            </span>
          </div>
          <h3 className={`font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors ${featured ? "text-xl md:text-2xl" : "text-base"}`}>
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{article.excerpt}</p>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime}</span>
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
  const [featured, ...rest] = blogArticles;

  return (
    <div className="min-h-screen bg-background">
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

          {/* Featured article */}
          <AnimatedSection variant="fade-up" delay={0.15}>
            <BlogCard article={featured} featured />
          </AnimatedSection>

          {/* Other articles */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {rest.map((article, i) => (
              <AnimatedSection key={article.slug} variant="fade-up" delay={0.1 + i * 0.05}>
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
