import { ShoppingCart, ExternalLink } from "lucide-react";
import { MODEL_LABELS } from "@/config/iphone-collection";
import { trackCtaClick } from "@/lib/track-cta";
import { useTranslation } from "react-i18next";

/**
 * Bouton d'affiliation Amazon compact et paramétrable par modèle.
 *
 * IMPORTANT (programme Amazon Associates) : ce composant n'affiche JAMAIS
 * de prix, de réduction ni d'information de stock. Seul un lien sortant est
 * rendu. Le prix reste consultable uniquement sur Amazon.
 *
 * Chaque clic est envoyé à l'analytics (table `cta_clicks`) pour mesurer
 * quelles sections et quels modèles convertissent le mieux.
 *
 * Si `url` est vide, le bloc n'est pas affiché (article en préparation).
 */
interface PriceCTAProps {
  /** Modèle concerné : "pro" ou "pro_max". */
  model: "pro" | "pro_max";
  /** URL affiliée fournie par article/section. Vide = bouton masqué. */
  url: string;
  /** Nom du produit affiché en petit au-dessus du bouton. */
  productName?: string;
  /** Libellé du bouton. */
  label?: string;
  /** Analytics : slug de l'article d'où part le clic. */
  articleSlug?: string;
  /** Analytics : identifiant de la section (ou "hub-card"). */
  sectionId?: string;
  /** Analytics : emplacement du bouton. */
  placement?: "hub-card" | "article-section" | "hub-header";
}

const PriceCTA = ({
  model,
  url,
  productName,
  label,
  articleSlug,
  sectionId,
  placement = "article-section",
}: PriceCTAProps) => {
  const { t } = useTranslation();
  if (!url) return null;

  const handleClick = () => {
    trackCtaClick({
      articleSlug: articleSlug ?? "inconnu",
      sectionId,
      model,
      productName,
      destinationUrl: url,
      placement,
    });
  };

  return (
    <div className="my-5">
      {productName && (
        <p className="mb-1.5 text-xs font-medium text-muted-foreground">
          {productName}
        </p>
      )}
      <a
        href={url}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        <ShoppingCart className="h-4 w-4" />
        <span>{label ?? t("ui.viewOnAmazon")}</span>
        <span className="opacity-70">·</span>
        <span className="opacity-90">{MODEL_LABELS[model]}</span>
        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
      </a>
    </div>
  );
};


export default PriceCTA;
