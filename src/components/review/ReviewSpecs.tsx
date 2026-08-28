import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from "react-i18next";

export interface SpecGroup {
  groupName: string;
  specs: { label: string; value: string }[];
}

interface ReviewSpecsProps {
  specGroups: SpecGroup[];
}

const ReviewSpecs = ({ specGroups }: ReviewSpecsProps) => {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fade-up">
            <h2 className="text-2xl font-display font-bold mb-6">
              {t("ui.techSheet_1")} <span className="gradient-neon-text">{t("ui.techSheet_2")}</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specGroups.map((group, gi) => (
              <AnimatedSection key={group.groupName} variant="fade-up" delay={gi * 0.1}>
                <div className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-display text-xs font-bold tracking-wider uppercase text-primary mb-4">
                    {group.groupName}
                  </h3>
                  <div className="space-y-3">
                    {group.specs.map((spec, i) => (
                      <div
                        key={spec.label}
                        className={`flex items-center justify-between py-2 ${
                          i < group.specs.length - 1 ? "border-b border-border" : ""
                        }`}
                      >
                        <span className="text-sm text-muted-foreground">{spec.label}</span>
                        <span className="text-sm font-medium text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSpecs;
