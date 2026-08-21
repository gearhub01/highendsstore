import { Smartphone, GitCompare } from "lucide-react";
import { MODEL_LABELS, type IphoneModel } from "@/config/iphone-collection";

/**
 * Badge indiquant le modèle concerné par un article de la collection :
 * iPhone 18 Pro, iPhone 18 Pro Max, ou les deux (article comparatif).
 * Le libellé se change dans src/config/iphone-collection.ts (MODEL_LABELS).
 */
const ModelBadge = ({ model, className = "" }: { model: IphoneModel; className?: string }) => {
  const Icon = model === "both" ? GitCompare : Smartphone;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-semibold text-foreground ${className}`}
    >
      <Icon className="h-3 w-3 text-primary" />
      {MODEL_LABELS[model]}
    </span>
  );
};

export default ModelBadge;
