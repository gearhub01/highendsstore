import type { CollectionArticle } from "./types";

/** Article : /iphone-18-pro/accessoires-usb-c-setup */
export const article: CollectionArticle = {
  slug: "accessoires-usb-c-setup",
  model: "both",
  title: "Accessoires USB-C partagés entre l'iPhone 18 Pro / Pro Max et le PC",
  excerpt:
    "Docks, câbles 240 W, SSD externes : les accessoires qui servent aux deux modèles comme au reste du setup gaming.",
  image:
    "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=1200&q=80",
  updatedAt: "2026-08-21",
  publishedAt: "2026-08-21",
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
};

export default article;
