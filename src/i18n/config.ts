import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ui } from "./ui";


const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        categories: "Catégories",
        guides: "Guides",
        blog: "Blog",
        comparisons: "Comparaisons",
        search: "Rechercher",
        theme: "Changer de thème",
        language: "Langue",
        viewAllGuides: "Voir tous les guides",
        viewAllArticles: "Voir tous les articles",
        buyingGuides: "Guides d'achat",
        recentArticles: "Articles récents",
        reviews: "Reviews",
        countGuides: "{{count}} guides",
        soon: "Bientôt",
        top5: "Top 5",
      },
      cats: {
        keyboards: "Claviers",
        mice: "Souris",
        headsets: "Casques",
        monitors: "Moniteurs",
        streaming: "Streaming",
        keyboards_desc: "Mécaniques, membrane, sans-fil — trouvez le switch parfait",
        mice_desc: "DPI, ergonomie, poids — la souris idéale pour votre grip",
        headsets_desc: "Son immersif, micro crystal clear, confort longue durée",
        monitors_desc: "144Hz, 240Hz, 4K — l'écran qui change votre gameplay",
        streaming_desc: "Webcams, éclairage, micros — setup de streamer pro",
      },
      hero: {
        eyebrow: "Guides & Reviews Gaming 2026",
        title_1: "Trouvez le",
        title_accent: "Setup Gaming",
        title_2: "Parfait",
        subtitle: "Guides d'achat experts, critiques honnêtes et comparaisons détaillées pour claviers, souris, casques et moniteurs gaming.",
        cta_primary: "Explorer les Guides",
        cta_secondary: "Parcourir les Catégories",
        stat_products: "Produits testés",
        stat_guides: "Guides d'achat",
        stat_independent: "Indépendant",
      },
      grid: {
        title_1: "Explorez par",
        title_accent: "Catégorie",
        subtitle: "Des guides spécialisés pour chaque type de périphérique gaming",
      },
      featured: {
        title_1: "Guides",
        title_accent: "Populaires",
        subtitle: "Les guides les plus lus ce mois-ci",
        all: "Tous les guides",
        readTime: "{{time}} de lecture",
        tags: { top: "TOP PICK", new: "NOUVEAU", review: "REVIEW", comparison: "COMPARAISON" },
      },
      best: {
        title_1: "🏆 Best Of du",
        title_accent: "Mois",
        subtitle: "Nos recommandations #1 dans chaque catégorie, mises à jour mensuellement",
      },
      newsletter: {
        badge: "Newsletter",
        title_1: "Ne Manquez Aucun",
        title_accent: "Deal",
        subtitle: "Recevez nos best picks, alertes promos et nouveaux guides chaque semaine. Pas de spam, que du gaming.",
        placeholder: "votre@email.com",
        subscribe: "S'abonner",
        footer: "Rejoignez 5,000+ gamers. Désabonnement en 1 clic.",
      },
      footer: {
        tagline: "Votre conseiller de confiance pour les accessoires PC gaming. Tests indépendants, avis honnêtes.",
        guides: "Guides",
        resources: "Ressources",
        legal: "Légal",
        allGuides: "Tous les Guides",
        comparisons: "Comparaisons",
        reviews: "Reviews",
        blog: "Blog",
        legalNotice: "Mentions Légales",
        affiliate: "Politique Affiliation",
        privacy: "Confidentialité",
        contact: "Contact",
        copyright: "© 2026 Highends Store. Tous droits réservés.",
        affiliateNotice: "Ce site participe au programme d'affiliation Amazon.",
        learnMore: "En savoir plus",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        categories: "Categories",
        guides: "Guides",
        blog: "Blog",
        comparisons: "Comparisons",
        search: "Search",
        theme: "Toggle theme",
        language: "Language",
        viewAllGuides: "View all guides",
        viewAllArticles: "View all articles",
        buyingGuides: "Buying guides",
        recentArticles: "Recent articles",
        reviews: "Reviews",
        countGuides: "{{count}} guides",
        soon: "Soon",
        top5: "Top 5",
      },
      cats: {
        keyboards: "Keyboards",
        mice: "Mice",
        headsets: "Headsets",
        monitors: "Monitors",
        streaming: "Streaming",
        keyboards_desc: "Mechanical, membrane, wireless — find the perfect switch",
        mice_desc: "DPI, ergonomics, weight — the ideal mouse for your grip",
        headsets_desc: "Immersive sound, crystal-clear mic, all-day comfort",
        monitors_desc: "144Hz, 240Hz, 4K — the display that elevates your gameplay",
        streaming_desc: "Webcams, lighting, mics — a pro streamer setup",
      },
      hero: {
        eyebrow: "Gaming Guides & Reviews 2026",
        title_1: "Find the",
        title_accent: "Perfect Gaming",
        title_2: "Setup",
        subtitle: "Expert buying guides, honest reviews and detailed comparisons for gaming keyboards, mice, headsets and monitors.",
        cta_primary: "Explore Guides",
        cta_secondary: "Browse Categories",
        stat_products: "Products tested",
        stat_guides: "Buying guides",
        stat_independent: "Independent",
      },
      grid: {
        title_1: "Browse by",
        title_accent: "Category",
        subtitle: "Specialized guides for every type of gaming peripheral",
      },
      featured: {
        title_1: "Popular",
        title_accent: "Guides",
        subtitle: "The most-read guides this month",
        all: "All guides",
        readTime: "{{time}} read",
        tags: { top: "TOP PICK", new: "NEW", review: "REVIEW", comparison: "COMPARISON" },
      },
      best: {
        title_1: "🏆 Best Of the",
        title_accent: "Month",
        subtitle: "Our #1 picks in each category, updated monthly",
      },
      newsletter: {
        badge: "Newsletter",
        title_1: "Never Miss a",
        title_accent: "Deal",
        subtitle: "Get our best picks, deal alerts and new guides every week. No spam, just gaming.",
        placeholder: "your@email.com",
        subscribe: "Subscribe",
        footer: "Join 5,000+ gamers. Unsubscribe in 1 click.",
      },
      footer: {
        tagline: "Your trusted advisor for gaming PC accessories. Independent tests, honest reviews.",
        guides: "Guides",
        resources: "Resources",
        legal: "Legal",
        allGuides: "All Guides",
        comparisons: "Comparisons",
        reviews: "Reviews",
        blog: "Blog",
        legalNotice: "Legal Notice",
        affiliate: "Affiliate Policy",
        privacy: "Privacy",
        contact: "Contact",
        copyright: "© 2026 Highends Store. All rights reserved.",
        affiliateNotice: "This site participates in the Amazon affiliate program.",
        learnMore: "Learn more",
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        categories: "Categorías",
        guides: "Guías",
        blog: "Blog",
        comparisons: "Comparativas",
        search: "Buscar",
        theme: "Cambiar tema",
        language: "Idioma",
        viewAllGuides: "Ver todas las guías",
        viewAllArticles: "Ver todos los artículos",
        buyingGuides: "Guías de compra",
        recentArticles: "Artículos recientes",
        reviews: "Reseñas",
        countGuides: "{{count}} guías",
        soon: "Pronto",
        top5: "Top 5",
      },
      cats: {
        keyboards: "Teclados",
        mice: "Ratones",
        headsets: "Auriculares",
        monitors: "Monitores",
        streaming: "Streaming",
        keyboards_desc: "Mecánicos, de membrana, inalámbricos — encuentra el switch perfecto",
        mice_desc: "DPI, ergonomía, peso — el ratón ideal para tu agarre",
        headsets_desc: "Sonido inmersivo, micro nítido, comodidad todo el día",
        monitors_desc: "144Hz, 240Hz, 4K — la pantalla que cambia tu gameplay",
        streaming_desc: "Webcams, iluminación, micros — setup de streamer pro",
      },
      hero: {
        eyebrow: "Guías y Reseñas Gaming 2026",
        title_1: "Encuentra el",
        title_accent: "Setup Gaming",
        title_2: "Perfecto",
        subtitle: "Guías expertas, reseñas honestas y comparativas detalladas para teclados, ratones, auriculares y monitores gaming.",
        cta_primary: "Explorar Guías",
        cta_secondary: "Ver Categorías",
        stat_products: "Productos testados",
        stat_guides: "Guías de compra",
        stat_independent: "Independiente",
      },
      grid: {
        title_1: "Explora por",
        title_accent: "Categoría",
        subtitle: "Guías especializadas para cada tipo de periférico gaming",
      },
      featured: {
        title_1: "Guías",
        title_accent: "Populares",
        subtitle: "Las guías más leídas este mes",
        all: "Todas las guías",
        readTime: "{{time}} de lectura",
        tags: { top: "TOP", new: "NUEVO", review: "RESEÑA", comparison: "COMPARATIVA" },
      },
      best: {
        title_1: "🏆 Lo Mejor del",
        title_accent: "Mes",
        subtitle: "Nuestras recomendaciones #1 en cada categoría, actualizadas cada mes",
      },
      newsletter: {
        badge: "Newsletter",
        title_1: "No te Pierdas Ningún",
        title_accent: "Deal",
        subtitle: "Recibe nuestras mejores selecciones, alertas de ofertas y nuevas guías cada semana. Sin spam.",
        placeholder: "tu@email.com",
        subscribe: "Suscribirse",
        footer: "Únete a 5,000+ gamers. Cancelación en 1 clic.",
      },
      footer: {
        tagline: "Tu asesor de confianza para accesorios gaming. Tests independientes, opiniones honestas.",
        guides: "Guías",
        resources: "Recursos",
        legal: "Legal",
        allGuides: "Todas las Guías",
        comparisons: "Comparativas",
        reviews: "Reseñas",
        blog: "Blog",
        legalNotice: "Aviso Legal",
        affiliate: "Política de Afiliación",
        privacy: "Privacidad",
        contact: "Contacto",
        copyright: "© 2026 Highends Store. Todos los derechos reservados.",
        affiliateNotice: "Este sitio participa en el programa de afiliados de Amazon.",
        learnMore: "Saber más",
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: "Startseite",
        categories: "Kategorien",
        guides: "Ratgeber",
        blog: "Blog",
        comparisons: "Vergleiche",
        search: "Suchen",
        theme: "Thema wechseln",
        language: "Sprache",
        viewAllGuides: "Alle Ratgeber ansehen",
        viewAllArticles: "Alle Artikel ansehen",
        buyingGuides: "Kaufratgeber",
        recentArticles: "Neueste Artikel",
        reviews: "Tests",
        countGuides: "{{count}} Ratgeber",
        soon: "Bald",
        top5: "Top 5",
      },
      cats: {
        keyboards: "Tastaturen",
        mice: "Mäuse",
        headsets: "Headsets",
        monitors: "Monitore",
        streaming: "Streaming",
        keyboards_desc: "Mechanisch, Membran, kabellos — finde den perfekten Switch",
        mice_desc: "DPI, Ergonomie, Gewicht — die ideale Maus für deinen Griff",
        headsets_desc: "Immersiver Klang, kristallklares Mikro, ganztägiger Komfort",
        monitors_desc: "144Hz, 240Hz, 4K — das Display, das dein Gameplay aufwertet",
        streaming_desc: "Webcams, Beleuchtung, Mikros — Pro-Streamer-Setup",
      },
      hero: {
        eyebrow: "Gaming-Ratgeber & Tests 2026",
        title_1: "Finde das",
        title_accent: "perfekte Gaming",
        title_2: "Setup",
        subtitle: "Experten-Kaufratgeber, ehrliche Tests und detaillierte Vergleiche für Gaming-Tastaturen, -Mäuse, -Headsets und -Monitore.",
        cta_primary: "Ratgeber entdecken",
        cta_secondary: "Kategorien durchsuchen",
        stat_products: "Getestete Produkte",
        stat_guides: "Kaufratgeber",
        stat_independent: "Unabhängig",
      },
      grid: {
        title_1: "Nach",
        title_accent: "Kategorie",
        subtitle: "Spezialisierte Ratgeber für jede Art von Gaming-Peripherie",
      },
      featured: {
        title_1: "Beliebte",
        title_accent: "Ratgeber",
        subtitle: "Die meistgelesenen Ratgeber diesen Monat",
        all: "Alle Ratgeber",
        readTime: "{{time}} Lesezeit",
        tags: { top: "TOP", new: "NEU", review: "TEST", comparison: "VERGLEICH" },
      },
      best: {
        title_1: "🏆 Best Of des",
        title_accent: "Monats",
        subtitle: "Unsere #1-Empfehlungen in jeder Kategorie, monatlich aktualisiert",
      },
      newsletter: {
        badge: "Newsletter",
        title_1: "Verpasse keinen",
        title_accent: "Deal",
        subtitle: "Erhalte unsere Top-Picks, Deal-Alerts und neue Ratgeber jede Woche. Kein Spam.",
        placeholder: "deine@email.com",
        subscribe: "Abonnieren",
        footer: "Tritt 5.000+ Gamern bei. Abmeldung in 1 Klick.",
      },
      footer: {
        tagline: "Dein vertrauenswürdiger Berater für Gaming-PC-Zubehör. Unabhängige Tests, ehrliche Meinungen.",
        guides: "Ratgeber",
        resources: "Ressourcen",
        legal: "Rechtliches",
        allGuides: "Alle Ratgeber",
        comparisons: "Vergleiche",
        reviews: "Tests",
        blog: "Blog",
        legalNotice: "Impressum",
        affiliate: "Affiliate-Richtlinie",
        privacy: "Datenschutz",
        contact: "Kontakt",
        copyright: "© 2026 Highends Store. Alle Rechte vorbehalten.",
        affiliateNotice: "Diese Seite nimmt am Amazon-Partnerprogramm teil.",
        learnMore: "Mehr erfahren",
      },
    },
  },
};

