import { AMAZON_URLS } from "@/config/amazon-links";
import type { CollectionArticle } from "../types";

/** Article : /iphone-18-pro/precommande-iphone-18-pro */
export const article: CollectionArticle = {
  slug: "precommande-iphone-18-pro",
  model: "both",
  title: "Précommande iPhone 18 Pro : date, heure et checklist",
  excerpt:
    "Date, heure, prix officiels en France et checklist pour précommander l'iPhone 18 Pro ou le Pro Max sans rater le créneau du 12 septembre 2026.",
  image:
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80",
  updatedAt: "2026-09-11",
  publishedAt: "2026-09-11",
  intro:
    "Les précommandes de l'iPhone 18 Pro et du 18 Pro Max ouvrent le samedi 12 septembre 2026 à 14 h, heure de Paris. La mise en vente en boutique suit le vendredi 18 septembre. Voici ce qu'il faut avoir préparé avant l'ouverture, et où commander.",
  sections: [
    {
      id: "date-heure-exactes",
      heading: "La date et l'heure exactes",
      paragraphs: [
        "Apple a fixé l'ouverture des précommandes au samedi 12 septembre à 14 h précises, heure de Paris. Beaucoup de sites annonçaient le vendredi 11 : c'était une projection fondée sur les habitudes d'Apple, et elle s'est révélée fausse. La marque évite traditionnellement toute opération commerciale le 11 septembre, et 2026 en marquait le vingt-cinquième anniversaire.",
        "La livraison des premières commandes et la disponibilité en magasin interviennent le vendredi 18 septembre.",
        "Si vous visez le modèle pliable, l'iPhone Duo, son calendrier est distinct : précommandes le 16 octobre, sortie le 23 octobre.",
      ],
    },
    {
      id: "preparation-avant-14h",
      heading: "Ce qu'il faut préparer avant 14 h",
      paragraphs: [
        "Les configurations les plus demandées partent en quelques minutes, et le délai de livraison peut glisser de plusieurs semaines dans l'heure qui suit l'ouverture. Trois choses à régler avant, pas pendant.",
      ],
      bullets: [
        "Choisissez votre configuration à l'avance : modèle, capacité et coloris. Les quatre finitions sont noir, argent, glacier et bordeaux. Les capacités vont de 256 Go à 2 To, désormais sur les deux modèles.",
        "Vérifiez que votre moyen de paiement et votre adresse de livraison sont à jour dans le compte que vous utiliserez. Une carte expirée fait perdre le créneau.",
        "Préparez votre reprise si vous en faites une : l'estimation se fait en amont, et la faire au moment de la commande coûte de précieuses minutes.",
      ],
    },
    {
      id: "ou-precommander",
      heading: "Où précommander",
      paragraphs: [
        "Apple propose la précommande sur sa boutique en ligne et dans son application dès 14 h. C'est la voie la plus rapide et la seule à proposer la gravure personnalisée.",
        "Les opérateurs ouvrent généralement au même moment, avec des offres liées à un forfait. Comparez le coût total sur vingt-quatre mois plutôt que le prix affiché à la souscription.",
        "Les revendeurs et marchands en ligne ouvrent souvent quelques heures plus tard, parfois le jour de la sortie. Leurs stocks sont plus limités mais les délais de livraison peuvent être meilleurs que ceux d'Apple une fois les premières vagues écoulées.",
      ],
    },
    {
      id: "prix-officiels-france",
      heading: "Les prix officiels en France",
      paragraphs: [
        "Prix officiels Apple au 10 septembre 2026.",
        "iPhone 18 Pro : 1 479 € en 256 Go, 1 729 € en 512 Go, 2 229 € en 1 To, 2 979 € en 2 To.",
        "iPhone 18 Pro Max : 1 629 € en 256 Go, 1 879 € en 512 Go, 2 379 € en 1 To, 3 129 € en 2 To.",
        "Un point à connaître avant de choisir : la hausse par rapport à la génération précédente est de 150 € sur le 256 et le 512 Go, mais elle atteint 400 € sur le 1 To et 650 € sur le Pro Max 2 To. Le surcoût du 1 To face au 256 Go est passé de 500 à 750 €. Si vous hésitiez sur la capacité, cette année penche nettement vers le 256 Go.",
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
      question: "À quelle heure ouvrent les précommandes de l'iPhone 18 Pro en France ?",
      answer:
        "Les précommandes ouvrent le samedi 12 septembre 2026 à 14 h, heure de Paris. La mise en vente en magasin et les premières livraisons interviennent le vendredi 18 septembre.",
    },
    {
      question: "Quelles sont les capacités disponibles pour l'iPhone 18 Pro et le Pro Max ?",
      answer:
        "Les deux modèles sont proposés en 256 Go, 512 Go, 1 To et 2 To. Le 2 To, auparavant réservé au Pro Max, est désormais disponible sur le Pro.",
    },
    {
      question: "Où précommander l'iPhone 18 Pro le plus rapidement ?",
      answer:
        "La boutique en ligne et l'application Apple ouvrent à 14 h précises et proposent la gravure personnalisée. Les opérateurs ouvrent généralement au même moment, les revendeurs en ligne souvent quelques heures plus tard.",
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
    title: "Précommande iPhone 18 Pro : date, heure et checklist",
    description:
      "Précommande iPhone 18 Pro et Pro Max : date, heure, prix officiels en France et checklist pour commander sans rater le créneau du 12 septembre 2026.",
  },
};

export default article;
