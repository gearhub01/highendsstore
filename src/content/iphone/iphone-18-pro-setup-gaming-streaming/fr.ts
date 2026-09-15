import { AMAZON_URLS } from "@/config/amazon-links";
import type { CollectionArticle } from "../types";

/** Article : /iphone-18-pro/iphone-18-pro-setup-gaming-streaming */
export const article: CollectionArticle = {
  slug: "iphone-18-pro-setup-gaming-streaming",
  model: "both",
  title: "iPhone 18 Pro : setup gaming et streaming",
  excerpt:
    "Webcam 4K, capture OBS, second écran et accessoires USB-C : comment intégrer l'iPhone 18 Pro ou Pro Max dans un setup gaming et streaming.",
  image:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
  updatedAt: "2026-09-15",
  publishedAt: "2026-09-15",
  intro:
    "L'iPhone 18 Pro et le Pro Max ne servent plus seulement à filmer loin du bureau. Leur caméra, leur port USB-C et leur sortie vidéo permettent de les intégrer directement à un setup gaming ou streaming : webcam, source OBS, écran de contrôle et solution de secours. Voici les accessoires et réglages qui transforment réellement le téléphone en périphérique de création.",
  featuredAmazon: true,
  sections: [
    {
      id: "webcam-ultime",
      heading: "L'iPhone 18 Pro en webcam haut de gamme",
      paragraphs: [
        "Le module principal 48 Mpx, l'ouverture variable, l'Apple Log 2 et l'enregistrement ProRes donnent à l'iPhone une marge que les webcams classiques n'ont pas. Sur un stream, le bénéfice se voit surtout dans les faibles lumières, les mouvements et la séparation naturelle entre le visage et l'arrière-plan.",
        "La caméra avant 18 Mpx Center Stage à ouverture ƒ/1,9 facilite les sessions face caméra. Son cadrage automatique suit les mouvements et élargit le champ lorsque plusieurs personnes entrent dans l'image. Pour obtenir le meilleur rendu, la caméra arrière reste toutefois la référence.",
      ],
      subsections: [
        {
          heading: "Un support placé dans l'axe du regard",
          paragraphs: [
            "Un support MagSafe fixé en haut du moniteur place l'objectif à hauteur d'yeux et conserve exactement le même cadrage après chaque utilisation. Sur le Pro Max, plus lourd, vérifiez la rigidité de l'écran et de la pince. Un bras articulé fixé au bureau devient préférable pour les plans en plongée, les démonstrations de clavier ou les prises de vue à plusieurs angles.",
          ],
        },
        {
          heading: "Le point essentiel sous Windows",
          paragraphs: [
            "Continuity Camera reste réservé à macOS. Sur un PC Windows, une application telle que Camo Studio sert de passerelle et expose l'iPhone comme une caméra reconnue par OBS, Streamlabs ou Discord. Une liaison filaire est recommandée pour stabiliser la définition, la latence et l'exposition pendant les longues sessions.",
          ],
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
      heading: "USB-C : éviter le goulot d'étranglement",
      paragraphs: [
        "Un câble fourni avec un chargeur peut être limité au débit USB 2.0. Pour transporter un flux vidéo stable et transférer de lourds rushes, choisissez un câble USB-C certifié pour les données à 10 Gb/s, la vidéo 4K et la charge simultanée.",
        "Cette liaison sert à la fois à envoyer l'image vers le PC, à récupérer rapidement les fichiers ProRes et à maintenir la batterie pendant la capture. La certification du câble compte davantage que sa puissance de charge affichée.",
      ],
      bullets: [
        "Débit de données annoncé à 10 Gb/s",
        "Compatibilité vidéo 4K et DisplayPort",
        "Longueur contenue pour préserver la stabilité du signal",
        "Charge simultanée pour les sessions prolongées",
      ],
      links: [
        {
          label: "Voir les accessoires USB-C partagés avec le PC",
          href: "/iphone-18-pro/accessoires-usb-c-setup",
        },
      ],
    },
    {
      id: "second-ecran",
      heading: "Transformer l'iPhone en écran de monitoring",
      paragraphs: [
        "La sortie DisplayPort par USB-C permet d'intégrer le téléphone à un hub doté d'une sortie HDMI et d'une alimentation passthrough. Le chat, les alertes ou les statistiques peuvent alors être affichés sur un écran secondaire sans encombrer les moniteurs consacrés au jeu.",
        "Le même branchement simplifie une démonstration d'application mobile ou de gameplay iOS. En cas de panne du PC principal, l'iPhone reste aussi une source vidéo autonome pour maintenir une diffusion ou enregistrer une séquence de secours.",
      ],
    },
    {
      id: "capture-obs",
      heading: "Faire entrer l'iPhone dans OBS",
      paragraphs: [
        "Pour diffuser un jeu mobile, une carte de capture évite de demander au téléphone de jouer et d'encoder en même temps. L'iPhone envoie son signal HDMI via le hub ; la carte de capture le présente ensuite au PC comme une source vidéo standard dans OBS.",
        "Cette méthode réserve les ressources du téléphone au jeu, limite les chutes d'images et permet de construire une vraie scène avec gameplay, caméra et habillage graphique. Une carte avec passthrough conserve également un affichage direct à faible latence sur le moniteur de jeu.",
      ],
      bullets: [
        "Moins de charge d'encodage sur l'iPhone",
        "Gameplay intégré comme une source dédiée dans OBS",
        "Passthrough pour jouer sur un écran séparé",
        "Matériel réutilisable avec une console ou un second PC",
      ],
    },
    {
      id: "autonomie-thermique",
      heading: "Autonomie et température sur les longs lives",
      paragraphs: [
        "Une capture continue sollicite le capteur, l'écran, l'encodage et la connexion réseau. Les chiffres d'autonomie vidéo ne représentent donc pas un usage de streaming réel. La chaleur devient le principal risque : lorsqu'elle monte, le téléphone peut réduire ses performances et la qualité du flux.",
        "Une alimentation filaire via un hub est la solution la plus stable pendant la diffusion. Entre deux sessions, une station MagSafe garde l'appareil accessible et à l'air libre. Évitez de l'enfermer dans une coque épaisse ou de le poser sur une surface qui retient la chaleur pendant une capture 4K.",
      ],
    },
    {
      id: "pro-ou-pro-max",
      heading: "Pro ou Pro Max pour le streaming ?",
      paragraphs: [
        "L'iPhone 18 Pro est le choix le plus simple pour une webcam fixe : plus compact et plus léger, il impose moins de contraintes au support. Sa caméra suffit pour une production face caméra, une visioconférence ou des séquences de création courtes.",
        "L'iPhone 18 Pro Max convient mieux aux longues sessions. Son écran offre une surface de contrôle plus confortable et son endurance laisse davantage de marge. Son poids réclame en revanche un bras ou une fixation réellement rigide pour éviter les micro-vibrations visibles à l'image.",
      ],
      links: [
        {
          label: "Comparer l'iPhone 18 Pro et le Pro Max en détail",
          href: "/iphone-18-pro/iphone-18-pro-vs-pro-max",
        },
      ],
    },
    {
      id: "setup-complet",
      heading: "Le setup complet, dans l'ordre utile",
      paragraphs: [
        "Commencez par le maillon qui résout votre besoin immédiat. Pour une webcam, le support et le câble data sont prioritaires. Pour du gameplay mobile, ajoutez ensuite le hub vidéo et la carte de capture. La station de charge devient utile lorsque les sessions s'enchaînent.",
      ],
      bullets: [
        "Support MagSafe pour un cadrage constant à hauteur d'yeux",
        "Bras articulé pour les plans multiples et la stabilité",
        "Câble USB-C 10 Gb/s compatible vidéo",
        "Hub USB-C avec HDMI et alimentation passthrough",
        "Carte de capture 4K pour intégrer le signal à OBS",
        "Station de charge pour garder le téléphone disponible entre deux prises",
      ],
    },
    {
      id: "conclusion",
      heading: "Un périphérique de création déjà dans votre poche",
      paragraphs: [
        "La caméra, la sortie vidéo et l'USB-C font de l'iPhone 18 Pro ou Pro Max une pièce à part entière du setup. Mais ce potentiel reste inutilisé si le téléphone repose sur le bureau avec un câble limité à la charge. Un support stable et une vraie liaison data produisent déjà le plus grand changement visible.",
        "Le Pro privilégie la compacité ; le Pro Max, l'endurance et le confort de contrôle. Dans les deux cas, construisez le setup autour de votre usage réel plutôt que d'accumuler les accessoires : webcam, capture de gameplay ou écran de monitoring.",
      ],
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
        "Oui, avec une application passerelle telle que Camo Studio. Continuity Camera est réservée à macOS, mais OBS, Streamlabs et Discord peuvent recevoir la caméra sur Windows.",
    },
    {
      question: "Quel câble choisir pour relier l'iPhone au PC ?",
      answer:
        "Choisissez un câble USB-C certifié pour les données à 10 Gb/s et la vidéo. Un câble uniquement conçu pour la charge peut limiter fortement le débit.",
    },
    {
      question: "Le Pro Max donne-t-il une meilleure image que le Pro ?",
      answer:
        "La qualité de base est comparable. Le Pro Max se distingue surtout par son endurance et son grand écran, tandis que le Pro est plus facile à installer sur un support léger.",
    },
    {
      question: "Faut-il une carte de capture pour utiliser OBS ?",
      answer:
        "Pas pour une simple webcam. Elle devient utile pour capturer un gameplay ou une sortie HDMI tout en laissant l'iPhone consacrer ses ressources au jeu.",
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
      label: "iPhone 18 Pro ou Pro Max : lequel choisir",
      href: "/iphone-18-pro/iphone-18-pro-vs-pro-max",
    },
  ],
  seo: {
    title: "iPhone 18 Pro : setup gaming et streaming",
    description:
      "Webcam 4K, capture OBS, écran de contrôle et USB-C : intégrez l'iPhone 18 Pro ou Pro Max à un setup gaming et streaming complet.",
  },
};

export default article;