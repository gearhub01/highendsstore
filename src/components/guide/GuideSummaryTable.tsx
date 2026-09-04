import { Star, ExternalLink, Award } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useTranslation } from "react-i18next";

export interface SummaryProduct {
  rank: number;
  name: string;
  highlight: string;
  rating: number;
  bestFor: string;
}

interface GuideSummaryTableProps {
  products: SummaryProduct[];
}

const GuideSummaryTable = ({ products }: GuideSummaryTableProps) => {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-display font-bold">
              {t("ui.quickSummary_1")} <span className="gradient-neon-text">{products.length}</span> {t("ui.quickSummary_2")}
            </h2>
          </div>

          <div className="rounded-lg border border-border overflow-hidden bg-card">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="font-display text-xs tracking-wider uppercase text-primary w-12">#</TableHead>
                  <TableHead className="font-display text-xs tracking-wider uppercase text-primary">{t("ui.product")}</TableHead>
                  <TableHead className="font-display text-xs tracking-wider uppercase text-primary hidden sm:table-cell">{t("ui.idealFor")}</TableHead>
                  <TableHead className="font-display text-xs tracking-wider uppercase text-primary text-center">{t("ui.rating")}</TableHead>
                  <TableHead className="font-display text-xs tracking-wider uppercase text-primary w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product.rank}
                    className="border-border hover:bg-primary/5 cursor-pointer transition-colors"
                  >
                    <TableCell>
                      <div className={`w-7 h-7 rounded flex items-center justify-center font-display font-bold text-xs ${
                        product.rank === 1
                          ? "gradient-neon text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}>
                        {product.rank}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <span className="font-semibold text-foreground">{product.name}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{product.highlight}</p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-sm text-muted-foreground">
                      {product.bestFor}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="inline-flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 text-primary fill-primary" />
                        <span className="font-display text-sm font-bold text-primary">{product.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSummaryTable;
