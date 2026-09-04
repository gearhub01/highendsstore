import { useTranslation } from "react-i18next";
export interface ComparisonProduct {
  name: string;
  rating: number;
  image?: string;
  specs: Record<string, string>;
  isBestPick?: boolean;
}

interface ComparisonTableProps {
  products: ComparisonProduct[];
  specLabels: { key: string; label: string }[];
}

const ComparisonTable = ({ products, specLabels }: ComparisonTableProps) => {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-6">
            {t("ui.comparisonTable_1")} <span className="gradient-neon-text">{t("ui.comparisonTable_2")}</span>
          </h2>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left px-4 py-3 font-display text-xs uppercase tracking-wider text-muted-foreground w-40">
                    {t("ui.feature")}
                  </th>
                  {products.map((p) => (
                    <th key={p.name} className="px-4 py-3 text-center min-w-[160px]">
                      <div className="flex flex-col items-center gap-1">
                        {p.isBestPick && (
                          <span className="text-[10px] uppercase tracking-wider text-primary font-semibold">
                            ⭐ {t("ui.bestPick")}
                          </span>
                        )}
                        <span className="font-display text-sm font-bold text-foreground">{p.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Rating row */}
                <tr className="border-t border-border hover:bg-secondary/20 transition-colors">
                  <td className="px-4 py-3 font-medium text-muted-foreground">{t("ui.rating")}</td>
                  {products.map((p) => (
                    <td key={p.name} className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm">
                        {p.rating}/10
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Spec rows */}
                {specLabels.map((spec, i) => (
                  <tr
                    key={spec.key}
                    className={`border-t border-border hover:bg-secondary/20 transition-colors ${i % 2 === 0 ? "bg-card/30" : ""}`}
                  >
                    <td className="px-4 py-3 font-medium text-muted-foreground">{spec.label}</td>
                    {products.map((p) => (
                      <td key={p.name} className="px-4 py-3 text-center text-foreground">
                        {p.specs[spec.key] || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