// Libellés d'interface partagés, fusionnés dans chaque langue.
(Object.keys(ui) as (keyof typeof ui)[]).forEach((lng) => {
  (resources as Record<string, { translation: Record<string, unknown> }>)[lng].translation.ui = ui[lng];
});

/** Clés absentes rencontrées à l'exécution (utile en développement). */
export const missingKeys = new Set<string>();

i18n
  // Le détecteur reste branché UNIQUEMENT sur localStorage : jamais navigator.
  // SEO : un robot sans préférence enregistrée doit toujours recevoir le français.
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // Sans préférence enregistrée, la langue initiale est toujours le français.
    // Aucune détection navigateur n'est utilisée.
    lng:
      typeof window !== "undefined"
        ? window.localStorage.getItem("gearhub-lang") ?? "fr"
        : "fr",
    // Le repli français est géré ci-dessous afin d'être signalé visuellement
    // en développement au lieu de masquer silencieusement une clé absente.
    fallbackLng: false,
    supportedLngs: ["fr", "en", "es", "de"],
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    interpolation: { escapeValue: false },
    // Une clé absente retombe sur le français, jamais sur la clé brute.
    // En développement, le marqueur rend immédiatement le repli repérable.
    parseMissingKeyHandler: (key) => {
      const fr = key
        .split(".")
        .reduce<unknown>((acc, part) => (acc as Record<string, unknown> | undefined)?.[part], resources.fr.translation);
      if (typeof fr !== "string") return import.meta.env.DEV ? `⚠︎⟦${key}⟧` : "";
      return import.meta.env.DEV ? `⚠︎⟦FR: ${fr}⟧` : fr;
    },
    saveMissing: import.meta.env.DEV,
    missingKeyHandler: (_lngs, _ns, key) => {
      if (!missingKeys.has(key)) {
        missingKeys.add(key);
        if (import.meta.env.DEV) console.warn(`[i18n] clé manquante : ${key}`);
      }
    },
    detection: {
      // Pas de "navigator" : la langue par défaut reste le français.
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "gearhub-lang",
    },
  });

if (import.meta.env.DEV) {
  const flatten = (value: Record<string, unknown>, prefix = ""): string[] =>
    Object.entries(value).flatMap(([key, child]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      return child && typeof child === "object"
        ? flatten(child as Record<string, unknown>, path)
        : [path];
    });
  const frenchKeys = flatten(resources.fr.translation);
  (["en", "es", "de"] as const).forEach((lng) => {
    const localeKeys = new Set(flatten(resources[lng].translation));
    frenchKeys.filter((key) => !localeKeys.has(key)).forEach((key) => {
      console.warn(`[i18n] clé française absente du bundle ${lng} : ${key}`);
    });
  });
}

// L'attribut lang de <html> suit la langue active (lecteurs d'écran + Google).
const syncHtmlLang = (lng: string) => {
  if (typeof document !== "undefined") document.documentElement.lang = lng;
};
syncHtmlLang(i18n.resolvedLanguage ?? "fr");
i18n.on("languageChanged", syncHtmlLang);

export const languages = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export default i18n;

