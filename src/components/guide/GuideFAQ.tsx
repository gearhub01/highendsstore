import { HelpCircle } from "lucide-react";
import {
import { useTranslation } from "react-i18next";
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface GuideFAQProps {
  items: FAQItem[];
}

const GuideFAQ = ({ items }: GuideFAQProps) => {
  const { t } = useTranslation();
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-display font-bold">
              {t("ui.faq_1")} <span className="gradient-neon-text">{t("ui.faq_2")}</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-lg px-5 bg-card hover:border-primary/30 transition-colors data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default GuideFAQ;
