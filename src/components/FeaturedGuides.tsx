import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const guides = [
  {
    tag: "TOP PICK",
    title: "Best Gaming Keyboards 2026",
    description: "Notre sélection des 12 meilleurs claviers mécaniques testés et comparés, du budget au premium.",
    readTime: "15 min",
    category: "Claviers",
    trending: true,
    href: "/guides/best-gaming-keyboards",
  },
  {
    tag: "NOUVEAU",
    title: "Meilleure Souris Gaming FPS",
    description: "Les souris les plus précises pour Valorant, CS2 et Overwatch — testées par des joueurs compétitifs.",
    readTime: "12 min",
    category: "Souris",
    trending: true,
    href: "#",
  },
  {
    tag: "GUIDE",
    title: "Setup Streaming Débutant < 500€",
    description: "Tout ce qu'il faut pour commencer à streamer sur Twitch sans ruiner votre budget.",
    readTime: "10 min",
    category: "Streaming",
    trending: false,
    href: "#",
  },
  {
    tag: "COMPARAISON",
    title: "144Hz vs 240Hz : La Différence Vaut-elle le Prix ?",
    description: "Test en aveugle et benchmarks réels pour savoir si le 240Hz change vraiment votre gameplay.",
    readTime: "8 min",
    category: "Moniteurs",
    trending: false,
    href: "#",
  },
];

const FeaturedGuides = () => {
  return (
    <section id="guides" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-3">
              Guides <span className="gradient-neon-text">Populaires</span>
            </h2>
            <p className="text-muted-foreground">
              Les guides les plus lus ce mois-ci
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 text-sm text-primary hover:underline font-medium"
          >
            Tous les guides <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide, i) => {
            const isInternal = guide.href !== "#";
            const Comp = isInternal ? Link : "a";
            const linkProps = isInternal ? { to: guide.href } : { href: guide.href };

            return (
              <Comp
                key={guide.title}
                {...(linkProps as any)}
                className="group flex flex-col p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
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
                  <span>{guide.readTime} de lecture</span>
                </div>
              </Comp>
            );
          })}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
          >
            Tous les guides <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
