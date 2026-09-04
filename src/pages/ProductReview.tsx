import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ReviewHero from "@/components/review/ReviewHero";
import ReviewRatings, { type SubRating } from "@/components/review/ReviewRatings";
import ReviewProsCons from "@/components/review/ReviewProsCons";
import ReviewSpecs, { type SpecGroup } from "@/components/review/ReviewSpecs";
import ReviewGallery from "@/components/review/ReviewGallery";
import ReviewVerdict from "@/components/review/ReviewVerdict";
import RelatedContent, { type RelatedItem } from "@/components/RelatedContent";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import BackToTop from "@/components/BackToTop";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import TableOfContents from "@/components/TableOfContents";
import { useTranslation } from "react-i18next";

// --- MOCK DATA ---

const subRatings: SubRating[] = [
  { label: "Performance", score: 9.8 },
  { label: "Build Quality", score: 9.2 },
  { label: "Son de frappe", score: 9.0 },
  { label: "Fonctionnalités", score: 8.5 },
  { label: "Logiciel", score: 8.0 },
  { label: "Rapport Q/P", score: 8.8 },
];

const pros = [
  "Actuation point ajustable de 0.1mm à 4.0mm — précision inégalée",
  "Rapid Trigger pour un reset instantané des touches",
  "Build quality exceptionnelle avec châssis aluminium CNC",
  "Son de frappe satisfaisant dès la sortie de boîte (thock profond)",
  "Firmware open-source et communauté active",
  "PCB hot-swap pour changer de switches facilement",
];

const cons = [
  "Pas de connectivité sans-fil (USB-C uniquement)",
  "Disponibilité souvent limitée (ruptures de stock fréquentes)",
  "Pas de macro keys dédiées pour les joueurs MMO",
  "Repose-poignet non inclus (vendu séparément)",
];

const specGroups: SpecGroup[] = [
  {
    groupName: "Switches & Frappe",
    specs: [
      { label: "Type de switch", value: "Hall Effect (magnétique)" },
      { label: "Actuation point", value: "0.1mm – 4.0mm (ajustable)" },
      { label: "Force d'actuation", value: "30g – 45g" },
      { label: "Rapid Trigger", value: "Oui (0.1mm reset)" },
      { label: "Durée de vie", value: "100M+ frappes" },
    ],
  },
  {
    groupName: "Design & Construction",
    specs: [
      { label: "Format", value: "TKL (80%)" },
      { label: "Matériau châssis", value: "Aluminium CNC" },
      { label: "Keycaps", value: "PBT double-shot" },
      { label: "Poids", value: "1.1 kg" },
      { label: "Dimensions", value: "356 × 133 × 37 mm" },
    ],
  },
  {
    groupName: "Connectivité",
    specs: [
      { label: "Interface", value: "USB-C détachable" },
      { label: "Polling rate", value: "1000 Hz" },
      { label: "Câble", value: "USB-C tressé (1.8m)" },
      { label: "Sans-fil", value: "Non" },
    ],
  },
  {
    groupName: "Éclairage & Logiciel",
    specs: [
      { label: "RGB", value: "Per-key RGB (16.8M couleurs)" },
      { label: "Logiciel", value: "Wootility (open-source)" },
      { label: "Profils", value: "4 profils embarqués" },
      { label: "Compatibilité", value: "Windows / macOS / Linux" },
    ],
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&h=500&fit=crop", alt: "Wooting 80HE - Vue d'ensemble du clavier gaming Hall Effect" },
  { src: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=500&fit=crop", alt: "Wooting 80HE - Éclairage RGB per-key en action" },
  { src: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=500&fit=crop", alt: "Wooting 80HE - Vue latérale châssis aluminium CNC" },
  { src: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&h=500&fit=crop", alt: "Wooting 80HE - Détail keycaps PBT double-shot" },
];

const ProductReview = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Test Wooting 80HE : le Hall Effect à la loupe"
        description="Notre test complet du Wooting 80HE : actuation réglable, rapid trigger, latence mesurée, qualité de fabrication et pour qui ce clavier vaut son prix."
        canonicalPath="/reviews/wooting-80he"
        type="article"
        image="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=1200&h=630&fit=crop"
        schema={{
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "Product",
            name: "Wooting 80HE",
            brand: { "@type": "Brand", name: "Wooting" },
            category: "Clavier Gaming",
          },
          reviewRating: { "@type": "Rating", ratingValue: "9.6", bestRating: "10" },
          author: { "@type": "Organization", name: "Highends Store" },
          datePublished: "2026-02-03",
        }}
      />
      <Navbar />
      <Breadcrumbs items={[
        { label: t("ui.reviews"), href: "/guides" },
        { label: t("cats.keyboards"), href: "/guides/best-gaming-keyboards" },
        { label: "Wooting 80HE" },
      ]} />
      <main>
        <AffiliateDisclosure />
        <TableOfContents items={[
          { id: "review-hero", label: t("ui.tocIntroduction") },
          { id: "review-ratings", label: t("ui.tocRatings") },
          { id: "review-gallery", label: t("ui.tocGallery") },
          { id: "review-proscons", label: t("ui.tocProsCons") },
          { id: "review-specs", label: t("ui.tocSpecs") },
          { id: "review-verdict", label: t("ui.verdict") },
        ]} />
        <div id="review-hero">
          <ReviewHero
            category={t("cats.keyboards")}
            categoryHref="/guides"
            productName="Wooting 80HE"
            tagline="Le clavier Hall Effect qui redéfinit le standard du gaming compétitif. Actuation ajustable de 0.1mm, Rapid Trigger, et build quality premium — notre test complet après 3 mois d'utilisation intensive."
            rating={9.6}
            author="Équipe Highends Store"
            date="3 Février 2026"
            readTime={t("featured.readTime", { time: "12 min" })}
            updatedDate="Février 2026"
          />
        </div>

        <div id="review-ratings">
          <ReviewRatings overallScore={9.6} subRatings={subRatings} />
        </div>
        <div id="review-gallery">
          <ReviewGallery images={galleryImages} />
        </div>
        <div id="review-proscons">
          <ReviewProsCons pros={pros} cons={cons} />
        </div>
        <div id="review-specs">
          <ReviewSpecs specGroups={specGroups} />
        </div>

        <div id="review-verdict">
          <ReviewVerdict
            rating={9.6}

            verdict="Le Wooting 80HE est tout simplement le meilleur clavier gaming que nous ayons testé en 2026. Sa technologie Hall Effect avec actuation ajustable de 0.1mm et Rapid Trigger offre un avantage compétitif mesurable en FPS. La build quality en aluminium CNC, le son de frappe satisfaisant stock et le firmware open-source en font un investissement durable. Si vous êtes un joueur compétitif sérieux et que le filaire ne vous dérange pas, c'est LE clavier à prendre — sans hésiter."
            bestFor="Joueurs compétitifs FPS (Valorant, CS2, Apex)"
          />
        </div>

        <RelatedContent
          items={[
            { type: "guide", title: "Meilleurs Claviers Gaming 2026", description: "Notre top 5 des claviers mécaniques et Hall Effect testés et comparés.", href: "/guides/best-gaming-keyboards" },
            { type: "comparison", title: "Wooting 80HE vs Razer vs Keychron", description: "Tableau comparatif, radar et verdict détaillé de 3 claviers phares.", href: "/comparaison/gaming-keyboards" },
          ]}
        />

        <Newsletter />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default ProductReview;
