import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/AnimatedSection";

const FeaturedGuides = () => {
  const { t } = useTranslation();
  const guides = [
    {
      tag: t("featured.tags.top"),
      title: "Best Gaming Keyboards 2026",
      description: "Notre sélection des 12 meilleurs claviers mécaniques testés et comparés.",
      readTime: "15 min",
      category: t("cats.keyboards"),
      trending: true,
      href: "/guides/best-gaming-keyboards",
    },
    {
      tag: t("featured.tags.new"),
      title: "Meilleure Souris Gaming FPS",
      description: "Les souris les plus précises pour Valorant, CS2 et Overwatch.",
      readTime: "12 min",
      category: t("cats.mice"),
      trending: true,
      href: "/guides",
    },
    {
      tag: t("featured.tags.review"),
      title: "Test Wooting 80HE — Le Roi du Compétitif",
      description: "Notre test complet du Wooting 80HE après 3 mois d'utilisation intensive.",
      readTime: "12 min",
      category: t("cats.keyboards"),
      trending: true,
      href: "/reviews/wooting-80he",
    },
    {
      tag: t("featured.tags.comparison"),
      title: "144Hz vs 240Hz : La Différence Vaut-elle le Prix ?",
      description: "Test en aveugle et benchmarks réels pour le 240Hz.",
      readTime: "8 min",
      category: t("cats.monitors"),
      trending: false,
      href: "/guides",
    },
  ];

  return (
    <section id="guides" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fade-up">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-3">
                {t("featured.title_1")} <span className="gradient-neon-text">{t("featured.title_accent")}</span>
              </h2>
              <p className="text-muted-foreground">{t("featured.subtitle")}</p>
            </div>
            <Link
              to="/guides"
              className="hidden sm:flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              {t("featured.all")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide, i) => (
            <AnimatedSection key={guide.title} variant="fade-up" delay={i * 0.1}>
              <Link
                to={guide.href}
                className="group flex flex-col p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-display font-bold tracking-widest uppercase gradient-neon text-primary-foreground rounded">
                    {guide.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{guide.category}</span>
                  {guide.trending && (
                    <TrendingUp className="h-3.5 w-3.5 text-primary ml-auto" />
                  )}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                  {guide.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{t("featured.readTime", { time: guide.readTime })}</span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
          >
            {t("featured.all")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
