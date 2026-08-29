/**
 * ============================================================================
 * ARTICLE TEMPLATE (ENGLISH) — iPhone 18 Pro / Pro Max collection
 * ============================================================================
 * Duplicate this file into `src/content/iphone/<slug>/en.ts`, translate the
 * French version, then declare it in the folder's `index.ts`.
 *
 * RULES
 *  - `slug` MUST be identical to the French version (slugs are never translated).
 *  - Keep the SAME section `id`s and the SAME heading order as `fr.ts`,
 *    so both versions stay comparable.
 *  - `sourceUpdatedAt` = the `updatedAt` of the French version you translated.
 *    When the French article is updated later, its `updatedAt` becomes newer
 *    and the site automatically serves French with a "not yet translated"
 *    banner instead of an outdated translation. Update this date when you
 *    refresh the translation.
 *  - NEVER translate: brand and product names (GearHub, iPhone 18 Pro, Anker,
 *    Ugreen, Belkin, Baseus…), units and technical terms (Go, To, Gb/s, MHz,
 *    nits, mm, g, USB-C, ProMotion, MagSafe, Hall Effect), URL slugs.
 *  - SEO: `seo.title` under 48 characters, `seo.description` 140-155 characters.
 *  - Amazon Associates: never hardcode prices or availability.
 * ============================================================================
 */
import type { TranslatedArticle } from "../types";

export const article: TranslatedArticle = {
  /** REQUIRED — identical to the French slug. */
  slug: "mon-nouvel-article",

  /** REQUIRED — same value as the French version. */
  model: "both",

  /** REQUIRED — `updatedAt` of the French version this was translated from. */
  sourceUpdatedAt: "2026-09-01",

  /** REQUIRED — H1 of the page. Under 48 characters. */
  title: "Article title",

  /** REQUIRED — summary shown on the hub cards. */
  excerpt: "Short summary shown on the hub card.",

  /** REQUIRED — cover image, same URL as the French version. */
  image: "https://images.unsplash.com/photo-xxxxxxxx?w=1200&q=80",

  /** REQUIRED — YYYY-MM-DD, mirrors the French version. */
  updatedAt: "2026-09-01",
  publishedAt: "2026-09-01",

  /** REQUIRED — standfirst below the H1. */
  intro: "Introduction paragraph, two or three sentences.",

  /** REQUIRED — one entry per H2 section, same ids as `fr.ts`. */
  sections: [
    {
      id: "premiere-section",
      heading: "Section H2 heading",
      paragraphs: ["First paragraph.", "Second paragraph (optional)."],
      // bullets: ["Point 1", "Point 2"],
      // table: { headers: [], rows: [], caption: "" },
      // showCta: true,
    },
  ],

  /** REQUIRED — at least two questions (accordion + JSON-LD). */
  faq: [
    { question: "First question?", answer: "Short, concrete answer." },
    { question: "Second question?", answer: "Short, concrete answer." },
  ],

  /** REQUIRED — Amazon links, same URLs as the French version. No prices. */
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

  /** REQUIRED — SEO metadata (the site still emits French SEO tags today). */
  seo: {
    title: "Short SEO title",
    description:
      "SEO description of 140 to 155 characters describing precisely what the article covers and why it matters for a USB-C gaming PC setup.",
  },
};

export default article;
