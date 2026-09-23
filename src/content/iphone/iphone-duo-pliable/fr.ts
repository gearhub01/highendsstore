import { AMAZON_URLS } from "@/config/amazon-links";
/**
 * Article : /iphone-18-pro/iphone-duo-pliable
 * Annonce officielle de l'iPhone Duo (premier pliable d'Apple).
 * Données officielles au 12 septembre 2026 — aucune valeur inventée.
 */
import type { CollectionArticle } from "../types";

export const article: CollectionArticle = {
  slug: "iphone-duo-pliable",
  model: "both",
  title: "iPhone Duo : le premier pliable d'Apple",
  excerpt:
    "Apple officialise l'iPhone Duo, son premier smartphone pliable : écran intérieur 7,6 pouces, précommandes le 16 octobre et sortie le 23 octobre.",
  image:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
  updatedAt: "2026-09-23",
  publishedAt: "2026-09-12",
  intro:
    "Apple a présenté l'iPhone Duo lors de son keynote de septembre 2026 : le premier smartphone pliable de la marque, avec un calendrier et un positionnement distincts des iPhone 18 Pro. Voici ce qui est officiel, ce qui ne l'est pas encore, et la question à vous poser si vous hésitiez avec un 18 Pro.",
  sections: [
    {
      id: "annonce",
      heading: "Ce qu'Apple a annoncé",
      paragraphs: [
        "L'iPhone Duo est le premier smartphone pliable d'Apple. Il associe un écran intérieur de 7,6 pouces à un écran extérieur de 5,4 pouces utilisable appareil fermé. Le nom attendu par les rumeurs était iPhone Ultra ou iPhone Fold ; c'est finalement Duo.",
        "Le format ouvert se rapproche d'une petite tablette : lecture, retouche, multitâche côte à côte. Fermé, l'écran extérieur permet les usages courants — répondre à un message, consulter une notification, lancer la caméra — sans déplier l'appareil.",
      ],
    },
    {
      id: "capacites",
      heading: "Les capacités disponibles",
      paragraphs: [
        "Apple propose quatre capacités pour adapter le Duo aux usages courants comme aux gros volumes de vidéo.",
        "Les versions 1 To et 2 To visent surtout la création et le stockage local intensif. Pour la plupart des usages, 256 Go ou 512 Go constituent les choix les plus équilibrés.",
      ],
      bullets: [
        "256 Go",
        "512 Go",
        "1 To",
        "2 To",
      ],
      showCta: true,
    },
    {
      id: "dates",
      heading: "Les dates",
      paragraphs: [
        "Précommandes le 16 octobre 2026, sortie le 23 octobre. Un calendrier distinct de celui des iPhone 18 Pro, disponibles dès le 18 septembre.",
      ],
      links: [
         { label: "iPhone 18 Pro : disponibilité et checklist d'achat", href: "/iphone-18-pro/precommande-iphone-18-pro" },
      ],
    },
    {
      id: "inconnues",
      heading: "Ce que l'on ne sait pas encore",
      paragraphs: [
        "À ce jour, Apple n'a pas communiqué sur plusieurs points essentiels pour un appareil pliable.",
        "L'autonomie détaillée n'a pas été dévoilée : aucune durée de lecture vidéo ou d'usage mixte n'est officielle. La résistance du mécanisme de pliage non plus — Apple n'a donné ni nombre de cycles garantis ni protocole de test. Enfin, le comportement de la charnière dans le temps (jeu, affaissement, poussière) reste une inconnue que seuls les premiers mois d'usage réel trancheront.",
        "Nous n'avancerons aucune valeur tant que rien n'est officiel. Cette page sera complétée à mesure que les informations officielles et les premiers tests indépendants seront disponibles.",
      ],
    },
    {
      id: "attendre-ou-18-pro",
      heading: "Faut-il l'attendre plutôt que prendre un 18 Pro ?",
      paragraphs: [
        "Posons la question honnêtement. Entre la sortie de l'iPhone 18 Pro et celle du Duo, il y a six semaines d'écart. Le Duo est aussi une première génération de produit, dont la fiabilité mécanique n'a pas encore été éprouvée hors des laboratoires d'Apple.",
        "Si votre usage est un setup PC — webcam, capture, second écran — le Duo n'apporte rien de documenté à ce jour sur ces points, tandis que le 18 Pro est déjà disponible et testé. Si le format pliable lui-même vous attire, attendez les premiers retours réels avant de choisir.",
      ],
      links: [
        { label: "Comparatif iPhone 16, 17 et 18 Pro : le tableau complet", href: "/iphone-18-pro/comparatif-iphone-16-17-18" },
        { label: "Retour à la collection iPhone 18 Pro & Pro Max", href: "/iphone-18-pro" },
      ],
    },
  ],
  faq: [
    {
      question: "Quelles capacités sont proposées pour l'iPhone Duo ?",
      answer:
        "L'iPhone Duo est proposé en 256 Go, 512 Go, 1 To et 2 To.",
    },
    {
      question: "Quand sort l'iPhone Duo ?",
      answer:
        "Les précommandes ouvrent le 16 octobre 2026 et la sortie est prévue le 23 octobre 2026, après les iPhone 18 Pro disponibles le 18 septembre.",
    },
    {
      question: "Quels écrans équipent l'iPhone Duo ?",
      answer:
        "Un écran intérieur de 7,6 pouces une fois déplié, et un écran extérieur de 5,4 pouces utilisable appareil fermé.",
    },
    {
      question: "L'iPhone Duo est-il fiable ?",
      answer:
        "Impossible à dire aujourd'hui : Apple n'a communiqué ni sur la résistance du mécanisme de pliage ni sur l'autonomie détaillée. Les premiers tests indépendants trancheront après la sortie.",
    },
  ],
  amazon: {
    duo: {
      url: AMAZON_URLS.duo,
      productName: "iPhone Duo — premier pliable d'Apple",
    },
  },
  related: [
    { label: "Comparatif iPhone 16, 17 et 18 Pro", href: "/iphone-18-pro/comparatif-iphone-16-17-18" },
    { label: "iPhone 18 Pro : disponibilité et checklist d'achat", href: "/iphone-18-pro/precommande-iphone-18-pro" },
    { label: "Collection iPhone 18 Pro & Pro Max", href: "/iphone-18-pro" },
  ],
  seo: {
    title: "iPhone Duo : le premier pliable d'Apple",
    description:
      "Apple officialise l'iPhone Duo, son premier smartphone pliable : écran intérieur 7,6 pouces, capacités, précommande et sortie en octobre.",
  },
};

export default article;
