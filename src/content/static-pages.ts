/**
 * ============================================================================
 * PAGES DE CONTENU STATIQUES (écrites en dur dans des composants React)
 * ============================================================================
 * Ces pages existent en tant que routes dédiées (src/pages/BuyingGuide.tsx,
 * ProductReview.tsx, Comparison.tsx) mais ne vivent pas en base. Ce fichier
 * les déclare pour que les pages de listing (/guides, /reviews) et le sitemap
 * puissent les afficher au même titre que le contenu de la base.
 *
 * AJOUTER UNE PAGE : ajoute une entrée ci-dessous après avoir créé sa route.
 */

export type StaticPageCategory = "guide" | "review" | "comparison";

export interface StaticPage {
  /** Slug unique (dernier segment de l'URL). */
  slug: string;
  /** Chemin complet de la route. */
  href: string;
  title: string;
  /** Résumé court affiché sur les cartes de listing. */
  excerpt: string;
  category: StaticPageCategory;
  /** Dernière mise à jour réelle (AAAA-MM-JJ) — utilisée par le sitemap. */
  updatedAt: string;
  /** Vignette de la carte (optionnelle). */
  image?: string;
  /** Étiquette courte affichée sur la carte. */
  tag?: string;
  /** Note affichée pour les tests. */
  rating?: string;
}

export const STATIC_PAGES: StaticPage[] = [
  {
    slug: "best-gaming-keyboards",
    href: "/guides/best-gaming-keyboards",
    title: "Meilleurs claviers gaming 2026",
    excerpt:
      "Notre sélection des meilleurs claviers mécaniques et Hall Effect, testés puis classés par usage et par budget.",
    category: "guide",
    updatedAt: "2026-08-21",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=500&fit=crop",
    tag: "Top 2026",
  },
  {
    slug: "gaming-keyboards",
    href: "/comparaison/gaming-keyboards",
    title: "Comparatif claviers gaming",
    excerpt:
      "Specs, latence et ressenti comparés côte à côte pour les claviers gaming les plus recommandés du moment.",
    category: "comparison",
    updatedAt: "2026-08-21",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=500&fit=crop",
  },
  {
    slug: "wooting-80he",
    href: "/reviews/wooting-80he",
    title: "Test Wooting 80HE",
    excerpt:
      "Trois mois avec le Wooting 80HE : rapid trigger, châssis, logiciel et verdict sans complaisance.",
    category: "review",
    updatedAt: "2026-08-21",
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=500&fit=crop",
    rating: "9.4",
  },
  // Comparatifs iPhone : ils vivent dans le cluster /iphone-18-pro/ mais sont
  // listés ici pour apparaître dans le filtre « Comparaison » de /guides.
  {
    slug: "iphone-18-pro-vs-iphone-16-pro",
    href: "/iphone-18-pro/iphone-18-pro-vs-iphone-16-pro",
    title: "iPhone 18 Pro vs 16 Pro : le vrai saut",
    excerpt:
      "Deux générations d'écart : caméra avant, autonomie et écran comparés entre iPhone 16 Pro, 17 Pro et 18 Pro, du point de vue d'un bureau PC.",
    category: "comparison",
    updatedAt: "2026-08-28",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=800&h=500&fit=crop",
    tag: "Comparatif",
  },
  {
    slug: "iphone-18-pro-vs-iphone-17-pro",
    href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro",
    title: "iPhone 18 Pro vs 17 Pro : faut-il changer ?",
    excerpt:
      "Ce qui change vraiment, ce qui ne bouge pas, et pourquoi le passage d'un 17 Pro à un 18 Pro est probablement injustifié pour un usage PC.",
    category: "comparison",
    updatedAt: "2026-08-28",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=500&fit=crop",
    tag: "Comparatif",
  },
  {
    slug: "iphone-18-pro-vs-pro-max",
    href: "/iphone-18-pro/iphone-18-pro-vs-pro-max",
    title: "iPhone 18 Pro ou Pro Max : lequel choisir",
    excerpt:
      "Écran, autonomie, stockage et poids comparés, y compris ce que change le poids sur un bras articulé de bureau PC.",
    category: "comparison",
    updatedAt: "2026-08-28",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=500&fit=crop",
    tag: "Comparatif",
  },
];

export const staticPagesByCategory = (category: StaticPageCategory) =>
  STATIC_PAGES.filter((p) => p.category === category);
