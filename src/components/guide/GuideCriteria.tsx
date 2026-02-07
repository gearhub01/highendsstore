import { Lightbulb } from "lucide-react";

export interface Criterion {
  icon: string;
  title: string;
  description: string;
  tip: string;
}

interface GuideCriteriaProps {
  criteria: Criterion[];
}

const GuideCriteria = ({ criteria }: GuideCriteriaProps) => {
  return (
    <section className="py-12 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-display font-bold">
              Comment <span className="gradient-neon-text">Choisir</span>
            </h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Les critères essentiels à comprendre avant d'acheter
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {criteria.map((criterion) => (
              <div
                key={criterion.title}
                className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{criterion.icon}</span>
                  <div>
                    <h3 className="font-display text-sm font-semibold tracking-wide uppercase text-foreground">
                      {criterion.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {criterion.description}
                </p>
                <div className="flex items-start gap-2 px-3 py-2 rounded bg-primary/5 border border-primary/10">
                  <span className="text-primary text-xs font-display font-bold tracking-wider uppercase mt-0.5">Tip</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {criterion.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideCriteria;
