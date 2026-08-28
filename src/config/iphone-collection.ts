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

/**
 * ---------------------------------------------------------------------------
 * MODÈLES COUVERTS PAR LA COLLECTION
 * ---------------------------------------------------------------------------
 * "pro"      → article dédié à l'iPhone 18 Pro
 * "pro_max"  → article dédié à l'iPhone 18 Pro Max
 * "both"     → article comparatif / valable pour les deux modèles
 */
export type IphoneModel = "pro" | "pro_max" | "both";

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

/** Métadonnées SEO éditables, une par page. */
export interface CollectionSeo {
  /** Balise <title> (sans le suffixe « | GearHub », ajouté automatiquement). */
  title: string;
  /** Meta description + og:description (≈ 150-160 caractères). */
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
  /** Date de dernière mise à jour, format ISO AAAA-MM-JJ. */
  updatedAt: string;
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
  {
    slug: "webcam-4k-pc",
    model: "pro",
    title: "iPhone 18 Pro en webcam 4K sur PC : le guide complet",
    excerpt:
      "Brancher l'iPhone 18 Pro en USB-C pour obtenir un flux 4K propre sur OBS, Discord et Teams — matériel, réglages et limites.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    updatedAt: "2026-08-21",
    intro:
      "Une webcam 4K correcte coûte le prix d'un bon clavier. L'iPhone 18 Pro, lui, est déjà sur votre bureau : voici comment en faire la caméra principale de votre setup PC, sans logiciel douteux.",
    sections: [
      {
        id: "materiel",
        heading: "Le matériel nécessaire",
        paragraphs: [
          "Le flux vidéo passe par l'USB-C : un câble certifié et un support stable suffisent pour démarrer. Évitez les adaptateurs bon marché, principale cause de coupures de flux.",
        ],
        bullets: [
          "Un câble USB-C vers USB-C data (pas un câble de charge seul)",
          "Un support de bureau ou un bras articulé pour cadrer à hauteur d'yeux",
          "Optionnel : un éclairage LED pour compenser le bruit en basse lumière",
        ],
        amazon: {
          pro: {
            url: "https://www.amazon.fr/s?k=cable+usb+c+data+iphone+18+pro&tag=gearhub-21",
            productName: "Câble USB-C data pour iPhone 18 Pro",
          },
        },
        showCta: true,
      },
      {
        id: "reglages-obs",
        heading: "Réglages OBS et Discord",
        paragraphs: [
          "Ajoutez une source « Périphérique de capture vidéo », sélectionnez l'iPhone puis forcez la résolution en 3840x2160 à 30 fps. En 60 fps, descendez en 1080p : la plupart des cartes graphiques encodent mieux et la latence chute.",
          "Sur Discord et Teams, l'iPhone apparaît comme une caméra standard une fois la connexion établie ; aucun pilote supplémentaire n'est nécessaire.",
        ],
      },
      {
        id: "limites",
        heading: "Les limites à connaître",
        paragraphs: [
          "La chauffe reste le point faible sur les sessions longues : au-delà d'une heure de capture 4K, le capteur réduit la qualité. Un support ventilé ou un passage en 1080p règle le problème.",
        ],
        amazon: {
          pro: {
            url: "https://www.amazon.fr/s?k=support+ventile+smartphone+iphone&tag=gearhub-21",
            productName: "Support ventilé pour iPhone 18 Pro",
          },
        },
        showCta: true,
      },
    ],
    faq: [
      {
        question: "Faut-il une application payante ?",
        answer:
          "Non. La capture USB-C est reconnue nativement par Windows 11 et par OBS. Les applications tierces servent surtout à ajouter des filtres.",
      },
      {
        question: "Le son passe-t-il aussi par le câble ?",
        answer:
          "Oui, l'iPhone est exposé comme périphérique audio séparé. Pour du contenu publié, un micro dédié reste supérieur.",
      },
    ],
    amazon: {
      pro: {
        url: "https://www.amazon.fr/s?k=iPhone+18+Pro&tag=gearhub-21",
        productName: "iPhone 18 Pro",
      },
    },
    seo: {
      title: "iPhone 18 Pro en webcam 4K sur PC — Guide de branchement",
      description:
        "Transformez l'iPhone 18 Pro en webcam 4K pour votre PC : câble USB-C, réglages OBS et Discord, limites de chauffe et alternatives.",
    },
  },
  {
    slug: "webcam-4k-pc-pro-max",
    model: "pro_max",
    title: "iPhone 18 Pro Max en webcam 4K : ce que le grand modèle change",
    excerpt:
      "Autonomie, chauffe et stabilisation : pourquoi le Pro Max tient mieux les longues sessions de capture 4K sur PC.",
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80",
    updatedAt: "2026-08-21",
    intro:
      "Même capteur principal, châssis plus grand : sur une session de stream de trois heures, l'iPhone 18 Pro Max ne se comporte pas comme le Pro. Voici ce qui change concrètement pour un usage webcam.",
    sections: [
      {
        id: "autonomie",
        heading: "Autonomie et alimentation continue",
        paragraphs: [
          "Branché en USB-C data sur un dock alimenté, le Pro Max se recharge pendant la capture. Sa batterie plus grande absorbe mieux les pics de consommation liés à l'encodage 4K.",
        ],
        amazon: {
          pro_max: {
            url: "https://www.amazon.fr/s?k=dock+usb+c+alimente+iphone+pro+max&tag=gearhub-21",
            productName: "Dock USB-C alimenté pour iPhone 18 Pro Max",
          },
        },
        showCta: true,
      },
      {
        id: "chauffe",
        heading: "Chauffe sur les longues sessions",
        paragraphs: [
          "La surface de dissipation supérieure du Pro Max repousse le seuil de bridage thermique. En pratique, la qualité 4K tient plus longtemps avant que le flux ne descende en définition.",
        ],
        bullets: [
          "Support ventilé recommandé au-delà de deux heures",
          "1080p60 comme repli si la pièce est chaude",
          "Éviter la charge rapide pendant la capture",
        ],
      },
      {
        id: "cadrage",
        heading: "Cadrage et stabilisation",
        paragraphs: [
          "Le poids supplémentaire demande un bras articulé rigide : un support souple vibre à chaque frappe clavier, ce qui se voit immédiatement en 4K.",
        ],
        amazon: {
          pro_max: {
            url: "https://www.amazon.fr/s?k=bras+articule+smartphone+pro+max&tag=gearhub-21",
            productName: "Bras articulé pour iPhone 18 Pro Max",
          },
        },
        showCta: true,
      },
    ],
    faq: [
      {
        question: "Le Pro Max filme-t-il mieux que le Pro ?",
        answer:
          "La qualité d'image est identique. La différence porte sur l'endurance thermique et l'autonomie sur les captures longues.",
      },
      {
        question: "Faut-il un support différent du Pro ?",
        answer:
          "Oui, privilégiez un bras articulé prévu pour le poids du grand modèle afin d'éviter les micro-vibrations.",
      },
    ],
    amazon: {
      pro_max: {
        url: "https://www.amazon.fr/s?k=iPhone+18+Pro+Max&tag=gearhub-21",
        productName: "iPhone 18 Pro Max",
      },
    },
    seo: {
      title: "iPhone 18 Pro Max en webcam 4K — Endurance et cadrage",
      description:
        "Webcam 4K avec l'iPhone 18 Pro Max : autonomie, tenue thermique sur les longues sessions et support adapté au grand modèle.",
    },
  },
  {
    slug: "accessoires-usb-c-setup",
    model: "both",
    title: "Accessoires USB-C partagés entre l'iPhone 18 Pro / Pro Max et le PC",
    excerpt:
      "Docks, câbles 240 W, SSD externes : les accessoires qui servent aux deux modèles comme au reste du setup gaming.",
    image:
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=1200&q=80",
    updatedAt: "2026-08-21",
    intro:
      "L'intérêt de l'USB-C généralisé, c'est d'arrêter d'acheter deux fois le même accessoire. Voici ce qui se mutualise réellement entre l'iPhone 18 Pro, le Pro Max et un PC de bureau.",
    sections: [
      {
        id: "dock",
        heading: "Le dock de bureau",
        paragraphs: [
          "Un dock alimenté avec sortie DisplayPort et plusieurs ports data permet de brancher l'iPhone comme n'importe quelle source, sans débrancher le clavier ni le casque.",
        ],
        amazon: {
          pro: {
            url: "https://www.amazon.fr/s?k=dock+usb+c+alimente+displayport+iphone+pc&tag=gearhub-21",
            productName: "Dock USB-C alimenté — iPhone 18 Pro & PC",
          },
          pro_max: {
            url: "https://www.amazon.fr/s?k=dock+usb+c+alimente+displayport+iphone+pc&tag=gearhub-21",
            productName: "Dock USB-C alimenté — iPhone 18 Pro Max & PC",
          },
        },
        showCta: true,
      },
      {
        id: "cables",
        heading: "Câbles et charge",
        paragraphs: [
          "Les câbles USB-C 240 W (EPR) chargent aussi bien un portable gaming que le téléphone. Vérifiez la mention « USB4 » ou « Thunderbolt » si vous comptez transférer de la vidéo.",
        ],
        bullets: [
          "240 W pour la charge rapide du portable",
          "USB4 / Thunderbolt pour la vidéo et les SSD",
          "Longueur 1 m maximum pour conserver le débit",
        ],
        amazon: {
          pro: {
            url: "https://www.amazon.fr/s?k=cable+usb+c+240w+usb4+iphone+pc&tag=gearhub-21",
            productName: "Câble USB-C 240 W / USB4 — iPhone 18 Pro & PC",
          },
          pro_max: {
            url: "https://www.amazon.fr/s?k=cable+usb+c+240w+usb4+iphone+pc&tag=gearhub-21",
            productName: "Câble USB-C 240 W / USB4 — iPhone 18 Pro Max & PC",
          },
        },
      },
      {
        id: "stockage",
        heading: "Stockage externe",
        paragraphs: [
          "Un SSD NVMe externe accepte les rushes ProRes du téléphone et sert de disque de montage sur le PC. C'est l'accessoire le plus rentable de la liste.",
        ],
        amazon: {
          pro: {
            url: "https://www.amazon.fr/s?k=ssd+nvme+externe+usb+c+iphone+pc&tag=gearhub-21",
            productName: "SSD NVMe externe USB-C — iPhone 18 Pro & PC",
          },
          pro_max: {
            url: "https://www.amazon.fr/s?k=ssd+nvme+externe+usb+c+iphone+pc&tag=gearhub-21",
            productName: "SSD NVMe externe USB-C — iPhone 18 Pro Max & PC",
          },
        },
        showCta: true,
      },
    ],
    faq: [
      {
        question: "Un dock Thunderbolt PC fonctionne-t-il avec l'iPhone ?",
        answer:
          "Oui pour la charge et les données. Les fonctions vidéo dépendent du dock ; privilégiez un modèle alimenté.",
      },
      {
        question: "Faut-il des câbles certifiés MFi ?",
        answer:
          "Non, l'USB-C n'impose pas de certification MFi. Cherchez plutôt la certification USB-IF.",
      },
    ],
    amazon: {
      pro: {
        url: "https://www.amazon.fr/s?k=iPhone+18+Pro&tag=gearhub-21",
        productName: "iPhone 18 Pro",
      },
      pro_max: {
        url: "https://www.amazon.fr/s?k=iPhone+18+Pro+Max&tag=gearhub-21",
        productName: "iPhone 18 Pro Max",
      },
    },
    seo: {
      title: "Accessoires USB-C iPhone 18 Pro et Pro Max pour PC gaming",
      description:
        "Comparatif des accessoires USB-C à mutualiser entre l'iPhone 18 Pro, le Pro Max et votre setup PC : dock, câbles 240 W et SSD externes.",
    },
  },
];

/** Retrouve un article par son slug. */
export function getCollectionArticle(slug?: string) {
  return COLLECTION_ARTICLES.find((a) => a.slug === slug);
}

/** Modèles concernés par un article (un comparatif en couvre deux). */
export function articleModels(model: IphoneModel): ("pro" | "pro_max")[] {
  return model === "both" ? ["pro", "pro_max"] : [model];
}
