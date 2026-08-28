/**
 * Comparatif iPhone 18 Pro vs iPhone 16 Pro.
 * RÈGLE : aucune caractéristique de l'iPhone 18 Pro n'est confirmée.
 * Toute cellule le concernant porte « Non confirmé » ou « Rumeur — non confirmé ».
 */
import type { CollectionArticle } from "./types";

const NC = "Non confirmé";
const RUMOR = "Rumeur — non confirmé au 27/08/2026";

export const article: CollectionArticle = {
  slug: "iphone-18-pro-vs-iphone-16-pro",
  model: "both",
  title: "iPhone 18 Pro vs 16 Pro : le vrai saut",
  excerpt:
    "Deux générations d'écart : caméra avant, autonomie et écran comparés entre iPhone 16 Pro, 17 Pro et 18 Pro, du point de vue d'un bureau PC.",
  image:
    "https://images.unsplash.com/photo-1592286927505-1def25115558?w=1200&q=80",
  updatedAt: "2026-08-28",
  publishedAt: "2026-08-28",
  intro:
    "La majorité des gens qui envisagent l'iPhone 18 Pro n'ont pas un 17 Pro dans la poche : ils ont un 16 Pro, acheté à l'automne 2024, et ils attendent deux générations avant de changer. C'est cette comparaison-là qui décide d'un achat, et c'est celle que presque personne ne fait proprement.",
  notice:
    "Mis à jour le 28 août 2026 — les caractéristiques de l'iPhone 18 Pro seront confirmées lors du keynote du 9 septembre 2026. Tant que ce n'est pas le cas, aucune valeur n'est avancée pour ce modèle sur cette page.",
  sections: [
    {
      id: "pourquoi-cette-comparaison",
      heading: "Pourquoi c'est cette comparaison qui compte",
      paragraphs: [
        "Le cycle de renouvellement réel d'un iPhone Pro n'est pas d'un an. Il est de deux à trois ans, parfois davantage depuis que les mises à jour logicielles couvrent cinq à six générations. Concrètement, la personne qui hésite aujourd'hui devant l'iPhone 18 Pro tient dans la main un iPhone 16 Pro sorti en septembre 2024, encore parfaitement fonctionnel, avec une batterie qui commence à fatiguer et un appareil photo qui lui convient. Sa question n'est pas « qu'est-ce que le 18 Pro apporte de plus que le 17 Pro », mais « qu'est-ce que deux ans d'écart apportent ».",
        "Cette nuance change tout, parce que le saut de génération réel n'est pas celui que les comparatifs annuels mettent en avant. Entre un 16 Pro et un 17 Pro, il y a déjà eu un changement de matériau de châssis, une refonte complète du bloc photo arrière, un capteur avant entièrement nouveau, un gain d'autonomie de six heures en lecture vidéo et une luminosité extérieure qui passe de 2 000 à 3 000 nits. Ces chiffres sont officiels, publiés par Apple, et ils sont déjà là. Ils constituent le plancher du saut : quoi que le 18 Pro apporte le 9 septembre, l'acheteur venant d'un 16 Pro les encaissera en plus.",
        "Notre parti pris sur cette page est donc simple. Nous décrivons avec précision ce qui a déjà changé entre le 16 Pro et le 17 Pro, parce que c'est vérifiable. Nous listons ensuite ce qui circule au sujet du 18 Pro en l'étiquetant systématiquement comme rumeur, sans jamais transformer une fuite en caractéristique. Et nous regardons le tout depuis un angle que personne d'autre ne traite : celui d'un iPhone posé sur un bureau, branché en USB-C à un PC, utilisé comme webcam et comme source de capture.",
        "Un mot sur la méthode. Toutes les valeurs attribuées ici au 16 Pro et au 17 Pro proviennent des fiches techniques publiées par Apple. Aucune n'est mesurée par nos soins, et nous ne les présentons pas comme des résultats de test : ce sont des données constructeur, utiles pour comparer des générations entre elles puisqu'elles sont produites selon les mêmes protocoles internes. Les valeurs d'autonomie annoncées, en particulier, sont des maximums de lecture vidéo locale, pas des journées d'usage réel.",
      ],
    },
    {
      id: "tableau-complet",
      heading: "Le tableau complet 16 Pro / 17 Pro / 18 Pro",
      paragraphs: [
        "Le tableau ci-dessous met côte à côte les deux générations connues et la colonne encore vide du 18 Pro. Cette colonne restera vide jusqu'au keynote : c'est volontaire, et c'est la seule façon honnête de présenter un appareil non annoncé.",
      ],
      table: {
        headers: ["Caractéristique", "iPhone 16 Pro", "iPhone 17 Pro", "iPhone 18 Pro"],
        rows: [
          ["Écran", "6,3\" OLED, ProMotion jusqu'à 120 Hz", "6,3\" OLED 2622 × 1206 à 460 ppp, ProMotion jusqu'à 120 Hz", NC],
          ["Luminosité", "2 000 nits en pic extérieur", "1 000 nits typique, 1 600 nits pic HDR, 3 000 nits pic extérieur", NC],
          ["Puce", "A18 Pro", "A19 Pro, CPU 6 cœurs (2 performance + 4 efficacité)", "A20 Pro gravée en 2 nm — " + RUMOR],
          ["Modem", NC, NC, "Modem C2 conçu par Apple — " + RUMOR],
          ["Stockage", "128 Go, 256 Go, 512 Go, 1 To", "256 Go, 512 Go, 1 To", NC],
          [
            "Photo arrière",
            "48 Mpx Fusion + 48 Mpx ultra grand-angle + 12 Mpx téléobjectif 5x",
            "48 Mpx Fusion 24 mm ƒ/1.78 + 48 Mpx Fusion ultra grand-angle 13 mm ƒ/2.2 + 48 Mpx Fusion téléobjectif 100 mm (4x) ƒ/2.8",
            "Ouverture variable — " + RUMOR,
          ],
          ["Zoom", "Téléobjectif 5x", "Zoom qualité optique 8x, plage 16x", NC],
          ["Caméra avant", "12 Mpx TrueDepth", "18 Mpx Center Stage, ƒ/1.9", NC],
          ["Vidéo", NC, "4K Dolby Vision jusqu'à 120 i/s", NC],
          ["Autonomie", "Jusqu'à 27 h de lecture vidéo", "Jusqu'à 33 h de lecture vidéo", NC],
          ["USB-C", "USB 3, jusqu'à 10 Gb/s", "USB 3, jusqu'à 10 Gb/s", NC],
          ["Sans fil", NC, "Wi-Fi 7", NC],
          ["Face ID", NC, NC, "Face ID sous l'écran, avec des rapports contradictoires évoquant un report à 2027 — " + RUMOR],
          ["Matériau", "Titane, dos en verre mat texturé", "Monocoque aluminium, Ceramic Shield 2 à l'avant, Ceramic Shield au dos", NC],
          ["Poids", "199 g", "206 g", NC],
          ["Coloris", "Noir, Blanc, Naturel, Désert", "Argent, Orange cosmique, Bleu profond", NC],
          ["Prix", "—", "—", "Hausse de 250 à 300 $ évoquée par l'analyste Jeff Pu (GF Securities) — " + RUMOR],
        ],
      },
    },
    {
      id: "16-pro-vers-17-pro",
      heading: "Ce qui a déjà changé entre le 16 Pro et le 17 Pro",
      paragraphs: [
        "Commençons par le châssis, parce que c'est le changement le plus visible et le plus discuté. Le 16 Pro est en titane avec un dos en verre mat texturé. Le 17 Pro abandonne cette construction pour un monocoque en aluminium, avec du Ceramic Shield 2 à l'avant et du Ceramic Shield au dos. Le poids passe de 199 à 206 grammes. Sept grammes, ce n'est rien en main ; nous verrons plus loin que ce n'est pas rien sur un support de bureau.",
        "L'écran conserve la même diagonale de 6,3 pouces et la même dalle OLED avec ProMotion jusqu'à 120 Hz, mais la fiche technique du 17 Pro est nettement plus détaillée : 2622 × 1206 pixels à 460 ppp, 1 000 nits de luminosité typique, 1 600 nits en pic HDR et 3 000 nits en pic extérieur, contre 2 000 nits en pic extérieur sur le 16 Pro. Le gain se ressent dehors en plein soleil, beaucoup moins sur un bureau en intérieur.",
        "Le bloc photo arrière est le poste où Apple a le plus investi. Le 16 Pro combinait deux capteurs 48 mégapixels et un téléobjectif 12 mégapixels 5x. Le 17 Pro passe à trois capteurs 48 mégapixels Fusion : un principal 24 mm ƒ/1.78, un ultra grand-angle 13 mm ƒ/2.2 et un téléobjectif 100 mm équivalent 4x ƒ/2.8, avec un zoom de qualité optique annoncé jusqu'à 8x et une plage totale de 16x. Le téléobjectif recule donc en focale native, de 5x à 4x, tout en gagnant énormément en définition : c'est un arbitrage, pas une régression pure.",
        "Côté puce, on passe de l'A18 Pro à l'A19 Pro, dont Apple détaille un CPU à six cœurs, deux de performance et quatre d'efficacité. Pour un usage bureautique, photo et capture vidéo, aucun des deux ne constitue un facteur limitant aujourd'hui. Le gain se lit surtout sur les traitements photo et vidéo en temps réel, et sur la marge de longévité logicielle.",
        "L'autonomie annoncée grimpe de 27 à 33 heures de lecture vidéo, soit six heures de plus, environ 22 % de mieux. C'est probablement le chiffre le plus concret du tableau pour un usage quotidien. La connectique, elle, ne bouge pas : USB-C en USB 3, jusqu'à 10 Gb/s sur les deux générations. Le 17 Pro ajoute le Wi-Fi 7. Enfin, le stockage d'entrée passe de 128 à 256 Go, ce qui supprime la version la plus juste du catalogue.",
      ],
      bullets: [
        "Châssis : titane et verre mat texturé → monocoque aluminium avec Ceramic Shield 2 à l'avant",
        "Écran : pic extérieur de 2 000 → 3 000 nits, diagonale et ProMotion inchangés",
        "Photo arrière : téléobjectif 12 Mpx 5x → 48 Mpx Fusion 4x, zoom qualité optique 8x",
        "Caméra avant : 12 Mpx TrueDepth → 18 Mpx Center Stage ƒ/1.9",
        "Autonomie : 27 h → 33 h de lecture vidéo",
        "Stockage d'entrée : 128 Go → 256 Go",
      ],
    },
    {
      id: "ce-que-le-18-pro-pourrait-ajouter",
      heading: "Ce que le 18 Pro pourrait ajouter — rumeurs étiquetées",
      paragraphs: [
        "Rien de ce qui suit n'est confirmé. Ce sont des informations qui circulent dans la presse spécialisée et dans les notes d'analystes, toutes datées d'avant le keynote du 9 septembre 2026. Nous les listons parce que les ignorer serait malhonnête, et nous les étiquetons parce que les présenter autrement le serait tout autant.",
        "La rumeur la plus constante concerne la puce, une A20 Pro gravée en 2 nanomètres. Un changement de nœud de gravure joue traditionnellement sur deux tableaux : la performance à consommation égale, et la consommation à performance égale. C'est ce second effet qui intéresse un usage de bureau, où le téléphone tourne longtemps sur une tâche continue plutôt que par à-coups. Reste que le gain réel dépend entièrement de l'implémentation, et qu'aucun chiffre n'a été publié.",
        "Deuxième rumeur : un modem C2 conçu par Apple, évoqué dans l'une des deux variantes de carte mère dont il est question. Pour un usage sédentaire branché en USB-C, l'impact serait marginal ; il porterait surtout sur la consommation en veille connectée et sur la qualité de réception en mobilité.",
        "Troisième rumeur, la plus spectaculaire : un Face ID placé sous l'écran, qui libérerait une partie de la zone occupée par la Dynamic Island. Des rapports contradictoires évoquent cependant un report de cette technologie à 2027. C'est typiquement le genre de fonctionnalité qu'il ne faut pas intégrer à une décision d'achat tant qu'elle n'est pas montrée sur scène.",
        "Quatrième rumeur : une caméra à ouverture variable, c'est-à-dire un diaphragme mécanique capable de changer de valeur au lieu d'une ouverture fixe. Sur le papier, cela offrirait un vrai contrôle de la profondeur de champ et une meilleure gestion des scènes très lumineuses. Nous y revenons dans le comparatif dédié au 17 Pro.",
        "Cinquième point, financier celui-là : une hausse de prix de 250 à 300 dollars a été évoquée par l'analyste Jeff Pu, de GF Securities. Une note d'analyste n'est pas un tarif officiel, et l'écart entre les deux est historiquement large. À retenir uniquement comme un signal de prudence budgétaire, pas comme un prix.",
      ],
      bullets: [
        `A20 Pro gravée en 2 nm — ${RUMOR}`,
        `Modem C2 conçu par Apple — ${RUMOR}`,
        `Face ID sous l'écran, report à 2027 évoqué — ${RUMOR}`,
        `Caméra à ouverture variable — ${RUMOR}`,
        `Hausse de prix de 250 à 300 $ (Jeff Pu, GF Securities) — ${RUMOR}`,
      ],
    },
    {
      id: "setup-pc",
      heading: "Pour un setup PC : ce qui change vraiment",
      paragraphs: [
        "Voici l'angle que les comparatifs généralistes ne prennent jamais. Sur un bureau, un iPhone Pro n'est pas d'abord un téléphone : c'est le meilleur capteur vidéo que vous possédez déjà. Branché en USB-C à un PC, il sert de webcam, de caméra de secours pour un stream, de source de capture pour une visio importante. Et dans cet usage, ce n'est pas la caméra arrière qui travaille, c'est la caméra avant.",
        "Or c'est précisément là que se joue le saut de génération le plus important des deux dernières années, et personne n'en parle. Le 16 Pro embarque une caméra avant 12 mégapixels TrueDepth. Le 17 Pro passe à un capteur 18 mégapixels Center Stage ouvrant à ƒ/1.9. Ce n'est pas un ajustement cosmétique : c'est 50 % de définition supplémentaire sur le capteur qui filme votre visage huit heures par jour en visio, avec une ouverture plus généreuse, donc plus de lumière captée dans une pièce éclairée artificiellement — la situation exacte d'un bureau en hiver, à 18 heures, sous un plafonnier. Un comparatif orienté photographie mentionne ce capteur en une ligne, en bas de fiche. Pour un usage bureau, c'est la ligne la plus importante du tableau.",
        "Le second point est l'autonomie, et il est tout aussi mal compris. Un iPhone utilisé comme webcam reste branché, donc en charge : on pourrait croire l'autonomie hors sujet. C'est l'inverse. Un appareil qui filme en continu tout en se rechargeant chauffe, et la chaleur est le premier facteur de vieillissement d'une batterie lithium. Un appareil dont l'efficacité énergétique permet d'annoncer 33 heures de lecture vidéo au lieu de 27 dissipe moins de chaleur à charge de travail équivalente. Sur un téléphone qui passe ses journées en capture, branché, c'est directement de la durée de vie gagnée.",
        "Le troisième point est le plus décevant : le débit du port. Le 16 Pro et le 17 Pro sont tous les deux en USB 3, jusqu'à 10 Gb/s. Deux générations, aucun progrès sur la vitesse de transfert filaire. Si vous sortez régulièrement des rushes 4K vers un PC, c'est votre goulet d'étranglement, et il n'a pas bougé depuis l'iPhone 15 Pro. C'est la spec que nous surveillerons en priorité le 9 septembre.",
        "Dernier élément, pratique : le châssis. Le 17 Pro est plus lourd de sept grammes que le 16 Pro (206 g contre 199 g). Sur un bras articulé ou un support à pince, cet écart se ressent sur la stabilité du montage, surtout avec une coque et un câble tendu. Ce n'est pas rédhibitoire, mais c'est un critère réel dès que la caméra est en hauteur.",
      ],
      bullets: [
        "Caméra avant : 12 Mpx → 18 Mpx Center Stage ƒ/1.9, le vrai gain pour un usage webcam",
        "Autonomie : 27 h → 33 h, donc moins de chauffe à charge égale en capture continue",
        "USB-C : 10 Gb/s sur les deux générations, aucun progrès pour les transferts vidéo",
        "Poids : 199 g → 206 g, à prendre en compte sur un bras articulé",
      ],
      links: [
        { label: "Notre guide : l'iPhone en webcam 4K pour PC", href: "/iphone-18-pro/webcam-4k-pc" },
        { label: "Accessoires USB-C partagés PC / iPhone", href: "/iphone-18-pro/accessoires-usb-c-setup" },
      ],
    },
    {
      id: "verdict-provisoire",
      heading: "Verdict provisoire, mis à jour après le keynote du 9 septembre",
      paragraphs: [
        "En l'état des informations publiques, voici notre position. Si vous venez d'un iPhone 16 Pro et que vous utilisez votre téléphone comme caméra sur un bureau, le saut est réel et il est déjà entièrement documenté par la génération 17 Pro : caméra avant 18 mégapixels, six heures d'autonomie de plus, écran nettement plus lumineux dehors, bloc photo arrière homogène en 48 mégapixels. Vous n'avez pas besoin d'attendre une confirmation pour savoir que ces gains-là existent.",
        "La vraie question est donc de savoir si le 18 Pro ajoutera assez pour justifier d'attendre, ou d'y mettre davantage si la hausse de prix évoquée se confirme. À ce stade, aucune réponse sérieuse n'est possible : la puce, le modem, le Face ID sous l'écran et l'ouverture variable relèvent tous de la rumeur, et l'un d'eux au moins est déjà donné pour reporté par certaines sources.",
        "Notre recommandation pratique : si votre 16 Pro tient encore, attendez le 9 septembre. Vous ne perdez rien à attendre deux semaines, et vous saurez alors soit que le 18 Pro justifie son tarif, soit que le 17 Pro devient l'achat rationnel — un appareil dont toutes les caractéristiques sont, elles, publiées et vérifiables. Nous mettrons cette page à jour dans les heures qui suivent le keynote, en remplaçant chaque « Non confirmé » par la valeur officielle.",
      ],
      links: [
        { label: "iPhone 18 Pro vs 17 Pro : faut-il changer ?", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro" },
        { label: "iPhone 18 Pro ou Pro Max : lequel choisir", href: "/iphone-18-pro/iphone-18-pro-vs-pro-max" },
        { label: "Retour à la collection iPhone 18 Pro & Pro Max", href: "/iphone-18-pro" },
      ],
    },
  ],
  faq: [
    {
      question: "Les caractéristiques de l'iPhone 18 Pro sont-elles connues ?",
      answer:
        "Non. Aucune caractéristique n'est officielle avant le keynote Apple du 9 septembre 2026. Tout ce qui circule aujourd'hui relève de la rumeur et est étiqueté comme tel sur cette page.",
    },
    {
      question: "Le passage d'un iPhone 16 Pro à un 17 Pro vaut-il le coup pour un usage webcam ?",
      answer:
        "C'est le scénario où le gain est le plus net : la caméra avant passe de 12 Mpx TrueDepth à 18 Mpx Center Stage ƒ/1.9, et l'autonomie annoncée de 27 à 33 heures de lecture vidéo.",
    },
    {
      question: "Le débit USB-C a-t-il progressé entre le 16 Pro et le 17 Pro ?",
      answer:
        "Non. Les deux modèles sont en USB 3, jusqu'à 10 Gb/s. Le débit du port du 18 Pro n'est pas confirmé.",
    },
    {
      question: "L'iPhone 18 Pro sera-t-il plus cher ?",
      answer:
        "Une hausse de 250 à 300 dollars a été évoquée par l'analyste Jeff Pu (GF Securities). Ce n'est pas un tarif officiel, seulement une note d'analyste, à traiter comme une rumeur.",
    },
  ],
  amazon: {},
  related: [
    { label: "iPhone 18 Pro vs 17 Pro : faut-il changer ?", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro" },
    { label: "iPhone 18 Pro ou Pro Max : lequel choisir", href: "/iphone-18-pro/iphone-18-pro-vs-pro-max" },
    { label: "Collection iPhone 18 Pro & Pro Max", href: "/iphone-18-pro" },
  ],
  seo: {
    title: "iPhone 18 Pro vs 16 Pro : le vrai saut",
    description:
      "Passer de l'iPhone 16 Pro à l'iPhone 18 Pro : deux générations d'écart sur la caméra avant, l'autonomie et l'écran, comparées pour un usage bureau PC.",
  },
};

export default article;
