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
    slug: "meilleure-souris-gaming-fps",
    href: "/guides/meilleure-souris-gaming-fps",
    title: "Meilleure souris gaming FPS 2026",
    excerpt: "Ce que jouent réellement 940 pros de CS2, et pourquoi la souris la plus utilisée n'est pas la plus légère.",
    category: "guide",
    updatedAt: "2026-09-24",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&h=500&fit=crop",
    tag: "Nouveau",
  },
  {
    slug: "144hz-vs-240hz",
    href: "/comparaison/144hz-vs-240hz",
    title: "144 Hz vs 240 Hz : la différence vaut-elle le coup ?",
    excerpt: "2,8 ms d'écart, les études NVIDIA et le piège du framerate : les chiffres, sans le marketing.",
    category: "comparison",
    updatedAt: "2026-09-24",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=500&fit=crop",
  },
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
    title: "SteelSeries vs Logitech vs Corsair : quel clavier gaming ?",
    excerpt:
      "Les trois grands fabricants de claviers gaming comparés : switches, latence, logiciel et verdict par usage.",
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
    slug: "comparatif-iphone-16-17-18",
    href: "/iphone-18-pro/comparatif-iphone-16-17-18",
    title: "Comparatif iPhone 16, 17 et 18 Pro",
    excerpt:
      "Trois générations d'iPhone Pro et Pro Max comparées avec les caractéristiques officielles : écran, puce, photo, autonomie et poids.",
    category: "comparison",
    updatedAt: "2026-09-23",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=500&fit=crop",
    tag: "Comparatif",
  },
  {
    slug: "iphone-18-pro-vs-iphone-16-pro",
    href: "/iphone-18-pro/iphone-18-pro-vs-iphone-16-pro",
    title: "iPhone 18 Pro vs 16 Pro : le vrai saut",
    excerpt:
      "Deux générations d'écart : caméra avant, autonomie et écran comparés entre iPhone 16 Pro, 17 Pro et 18 Pro, du point de vue d'un bureau PC.",
    category: "comparison",
    updatedAt: "2026-09-23",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=800&h=500&fit=crop",
    tag: "Comparatif",
  },
  {
    slug: "iphone-18-pro-vs-iphone-17-pro",
    href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro",
    title: "iPhone 18 Pro vs 17 Pro : faut-il changer ?",
    excerpt:
      "Tableau officiel, différences réelles et verdict pour passer d'un iPhone 17 Pro au 18 Pro dans un usage PC.",
    category: "comparison",
    updatedAt: "2026-09-11",
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
    updatedAt: "2026-09-23",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&h=500&fit=crop",
    tag: "Comparatif",
  },
  {
    slug: "iphone-duo-pliable",
    href: "/iphone-18-pro/iphone-duo-pliable",
    title: "iPhone Duo : le premier pliable d'Apple",
    excerpt:
      "Apple officialise l'iPhone Duo, son premier smartphone pliable : écran intérieur 7,6 pouces, capacités et dates de sortie en octobre.",
    category: "guide",
    updatedAt: "2026-09-23",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tag: "Disponible",
  },
];

export const staticPagesByCategory = (category: StaticPageCategory) =>
  STATIC_PAGES.filter((p) => p.category === category);
