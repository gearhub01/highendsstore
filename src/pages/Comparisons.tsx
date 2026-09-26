import { Link } from "react-router-dom";
import { GitCompareArrows, ArrowRight, Star, Monitor, Smartphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { STATIC_PAGES, type StaticPage } from "@/content/static-pages";
import { IPHONE_BASE_PATH, isCollectionVisible } from "@/config/iphone-collection";

const ComparisonCard = ({ page }: { page: StaticPage }) => (
  <Link
    to={page.href}
    className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
  >
    {page.image && (
      <div className="h-44 overflow-hidden">
        <img
          src={page.image}
          alt={page.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent">
          <GitCompareArrows className="h-3 w-3" />
          Comparaison
        </span>
        {page.tag && (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-primary/10 text-primary">
            {page.tag}
          </span>
        )}
        {page.rating && (
          <span className="flex items-center gap-0.5 text-xs font-bold text-primary">
            <Star className="h-3 w-3 fill-primary" />
            {page.rating}
          </span>
        )}
      </div>
      <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {page.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{page.excerpt}</p>
      <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        Voir la comparaison <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </div>
  </Link>
);

const Comparisons = () => {
  const all = STATIC_PAGES.filter((p) => p.category === "comparison");
  const gaming = all.filter((p) => !p.href.startsWith(IPHONE_BASE_PATH));
  const iphone = isCollectionVisible()
    ? all.filter((p) => p.href.startsWith(IPHONE_BASE_PATH))
    : [];

  const groups = [
    {
      id: "gaming",
      icon: Monitor,
      title: "Périphériques gaming",
      description: "Claviers, souris, moniteurs et casques comparés côte à côte, chiffres à l'appui.",
      pages: gaming,
    },
    ...(iphone.length > 0
      ? [
          {
            id: "iphone",
            icon: Smartphone,
            title: "iPhone & setup PC",
            description:
              "Les générations d'iPhone comparées du point de vue d'un setup gaming et streaming.",
            pages: iphone,
          },
        ]
      : []),
  ].filter((g) => g.pages.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Toutes nos comparaisons | Highends Store"
        description="Toutes les comparaisons Highends Store par catégorie : claviers, moniteurs et périphériques gaming, ainsi que les iPhone 16, 17 et 18 Pro comparés pour votre setup PC."
        path="/comparaisons"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Comparaisons Highends Store",
          url: "https://www.highends.store/comparaisons",
        }}
      />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fade-up">
            <div className="text-center mb-14">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Toutes nos <span className="text-primary text-glow-sm">comparaisons</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Des tableaux complets, des chiffres mesurés et un verdict clair — classés par
                catégorie pour trouver vite la comparaison qui vous intéresse.
              </p>
            </div>
          </AnimatedSection>

          {groups.map((group) => (
            <section key={group.id} className="mb-14">
              <AnimatedSection variant="fade-up">
                <div className="flex items-center gap-3 mb-2">
                  <group.icon className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-display font-bold">{group.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{group.description}</p>
              </AnimatedSection>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.pages.map((page, i) => (
                  <AnimatedSection key={page.slug} variant="fade-up" delay={i * 0.06}>
                    <ComparisonCard page={page} />
                  </AnimatedSection>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Comparisons;
