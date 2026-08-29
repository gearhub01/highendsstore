/**
 * Comparatif iPhone 18 Pro vs iPhone 18 Pro Max.
 * RÈGLE : rien n'est confirmé pour la génération 18. Le tableau s'appuie sur
 * les données officielles de la génération 17 Pro / 17 Pro Max.
 */
import type { CollectionArticle } from "../types";

const NC = "Non confirmé";
const RUMOR = "Rumeur — non confirmé au 27/08/2026";

export const article: CollectionArticle = {
  slug: "iphone-18-pro-vs-pro-max",
  model: "both",
  title: "iPhone 18 Pro ou Pro Max : lequel choisir",
  excerpt:
    "Écran, autonomie, stockage et poids comparés entre Pro et Pro Max, y compris ce que change le poids sur un bras articulé de bureau PC.",
  image:
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1200&q=80",
  updatedAt: "2026-08-28",
  publishedAt: "2026-08-28",
  intro:
    "Le choix entre Pro et Pro Max n'a jamais porté sur la puissance : les deux modèles partagent la même plateforme. Il porte sur quatre variables — la taille de l'écran, l'autonomie, le stockage maximal et le poids — et la quatrième est celle que personne ne regarde quand le téléphone finit sur un support de bureau.",
  notice:
    "Mis à jour le 28 août 2026 — les caractéristiques des iPhone 18 Pro et 18 Pro Max seront confirmées lors du keynote du 9 septembre 2026. Le tableau ci-dessous repose sur les données officielles de la génération 17 Pro, qui sert de référence en attendant.",
  sections: [
    {
      id: "differences-structurelles",
      heading: "Les différences structurelles entre Pro et Pro Max",
      paragraphs: [
        "Depuis plusieurs générations, Apple a cessé de réserver des fonctions au grand modèle. Sur la génération 17, le Pro et le Pro Max partagent la même puce A19 Pro, le même bloc photo à trois capteurs 48 mégapixels Fusion, la même caméra avant 18 mégapixels Center Stage, la même définition de 460 ppp, le même Ceramic Shield 2 à l'avant, la même connectique USB-C en USB 3 à 10 Gb/s et le même Wi-Fi 7. Autrement dit, aucun des deux ne prend de meilleures photos ni ne calcule plus vite que l'autre.",
        "Ce qui les sépare tient en quatre lignes, et ces quatre lignes découlent toutes du volume du châssis. Un boîtier plus grand accueille une dalle plus grande, une batterie plus grosse et davantage de puces de mémoire ; il pèse aussi plus lourd. Le reste est identique par construction.",
        "Sur la génération 17, cela donne : 6,3 pouces en 2622 × 1206 pour le Pro contre 6,9 pouces en 2868 × 1320 pour le Pro Max, toujours à 460 ppp ; jusqu'à 33 heures de lecture vidéo contre jusqu'à 39 heures ; un stockage qui s'arrête à 1 To sur le Pro là où le Pro Max propose une version 2 To ; et 206 grammes contre 233 grammes.",
        "Pour la génération 18, aucune de ces valeurs n'est connue. Il est raisonnable de penser que la logique de segmentation restera la même, mais penser n'est pas savoir : nous laissons les cases vides jusqu'au 9 septembre. Les seules informations en circulation concernent la plateforme commune aux deux modèles — puce A20 Pro gravée en 2 nm, modem C2 conçu par Apple, Face ID sous l'écran avec un report à 2027 évoqué, caméra à ouverture variable, hausse de prix de 250 à 300 dollars avancée par l'analyste Jeff Pu de GF Securities — et toutes sont des rumeurs.",
      ],
      bullets: [
        "Identiques : puce, capteurs photo, caméra avant, définition en ppp, USB-C, Wi-Fi 7, matériaux",
        "Différents : diagonale d'écran, autonomie annoncée, palier de stockage maximal, poids",
      ],
    },
    {
      id: "tableau",
      heading: "Le tableau, sur la base de la génération 17 Pro",
      paragraphs: [
        "Les deux colonnes de gauche contiennent des données officielles Apple pour la génération 17. Les deux de droite restent vides : c'est ce que nous complèterons après le keynote.",
      ],
      table: {
        headers: [
          "Caractéristique",
          "iPhone 17 Pro",
          "iPhone 17 Pro Max",
          "iPhone 18 Pro / Pro Max",
        ],
        rows: [
          ["Écran", "6,3\" OLED 2622 × 1206 à 460 ppp", "6,9\" OLED 2868 × 1320 à 460 ppp", NC],
          [
            "Luminosité",
            "1 000 nits typique, 1 600 nits pic HDR, 3 000 nits pic extérieur",
            "1 000 nits typique, 1 600 nits pic HDR, 3 000 nits pic extérieur",
            NC,
          ],
          ["Puce", "A19 Pro, CPU 6 cœurs", "A19 Pro, CPU 6 cœurs", `A20 Pro gravée en 2 nm — ${RUMOR}`],
          ["Stockage", "256 Go, 512 Go, 1 To", "256 Go, 512 Go, 1 To, 2 To", NC],
          [
            "Photo arrière",
            "48 Mpx Fusion 24 mm ƒ/1.78 + 48 Mpx ultra grand-angle 13 mm ƒ/2.2 + 48 Mpx téléobjectif 100 mm (4x) ƒ/2.8",
            "Identique au 17 Pro",
            `Ouverture variable — ${RUMOR}`,
          ],
          ["Caméra avant", "18 Mpx Center Stage, ƒ/1.9", "18 Mpx Center Stage, ƒ/1.9", NC],
          ["Vidéo", "4K Dolby Vision jusqu'à 120 i/s", "4K Dolby Vision jusqu'à 120 i/s", NC],
          ["Autonomie", "Jusqu'à 33 h de lecture vidéo", "Jusqu'à 39 h de lecture vidéo", NC],
          ["USB-C", "USB 3, jusqu'à 10 Gb/s", "USB 3, jusqu'à 10 Gb/s", NC],
          ["Sans fil", "Wi-Fi 7", "Wi-Fi 7", NC],
          [
            "Matériau",
            "Monocoque aluminium, Ceramic Shield 2 avant, Ceramic Shield dos",
            "Monocoque aluminium, Ceramic Shield 2 avant, Ceramic Shield dos",
            NC,
          ],
          ["Poids", "206 g", "233 g", NC],
          ["Coloris", "Argent, Orange cosmique, Bleu profond", "Argent, Orange cosmique, Bleu profond", NC],
          ["Prix", "—", "—", `Hausse de 250 à 300 $ évoquée (Jeff Pu, GF Securities) — ${RUMOR}`],
        ],
      },
    },
    {
      id: "autonomie",
      heading: "Autonomie : 33 h contre 39 h, ce que ça change à l'usage",
      paragraphs: [
        "Six heures d'écart en lecture vidéo, soit environ 18 % de mieux pour le Pro Max. C'est l'écart le plus important entre les deux modèles, et c'est celui qui se traduit le plus directement en confort quotidien. Mais il faut interpréter ce chiffre correctement : il s'agit d'une valeur constructeur, obtenue en lecture vidéo locale, dans des conditions standardisées. Ce n'est pas une durée d'usage mixte, et personne ne regarde 33 heures de vidéo d'affilée.",
        "Ce que ce chiffre mesure vraiment, c'est le rapport entre la capacité de la batterie et l'efficacité de la plateforme, à composants identiques. Puisque les deux appareils partagent la même puce, le même écran en densité et les mêmes radios, l'écart de 18 % reflète l'écart de capacité utile. C'est donc un indicateur fiable pour comparer les deux modèles entre eux, même s'il ne prédit pas votre journée.",
        "Traduit en usage réel, cela signifie qu'un utilisateur qui termine ses journées autour de 20 % de batterie sur un Pro les finirait plutôt autour de 35 % sur un Pro Max. Pour un usage sédentaire, où l'appareil est régulièrement à portée d'un chargeur, ce delta ne justifie pas à lui seul le surcoût et le surpoids.",
        "Le cas particulier qui nous intéresse est celui du téléphone utilisé comme caméra sur un bureau. Il est branché, donc jamais à court d'énergie ; l'autonomie disparaît de l'équation. En revanche, la capacité supérieure du Pro Max signifie que la batterie encaisse un cycle de charge plus lentement à consommation égale, ce qui limite la chaleur accumulée pendant les longues sessions de capture. C'est un avantage discret mais réel pour la longévité, pas pour l'endurance.",
      ],
    },
    {
      id: "stockage",
      heading: "Stockage : le 2 To réservé au Pro Max",
      paragraphs: [
        "C'est la seule différence de catalogue qui ne soit pas une question de degré : sur la génération 17, le Pro s'arrête à 1 To tandis que le Pro Max propose une version 2 To. Si vous avez besoin de 2 To, le choix est déjà fait, indépendamment de tous les autres critères.",
        "Qui a réellement besoin de 2 To ? Essentiellement ceux qui filment. La 4K Dolby Vision jusqu'à 120 images par seconde produit des fichiers considérables, et la contrainte se cumule avec celle décrite plus loin : tant que le port USB-C plafonne à 10 Gb/s en USB 3, vider la mémoire vers un PC prend du temps. Beaucoup de vidéastes préfèrent donc accumuler sur l'appareil et décharger en une fois, ce qui suppose de la place.",
        "Pour tous les autres usages — photo courante, applications, musique hors ligne, quelques vidéos — le palier 256 Go, désormais l'entrée de gamme sur la génération 17 Pro, suffit largement, et 512 Go offre une marge confortable pour trois ou quatre ans. Payer un Pro Max uniquement pour la possibilité d'un jour prendre 2 To n'a pas de sens.",
        "Notez enfin que le stockage est le seul poste que vous ne pourrez jamais faire évoluer après l'achat. Un SSD externe en USB-C règle une partie du problème sur un bureau, mais pas en mobilité. C'est le critère qui mérite la réflexion la plus longue le jour de la commande, alors que c'est souvent celui qu'on tranche en dernier.",
      ],
      links: [
        { label: "Accessoires USB-C partagés PC / iPhone", href: "/iphone-18-pro/accessoires-usb-c-setup" },
      ],
    },
    {
      id: "bureau-pc",
      heading: "Sur un bureau PC : le poids et la taille comptent plus qu'on ne croit",
      paragraphs: [
        "Voici le critère que personne d'autre ne traite, parce que personne d'autre n'aborde l'iPhone depuis le bureau. En main, l'écart entre 206 et 233 grammes se remarque à peine ; on s'y habitue en deux jours. Sur un bras articulé ou une pince de bureau, c'est une tout autre histoire.",
        "Un support à bras fonctionne par équilibre : la friction des articulations doit compenser le couple exercé par la masse au bout du bras. Ce couple augmente proportionnellement au poids et à la longueur de déport. Passer de 206 à 233 grammes, c'est 13 % de masse en plus au bout du levier, auxquels s'ajoutent la coque et, souvent, un adaptateur magnétique. Sur un bras d'entrée de gamme, la conséquence est concrète : le cadrage s'affaisse lentement au cours de la journée, et il faut resserrer les molettes. Sur un bras correctement dimensionné, l'écart passe inaperçu. Ce n'est donc pas un argument contre le Pro Max, c'est un argument pour acheter le support en connaissance de cause.",
        "La taille pose une seconde question, encore plus prosaïque. Un 6,9 pouces posé à la verticale devant un moniteur occupe une surface visible qui empiète sur le bas de l'écran, surtout sur un moniteur 27 pouces déjà bas sur pied. En orientation paysage pour un usage webcam, la largeur du châssis devient l'encombrement dominant. À l'inverse, un écran plus grand est plus lisible quand le téléphone sert d'afficheur secondaire — pour un chat de stream, une checklist ou un monitoring.",
        "Un troisième point, souvent oublié : la position du port USB-C par rapport au support. Quel que soit le modèle, un câble branché en permanence exerce une contrainte sur le connecteur et sur l'équilibre du montage. Un câble coudé et une longueur suffisante pour former une boucle de décharge règlent le problème pour quelques euros. Ce détail compte davantage, au quotidien, que les 27 grammes d'écart entre les deux modèles.",
        "Enfin, la stabilité thermique. Le Pro Max dispose d'une surface d'échange plus grande pour dissiper la chaleur produite pendant une capture prolongée. À charge de travail identique, il chauffe donc un peu moins vite. Combiné à sa batterie plus grosse, cela en fait le meilleur candidat pour une caméra de bureau branchée en permanence — à condition d'avoir le support qui va avec.",
      ],
      bullets: [
        "233 g contre 206 g : 13 % de masse en plus au bout d'un bras articulé",
        "6,9\" contre 6,3\" : plus d'encombrement devant le moniteur, mais meilleure lisibilité en afficheur secondaire",
        "Pro Max : surface d'échange plus grande, donc montée en température plus lente en capture prolongée",
        "Dans tous les cas : câble coudé et boucle de décharge pour protéger le port USB-C",
      ],
      links: [
        { label: "Notre guide : l'iPhone en webcam 4K pour PC", href: "/iphone-18-pro/webcam-4k-pc" },
      ],
    },
    {
      id: "recommandation",
      heading: "Recommandation par profil",
      paragraphs: [
        "Prenez le modèle Pro si votre téléphone reste principalement dans votre poche et dans votre main, si vous le posez sur un support léger ou un simple socle, et si votre bibliothèque tient sous 1 To. Les 206 grammes et la diagonale de 6,3 pouces en font l'appareil le plus polyvalent des deux, et il ne concède strictement rien sur la photo, la vidéo ni la puissance. Pour la grande majorité des lecteurs, c'est le choix rationnel.",
        "Prenez le Pro Max si vous filmez beaucoup et que vous avez besoin du palier de stockage supérieur, si vous passez de longues journées loin d'une prise, ou si le téléphone est destiné à vivre en permanence sur un bras articulé sérieux comme caméra de bureau. Dans ce dernier cas, la batterie plus grande et la meilleure dissipation compensent largement le surpoids, à condition que le support soit dimensionné pour.",
        "Un cas à écarter : acheter le Pro Max « au cas où ». Le surcoût, le surpoids et l'encombrement sont immédiats ; les bénéfices, eux, ne se manifestent que dans des usages précis. Si vous ne savez pas dire lequel de ces usages est le vôtre, c'est que le Pro suffit.",
        "Rappel final, et il vaut pour toute cette page : les caractéristiques de la génération 18 ne sont pas connues. Tout ce qui précède décrit la logique de segmentation observée sur la génération 17, avec des données officielles Apple. Nous actualiserons ce comparatif dès le keynote du 9 septembre 2026, en remplaçant chaque « non confirmé » par les valeurs publiées, et en révisant nos recommandations si la répartition entre les deux modèles change.",
      ],
      links: [
        { label: "iPhone 18 Pro vs 16 Pro : le vrai saut", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-16-pro" },
        { label: "iPhone 18 Pro vs 17 Pro : faut-il changer ?", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro" },
        { label: "Retour à la collection iPhone 18 Pro & Pro Max", href: "/iphone-18-pro" },
      ],
    },
  ],
  faq: [
    {
      question: "Quelles différences entre iPhone Pro et Pro Max ?",
      answer:
        "Sur la génération 17 : la diagonale (6,3\" contre 6,9\"), l'autonomie annoncée (33 h contre 39 h de lecture vidéo), le stockage maximal (1 To contre 2 To) et le poids (206 g contre 233 g). Le reste est identique.",
    },
    {
      question: "Le Pro Max prend-il de meilleures photos ?",
      answer:
        "Non. Les deux modèles de la génération 17 partagent le même bloc de trois capteurs 48 Mpx Fusion et la même caméra avant 18 Mpx Center Stage.",
    },
    {
      question: "Quel modèle choisir pour une caméra de bureau branchée en permanence ?",
      answer:
        "Le Pro Max, pour sa batterie plus grande et sa meilleure dissipation thermique — à condition d'avoir un bras articulé dimensionné pour ses 233 g.",
    },
    {
      question: "Ces chiffres valent-ils pour l'iPhone 18 Pro ?",
      answer:
        "Non. Aucune caractéristique de la génération 18 n'est confirmée avant le keynote du 9 septembre 2026. Les valeurs citées ici sont celles, officielles, de la génération 17.",
    },
  ],
  amazon: {},
  related: [
    { label: "iPhone 18 Pro vs 16 Pro : le vrai saut", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-16-pro" },
    { label: "iPhone 18 Pro vs 17 Pro : faut-il changer ?", href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro" },
    { label: "Collection iPhone 18 Pro & Pro Max", href: "/iphone-18-pro" },
  ],
  seo: {
    title: "iPhone 18 Pro ou Pro Max : lequel choisir",
    description:
      "iPhone 18 Pro ou Pro Max : écran, autonomie, stockage et poids comparés, y compris ce que change le poids sur un bras articulé de bureau PC.",
  },
};

export default article;
