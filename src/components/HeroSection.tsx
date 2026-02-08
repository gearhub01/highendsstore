import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-primary text-sm font-display tracking-widest uppercase"
          >
            <Star className="h-4 w-4 fill-primary" />
            <span>Guides & Reviews Gaming 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight"
          >
            Trouvez le{" "}
            <span className="text-primary text-glow">Setup Gaming</span>{" "}
            Parfait
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            Guides d'achat experts, critiques honnêtes et comparaisons détaillées pour claviers, souris, casques et moniteurs gaming.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
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
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 pt-4 text-sm text-muted-foreground"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
