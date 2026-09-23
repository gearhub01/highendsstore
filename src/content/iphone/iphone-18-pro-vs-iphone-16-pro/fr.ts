/** Comparatif officiel iPhone 18 Pro vs iPhone 16 Pro. */
import { AMAZON_URLS } from "@/config/amazon-links";
import type { CollectionArticle } from "../types";

export const article: CollectionArticle = {
  slug: "iphone-18-pro-vs-iphone-16-pro",
  model: "both",
  title: "iPhone 18 Pro vs 16 Pro : le vrai saut",
  excerpt:
    "Deux générations d'écart : écran, A20 Pro, photo, autonomie et caméra avant comparés à partir des fiches techniques officielles.",
  image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=1200&q=80",
  updatedAt: "2026-09-23",
  publishedAt: "2026-08-28",
  intro:
    "L'iPhone 18 Pro est officiel. Face au 16 Pro, le changement cumule deux générations d'améliorations : écran plus lumineux, caméra avant 18 Mpx, téléobjectif 48 Mpx, ouverture variable, autonomie renforcée et puce A20 Pro. Voici les différences qui comptent réellement.",
  featuredAmazon: true,
  topLinks: [{ label: "Le tableau complet des trois générations", href: "/iphone-18-pro/comparatif-iphone-16-17-18" }],
  sections: [
    {
      id: "tableau-complet",
      heading: "Le tableau officiel 16 Pro / 18 Pro",
      paragraphs: [
        "Les valeurs ci-dessous proviennent des fiches techniques Apple. Le tableau se limite aux deux modèles comparés ; la page de référence rassemble les six modèles Pro et Pro Max des générations 16, 17 et 18.",
      ],
      table: {
        caption: "Source : fiches techniques officielles Apple, vérifiées le 23 septembre 2026.",
        headers: ["Caractéristique", "iPhone 16 Pro", "iPhone 18 Pro"],
        rows: [
          ["Écran", "6,3\" OLED, ProMotion 120 Hz", "6,3\" OLED 2622 × 1206 à 460 ppp, ProMotion 120 Hz"],
          ["Luminosité", "2 000 nits en pic extérieur", "1 000 nits typique, 1 600 nits pic HDR, 3 000 nits pic extérieur"],
          ["Puce", "A18 Pro", "A20 Pro gravée en 2 nm, CPU 6 cœurs, GPU 7 cœurs, Neural Engine 16 cœurs"],
          ["Stockage", "128 Go, 256 Go, 512 Go, 1 To", "256 Go, 512 Go, 1 To, 2 To"],
          ["Photo arrière", "48 Mpx principal + 48 Mpx ultra grand-angle + 12 Mpx téléobjectif 5x", "48 Mpx Fusion à ouverture variable + 48 Mpx ultra grand-angle + 48 Mpx téléobjectif 4x"],
          ["Zoom", "5x optique", "4x optique, 8x qualité optique"],
          ["Caméra avant", "12 Mpx TrueDepth", "18 Mpx Center Stage ƒ/1.9"],
          ["Vidéo", "4K Dolby Vision", "4K Dolby Vision jusqu'à 120 i/s, ProRes 4K120 externe, vidéo spatiale"],
          ["Autonomie vidéo", "Jusqu'à 27 h", "Jusqu'à 34 h"],
          ["USB-C", "USB 3, jusqu'à 10 Gbit/s", "USB 3, jusqu'à 10 Gbit/s"],
          ["Sans fil", "—", "5G sub-6 GHz, Wi-Fi 7, Bluetooth 6"],
          ["Face ID", "TrueDepth", "TrueDepth classique"],
          ["Matériau", "Titane, dos en verre mat", "Unibody aluminium, Ceramic Shield 2 avant et Ceramic Shield au dos"],
          ["Poids", "199 g", "211 g"],
          ["Dimensions", "71,5 × 149,6 × 8,25 mm", "71,9 × 150 × 8,75 mm"],
          ["Coloris", "Noir, Blanc, Naturel, Désert", "Noir, Argent, Glacier, Bordeaux"],
        ],
      },
    },
    {
      id: "deux-generations",
      heading: "Ce que deux générations changent vraiment",
      paragraphs: [
        "Le premier gain est la lisibilité extérieure : le pic passe de 2 000 à 3 000 nits. La diagonale et le rafraîchissement restent identiques, mais l'écran du 18 Pro demeure plus lisible en plein soleil.",
        "Le bloc photo évolue sur deux fronts. Le téléobjectif passe de 12 Mpx 5x à 48 Mpx avec un zoom 4x optique et 8x de qualité optique. Le capteur principal de 48 Mpx gagne surtout une ouverture variable à six lamelles, qui adapte optiquement la profondeur de champ et la lumière captée.",
        "La caméra avant passe de 12 Mpx TrueDepth à 18 Mpx Center Stage ƒ/1.9. Pour la visioconférence et l'usage webcam, c'est le progrès le plus visible. L'autonomie vidéo gagne aussi sept heures, de 27 à 34 heures.",
      ],
    },
    {
      id: "a20-pro",
      heading: "A20 Pro : le gain de puissance",
      paragraphs: [
        "L'A20 Pro est gravée en 2 nm et associe un CPU à six cœurs, un GPU à sept cœurs et un Neural Engine à seize cœurs. L'écart avec l'A18 Pro se ressent surtout en jeu, en montage vidéo et dans les traitements locaux soutenus.",
        "Pour la navigation, la messagerie et la visioconférence, l'A18 Pro reste déjà très performante. La puce seule ne justifie donc pas le changement ; elle prend son sens avec les gains photo, écran et autonomie.",
      ],
    },
    {
      id: "setup-pc",
      heading: "Pour un setup PC : caméra avant en hausse, USB-C inchangé",
      paragraphs: [
        "Sur un bureau, la caméra avant 18 Mpx Center Stage représente le principal progrès face au 16 Pro. Elle offre davantage de définition pour le recadrage automatique et une meilleure marge dans une pièce peu éclairée.",
        "Le port USB-C reste toutefois limité à l'USB 3 à 10 Gbit/s. Malgré la vidéo plus ambitieuse du 18 Pro, le transfert filaire ne progresse pas. Un câble certifié pour les données reste indispensable.",
        "Le 18 Pro pèse 211 g contre 199 g pour le 16 Pro. Ce supplément reste raisonnable en main, mais mérite un support rigide lorsque le téléphone sert de webcam au-dessus d'un moniteur.",
      ],
      links: [
        { label: "Notre guide : l'iPhone en webcam 4K pour PC", href: "/iphone-18-pro/webcam-4k-pc" },
        { label: "Accessoires USB-C partagés PC / iPhone", href: "/iphone-18-pro/accessoires-usb-c-setup" },
      ],
    },
    {
      id: "verdict",
      heading: "Verdict : un changement cohérent après deux générations",
      paragraphs: [
        "Le passage du 16 Pro au 18 Pro est nettement plus défendable qu'un renouvellement annuel. L'écran extérieur, la caméra avant, le téléobjectif, l'ouverture variable et l'autonomie progressent tous de manière mesurable.",
        "Conservez néanmoins votre 16 Pro si sa batterie reste saine et si la photo ou la webcam ne sont pas centrales dans votre usage. Pour un appareil utilisé quotidiennement en création, en jeu ou dans un setup PC, le cumul des améliorations devient pertinent.",
      ],
      links: [
        { label: "iPhone 18 Pro vs 17 Pro : faut-il changer ?", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro" },
        { label: "iPhone 18 Pro ou Pro Max : lequel choisir", href: "/iphone-18-pro/iphone-18-pro-vs-pro-max" },
      ],
    },
  ],
  faq: [
    { question: "Qu'apporte l'iPhone 18 Pro face au 16 Pro ?", answer: "Un écran extérieur plus lumineux, une caméra avant 18 Mpx Center Stage, un téléobjectif 48 Mpx, une ouverture variable, sept heures d'autonomie vidéo supplémentaires et la puce A20 Pro." },
    { question: "Le débit USB-C a-t-il progressé ?", answer: "Non. Les deux modèles utilisent l'USB 3 jusqu'à 10 Gbit/s." },
    { question: "Le 18 Pro est-il meilleur comme webcam ?", answer: "Oui face au 16 Pro, principalement grâce à sa caméra avant 18 Mpx Center Stage ƒ/1.9, contre 12 Mpx sur le 16 Pro." },
  ],
  amazon: {
    pro: { url: AMAZON_URLS.pro, productName: "iPhone 18 Pro" },
    pro_max: { url: AMAZON_URLS.pro_max, productName: "iPhone 18 Pro Max" },
  },
  related: [
    { label: "iPhone 18 Pro vs 17 Pro", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro" },
    { label: "iPhone 18 Pro ou Pro Max", href: "/iphone-18-pro/iphone-18-pro-vs-pro-max" },
  ],
  seo: {
    title: "iPhone 18 Pro vs 16 Pro : comparatif officiel",
    description: "Comparatif officiel iPhone 18 Pro et 16 Pro : écran, A20 Pro, photo, caméra avant, autonomie, USB-C, poids et verdict après deux générations.",
  },
};

export default article;