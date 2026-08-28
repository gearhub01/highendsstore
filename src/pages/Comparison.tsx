import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ComparisonHero from "@/components/comparison/ComparisonHero";
import ComparisonTable, { type ComparisonProduct } from "@/components/comparison/ComparisonTable";
import ComparisonRadar, { type RadarProduct } from "@/components/comparison/ComparisonRadar";
import ComparisonVerdict from "@/components/comparison/ComparisonVerdict";
import RelatedContent from "@/components/RelatedContent";
import SEOHead, { SITE_URL } from "@/components/SEOHead";

// --- MOCK DATA ---

const products: ComparisonProduct[] = [
  {
    name: "Wooting 80HE",
    price: "199€",
    rating: 9.6,
    isBestPick: true,
    specs: {
      switch: "Hall Effect",
      format: "TKL (80%)",
      connexion: "USB-C",
      actuation: "0.1 – 4.0mm",
      polling: "1000 Hz",
      weight: "1.1 kg",
      hotswap: "Oui",
      rgb: "Per-key RGB",
    },
  },
  {
    name: "Razer Huntsman V3 Pro",
    price: "249€",
    rating: 9.3,
    specs: {
      switch: "Analog Optical",
      format: "Full / TKL",
      connexion: "USB-C / 2.4 GHz",
      actuation: "0.1 – 4.0mm",
      polling: "8000 Hz",
      weight: "1.3 kg",
      hotswap: "Non",
      rgb: "Per-key RGB",
    },
  },
  {
    name: "Keychron Q1 Max",
    price: "149€",
    rating: 9.0,
    specs: {
      switch: "Gateron Jupiter",
      format: "75%",
      connexion: "BT / 2.4 GHz / USB-C",
      actuation: "2.0mm fixe",
      polling: "1000 Hz",
      weight: "1.7 kg",
      hotswap: "Oui",
      rgb: "Per-key RGB",
    },
  },
];

const specLabels = [
  { key: "switch", label: "Type de Switch" },
  { key: "format", label: "Format" },
  { key: "connexion", label: "Connectivité" },
  { key: "actuation", label: "Actuation Point" },
  { key: "polling", label: "Polling Rate" },
  { key: "weight", label: "Poids" },
  { key: "hotswap", label: "Hot-Swap" },
  { key: "rgb", label: "Éclairage" },
];

const radarProducts: RadarProduct[] = [
  {
    name: "Wooting 80HE",
    color: "hsl(180, 100%, 50%)",
    scores: { Performance: 9.8, "Build Quality": 9.2, Son: 9.0, Fonctionnalités: 8.5, "Rapport Q/P": 8.8, Logiciel: 8.0 },
  },
  {
    name: "Razer Huntsman V3 Pro",
    color: "hsl(280, 80%, 55%)",
    scores: { Performance: 9.5, "Build Quality": 9.5, Son: 8.5, Fonctionnalités: 9.3, "Rapport Q/P": 7.5, Logiciel: 9.0 },
  },
  {
    name: "Keychron Q1 Max",
    color: "hsl(45, 90%, 55%)",
    scores: { Performance: 8.2, "Build Quality": 9.3, Son: 9.5, Fonctionnalités: 8.8, "Rapport Q/P": 9.5, Logiciel: 7.5 },
  },
];

const radarDimensions = ["Performance", "Build Quality", "Son", "Fonctionnalités", "Rapport Q/P", "Logiciel"];

const verdicts = [
  {
    name: "Wooting 80HE",
    rating: 9.6,
    pros: ["Actuation ajustable 0.1mm + Rapid Trigger", "Build quality CNC aluminium premium"],
    cons: ["Pas de sans-fil", "Disponibilité limitée"],
    bestFor: "Joueurs compétitifs FPS",
  },
  {
    name: "Razer Huntsman V3 Pro",
    rating: 9.3,
    pros: ["8000 Hz polling rate record", "Écosystème Synapse complet"],
    cons: ["Prix élevé (249€+)", "Pas de hot-swap"],
    bestFor: "Gamers exigeants, streamers",
  },
  {
    name: "Keychron Q1 Max",
    rating: 9.0,
    pros: ["Triple connectivité (BT/2.4G/USB)", "Gasket mount + hot-swap à 149€"],
    cons: ["Actuation fixe (pas de Rapid Trigger)", "Poids élevé (1.7 kg)"],
    bestFor: "Budget premium, amateurs custom",
  },
];

const Comparison = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Comparatif claviers gaming : lequel choisir ?"
        description="Comparatif détaillé des claviers gaming : switches, latence, format, logiciel et prix. Le tableau complet pour trancher selon votre usage réel."
        type="article"
        canonicalPath="/comparaison/gaming-keyboards"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Comparaison Claviers Gaming 2026",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                name: p.name,
                offers: { "@type": "Offer", price: p.price.replace("\u20ac", ""), priceCurrency: "EUR" },
                review: {
                  "@type": "Review",
                  reviewRating: { "@type": "Rating", ratingValue: String(p.rating), bestRating: "10" },
                  author: { "@type": "Organization", name: "GearHub" },
                },
              },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
              { "@type": "ListItem", position: 3, name: "Comparatif Claviers Gaming", item: `${SITE_URL}/comparaison/gaming-keyboards` },
            ],
          },
        ]}
      />
      <Navbar />
      <main>
        <ComparisonHero
          category="Claviers"
          categoryHref="/guides"
          title="Comparaison Claviers Gaming 2026"
          subtitle="Wooting 80HE vs Razer Huntsman V3 Pro vs Keychron Q1 Max — tableau côte-à-côte, graphique radar et verdict détaillé pour choisir le meilleur clavier gaming."
          productCount={3}
        />

        <ComparisonTable products={products} specLabels={specLabels} />

        <ComparisonRadar products={radarProducts} dimensions={radarDimensions} />

        <ComparisonVerdict
          winner="Wooting 80HE"
          verdicts={verdicts}
          conclusion="Dans cette comparaison directe, le Wooting 80HE s'impose comme le meilleur clavier gaming grâce à sa technologie Hall Effect et son Rapid Trigger imbattables en compétitif. Le Razer Huntsman V3 Pro se distingue par son polling rate 8000 Hz et son écosystème logiciel riche — idéal si vous cherchez le premium absolu. Enfin, le Keychron Q1 Max offre un rapport qualité-prix exceptionnel avec triple connectivité et gasket mount pour seulement 149€. Le choix dépend de votre priorité : performance pure, fonctionnalités premium ou budget maîtrisé."
        />

        <RelatedContent
          items={[
            { type: "guide", title: "Meilleurs Claviers Gaming 2026", description: "Notre sélection complète des 5 meilleurs claviers gaming testés.", href: "/guides/best-gaming-keyboards" },
            { type: "review", title: "Test du Wooting 80HE", description: "Review détaillée du gagnant de notre comparatif — 3 mois d'utilisation.", href: "/reviews/wooting-80he" },
          ]}
        />

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Comparison;
