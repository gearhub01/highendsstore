/**
 * PAGE PILIER — Comparatif iPhone 16, 17 et 18 Pro (et Pro Max).
 * C'est la SEULE page de la collection qui porte le tableau six colonnes.
 * Les trois comparatifs détaillés ne conservent qu'un tableau à deux modèles
 * et pointent vers cette page.
 *
 * RÈGLE DONNÉES : toutes les valeurs des six modèles proviennent des fiches
 * techniques officielles publiées par Apple.
 */
import type { CollectionArticle } from "../types";

export const article: CollectionArticle = {
  slug: "comparatif-iphone-16-17-18",
  model: "both",
  title: "Comparatif iPhone 16, 17 et 18 Pro",
  excerpt:
    "Trois générations d'iPhone Pro et Pro Max dans un seul tableau : écran, puce, photo, autonomie, poids et nouveautés officielles du 18 Pro.",
  image:
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80",
  updatedAt: "2026-09-10",
  publishedAt: "2026-08-29",
  intro:
    "Trois générations d'iPhone Pro, six modèles, un seul tableau. Cette page rassemble les caractéristiques officielles des iPhone 16 Pro, 16 Pro Max, 17 Pro, 17 Pro Max, 18 Pro et 18 Pro Max. Elle sert de référence à tous nos comparatifs détaillés.",
  sections: [
    {
      id: "ce-qui-a-change",
      heading: "Ce qui a vraiment changé en deux générations",
      paragraphs: [
        "Commençons par le terrain solide : tout ce qui suit dans cette section est officiel, publié par Apple, et concerne uniquement le passage de l'iPhone 16 Pro à l'iPhone 17 Pro. C'est la partie la plus utile de cette page, parce que c'est la seule qui repose entièrement sur des données vérifiables.",
        "Le premier gain se voit dehors. La luminosité de pic en extérieur passe de 2 000 nits sur la génération 16 à 3 000 nits sur la génération 17, à définition et à taux de rafraîchissement identiques : 2622 × 1206 à 460 ppp sur les modèles 6,3 pouces, 2868 × 1320 à 460 ppp sur les 6,9 pouces, avec ProMotion jusqu'à 120 Hz partout. La dalle n'a pas changé de nature ; elle a changé de plafond.",
        "Le deuxième gain se voit au zoom. Le 16 Pro et le 16 Pro Max embarquent un téléobjectif 12 mégapixels 5x. Le 17 Pro et le 17 Pro Max passent à un téléobjectif 48 mégapixels Fusion 100 mm ƒ/2.8, annoncé pour un zoom de qualité optique 8x et une plage totale de 16x. Le nombre « 4x » de la fiche optique cache donc un changement de catégorie : les trois focales arrière partagent désormais la même définition de 48 mégapixels.",
        "Le troisième gain se voit en visio. La caméra avant passe de 12 mégapixels à 18 mégapixels Center Stage ƒ/1.9. C'est le changement dont personne ne parle, et c'est celui qui compte le plus pour l'usage que nous documentons sur ce site : un iPhone posé sur un bureau, branché en USB-C, qui sert de webcam à un PC.",
        "Le quatrième gain se voit à la prise. L'autonomie annoncée en lecture vidéo grimpe de 27 à 33 heures sur le format 6,3 pouces, et de 33 à 39 heures sur le format 6,9 pouces. Six heures dans les deux cas. Rappelons qu'il s'agit de valeurs constructeur mesurées en lecture vidéo locale, pas de journées d'usage réel : elles servent à comparer des générations entre elles, pas à prédire votre soirée.",
        "En contrepartie, deux choses ont bougé dans l'autre sens. Le châssis abandonne le titane et le dos en verre mat de la génération 16 pour un monocoque en aluminium avec Ceramic Shield 2 à l'avant, et le poids augmente : de 199 à 206 grammes sur le Pro, de 227 à 233 grammes sur le Pro Max. Et le port USB-C n'a pas bougé d'un bit : USB 3, 10 Gb/s, sur les quatre modèles, alors que la vidéo produite atteint désormais la 4K Dolby Vision à 120 images par seconde.",
      ],
    },
    {
      id: "tableau-complet",
      heading: "Le tableau complet — six colonnes",
      paragraphs: [
        "Voici le tableau de référence de la gamme Pro sur trois générations, désormais entièrement documenté à partir des caractéristiques officielles Apple. Sur mobile, le tableau défile horizontalement.",
      ],
      table: {
        caption:
          "Source : fiches techniques officielles Apple, vérifiées le 10 septembre 2026.",
        headers: [
          "Caractéristique",
          "iPhone 16 Pro",
          "iPhone 16 Pro Max",
          "iPhone 17 Pro",
          "iPhone 17 Pro Max",
          "iPhone 18 Pro",
          "iPhone 18 Pro Max",
        ],
        rows: [
          ["Écran", "6,3\" OLED", "6,9\" OLED 2868 × 1320 à 460 ppp", "6,3\" OLED 2622 × 1206 à 460 ppp", "6,9\" OLED 2868 × 1320 à 460 ppp", "6,3\" OLED 2622 × 1206 à 460 ppp", "6,9\" OLED 2868 × 1320 à 460 ppp"],
          ["Taux de rafraîchissement", "120 Hz ProMotion", "120 Hz ProMotion", "120 Hz ProMotion", "120 Hz ProMotion", "120 Hz ProMotion", "120 Hz ProMotion"],
          ["Luminosité", "2 000 nits en pic extérieur", "2 000 nits en pic extérieur", "3 000 nits en pic extérieur", "3 000 nits en pic extérieur", "1 000 nits typique, 1 600 nits pic HDR, 3 000 nits pic extérieur", "1 000 nits typique, 1 600 nits pic HDR, 3 000 nits pic extérieur"],
          ["Puce", "A18 Pro", "A18 Pro (CPU 6 cœurs / GPU 6 cœurs)", "A19 Pro (CPU 6 cœurs : 2P + 4E)", "A19 Pro", "A20 Pro, 2 nm, CPU 6 cœurs, GPU 7 cœurs, moteur neuronal double 16 cœurs", "A20 Pro, 2 nm, CPU 6 cœurs, GPU 7 cœurs, moteur neuronal double 16 cœurs"],
          ["Stockage", "128 Go à 1 To", "256 Go à 1 To", "256 Go à 1 To", "256 Go à 2 To", "256 Go, 512 Go, 1 To, 2 To", "256 Go, 512 Go, 1 To, 2 To"],
          ["Capteur principal", "48 Mpx 24 mm ƒ/1.78", "48 Mpx 24 mm ƒ/1.78", "48 Mpx Fusion 24 mm ƒ/1.78", "48 Mpx Fusion 24 mm ƒ/1.78", "48 Mpx Fusion, ouverture variable à six lamelles", "48 Mpx Fusion, ouverture variable à six lamelles"],
          ["Ultra grand-angle", "48 Mpx", "48 Mpx 13 mm ƒ/2.2", "48 Mpx Fusion 13 mm ƒ/2.2", "48 Mpx Fusion 13 mm ƒ/2.2", "48 Mpx, 13 mm", "48 Mpx, 13 mm"],
          ["Téléobjectif", "12 Mpx 5x", "12 Mpx 5x 120 mm ƒ/2.8", "48 Mpx Fusion 100 mm (4x) ƒ/2.8", "48 Mpx Fusion 100 mm (4x) ƒ/2.8", "Périscope 48 Mpx, 4x optique", "Périscope 48 Mpx, 4x optique"],
          ["Zoom", "5x optique", "5x optique", "8x qualité optique, plage 16x", "8x qualité optique, plage 16x", "4x optique, 8x qualité optique", "4x optique, 8x qualité optique"],
          ["Caméra avant", "12 Mpx", "12 Mpx ƒ/1.9", "18 Mpx Center Stage ƒ/1.9", "18 Mpx Center Stage ƒ/1.9", "18 Mpx Center Stage ƒ/1.9", "18 Mpx Center Stage ƒ/1.9"],
          ["Vidéo", "4K Dolby Vision", "4K Dolby Vision", "4K Dolby Vision jusqu'à 120 i/s", "4K Dolby Vision jusqu'à 120 i/s", "4K Dolby Vision jusqu'à 120 i/s, ProRes 4K120 externe, vidéo spatiale", "4K Dolby Vision jusqu'à 120 i/s, ProRes 4K120 externe, vidéo spatiale"],
          ["Autonomie vidéo", "27 h", "33 h", "33 h", "39 h", "34 h", "43 h"],
          ["USB-C", "USB 3, 10 Gbit/s", "USB 3, 10 Gbit/s", "USB 3, 10 Gbit/s", "USB 3, 10 Gbit/s", "USB 3, 10 Gbit/s", "USB 3, 10 Gbit/s"],
          ["Sans fil", "—", "—", "Wi-Fi 7", "Wi-Fi 7", "5G sub-6 GHz, Wi-Fi 7, Bluetooth 6", "5G sub-6 GHz, Wi-Fi 7, Bluetooth 6"],
          ["Face ID", "TrueDepth", "TrueDepth", "TrueDepth", "TrueDepth", "TrueDepth classique", "TrueDepth classique"],
          ["Matériau", "Titane, dos verre mat", "Titane, dos verre mat", "Aluminium monocoque, Ceramic Shield 2", "Aluminium monocoque, Ceramic Shield 2", "Unibody aluminium, Ceramic Shield 2 avant, Ceramic Shield au dos", "Unibody aluminium, Ceramic Shield 2 avant, Ceramic Shield au dos"],
          ["Poids", "199 g", "227 g", "206 g", "233 g", "211 g", "249 g"],
          ["Dimensions", "71,5 × 149,6 × 8,25 mm", "77,6 × 163 × 8,25 mm", "—", "—", "71,9 × 150 × 8,75 mm", "78 × 163,4 × 8,75 mm"],
          ["Coloris", "Noir, Blanc, Naturel, Désert (titane)", "Noir, Blanc, Naturel, Désert (titane)", "Argent, Orange cosmique, Bleu profond", "Argent, Orange cosmique, Bleu profond", "Noir, argent, glacier, bordeaux", "Noir, argent, glacier, bordeaux"],
        ],
      },
    },
    {
      id: "ecran-luminosite",
      heading: "Écran et luminosité : le gain le plus visible au quotidien",
      paragraphs: [
        "Sur le papier, la ligne « écran » du tableau semble immobile entre les générations 16 et 17 : même diagonale, même définition, même densité de 460 pixels par pouce, même ProMotion jusqu'à 120 Hz. Une seule valeur bouge, et elle change pourtant plus de choses au quotidien que tout le reste de la fiche : la luminosité de pic en extérieur, qui passe de 2 000 à 3 000 nits.",
        "Concrètement, cette valeur ne décrit pas la luminosité que vous voyez en intérieur. Elle décrit le plafond que l'écran peut atteindre brièvement quand le capteur de lumière ambiante détecte un ensoleillement direct. Sur un iPhone 16 Pro en plein soleil d'été, l'écran reste lisible mais les photos perdent leurs noirs, le texte gris s'efface, et l'on finit par s'abriter la main au-dessus de la dalle. À 3 000 nits, ce réflexe disparaît dans la plupart des situations.",
        "Ce gain de 50 % ne se perçoit donc jamais à l'intérieur, ni sur un bureau, ni le soir. Si vous utilisez surtout votre téléphone dans un environnement éclairé artificiellement, cette ligne du tableau ne vous concerne pas et il faut l'écarter de votre décision d'achat. Si vous êtes souvent dehors, en revanche, c'est l'amélioration que vous constaterez le jour même du déballage, avant même d'ouvrir l'appareil photo.",
        "Un point à ne pas confondre : les 1 000 nits de luminosité typique et les 1 600 nits de pic HDR annoncés pour la génération 17 ne sont pas des gains sur le 16 Pro, ce sont des valeurs qu'Apple a simplement commencé à détailler. Le seul chiffre directement comparable entre les deux générations est le pic extérieur.",
      ],
    },
    {
      id: "photo-teleobjectif",
      heading: "Photo : le téléobjectif change de catégorie",
      paragraphs: [
        "C'est le poste où l'écart entre les générations 16 et 17 est le plus net. Le 16 Pro et le 16 Pro Max associent deux capteurs 48 mégapixels à un téléobjectif de 12 mégapixels offrant un grossissement 5x. Le 17 Pro et le 17 Pro Max remplacent ce troisième module par un capteur 48 mégapixels Fusion de 100 mm ƒ/2.8, annoncé pour un zoom de qualité optique jusqu'à 8x et une plage totale de 16x.",
        "Il faut comprendre ce que « qualité optique » signifie ici, parce que le terme est trompeur. Le module n'est pas un zoom mécanique : la focale reste fixe. Le gain vient de la définition du capteur. Avec 48 mégapixels au lieu de 12, on peut recadrer au centre de l'image et conserver une définition de sortie complète, là où un recadrage équivalent sur 12 mégapixels aurait produit une image molle qu'il faut ensuite débruiter.",
        "Le résultat pratique est simple à énoncer : sur la génération 16, le zoom au-delà de 5x sert au cadrage mais rarement à la publication. Sur la génération 17, la plage intermédiaire, celle qu'on utilise réellement pour détacher un objet posé sur un bureau ou photographier un composant de près, devient exploitable sans retouche.",
        "L'autre changement, moins spectaculaire mais structurant, est l'homogénéité. Les trois modules arrière du 17 Pro partagent la même définition et le même traitement Fusion. Passer de l'ultra grand-angle au téléobjectif en cours de prise ne produit plus de rupture visible de rendu ni de niveau de bruit — un détail invisible sur une fiche technique, très visible dans une série de photos.",
        "La génération 18 ajoute désormais une ouverture variable à six lamelles sur son capteur principal de 48 mégapixels. Elle apporte un contrôle optique de la profondeur de champ et de la lumière captée, au lieu de reposer uniquement sur le traitement logiciel.",
      ],
    },
    {
      id: "camera-avant",
      heading: "Caméra avant : le changement que personne ne relève",
      paragraphs: [
        "Toutes les comparaisons de génération se concentrent sur le bloc arrière. Pourtant, la ligne la plus importante du tableau pour notre lectorat est ailleurs : la caméra avant passe de 12 mégapixels sur la génération 16 à 18 mégapixels Center Stage ƒ/1.9 sur la génération 17. C'est un capteur entièrement nouveau, pas une révision.",
        "Pourquoi cela compte-t-il davantage ici qu'ailleurs ? Parce qu'un iPhone posé sur un bureau et branché en USB-C à un PC est utilisé de face, pas de dos. En visioconférence, en enregistrement de commentaire, en stream, c'est ce capteur-là qui travaille toute la journée, et lui seul. Une webcam de PC intégrée plafonne en général très en dessous, avec un capteur minuscule et une optique lente ; l'écart devient flagrant dès que la lumière baisse.",
        "Le mode Center Stage ajoute un recadrage automatique qui suit le sujet. Sur un capteur de 12 mégapixels, ce recadrage coûtait de la définition, puisqu'il rogne dans l'image. Sur 18 mégapixels, la marge disponible permet de suivre un mouvement sans que l'image de sortie se dégrade visiblement. C'est exactement le scénario d'une personne qui parle en gesticulant devant son écran.",
        "Pour qui utilise son iPhone comme webcam de PC, c'est donc le progrès de génération le plus important des deux dernières années — plus que la puce, plus que le téléobjectif, plus que la luminosité. Nous détaillons le branchement, les réglages, les logiciels et les limites de débit dans notre guide dédié.",
      ],
      links: [
        {
          label: "Notre guide : l'iPhone en webcam 4K pour PC",
          href: "/iphone-18-pro/webcam-4k-pc",
        },
      ],
    },
    {
      id: "autonomie",
      heading: "Autonomie : +6 heures sur les deux formats",
      paragraphs: [
        "Le gain est identique sur les deux tailles : de 27 à 33 heures de lecture vidéo sur le format 6,3 pouces, de 33 à 39 heures sur le format 6,9 pouces. Six heures dans les deux cas, soit environ 20 % de mieux. C'est l'un des sauts d'autonomie les plus francs de la gamme Pro depuis plusieurs générations.",
        "Précisons immédiatement ce que ces chiffres ne sont pas. Ce sont des maximums mesurés par Apple en lecture de vidéo stockée localement, écran à luminosité standard, sans réseau cellulaire actif. Aucune journée réelle ne ressemble à ce protocole. Leur utilité est comparative : mesurés de la même manière d'une génération à l'autre, ils traduisent bien un écart de capacité et d'efficacité, même s'ils ne prédisent pas votre autonomie.",
        "Pour un téléphone qui reste branché sur un bureau, l'effet est paradoxal et vaut d'être expliqué. Vous n'utiliserez jamais ces 33 ou 39 heures d'affilée. En revanche, une plus grande réserve d'énergie signifie que l'appareil peut soutenir une charge lourde — capture vidéo continue, écran allumé, transfert USB — en puisant davantage dans la batterie avant que la gestion thermique ne réduise les performances. C'est là que le gain se ressent : pas sur la durée, sur la tenue.",
        "Le corollaire est moins agréable. Une session longue en captation, téléphone branché et écran actif, chauffe et fait vieillir la batterie plus vite qu'un usage normal. Sur ce point, aucune génération ne fait exception, et un gain d'autonomie annoncé ne compense pas une mauvaise habitude de charge permanente à 100 %.",
      ],
    },
    {
      id: "pro-ou-pro-max",
      heading: "Pro ou Pro Max : ce que le format coûte et rapporte",
      paragraphs: [
        "L'arbitrage entre les deux formats est resté remarquablement stable sur trois générations, ce qui permet de le résumer en une phrase : le Pro Max échange du volume contre de l'endurance et du stockage.",
        "Ce que le grand format apporte : six heures d'autonomie vidéo supplémentaires (39 h contre 33 h sur la génération 17), une option de stockage de 2 To réservée au 17 Pro Max, et une surface d'affichage de 6,9 pouces à la même densité de 460 ppp, donc plus d'informations à l'écran sans perte de finesse.",
        "Ce qu'il coûte : 27 grammes de plus (233 g contre 206 g), et environ 6 millimètres de largeur en plus, avec l'épaisseur identique de 8,25 mm relevée sur la génération 16. En main, ces 27 grammes se sentent au bout d'une heure. Sur un support de bureau ou un bras articulé, ils se sentent sur le serrage de la rotule, pas sur le poignet — ce qui change complètement l'arbitrage si l'appareil passe ses journées posé.",
        "Notre règle simple : si le téléphone vit dans une poche et sert d'appareil photo, le Pro suffit. S'il vit sur un bureau, sert de caméra et enregistre de la vidéo, le Pro Max devient le choix logique pour l'autonomie et le stockage. Le comparatif détaillé prend chaque usage un par un.",
      ],
      links: [
        {
          label: "Comparatif détaillé : iPhone 18 Pro ou Pro Max",
          href: "/iphone-18-pro/iphone-18-pro-vs-pro-max",
        },
      ],
    },
    {
      id: "iphone-18-pro",
      heading: "Ce que le 18 Pro apporte réellement",
      paragraphs: [
        "L'iPhone 18 Pro est maintenant officiel, et le tableau ci-dessus peut être lu sans conditionnel. Trois nouveautés méritent le mot génération, et le reste relève de la consolidation.",
      ],
      subsections: [
        {
          heading: "L'ouverture variable, la vraie première",
          paragraphs: [
            "C'est la nouveauté marquante. L'appareil photo principal de 48 Mpx reçoit un mécanisme d'ouverture variable à six lamelles découpées au laser — une première chez Apple, alors que la fonction existe depuis plusieurs années chez certains concurrents. Concrètement, l'appareil peut fermer son diaphragme pour élargir la zone de netteté, ou l'ouvrir pour isoler un sujet et capter davantage de lumière. C'est le premier changement depuis longtemps qui modifie ce que le capteur peut faire, et non seulement la manière dont le logiciel le traite.",
          ],
        },
        {
          heading: "L'A20 Pro et son GPU",
          paragraphs: [
            "La puce passe à une gravure en 2 nanomètres, avec un processeur à 6 cœurs et une partie graphique à 7 cœurs annoncée 40 % plus rapide que celle de l'A19 Pro. Le moteur neuronal double passe à 16 cœurs. Sur un usage quotidien, l'écart sera peu perceptible ; sur le jeu, le montage vidéo et les traitements locaux, il se verra.",
          ],
        },
        {
          heading: "L'autonomie et le stockage",
          paragraphs: [
            "Le Pro Max gagne quatre heures de lecture vidéo, à 43 heures contre 39. Le Pro n'en gagne qu'une, à 34 heures. Et le 2 To, jusqu'ici réservé au Pro Max, devient disponible sur le Pro — ce qui, au passage, retire un argument au grand modèle.",
          ],
        },
      ],
    },
    {
      id: "ce-qui-ne-change-pas",
      heading: "Ce qui n'a pas changé, et qui compte",
      paragraphs: [
        "C'est la partie que peu de comparatifs détailleront, et elle pèse autant dans une décision d'achat.",
        "L'écran est identique : mêmes diagonales, mêmes définitions, même luminosité de pointe de 3 000 nits en extérieur. Un possesseur d'iPhone 17 Pro ne verra aucune différence.",
        "La caméra avant reste à 18 Mpx Center Stage avec une ouverture ƒ/1,9, exactement comme sur le 17 Pro. Les informations précédant l'annonce évoquaient un capteur de 24 Mpx : il n'est pas là. Pour la visioconférence, le stream ou l'usage en webcam, le vrai progrès s'est produit l'an dernier, entre le 16 Pro et le 17 Pro, quand ce capteur est passé de 12 à 18 Mpx.",
        "Le port USB-C reste en USB 3, plafonné à 10 Gbit/s, inchangé depuis l'iPhone 15 Pro. Pour qui transfère régulièrement de la vidéo vers un ordinateur, c'est la déception la plus concrète de cette génération.",
        "Le Face ID sous l'écran, attendu depuis des mois, n'est pas au rendez-vous : Apple conserve le module TrueDepth classique.",
        "Enfin, l'appareil s'alourdit. Le Pro passe de 206 à 211 grammes, le Pro Max de 233 à 249 grammes — le plus lourd iPhone Pro jamais commercialisé. L'écart entre les deux formats atteint désormais 38 grammes, ce qui n'est pas anodin si vous montez votre téléphone sur un support de bureau ou un bras articulé.",
      ],
      links: [
        {
          label: "iPhone 18 Pro vs iPhone 16 Pro : le vrai saut de deux générations",
          href: "/iphone-18-pro/iphone-18-pro-vs-iphone-16-pro",
        },
        {
          label: "iPhone 18 Pro vs iPhone 17 Pro : faut-il vraiment changer",
          href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro",
        },
        {
          label: "iPhone 18 Pro ou Pro Max : quel format choisir",
          href: "/iphone-18-pro/iphone-18-pro-vs-pro-max",
        },
        {
          label: "Guide : utiliser l'iPhone 18 Pro ou Pro Max comme webcam 4K",
          href: "/iphone-18-pro/webcam-4k-pc",
        },
      ],
    },
    {
      id: "quelle-generation-choisir",
      heading: "Quelle génération choisir selon votre situation",
      paragraphs: [
        "Trois profils, trois recommandations tranchées, à partir des seules données confirmées.",
        "Vous avez un iPhone 16 Pro ou 16 Pro Max. C'est le profil pour lequel le changement se justifie le mieux : vous gagnez les 3 000 nits en extérieur, le téléobjectif 48 mégapixels, la caméra avant 18 mégapixels Center Stage, l'ouverture variable et une autonomie supérieure.",
        "Vous avez un iPhone 17 Pro ou 17 Pro Max. Le changement reste difficile à justifier hors usages exigeants en photo, jeu ou montage vidéo. L'écran, la caméra avant et le débit USB-C sont identiques ; l'ouverture variable et l'A20 Pro constituent les gains principaux.",
        "Vous partez de plus loin, d'un iPhone antérieur au 16 Pro ou d'un autre écosystème. Le 18 Pro réunit les progrès des générations 17 et 18, mais le tableau permet désormais de mesurer précisément lesquels comptent pour votre usage.",
        "Nos trois comparatifs détaillés reprennent chacun de ces cas de figure, avec un verdict par usage.",
      ],
      links: [
        {
          label: "iPhone 18 Pro vs iPhone 16 Pro : le vrai saut de deux générations",
          href: "/iphone-18-pro/iphone-18-pro-vs-iphone-16-pro",
        },
        {
          label: "iPhone 18 Pro vs iPhone 17 Pro : faut-il vraiment changer",
          href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro",
        },
        {
          label: "iPhone 18 Pro ou Pro Max : quel format choisir",
          href: "/iphone-18-pro/iphone-18-pro-vs-pro-max",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Les caractéristiques de l'iPhone 18 Pro sont-elles connues ?",
      answer:
        "Oui. Apple a officialisé l'iPhone 18 Pro et l'iPhone 18 Pro Max. Le tableau reprend leurs caractéristiques techniques officielles, vérifiées le 10 septembre 2026.",
    },
    {
      question: "Quel est le plus gros gain entre l'iPhone 16 Pro et le 17 Pro ?",
      answer:
        "Il dépend de l'usage : la luminosité extérieure passe de 2 000 à 3 000 nits, le téléobjectif de 12 Mpx 5x à 48 Mpx avec une plage 16x, la caméra avant de 12 à 18 Mpx, et l'autonomie vidéo gagne six heures.",
    },
    {
      question: "Le port USB-C a-t-il progressé sur trois générations ?",
      answer:
        "Non. Les iPhone 16 Pro, 16 Pro Max, 17 Pro, 17 Pro Max, 18 Pro et 18 Pro Max plafonnent tous à USB 3, soit 10 Gbit/s.",
    },
    {
      question: "Pro ou Pro Max : quelle différence réelle ?",
      answer:
        "Sur la génération 18, le Pro Max offre neuf heures d'autonomie vidéo supplémentaires, à 43 h contre 34 h, mais pèse 38 grammes de plus. Le stockage 2 To est désormais proposé sur les deux formats.",
    },
  ],
  amazon: {},
  seo: {
    title: "Comparatif iPhone 16, 17 et 18 Pro",
    description:
      "Trois générations d'iPhone Pro et Pro Max comparées : écran, puce, photo, autonomie et poids. Ce qui a réellement changé, et ce qu'apporte le 18 Pro.",
  },
};

export default article;
