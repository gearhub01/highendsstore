export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: "Tech" | "Tuto" | "Actu" | "Tendance";
  tag: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "hall-effect-vs-mecanique",
    title: "Hall Effect vs Mécanique : le guide ultime",
    excerpt: "Les switches Hall Effect révolutionnent le marché du clavier gaming. Mais valent-ils vraiment le coup face aux mécaniques traditionnelles ? On décortique tout.",
    content: [
      "Le monde du clavier gaming connaît une véritable révolution avec l'arrivée des switches Hall Effect. Ces capteurs magnétiques promettent une précision inégalée et une durée de vie quasi infinie. Mais comment se comparent-ils aux switches mécaniques traditionnels qui dominent le marché depuis des années ?",
      "## Comment fonctionne un switch Hall Effect ?",
      "Contrairement aux switches mécaniques qui utilisent un contact physique en métal pour enregistrer une frappe, les switches Hall Effect reposent sur un capteur magnétique. Un aimant intégré au stem se déplace devant un capteur à effet Hall, qui détecte la position exacte de la touche à tout moment. Résultat : pas de contact physique, pas d'usure mécanique, et surtout un point d'actuation entièrement personnalisable.",
      "## L'avantage du Rapid Trigger",
      "La fonctionnalité la plus révolutionnaire des claviers Hall Effect est le Rapid Trigger. Au lieu d'un point d'actuation fixe, la touche s'active dès qu'elle détecte un mouvement vers le bas, et se désactive au moindre mouvement vers le haut. Pour les joueurs FPS compétitifs, cela signifie des strafes plus rapides et un contrôle de mouvement incomparable.",
      "## Et les switches mécaniques dans tout ça ?",
      "Les switches mécaniques restent excellents pour la majorité des utilisateurs. Ils offrent un feedback tactile ou clicky que les Hall Effect peinent encore à reproduire parfaitement. De plus, l'écosystème est infiniment plus large : des centaines de switches différents, des keycaps universels, et une communauté de modding très active.",
      "## Notre verdict",
      "Si vous êtes un joueur compétitif, surtout sur des FPS comme Valorant ou CS2, les switches Hall Effect sont un game-changer. Pour le typing quotidien, le coding ou un usage polyvalent, les mécaniques restent un choix solide et souvent plus économique. Le futur est magnétique, mais le présent mécanique a encore de beaux jours devant lui."
    ],
    category: "Tendance",
    tag: "Tendance",
    date: "2026-02-08",
    readTime: "8 min",
    author: "Alex Chen",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80"
  },
  {
    slug: "choisir-polling-rate-2026",
    title: "Comment choisir son polling rate en 2026",
    excerpt: "4000 Hz, 8000 Hz… Les polling rates explosent. On vous explique ce que ça change vraiment et si ça vaut le coup d'investir.",
    content: [
      "Le polling rate est devenu l'un des arguments marketing les plus utilisés par les fabricants de périphériques gaming. Mais au-delà des chiffres impressionnants, que signifie vraiment passer de 1000 Hz à 4000 Hz ou même 8000 Hz ?",
      "## Qu'est-ce que le polling rate ?",
      "Le polling rate représente la fréquence à laquelle votre périphérique (souris ou clavier) communique sa position ou son état à votre PC. À 1000 Hz, votre souris envoie 1000 rapports par seconde. À 4000 Hz, c'est 4 fois plus.",
      "## La différence est-elle perceptible ?",
      "Entre 125 Hz et 1000 Hz, la différence est flagrante et visible à l'œil nu. Entre 1000 Hz et 4000 Hz, elle devient plus subtile mais reste mesurable. Au-delà de 4000 Hz, seuls les joueurs les plus compétitifs et les plus entraînés pourront percevoir une différence.",
      "## L'impact sur les performances système",
      "Un polling rate élevé consomme davantage de ressources CPU. À 8000 Hz, certains systèmes peuvent voir leur framerate baisser de 5-10% dans les jeux les plus exigeants. Il est donc crucial de trouver le bon équilibre entre réactivité et performance globale.",
      "## Notre recommandation",
      "Pour la majorité des joueurs, 1000 Hz reste le sweet spot parfait. Si vous jouez en compétitif sur un PC puissant, 4000 Hz offre un avantage mesurable. Réservez le 8000 Hz aux configurations haut de gamme avec un budget confortable."
    ],
    category: "Tech",
    tag: "Tech",
    date: "2026-02-05",
    readTime: "6 min",
    author: "Marie Dupont",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80"
  },
  {
    slug: "lubrifier-switches-pro",
    title: "Modding : lubrifier ses switches comme un pro",
    excerpt: "Le lubing est l'upgrade la plus satisfaisante pour votre clavier. Voici notre méthode étape par étape pour un résultat parfait.",
    content: [
      "La lubrification des switches est considérée comme le mod le plus impactant que vous puissiez faire sur un clavier mécanique. Un switch bien lubrifié élimine les bruits parasites, adoucit la course et transforme complètement l'expérience de frappe.",
      "## Le matériel nécessaire",
      "Avant de commencer, vous aurez besoin de : un lubrifiant (Krytox 205g0 pour les linéaires, Tribosys 3203 pour les tactiles), un pinceau fin taille 0 ou 00, un switch opener, une station de lubing ou un plateau, et beaucoup de patience.",
      "## Étape 1 : Démonter le switch",
      "Utilisez le switch opener pour séparer délicatement le housing supérieur du housing inférieur. Retirez le stem et le ressort. Organisez vos pièces pour ne rien perdre — un plateau compartimenté est idéal.",
      "## Étape 2 : Lubrifier le housing inférieur",
      "Appliquez une fine couche de lubrifiant sur les rails latéraux du housing inférieur. Moins c'est plus : vous pouvez toujours en ajouter, mais en retirer est bien plus compliqué. Évitez d'en mettre sur les pattes de contact si vous avez des switches tactiles.",
      "## Étape 3 : Le stem",
      "Lubrifiez les rails latéraux du stem et la face avant du pôle central. Pour les switches linéaires, vous pouvez aussi couvrir les pattes. Pour les tactiles, gardez les pattes sèches pour préserver le bump.",
      "## Étape 4 : Le ressort",
      "Deux options : bag lubing (mettre tous les ressorts dans un sac avec du lubrifiant) ou les lubrifier individuellement. Le bag lubing est plus rapide et donne d'excellents résultats pour éliminer le spring ping.",
      "## Résultat",
      "Un clavier entièrement lubrifié prend entre 2 et 4 heures pour 60-70 switches. Le résultat est spectaculaire : un son thocky profond, une course soyeuse et zéro bruit métallique. C'est un investissement en temps qui vaut absolument la peine."
    ],
    category: "Tuto",
    tag: "Tuto",
    date: "2026-01-28",
    readTime: "10 min",
    author: "Lucas Martin",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80"
  },
  {
    slug: "ces-2026-meilleurs-peripheriques",
    title: "CES 2026 : les meilleurs périphériques annoncés",
    excerpt: "Du clavier révolutionnaire de Wooting au casque holographique de SteelSeries, voici notre sélection des annonces les plus marquantes du CES 2026.",
    content: [
      "Le CES 2026 a été riche en annonces pour les gamers. Entre innovations technologiques et designs audacieux, voici notre récap des périphériques qui ont retenu notre attention.",
      "## Wooting Two HE Pro",
      "Wooting frappe fort avec le Two HE Pro, un clavier full-size qui intègre la dernière génération de switches Hall Effect avec une résolution de 0.01mm. Le Rapid Trigger atteint des vitesses record et le nouveau firmware promet une latence de seulement 0.25ms. Prix non communiqué.",
      "## Razer Viper V3 Hyperspeed",
      "Razer continue de repousser les limites avec la Viper V3 Hyperspeed. À seulement 49g, elle embarque le nouveau capteur Focus Pro 36K Gen2 et un polling rate de 8000 Hz en sans-fil. Une prouesse technique impressionnante.",
      "## SteelSeries Arctis Nova 7X (2026 Edition)",
      "SteelSeries améliore son casque phare avec des transducteurs planaires magnétiques et une autonomie de 60 heures. Le nouveau système de micro à réduction de bruit AI promet une clarté vocale inédite en gaming.",
      "## ASUS ROG Swift OLED PG32UCDM",
      "Un moniteur 32 pouces 4K OLED avec un refresh rate de 240 Hz et un temps de réponse de 0.03ms. Le Saint Graal du moniteur gaming existe enfin, mais il faudra un budget conséquent.",
      "## Notre coup de cœur",
      "Le Wooting Two HE Pro remporte notre prix du meilleur périphérique du CES 2026. La combinaison de la technologie Hall Effect de pointe avec un prix compétitif en fait le produit le plus excitant de cette édition."
    ],
    category: "Actu",
    tag: "Actu",
    date: "2026-01-15",
    readTime: "7 min",
    author: "Sarah Kim",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}
