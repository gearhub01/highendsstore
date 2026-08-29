/**
 * Comparatif iPhone 18 Pro vs iPhone 17 Pro.
 * RÈGLE : aucune caractéristique de l'iPhone 18 Pro n'est confirmée.
 */
import type { CollectionArticle } from "../types";

const NC = "Non confirmé";
const RUMOR = "Rumeur — non confirmé au 27/08/2026";

export const article: CollectionArticle = {
  slug: "iphone-18-pro-vs-iphone-17-pro",
  model: "both",
  title: "iPhone 18 Pro vs 17 Pro : faut-il changer ?",
  excerpt:
    "Ce qui change vraiment, ce qui ne bouge pas, et pourquoi le passage d'un 17 Pro à un 18 Pro est probablement injustifié quand on travaille sur PC.",
  image:
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80",
  updatedAt: "2026-08-28",
  publishedAt: "2026-08-28",
  intro:
    "Un an d'écart, deux appareils dont un seul existe officiellement. Voici ce que l'on sait, ce que l'on ne sait pas, et pourquoi nous pensons dès maintenant qu'un passage du 17 Pro au 18 Pro sera difficile à justifier pour la plupart des usages de bureau.",
  notice:
    "Mis à jour le 28 août 2026 — les caractéristiques de l'iPhone 18 Pro seront confirmées lors du keynote du 9 septembre 2026. Aucune valeur n'est avancée pour ce modèle tant qu'Apple ne l'a pas publiée.",
  sections: [
    {
      id: "officiel-vs-rumeur",
      heading: "Ce que l'on sait officiellement, ce qui reste une rumeur",
      paragraphs: [
        "Commençons par poser la frontière, parce que c'est là que la plupart des comparatifs dérapent. D'un côté, l'iPhone 17 Pro existe : ses caractéristiques sont publiées par Apple, mesurables, opposables. De l'autre, l'iPhone 18 Pro n'a pas été annoncé. Le keynote se tient le 9 septembre 2026. Tant qu'il n'a pas eu lieu, la seule position défendable consiste à écrire « non confirmé » dans chaque case, et à traiter les fuites comme ce qu'elles sont : des indications de direction, pas des données.",
        "Côté officiel, donc. L'iPhone 17 Pro affiche un écran OLED de 6,3 pouces en 2622 × 1206 pixels à 460 ppp, avec ProMotion jusqu'à 120 Hz, 1 000 nits de luminosité typique, 1 600 nits en pic HDR et 3 000 nits en pic extérieur. Il embarque la puce A19 Pro et son CPU six cœurs, deux de performance et quatre d'efficacité. Le stockage démarre à 256 Go et monte à 512 Go puis 1 To.",
        "Le bloc photo arrière réunit trois capteurs 48 mégapixels Fusion : principal 24 mm ƒ/1.78, ultra grand-angle 13 mm ƒ/2.2, téléobjectif 100 mm équivalent 4x ƒ/2.8, avec un zoom de qualité optique annoncé jusqu'à 8x et une plage totale de 16x. La caméra avant est un capteur 18 mégapixels Center Stage ouvrant à ƒ/1.9. La vidéo monte en 4K Dolby Vision jusqu'à 120 images par seconde. L'autonomie annoncée atteint 33 heures de lecture vidéo. La connectique repose sur un USB-C en USB 3, jusqu'à 10 Gb/s, complété par le Wi-Fi 7. Le châssis est un monocoque aluminium, avec Ceramic Shield 2 à l'avant et Ceramic Shield au dos, pour 206 grammes, en Argent, Orange cosmique ou Bleu profond.",
        "Côté rumeurs, cinq éléments reviennent : une puce A20 Pro gravée en 2 nanomètres, un modem C2 conçu par Apple évoqué dans l'une des deux variantes de carte mère, un Face ID sous l'écran dont certains rapports annoncent déjà le report à 2027, une caméra à ouverture variable, et une hausse tarifaire de 250 à 300 dollars avancée par l'analyste Jeff Pu de GF Securities. Aucun de ces cinq points n'est vérifiable aujourd'hui.",
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
      id: "tableau-comparatif",
      heading: "Le tableau comparatif",
      paragraphs: [
        "La colonne de droite restera en l'état jusqu'au 9 septembre. C'est inconfortable à lire, et c'est exactement le but : un tableau qui donnerait des valeurs au 18 Pro aujourd'hui serait un tableau inventé.",
      ],
      table: {
        headers: ["Caractéristique", "iPhone 17 Pro", "iPhone 18 Pro"],
        rows: [
          ["Écran", "6,3\" OLED 2622 × 1206 à 460 ppp, ProMotion jusqu'à 120 Hz", NC],
          ["Luminosité", "1 000 nits typique, 1 600 nits pic HDR, 3 000 nits pic extérieur", NC],
          ["Puce", "A19 Pro, CPU 6 cœurs (2 performance + 4 efficacité)", `A20 Pro gravée en 2 nm — ${RUMOR}`],
          ["Modem", NC, `Modem C2 conçu par Apple — ${RUMOR}`],
          ["Stockage", "256 Go, 512 Go, 1 To", NC],
          [
            "Photo arrière",
            "48 Mpx Fusion 24 mm ƒ/1.78 + 48 Mpx Fusion ultra grand-angle 13 mm ƒ/2.2 + 48 Mpx Fusion téléobjectif 100 mm (4x) ƒ/2.8",
            `Ouverture variable — ${RUMOR}`,
          ],
          ["Zoom", "Qualité optique 8x, plage 16x", NC],
          ["Caméra avant", "18 Mpx Center Stage, ƒ/1.9", NC],
          ["Vidéo", "4K Dolby Vision jusqu'à 120 i/s", NC],
          ["Autonomie", "Jusqu'à 33 h de lecture vidéo", NC],
          ["USB-C", "USB 3, jusqu'à 10 Gb/s", NC],
          ["Sans fil", "Wi-Fi 7", NC],
          ["Face ID", NC, `Sous l'écran, report à 2027 évoqué — ${RUMOR}`],
          ["Matériau", "Monocoque aluminium, Ceramic Shield 2 avant, Ceramic Shield dos", NC],
          ["Poids", "206 g", NC],
          ["Coloris", "Argent, Orange cosmique, Bleu profond", NC],
          ["Prix", "—", `Hausse de 250 à 300 $ évoquée (Jeff Pu, GF Securities) — ${RUMOR}`],
        ],
      },
    },
    {
      id: "a19-pro-vs-a20-pro",
      heading: "L'A19 Pro contre l'A20 Pro : ce que la gravure 2 nm changerait",
      paragraphs: [
        "L'A19 Pro est documentée : CPU six cœurs, deux de performance et quatre d'efficacité. L'A20 Pro, elle, n'existe pour l'instant que dans les rumeurs, associée à une gravure en 2 nanomètres. Il faut comprendre ce qu'un changement de nœud apporte réellement, parce que le marketing en fait systématiquement trop.",
        "Réduire la finesse de gravure permet de placer davantage de transistors sur la même surface et de les faire commuter avec moins d'énergie. Les fondeurs traduisent cela par une formule à deux branches : soit un gain de performance à consommation constante, soit une baisse de consommation à performance constante. En pratique, un concepteur répartit le bénéfice entre les deux, selon ce qu'il cherche à optimiser. Aucun chiffre n'ayant été publié pour l'A20 Pro, toute estimation de pourcentage serait de la fiction.",
        "Ce qu'on peut dire sans inventer, c'est où ce gain compterait pour un usage de bureau. Pas dans les benchmarks : un A19 Pro écrase déjà toute charge de travail bureautique, de visioconférence ou d'encodage ponctuel. Il compterait dans la stabilité thermique. Un téléphone qui filme en continu pendant une réunion d'une heure, branché à un PC, monte en température ; c'est cette chaleur qui limite la durée d'une session et qui use la batterie. Une puce plus efficiente à charge égale réduirait ce plafond thermique. C'est un bénéfice réel, mais peu spectaculaire, et invisible dans un tableau de scores.",
        "Le modem C2 relève de la même logique. Un modem maison, s'il est confirmé, se juge sur la consommation en veille connectée et sur la qualité d'accroche réseau, pas sur des débits théoriques. Pour un appareil qui passe ses journées posé sur un bureau en Wi-Fi, l'effet serait proche de zéro. Rappelons que ce modem est évoqué dans l'une des deux variantes de carte mère dont il est question, ce qui rend la chose encore plus incertaine.",
        "Conclusion de cette section : même si les deux rumeurs se confirment le 9 septembre, elles n'apportent rien qu'un utilisateur de 17 Pro ressentira au quotidien. Une génération de puce en avance ne se voit pas ; elle se paie.",
      ],
    },
    {
      id: "photo-video",
      heading: "Photo et vidéo : l'ouverture variable en question",
      paragraphs: [
        "Le 17 Pro dispose de trois capteurs 48 mégapixels Fusion à ouvertures fixes : ƒ/1.78 pour le principal 24 mm, ƒ/2.2 pour l'ultra grand-angle 13 mm, ƒ/2.8 pour le téléobjectif 100 mm équivalent 4x. La caméra avant est un capteur 18 mégapixels Center Stage à ƒ/1.9, et la vidéo grimpe en 4K Dolby Vision jusqu'à 120 images par seconde. C'est un ensemble très complet, et surtout homogène : les trois focales partagent la même définition, ce qui limite les ruptures de rendu quand on change d'objectif en cours de prise.",
        "La rumeur d'une caméra à ouverture variable sur le 18 Pro, si elle se vérifiait, serait le seul changement photographique réellement structurant depuis longtemps. Un diaphragme mécanique permet de fermer l'ouverture pour gagner en profondeur de champ et en netteté sur les bords, ou de l'ouvrir pour capter davantage de lumière. Aujourd'hui, un iPhone simule la profondeur de champ par traitement logiciel ; une ouverture variable la produirait optiquement.",
        "Cela dit, mesurons l'enjeu réel pour le lecteur de ce site. Si vous filmez des plans produit sur un bureau ou si vous utilisez le téléphone comme caméra de visio, une ouverture variable ne changera pratiquement rien : la scène est fixe, l'éclairage est maîtrisé, la profondeur de champ souhaitée est constante. Le bénéfice concerne la photographie mobile en conditions changeantes, pas la capture sédentaire.",
        "Il faut aussi rappeler que cette fonctionnalité est régulièrement annoncée puis repoussée sur les rumeurs iPhone depuis plusieurs cycles, exactement comme le Face ID sous l'écran, aujourd'hui donné pour 2027 par certaines sources. Fonder une décision d'achat sur une fonctionnalité optique non annoncée n'a jamais été un bon calcul.",
      ],
    },
    {
      id: "setup-pc-usb-c",
      heading: "Pour un setup PC : le débit USB-C est la spec à surveiller",
      paragraphs: [
        "Voici la seule ligne du tableau qui devrait vraiment intéresser quelqu'un qui travaille avec un PC, et c'est celle dont personne ne parle. L'iPhone 16 Pro et l'iPhone 17 Pro plafonnent tous les deux à 10 Gb/s en USB 3 sur leur port USB-C. Deux générations, un débit identique. Pendant ce temps, la définition et la cadence des vidéos produites par l'appareil, elles, ont augmenté : de la 4K Dolby Vision à 120 images par seconde, ça ne se transfère pas en un claquement de doigts.",
        "Faisons le calcul de ce que cela implique, sans inventer de chiffre produit. 10 Gb/s est un maximum théorique de bus ; le débit soutenu réel dépend du stockage interne, du câble, du contrôleur côté PC et du logiciel de transfert. En pratique, sortir plusieurs dizaines de gigaoctets de rushes se compte en minutes, pas en secondes, et ce temps se paie à chaque session de montage. C'est le point de friction quotidien numéro un d'un iPhone utilisé comme caméra de production sur un bureau.",
        "C'est pourquoi, le 9 septembre, nous ne regarderons pas d'abord la puce ni l'appareil photo. Nous regarderons la ligne « USB-C » de la fiche technique. Si Apple fait passer le port à un débit supérieur, l'appareil devient un outil de captation sensiblement meilleur pour qui travaille sur PC, et le passage se discute. Si la ligne affiche encore USB 3 à 10 Gb/s, alors la troisième génération consécutive n'aura rien apporté sur ce point, et l'argument d'achat le plus concret pour notre lectorat tombe.",
        "Deux autres lignes méritent la même attention : la caméra avant, déjà excellente à 18 mégapixels Center Stage sur le 17 Pro, et l'autonomie annoncée, à 33 heures de lecture vidéo. Sur ces deux points, le 17 Pro a placé la barre haut ; il faudra un écart net pour justifier un changement d'appareil.",
      ],
      bullets: [
        "16 Pro et 17 Pro : USB 3, jusqu'à 10 Gb/s — aucun progrès en deux générations",
        "Le débit du port du 18 Pro n'est pas confirmé : c'est la ligne à vérifier en priorité",
        "Caméra avant du 17 Pro : 18 Mpx Center Stage ƒ/1.9, déjà très au-dessus du 16 Pro",
        "Autonomie annoncée du 17 Pro : jusqu'à 33 h de lecture vidéo",
      ],
      links: [
        { label: "Notre guide : l'iPhone en webcam 4K pour PC", href: "/iphone-18-pro/webcam-4k-pc" },
        { label: "Accessoires USB-C partagés PC / iPhone", href: "/iphone-18-pro/accessoires-usb-c-setup" },
      ],
    },
    {
      id: "notre-position",
      heading: "Notre position : pourquoi nous déconseillons probablement le passage",
      paragraphs: [
        "Disons-le sans détour, quitte à être démentis dans deux semaines : si vous possédez un iPhone 17 Pro, le passage au 18 Pro sera très probablement injustifié. Ce n'est pas une posture, c'est une lecture des faits disponibles.",
        "Premier argument : tout ce qui est susceptible de changer relève, à ce jour, de la rumeur, et l'essentiel de ces rumeurs porte sur des composants dont l'effet est imperceptible au quotidien. Une puce plus finement gravée et un modem maison ne se voient pas sur un appareil déjà surdimensionné pour ses usages courants. Le Face ID sous l'écran, seule évolution réellement visible, est donné pour reporté à 2027 par une partie des sources.",
        "Deuxième argument : le 17 Pro est déjà l'aboutissement d'un cycle. Il a apporté le changement de châssis, le passage à trois capteurs 48 mégapixels, la caméra avant 18 mégapixels, l'écran à 3 000 nits en pic extérieur et six heures d'autonomie supplémentaires par rapport au 16 Pro. Les gros postes de progression viennent d'être consommés. Un cycle qui suit une refonte est rarement celui qui justifie un renouvellement.",
        "Troisième argument, le plus prosaïque : la hausse de prix de 250 à 300 dollars évoquée par Jeff Pu, de GF Securities. Ce n'est qu'une note d'analyste, pas un tarif. Mais si elle se vérifie, même partiellement, elle rend l'arbitrage encore plus défavorable, puisqu'il faudrait payer davantage pour des gains que vous ne sentirez pas.",
        "À qui le 18 Pro s'adressera-t-il alors ? À ceux qui viennent d'un 16 Pro ou d'un appareil plus ancien, pour qui le cumul de deux générations est réel — nous détaillons ce cas dans notre comparatif dédié. Et, éventuellement, à ceux dont le métier dépend du débit de transfert filaire, si et seulement si le port USB-C progresse enfin. Pour tous les autres, garder son 17 Pro une année de plus est la décision rationnelle.",
        "Nous mettrons cette page à jour après le keynote du 9 septembre 2026, en remplaçant chaque mention « non confirmé » par la caractéristique officielle, et en révisant cette recommandation si les faits nous contredisent.",
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
        "Sur la base des informations disponibles avant le keynote du 9 septembre 2026, probablement pas : les évolutions évoquées relèvent toutes de la rumeur et portent sur des composants peu perceptibles au quotidien.",
    },
    {
      question: "Quelle caractéristique faut-il surveiller le 9 septembre ?",
      answer:
        "Le débit du port USB-C. Le 16 Pro et le 17 Pro plafonnent tous deux à 10 Gb/s en USB 3, ce qui est le vrai frein pour transférer de la vidéo vers un PC.",
    },
    {
      question: "L'ouverture variable est-elle confirmée sur l'iPhone 18 Pro ?",
      answer:
        "Non. C'est une rumeur non confirmée au 27/08/2026, au même titre que la puce A20 Pro en 2 nm, le modem C2 et le Face ID sous l'écran.",
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
      "Comparatif iPhone 18 Pro et 17 Pro : ce qui change vraiment, ce qui ne bouge pas, et si le passage se justifie quand on travaille sur un setup PC.",
  },
};

export default article;
