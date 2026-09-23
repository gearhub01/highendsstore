import { AMAZON_URLS } from "@/config/amazon-links";
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
  updatedAt: "2026-09-23",
  publishedAt: "2026-09-11",
  intro:
    "L'iPhone 18 Pro et le Pro Max sont proposés en quatre capacités, de 256 Go à 2 To. Voici comment choisir selon votre usage sans payer pour un stockage inutile.",
  sections: [
    {
      id: "les-capacites",
      heading: "Les quatre capacités officielles",
      paragraphs: [
        "Les deux modèles existent en 256 Go, 512 Go, 1 To et 2 To.",
        "Cette année, le 2 To est disponible sur les deux formats. Le 256 Go reste la capacité la plus logique pour un usage standard, tandis que le 1 To et le 2 To se justifient surtout pour des besoins professionnels ou de capture vidéo intensive.",
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
      showCta: true,
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
      url: AMAZON_URLS.pro,
      productName: "iPhone 18 Pro",
    },
    pro_max: {
      url: AMAZON_URLS.pro_max,
      productName: "iPhone 18 Pro Max",
    },
  },
  seo: {
    title: "Quelle capacité choisir pour l'iPhone 18 Pro ?",
    description:
      "Guide capacité iPhone 18 Pro et Pro Max : 256 Go, 512 Go, 1 To ou 2 To ? Choisissez selon vos photos, jeux, vidéos et usages professionnels.",
  },
};

export default article;
