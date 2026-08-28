/**
 * Types partagés par les articles de la collection iPhone 18 Pro / Pro Max.
 * Ils sont re-exportés par `src/config/iphone-collection.ts` : les composants
 * peuvent continuer à les importer depuis la config, comme avant.
 */

/**
 * "pro"      → article dédié à l'iPhone 18 Pro
 * "pro_max"  → article dédié à l'iPhone 18 Pro Max
 * "both"     → article comparatif / valable pour les deux modèles
 */
export type IphoneModel = "pro" | "pro_max" | "both";

/** Métadonnées SEO éditables, une par page. */
export interface CollectionSeo {
  /** Balise <title> (sans le suffixe « | GearHub », ajouté automatiquement). */
  title: string;
  /** Meta description + og:description (≈ 140-155 caractères). */
  description: string;
  /** Image Open Graph (URL absolue https). Optionnel. */
  ogImage?: string;
}

/**
 * Liens Amazon par modèle.
 * Laisse une chaîne vide tant que tu n'as pas le lien affilié : le bouton
 * correspondant est alors masqué. AUCUN prix ni stock ne doit figurer ici.
 */
export interface AmazonLink {
  /** URL affiliée du produit pour ce modèle. */
  url: string;
  /** Nom du produit affiché au-dessus du bouton. */
  productName: string;
}

export interface ArticleSection {
  /** Ancre utilisée par le sommaire (minuscules, sans accent ni espace). */
  id: string;
  /** Titre H2 de la section. */
  heading: string;
  /** Paragraphes de la section. */
  paragraphs: string[];
  /** Liste à puces optionnelle affichée après les paragraphes. */
  bullets?: string[];
  /**
   * Liens Amazon spécifiques à cette section.
   * S'ils ne sont pas renseignés, l'article utilise ses liens généraux (`amazon`).
   */
  amazon?: Partial<Record<"pro" | "pro_max", AmazonLink>>;
  /**
   * Afficher un CTA Amazon à la fin de cette section.
   * Par défaut `false` : les CTA ne s'affichent que là où tu les demandes,
   * pour ne pas surcharger la lecture de l'article.
   */
  showCta?: boolean;
}

export interface CollectionArticle {
  /** Identifiant d'URL : /iphone-18-pro/<slug> */
  slug: string;
  /** Modèle concerné par l'article : "pro", "pro_max" ou "both" (comparatif). */
  model: IphoneModel;
  /** Titre H1 de la page. */
  title: string;
  /** Résumé affiché sur les cartes du hub. */
  excerpt: string;
  /** Image de couverture (URL absolue). */
  image: string;
  /** Date de dernière mise à jour, format AAAA-MM-JJ. */
  updatedAt: string;
  /** Date de première publication, format AAAA-MM-JJ. */
  publishedAt?: string;
  /** Chapeau affiché sous le H1. */
  intro: string;
  /** Corps de l'article : une entrée = une section H2. */
  sections: ArticleSection[];
  /** Questions/réponses affichées en accordéon. */
  faq: { question: string; answer: string }[];
  /**
   * Boutons Amazon par modèle. Un article "pro" n'a besoin que de `pro`,
   * un comparatif ("both") peut renseigner les deux.
   * Utilisés comme fallback si une section n'a pas de liens propres.
   */
  amazon: Partial<Record<"pro" | "pro_max", AmazonLink>>;
  /** Texte du bouton (par défaut « Voir sur Amazon »). */
  amazonLabel?: string;
  /** Métadonnées SEO propres à l'article. */
  seo: CollectionSeo;
}
