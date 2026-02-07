import { Keyboard, Mouse, Headphones, Monitor, Video } from "lucide-react";

const categories = [
  {
    icon: Keyboard,
    title: "Claviers",
    description: "Mécaniques, membrane, sans-fil — trouvez le switch parfait",
    count: "15 guides",
    href: "#",
  },
  {
    icon: Mouse,
    title: "Souris",
    description: "DPI, ergonomie, poids — la souris idéale pour votre grip",
    count: "12 guides",
    href: "#",
  },
  {
    icon: Headphones,
    title: "Casques",
    description: "Son immersif, micro crystal clear, confort longue durée",
    count: "10 guides",
    href: "#",
  },
  {
    icon: Monitor,
    title: "Moniteurs",
    description: "144Hz, 240Hz, 4K — l'écran qui change votre gameplay",
    count: "8 guides",
    href: "#",
  },
  {
    icon: Video,
    title: "Streaming",
    description: "Webcams, éclairage, micros — setup de streamer pro",
    count: "6 guides",
    href: "#",
  },
];

const CategoryGrid = () => {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-3">
            Explorez par <span className="text-primary text-glow-sm">Catégorie</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Des guides spécialisés pour chaque type de périphérique gaming
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:box-glow transition-all duration-300"
            >
              <cat.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-sm font-semibold tracking-wider uppercase mb-2 text-foreground">
                {cat.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                {cat.description}
              </p>
              <span className="text-xs font-medium text-primary">{cat.count}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
