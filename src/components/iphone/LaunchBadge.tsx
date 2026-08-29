import { Sparkles } from "lucide-react";
import { COLLECTION_BADGE } from "@/config/iphone-collection";
import { useTranslation } from "react-i18next";

/**
 * Badge « Lancement » / « Édition limitée » posé sur les cartes de la
 * collection temporaire. Le libellé se change dans la config (COLLECTION_BADGE).
 */
const LaunchBadge = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <span className={`inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-semibold text-primary ${className}`}>
      <Sparkles className="h-3 w-3" />
      {t("ui.launch", { defaultValue: COLLECTION_BADGE })}
    </span>
  );
};

export default LaunchBadge;
