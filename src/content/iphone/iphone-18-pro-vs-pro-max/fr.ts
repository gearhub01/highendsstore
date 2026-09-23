/** Comparatif officiel iPhone 18 Pro vs iPhone 18 Pro Max. */
import { AMAZON_URLS } from "@/config/amazon-links";
import type { CollectionArticle } from "../types";

export const article: CollectionArticle = {
  slug: "iphone-18-pro-vs-pro-max",
  model: "both",
  title: "iPhone 18 Pro ou Pro Max : lequel choisir",
  excerpt: "Écran, autonomie, poids et encombrement : les différences officielles entre l'iPhone 18 Pro et le 18 Pro Max.",
  image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1200&q=80",
  updatedAt: "2026-09-23",
  publishedAt: "2026-08-28",
  intro: "Les iPhone 18 Pro et 18 Pro Max partagent la puce A20 Pro, les caméras et les fonctions essentielles. Le choix repose désormais sur la taille, l'autonomie et le poids : voici les données officielles pour trancher.",
  featuredAmazon: true,
  topLinks: [{ label: "Le tableau complet des trois générations", href: "/iphone-18-pro/comparatif-iphone-16-17-18" }],
  sections: [
    {
      id: "tableau",
      heading: "Le tableau officiel Pro / Pro Max",
      paragraphs: ["Les deux modèles disposent du même équipement photo, de la même puce, des mêmes capacités de stockage et de la même connectique. Les différences mesurables sont concentrées dans le format et l'endurance."],
      table: {
        caption: "Source : fiches techniques officielles Apple, vérifiées le 23 septembre 2026.",
        headers: ["Caractéristique", "iPhone 18 Pro", "iPhone 18 Pro Max"],
        rows: [
          ["Écran", "6,3\" OLED 2622 × 1206 à 460 ppp", "6,9\" OLED 2868 × 1320 à 460 ppp"],
          ["Luminosité", "1 000 nits typique, 1 600 nits pic HDR, 3 000 nits pic extérieur", "Identique"],
          ["Puce", "A20 Pro, CPU 6 cœurs, GPU 7 cœurs", "Identique"],
          ["Stockage", "256 Go, 512 Go, 1 To, 2 To", "256 Go, 512 Go, 1 To, 2 To"],
          ["Photo arrière", "48 Mpx Fusion à ouverture variable + ultra grand-angle 48 Mpx + téléobjectif 48 Mpx 4x", "Identique"],
          ["Caméra avant", "18 Mpx Center Stage ƒ/1.9", "Identique"],
          ["Vidéo", "4K Dolby Vision 120 i/s, ProRes 4K120 externe, vidéo spatiale", "Identique"],
          ["Autonomie vidéo", "Jusqu'à 34 h", "Jusqu'à 43 h"],
          ["USB-C", "USB 3, jusqu'à 10 Gbit/s", "Identique"],
          ["Sans fil", "5G sub-6 GHz, Wi-Fi 7, Bluetooth 6", "Identique"],
          ["Face ID", "TrueDepth classique", "Identique"],
          ["Matériau", "Unibody aluminium, Ceramic Shield 2 avant et Ceramic Shield au dos", "Identique"],
          ["Poids", "211 g", "249 g"],
          ["Dimensions", "71,9 × 150 × 8,75 mm", "78 × 163,4 × 8,75 mm"],
          ["Coloris", "Noir, Argent, Glacier, Bordeaux", "Identiques"],
        ],
      },
    },
    {
      id: "points-communs",
      heading: "Même puissance et mêmes caméras",
      paragraphs: [
        "Aucun des deux modèles n'est plus rapide ou mieux équipé en photo. Ils partagent l'A20 Pro gravée en 2 nm, son GPU à sept cœurs, le bloc arrière à trois capteurs 48 Mpx et l'ouverture variable du capteur principal.",
        "La caméra avant 18 Mpx Center Stage, la vidéo 4K Dolby Vision jusqu'à 120 images par seconde, l'USB 3 à 10 Gbit/s, le Wi-Fi 7 et le Bluetooth 6 sont également identiques.",
        "Le stockage ne départage plus les deux formats : 256 Go, 512 Go, 1 To et 2 To sont disponibles sur chacun.",
      ],
    },
    {
      id: "autonomie",
      heading: "Autonomie : neuf heures d'avance pour le Pro Max",
      paragraphs: [
        "Apple annonce jusqu'à 34 heures de lecture vidéo pour le Pro et 43 heures pour le Pro Max. Cet écart de neuf heures constitue la principale différence fonctionnelle entre les deux modèles.",
        "Le Pro Max convient mieux aux longues journées loin d'une prise et aux captures prolongées. Pour un usage principalement sédentaire, la proximité d'un chargeur réduit fortement cet avantage.",
      ],
    },
    {
      id: "poids-format",
      heading: "Poids et format : l'écart à ne pas sous-estimer",
      paragraphs: [
        "Le Pro Max pèse 249 g, contre 211 g pour le Pro : 38 g d'écart. Sa largeur atteint 78 mm, contre 71,9 mm. Le grand écran de 6,9 pouces est plus confortable pour la vidéo et le monitoring, mais il encombre davantage une poche ou un bureau.",
        "Sur un bras articulé, le Pro Max exige une fixation plus rigide. Pour une webcam fixe, le Pro est plus simple à positionner et sollicite moins la rotule du support.",
      ],
      links: [{ label: "Notre guide : l'iPhone en webcam 4K pour PC", href: "/iphone-18-pro/webcam-4k-pc" }],
    },
    {
      id: "recommandation",
      heading: "Notre recommandation",
      paragraphs: [
        "Choisissez l'iPhone 18 Pro si vous privilégiez la compacité, le poids et la facilité d'installation sur un support. Il offre les mêmes performances, les mêmes caméras et les mêmes capacités de stockage que le Pro Max.",
        "Choisissez le Pro Max si l'écran de 6,9 pouces et les 43 heures d'autonomie vidéo répondent à un besoin concret. Son endurance est supérieure, mais son poids de 249 g impose un compromis permanent.",
      ],
    },
  ],
  faq: [
    { question: "Le Pro Max prend-il de meilleures photos ?", answer: "Non. Les deux modèles partagent le même bloc à trois capteurs 48 Mpx et la même caméra avant 18 Mpx Center Stage." },
    { question: "Quelle différence d'autonomie entre les deux modèles ?", answer: "Apple annonce jusqu'à 34 heures de lecture vidéo sur le Pro et 43 heures sur le Pro Max." },
    { question: "Le stockage 2 To est-il réservé au Pro Max ?", answer: "Non. Les iPhone 18 Pro et 18 Pro Max sont tous deux proposés jusqu'à 2 To." },
    { question: "Quel modèle choisir comme webcam ?", answer: "Le Pro est plus léger et plus simple à fixer. Le Pro Max offre davantage d'endurance, à condition d'utiliser un support dimensionné pour ses 249 g." },
  ],
  amazon: {
    pro: { url: AMAZON_URLS.pro, productName: "iPhone 18 Pro" },
    pro_max: { url: AMAZON_URLS.pro_max, productName: "iPhone 18 Pro Max" },
  },
  related: [
    { label: "iPhone 18 Pro vs 16 Pro", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-16-pro" },
    { label: "iPhone 18 Pro vs 17 Pro", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro" },
  ],
  seo: {
    title: "iPhone 18 Pro ou Pro Max : comparatif officiel",
    description: "Comparatif officiel iPhone 18 Pro et Pro Max : écran, autonomie, poids, dimensions, stockage et choix selon votre usage.",
  },
};

export default article;