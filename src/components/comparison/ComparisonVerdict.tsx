import { Trophy, ThumbsUp, ThumbsDown } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProductVerdict {
  name: string;
  rating: number;
  pros: string[];
  cons: string[];
  bestFor: string;
}

interface ComparisonVerdictProps {
  winner: string;
  verdicts: ProductVerdict[];
  conclusion: string;
}

const ComparisonVerdict = ({ winner, verdicts, conclusion }: ComparisonVerdictProps) => {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-8">
            {t("ui.verdict_1")} <span className="gradient-neon-text">{t("ui.verdict_2")}</span>
          </h2>

          {/* Winner banner */}
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-6 mb-8 box-glow">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="h-6 w-6 text-primary" />
              <span className="font-display text-sm uppercase tracking-wider text-primary">{t("ui.winner")}</span>
            </div>
            <h3 className="text-xl font-display font-bold text-foreground">{winner}</h3>
          </div>

          {/* Per-product verdicts */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {verdicts.map((v) => (
              <div
                key={v.name}
                className={`rounded-lg border p-5 transition-all ${
                  v.name === winner
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display text-sm font-bold text-foreground">{v.name}</h4>
                  <span className="text-sm font-bold text-primary">{v.rating}/10</span>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-primary mb-1.5">
                      <ThumbsUp className="h-3 w-3" />
                      <span className="font-semibold uppercase tracking-wider">{t("ui.pros")}</span>
                    </div>
                    <ul className="space-y-1">
                      {v.pros.slice(0, 2).map((pro, i) => (
                        <li key={i} className="text-xs text-muted-foreground">+ {pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-destructive mb-1.5">
                      <ThumbsDown className="h-3 w-3" />
                      <span className="font-semibold uppercase tracking-wider">{t("ui.cons")}</span>
                    </div>
                    <ul className="space-y-1">
                      {v.cons.slice(0, 2).map((con, i) => (
                        <li key={i} className="text-xs text-muted-foreground">− {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">{t("ui.idealFor")} : </span>
                  <span className="text-xs font-medium text-foreground">{v.bestFor}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-sm uppercase tracking-wider text-primary mb-3">{t("ui.conclusion")}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{conclusion}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonVerdict;
