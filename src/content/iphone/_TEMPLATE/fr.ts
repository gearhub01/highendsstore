/**
 * ============================================================================
 * GABARIT D'ARTICLE — collection iPhone 18 Pro / Pro Max
 * ============================================================================
 * Duplique ce fichier, renomme-le d'après le slug (ex. `dock-usb-c-stream.ts`),
 * remplis les champs, puis déclare-le dans `src/config/iphone-collection.ts`.
 *
 * CONTRAINTES À RESPECTER (résumé) :
 *  - title             : moins de 48 caractères (le suffixe " | GearHub" prend les 10 derniers)
 *  - seo.title         : même règle que title (moins de 48 caractères)
 *  - seo.description   : entre 140 et 155 caractères
 *  - slug              : minuscules, mots séparés par des tirets, sans accent
 *  - updatedAt         : format AAAA-MM-JJ
 *  - publishedAt       : format AAAA-MM-JJ
 *
 * RÈGLE AMAZON ASSOCIATES : jamais de prix ni de disponibilité en dur.
 * ============================================================================
 */
import type { CollectionArticle } from "../types";

export const article: CollectionArticle = {
  /** OBLIGATOIRE — minuscules, tirets, sans accent. Donne l'URL /iphone-18-pro/<slug>. */
  slug: "mon-nouvel-article",

  /** OBLIGATOIRE — "pro" | "pro_max" | "both" (comparatif valable pour les deux). */
  model: "both",

  /** OBLIGATOIRE — H1 de la page. Moins de 48 caractères. */
  title: "Titre de l'article",

  /** OBLIGATOIRE — résumé affiché sur les cartes du hub (1 à 2 phrases). */
  excerpt: "Résumé court affiché sur la carte du hub.",

  /** OBLIGATOIRE — image de couverture, URL absolue https. */
  image: "https://images.unsplash.com/photo-xxxxxxxx?w=1200&q=80",

  /** OBLIGATOIRE — format AAAA-MM-JJ. Utilisé par le sitemap (<lastmod>). */
  updatedAt: "2026-09-01",

  /** OBLIGATOIRE — format AAAA-MM-JJ. Date de première publication. */
  publishedAt: "2026-09-01",

  /** OBLIGATOIRE — chapeau affiché sous le H1. */
  intro: "Paragraphe d'introduction, 2 à 3 phrases.",

  /** OBLIGATOIRE — corps de l'article : une entrée = une section H2. */
  sections: [
    {
      /** Ancre du sommaire : minuscules, sans accent ni espace. */
      id: "premiere-section",
      heading: "Titre H2 de la section",
      paragraphs: ["Premier paragraphe.", "Second paragraphe (optionnel)."],
      // bullets: ["Point 1", "Point 2"],                 // optionnel
      // amazon: { pro: { url: "...", productName: "..." } }, // optionnel, sinon `amazon` global
      // showCta: true,                                    // 1 à 2 CTA par article maximum
    },
  ],

  /** OBLIGATOIRE — au moins 2 questions/réponses (accordéon + JSON-LD). */
  faq: [
    { question: "Première question ?", answer: "Réponse courte et concrète." },
    { question: "Deuxième question ?", answer: "Réponse courte et concrète." },
  ],

  /** OBLIGATOIRE — liens Amazon de repli, par modèle couvert. Aucun prix. */
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

  /** OBLIGATOIRE — métadonnées SEO de la page. */
  seo: {
    /** Moins de 48 caractères (" | GearHub" est ajouté automatiquement). */
    title: "Titre SEO court",
    /** Entre 140 et 155 caractères, ni plus ni moins. */
    description:
      "Description SEO de 140 à 155 caractères décrivant précisément le contenu de l'article et l'intérêt pour un setup PC gaming en USB-C.",
  },
};

export default article;
