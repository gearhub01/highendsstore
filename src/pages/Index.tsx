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
        title="Highends Store — Périphériques gaming et setup PC testés"
        appendSiteName={false}
        description="Tests indépendants et guides d'achat : claviers, souris, casques et moniteurs gaming, plus les accessoires qui complètent un setup PC en 2026."
        type="website"
        canonicalPath="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Highends Store",
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
