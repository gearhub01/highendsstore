import type { CollectionArticle } from "../types";

/**
 * Article : /iphone-18-pro/webcam-4k-pc
 * Couvre l'iPhone 18 Pro ET le Pro Max (fusion de l'ancien article
 * `webcam-4k-pc-pro-max`, redirigé vers cette page).
 */
export const article: CollectionArticle = {
  slug: "webcam-4k-pc",
  model: "both",
  title: "iPhone 18 Pro et Pro Max en webcam 4K sur PC : le guide complet",
  excerpt:
    "Brancher l'iPhone 18 Pro ou Pro Max en USB-C pour obtenir un flux 4K propre sur OBS, Discord et Teams — matériel, réglages, différences entre les deux modèles et limites.",
  image:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
  updatedAt: "2026-08-29",
  publishedAt: "2026-08-21",
  intro:
    "Une webcam 4K correcte coûte le prix d'un bon clavier. L'iPhone 18 Pro — ou le Pro Max — est déjà sur votre bureau : voici comment en faire la caméra principale de votre setup PC, sans logiciel douteux, et ce qui change concrètement entre les deux modèles.",
  sections: [
    {
      id: "materiel",
      heading: "Le matériel nécessaire",
      paragraphs: [
        "Le flux vidéo passe par l'USB-C : un câble certifié et un support stable suffisent pour démarrer, quel que soit le modèle. Évitez les adaptateurs bon marché, principale cause de coupures de flux.",
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
        "Sur Discord et Teams, l'iPhone apparaît comme une caméra standard une fois la connexion établie ; aucun pilote supplémentaire n'est nécessaire. Les réglages sont identiques sur le Pro et le Pro Max.",
      ],
    },
    {
      id: "pro-vs-pro-max",
      heading: "Pro ou Pro Max : ce qui change vraiment en webcam",
      paragraphs: [
        "La qualité d'image est identique : même capteur principal, même traitement, même flux 4K. Les différences apparaissent sur la durée, pas sur les cinq premières minutes de capture.",
        "Le Pro Max dispose d'une plus grande surface de dissipation et d'une batterie plus généreuse : le seuil de bridage thermique arrive plus tard et la charge continue sur un dock alimenté absorbe mieux les pics liés à l'encodage 4K. Sur une session de stream de trois heures, c'est lui qui tient la définition le plus longtemps.",
        "En contrepartie, son poids demande un bras articulé rigide : un support souple vibre à chaque frappe clavier, ce qui se voit immédiatement en 4K. Le Pro, plus léger, s'accommode d'un simple support de bureau.",
      ],
      bullets: [
        "Qualité d'image : identique sur les deux modèles",
        "Sessions courtes (visio, réunions) : le Pro suffit largement",
        "Sessions longues (stream, tournage) : le Pro Max tient mieux la chauffe",
        "Pro Max : bras articulé rigide obligatoire pour éviter les micro-vibrations",
      ],
      amazon: {
        pro_max: {
          url: "https://www.amazon.fr/s?k=bras+articule+smartphone+pro+max&tag=gearhub-21",
          productName: "Bras articulé pour iPhone 18 Pro Max",
        },
      },
      showCta: true,
    },
    {
      id: "limites",
      heading: "Les limites à connaître",
      paragraphs: [
        "La chauffe reste le point faible sur les sessions longues : au-delà d'une heure de capture 4K sur le Pro (nettement plus sur le Pro Max), le capteur réduit la qualité. Un support ventilé ou un passage en 1080p60 règle le problème.",
        "Évitez aussi la charge rapide pendant la capture : elle ajoute de la chaleur là où le téléphone en produit déjà.",
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
    {
      question: "Le Pro Max filme-t-il mieux que le Pro ?",
      answer:
        "Non, la qualité d'image est identique. La différence porte sur l'endurance thermique et l'autonomie sur les captures longues.",
    },
    {
      question: "Faut-il un support différent pour le Pro Max ?",
      answer:
        "Oui, privilégiez un bras articulé prévu pour le poids du grand modèle afin d'éviter les micro-vibrations visibles en 4K.",
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
    title: "iPhone 18 Pro et Pro Max en webcam 4K sur PC",
    description:
      "Transformez l'iPhone 18 Pro ou Pro Max en webcam 4K pour votre PC : câble USB-C, réglages OBS et Discord, différences entre les deux modèles et limites thermiques.",
  },
};

export default article;
