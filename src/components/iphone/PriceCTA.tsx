import { ShoppingCart, ExternalLink } from "lucide-react";
import { MODEL_LABELS } from "@/config/iphone-collection";

/**
 * Bouton d'affiliation Amazon réutilisable, paramétrable par modèle.
 *
 * IMPORTANT (programme Amazon Associates) : ce composant n'affiche JAMAIS
 * de prix, de réduction ni d'information de stock. Seul un lien sortant est
 * rendu. Le prix reste consultable uniquement sur Amazon.
 *
 * Si `url` est vide, le bloc n'est pas affiché (article en préparation).
 */
interface PriceCTAProps {
  /** Modèle concerné : "pro" ou "pro_max". Affiché sur le bouton. */
  model: "pro" | "pro_max";
  /** URL affiliée fournie par article et par modèle. Vide = bouton masqué. */
  url: string;
  /** Nom du produit affiché au-dessus du bouton. */
  productName: string;
  /** Libellé du bouton. */
  label?: string;
}

const PriceCTA = ({ model, url, productName, label = "Voir le prix sur Amazon" }: PriceCTAProps) => {
  if (!url) return null;

  return (
    <div className="my-8 rounded-xl border border-primary/30 bg-card p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <p className="text-[11px] font-display uppercase tracking-widest text-primary">
          Lien partenaire
        </p>
        <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          {MODEL_LABELS[model]}
        </span>
      </div>
      <p className="text-sm font-semibold text-foreground mb-4">{productName}</p>

      <a
        href={url}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        <ShoppingCart className="h-4 w-4" />
        {label} — {MODEL_LABELS[model]}
        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
      </a>

      <p className="mt-3 text-xs text-muted-foreground">
        Prix et disponibilité sont affichés sur Amazon au moment de l'achat. En tant que
        Partenaire Amazon, nous percevons une commission sur les achats éligibles.
      </p>
    </div>
  );
};

export default PriceCTA;
