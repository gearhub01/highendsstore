import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GitCompareArrows, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from "react-i18next";

export interface RelatedItem {
  type: "guide" | "review" | "comparison";
  title: string;
  description: string;
  href: string;
}

const iconMap = {
  guide: BookOpen,
  review: Star,
  comparison: GitCompareArrows,
};

const labelKeyMap = {
  guide: "ui.buyingGuide",
  review: "ui.review",
  comparison: "ui.comparison",
};

const RelatedContent = ({ items }: { items: RelatedItem[] }) => {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fade-up">
            <h2 className="text-2xl font-display font-bold mb-6">
              {t("ui.related_1")} <span className="gradient-neon-text">{t("ui.related_2")}</span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const Icon = iconMap[item.type];
              return (
                <AnimatedSection key={item.href} variant="fade-up" delay={0.05}>
                  <Link
                    to={item.href}
                    className="group block rounded-lg border border-border bg-card p-5 hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {t(labelKeyMap[item.type])}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                      {t("ui.read")} <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
