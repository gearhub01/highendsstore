import { ExternalLink, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from "react-i18next";

interface ReviewVerdictProps {
  rating: number;
  price: string;
  verdict: string;
  bestFor: string;
  buyLink?: string;
}

const ReviewVerdict = ({ rating, price, verdict, bestFor, buyLink = "#" }: ReviewVerdictProps) => {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fade-up">
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 box-glow">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <h2 className="font-display text-sm uppercase tracking-widest text-primary font-bold">
                  {t("ui.verdict_1")} {t("ui.verdict_2")}
                </h2>
              </div>

              <p className="text-foreground leading-relaxed mb-6">{verdict}</p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-primary/20">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-xs text-muted-foreground mb-1">{t("ui.rating")}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="font-display text-xl font-bold text-primary">{rating}/10</span>
                    </div>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <span className="block text-xs text-muted-foreground mb-1">{t("ui.price")}</span>
                    <span className="font-display text-xl font-bold text-foreground">{price}</span>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <span className="block text-xs text-muted-foreground mb-1">{t("ui.idealFor")}</span>
                    <span className="text-sm font-medium text-foreground">{bestFor}</span>
                  </div>
                </div>

                <a
                  href={buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-display text-xs font-bold tracking-wider uppercase gradient-neon text-primary-foreground rounded-md box-glow hover:scale-105 transition-transform shrink-0"
                >
                  {t("ui.viewOnAmazon")}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ReviewVerdict;
