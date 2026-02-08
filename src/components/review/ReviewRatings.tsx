import AnimatedSection from "@/components/AnimatedSection";

export interface SubRating {
  label: string;
  score: number;
  maxScore?: number;
}

interface ReviewRatingsProps {
  overallScore: number;
  subRatings: SubRating[];
}

const ReviewRatings = ({ overallScore, subRatings }: ReviewRatingsProps) => {
  const getColor = (score: number) => {
    if (score >= 9) return "from-primary to-neon-purple";
    if (score >= 7) return "from-primary to-primary";
    return "from-muted-foreground to-muted-foreground";
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fade-up">
            <h2 className="text-2xl font-display font-bold mb-6">
              Notes <span className="gradient-neon-text">Détaillées</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Overall score circle */}
            <AnimatedSection variant="scale-in" delay={0.1}>
              <div className="flex flex-col items-center justify-center p-8 rounded-lg border border-primary/30 bg-primary/5 box-glow">
                <span className="font-display text-xs uppercase tracking-widest text-primary mb-3">
                  Note Globale
                </span>
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50" cy="50" r="42"
                      fill="none"
                      stroke="hsl(220 15% 18%)"
                      strokeWidth="6"
                    />
                    <circle
                      cx="50" cy="50" r="42"
                      fill="none"
                      stroke="hsl(180 100% 50%)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${overallScore * 26.4} 264`}
                      className="drop-shadow-[0_0_8px_hsl(180_100%_50%/0.5)]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary">{overallScore}</span>
                    <span className="text-xs text-muted-foreground">/10</span>
                  </div>
                </div>
                <span className="mt-3 text-sm font-medium text-foreground">
                  {overallScore >= 9 ? "Excellent" : overallScore >= 8 ? "Très Bien" : overallScore >= 7 ? "Bien" : "Correct"}
                </span>
              </div>
            </AnimatedSection>

            {/* Sub-ratings */}
            <div className="md:col-span-2 space-y-4">
              {subRatings.map((sub, i) => (
                <AnimatedSection key={sub.label} variant="slide-left" delay={0.1 + i * 0.05}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground w-32 shrink-0">{sub.label}</span>
                    <div className="flex-1 h-2.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${getColor(sub.score)} transition-all duration-700`}
                        style={{ width: `${sub.score * 10}%` }}
                      />
                    </div>
                    <span className="font-display text-sm font-bold text-primary w-10 text-right">
                      {sub.score}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewRatings;
