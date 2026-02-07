import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gaming setup avec clavier mécanique et souris RGB"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-2 text-primary text-sm font-display tracking-widest uppercase animate-slide-up">
            <Star className="h-4 w-4 fill-primary" />
            <span>Guides & Reviews Gaming 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Trouvez le{" "}
            <span className="text-primary text-glow">Setup Gaming</span>{" "}
            Parfait
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Guides d'achat experts, critiques honnêtes et comparaisons détaillées pour claviers, souris, casques et moniteurs gaming.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#guides"
              className="inline-flex items-center gap-2 px-6 py-3 font-display text-sm font-semibold tracking-wider uppercase gradient-neon text-primary-foreground rounded-md box-glow hover:scale-105 transition-transform"
            >
              Explorer les Guides
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 px-6 py-3 font-display text-sm font-semibold tracking-wider uppercase border border-primary/40 text-primary rounded-md hover:bg-primary/10 transition-colors"
            >
              Parcourir les Catégories
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <span className="flex items-center gap-1">
              <span className="text-primary font-bold">200+</span> Produits testés
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1">
              <span className="text-primary font-bold">50+</span> Guides d'achat
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1">
              <span className="text-primary font-bold">100%</span> Indépendant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
