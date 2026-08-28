import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Skeleton } from "@/components/ui/skeleton";
import { useReviews, FALLBACK_IMAGE } from "@/hooks/use-content";
import SEOHead from "@/components/SEOHead";

const Reviews = () => {
  const { data: reviews = [], isLoading } = useReviews();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tests de périphériques gaming"
        description="Tous nos tests de périphériques gaming, menés sur banc réel : claviers, souris, casques et moniteurs, avec mesures et verdict sans complaisance."
        type="website"
        canonicalPath="/reviews"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fade-up">
            <div className="max-w-2xl mb-10">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Nos <span className="gradient-neon-text">Reviews</span>
              </h1>
              <p className="text-muted-foreground">
                Tests complets et notes détaillées des meilleurs périphériques gaming.
              </p>
            </div>
          </AnimatedSection>

          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-72 rounded-xl" />
              ))}
            </div>
          ) : reviews.length === 0 ? (
            <p className="text-muted-foreground">Aucune review publiée pour le moment.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <AnimatedSection key={review.id} variant="fade-up" delay={0.1 + i * 0.05}>
                  <Link
                    to={`/reviews/${review.slug}`}
                    className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={review.image || FALLBACK_IMAGE}
                        alt={review.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500">
                          <Star className="h-3 w-3" /> Review
                        </span>
                        {review.rating && (
                          <span className="flex items-center gap-0.5 text-xs font-bold text-primary">
                            <Star className="h-3 w-3 fill-primary" />
                            {review.rating}
                          </span>
                        )}
                      </div>
                      <h2 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {review.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{review.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Lire le test <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
