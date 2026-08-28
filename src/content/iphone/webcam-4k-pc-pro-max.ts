import type { CollectionArticle } from "./types";

/** Article : /iphone-18-pro/webcam-4k-pc-pro-max */
export const article: CollectionArticle = {
  slug: "webcam-4k-pc-pro-max",
  model: "pro_max",
  title: "iPhone 18 Pro Max en webcam 4K : ce que le grand modèle change",
  excerpt:
    "Autonomie, chauffe et stabilisation : pourquoi le Pro Max tient mieux les longues sessions de capture 4K sur PC.",
  image:
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80",
  updatedAt: "2026-08-21",
  publishedAt: "2026-08-21",
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
};

export default article;
