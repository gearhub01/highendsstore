import { Link } from "react-router-dom";
import { ChevronRight, Star, Clock, CalendarDays, User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface ReviewHeroProps {
  category: string;
  categoryHref: string;
  productName: string;
  tagline: string;
  rating: number;
  author: string;
  date: string;
  readTime: string;
  updatedDate: string;
}

const ReviewHero = ({
  category,
  categoryHref,
  productName,
  tagline,
  rating,
  author,
  date,
  readTime,
  updatedDate,
}: ReviewHeroProps) => {
  return (
    <section className="pt-24 pb-12 border-b border-border">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fade-up" duration={0.5}>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/reviews" className="hover:text-primary transition-colors">Reviews</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={categoryHref} className="hover:text-primary transition-colors">{category}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{productName}</span>
          </nav>
        </AnimatedSection>

        <div className="max-w-3xl">
          <AnimatedSection variant="fade-up" delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/30">
                Review
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                Mis à jour : {updatedDate}
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.15}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-3">
              Test du{" "}
              <span className="text-primary text-glow-sm">{productName}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{tagline}</p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              {/* Score badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <span className="font-display text-2xl font-bold text-primary">{rating}</span>
                <span className="text-sm text-muted-foreground">/10</span>
              </div>

              <span className="h-8 w-px bg-border" />

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4 text-primary" />
                  {author}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {readTime}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ReviewHero;
