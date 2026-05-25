import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    supportedLngs: ["fr", "en", "es", "de"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "gearhub-lang",
    },
  });

export const languages = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export default i18n;
