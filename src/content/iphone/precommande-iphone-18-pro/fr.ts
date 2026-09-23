import { AMAZON_URLS } from "@/config/amazon-links";
import type { CollectionArticle } from "../types";

/** Article : /iphone-18-pro/precommande-iphone-18-pro */
export const article: CollectionArticle = {
  slug: "precommande-iphone-18-pro",
  model: "both",
  title: "iPhone 18 Pro : disponibilité et checklist d'achat",
  excerpt:
    "Disponibilité, configurations et checklist pour choisir l'iPhone 18 Pro ou le Pro Max maintenant que les deux modèles sont commercialisés.",
  image:
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80",
  updatedAt: "2026-09-23",
  publishedAt: "2026-09-11",
  intro:
    "Les iPhone 18 Pro et 18 Pro Max sont disponibles depuis le 18 septembre 2026. Voici les configurations officielles, les points à vérifier avant l'achat et les liens directs vers chaque modèle.",
  sections: [
    {
      id: "date-heure-exactes",
      heading: "Disponibles depuis le 18 septembre",
      paragraphs: [
        "Les précommandes ont ouvert le 12 septembre 2026 et la commercialisation a commencé le 18 septembre. Les deux modèles peuvent désormais être commandés directement chez les revendeurs.",
        "Les délais et les coloris disponibles peuvent évoluer selon le marchand. Consultez la fiche du modèle choisi pour connaître l'état du stock au moment de l'achat.",
        "Si vous visez le modèle pliable, l'iPhone Duo, son calendrier est distinct : précommandes le 16 octobre, sortie le 23 octobre.",
      ],
    },
    {
      id: "preparation-avant-14h",
      heading: "Ce qu'il faut choisir avant de commander",
      paragraphs: [
        "Les deux formats partagent l'essentiel de leur équipement. Trois choix permettent de sélectionner rapidement la bonne configuration.",
      ],
      bullets: [
        "Choisissez votre configuration à l'avance : modèle, capacité et coloris. Les quatre finitions sont noir, argent, glacier et bordeaux. Les capacités vont de 256 Go à 2 To, désormais sur les deux modèles.",
        "Choisissez le Pro pour son format plus léger, ou le Pro Max pour son écran plus grand et son autonomie supérieure.",
        "Évaluez votre besoin de stockage réel avant de passer de 256 Go aux capacités destinées aux usages vidéo intensifs.",
      ],
    },
    {
      id: "ou-precommander",
      heading: "Où commander",
      paragraphs: [
        "Les boutons ci-dessous mènent vers les fiches Amazon correspondant exactement à l'iPhone 18 Pro et à l'iPhone 18 Pro Max.",
        "Vérifiez le vendeur, la capacité, le coloris et le délai affiché avant de valider la commande.",
      ],
      showCta: true,
    },
    {
      id: "configurations-officielles",
      heading: "Les configurations officielles",
      paragraphs: [
        "Les iPhone 18 Pro et 18 Pro Max sont proposés en 256 Go, 512 Go, 1 To et 2 To.",
        "Le 2 To est désormais disponible sur les deux formats. Pour un usage courant, 256 Go reste le choix le plus équilibré ; les capacités supérieures répondent surtout à la capture ProRes et au stockage vidéo local.",
      ],
    },
    {
      id: "accessoires-meme-temps",
      heading: "Les accessoires à commander en même temps",
      paragraphs: [
        "Les coques et protections spécifiques au 18 Pro n'arrivent qu'à la sortie, mais tout ce qui est USB-C est déjà disponible et ne dépend pas du modèle. Un câble, un chargeur ou un hub commandés maintenant seront là avant le téléphone.",
      ],
      links: [
        {
          label: "Comparatif iPhone 16, 17 et 18 Pro : le tableau complet des trois générations",
          href: "/iphone-18-pro/comparatif-iphone-16-17-18",
        },
        {
          label: "Quelle capacité choisir pour l'iPhone 18 Pro ?",
          href: "/iphone-18-pro/choix-stockage-iphone-18-pro",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Quand l'iPhone 18 Pro est-il disponible en France ?",
      answer:
        "L'iPhone 18 Pro et le Pro Max sont disponibles depuis le vendredi 18 septembre 2026.",
    },
    {
      question: "Quelles sont les capacités disponibles pour l'iPhone 18 Pro et le Pro Max ?",
      answer:
        "Les deux modèles sont proposés en 256 Go, 512 Go, 1 To et 2 To. Le 2 To, auparavant réservé au Pro Max, est désormais disponible sur le Pro.",
    },
    {
      question: "Où commander l'iPhone 18 Pro ?",
      answer:
        "Les boutons Amazon de cette page ouvrent directement la fiche du modèle choisi. Vérifiez la capacité, le coloris, le vendeur et le délai avant l'achat.",
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
    title: "iPhone 18 Pro : disponibilité et checklist d'achat",
    description:
      "iPhone 18 Pro et Pro Max disponibles : configurations officielles, différences entre les modèles et checklist avant de commander.",
  },
};

export default article;
