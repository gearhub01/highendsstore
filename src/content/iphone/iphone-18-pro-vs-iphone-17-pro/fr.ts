/**
 * Comparatif iPhone 18 Pro vs iPhone 17 Pro.
 * Mise à jour officielle post-keynote du 9 septembre 2026.
 */
import type { CollectionArticle } from "../types";

export const article: CollectionArticle = {
  slug: "iphone-18-pro-vs-iphone-17-pro",
  model: "both",
  title: "iPhone 18 Pro vs 17 Pro : faut-il changer ?",
  excerpt:
    "iPhone 17 Pro contre iPhone 18 Pro : le tableau officiel ligne à ligne, et pourquoi passer cette année ne se justifie pas pour un usage bureau ou setup PC.",
  image:
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80",
  updatedAt: "2026-09-11",
  publishedAt: "2026-08-28",
  intro:
    "Le keynote est passé, les fiches techniques sont officielles. Voici le comparatif à deux colonnes entre l'iPhone 17 Pro et l'iPhone 18 Pro, et pourquoi nous pensons que le passage ne se justifie pas cette année, surtout si vous travaillez avec un PC.",
  topLinks: [
    {
      label: "Le tableau complet des trois générations",
      href: "/iphone-18-pro/comparatif-iphone-16-17-18",
    },
  ],
  sections: [
    {
      id: "tableau-comparatif",
      heading: "Le tableau comparatif",
      paragraphs: [
        "Toutes les valeurs ci-dessous sont officielles, relevées sur les fiches techniques publiées par Apple le 9 septembre 2026. Le tableau compare l'iPhone 17 Pro à l'iPhone 18 Pro.",
      ],
      table: {
        headers: ["Caractéristique", "iPhone 17 Pro", "iPhone 18 Pro"],
        rows: [
          ["Écran", "6,3\" OLED 2622 × 1206 à 460 ppp, ProMotion jusqu'à 120 Hz", "6,3\" OLED 2622 × 1206 à 460 ppp, ProMotion jusqu'à 120 Hz"],
          ["Luminosité", "1 000 nits typique, 1 600 nits pic HDR, 3 000 nits pic extérieur", "1 000 nits typique, 1 600 nits pic HDR, 3 000 nits pic extérieur"],
          ["Puce", "A19 Pro, CPU 6 cœurs (2 performance + 4 efficacité), GPU 6 cœurs", "A20 Pro gravée en 2 nm, CPU 6 cœurs, GPU 7 cœurs annoncé 40 % plus rapide, Neural Engine 16 cœurs"],
          ["Modem", "Qualcomm", "C2 conçu par Apple"],
          ["Stockage", "256 Go, 512 Go, 1 To", "256 Go, 512 Go, 1 To, 2 To"],
          [
            "Photo arrière",
            "48 Mpx Fusion 24 mm ƒ/1.78 + 48 Mpx Fusion ultra grand-angle 13 mm ƒ/2.2 + 48 Mpx Fusion téléobjectif 100 mm (4x) ƒ/2.8",
            "48 Mpx Fusion 24 mm à ouverture variable + 48 Mpx Fusion ultra grand-angle 13 mm ƒ/2.2 + 48 Mpx Fusion téléobjectif 100 mm (4x) ƒ/2.8",
          ],
          ["Zoom", "Qualité optique 8x, plage 16x", "Qualité optique 8x, plage 16x"],
          ["Caméra avant", "18 Mpx Center Stage, ƒ/1.9", "18 Mpx Center Stage, ƒ/1.9"],
          ["Vidéo", "4K Dolby Vision jusqu'à 120 i/s", "4K Dolby Vision jusqu'à 120 i/s"],
          ["Autonomie", "Jusqu'à 33 h de lecture vidéo", "Jusqu'à 34 h de lecture vidéo"],
          ["USB-C", "USB 3, jusqu'à 10 Gb/s", "USB 3, jusqu'à 10 Gb/s"],
          ["Sans fil", "Wi-Fi 7", "Wi-Fi 7"],
          ["Face ID", "TrueDepth classique", "TrueDepth classique"],
          ["Matériau", "Monocoque aluminium, Ceramic Shield 2 avant, Ceramic Shield dos", "Unibody aluminium, Ceramic Shield 2 avant, Ceramic Shield dos"],
          ["Poids", "206 g", "211 g"],
          ["Coloris", "Argent, Orange cosmique, Bleu profond", "Noir, Argent, Glacier, Bordeaux"],
        ],
      },
    },
    {
      id: "a19-pro-vs-a20-pro",
      heading: "L'A19 Pro contre l'A20 Pro : ce que la gravure 2 nm apporte",
      paragraphs: [
        "L'iPhone 17 Pro embarque la puce A19 Pro avec un CPU six cœurs et un GPU six cœurs. L'iPhone 18 Pro passe à l'A20 Pro gravée en 2 nanomètres, avec un CPU six cœurs et un GPU sept cœurs annoncé 40 % plus rapide que celui de l'A19 Pro. Le Neural Engine double passe à seize cœurs.",
        "Sur un usage quotidien — messagerie, navigation, visioconférence, bureautique — l'écart sera peu perceptible. L'A19 Pro est déjà surdimensionné pour ces tâches. Le gain se verra dans des usages soutenus : jeu gourmand, montage vidéo, traitements locaux d'image et modèles de machine learning exécutés sur l'appareil.",
        "Le modem C2 conçu par Apple, présent sur le 18 Pro, se juge davantage sur la consommation en veille et la qualité d'accroche que sur des débits théoriques. Pour un appareil qui passe ses journées sur un bureau en Wi-Fi, l'effet pratique sera limité.",
      ],
    },
    {
      id: "photo-video",
      heading: "Photo et vidéo : l'ouverture variable en question",
      paragraphs: [
        "Le 17 Pro dispose de trois capteurs 48 mégapixels Fusion à ouvertures fixes : ƒ/1.78 pour le principal 24 mm, ƒ/2.2 pour l'ultra grand-angle 13 mm, ƒ/2.8 pour le téléobjectif 100 mm équivalent 4x. La caméra avant est un capteur 18 mégapixels Center Stage à ƒ/1.9, et la vidéo grimpe en 4K Dolby Vision jusqu'à 120 images par seconde.",
        "Le 18 Pro apporte sa vraie nouveauté photographique : un mécanisme d'ouverture variable à six lamelles découpées au laser sur le capteur principal. Concrètement, l'appareil peut fermer son diaphragme pour élargir la zone de netteté, ou l'ouvrir pour isoler un sujet et capter davantage de lumière. C'est le premier changement depuis longtemps qui modifie ce que le capteur peut faire, et non seulement la manière dont le logiciel le traite.",
        "Pour un usage bureau ou setup PC, cet avantage reste marginal. Si vous filmez des plans produit sur un bureau ou utilisez le téléphone comme webcam, la scène est fixe, l'éclairage maîtrisé, et la profondeur de champ souhaitée est constante. Le bénéfice concerne la photographie mobile en conditions changeantes.",
      ],
    },
    {
      id: "setup-pc-usb-c",
      heading: "Pour un setup PC : le débit USB-C est la spec à surveiller",
      paragraphs: [
        "Voici la ligne du tableau qui devrait vraiment intéresser quelqu'un qui travaille avec un PC. L'iPhone 16 Pro, l'iPhone 17 Pro et l'iPhone 18 Pro plafonnent tous à 10 Gb/s en USB 3 sur leur port USB-C. Trois générations, un débit identique. Pendant ce temps, la définition et la cadence des vidéos produites par l'appareil ont augmenté : de la 4K Dolby Vision à 120 images par seconde, ça ne se transfère pas en un claquement de doigts.",
        "Faisons le calcul de ce que cela implique. 10 Gb/s est un maximum théorique de bus ; le débit soutenu réel dépend du stockage interne, du câble, du contrôleur côté PC et du logiciel de transfert. En pratique, sortir plusieurs dizaines de gigaoctets de rushes se compte en minutes, pas en secondes, et ce temps se paie à chaque session de montage. C'est le point de friction quotidien numéro un d'un iPhone utilisé comme caméra de production sur un bureau.",
        "C'est pourquoi le 18 Pro déçoit ici : le port USB-C n'a pas progressé. Pour qui transfère régulièrement de la vidéo vers un ordinateur, c'est le manque le plus concret de cette génération.",
        "Deux autres lignes méritent la même attention : la caméra avant, déjà excellente à 18 mégapixels Center Stage sur le 17 Pro, et l'autonomie annoncée, qui passe de 33 à 34 heures de lecture vidéo sur le Pro. Sur ces deux points, le 17 Pro reste très proche du 18 Pro.",
      ],
      bullets: [
        "16 Pro, 17 Pro et 18 Pro : USB 3, jusqu'à 10 Gb/s — aucun progrès en trois générations",
        "Caméra avant du 17 Pro : 18 Mpx Center Stage ƒ/1.9, identique au 18 Pro",
        "Autonomie annoncée : 33 h sur le 17 Pro, 34 h sur le 18 Pro",
      ],
      links: [
        { label: "Notre guide : l'iPhone en webcam 4K pour PC", href: "/iphone-18-pro/webcam-4k-pc" },
        { label: "Accessoires USB-C partagés PC / iPhone", href: "/iphone-18-pro/accessoires-usb-c-setup" },
      ],
    },
    {
      id: "notre-verdict",
      heading: "Notre verdict : gardez votre iPhone 17 Pro",
      paragraphs: [
        "Nous avons comparé les deux fiches techniques ligne à ligne, et la conclusion est nette : si vous possédez un iPhone 17 Pro, le passage au 18 Pro ne se justifie pas cette année.",
        "L'écran est rigoureusement identique — même diagonale, même définition, même luminosité de pointe. La caméra avant n'a pas bougé, toujours 18 Mpx Center Stage. Le port USB-C plafonne au même débit de 10 Gbit/s. Le Face ID reste le module TrueDepth classique. Le matériau et la construction restent en aluminium avec Ceramic Shield.",
        "Restent trois vraies différences. L'ouverture variable sur l'appareil principal, qui est une avancée réelle mais dont le bénéfice dépend entièrement de votre pratique photo. Le GPU annoncé 40 % plus rapide, perceptible en jeu et en montage, invisible ailleurs. Et l'autonomie, qui gagne une heure sur le Pro et quatre sur le Pro Max.",
        "Le changement ne tient que si vous photographiez beaucoup et que l'ouverture variable répond à un besoin précis que vous savez nommer.",
      ],
      subsections: [
        {
          heading: "Le cas particulier d'un setup PC",
          paragraphs: [
            "Si vous utilisez votre iPhone avec un ordinateur — transfert de fichiers, usage en webcam, second écran — l'argument est encore plus clair. Les deux points qui vous concernent, le débit du port USB-C et la définition de la caméra avant, sont strictement identiques d'une génération à l'autre. Vous ne gagneriez rien.",
            "Notre recommandation : attendez la prochaine génération, et surveillez deux choses en particulier — le passage éventuel du port à un débit supérieur, et le Face ID sous l'écran, repoussé cette année.",
          ],
        },
      ],
      links: [
        { label: "iPhone 18 Pro vs 16 Pro : le vrai saut", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-16-pro" },
        { label: "iPhone 18 Pro ou Pro Max : lequel choisir", href: "/iphone-18-pro/iphone-18-pro-vs-pro-max" },
        { label: "Retour à la collection iPhone 18 Pro & Pro Max", href: "/iphone-18-pro" },
      ],
    },
  ],
  faq: [
    {
      question: "Faut-il passer d'un iPhone 17 Pro à un iPhone 18 Pro ?",
      answer:
        "Non, dans la plupart des cas. Les écran, caméra avant, port USB-C et Face ID sont identiques. Seuls l'ouverture variable, le GPU et l'autonomie évoluent, de manière limitée.",
    },
    {
      question: "Quelle est la vraie différence entre l'A19 Pro et l'A20 Pro ?",
      answer:
        "L'A20 Pro passe à une gravure en 2 nm, avec un GPU à 7 cœurs annoncé 40 % plus rapide et un Neural Engine à 16 cœurs. Le gain est visible en jeu, montage vidéo et traitements locaux, mais imperceptible dans un usage quotidien.",
    },
    {
      question: "L'ouverture variable change-t-elle quelque chose pour un setup PC ?",
      answer:
        "Peu. En visioconférence, webcam ou plan produit sur un bureau, la scène est fixe et l'éclairage maîtrisé. Le bénéfice se situe plutôt dans la photographie mobile en conditions changeantes.",
    },
    {
      question: "Le port USB-C du 18 Pro est-il plus rapide ?",
      answer:
        "Non. Il reste en USB 3, plafonné à 10 Gbit/s, exactement comme sur le 16 Pro et le 17 Pro.",
    },
    {
      question: "Que sait-on officiellement de l'iPhone 17 Pro ?",
      answer:
        "Écran 6,3 pouces 2622 × 1206 à 460 ppp, puce A19 Pro, trois capteurs 48 Mpx Fusion, caméra avant 18 Mpx Center Stage, jusqu'à 33 h de lecture vidéo, USB 3 à 10 Gb/s et 206 g.",
    },
  ],
  amazon: {},
  related: [
    { label: "iPhone 18 Pro vs 16 Pro : le vrai saut", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-16-pro" },
    { label: "iPhone 18 Pro ou Pro Max : lequel choisir", href: "/iphone-18-pro/iphone-18-pro-vs-pro-max" },
    { label: "Collection iPhone 18 Pro & Pro Max", href: "/iphone-18-pro" },
  ],
  seo: {
    title: "iPhone 18 Pro vs 17 Pro : faut-il changer ?",
    description:
      "Comparatif officiel iPhone 18 Pro et 17 Pro : tableau à deux colonnes, différences réelles, et pourquoi le passage ne se justifie pas pour un setup PC.",
  },
};

export default article;
