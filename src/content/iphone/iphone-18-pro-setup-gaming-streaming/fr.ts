import { AMAZON_URLS } from "@/config/amazon-links";
import type { CollectionArticle } from "../types";

/** Liens accessoires (affiliation Amazon). Aucun prix ne doit figurer ici. */
const ACC = {
  supportEcran: "https://link.amazon/B08KIbTxk",
  brasArticule: "https://link.amazon/B0fSFy52Q",
  cableUsbC: "https://link.amazon/B0aAYaZ24",
  hubHdmi: "https://link.amazon/B0c4L296o",
  carteCapture: "https://link.amazon/B07IpxAj7",
  stationCharge: "https://link.amazon/B0fmQo6t4",
};

/** Article : /iphone-18-pro/iphone-18-pro-setup-gaming-streaming */
export const article: CollectionArticle = {
  slug: "iphone-18-pro-setup-gaming-streaming",
  model: "both",
  title:
    "Comment l'iPhone 18 Pro et Pro Max révolutionnent les setups gaming et streaming",
  excerpt:
    "Webcam 4K, capture OBS, second écran et accessoires USB-C : les six maillons qui transforment l'iPhone 18 Pro, le Pro Max ou l'iPhone Duo en pièce maîtresse d'un setup de streaming.",
  image:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
  updatedAt: "2026-09-26",
  publishedAt: "2026-09-15",
  intro:
    "Il y a encore trois ans, la frontière était nette : le PC d'un côté, le smartphone de l'autre. Cette frontière vient de tomber. Avec l'iPhone 18 Pro et le Pro Max, Apple a livré un appareil qui coche presque toutes les cases du périphérique de streaming haut de gamme : puce A20 Pro gravée en 2 nm avec +40 % de performances graphiques, écran OLED ProMotion 120 Hz à 3000 nits, module 48 Mpx à ouverture variable capable d'encoder du 4K Dolby Vision à 120 fps, port USB-C enfin en USB 3 (10 Gb/s) avec sortie DisplayPort native, et jusqu'à 45 heures de lecture vidéo sur le Pro Max. Reste la seule question qui compte : quels accessoires transforment ce téléphone en véritable pièce maîtresse de votre setup ?",
  featuredAmazon: true,
  sections: [
    {
      id: "webcam-ultime",
      heading: "L'iPhone 18 Pro en webcam ultime : votre webcam 1080p a fait son temps",
      paragraphs: [
        "Comparons honnêtement. Une webcam de streaming « premium » embarque un capteur d'environ 1/2,8 pouce. Le module principal 48 Mpx Fusion de l'iPhone 18 Pro joue dans une autre catégorie : ouverture variable de ƒ/1.48 à ƒ/4.0, encodage Apple Log 2, ProRes jusqu'en 4K 120 fps, et un traitement d'image piloté par un double Neural Engine de 32 cœurs.",
        "Concrètement sur un stream : un bokeh naturel qui détache votre visage du fond sans filtre logiciel douteux, une montée en ISO propre quand vous coupez la lumière pour une session horror à 2 h du matin, et une colorimétrie de peau qui ne vire pas à l'orange dès que vos LED RGB passent au rouge. La caméra frontale 18 Mpx Center Stage en ƒ/1.9 fait le reste : cadrage automatique qui vous suit quand vous vous penchez sur le clavier, champ élargi pour les sessions en duo.",
        "Le problème n'a jamais été la qualité de l'image. Le problème, c'est où poser le téléphone.",
      ],
      subsections: [
        {
          heading: "Le montage propre : le support qui se fait oublier",
          paragraphs: [
            "Poser son iPhone en équilibre contre la base de son écran est la meilleure façon de ruiner une prise en une seconde. Un support écran MagSafe règle le problème à la racine : il se clipse sur la tranche supérieure du moniteur et accroche l'iPhone en MagSafe, pile dans l'axe du regard.",
            "Ce détail d'axe est le secret le mieux gardé du streaming. Une webcam posée trop bas filme vos narines ; trop haut, elle vous donne l'air de fuir la conversation. Là, l'objectif arrive à hauteur d'yeux, exactement comme un interlocuteur en face-à-face. La fixation MagSafe permet en plus de décrocher l'iPhone d'un geste pour répondre à un appel, puis de le remettre en place sans redémarrer OBS : le cadrage est mécaniquement identique à chaque fois.",
            "Un point de vigilance honnête : sur un iPhone 18 Pro Max (249 g), privilégiez un moniteur à dalle rigide et vérifiez que la pince épouse bien l'épaisseur de votre écran. Sur le Pro (211 g), aucun sujet.",
          ],
        },
        {
          heading: "Le niveau au-dessus : libérer la caméra du moniteur",
          paragraphs: [
            "Le support écran est parfait pour le plan face caméra. Il devient limitant dès que vous voulez plusieurs angles — et les angles multiples, c'est exactement ce qui transforme un stream en vraie production.",
            "Un bras articulé serré sur le bord du bureau place l'iPhone où vous voulez : plongée sur le clavier pour une démo de combo en fighting game, trois-quarts pour casser la monotonie d'un long stream, plan rapproché sur les mains pendant un unboxing hardware. Le bras étant désolidarisé du bureau par sa pince, il encaisse bien mieux les vibrations : plus de tremblement d'image quand vous martelez la barre d'espace.",
            "Son vrai atout, c'est la répétabilité. Vous réglez votre angle une fois, vous le bloquez, il est identique au prochain stream. Adieu les cinq minutes de recadrage avant chaque live.",
          ],
        },
        {
          heading: "Le piège que 90 % des tutos ne mentionnent pas",
          paragraphs: [
            "Information capitale si vous streamez sur PC Windows : la fonction Continuity Camera, qui transforme l'iPhone en webcam d'un simple geste, est exclusive à macOS. Elle n'existe pas sous Windows.",
            "La bonne nouvelle, c'est que la solution est rodée : Camo Studio (Reincubate) fait le pont entre l'iPhone et votre PC, et expose la caméra comme une source vidéo standard reconnue par OBS, Streamlabs ou Discord. La version gratuite est parfaitement fonctionnelle en 1080p ; la version payante débloque la 4K et le contrôle manuel de l'exposition et de la mise au point — ce dernier point vaut l'investissement si votre éclairage varie pendant le live.",
          ],
        },
      ],
      shopLinks: [
        {
          label: "Belkin Support Écran MagSafe (iPhone Mount)",
          href: ACC.supportEcran,
          note: "l'iPhone à hauteur d'yeux sur le moniteur",
        },
        {
          label: "Elgato Mini Mount",
          href: ACC.brasArticule,
          note: "bras articulé pour les angles multiples",
        },
      ],
      links: [
        {
          label: "Guide complet : utiliser l'iPhone 18 Pro et Pro Max en webcam 4K",
          href: "/iphone-18-pro/webcam-4k-pc",
        },
      ],
    },
    {
      id: "usb-c-10-gbps",
      heading: "Connectivité et puissance : exploiter réellement les 10 Gb/s",
      paragraphs: [
        "Voici l'erreur qui coûte le plus cher en qualité de stream : brancher un iPhone 18 Pro sur le câble USB-C fourni avec un chargeur quelconque. La plupart de ces câbles sont des câbles de charge en USB 2.0, plafonnés à 480 Mb/s. Sur un appareil capable de sortir du 10 Gb/s, cela revient à monter une carte graphique haut de gamme dans un boîtier alimenté par une prise de guirlande de Noël.",
        "Un câble USB-C certifié 240 W, 10 Gb/s et 4K@60 Hz est la pièce qui débloque le potentiel réel de la machine. Trois choses se passent simultanément quand vous le branchez.",
      ],
      bullets: [
        "Le flux vidéo passe en 4K@60 Hz sans compression destructrice : la différence entre une image nette et une bouillie de macroblocs dès que vous bougez la tête.",
        "Le transfert atteint les 10 Gb/s : un rush ProRes de cinq minutes descend sur le PC en quelques minutes au lieu d'une demi-heure.",
        "La charge 240 W passe en simultané : l'iPhone se recharge pendant qu'il filme et transmet, au lieu de fondre pendant un live de quatre heures.",
      ],
      subsections: [
        {
          heading: "Le hub : l'iPhone devient votre second écran de monitoring",
          paragraphs: [
            "Deuxième nouveauté majeure, largement sous-exploitée : l'iPhone 18 Pro dispose d'une sortie DisplayPort native en 4K HDR via son port USB-C. Plus besoin d'adaptateur propriétaire : le téléphone est officiellement une source vidéo.",
            "Un hub USB-C doté d'une sortie HDMI 4K@60 Hz et d'une alimentation 100 W en passthrough exploite cette porte ouverte, sans perte d'autonomie pendant l'usage. Le chat Twitch, les alertes et les stats basculent sur un petit écran secondaire piloté par l'iPhone : vos écrans PC restent dédiés au jeu et votre processeur ne dépense plus un cycle à afficher le chat pendant que OBS encode. C'est aussi une entrée HDMI de plus pour montrer une application mobile — et un plan de secours si le PC plante en plein live.",
          ],
        },
      ],
      shopLinks: [
        {
          label: "UGREEN Câble USB-C 240W 10 Gb/s 4K@60Hz",
          href: ACC.cableUsbC,
          note: "le maillon qui débloque tous les autres",
        },
        {
          label: "UGREEN Uno Hub USB-C HDMI 4K60 100W",
          href: ACC.hubHdmi,
          note: "sortie HDMI et alimentation passthrough",
        },
      ],
      links: [
        {
          label: "Voir les accessoires USB-C partagés avec le PC",
          href: "/iphone-18-pro/accessoires-usb-c-setup",
        },
      ],
    },
    {
      id: "capture-obs",
      heading: "Capture et streaming sans limites : faire entrer l'iPhone dans OBS",
      paragraphs: [
        "L'écosystème mobile est devenu un terrain de jeu compétitif à part entière. Entre le portage natif des jeux AAA sur iOS, les titres compétitifs mobiles et le cloud gaming, la puce A20 Pro et ses +40 % de performances graphiques ont de quoi alimenter un stream sérieux, à 120 fps sur une dalle ProMotion.",
        "Sauf qu'enregistrer un gameplay via une capture d'écran logicielle, c'est demander à l'iPhone de jouer et d'encoder en même temps. Résultat classique : chauffe, throttling, frame drops, et un stream qui saccade précisément au moment où l'action devient intéressante.",
        "Une carte de capture 4K déplace le problème. L'iPhone sort son image brute en HDMI via le hub, la carte l'avale en 4K et la restitue au PC comme une source vidéo native dans OBS, au même titre qu'une caméra.",
      ],
      bullets: [
        "Zéro charge sur l'iPhone : toute la puissance de l'A20 Pro reste allouée au jeu, donc pas de throttling thermique au bout de vingt minutes.",
        "Latence quasi nulle avec le passthrough : vous jouez sur l'écran, vous streamez le même signal, l'input lag ne bouge pas.",
        "Une vraie régie multi-sources : gameplay en plein écran, facecam 4K par-dessus, overlays autour.",
        "Un investissement polyvalent : la carte sert aussi pour une console, un second PC ou un appareil photo.",
      ],
      shopLinks: [
        {
          label: "Elgato Game Capture 4K S",
          href: ACC.carteCapture,
          note: "le gameplay iPhone dans OBS, sans latence",
        },
      ],
    },
    {
      id: "autonomie-thermique",
      heading: "L'autonomie avant tout : le nerf de la guerre sur les longs lives",
      paragraphs: [
        "Les chiffres officiels donnent le vertige : 36 heures de lecture vidéo sur l'iPhone 18 Pro, 45 heures sur le Pro Max. Mais un usage streaming n'a rien à voir avec de la lecture vidéo. Capteur actif en continu, encodage 4K, écran allumé, liaison permanente : dans ce régime, l'appareil consomme vite et chauffe encore plus vite. Et un iPhone qui chauffe réduit ses performances, donc dégrade l'image en plein live.",
        "Une station de charge MagSafe 25 W — la vitesse maximale que l'iPhone 18 Pro accepte en sans-fil — répond exactement à ce problème, en gérant au passage l'Apple Watch et les AirPods sur une seule prise.",
      ],
      bullets: [
        "Le rechargement entre deux runs : Apple annonce 50 % en environ 15 minutes, et 5 minutes suffisent pour 6 heures de lecture vidéo.",
        "Le zéro-friction : le MagSafe s'aimante seul, à l'aveugle. Chaque geste que vous n'avez pas à regarder est un geste que vos viewers ne voient pas.",
        "La gestion thermique : le socle maintient l'iPhone à l'air libre plutôt qu'à plat sur le bureau, la dissipation est meilleure et le throttling recule.",
      ],
      shopLinks: [
        {
          label: "Belkin UltraCharge Pro 3-en-1",
          href: ACC.stationCharge,
          note: "MagSafe 25 W pour les lives marathon",
        },
      ],
    },
    {
      id: "iphone-duo",
      heading: "Le cas iPhone Duo : le pliable résout un problème de cadrage",
      paragraphs: [
        "Parlons du grand écart que tout créateur connaît. La caméra frontale est pratique parce qu'elle montre votre cadrage en temps réel, mais c'est toujours le capteur le plus faible. La caméra arrière est infiniment meilleure, mais vous filmez à l'aveugle.",
        "L'iPhone Duo, premier pliable d'Apple, met fin à ce compromis par sa forme même. Vous filmez avec les deux capteurs Fusion 48 Mpx arrière et vous vous voyez en direct sur l'écran externe de 5,4 pouces. Plus de prise ratée, plus de recadrage au montage.",
      ],
      subsections: [
        {
          heading: "Le pied intégré et l'écran de 7,6 pouces",
          paragraphs: [
            "Un pliable tient debout tout seul. Replié à mi-course, le Duo devient son propre support, posé sur un coin de bureau ou une étagère : sa charnière bloque l'angle choisi et le garde. Pour un plan d'appoint, un B-roll ou une seconde caméra improvisée, vous n'avez besoin d'aucun accessoire. Pour un usage quotidien en revanche, le bras articulé reste supérieur : il verrouille un angle reproductible au millimètre.",
            "Déplié, le Duo offre 7,6 pouces d'OLED en ProMotion 120 Hz. Branché sur le hub HDMI ou simplement posé à côté du clavier, c'est la surface idéale pour le chat, les alertes et les stats, sans amputer un pixel de vos écrans de jeu.",
          ],
        },
        {
          heading: "Les contreparties, dites franchement",
          paragraphs: [
            "Le Duo n'est pas le choix par défaut. Il n'a pas de téléobjectif : deux modules 48 Mpx (principal et ultra grand-angle) là où le 18 Pro Max ajoute un téléobjectif 100 mm avec zoom qualité optique 8x — l'avantage reste au Pro Max pour un plan serré sur un produit. Il pèse 254 g, l'iPhone le plus lourd jamais produit : sur un support d'écran, ce poids demande un moniteur vraiment rigide, sinon passez par le bras articulé. Enfin, ses précommandes ouvrent le 16 octobre pour une sortie le 23 octobre 2026 : c'est un investissement de créateur, pas un achat d'impulsion.",
          ],
        },
        {
          heading: "Alors, quel modèle pour quel setup ?",
          paragraphs: [
            "iPhone 18 Pro : le meilleur rapport performance/encombrement. 211 g, donc zéro contrainte de couple sur tous les supports. Le choix par défaut pour une webcam fixe à demeure.",
            "iPhone 18 Pro Max : le plus polyvalent des trois. Le téléobjectif 100 mm ouvre les plans serrés, l'écran de 6,9 pouces sert de moniteur d'appoint, et ses 45 heures d'autonomie vidéo encaissent les lives marathon. Si vous ne deviez en prendre qu'un pour streamer, c'est celui-là.",
            "iPhone Duo : le choix du créateur qui tourne beaucoup en solo. Le preview sur écran externe et le pied intégré changent le quotidien du tournage. À réserver à ceux qui filment plus qu'ils ne jouent.",
          ],
        },
      ],
      showCta: true,
      links: [
        {
          label: "Tout savoir sur l'iPhone Duo, le premier pliable d'Apple",
          href: "/iphone-18-pro/iphone-duo-pliable",
        },
        {
          label: "Comparer l'iPhone 18 Pro et le Pro Max en détail",
          href: "/iphone-18-pro/iphone-18-pro-vs-pro-max",
        },
      ],
    },
    {
      id: "setup-complet",
      heading: "Votre setup iPhone 18 Pro complet, en un coup d'œil",
      paragraphs: [
        "La pièce maîtresse d'abord : iPhone 18 Pro, iPhone 18 Pro Max ou iPhone Duo, selon le profil détaillé juste au-dessus. Et les six pièces qui l'entourent, dans l'ordre logique de montage.",
        "Vous démarrez avec un budget serré ? Commencez par le câble USB-C 10 Gb/s et le support d'écran MagSafe : vous obtenez déjà une webcam 4K qui humilie n'importe quelle webcam USB du marché.",
      ],
      bullets: [
        "1. Support écran MagSafe — le point de départ : l'iPhone à hauteur d'yeux sur votre moniteur.",
        "2. Bras articulé — les angles multiples, et l'absorption des vibrations du bureau.",
        "3. Câble USB-C 240W 10 Gb/s — 4K sans compression, transferts à pleine vitesse, charge simultanée.",
        "4. Hub USB-C HDMI 4K60 — la sortie qui fait de l'iPhone un second écran ou une source de capture.",
        "5. Carte de capture 4K — l'entrée du gameplay iPhone dans OBS, sans latence.",
        "6. Station de charge MagSafe 25 W — pour tenir la distance sur les lives marathon.",
      ],
      shopLinks: [
        { label: "1. Belkin Support Écran MagSafe", href: ACC.supportEcran },
        { label: "2. Elgato Mini Mount", href: ACC.brasArticule },
        { label: "3. UGREEN Câble USB-C 240W 10 Gb/s", href: ACC.cableUsbC },
        { label: "4. UGREEN Uno Hub USB-C HDMI 4K60 100W", href: ACC.hubHdmi },
        { label: "5. Elgato Game Capture 4K S", href: ACC.carteCapture },
        { label: "6. Belkin UltraCharge Pro 3-en-1", href: ACC.stationCharge },
      ],
    },
    {
      id: "conclusion",
      heading: "Le périphérique le plus puissant de votre setup est déjà dans votre poche",
      paragraphs: [
        "Récapitulons ce que l'iPhone 18 Pro apporte réellement à un setup gaming et streaming : un capteur 48 Mpx à ouverture variable qui surclasse toutes les webcams dédiées, un encodage 4K Dolby Vision jusqu'à 120 fps, une sortie DisplayPort native qui en fait une source vidéo à part entière, un port USB 3 à 10 Gb/s pour les transferts lourds, la charge MagSafe 25 W et une puce A20 Pro assez costaude pour jouer et diffuser sans broncher.",
        "Mais tout cela reste du potentiel dormant tant que l'appareil est posé à plat sur votre bureau, relié à un câble de charge USB 2.0. Les six accessoires ci-dessus sont ce qui transforme ce potentiel en stream visible à l'écran. La frontière entre mobile et setup PC n'est pas en train de s'effacer : elle a déjà disparu.",
      ],
      showCta: true,
      links: [
        {
          label: "Voir le comparatif complet des iPhone 16, 17 et 18 Pro",
          href: "/iphone-18-pro/comparatif-iphone-16-17-18",
        },
      ],
    },
  ],
  faq: [
    {
      question: "L'iPhone 18 Pro fonctionne-t-il comme webcam sur Windows ?",
      answer:
        "Oui, avec une application passerelle telle que Camo Studio. Continuity Camera est réservée à macOS, mais OBS, Streamlabs et Discord reçoivent ensuite la caméra sur Windows.",
    },
    {
      question: "Quel câble choisir pour relier l'iPhone au PC ?",
      answer:
        "Un câble USB-C certifié pour les données à 10 Gb/s et la vidéo 4K. Un câble uniquement conçu pour la charge est souvent limité à 480 Mb/s en USB 2.0.",
    },
    {
      question: "Faut-il une carte de capture pour utiliser OBS ?",
      answer:
        "Pas pour une simple webcam. Elle devient utile pour capturer un gameplay mobile en laissant l'iPhone consacrer toute sa puissance au jeu, sans chauffe ni chute d'images.",
    },
    {
      question: "L'iPhone Duo est-il un meilleur choix qu'un 18 Pro Max pour créer ?",
      answer:
        "Pour filmer en solo, oui : l'écran externe permet de se voir tout en utilisant les capteurs arrière. Pour les plans serrés, le téléobjectif 100 mm du Pro Max reste supérieur.",
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
    duo: {
      url: AMAZON_URLS.duo,
      productName: "iPhone Duo — premier pliable d'Apple",
    },
  },
  related: [
    {
      label: "iPhone 18 Pro et Pro Max en webcam 4K sur PC",
      href: "/iphone-18-pro/webcam-4k-pc",
    },
    {
      label: "Accessoires USB-C partagés entre l'iPhone et le PC",
      href: "/iphone-18-pro/accessoires-usb-c-setup",
    },
    {
      label: "iPhone Duo : le premier pliable d'Apple",
      href: "/iphone-18-pro/iphone-duo-pliable",
    },
  ],
  seo: {
    title: "iPhone 18 Pro et Pro Max : le setup gaming et streaming complet",
    description:
      "Webcam 4K, capture OBS, second écran, USB-C 10 Gb/s : les six accessoires qui transforment l'iPhone 18 Pro, le Pro Max ou l'iPhone Duo en pièce maîtresse de votre setup.",
  },
};

export default article;
