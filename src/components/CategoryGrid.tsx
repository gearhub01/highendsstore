import { Keyboard, Mouse, Headphones, Monitor, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const CategoryGrid = () => {
  const { t } = useTranslation();
  const categories = [
    { icon: Keyboard, key: "keyboards", count: 15, href: "/guides/best-gaming-keyboards" },
    { icon: Mouse, key: "mice", count: 12, href: "/guides" },
    { icon: Headphones, key: "headsets", count: 10, href: "/guides" },
    { icon: Monitor, key: "monitors", count: 8, href: "/guides" },
    { icon: Video, key: "streaming", count: 6, href: "/guides" },
  ];

  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-3">
              {t("grid.title_1")} <span className="text-primary text-glow-sm">{t("grid.title_accent")}</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">{t("grid.subtitle")}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fade-up" delay={0.1}>
          <div className="px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {categories.map((cat) => (
                  <CarouselItem
                    key={cat.key}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                  >
                    <Link
                      to={cat.href}
                      className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:box-glow transition-all duration-300 block h-full"
                    >
                      <cat.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-sm font-semibold tracking-wider uppercase mb-2 text-foreground">
                        {t(`cats.${cat.key}`)}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                        {t(`cats.${cat.key}_desc`)}
                      </p>
                      <span className="text-xs font-medium text-primary">
                        {t("nav.countGuides", { count: cat.count })}
                      </span>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CategoryGrid;
