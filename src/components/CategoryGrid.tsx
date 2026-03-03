import { Keyboard, Mouse, Headphones, Monitor, Video } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const categories = [
  {
    icon: Keyboard,
    title: "Claviers",
    description: "Mécaniques, membrane, sans-fil — trouvez le switch parfait",
    count: "15 guides",
    href: "/guides/best-gaming-keyboards",
  },
  {
    icon: Mouse,
    title: "Souris",
    description: "DPI, ergonomie, poids — la souris idéale pour votre grip",
    count: "12 guides",
    href: "/guides",
  },
  {
    icon: Headphones,
    title: "Casques",
    description: "Son immersif, micro crystal clear, confort longue durée",
    count: "10 guides",
    href: "/guides",
  },
  {
    icon: Monitor,
    title: "Moniteurs",
    description: "144Hz, 240Hz, 4K — l'écran qui change votre gameplay",
    count: "8 guides",
    href: "/guides",
  },
  {
    icon: Video,
    title: "Streaming",
    description: "Webcams, éclairage, micros — setup de streamer pro",
    count: "6 guides",
    href: "/guides",
  },
];

const CategoryGrid = () => {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-3">
              Explorez par <span className="text-primary text-glow-sm">Catégorie</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Des guides spécialisés pour chaque type de périphérique gaming
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fade-up" delay={0.1}>
          <div className="px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {categories.map((cat) => (
                  <CarouselItem
                    key={cat.title}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                  >
                    <Link
                      to={cat.href}
                      className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:box-glow transition-all duration-300 block h-full"
                    >
                      <cat.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-sm font-semibold tracking-wider uppercase mb-2 text-foreground">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                        {cat.description}
                      </p>
                      <span className="text-xs font-medium text-primary">{cat.count}</span>
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
