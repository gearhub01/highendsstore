import { ThumbsUp, ThumbsDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from "react-i18next";

interface ReviewProsConsProps {
  pros: string[];
  cons: string[];
}

const ReviewProsCons = ({ pros, cons }: ReviewProsConsProps) => {
  const { t } = useTranslation();
  return (
    <section className="py-12 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fade-up">
            <h2 className="text-2xl font-display font-bold mb-6">
              {t("ui.prosCons_1")} <span className="gradient-neon-text">{t("ui.prosCons_2")}</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <AnimatedSection variant="slide-left" delay={0.1}>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsUp className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-sm font-bold tracking-wider uppercase text-primary">
                    {t("ui.pros")}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="text-primary mt-0.5 font-bold">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Cons */}
            <AnimatedSection variant="slide-right" delay={0.1}>
              <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsDown className="h-5 w-5 text-destructive" />
                  <h3 className="font-display text-sm font-bold tracking-wider uppercase text-destructive">
                    {t("ui.cons")}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="text-destructive mt-0.5 font-bold">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewProsCons;
