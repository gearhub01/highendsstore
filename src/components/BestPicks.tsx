import { Star, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const picks = [
  {
    rank: 1,
    name: "Razer Viper V3 Pro",
    category: "Souris Gaming",
    rating: 9.4,
    price: "159€",
    highlight: "Meilleure souris sans-fil 2026",
  },
  {
    rank: 2,
    name: "Wooting 80HE",
    category: "Clavier Gaming",
    rating: 9.6,
    price: "199€",
    highlight: "Meilleur clavier Hall Effect",
  },
  {
    rank: 3,
    name: "SteelSeries Arctis Nova Pro",
    category: "Casque Gaming",
    rating: 9.2,
    price: "249€",
    highlight: "Meilleur son spatial gaming",
  },
  {
    rank: 4,
    name: "LG 27GR95QE",
    category: "Moniteur OLED",
    rating: 9.5,
    price: "799€",
    highlight: "Meilleur moniteur OLED gaming",
  },
  {
    rank: 5,
    name: "Elgato Stream Deck MK.2",
    category: "Streaming",
    rating: 9.0,
    price: "149€",
    highlight: "Indispensable pour streamers",
  },
];

const BestPicks = () => {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-3">
              🏆 Best Of du <span className="text-primary text-glow-sm">Mois</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Nos recommandations #1 dans chaque catégorie, mises à jour mensuellement
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-3">
          {picks.map((pick, i) => (
            <AnimatedSection key={pick.name} variant="fade-up" delay={i * 0.08}>
              <a
                href="#"
                className="group flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/40 hover:box-glow transition-all duration-300"
              >
                {/* Rank */}
                <div className="flex-shrink-0 w-10 h-10 rounded-md gradient-neon flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                  #{pick.rank}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-display text-sm font-semibold tracking-wide group-hover:text-primary transition-colors truncate">
                      {pick.name}
                    </h3>
                    <span className="hidden sm:block text-xs text-muted-foreground">
                      — {pick.category}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{pick.highlight}</p>
                </div>

                {/* Rating */}
                <div className="flex-shrink-0 flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="font-display text-sm font-bold text-primary">
                    {pick.rating}
                  </span>
                </div>

                {/* Price */}
                <span className="hidden sm:block flex-shrink-0 text-sm font-semibold text-foreground">
                  {pick.price}
                </span>

                <ExternalLink className="flex-shrink-0 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPicks;
