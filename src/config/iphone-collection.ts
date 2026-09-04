/**
 * ============================================================================
 * COLLECTION TEMPORAIRE — iPhone 18 Pro & Pro Max (INDEX)
 * ============================================================================
 * Ce fichier ne contient plus le texte des articles : il sert d'index.
 * Chaque article vit dans son propre DOSSIER `src/content/iphone/<slug>/` :
 *   - `fr.ts`    → version française (référence, obligatoire)
 *   - `en.ts`    → version anglaise (optionnelle, avec `sourceUpdatedAt`)
 *   - `index.ts` → assemble les locales disponibles
 *
 * AJOUTER UN ARTICLE — 3 étapes :
 *  1. Duplique le dossier `src/content/iphone/_TEMPLATE/` en
 *     `src/content/iphone/<slug>/` (nom du dossier = slug exact).
 *  2. Remplis `fr.ts` (et `en.ts` si tu traduis) en respectant les contraintes
 *     commentées du gabarit, puis déclare les locales dans `index.ts`.
 *  3. Ajoute l'import en haut de ce fichier et l'entrée dans
 *     `COLLECTION_ENTRIES` — l'URL, le hub et le sitemap suivent automatiquement.
 *
 * TRADUCTIONS : seul l'anglais est traduit. En espagnol et en allemand,
 * l'interface est traduite mais le corps de l'article reste en français,
 * précédé d'un bandeau signalant l'absence de traduction.
 *
 * RÈGLE AMAZON ASSOCIATES : ne JAMAIS écrire de prix ni de disponibilité
 * en dur. Les boutons affichent uniquement "Voir sur Amazon".
 * ============================================================================
 */

import type {
  AmazonLink,
  ArticleEntry,
  ArticleSection,
  CollectionArticle,
  CollectionSeo,
  IphoneModel,
  SiteLocale,
  TranslatedArticle,
} from "../content/iphone/types";
import { entry as webcam4kPc } from "../content/iphone/webcam-4k-pc";
import { entry as accessoiresUsbCSetup } from "../content/iphone/accessoires-usb-c-setup";
import { entry as vs16Pro } from "../content/iphone/iphone-18-pro-vs-iphone-16-pro";
import { entry as vs17Pro } from "../content/iphone/iphone-18-pro-vs-iphone-17-pro";
import { entry as vsProMax } from "../content/iphone/iphone-18-pro-vs-pro-max";

// Types re-exportés : les composants continuent de les importer depuis ici.
export type {
  AmazonLink,
  ArticleEntry,
  ArticleSection,
  CollectionArticle,
  CollectionSeo,
  IphoneModel,
  SiteLocale,
  TranslatedArticle,
};

/** Chemin de base de la collection (utilisé pour les URLs et le sitemap). */
export const IPHONE_BASE_PATH = "/iphone-18-pro";


/** Nom affiché partout (menu, H1, breadcrumb). */
export const COLLECTION_NAME = "iPhone 18 Pro & Pro Max";


/**
 * ---------------------------------------------------------------------------
 * INTERRUPTEUR PRINCIPAL DE LA COLLECTION
 * ---------------------------------------------------------------------------
 * `COLLECTION_ENABLED` : mets `false` pour masquer d'un coup la collection
 * du menu, de la page d'accueil et du sitemap (le contenu reste en place et
 * les pages restent accessibles en direct — voir HIDE_PAGES_WHEN_DISABLED).
 *
 * `AUTO_HIDE_AFTER` : masquage automatique après cette date (30/09/2026).
 * Mets `null` pour désactiver le masquage automatique.
 *
 * `HIDE_PAGES_WHEN_DISABLED` : si `true`, les pages elles-mêmes renvoient
 * vers la 404 une fois la collection désactivée. `false` = les pages restent
 * lisibles (recommandé pour ne pas casser les liens déjà partagés).
 */
export const COLLECTION_ENABLED = true;
export const AUTO_HIDE_AFTER: string | null = "2026-09-30T23:59:59+02:00";
export const HIDE_PAGES_WHEN_DISABLED = false;

/** Date du keynote Apple visée par le compte à rebours. */
export const KEYNOTE_DATE = "2026-09-09T19:00:00+02:00";

/** Libellé du badge affiché sur toutes les cartes de la collection. */
export const COLLECTION_BADGE = "Lancement";

/** Libellés affichés pour chaque modèle (badges, onglets, boutons). */
export const MODEL_LABELS: Record<IphoneModel, string> = {
  pro: "iPhone 18 Pro",
  pro_max: "iPhone 18 Pro Max",
  both: "Pro & Pro Max",
};

/** Onglets de filtrage affichés sur la page hub. */
export const MODEL_TABS: { id: "all" | IphoneModel; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "pro", label: "Pro" },
  { id: "pro_max", label: "Pro Max" },
  { id: "both", label: "Comparatif" },
];

/**
 * Renvoie `true` si la collection doit être visible (menu, accueil, sitemap).
 * Combine l'interrupteur manuel et la date de masquage automatique.
 */
export function isCollectionVisible(now: Date = new Date()): boolean {
  if (!COLLECTION_ENABLED) return false;
  if (AUTO_HIDE_AFTER && now.getTime() > new Date(AUTO_HIDE_AFTER).getTime()) return false;
  return true;
}

/** SEO de la page hub /iphone-18-pro. */
export const HUB_SEO: CollectionSeo = {
  title: "iPhone 18 Pro & Pro Max — L'accessoire ultime de votre setup",
  description:
    "Collection lancement iPhone 18 Pro et Pro Max : webcam 4K pour votre PC, connexion au setup gaming et accessoires USB-C partagés. Guides, tests et comparatifs.",
};

