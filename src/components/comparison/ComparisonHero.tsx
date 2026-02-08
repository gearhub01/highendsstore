import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ComparisonHeroProps {
  category: string;
  categoryHref: string;
  title: string;
  subtitle: string;
  productCount: number;
}

const ComparisonHero = ({ category, categoryHref, title, subtitle, productCount }: ComparisonHeroProps) => {
  return (
    <section className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={categoryHref} className="hover:text-primary transition-colors">{category}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Comparaison</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30">
              Comparaison
            </span>
            <span className="text-sm text-muted-foreground">{productCount} produits comparés</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {title.split(" ").map((word, i) =>
              i === title.split(" ").length - 1 ? (
                <span key={i} className="text-primary text-glow-sm">{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>

          <p className="text-muted-foreground leading-relaxed max-w-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonHero;
