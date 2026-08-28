/**
 * ============================================================================
 * COLLECTION TEMPORAIRE — iPhone 18 Pro & Pro Max (INDEX)
 * ============================================================================
 * Ce fichier ne contient plus le texte des articles : il sert d'index.
 * Chaque article vit dans son propre fichier `src/content/iphone/<slug>.ts`.
 *
 * AJOUTER UN ARTICLE — 3 étapes :
 *  1. Duplique `src/content/iphone/_TEMPLATE.ts` en `src/content/iphone/<slug>.ts`
 *     (nom de fichier = slug exact : minuscules, tirets, sans accent).
 *  2. Remplis les champs en respectant les contraintes commentées du gabarit.
 *  3. Ajoute l'import en haut de ce fichier et l'entrée dans `COLLECTION_ARTICLES`
 *     ci-dessous — l'URL, le hub et le sitemap suivent automatiquement.
 *
 * RÈGLE AMAZON ASSOCIATES : ne JAMAIS écrire de prix ni de disponibilité
 * en dur. Les boutons affichent uniquement "Voir sur Amazon".
 * ============================================================================
 */

import type {
  AmazonLink,
  ArticleSection,
  CollectionArticle,
  CollectionSeo,
  IphoneModel,
} from "@/content/iphone/types";
import { article as webcam4kPc } from "@/content/iphone/webcam-4k-pc";
import { article as webcam4kPcProMax } from "@/content/iphone/webcam-4k-pc-pro-max";
import { article as accessoiresUsbCSetup } from "@/content/iphone/accessoires-usb-c-setup";

// Types re-exportés : les composants continuent de les importer depuis ici.
export type {
  AmazonLink,
  ArticleSection,
  CollectionArticle,
  CollectionSeo,
  IphoneModel,
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
  title: "Pourquoi une collection iPhone sur GearHub ?",
  paragraphs: [
    "GearHub parle de setup, pas de smartphones. Mais l'iPhone 18 Pro et le Pro Max entrent dans le setup par la porte du PC : captés en USB-C, ils deviennent une webcam 4K qui écrase n'importe quelle webcam à 150 €, un micro d'appoint correct et une seconde source de capture pour le stream.",
    "Ajoute à cela des accessoires USB-C mutualisés — dock, câbles 240 W, SSD externes, supports de bureau — qui servent aussi bien au PC qu'au téléphone, et la logique devient évidente : on couvre ce qui touche à votre bureau, rien d'autre.",
  ],
};

/**
 * ---------------------------------------------------------------------------
 * ARTICLES DE LA COLLECTION
 * ---------------------------------------------------------------------------
 * Duplique un bloc pour ajouter un article : il utilise automatiquement le
 * gabarit (H1, badge modèle, sommaire, sections H2, date, FAQ, CTA Amazon).
 */
export const COLLECTION_ARTICLES: CollectionArticle[] = [
  webcam4kPc,
  webcam4kPcProMax,
  accessoiresUsbCSetup,
];

/** Retrouve un article par son slug. */
export function getCollectionArticle(slug?: string) {
  return COLLECTION_ARTICLES.find((a) => a.slug === slug);
}

/** Modèles concernés par un article (un comparatif en couvre deux). */
export function articleModels(model: IphoneModel): ("pro" | "pro_max")[] {
  return model === "both" ? ["pro", "pro_max"] : [model];
}
