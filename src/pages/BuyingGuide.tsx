import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuideHero from "@/components/guide/GuideHero";
import GuideSummaryTable, { type SummaryProduct } from "@/components/guide/GuideSummaryTable";
import GuideCriteria, { type Criterion } from "@/components/guide/GuideCriteria";
import GuideProductReview, { type ProductReview } from "@/components/guide/GuideProductReview";
import GuideFAQ, { type FAQItem } from "@/components/guide/GuideFAQ";
import GuideVerdict from "@/components/guide/GuideVerdict";
import Newsletter from "@/components/Newsletter";
import RelatedContent from "@/components/RelatedContent";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import BackToTop from "@/components/BackToTop";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import TableOfContents from "@/components/TableOfContents";
import { Target, Wallet, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

// --- MOCK DATA ---

const summaryProducts: SummaryProduct[] = [
  { rank: 1, name: "Wooting 80HE", highlight: "Meilleur clavier gaming global", rating: 9.6, price: "199€", bestFor: "Compétitif / FPS" },
  { rank: 2, name: "Razer Huntsman V3 Pro", highlight: "Meilleur clavier premium", rating: 9.3, price: "249€", bestFor: "Polyvalent premium" },
  { rank: 3, name: "Corsair K100 RGB", highlight: "Meilleur clavier full-size", rating: 9.1, price: "189€", bestFor: "MMO / Productivité" },
  { rank: 4, name: "Keychron Q1 Max", highlight: "Meilleur rapport qualité-prix", rating: 9.0, price: "149€", bestFor: "Custom / Budget premium" },
  { rank: 5, name: "SteelSeries Apex Pro TKL", highlight: "Meilleur TKL compétitif", rating: 8.9, price: "179€", bestFor: "Esport / Compact" },
];

const criteria: Criterion[] = [
  {
    icon: "⌨️",
    title: "Type de Switch",
    description: "Les switches mécaniques définissent la sensation de frappe. Les switches linéaires (Red) sont fluides et silencieux, les tactiles (Brown) offrent un retour subtil, et les clicky (Blue) produisent un clic audible. Les Hall Effect permettent un actuation point personnalisable.",
    tip: "Pour le gaming FPS, privilégiez les switches linéaires ou Hall Effect avec un actuation point bas (0.1-0.4mm).",
  },
  {
    icon: "📐",
    title: "Format (Taille)",
    description: "Full-size (100%) inclut le pavé numérique, TKL (80%) le supprime pour plus d'espace souris, 75% est compact avec les touches F, et 60% est ultra-minimaliste. Le choix dépend de votre bureau et de vos besoins.",
    tip: "Le TKL (80%) est le sweet spot pour le gaming : assez de touches sans sacrifier l'espace souris.",
  },
  {
    icon: "📡",
    title: "Connectivité",
    description: "Filaire offre zéro latence et aucune batterie à gérer. Le sans-fil 2.4GHz est quasi identique en performance mais offre la liberté. Le Bluetooth est pratique mais peut avoir du lag en jeu.",
    tip: "Le sans-fil 2.4GHz moderne (< 1ms) est indiscernable du filaire — la latence n'est plus un argument.",
  },
  {
    icon: "💡",
    title: "RGB & Build Quality",
    description: "Le RGB per-key permet une personnalisation totale. Le châssis en aluminium offre rigidité et durabilité. La mousse d'amortissement et le gasket mount améliorent le son de frappe.",
    tip: "Un bon son de frappe (thock) dépend plus du mounting style et des matériaux que du prix du clavier.",
  },
];

const productReviews: ProductReview[] = [
  {
    rank: 1, name: "Wooting 80HE", tagline: "Le roi incontesté des claviers compétitifs", rating: 9.6, price: "199€",
    specs: [{ label: "Switch", value: "Hall Effect" }, { label: "Format", value: "TKL (80%)" }, { label: "Connexion", value: "USB-C" }, { label: "Actuation", value: "0.1-4.0mm" }],
    pros: ["Actuation point ajustable de 0.1mm à 4.0mm", "Rapid Trigger pour un reset instantané", "Build quality exceptionnelle (alu CNC)", "Son de frappe satisfaisant stock"],
    cons: ["Pas de sans-fil (USB-C uniquement)", "Disponibilité limitée (souvent en rupture)", "Pas de macro keys dédiées"],
    verdict: "Le Wooting 80HE redéfinit le standard du clavier gaming compétitif. Son actuation ajustable et le Rapid Trigger offrent un avantage mesurable en FPS. Si le compétitif est votre priorité, c'est LE clavier à prendre.",
    bestFor: "Joueurs compétitifs FPS (Valorant, CS2)",
  },
  {
    rank: 2, name: "Razer Huntsman V3 Pro", tagline: "Le premium sans compromis", rating: 9.3, price: "249€",
    specs: [{ label: "Switch", value: "Analog Optical" }, { label: "Format", value: "Full / TKL" }, { label: "Connexion", value: "USB-C / 2.4GHz" }, { label: "Actuation", value: "0.1-4.0mm" }],
    pros: ["Switches analog optiques ultra-rapides", "Build quality premium avec repose-poignet magnétique", "Razer Synapse puissant pour la personnalisation", "Disponible en Full et TKL"],
    cons: ["Prix élevé (249€+)", "Logiciel Synapse parfois lourd", "Repose-poignet en plastique (pas cuir)"],
    verdict: "Le Huntsman V3 Pro combine technologie analog optique et finition premium. C'est le choix idéal si vous voulez un clavier haut de gamme avec un écosystème logiciel complet.",
    bestFor: "Gamers exigeants qui veulent le meilleur en tout",
  },
  {
    rank: 3, name: "Corsair K100 RGB", tagline: "Le mastodonte polyvalent", rating: 9.1, price: "189€",
    specs: [{ label: "Switch", value: "OPX Optical" }, { label: "Format", value: "Full-size" }, { label: "Connexion", value: "USB-C" }, { label: "Extras", value: "iCUE Wheel" }],
    pros: ["iCUE Control Wheel unique et programmable", "Macro keys dédiées (6 touches)", "RGB per-key spectaculaire", "Construction solide cadre aluminium"],
    cons: ["Encombrant (full-size + wheel)", "Pas de sans-fil", "iCUE consomme des ressources"],
    verdict: "Le K100 est le couteau suisse du clavier gaming. Son Control Wheel et ses macros le rendent imbattable pour les MMO et la productivité, mais son format full-size peut gêner en FPS.",
    bestFor: "Joueurs MMO, créateurs de contenu, multitâche",
  },
  {
    rank: 4, name: "Keychron Q1 Max", tagline: "Le meilleur rapport qualité-prix custom", rating: 9.0, price: "149€",
    specs: [{ label: "Switch", value: "Gateron Jupiter" }, { label: "Format", value: "75%" }, { label: "Connexion", value: "Triple (BT/2.4G/USB)" }, { label: "Mount", value: "Gasket" }],
    pros: ["Triple connectivité (Bluetooth + 2.4GHz + USB-C)", "Gasket mount pour un son premium", "Hot-swap pour changer les switches", "Prix agressif pour la qualité offerte"],
    cons: ["Logiciel VIA moins intuitif que les concurrents", "RGB correct sans être exceptionnel", "Poids élevé (1.7kg) — pas portable"],
    verdict: "Le Q1 Max offre une expérience quasi-custom à un prix mass-market. Sa triple connectivité et son gasket mount en font un choix exceptionnel pour qui veut un bon clavier sans se ruiner.",
    bestFor: "Budget conscious gamers, amateurs de custom",
  },
  {
    rank: 5, name: "SteelSeries Apex Pro TKL", tagline: "L'esport dans un format compact", rating: 8.9, price: "179€",
    specs: [{ label: "Switch", value: "OmniPoint 2.0" }, { label: "Format", value: "TKL" }, { label: "Connexion", value: "USB-C" }, { label: "Actuation", value: "0.2-3.8mm" }],
    pros: ["Switches OmniPoint ajustables (0.2-3.8mm)", "Écran OLED intégré (infos, GIF)", "Compact et robuste pour le transport", "Bonne qualité de frappe stock"],
    cons: ["Écran OLED gadget (peu utile en pratique)", "Pas de hot-swap", "Sans-fil uniquement en version Wireless (plus chère)"],
    verdict: "L'Apex Pro TKL est un excellent clavier esport avec des switches ajustables performants. L'écran OLED est un plus marginal, mais le core du produit est solide et fiable.",
    bestFor: "Esport, LAN parties, joueurs en déplacement",
  },
];

const faqItems: FAQItem[] = [
  { question: "Quelle est la différence entre un switch mécanique et un switch optique ?", answer: "Un switch mécanique utilise un contact physique en métal pour enregistrer la frappe, ce qui peut s'user avec le temps. Un switch optique utilise un faisceau lumineux, offrant une durabilité supérieure (100M+ frappes) et un temps de réponse théoriquement plus rapide. En pratique, la différence de vitesse est négligeable pour la plupart des joueurs." },
  { question: "Le sans-fil a-t-il du lag pour le gaming ?", answer: "Non, les technologies sans-fil 2.4GHz modernes (Razer HyperSpeed, Logitech Lightspeed, etc.) offrent une latence inférieure à 1ms, identique au filaire. Le Bluetooth en revanche peut avoir 5-15ms de latence et n'est pas recommandé pour le gaming compétitif." },
  { question: "Quel format de clavier choisir pour le gaming FPS ?", answer: "Le TKL (80%) est le format le plus populaire en FPS car il libère de l'espace pour les mouvements amples de souris tout en conservant les touches de fonction. Le 75% est un bon compromis si vous voulez encore plus compact. Évitez le full-size si vous avez une sensibilité souris basse." },
  { question: "Les claviers Hall Effect valent-ils leur prix ?", answer: "Oui, si vous jouez en compétitif. L'actuation point ajustable (0.1mm) et le Rapid Trigger offrent un avantage réel en FPS en permettant des strafes plus rapides. Pour du gaming casual ou de la productivité, un bon mécanique classique reste suffisant et souvent moins cher." },
  { question: "Faut-il investir dans un repose-poignet ?", answer: "Un repose-poignet ergonomique est fortement recommandé pour les sessions longues (3h+). Il réduit la pression sur le canal carpien et améliore le confort. Privilégiez les modèles en mousse à mémoire de forme ou en gel, pas en plastique dur." },
  { question: "Comment entretenir son clavier mécanique ?", answer: "Dépoussiérez régulièrement avec de l'air comprimé, retirez les keycaps tous les 3-6 mois pour un nettoyage en profondeur (eau tiède + savon), et lubrifiez les switches si nécessaire (tous les 1-2 ans). Un clavier bien entretenu peut durer 10+ ans." },
];

const BuyingGuide = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Meilleurs claviers gaming 2026 : comparatif"
        description="Quel clavier gaming choisir en 2026 ? Mécanique, Hall Effect, format TKL ou 60 % : notre sélection testée, avec les modèles à éviter et pourquoi."
        type="article"
        canonicalPath="/guides/best-gaming-keyboards"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Meilleurs Claviers Gaming 2026",
          author: { "@type": "Organization", name: "GearHub" },
          datePublished: "2026-02-05",
          dateModified: "2026-02-05",
          description: "Notre sélection des 5 meilleurs claviers gaming testés et comparés.",
        }}
      />
      <Navbar />
      <Breadcrumbs items={[
        { label: t("ui.guides"), href: "/guides" },
        { label: t("cats.keyboards"), href: "/guides/best-gaming-keyboards" },
        { label: "Meilleurs Claviers Gaming 2026" },
      ]} />
      <main>
        <AffiliateDisclosure />
        <TableOfContents items={[
          { id: "hero", label: t("ui.tocIntroduction") },
          { id: "top-picks", label: t("ui.tocTopTable") },
          { id: "criteres", label: t("ui.tocCriteria") },
          { id: "reviews", label: t("ui.tocDetailedReviews") },
          { id: "verdict", label: t("ui.tocFinalVerdict") },
          { id: "faq", label: t("ui.faqShort") },
        ]} />
        <div id="hero">
          <GuideHero
            category={t("cats.keyboards")}
            categoryHref="/guides"
            title="Meilleurs Claviers Gaming 2026"
            subtitle="Notre sélection des 12 meilleurs claviers mécaniques et Hall Effect testés et comparés. Du budget au premium, trouvez le clavier parfait pour votre style de jeu — guides complets, avis honnêtes et tableaux comparatifs."
            author="Équipe GearHub"
            date="5 Février 2026"
            readTime={t("featured.readTime", { time: "15 min" })}
            updatedDate="Février 2026"
          />
        </div>

        <div id="top-picks">
          <GuideSummaryTable products={summaryProducts} />
        </div>
        <div id="criteres">
          <GuideCriteria criteria={criteria} />
        </div>

        <section id="reviews" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-bold mb-8">
                {t("ui.detailedReviews_1")} <span className="gradient-neon-text">{t("ui.detailedReviews_2")}</span>
              </h2>
              <div className="space-y-6">
                {productReviews.map((product) => (
                  <GuideProductReview key={product.rank} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div id="verdict">
          <GuideVerdict
            picks={[
              { icon: <Target className="h-8 w-8" />, label: "Meilleur Global", productName: "Wooting 80HE", reason: "Imbattable en compétitif avec son actuation ajustable et Rapid Trigger." },
              { icon: <Wallet className="h-8 w-8" />, label: "Meilleur Rapport Q/P", productName: "Keychron Q1 Max", reason: "Triple connectivité, gasket mount et hot-swap pour seulement 149€." },
              { icon: <Zap className="h-8 w-8" />, label: "Meilleur Premium", productName: "Razer Huntsman V3 Pro", reason: "Le nec plus ultra en finition et technologie, pour les joueurs exigeants." },
            ]}
            conclusion="Le marché des claviers gaming en 2026 est dominé par la technologie Hall Effect, qui offre un avantage compétitif mesurable. Le Wooting 80HE reste notre recommandation #1 pour les joueurs sérieux. Pour un budget plus serré, le Keychron Q1 Max offre un rapport qualité-prix imbattable. Et si vous voulez le premium absolu, le Razer Huntsman V3 Pro ne déçoit pas. Quel que soit votre choix, investir dans un bon clavier gaming transformera votre expérience de jeu."
          />
        </div>

        <div id="faq">
          <GuideFAQ items={faqItems} />
        </div>

        <RelatedContent
          items={[
            { type: "review", title: "Test du Wooting 80HE", description: "Review complète après 3 mois — note 9.6/10, le meilleur clavier gaming.", href: "/reviews/wooting-80he" },
            { type: "comparison", title: "Wooting vs Razer vs Keychron", description: "Comparaison côte-à-côte avec graphique radar et verdict détaillé.", href: "/comparaison/gaming-keyboards" },
          ]}
        />

        <Newsletter />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default BuyingGuide;