/** CTA principaux du hub : un lien pour chaque iPhone. */
export const HUB_IPHONE_CTAS: Record<"pro" | "pro_max", AmazonLink> = {
  pro: {
    url: "https://www.amazon.fr/s?k=iPhone+18+Pro&tag=gearhub-21",
    productName: "iPhone 18 Pro",
  },
  pro_max: {
    url: "https://www.amazon.fr/s?k=iPhone+18+Pro+Max&tag=gearhub-21",
    productName: "iPhone 18 Pro Max",
  },
};

/** Texte de l'encart « pourquoi ici » sur le hub. */
export const WHY_HERE = {
  title: "Pourquoi une collection iPhone sur Highends Store ?",
  paragraphs: [
    "Highends Store parle de setup, pas de smartphones. Mais l'iPhone 18 Pro et le Pro Max entrent dans le setup par la porte du PC : captés en USB-C, ils deviennent une webcam 4K qui écrase n'importe quelle webcam dédiée, un micro d'appoint correct et une seconde source de capture pour le stream.",
    "Ajoute à cela des accessoires USB-C mutualisés — dock, câbles 240 W, SSD externes, supports de bureau — qui servent aussi bien au PC qu'au téléphone, et la logique devient évidente : on couvre ce qui touche à votre bureau, rien d'autre.",
  ],
};

/**
 * ---------------------------------------------------------------------------
 * ARTICLES DE LA COLLECTION
 * ---------------------------------------------------------------------------
 * Un dossier par article dans `src/content/iphone/`. L'ordre du tableau est
 * l'ordre d'affichage sur le hub. Voir la marche à suivre en haut du fichier.
 */

export const COLLECTION_ENTRIES: ArticleEntry[] = [
  webcam4kPc,
  accessoiresUsbCSetup,
  // Comparatifs (affichés aussi dans le filtre « Comparaison » de /guides)
  vs16Pro,
  vs17Pro,
  vsProMax,
];

/**
 * Versions FRANÇAISES de tous les articles.
 * Reste la référence pour le sitemap, les URLs et les métadonnées SEO.
 */
export const COLLECTION_ARTICLES: CollectionArticle[] = COLLECTION_ENTRIES.map((e) => e.fr);

/**
 * Anciens slugs fusionnés dans un autre article.
 * Clé = ancien slug, valeur = slug cible. La page émet un canonical vers la
 * cible et redirige côté client (301 serveur impossible sur une SPA).
 */
export const MERGED_SLUG_REDIRECTS: Record<string, string> = {
  "webcam-4k-pc-pro-max": "webcam-4k-pc",
};

/** Retrouve l'entrée (toutes locales) d'un article par son slug. */
export function getCollectionEntry(slug?: string) {
  return COLLECTION_ENTRIES.find((e) => e.slug === slug);
}

/** Retrouve la version française d'un article par son slug. */
export function getCollectionArticle(slug?: string) {
  return COLLECTION_ARTICLES.find((a) => a.slug === slug);
}

/**
 * Une traduction est PÉRIMÉE quand la version française a été mise à jour
 * après la date source de la traduction. Dans ce cas on sert le français.
 */
export function isTranslationStale(entry: ArticleEntry): boolean {
  if (!entry.en) return false;
  return entry.fr.updatedAt > entry.en.sourceUpdatedAt;
}

/** Avertissements DEV déjà émis (une seule fois par article). */
const warnedStale = new Set<string>();

/**
 * Renvoie l'article dans la langue demandée, avec repli sur le français.
 * `fallback: true` → la page doit afficher le bandeau « pas encore traduit ».
 */
export function resolveCollectionArticle(
  slug: string | undefined,
  locale: string | undefined,
): { article: CollectionArticle; locale: "fr" | "en"; fallback: boolean } | undefined {
  const entry = getCollectionEntry(slug);
  if (!entry) return undefined;

  const lang = (locale || "fr").split("-")[0] as SiteLocale;
  if (lang === "fr") return { article: entry.fr, locale: "fr", fallback: false };

  const stale = isTranslationStale(entry);
  if (import.meta.env.DEV && stale && !warnedStale.has(entry.slug)) {
    warnedStale.add(entry.slug);
    console.warn(
      `[i18n] Traduction périmée — « ${entry.slug} » : fr.updatedAt (${entry.fr.updatedAt}) ` +
        `est postérieur à en.sourceUpdatedAt (${entry.en?.sourceUpdatedAt}). ` +
        `Le français est servi avec le bandeau « traduction indisponible ».`,
    );
  }

  // L'anglais est la seule langue traduite : es/de retombent sur le français.
  if (lang === "en" && entry.en && !stale) {
    return { article: entry.en, locale: "en", fallback: false };
  }
  return { article: entry.fr, locale: "fr", fallback: true };
}

/** Articles localisés pour les listes (hub) : anglais si disponible et à jour. */
export function getLocalizedArticles(locale: string | undefined): CollectionArticle[] {
  return COLLECTION_ENTRIES.map(
    (e) => resolveCollectionArticle(e.slug, locale)?.article ?? e.fr,
  );
}

/** Modèles concernés par un article (un comparatif en couvre deux). */
export function articleModels(model: IphoneModel): ("pro" | "pro_max")[] {
  return model === "both" ? ["pro", "pro_max"] : [model];
}

