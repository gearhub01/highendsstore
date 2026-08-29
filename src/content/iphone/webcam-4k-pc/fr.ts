import type { CollectionArticle } from "../types";

/** Article : /iphone-18-pro/webcam-4k-pc */
export const article: CollectionArticle = {
  slug: "webcam-4k-pc",
  model: "pro",
  title: "iPhone 18 Pro en webcam 4K sur PC : le guide complet",
  excerpt:
    "Brancher l'iPhone 18 Pro en USB-C pour obtenir un flux 4K propre sur OBS, Discord et Teams — matériel, réglages et limites.",
  image:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
  updatedAt: "2026-08-21",
  publishedAt: "2026-08-21",
  intro:
    "Une webcam 4K correcte coûte le prix d'un bon clavier. L'iPhone 18 Pro, lui, est déjà sur votre bureau : voici comment en faire la caméra principale de votre setup PC, sans logiciel douteux.",
  sections: [
    {
      id: "materiel",
      heading: "Le matériel nécessaire",
      paragraphs: [
        "Le flux vidéo passe par l'USB-C : un câble certifié et un support stable suffisent pour démarrer. Évitez les adaptateurs bon marché, principale cause de coupures de flux.",
      ],
      bullets: [
        "Un câble USB-C vers USB-C data (pas un câble de charge seul)",
        "Un support de bureau ou un bras articulé pour cadrer à hauteur d'yeux",
        "Optionnel : un éclairage LED pour compenser le bruit en basse lumière",
      ],
      amazon: {
        pro: {
          url: "https://www.amazon.fr/s?k=cable+usb+c+data+iphone+18+pro&tag=gearhub-21",
          productName: "Câble USB-C data pour iPhone 18 Pro",
        },
      },
      showCta: true,
    },
    {
      id: "reglages-obs",
      heading: "Réglages OBS et Discord",
      paragraphs: [
        "Ajoutez une source « Périphérique de capture vidéo », sélectionnez l'iPhone puis forcez la résolution en 3840x2160 à 30 fps. En 60 fps, descendez en 1080p : la plupart des cartes graphiques encodent mieux et la latence chute.",
        "Sur Discord et Teams, l'iPhone apparaît comme une caméra standard une fois la connexion établie ; aucun pilote supplémentaire n'est nécessaire.",
      ],
    },
    {
      id: "limites",
      heading: "Les limites à connaître",
      paragraphs: [
        "La chauffe reste le point faible sur les sessions longues : au-delà d'une heure de capture 4K, le capteur réduit la qualité. Un support ventilé ou un passage en 1080p règle le problème.",
      ],
      amazon: {
        pro: {
          url: "https://www.amazon.fr/s?k=support+ventile+smartphone+iphone&tag=gearhub-21",
          productName: "Support ventilé pour iPhone 18 Pro",
        },
      },
      showCta: true,
    },
  ],
  faq: [
    {
      question: "Faut-il une application payante ?",
      answer:
        "Non. La capture USB-C est reconnue nativement par Windows 11 et par OBS. Les applications tierces servent surtout à ajouter des filtres.",
    },
    {
      question: "Le son passe-t-il aussi par le câble ?",
      answer:
        "Oui, l'iPhone est exposé comme périphérique audio séparé. Pour du contenu publié, un micro dédié reste supérieur.",
    },
  ],
  amazon: {
    pro: {
      url: "https://www.amazon.fr/s?k=iPhone+18+Pro&tag=gearhub-21",
      productName: "iPhone 18 Pro",
    },
  },
  seo: {
    title: "iPhone 18 Pro en webcam 4K sur PC — Guide de branchement",
    description:
      "Transformez l'iPhone 18 Pro en webcam 4K pour votre PC : câble USB-C, réglages OBS et Discord, limites de chauffe et alternatives.",
  },
};

export default article;
