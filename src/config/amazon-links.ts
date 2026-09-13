/**
 * ============================================================================
 * LIENS AMAZON — SOURCE UNIQUE
 * ============================================================================
 * Tous les boutons « Voir sur Amazon » du site utilisent ces liens.
 * Pour changer un lien, il suffit de le modifier ICI : tous les articles,
 * les cartes du hub et les CTA suivent automatiquement.
 *
 * AMAZON_TAG : identifiant Partenaires Amazon. Laisse la chaîne vide tant que
 * tu n'as pas ton vrai identifiant — aucun tag fictif ne doit être publié.
 * Dès qu'il est renseigné, il est ajouté automatiquement à chaque lien.
 */

export const AMAZON_TAG = "";

/** Ajoute l'identifiant Partenaires au lien, s'il est renseigné. */
export function withTag(url: string): string {
  if (!AMAZON_TAG || !url) return url;
  return url + (url.includes("?") ? "&" : "?") + "tag=" + AMAZON_TAG;
}

/** Liens produits par modèle. */
export const AMAZON_URLS = {
  pro: withTag("https://link.amazon/B06uX8oKA"),
  pro_max: withTag("https://link.amazon/B0fVEdQm8"),
  duo: withTag("https://link.amazon/B0dMHnrBN"),
} as const;

/** Blocs prêts à l'emploi pour le champ `amazon` des articles. */
export const AMAZON_PRO = { url: AMAZON_URLS.pro, productName: "iPhone 18 Pro" };
export const AMAZON_PRO_MAX = { url: AMAZON_URLS.pro_max, productName: "iPhone 18 Pro Max" };
export const AMAZON_DUO = { url: AMAZON_URLS.duo, productName: "iPhone Duo" };
