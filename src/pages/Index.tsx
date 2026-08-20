import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedGuides from "@/components/FeaturedGuides";
import BestPicks from "@/components/BestPicks";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Guides d'Achat & Reviews Périphériques Gaming"
        description="Tests indépendants, comparaisons et guides d'achat des meilleurs claviers, souris, casques et moniteurs gaming. Avis honnêtes par des gamers."
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "GearHub",
          url: "https://highendsstore.lovable.app",
          description: "Guides d'achat et reviews de périphériques gaming",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://highendsstore.lovable.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedGuides />
        <BestPicks />
        <Newsletter />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Index;
