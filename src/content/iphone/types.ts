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

/** Tableau comparatif rendu en vrai <table> (défilement horizontal sur mobile). */
export interface SpecTable {
  /** Légende affichée sous le tableau (source, date de vérification…). */
  caption?: string;
  /** En-têtes de colonnes (la première colonne décrit la caractéristique). */
  headers: string[];
  /** Lignes du tableau : autant de cellules que d'en-têtes. */
  rows: string[][];
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
  /** Tableau comparatif optionnel affiché après les paragraphes. */
  table?: SpecTable;
  /** Liens internes contextuels affichés en fin de section. */
  links?: { label: string; href: string }[];
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
  /** Encadré d'avertissement affiché en haut de l'article (état des données). */
  notice?: string;
  /** Maillage interne : contenus liés affichés en fin d'article. */
  related?: { label: string; href: string }[];
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

/**
 * ---------------------------------------------------------------------------
 * TRADUCTIONS
 * ---------------------------------------------------------------------------
 * Le français est la version de référence. Une traduction (`en.ts`) déclare en
 * plus `sourceUpdatedAt` : la date de la version française à partir de laquelle
 * elle a été écrite. Si `fr.updatedAt` devient postérieur à cette date, la
 * traduction est considérée comme PÉRIMÉE : on sert alors le français avec un
 * bandeau, plutôt qu'une traduction qui ne correspond plus au texte source.
 */
export interface TranslatedArticle extends CollectionArticle {
  /** Date (AAAA-MM-JJ) de la version française traduite. */
  sourceUpdatedAt: string;
}

/** Langues d'interface du site. Seul l'anglais a des traductions d'articles. */
export type SiteLocale = "fr" | "en" | "es" | "de";

/** Un article = un dossier `src/content/iphone/<slug>/` avec ses locales. */
export interface ArticleEntry {
  /** Slug identique dans toutes les langues (jamais traduit). */
  slug: string;
  /** Version française : référence, toujours présente. */
  fr: CollectionArticle;
  /** Version anglaise, si elle existe. */
  en?: TranslatedArticle;
}
