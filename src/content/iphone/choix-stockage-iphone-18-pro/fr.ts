import type { CollectionArticle } from "../types";

/** Article : /iphone-18-pro/choix-stockage-iphone-18-pro */
export const article: CollectionArticle = {
  slug: "choix-stockage-iphone-18-pro",
  model: "both",
  title: "Quelle capacité choisir pour l'iPhone 18 Pro ?",
  excerpt:
    "256 Go, 512 Go, 1 To ou 2 To : notre guide pour choisir la capacité de l'iPhone 18 Pro ou du Pro Max sans payer plus que nécessaire.",
  image:
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80",
  updatedAt: "2026-09-11",
  publishedAt: "2026-09-11",
  intro:
    "L'iPhone 18 Pro et le Pro Max sont proposés en quatre capacités, de 256 Go à 2 To. Voici comment choisir en fonction de votre usage, de votre budget et des prix officiels Apple.",
  sections: [
    {
      id: "les-capacites",
      heading: "Les quatre capacités et leurs prix officiels",
      paragraphs: [
        "iPhone 18 Pro : 1 479 € en 256 Go, 1 729 € en 512 Go, 2 229 € en 1 To, 2 979 € en 2 To.",
        "iPhone 18 Pro Max : 1 629 € en 256 Go, 1 879 € en 512 Go, 2 379 € en 1 To, 3 129 € en 2 To.",
        "Cette année, le 2 To est disponible sur les deux formats. Le surcoût entre le 256 Go et le 1 To atteint 750 €, contre 500 € sur la génération précédente. Cet écart change l'arbitrage : le 256 Go devient la capacité la plus logique pour un usage standard, tandis que le 1 To et le 2 To ne se justifient que pour des besoins professionnels ou de capture vidéo intensive.",
      ],
    },
    {
      id: "notre-recommandation",
      heading: "Notre recommandation",
      paragraphs: [
        "Pour un usage classique — photos, applications, streaming et quelques jeux — le 256 Go suffit largement la première année, surtout si vous utilisez iCloud pour les photos.",
        "Le 512 Go vaut le coup si vous filmez régulièrement en 4K ou si vous gardez beaucoup de contenu en local. Au-delà, le 1 To et le 2 To ne se justifient que pour des workflows ProRes, du montage sur l'appareil ou un usage pro longtemps déconnecté du cloud.",
        "Attention au stockage cloud comme substitut : un abonnement iCloud 200 Go coûte moins cher sur deux ans que le passage au palier supérieur, et il décharge la mémoire interne sans bloquer les performances.",
      ],
    },
  ],
  faq: [
    {
      question: "Le 256 Go suffit-il pour l'iPhone 18 Pro ?",
      answer:
        "Oui pour un usage standard avec iCloud. Il devient limite si vous filmez beaucoup en 4K ou si vous stockez des jeux volumineux en local.",
    },
    {
      question: "Le 2 To vaut-il le coup sur l'iPhone 18 Pro ?",
      answer:
        "Seulement pour des usages pro : capture ProRes, montage vidéo sur l'appareil ou stockage local massif. Pour un usage courant, le surcoût par rapport au 256 Go est disproportionné.",
    },
  ],
  amazon: {
    pro: {
      url: "https://link.amazon/B06uX8oKA",
      productName: "iPhone 18 Pro",
    },
    pro_max: {
      url: "https://link.amazon/B0fVEdQm8",
      productName: "iPhone 18 Pro Max",
    },
  },
  seo: {
    title: "Quelle capacité choisir pour l'iPhone 18 Pro ?",
    description:
      "Guide capacité iPhone 18 Pro et Pro Max : 256 Go, 512 Go, 1 To ou 2 To ? Comparez les prix officiels et choisissez selon votre usage sans payer trop cher.",
  },
};

export default article;
