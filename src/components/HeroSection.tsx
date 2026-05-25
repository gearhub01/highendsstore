import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-gaming.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gaming setup"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 pt-24">
        <div className="max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-primary text-sm font-display tracking-widest uppercase"
          >
            <Star className="h-4 w-4 fill-primary" />
            <span>{t("hero.eyebrow")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight"
          >
            {t("hero.title_1")}{" "}
            <span className="text-primary text-glow">{t("hero.title_accent")}</span>{" "}
            {t("hero.title_2")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            {t("hero.subtitle")}
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
              {t("hero.cta_primary")}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 px-6 py-3 font-display text-sm font-semibold tracking-wider uppercase border border-primary/40 text-primary rounded-md hover:bg-primary/10 transition-colors"
            >
              {t("hero.cta_secondary")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 pt-4 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <span className="text-primary font-bold">200+</span> {t("hero.stat_products")}
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1">
              <span className="text-primary font-bold">50+</span> {t("hero.stat_guides")}
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1">
              <span className="text-primary font-bold">100%</span> {t("hero.stat_independent")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
