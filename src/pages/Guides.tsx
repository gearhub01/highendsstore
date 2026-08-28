import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, GitCompareArrows, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Skeleton } from "@/components/ui/skeleton";
import { useGuides, useComparisons, useReviews, FALLBACK_IMAGE } from "@/hooks/use-content";
import SEOHead from "@/components/SEOHead";
import { STATIC_PAGES } from "@/content/static-pages";

type ContentItem = {
  id: string;
  type: "guide" | "comparison" | "review";
  title: string;
  description: string;
  href: string;
  image: string;
  tag?: string | null;
  rating?: string | null;
};

const typeLabel: Record<string, { label: string; color: string }> = {
  guide: { label: "Guide d'achat", color: "bg-primary/15 text-primary" },
  comparison: { label: "Comparaison", color: "bg-accent/15 text-accent" },
  review: { label: "Review", color: "bg-emerald-500/15 text-emerald-500" },
};

const typeIcon = {
  guide: BookOpen,
  comparison: GitCompareArrows,
  review: Star,
};

const ContentCard = ({ item }: { item: ContentItem }) => {
  const { label, color } = typeLabel[item.type];
  const Icon = typeIcon[item.type];
  return (
    <Link
      to={item.href}
      className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${color}`}>
            <Icon className="h-3 w-3" />
            {label}
          </span>
          {item.tag && (
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-primary/10 text-primary">
              {item.tag}
            </span>
          )}
          {item.rating && (
            <span className="flex items-center gap-0.5 text-xs font-bold text-primary">
              <Star className="h-3 w-3 fill-primary" />
              {item.rating}
            </span>
          )}
        </div>
        <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{item.description}</p>
        <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          Découvrir <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
};

const Guides = () => {
  const { data: guides = [], isLoading: lg } = useGuides();
  const { data: comparisons = [], isLoading: lc } = useComparisons();
  const { data: reviews = [], isLoading: lr } = useReviews();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const isLoading = lg || lc || lr;

  const allContent: ContentItem[] = [
    ...guides.map((g) => ({
      id: g.id,
      type: "guide" as const,
      title: g.title,
      description: g.description ?? "",
      href: `/guides/${g.slug}`,
      image: g.image || FALLBACK_IMAGE,
      tag: g.tag,
    })),
    ...comparisons.map((c) => ({
      id: c.id,
      type: "comparison" as const,
      title: c.title,
      description: c.description ?? "",
      href: `/comparaison/${c.slug}`,
      image: c.image || FALLBACK_IMAGE,
    })),
    ...reviews.map((r) => ({
      id: r.id,
      type: "review" as const,
      title: r.title,
      description: r.description ?? "",
      href: `/reviews/${r.slug}`,
      image: r.image || FALLBACK_IMAGE,
      rating: r.rating,
    })),
  ];

  const filteredContent = activeFilter
    ? allContent.filter((item) => item.type === activeFilter)
    : allContent;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Guides d'achat gaming 2026"
        description="Nos guides pour composer un setup PC complet : claviers, souris, casques, moniteurs et accessoires, testés puis classés par usage et par budget."
        type="website"
        canonicalPath="/guides"
        noindex={!isLoading && allContent.length === 0}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fade-up">
            <div className="max-w-2xl mb-10">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Tous les <span className="gradient-neon-text">Guides</span>
              </h1>
              <p className="text-muted-foreground">
                Guides d'achat, comparaisons et reviews — tout pour choisir le meilleur périphérique gaming.
              </p>
            </div>
          </AnimatedSection>

          {/* Type filters */}
          <AnimatedSection variant="fade-up" delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setActiveFilter(null)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                  activeFilter === null
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40"
                }`}
              >
                Tout
              </button>
              {Object.entries(typeLabel).map(([key, { label, color }]) => {
                const Icon = typeIcon[key as keyof typeof typeIcon];
                return (
                  <button
                    key={key}
                    onClick={() => setActiveFilter(key)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                      activeFilter === key
                        ? `border-primary ${color}`
                        : "border-border bg-card text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Content grid */}
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-72 rounded-xl" />
              ))}
            </div>
          ) : filteredContent.length === 0 ? (
            <p className="text-muted-foreground">Aucun contenu publié pour le moment.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredContent.map((item, i) => (
                <AnimatedSection key={item.id} variant="fade-up" delay={0.1 + i * 0.05}>
                  <ContentCard item={item} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guides;
