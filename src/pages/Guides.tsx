import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, GitCompareArrows, Star, ArrowRight, Keyboard, Mouse, Headphones, Monitor } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const guidesData = [
  {
    type: "guide" as const,
    title: "Meilleurs Claviers Gaming 2026",
    description: "Notre sélection des 5 meilleurs claviers gaming du moment, testés et approuvés par notre équipe.",
    href: "/guides/best-gaming-keyboards",
    icon: Keyboard,
    tag: "Top 5",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80",
  },
  {
    type: "guide" as const,
    title: "Meilleurs Souris FPS 2026",
    description: "Les souris les plus précises pour dominer en FPS compétitif.",
    href: "/guides/best-gaming-mice",
    icon: Mouse,
    tag: "Bientôt",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80",
  },
  {
    type: "guide" as const,
    title: "Meilleurs Casques Gaming 2026",
    description: "Son immersif, micro cristallin : notre classement des meilleurs casques.",
    href: "/guides/best-gaming-headsets",
    icon: Headphones,
    tag: "Bientôt",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80",
  },
  {
    type: "guide" as const,
    title: "Meilleurs Moniteurs 4K 2026",
    description: "Les écrans 4K qui offrent le meilleur compromis qualité d'image et réactivité.",
    href: "/guides/best-4k-monitors",
    icon: Monitor,
    tag: "Bientôt",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
  },
];

const comparisonsData = [
  {
    type: "comparison" as const,
    title: "Wooting vs Razer vs Keychron — Claviers Gaming",
    description: "Comparaison détaillée des trois marques phares du clavier gaming en 2026.",
    href: "/comparaison/gaming-keyboards",
    icon: GitCompareArrows,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&q=80",
  },
];

const reviewsData = [
  {
    type: "review" as const,
    title: "Test du Wooting 80HE",
    description: "Le clavier Hall Effect qui redéfinit les standards du gaming compétitif.",
    href: "/reviews/wooting-80he",
    icon: Star,
    rating: "9.6",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80",
  },
];

type ContentItem = (typeof guidesData)[number] | (typeof comparisonsData)[number] | (typeof reviewsData)[number];

const typeLabel: Record<string, { label: string; color: string }> = {
  guide: { label: "Guide d'achat", color: "bg-primary/15 text-primary" },
  comparison: { label: "Comparaison", color: "bg-accent/15 text-accent" },
  review: { label: "Review", color: "bg-emerald-500/15 text-emerald-500" },
};

const ContentCard = ({ item }: { item: ContentItem }) => {
  const { label, color } = typeLabel[item.type];
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
            <item.icon className="h-3 w-3" />
            {label}
          </span>
          {"tag" in item && item.tag && (
            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${item.tag === "Bientôt" ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"}`}>
              {item.tag}
            </span>
          )}
          {"rating" in item && item.rating && (
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
  const allContent: ContentItem[] = [...guidesData, ...comparisonsData, ...reviewsData];
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredContent = activeFilter
    ? allContent.filter((item) => item.type === activeFilter)
    : allContent;

  return (
    <div className="min-h-screen bg-background">
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
              {Object.entries(typeLabel).map(([key, { label, color }]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                    activeFilter === key
                      ? `border-primary ${color}`
                      : "border-border bg-card text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {key === "guide" && <BookOpen className="h-3.5 w-3.5" />}
                  {key === "comparison" && <GitCompareArrows className="h-3.5 w-3.5" />}
                  {key === "review" && <Star className="h-3.5 w-3.5" />}
                  {label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Content grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredContent.map((item, i) => (
              <AnimatedSection key={item.href} variant="fade-up" delay={0.1 + i * 0.05}>
                <ContentCard item={item} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guides;
